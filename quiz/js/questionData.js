const QUESTION_DATA = {
    prefixes: {
        category: "prefixes",
        description: "Common medical prefixes that modify the meaning of terms",
        questions: [
            {
                id: "prefix-001",
                term: "Hyper-",
                question: "What does the prefix 'Hyper-' mean?",
                options: [
                    {text: "Over / excessive / high", correct: true},
                    {text: "Under / below normal / low", correct: false},
                    {text: "Fast", correct: false},
                    {text: "Slow", correct: false}
                ],
                explanation: "Hyper- indicates excessive or above normal levels, as in hypertension (high blood pressure)"
            },
            {
                id: "prefix-002",
                term: "Hypo-",
                question: "If a patient has 'hypoglycemia,' what does the 'hypo-' prefix tell you about their blood sugar?",
                options: [
                    {text: "It's too high", correct: false},
                    {text: "It's too low", correct: true},
                    {text: "It's normal", correct: false},
                    {text: "It's fluctuating", correct: false}
                ],
                explanation: "Hypo- means under or below normal, so hypoglycemia indicates low blood sugar"
            },
            {
                id: "prefix-003",
                term: "Tachy-",
                question: "What does 'tachycardia' mean based on the prefix 'tachy-'?",
                options: [
                    {text: "Slow heart rate", correct: false},
                    {text: "Fast heart rate", correct: true},
                    {text: "Irregular heart rate", correct: false},
                    {text: "Normal heart rate", correct: false}
                ],
                explanation: "Tachy- means fast, so tachycardia indicates a fast heart rate"
            },
            {
                id: "prefix-004",
                term: "Dys-",
                question: "In medical terminology, what does 'dys-' typically indicate?",
                options: [
                    {text: "Normal function", correct: false},
                    {text: "Enhanced function", correct: false},
                    {text: "Abnormal / difficult / impaired", correct: true},
                    {text: "Complete absence", correct: false}
                ],
                explanation: "Dys- indicates abnormal, difficult, or impaired functioning"
            },
            {
                id: "prefix-005",
                term: "Brady-",
                question: "If a claim shows 'bradyarrhythmia,' what does 'brady-' tell you about the heart rhythm?",
                options: [
                    {text: "It's too fast", correct: false},
                    {text: "It's too slow", correct: true},
                    {text: "It's irregular", correct: false},
                    {text: "It's normal", correct: false}
                ],
                explanation: "Brady- means slow, so bradyarrhythmia indicates a slow heart rhythm"
            }
        ]
    },
    suffixes: {
        category: "suffixes",
        description: "Common medical suffixes that modify the meaning of terms",
        questions: [
            {
                id: "suffix-001",
                term: "-itis",
                question: "What does the suffix '-itis' mean?",
                options: [
                    {text: "Inflammation", correct: true},
                    {text: "Surgical removal", correct: false},
                    {text: "Pain", correct: false},
                    {text: "Blood condition", correct: false}
                ],
                explanation: "-itis indicates inflammation of a body part or tissue"
            },
            {
                id: "suffix-002",
                term: "-ectomy",
                question: "If a patient had a 'cholecystectomy,' what does the '-ectomy' suffix tell you happened?",
                options: [
                    {text: "Inflammation of the gallbladder", correct: false},
                    {text: "Surgical removal of the gallbladder", correct: true},
                    {text: "Pain in the gallbladder", correct: false},
                    {text: "Study of the gallbladder", correct: false}
                ],
                explanation: "-ectomy means surgical removal, so cholecystectomy is the removal of the gallbladder"
            },
            {
                id: "suffix-003",
                term: "-algia",
                question: "What does 'neuralgia' mean based on the suffix '-algia'?",
                options: [
                    {text: "Nerve inflammation", correct: false},
                    {text: "Nerve pain", correct: true},
                    {text: "Nerve removal", correct: false},
                    {text: "Nerve study", correct: false}
                ],
                explanation: "-algia means pain, so neuralgia indicates nerve pain"
            },
            {
                id: "suffix-004",
                term: "-emia",
                question: "If a patient has 'anemia,' what does the '-emia' suffix indicate?",
                options: [
                    {text: "A condition of the skin", correct: false},
                    {text: "A condition of the heart", correct: false},
                    {text: "A blood condition", correct: true},
                    {text: "A bone condition", correct: false}
                ],
                explanation: "-emia refers to a blood condition"
            },
            {
                id: "suffix-005",
                term: "-logy",
                question: "What medical specialty would study diseases of the skin, based on the suffix '-logy'?",
                options: [
                    {text: "Dermatitis", correct: false},
                    {text: "Dermatology", correct: true},
                    {text: "Dermatectomy", correct: false},
                    {text: "Dermatemia", correct: false}
                ],
                explanation: "-logy means the study of, so dermatology is the study of skin"
            }
        ]
    }
};
