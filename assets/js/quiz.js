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
    
    // Load and shuffle questions from selected categories
    let questions = categories.flatMap(category => 
        QUESTION_DATA[category]?.questions || []
    );
    
    // Fisher-Yates shuffle algorithm
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }
    
    if (questions.length === 0) {
        quizContainer.innerHTML = '<p>No questions available for selected categories.</p>';
        return;
    }
    
    // Initialize quiz state
    let currentQuestionIndex = 0;
    let score = 0;
    // Track scores per category
    let categoryScores = categories.reduce((acc, category) => {
        acc[category] = { correct: 0, total: 0 };
        return acc;
    }, {});
    
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
            <button class="next-btn" disabled>
                ${currentQuestionIndex < questions.length - 1 ? 'Next Question →' : 'See Results →'}
            </button>
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
                
                // Show feedback and button
                const feedback = questionElement.querySelector('.feedback');
                feedback.style.display = 'block';
                feedback.textContent = question.explanation;
                feedback.className = `feedback ${isCorrect ? 'correct' : 'incorrect'}`;
                
                // Update scores
                if (isCorrect) {
                    score++;
                    // Fix: questions don't have category property, need to find it
                    const questionCategory = categories.find(cat => 
                        QUESTION_DATA[cat]?.questions.some(q => q.id === question.id)
                    );
                    if (questionCategory && categoryScores[questionCategory]) {
                        categoryScores[questionCategory].correct++;
                    }
                }
                
                // Find question category for total count
                const questionCategory = categories.find(cat => 
                    QUESTION_DATA[cat]?.questions.some(q => q.id === question.id)
                );
                if (questionCategory && categoryScores[questionCategory]) {
                    categoryScores[questionCategory].total++;
                }
                
                // Enable the next button and make it green
                const nextButton = questionElement.querySelector('.next-btn');
                console.log('Found next button:', nextButton); // Debug
                if (nextButton) {
                    console.log('Button disabled before:', nextButton.disabled); // Debug
                    nextButton.disabled = false;
                    console.log('Button disabled after:', nextButton.disabled); // Debug
                } else {
                    console.error('Next button not found!');
                }
                
                // Add click handler if not already added
                if (!nextButton.hasClickHandler) {
                    nextButton.addEventListener('click', () => {
                        if (currentQuestionIndex < questions.length - 1) {
                            currentQuestionIndex++;
                            displayQuestion();
        } else {
                            showResults();
                        }
                    });
                    nextButton.hasClickHandler = true;
                }
            });
        });
    }

    function showResults() {
        const percentage = (score / questions.length) * 100;
        const categoryResults = Object.entries(categoryScores)
            .map(([category, scores]) => {
                const categoryPercentage = (scores.correct / scores.total * 100).toFixed(1);
                const categoryName = QUESTION_DATA[category].description;
                return `<div class="category-score">
                    <span>${categoryName}:</span> 
                    <span>${scores.correct}/${scores.total} (${categoryPercentage}%)</span>
                </div>`;
            })
            .join('');

        quizContainer.innerHTML = `
            <div class="results">
                <h2>Quiz Complete!</h2>
                <p class="total-score">Overall Score: ${score} out of ${questions.length} (${percentage.toFixed(1)}%)</p>
                <div class="category-scores">
                    <h3>Scores by Category:</h3>
                    ${categoryResults}
                </div>
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