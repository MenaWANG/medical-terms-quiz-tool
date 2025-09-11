// Initialize category manager
const categoryManager = new CategoryManager();

// DOM elements
const categoryContainer = document.getElementById('categoryContainer');
const startButton = document.querySelector('.start-btn');
const quizContainer = document.querySelector('.quiz-container');

// Create and render category buttons
function renderCategories() {
    const structure = categoryManager.getCategoryStructure();
    
    Object.values(structure).forEach(category => {
        // Create main category button
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'quiz-category';
        
        const categoryBtn = document.createElement('button');
        categoryBtn.className = 'category-btn';
        categoryBtn.textContent = category.label;
        categoryBtn.dataset.category = category.id;
        
        // Create subcategories container
        const subcategoriesDiv = document.createElement('div');
        subcategoriesDiv.className = 'subcategories';
        
        // Create subcategory buttons
        category.subcategories.forEach(subcategory => {
            const subcategoryBtn = document.createElement('button');
            subcategoryBtn.className = 'subcategory-btn';
            subcategoryBtn.textContent = subcategory.label;
            subcategoryBtn.dataset.subcategory = subcategory.id;
            subcategoriesDiv.appendChild(subcategoryBtn);
        });
        
        categoryDiv.appendChild(categoryBtn);
        categoryDiv.appendChild(subcategoriesDiv);
        categoryContainer.appendChild(categoryDiv);
    });
}

// Event delegation for category interactions
categoryContainer.addEventListener('click', (e) => {
    // Handle main category button clicks
    if (e.target.matches('.category-btn')) {
        const categoryId = e.target.dataset.category;
        const isExpanded = categoryManager.toggleCategory(categoryId);
        
        // Toggle button and subcategories appearance
        e.target.classList.toggle('category-btn--expanded', isExpanded);
        const subcategories = e.target.nextElementSibling;
        subcategories.classList.toggle('subcategories--expanded', isExpanded);
    }
    
    // Handle subcategory button clicks
    if (e.target.matches('.subcategory-btn')) {
        const subcategoryId = e.target.dataset.subcategory;
        const isSelected = categoryManager.toggleSubcategory(subcategoryId);
        
        // Toggle button appearance
        e.target.classList.toggle('active', isSelected);
        
        // Update start button state
        startButton.disabled = !categoryManager.hasSelectedSubcategories();

        // Find the parent category button and close the dropdown
        const categoryDiv = e.target.closest('.quiz-category');
        const categoryBtn = categoryDiv.querySelector('.category-btn');
        const subcategoriesDiv = e.target.closest('.subcategories');
        
        // Add a small delay to allow the user to see the selection before closing
        setTimeout(() => {
            categoryBtn.classList.remove('category-btn--expanded');
            subcategoriesDiv.classList.remove('subcategories--expanded');
            categoryManager.toggleCategory(categoryBtn.dataset.category);
        }, 200);
    }
});

// Handle start button click
startButton.addEventListener('click', () => {
    const selectedCategories = categoryManager.getSelectedSubcategories();
    if (selectedCategories.length > 0) {
        startQuiz(selectedCategories);
    }
});

// Initialize quiz display
function startQuiz(categories) {
    // Clear previous quiz state
    quizContainer.innerHTML = '';
    quizContainer.classList.add('active');
    
    // Load questions for selected categories
    const questions = categories.flatMap(category => 
        QUESTION_DATA[category]?.questions || []
    );
    
    if (questions.length === 0) {
        quizContainer.innerHTML = '<p>No questions available for selected categories.</p>';
        return;
    }
    
    // Initialize quiz state
    let currentQuestionIndex = 0;
    let score = 0;
    
    function displayQuestion() {
        const question = questions[currentQuestionIndex];
        const questionElement = document.createElement('div');
        questionElement.className = 'question';
        
        questionElement.innerHTML = `
            <h3>${question.question}</h3>
            <div class="options">
                ${question.options.map((option, index) => `
                    <div class="option" data-index="${index}">
                        ${option.text}
                    </div>
                `).join('')}
            </div>
            <div class="feedback" style="display: none;"></div>
        `;
        
        quizContainer.innerHTML = '';
        quizContainer.appendChild(questionElement);
        
        // Add progress indicator
        const progress = document.createElement('div');
        progress.className = 'progress';
        progress.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
        quizContainer.insertBefore(progress, questionElement);
        
        // Handle option clicks
        const options = questionElement.querySelectorAll('.option');
        options.forEach(option => {
            option.addEventListener('click', () => {
                if (option.classList.contains('disabled')) return;
                
                const selectedIndex = parseInt(option.dataset.index);
                const isCorrect = question.options[selectedIndex].correct;
                
                // Disable all options
                options.forEach(opt => opt.classList.add('disabled'));
                
                // Show feedback
                const feedback = questionElement.querySelector('.feedback');
                feedback.style.display = 'block';
                feedback.textContent = question.explanation;
                feedback.className = `feedback ${isCorrect ? 'correct' : 'incorrect'}`;
                
                // Update score
                if (isCorrect) score++;
                
                // Show next button or results
                setTimeout(() => {
                    if (currentQuestionIndex < questions.length - 1) {
                        currentQuestionIndex++;
                        displayQuestion();
                    } else {
                        showResults();
                    }
                }, 1500);
            });
        });
    }
    
    function showResults() {
        const percentage = (score / questions.length) * 100;
        quizContainer.innerHTML = `
            <div class="results">
                <h2>Quiz Complete!</h2>
                <p>You scored ${score} out of ${questions.length} (${percentage.toFixed(1)}%)</p>
                <button class="restart-btn">Try Again</button>
            </div>
        `;
        
        // Handle restart button
        const restartBtn = quizContainer.querySelector('.restart-btn');
        restartBtn.addEventListener('click', () => {
            quizContainer.classList.remove('active');
            categoryManager.selectedSubcategories.clear();
            document.querySelectorAll('.subcategory-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            startButton.disabled = true;
        });
    }
    
    // Start with first question
    displayQuestion();
}

// Initialize the UI
renderCategories();