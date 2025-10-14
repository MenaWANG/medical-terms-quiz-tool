const QUESTION_DATA = {
    cardiovascular: {
        category: "cardiovascular",
        description: "Terms related to the heart and blood vessel system",
        questions: [
            {
                id: "cardio-001",
                term: "Hypertension",
                question: "What is hypertension?",
                options: [
                    {text: "High blood pressure", correct: true},
                    {text: "Low blood pressure", correct: false},
                    {text: "Irregular heartbeat", correct: false},
                    {text: "Fast heart rate", correct: false}
                ],
                explanation: "Hypertension means high blood pressure (hyper = excessive, tension = pressure)"
            },
            {
                id: "cardio-002",
                term: "Myocardial infarction",
                question: "What condition is commonly known as a myocardial infarction?",
                options: [
                    {text: "Heart murmur", correct: false},
                    {text: "Heart attack", correct: true},
                    {text: "Heart inflammation", correct: false},
                    {text: "Irregular heartbeat", correct: false}
                ],
                explanation: "Myocardial infarction is the medical term for a heart attack (death of heart muscle tissue)"
            },
            {
                id: "cardio-003",
                term: "Carditis",
                question: "Based on the suffix '-itis', what does carditis indicate?",
                options: [
                    {text: "Heart removal", correct: false},
                    {text: "Heart inflammation", correct: true},
                    {text: "Heart pain", correct: false},
                    {text: "Heart surgery", correct: false}
                ],
                explanation: "Carditis means inflammation (-itis) of the heart (card-)"
            },
            {
                id: "cardio-004",
                term: "Tachycardia",
                question: "What does tachycardia indicate about a patient's heart rate?",
                options: [
                    {text: "Slow heart rate", correct: false},
                    {text: "Irregular heart rate", correct: false},
                    {text: "Fast heart rate", correct: true},
                    {text: "Normal heart rate", correct: false}
                ],
                explanation: "Tachycardia indicates a fast (tachy-) heart (card-) rate"
            },
            {
                id: "cardio-005",
                term: "Angioplasty",
                question: "What type of procedure is an angioplasty?",
                options: [
                    {text: "Heart valve replacement", correct: false},
                    {text: "Blood vessel surgical repair", correct: true},
                    {text: "Heart rhythm correction", correct: false},
                    {text: "Blood pressure measurement", correct: false}
                ],
                explanation: "Angioplasty is the surgical repair (-plasty) of a blood vessel (angio-)"
            }
        ]
    },
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
                question: "If a medical record shows 'bradyarrhythmia,' what does 'brady-' tell you about the heart rhythm?",
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
            },
            {
                id: "suffix-006",
                term: "-osis",
                question: "What does the suffix '-osis' indicate in the term 'stenosis'?",
                options: [
                    {text: "A surgical procedure", correct: false},
                    {text: "An abnormal condition or state", correct: true},
                    {text: "A type of examination", correct: false},
                    {text: "A form of treatment", correct: false}
                ],
                explanation: "-osis indicates a condition, state, or abnormal increase. Stenosis means an abnormal narrowing condition."
            },
            {
                id: "suffix-007",
                term: "-pathy",
                question: "In the term 'myopathy', what does the suffix '-pathy' tell you about the muscle condition?",
                options: [
                    {text: "Inflammation of muscle", correct: false},
                    {text: "Disease or disorder of muscle", correct: true},
                    {text: "Surgical repair of muscle", correct: false},
                    {text: "Examination of muscle", correct: false}
                ],
                explanation: "-pathy means disease or disorder, so myopathy indicates a disease/disorder of muscle tissue"
            },
            {
                id: "suffix-008",
                term: "-scopy",
                question: "A doctor orders a 'bronchoscopy'. Based on the suffix '-scopy', what type of procedure is this?",
                options: [
                    {text: "Surgical removal of bronchi", correct: false},
                    {text: "Visual examination of bronchi", correct: true},
                    {text: "Treatment of bronchi", correct: false},
                    {text: "X-ray of bronchi", correct: false}
                ],
                explanation: "-scopy means visual examination or viewing, so bronchoscopy is a procedure to look inside the bronchi"
            },
            {
                id: "suffix-009",
                term: "-plasty",
                question: "What type of medical procedure is indicated by the suffix '-plasty' in 'arthroplasty'?",
                options: [
                    {text: "Removal of a joint", correct: false},
                    {text: "Examination of a joint", correct: false},
                    {text: "Surgical repair/reconstruction of a joint", correct: true},
                    {text: "Disease of a joint", correct: false}
                ],
                explanation: "-plasty means surgical repair or formation, so arthroplasty is surgical repair/reconstruction of a joint"
            },
            {
                id: "suffix-010",
                term: "-gram",
                question: "What does an 'electroencephalogram' (EEG) provide, based on the suffix '-gram'?",
                options: [
                    {text: "Treatment of brain activity", correct: false},
                    {text: "Surgical procedure of the brain", correct: false},
                    {text: "Disease of the brain", correct: false},
                    {text: "Record/picture of brain electrical activity", correct: true}
                ],
                explanation: "-gram means record or picture, so an electroencephalogram provides a record of electrical activity in the brain"
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
            },
            {
                id: "root-006",
                term: "Pulmo/Pneumo",
                question: "What organ system does the root 'pulmo' or 'pneumo' refer to?",
                options: [
                    {text: "Heart", correct: false},
                    {text: "Lungs/respiratory system", correct: true},
                    {text: "Liver", correct: false},
                    {text: "Kidneys", correct: false}
                ],
                explanation: "Pulmo/pneumo refers to the lungs and respiratory system"
            },
            {
                id: "root-007",
                term: "Hepato",
                question: "In medical terminology, what organ does 'hepato' refer to?",
                options: [
                    {text: "Heart", correct: false},
                    {text: "Lungs", correct: false},
                    {text: "Liver", correct: true},
                    {text: "Kidneys", correct: false}
                ],
                explanation: "Hepato refers to the liver"
            },
            {
                id: "root-008",
                term: "Nephro",
                question: "What organ system is being referenced with the root word 'nephro'?",
                options: [
                    {text: "Liver", correct: false},
                    {text: "Heart", correct: false},
                    {text: "Lungs", correct: false},
                    {text: "Kidneys", correct: true}
                ],
                explanation: "Nephro refers to the kidneys"
            },
            {
                id: "root-009",
                term: "Osteo",
                question: "The root 'osteo' refers to which body structure?",
                options: [
                    {text: "Muscle", correct: false},
                    {text: "Bone", correct: true},
                    {text: "Nerve", correct: false},
                    {text: "Blood", correct: false}
                ],
                explanation: "Osteo refers to bones"
            },
            {
                id: "root-010",
                term: "Myelo",
                question: "What does the root word 'myelo' refer to in medical terms?",
                options: [
                    {text: "Bone marrow/spinal cord", correct: true},
                    {text: "Muscle", correct: false},
                    {text: "Brain", correct: false},
                    {text: "Blood", correct: false}
                ],
                explanation: "Myelo refers to bone marrow or spinal cord"
            }
        ]
    },
    musculoskeletal: {
        category: "musculoskeletal",
        description: "Terms related to bones, muscles, joints, and spine",
        questions: [
            {
                id: "musculo-001",
                term: "Osteoarthritis",
                question: "What does osteoarthritis primarily affect?",
                options: [
                    {text: "Joint cartilage and bones", correct: true},
                    {text: "Heart muscle", correct: false},
                    {text: "Lung tissue", correct: false},
                    {text: "Kidney function", correct: false}
                ],
                explanation: "Osteoarthritis is degenerative joint disease affecting cartilage (osteo = bone, arthr = joint, itis = inflammation)"
            },
            {
                id: "musculo-002",
                term: "Myalgia",
                question: "What symptom does myalgia describe?",
                options: [
                    {text: "Bone fracture", correct: false},
                    {text: "Muscle pain", correct: true},
                    {text: "Joint stiffness", correct: false},
                    {text: "Nerve damage", correct: false}
                ],
                explanation: "Myalgia means muscle pain (my = muscle, algia = pain)"
            },
            {
                id: "musculo-003",
                term: "Cervical spine",
                question: "Where is the cervical spine located?",
                options: [
                    {text: "Lower back", correct: false},
                    {text: "Mid-back", correct: false},
                    {text: "Neck region", correct: true},
                    {text: "Hip area", correct: false}
                ],
                explanation: "Cervical spine refers to the seven vertebrae in the neck region (cervic = neck)"
            },
            {
                id: "musculo-004",
                term: "Lumbar spine",
                question: "Which region does the lumbar spine refer to?",
                options: [
                    {text: "Neck", correct: false},
                    {text: "Lower back", correct: true},
                    {text: "Chest area", correct: false},
                    {text: "Shoulder blade", correct: false}
                ],
                explanation: "Lumbar spine consists of five vertebrae in the lower back region"
            },
            {
                id: "musculo-005",
                term: "Spondylitis",
                question: "What does spondylitis indicate?",
                options: [
                    {text: "Muscle weakness", correct: false},
                    {text: "Vertebrae inflammation", correct: true},
                    {text: "Joint replacement", correct: false},
                    {text: "Bone fracture", correct: false}
                ],
                explanation: "Spondylitis means inflammation of the vertebrae/spine bones (spondyl = vertebra/spine, itis = inflammation)"
            },
            {
                id: "musculo-006",
                term: "Cervicalgia",
                question: "What type of pain does cervicalgia describe?",
                options: [
                    {text: "Back pain", correct: false},
                    {text: "Neck pain", correct: true},
                    {text: "Leg pain", correct: false},
                    {text: "Arm pain", correct: false}
                ],
                explanation: "Cervicalgia means neck pain (cervic = neck, algia = pain)"
            },
            {
                id: "musculo-007",
                term: "Lumbago",
                question: "What condition does lumbago refer to?",
                options: [
                    {text: "Upper back stiffness", correct: false},
                    {text: "Lower back pain", correct: true},
                    {text: "Shoulder pain", correct: false},
                    {text: "Hip arthritis", correct: false}
                ],
                explanation: "Lumbago refers to lower back pain, especially in the lumbar region"
            }
        ]
    },
    digestive: {
        category: "digestive",
        description: "Terms related to the digestive system and gastrointestinal tract",
        questions: [
            {
                id: "digestive-001",
                term: "Gastritis",
                question: "What condition is indicated by gastritis?",
                options: [
                    {text: "Inflammation of the stomach lining", correct: true},
                    {text: "Removal of the stomach", correct: false},
                    {text: "Disease of the intestines", correct: false},
                    {text: "Stomach pain", correct: false}
                ],
                explanation: "Gastritis means inflammation (-itis) of the stomach (gastr-)"
            },
            {
                id: "digestive-002",
                term: "Appendectomy",
                question: "What surgical procedure is an appendectomy?",
                options: [
                    {text: "Removal of the gallbladder", correct: false},
                    {text: "Removal of the appendix", correct: true},
                    {text: "Examination of the appendix", correct: false},
                    {text: "Repair of the appendix", correct: false}
                ],
                explanation: "Appendectomy means surgical removal (-ectomy) of the appendix"
            },
            {
                id: "digestive-003",
                term: "Hepatitis",
                question: "What organ is affected in hepatitis?",
                options: [
                    {text: "Stomach", correct: false},
                    {text: "Intestines", correct: false},
                    {text: "Liver", correct: true},
                    {text: "Gallbladder", correct: false}
                ],
                explanation: "Hepatitis means inflammation (-itis) of the liver (hepat-)"
            },
            {
                id: "digestive-004",
                term: "Cholecystectomy",
                question: "What organ is removed in a cholecystectomy?",
                options: [
                    {text: "Appendix", correct: false},
                    {text: "Liver", correct: false},
                    {text: "Gallbladder", correct: true},
                    {text: "Stomach", correct: false}
                ],
                explanation: "Cholecystectomy means surgical removal (-ectomy) of the gallbladder (cholecyst-)"
            },
            {
                id: "digestive-005",
                term: "Gastropathy",
                question: "What does the term gastropathy indicate?",
                options: [
                    {text: "Stomach inflammation", correct: false},
                    {text: "Stomach removal", correct: false},
                    {text: "Disease/disorder of the stomach", correct: true},
                    {text: "Stomach examination", correct: false}
                ],
                explanation: "Gastropathy means disease or disorder (-pathy) of the stomach (gastro-)"
            },
            {
                id: "digestive-006",
                term: "Gastroenteritis",
                question: "What is commonly referred to as 'gastro'?",
                options: [
                    {text: "Inflammation of the stomach only", correct: false},
                    {text: "Inflammation of the stomach and intestines", correct: true},
                    {text: "Any disease of the stomach", correct: false},
                    {text: "Any disease of the intestines", correct: false}
                ],
                explanation: "Gastroenteritis (commonly called 'gastro') means inflammation of both the stomach (gastro-) and intestines (enter-)"
            },
            {
                id: "digestive-007",
                term: "Gallbladder",
                question: "What is the medical term (using Greek roots) for the gallbladder?",
                options: [
                    {text: "Hepatocyst", correct: false},
                    {text: "Cholecyst", correct: true},
                    {text: "Gastrocyst", correct: false},
                    {text: "Enterocyst", correct: false}
                ],
                explanation: "The medical term for gallbladder is 'cholecyst' (chole = bile/gall, cyst = sac/bladder)"
            }
        ]
    },
    respiratory: {
        category: "respiratory",
        description: "Terms related to the respiratory system and breathing anatomy",
        questions: [
            {
                id: "respiratory-001",
                term: "Bronchi",
                question: "What are the bronchi?",
                options: [
                    {text: "The two main airways that carry air from the trachea into the lungs", correct: true},
                    {text: "The small air sacs where gas exchange occurs", correct: false},
                    {text: "The muscles that control breathing", correct: false},
                    {text: "The membrane surrounding the lungs", correct: false}
                ],
                explanation: "Bronchi are the two main airways that branch from the trachea and carry air into each lung (from Greek 'bronkhos' meaning windpipe)"
            },
            {
                id: "respiratory-002",
                term: "Trachea",
                question: "What is the trachea commonly known as?",
                options: [
                    {text: "Voice box", correct: false},
                    {text: "Windpipe", correct: true},
                    {text: "Breathing tube", correct: false},
                    {text: "Air filter", correct: false}
                ],
                explanation: "The trachea is commonly called the windpipe - it's the main airway connecting the throat to the bronchi (from Greek 'trakheia' meaning rough artery)"
            },
            {
                id: "respiratory-003",
                term: "Pulmonary",
                question: "What does the term 'pulmonary' relate to?",
                options: [
                    {text: "Heart function", correct: false},
                    {text: "Lung function and diseases", correct: true},
                    {text: "Blood circulation", correct: false},
                    {text: "Chest muscles", correct: false}
                ],
                explanation: "Pulmonary relates to or affects the lungs (from Latin 'pulmonarius' meaning of the lungs). Example: pulmonary function tests measure breathing ability"
            },
            {
                id: "respiratory-004",
                term: "Thorax",
                question: "Where is the thorax located?",
                options: [
                    {text: "Abdominal cavity", correct: false},
                    {text: "Chest cavity", correct: true},
                    {text: "Head and neck region", correct: false},
                    {text: "Pelvic region", correct: false}
                ],
                explanation: "The thorax is the chest cavity that contains the heart and lungs, protected by the ribcage (from Greek 'thorax' meaning breastplate)"
            },
            {
                id: "respiratory-005",
                term: "Pleural",
                question: "What does 'pleural' refer to in respiratory anatomy?",
                options: [
                    {text: "The breathing muscles", correct: false},
                    {text: "The membrane that surrounds the lungs", correct: true},
                    {text: "The air passages in the lungs", correct: false},
                    {text: "The chest wall", correct: false}
                ],
                explanation: "Pleural refers to the membrane that surrounds the lungs (from Greek 'pleura' meaning rib, side). The pleural cavity contains fluid that helps lungs move smoothly"
            },
            {
                id: "respiratory-006",
                term: "Membrane",
                question: "In the respiratory system, what is a membrane?",
                options: [
                    {text: "A thick muscle layer", correct: false},
                    {text: "A thin sheet of tissue that covers, lines, or separates structures", correct: true},
                    {text: "A type of blood vessel", correct: false},
                    {text: "A breathing passage", correct: false}
                ],
                explanation: "A membrane is a thin sheet of tissue that covers, lines, or separates structures (from Latin 'membrana' meaning skin, parchment). The respiratory system has several important membranes including the pleural membrane"
            }
        ]
    },
    nervous: {
        category: "nervous",
        description: "Terms related to the nervous system, brain, spinal cord, and nerves",
        questions: [
            {
                id: "nervous-001",
                term: "Neuralgia",
                question: "What does neuralgia describe?",
                options: [
                    {text: "Nerve inflammation", correct: false},
                    {text: "Sharp, shooting nerve pain", correct: true},
                    {text: "Nerve damage", correct: false},
                    {text: "Loss of nerve function", correct: false}
                ],
                explanation: "Neuralgia means sharp, shooting nerve pain (neuro = nerve, algia = pain)"
            },
            {
                id: "nervous-002",
                term: "Neuropathy",
                question: "What condition does neuropathy indicate?",
                options: [
                    {text: "Nerve pain", correct: false},
                    {text: "Disease or dysfunction of nerves", correct: true},
                    {text: "Nerve inflammation", correct: false},
                    {text: "Nerve examination", correct: false}
                ],
                explanation: "Neuropathy means disease or dysfunction of nerves (neuro = nerve, pathy = disease/disorder)"
            },
            {
                id: "nervous-003",
                term: "Myelopathy",
                question: "What does myelopathy affect?",
                options: [
                    {text: "Brain tissue", correct: false},
                    {text: "Peripheral nerves", correct: false},
                    {text: "Spinal cord", correct: true},
                    {text: "Muscle tissue", correct: false}
                ],
                explanation: "Myelopathy is disease of the spinal cord (myelo = spinal cord/bone marrow, pathy = disease)"
            },
            {
                id: "nervous-004",
                term: "Encephalitis",
                question: "What organ is affected by encephalitis?",
                options: [
                    {text: "Spinal cord", correct: false},
                    {text: "Brain", correct: true},
                    {text: "Peripheral nerves", correct: false},
                    {text: "Bone marrow", correct: false}
                ],
                explanation: "Encephalitis is inflammation of the brain (encephalo = brain, itis = inflammation)"
            },
            {
                id: "nervous-005",
                term: "Neuroscopy",
                question: "What type of medical procedure is neuroscopy?",
                options: [
                    {text: "Surgical removal of nerve tissue", correct: false},
                    {text: "Visual examination of nervous tissue", correct: true},
                    {text: "Treatment of nerve disease", correct: false},
                    {text: "X-ray of the nervous system", correct: false}
                ],
                explanation: "Neuroscopy is visual examination of nervous tissue (neuro = nerve, scopy = examination/viewing)"
            }
        ]
    }
};
