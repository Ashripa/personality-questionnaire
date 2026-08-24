# Network Approach to Personality

**Priority:** P5
**Category:** Methodological framework / theoretical perspective
**Status:** Active research paradigm (not a questionnaire)

---

## Overview

The network approach to personality is a theoretical and methodological framework that reconceptualizes personality traits not as reflections of underlying latent variables, but as emergent properties of networks of mutually reinforcing psychological components (behaviors, cognitions, affects). Instead of assuming that "Extraversion" causes someone to like parties, talk to strangers, and feel energetic, the network approach proposes that these behaviors and feelings directly cause each other, and "Extraversion" emerges from their interconnections.

## Key Citations

- Cramer, A. O. J., Waldorp, L. J., van der Maas, H. L. J., & Borsboom, D. (2010). Comorbidity: A network perspective. *Behavioral and Brain Sciences, 33*(2-3), 137-150.
- Costantini, G., Epskamp, S., Borsboom, D., Perugini, M., Mottus, R., Waldorp, L. J., & Cramer, A. O. J. (2015). State of the aRt personality research: A tutorial on network analysis of personality data in R. *Journal of Research in Personality, 54*, 13-29.
- Cramer, A. O. J., van der Sluis, S., Noordhof, A., Wichers, M., Geschwind, N., Aggen, S. H., ... & Borsboom, D. (2012). Dimensions of normal personality as networks in search of equilibrium: You can't like parties if you don't like people. *European Journal of Personality, 26*(4), 414-431.
- Borsboom, D. (2017). A network theory of mental disorders. *World Psychiatry, 16*(1), 5-13.

## Core Concept

### The Latent Variable vs. Network Model

**Traditional (latent variable) view:**
- Personality traits (e.g., Big Five) are latent variables that cause observable behaviors
- Behaviors correlate because they share a common cause
- Factor analysis recovers these latent causes

**Network view:**
- Observable behaviors, thoughts, and feelings are **nodes** in a network
- Direct causal or associational relationships between nodes are **edges**
- Traits are **emergent** properties of the network, not hidden causes
- Behaviors correlate because they directly influence each other

### Illustrative Example (Cramer et al., 2012)
A person who likes parties (node A) is likely to meet more people (node B), which leads to making more friends (node C), who invite them to more parties (back to A). This self-reinforcing cycle creates a stable behavioral pattern that looks like "Extraversion" -- but there is no single latent entity causing it. The trait emerges from the network dynamics.

## Key Methodological Details

### Network Estimation
- **Nodes:** Typically questionnaire items or behavioral indicators
- **Edges:** Partial correlations (controlling for all other nodes), often regularized using graphical LASSO (glasso)
- **Visualization:** Force-directed graphs where strongly connected nodes cluster together
- **Software:** R packages `qgraph`, `bootnet`, `networktools`, `EstimateGroupNetwork`

### Network Metrics
| Metric | Description |
|--------|-------------|
| **Strength centrality** | Sum of absolute edge weights connected to a node; indicates how strongly connected a node is |
| **Betweenness centrality** | How often a node lies on shortest paths between other nodes; identifies bridge nodes |
| **Closeness centrality** | Inverse of average shortest path to all other nodes |
| **Bridge centrality** | Identifies nodes connecting different clusters (e.g., linking personality domains) |
| **Clustering coefficient** | Degree to which a node's neighbors are connected to each other |
| **Network density** | Proportion of possible edges that are present |

### Network Stability and Accuracy
- Edge-weight accuracy estimated via bootstrapped confidence intervals
- Centrality stability assessed via case-dropping bootstrap (CS-coefficient)
- CS-coefficient should be >= .25 (preferably >= .50) for stable centrality estimates
- Network comparison tests can compare networks across groups

## How It Relates to Personality Assessment

1. **Reinterprets factor structure:** Network analysis can reproduce the Big Five factor structure, but explains it differently -- as emergent clusters rather than latent causes
2. **Reveals within-trait dynamics:** Shows which specific behaviors/items within a trait are most central and which are peripheral
3. **Identifies bridge items:** Finds items that connect different personality domains, revealing cross-domain dynamics
4. **Person-specific networks:** Idiographic (individual-level) networks from intensive longitudinal data (ESM/EMA) can characterize a person's unique personality dynamics
5. **Clinical applications:** Network analysis of personality disorder symptoms reveals which symptoms are most central and could be intervention targets

## Strengths

- Provides mechanistic explanations for trait structure (not just descriptive)
- Does not assume traits are real entities; remains agnostic about ontology
- Naturally accommodates dynamic and context-dependent personality expression
- Integrates well with intensive longitudinal methods (ESM, diary studies)
- Generates testable causal hypotheses about personality processes
- Rich visualization capabilities for communicating complex structures

## Limitations

- **Cross-sectional networks do not imply causation:** Edges represent statistical associations, not necessarily causal links
- **Sample size requirements:** Large samples needed for stable estimation (typically n > 250 for cross-sectional; many time points for idiographic)
- **Sensitivity to analytic choices:** Results can vary with regularization method, threshold, and variable selection
- **Replicability concerns:** Some centrality metrics (especially betweenness and closeness) have low stability
- **Not a replacement for latent variable models:** Both approaches are compatible with the same data; empirical data alone cannot distinguish between them
- **Interpretation challenges:** Assigning causal meaning to edges requires caution
- **Computational complexity:** Estimation and bootstrapping can be intensive for large networks

## Key Distinction from Traditional Assessment

The network approach does not produce a new personality questionnaire or scoring system. It is a **way of analyzing and interpreting** personality data, typically data from existing instruments (e.g., Big Five inventories, personality disorder measures). The innovation is in the analysis and the theoretical interpretation, not in the measurement tool itself.

## Notes

- The network approach emerged from the broader network theory movement in psychopathology (Borsboom, 2017), extended to normal personality
- It aligns with dynamical systems perspectives on personality and with process-based approaches (CAPS, WTT)
- Rapidly growing field with active methodological development
- Particularly influential in clinical personality assessment and personality disorder research
