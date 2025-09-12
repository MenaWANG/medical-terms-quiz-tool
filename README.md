# Medical Terms for Analysts

A personal learning project to build fluency in **medical terminology** with a focus on practical use in the **health insurance industry**.  

As a data scientist, I often analyze hospital, medical, and ancillary claim data. This repo is my structured way to understand the language behind those claims, so I can bridge **clinical concepts** with **data and analytics**.

---

## 🎯 Goals

- Learn how medical words are formed and decoded  
- Understand common terms across body systems and specialties  
- Recognize terminology in hospital/medical claims (ICD, CPT, DRG, etc.)  
- Build a reusable glossary and cheat sheets for future reference  

## 🎮 Interactive Quiz

Test your knowledge with our [interactive medical terminology quiz](https://menawang.github.io/medical-terms-for-analysts)! The quiz includes:
- Multiple choice questions
- Immediate feedback
- Different categories (prefixes, suffixes, etc.)
- Ability to combine categories for comprehensive review

---

## 📚 Learning Areas

This repo is organized into four major areas of learning:

### 1. Foundations & Building Blocks
- Prefixes, suffixes, and root words  
- How to break down complex terms into components  
- Example: *hypertension* = hyper- (high) + -tension (pressure)  

### 2. Body Systems
- Terminology grouped by system (cardiovascular, respiratory, digestive, etc.)  
- Common conditions and procedures for each  
- Links to example claim codes  

### 3. Common Claims & Procedures
- ICD codes (diagnoses)  
- CPT/HCPCS codes (procedures & services)  
- DRG codes (hospital inpatient groupings)  
- Ancillary services (labs, radiology, pharmacy)  

### 4. Insurance & Clinical Context
- How terminology shows up in claims data fields  
- Chronic vs acute conditions in data  
- Applying terms in case studies and real-world scenarios  

---

## 📁 Repository Structure

```
medical-terms-for-analysts/
├── index.html                     # Quiz interface (GitHub Pages)
├── assets/                        # Quiz assets
│   ├── css/                       # Styling
│   │   └── styles.css             # Responsive CSS with mobile-first design
│   └── js/                        # Quiz logic
│       ├── categoryManager.js     # Category structure and management
│       ├── quiz.js                # Core quiz functionality
│       ├── questionLoader.js      # Question loading and processing
│       └── questionData.js        # Structured question bank
├── 1-foundations/                 # Prefixes, suffixes, and root words
│   ├── 1.1-prefix-1.md            # First set of prefixes
│   ├── 1.2-suffix-1.md            # First set of suffixes
│   ├── 1.3-root-1.md              # First set of root words
│   ├── 1.4-prefix-2.md            # Second set of prefixes
│   ├── 1.5-suffix-2.md            # Second set of suffixes
│   └── 1.6-root-2.md              # Second set of root words
├── 2-body-systems/                # Terminology by body system
│   └── 2.1-cardiovascular.md      # Cardiovascular system terms
├── 3-codings-groupings/           # ICD, CPT, DRG codes and procedures
├── 4-insurance-context/           # Insurance and clinical context
├── 5-summary/                     # Learning tracking and summaries
│   ├── daily-lesson-template.md   # Template for structured lessons
│   └── learning-plan-track.md     # Progress tracking
├── .dev/                          # Development guidelines
│   └── contribution-guide.md      # Contribution and formatting rules
├── README.md                      # Project overview
└── LICENSE                        # License file
```

### 🎮 Quiz Interface Structure

The quiz interface now features a hierarchical organization:

```
Quiz Categories
├── 📚 Foundations
│   ├── 📝 Prefixes
│   ├── 📝 Suffixes
│   └── 🔍 Root Words
└── 🏥 Body Systems
    ├── ❤️ Cardiovascular
    ├── 🫁 Respiratory
    ├── 🫀 Digestive
    ├── 🦴 Musculoskeletal
    ├── 🧠 Nervous
    ├── ⚡ Endocrine
    ├── 🚽 Genitourinary
    ├── 🧬 Integumentary
    └── 🔬 Oncology
```

---

## 🤝 Contributing

This is primarily for personal learning, but if you’re also a data/healthcare professional and want to contribute notes or examples, feel free to open a PR!  


