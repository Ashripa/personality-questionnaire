# Experience Sampling Method (ESM)

**Priority:** P5
**Category:** Assessment methodology
**Status:** Active, widely used research method (not a questionnaire)

---

## Overview

The Experience Sampling Method (ESM), also known as Ecological Momentary Assessment (EMA), is an intensive longitudinal research methodology in which participants report on their thoughts, feelings, behaviors, and/or environment multiple times per day in their natural settings. Originally developed to study the quality of everyday experience, ESM has become a central method for studying personality dynamics, within-person variability, and the real-time processes underlying personality traits.

## Key Citations

- Csikszentmihalyi, M., & Larson, R. (1987). Validity and reliability of the experience-sampling method. *Journal of Nervous and Mental Disease, 175*(9), 526-536.
- Csikszentmihalyi, M., Larson, R., & Prescott, S. (1977). The ecology of adolescent activity and experience. *Journal of Youth and Adolescence, 6*(3), 281-294.
- Hektner, J. M., Schmidt, J. A., & Csikszentmihalyi, M. (2007). *Experience Sampling Method: Measuring the Quality of Everyday Life*. Sage.
- Conner, T. S., & Lehman, B. J. (2012). Getting started: Launching a study in daily life. In M. R. Mehl & T. S. Conner (Eds.), *Handbook of Research Methods for Studying Daily Life* (pp. 89-107). Guilford Press.
- Fleeson, W. (2001). Toward a structure- and process-integrated view of personality: Traits as density distributions of states. *Journal of Personality and Social Psychology, 80*(6), 1011-1027.

## Core Concept

### The Principle
Instead of asking people to summarize their personality on a one-time questionnaire (a retrospective, global assessment), ESM captures personality as it is lived -- in real time, in real contexts, across many moments. This provides a dynamic portrait of personality that includes:
- Average tendencies (similar to trait scores)
- Within-person variability (how much behavior fluctuates)
- Situational contingencies (when and where behaviors occur)
- Temporal patterns (daily rhythms, weekly cycles)

### Historical Origin
Developed by Suzanne Prescott during doctoral work at the University of Chicago, with guidance from her advisor Mihaly Csikszentmihalyi. The method was initially used to study adolescent experience and later applied to the study of flow, creativity, and optimal experience. Csikszentmihalyi and Reed Larson refined and popularized the method through the 1980s.

## Methodology

### Design Variants

| Design | Description | Use Case |
|--------|-------------|----------|
| **Signal-contingent** | Participants respond when randomly prompted (e.g., 5-10 times/day) | General experience sampling; personality states |
| **Event-contingent** | Participants respond after specific events (e.g., social interactions) | Studying specific behavioral domains |
| **Interval-contingent** | Participants respond at fixed intervals (e.g., every evening) | Daily diary studies; end-of-day summaries |
| **Combination** | Multiple designs combined in one study | Comprehensive assessment |

### Typical Protocol
1. **Duration:** 1-4 weeks (some studies extend to months)
2. **Frequency:** 3-10 signals per day (signal-contingent); 1-2 per day (diary)
3. **Response window:** 15-30 minutes after signal (to ensure "in the moment")
4. **Items per signal:** 5-30 items (must be brief to minimize burden)
5. **Compliance target:** 70-80%+ response rate considered acceptable

### Technology
- **Original (1970s-1990s):** Pagers/beepers + paper booklets
- **2000s-2010s:** Palm Pilots, dedicated ESM devices
- **Current:** Smartphone apps (e.g., m-Path, SEMA3, Ethica, ExperienceSampler, movisensXS)
- **Emerging:** Wearable sensors (physiological data), passive smartphone sensing (GPS, accelerometer)

### Common Measures in Personality ESM

| Domain | Example Items |
|--------|---------------|
| Big Five states | "Right now I feel talkative/energetic/creative/anxious/organized" (rated 1-7) |
| Affect | PANAS-short or circumplex affect items |
| Situation | "I am at work/home/social"; "The situation is pleasant/stressful" |
| Social context | "I am alone/with friends/with family/with colleagues" |
| Activities | "What are you doing right now?" |
| Goals/motivation | "I am pursuing an important goal right now" |

## How It Relates to Personality Assessment

### From Traits to Distributions
- ESM enables the measurement of personality not as a single score but as a **density distribution** of states (Fleeson, 2001)
- A person's trait level corresponds to their mean state across many moments
- Within-person variability (the spread of the distribution) is itself an individual difference
- Situational contingencies (if-then patterns) are captured naturally

### Advantages Over Traditional Questionnaires
1. **Ecological validity:** Captures personality as expressed in real life, not in abstract reflection
2. **Reduced retrospective bias:** "Right now" reports avoid memory distortion
3. **Within-person dynamics:** Reveals how personality fluctuates across situations and time
4. **Contextual information:** Links personality expression to specific situations, social partners, and activities
5. **Process-level data:** Can test theoretical mechanisms (e.g., CAPS, WTT) at the level where they operate

### Personality Findings from ESM
- People show substantial within-person variability in trait-relevant behavior (SD ~ 0.70 on 7-point scales)
- Despite this variability, individual means are highly stable and differentiate people
- Within-person variability is itself a stable individual difference (some people fluctuate more than others)
- Personality states are systematically linked to situations, validating if-then behavioral signatures
- Trait questionnaire scores predict the mean of the ESM distribution, confirming convergent validity

## Strengths

- Gold standard for studying personality dynamics and within-person processes
- High ecological validity: real behaviors in real contexts
- Minimizes retrospective and social desirability biases
- Supports idiographic (person-specific) as well as nomothetic analysis
- Provides rich multivariate time-series data for advanced modeling
- Compatible with modern analytical techniques (multilevel modeling, dynamic networks, time-series analysis)

## Limitations

- **Participant burden:** Multiple daily surveys for weeks can be fatiguing; compliance drops over time
- **Reactivity:** Being surveyed may change behavior (though research suggests effects are small)
- **Selection bias:** Not all populations can or will participate in intensive protocols
- **Brief measures:** Items must be short, limiting depth and psychometric sophistication
- **Compliance variability:** Non-random missingness (e.g., not responding during social events) can bias results
- **Analytical complexity:** Multilevel and time-series analyses require specialized statistical skills
- **Cost and logistics:** More expensive and time-consuming than one-shot questionnaires
- **Not a diagnostic tool:** ESM personality data are for research; no standardized clinical norms exist
- **Smartphone dependency:** Requires participants to have and carry smartphones

## Relationship to Other Frameworks

| Framework | Connection to ESM |
|-----------|------------------|
| Whole Trait Theory | ESM is the primary method for measuring density distributions |
| CAPS | ESM captures the if-then behavioral signatures CAPS predicts |
| Network approach | ESM time-series data enable idiographic personality network estimation |
| Digital footprint methods | ESM active reports complement passive digital trace data |

## Access and Tools

- **Software platforms:** m-Path (KU Leuven), SEMA3, Ethica Data, movisensXS, ExperienceSampler (open-source)
- **Analysis tools:** R packages `lme4`, `nlme` (multilevel modeling); `mlVAR`, `graphicalVAR` (network analysis); `ESMvis` (visualization)
- **Design resources:** Conner & Lehman (2012); Hektner, Schmidt, & Csikszentmihalyi (2007)
- **Cost:** Software costs vary (some open-source, some subscription-based); participant compensation is a significant cost
- **No proprietary restrictions** on the method itself; anyone can design an ESM study

## Notes

- ESM has become indispensable for modern personality science, enabling the study of personality as a dynamic process rather than a static entity
- The method is increasingly combined with passive sensing (smartphones, wearables) for comprehensive ecological assessment
- ESM data have been central to validating and refining theories like WTT and CAPS
- Clinical applications are growing, particularly in mood disorders, personality disorders, and psychotherapy process research
- The method is sometimes distinguished from EMA, though in practice the terms are often used interchangeably (ESM emphasizing experience, EMA emphasizing ecological momentary assessment in health contexts)
