# Open-Vocabulary Approach to Personality

**Priority:** P5
**Category:** Computational / NLP methodology
**Status:** Active research method (not a questionnaire)

---

## Overview

The open-vocabulary approach is a computational text analysis method that predicts personality traits from natural language use without relying on predefined word categories or dictionaries. Introduced by H. Andrew Schwartz and colleagues in 2013, it contrasts with "closed-vocabulary" approaches (e.g., LIWC) that count words from fixed, researcher-defined categories. Instead, the open-vocabulary method lets the data determine which words, phrases, and topics are most predictive of personality, gender, age, and other individual differences.

## Key Citation

- Schwartz, H. A., Eichstaedt, J. C., Kern, M. L., Dziurzynski, L., Ramones, S. M., Agrawal, M., ... & Ungar, L. H. (2013). Personality, gender, and age in the language of social media: The open-vocabulary approach. *PLoS ONE, 8*(9), e73791.
- Park, G., Schwartz, H. A., Eichstaedt, J. C., Kern, M. L., Kosinski, M., Stillwell, D. J., ... & Seligman, M. E. P. (2015). Automatic personality assessment through social media language. *Journal of Personality and Social Psychology, 108*(6), 934-952.
- Pennebaker, J. W., Boyd, R. L., Jordan, K., & Blackburn, K. (2015). *The Development and Psychometric Properties of LIWC2015*. University of Texas at Austin. (The closed-vocabulary baseline.)

## Core Concept

### Closed-Vocabulary vs. Open-Vocabulary

**Closed-vocabulary (e.g., LIWC):**
- Uses predefined word lists (dictionaries) organized into categories (e.g., "positive emotion words," "cognitive process words")
- Counts how often a person uses words from each category
- Categories are theory-driven and researcher-defined
- Cannot discover unexpected linguistic markers

**Open-vocabulary:**
- Extracts features directly from text: individual words, n-grams (multi-word phrases), and topics (from Latent Dirichlet Allocation)
- Uses machine learning (typically ridge regression or differential language analysis) to find which features predict personality
- Can discover non-obvious predictors that no researcher would have included in a dictionary
- Data-driven rather than theory-driven

### The 2013 Study

- Analyzed 700 million words from Facebook status updates
- 75,000 volunteers who completed Big Five personality questionnaires via the myPersonality app
- Extracted single words, two-word and three-word phrases, and 2,000 LDA topics
- Used differential language analysis (DLA) to identify language features most correlated with each trait, gender, and age

## Key Findings

### Language Markers of Big Five Traits

| Trait | Characteristic Language | Example Words/Phrases |
|-------|------------------------|----------------------|
| **Openness** | Complex, abstract, intellectual language | "universe," "poetry," "dream," existential topics |
| **Conscientiousness** | Structured, goal-oriented, organized language | "workout," "blessed," "productive," gratitude expressions |
| **Extraversion** | Social, enthusiastic, party-related language | "party," "can't wait," "love you," social event references |
| **Agreeableness** | Warm, positive, interpersonal language | "wonderful," "family," "grateful," "prayers" |
| **Neuroticism** | Negative emotion, self-focused language | "sick of," "depressed," "lonely," "hate," profanity |

### Methodological Innovations
- **Word clouds:** Visualizations of words and phrases sized by correlation strength, positioned by trait
- **Topic-based analysis:** LDA topics capture thematic patterns beyond individual words
- **Demographic controls:** Can separate personality effects from age and gender confounds
- **Prediction accuracy:** Open-vocabulary consistently outperforms closed-vocabulary for personality prediction (r ~ .30-.35 vs. r ~ .15-.20)

## How It Relates to Personality Assessment

1. **Language as a behavioral trace:** People's word choices reflect their personality; this method captures those reflections systematically
2. **Complements questionnaires:** Language-based assessment can validate or supplement self-report measures
3. **Unobtrusive assessment:** Can assess personality from existing text (social media, emails, essays) without administering a test
4. **Discovery tool:** Reveals unexpected linguistic correlates of personality that inform theory
5. **Foundation for applied NLP personality systems:** Underlies many commercial and research tools that predict personality from text

## Methodological Details

### Feature Extraction
- **Unigrams:** Single words (typically the top 10,000-50,000 most frequent)
- **N-grams:** Bigrams and trigrams (two- and three-word phrases)
- **LDA topics:** Clusters of co-occurring words representing themes (e.g., "sports," "existential anxiety")
- **All features normalized** by total word count per person

### Prediction Models
- Ridge regression (L2-regularized linear regression) is the most common
- Also: LASSO, elastic net, random forest, neural networks in later work
- 10-fold cross-validation standard for reporting accuracy
- Prediction accuracy reported as Pearson r between predicted and self-reported scores

### Differential Language Analysis (DLA)
- Not a prediction method but a descriptive/visualization technique
- Correlates each language feature with the outcome variable
- Selects features exceeding a significance threshold (Bonferroni-corrected)
- Produces interpretable word clouds and topic summaries

## Strengths

- Discovers linguistic markers that closed-vocabulary approaches miss
- Higher prediction accuracy than LIWC-based approaches for personality
- Rich, interpretable visualizations of personality-language relationships
- Applicable to any text corpus (social media, essays, clinical transcripts, etc.)
- Open-source tools available (DLATK: Differential Language Analysis Toolkit)

## Limitations

- **Requires large text samples:** Need substantial writing per person (1,000+ words recommended)
- **Training data dependency:** Models trained on Facebook may not generalize to other text genres (email, clinical notes, formal writing)
- **Language and culture specificity:** Models trained on English may not transfer to other languages
- **Correlation, not causation:** Language patterns correlate with personality but are not personality itself
- **Privacy concerns:** Analyzing personal text raises ethical issues, especially without informed consent
- **Confounds:** Language patterns reflect age, gender, education, and socioeconomic status in addition to personality
- **Not suitable for individual-level decisions:** Prediction accuracy (r ~ .30) is too low for clinical or employment decisions
- **Evolving language:** Models trained on 2013 language may not capture 2024+ language use patterns (slang, emoji, platform changes)

## Access and Tools

- **DLATK (Differential Language Analysis Toolkit):** Open-source Python package (dlatk.wwbp.org)
- **World Well-Being Project (WWBP):** Research group at University of Pennsylvania maintaining tools and datasets (wwbp.org)
- **Pre-trained models:** Some available through WWBP
- **Original data:** myPersonality dataset no longer publicly available
- **Cost:** Tools are free; data collection requires IRB approval and participant consent

## Notes

- The open-vocabulary approach has become a standard method in computational social science and personality psychology
- It shifted the field from manually curated dictionaries toward data-driven discovery
- The method continues to evolve with advances in NLP (transformer models, contextualized embeddings)
- Modern approaches increasingly use pre-trained language models (BERT, GPT) rather than bag-of-words features, but the open-vocabulary principle remains foundational
- Ethical guidelines for computational personality assessment are still being developed
