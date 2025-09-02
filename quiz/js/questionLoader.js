class QuestionLoader {
    constructor() {
        this.questions = new Map();
    }

    async loadQuestions(categories) {
        const loadedQuestions = [];
        
        for (const category of categories) {
            if (QUESTION_DATA[category]) {
                const questions = QUESTION_DATA[category].questions;
                this.questions.set(category, questions);
                loadedQuestions.push(...questions);
            }
        }

        return this.shuffleQuestions(loadedQuestions);
    }

    shuffleQuestions(questions) {
        const shuffled = [...questions];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    getQuestionsByCategory(category) {
        return this.questions.get(category) || [];
    }
}