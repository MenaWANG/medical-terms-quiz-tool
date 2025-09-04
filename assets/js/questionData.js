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
            },
            {
                id: "prefix-006",
                term: "Peri-",
                question: "What does the prefix 'peri-' mean in medical terms like 'pericardium'?",
                options: [
                    {text: "Within/inside", correct: false},
                    {text: "Around/surrounding", correct: true},
                    {text: "Under/below", correct: false},
                    {text: "Across/through", correct: false}
                ],
                explanation: "Peri- means around or surrounding, so pericardium is the tissue surrounding the heart"
            },
            {
                id: "prefix-007",
                term: "Trans-",
                question: "If a patient receives a 'transfusion,' what does the 'trans-' prefix indicate?",
                options: [
                    {text: "Blood is removed", correct: false},
                    {text: "Blood is transferred across/through", correct: true},
                    {text: "Blood is examined", correct: false},
                    {text: "Blood is filtered", correct: false}
                ],
                explanation: "Trans- means across or through, so transfusion involves transferring blood from one person to another"
            },
            {
                id: "prefix-008",
                term: "Contra-",
                question: "What does 'contraindication' mean in medical context?",
                options: [
                    {text: "A treatment is strongly recommended", correct: false},
                    {text: "A treatment should NOT be used", correct: true},
                    {text: "A treatment needs monitoring", correct: false},
                    {text: "A treatment is experimental", correct: false}
                ],
                explanation: "Contra- means against or opposite, so contraindication means the treatment is against the indication (should not be used)"
            },
            {
                id: "prefix-009",
                term: "Endo-",
                question: "What does an 'endoscopy' procedure involve based on the prefix 'endo-'?",
                options: [
                    {text: "Looking at the outside of the body", correct: false},
                    {text: "Looking inside the body", correct: true},
                    {text: "Looking around the body", correct: false},
                    {text: "Looking under the skin", correct: false}
                ],
                explanation: "Endo- means within or inside, so endoscopy involves looking inside the body with a camera"
            },
            {
                id: "prefix-010",
                term: "Sub-",
                question: "Where is a 'subcutaneous' injection given based on the prefix 'sub-'?",
                options: [
                    {text: "Into a vein", correct: false},
                    {text: "Into a muscle", correct: false},
                    {text: "Under the skin", correct: true},
                    {text: "Around the skin", correct: false}
                ],
                explanation: "Sub- means under or below, so subcutaneous means under the skin (sub- + cutaneous)"
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
    },
    roots: {
        category: "roots",
        description: "Common medical root words that form the base of medical terms",
        questions: [
            {
                id: "root-001",
                term: "Cardio",
                question: "What body system does the root word 'cardio' refer to?",
                options: [
                    {text: "Nervous system", correct: false},
                    {text: "Heart/cardiovascular system", correct: true},
                    {text: "Digestive system", correct: false},
                    {text: "Respiratory system", correct: false}
                ],
                explanation: "Cardio refers to the heart and cardiovascular system"
            },
            {
                id: "root-002",
                term: "Neuro",
                question: "What does the root 'neuro' mean in medical terms?",
                options: [
                    {text: "Heart", correct: false},
                    {text: "Blood", correct: false},
                    {text: "Nerve/nervous system", correct: true},
                    {text: "Muscle", correct: false}
                ],
                explanation: "Neuro refers to nerves or the nervous system"
            },
            {
                id: "root-003",
                term: "Derm",
                question: "The root word 'derm' refers to which body structure?",
                options: [
                    {text: "Heart", correct: false},
                    {text: "Skin", correct: true},
                    {text: "Brain", correct: false},
                    {text: "Bone", correct: false}
                ],
                explanation: "Derm refers to the skin"
            },
            {
                id: "root-004",
                term: "Gastro",
                question: "What system does the root 'gastro' relate to?",
                options: [
                    {text: "Respiratory system", correct: false},
                    {text: "Nervous system", correct: false},
                    {text: "Digestive system", correct: true},
                    {text: "Circulatory system", correct: false}
                ],
                explanation: "Gastro relates to the stomach and digestive system"
            },
            {
                id: "root-005",
                term: "Hemo/Hema",
                question: "What does the root 'hemo' or 'hema' refer to?",
                options: [
                    {text: "Heart", correct: false},
                    {text: "Brain", correct: false},
                    {text: "Blood", correct: true},
                    {text: "Liver", correct: false}
                ],
                explanation: "Hemo/hema refers to blood"
            }
        ]
    }
};
