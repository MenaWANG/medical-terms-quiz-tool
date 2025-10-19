// Category structure definition
const CATEGORY_STRUCTURE = {
    foundations: {
        id: 'foundations',
        label: '📚 Foundations',
        subcategories: [
            { id: 'prefixes', label: '📝 Prefixes' },
            { id: 'suffixes', label: '📝 Suffixes' },
            { id: 'roots', label: '🔍 Root Words' }
        ]
    },
    bodySystems: {
        id: 'bodySystems',
        label: '🤓 Body Systems',
        subcategories: [
            { id: 'cardiovascular', label: '❤️ Cardiovascular' },
            { id: 'musculoskeletal', label: '🦴 Musculoskeletal' },
            { id: 'digestive', label: '🫀 Digestive' },
            { id: 'respiratory', label: '🫁 Respiratory' },
            { id: 'nervous', label: '🧠 Nervous' },
            { id: 'endocrine', label: '⚡ Endocrine' },
            { id: 'genitourinary', label: '🚽 Genitourinary' },
            { id: 'integumentary', label: '🧬 Integumentary' },
            { id: 'oncology', label: '🔬 Oncology' }
        ]
    },
    clinicalApplications: {
        id: 'clinicalApplications',
        label: '🏥 Clinical Applications',
        subcategories: [
            { id: 'medicalProcedures', label: '🩺 Medical Procedures & Treatments' },
            { id: 'healthcareDocumentation', label: '📋 Healthcare Documentation' },
            { id: 'diagnosticLab', label: '🧪 Diagnostic & Laboratory Terms' },
            { id: 'healthcareSettings', label: '🏢 Healthcare Settings & Specialties' },
            { id: 'personalizedCare', label: '🎯 Personalized Care' },
            { id: 'preventativeCare', label: '🛡️ Preventative Care' },
            { id: 'digitalCareAI', label: '🤖 Digital Care & AI' },
            { id: 'healthcareCoding', label: '🏷️ Healthcare Coding Systems' }
        ]
    }
};

class CategoryManager {
    constructor() {
        this.expandedCategories = new Set();
        this.selectedSubcategories = new Set();
    }

    /**
     * Toggle category expansion state
     * @param {string} categoryId - The ID of the category to toggle
     * @returns {boolean} - New expansion state
     */
    toggleCategory(categoryId) {
        if (this.expandedCategories.has(categoryId)) {
            this.expandedCategories.delete(categoryId);
            return false;
        } else {
            this.expandedCategories.add(categoryId);
            return true;
        }
    }

    /**
     * Toggle subcategory selection
     * @param {string} subcategoryId - The ID of the subcategory to toggle
     * @returns {boolean} - New selection state
     */
    toggleSubcategory(subcategoryId) {
        if (this.selectedSubcategories.has(subcategoryId)) {
            this.selectedSubcategories.delete(subcategoryId);
            return false;
        } else {
            this.selectedSubcategories.add(subcategoryId);
            return true;
        }
    }

    /**
     * Get all selected subcategories
     * @returns {string[]} - Array of selected subcategory IDs
     */
    getSelectedSubcategories() {
        return Array.from(this.selectedSubcategories);
    }

    /**
     * Check if any subcategories are selected
     * @returns {boolean}
     */
    hasSelectedSubcategories() {
        return this.selectedSubcategories.size > 0;
    }

    /**
     * Get category structure
     * @returns {Object} - The category structure
     */
    getCategoryStructure() {
        return CATEGORY_STRUCTURE;
    }

    /**
     * Get question count for a subcategory
     * @param {string} subcategoryId - The ID of the subcategory
     * @returns {number} - Number of questions available
     */
    getQuestionCount(subcategoryId) {
        // Check if QUESTION_DATA exists and has questions for this subcategory
        if (typeof QUESTION_DATA !== 'undefined' && 
            QUESTION_DATA[subcategoryId] && 
            QUESTION_DATA[subcategoryId].questions) {
            return QUESTION_DATA[subcategoryId].questions.length;
        }
        return 0;
    }

    /**
     * Check if a subcategory has questions available
     * @param {string} subcategoryId - The ID of the subcategory
     * @returns {boolean} - True if questions are available
     */
    isSubcategoryAvailable(subcategoryId) {
        return this.getQuestionCount(subcategoryId) > 0;
    }
}

// Export for use in other modules
window.CategoryManager = CategoryManager;
