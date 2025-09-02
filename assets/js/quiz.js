class Quiz {
    constructor() {
        this.questionLoader = new QuestionLoader();
        this.currentQuestionIndex = 0;
        this.questions = [];
        this.selectedCategories = new Set();
        
        this.initializeEventListeners();
    }

    initializeEventListeners() {
        document.querySelectorAll('.selector-btn').forEach(button => {
            button.addEventListener('click', (e) => this.toggleCategory(e.target));
        });

        document.querySelector('.start-btn').addEventListener('click', () => this.startQuiz());
    }

    toggleCategory(button) {
        const category = button.getAttribute('data-category');
        
        if (this.selectedCategories.has(category)) {
            this.selectedCategories.delete(category);
            button.classList.remove('active');
        } else {
            this.selectedCategories.add(category);
            button.classList.add('active');
        }

        document.querySelector('.start-btn').disabled = this.selectedCategories.size === 0;
    }

    async startQuiz() {
        this.currentQuestionIndex = 0;
        this.questions = await this.questionLoader.loadQuestions(Array.from(this.selectedCategories));
        
        document.querySelector('.quiz-selector').style.display = 'none';
        this.showQuestion();
    }

    showQuestion() {
        const question = this.questions[this.currentQuestionIndex];
        const quizContainer = document.querySelector('.quiz-container');
        
        quizContainer.innerHTML = this.generateQuestionHTML(question);
        quizContainer.style.display = 'block';
        
        this.setupQuestionHandlers();
    }

    generateQuestionHTML(question) {
        return `
            <div class="progress">Question ${this.currentQuestionIndex + 1} of ${this.questions.length}</div>
            <div class="question">
                <h3>${question.question}</h3>
                <ul class="options">
                    ${question.options.map((option, index) => `
                        <li class="option" data-correct="${option.correct}">${option.text}</li>
                    `).join('')}
                </ul>
                <div class="feedback" style="display: none;"></div>
            </div>
            <button class="next-btn" disabled>Next Question</button>
            <button class="restart-btn">Restart Quiz</button>
        `;
    }

    setupQuestionHandlers() {
        document.querySelectorAll('.option').forEach(option => {
            option.addEventListener('click', () => this.selectOption(option));
        });

        document.querySelector('.next-btn').addEventListener('click', () => this.nextQuestion());
        document.querySelector('.restart-btn').addEventListener('click', () => this.restartQuiz());
    }

    selectOption(option) {
        const isCorrect = option.getAttribute('data-correct') === 'true';
        const options = document.querySelectorAll('.option');
        const feedback = document.querySelector('.feedback');
        const nextBtn = document.querySelector('.next-btn');

        options.forEach(opt => {
            opt.classList.add('disabled');
            if (opt.getAttribute('data-correct') === 'true') {
                opt.classList.add('correct');
            }
        });

        option.classList.add(isCorrect ? 'correct' : 'incorrect');
        
        feedback.textContent = isCorrect ? 
            '✅ Correct! Well done!' : 
            '❌ Incorrect. Try to remember this for next time!';
        feedback.className = `feedback ${isCorrect ? 'correct' : 'incorrect'}`;
        feedback.style.display = 'block';
        
        nextBtn.disabled = false;
    }

    nextQuestion() {
        this.currentQuestionIndex++;
        
        if (this.currentQuestionIndex < this.questions.length) {
            this.showQuestion();
        } else {
            this.showQuizComplete();
        }
    }

    showQuizComplete() {
        const quizContainer = document.querySelector('.quiz-container');
        quizContainer.innerHTML = `
            <h2>🎉 Quiz Complete!</h2>
            <button class="restart-btn">Take Another Quiz</button>
        `;
        
        document.querySelector('.restart-btn').addEventListener('click', () => this.restartQuiz());
    }

    restartQuiz() {
        document.querySelector('.quiz-container').style.display = 'none';
        document.querySelector('.quiz-selector').style.display = 'block';
        this.selectedCategories.clear();
        document.querySelectorAll('.selector-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelector('.start-btn').disabled = true;
    }
}

// Initialize quiz when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Quiz();
});
