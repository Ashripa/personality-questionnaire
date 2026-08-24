# Synthetic Aperture Personality Assessment (SAPA)

**Priority:** P5
**Category:** Assessment methodology / research platform
**Status:** Active open-science research project

---

## Overview

Synthetic Aperture Personality Assessment (SAPA) is both a methodological technique and an ongoing large-scale research project developed by William Revelle and colleagues at Northwestern University. The method borrows its name from synthetic aperture radar: just as SAR combines many small radar observations to simulate a large antenna, SAPA combines many participants' responses to small, overlapping subsets of items to reconstruct the full item-correlation matrix of a very large item pool. This allows personality assessment at a scale that would be impractical if every participant answered every item.

## Key Citations

- Revelle, W., Wilt, J., & Rosenthal, A. (2010). Individual differences in cognition: New methods for examining the personality-cognition link. In A. Gruszka, G. Matthews, & B. Szymura (Eds.), *Handbook of Individual Differences in Cognition* (pp. 27-49). Springer.
- Revelle, W., Condon, D. M., Wilt, J., French, J. A., Brown, A., & Elleman, L. G. (2017). Web and phone based data collection using planned missing designs. In N. G. Fielding, R. M. Lee, & G. Blank (Eds.), *The SAGE Handbook of Online Research Methods* (2nd ed., pp. 578-594). Sage.
- Condon, D. M., & Revelle, W. (2014). The International Cognitive Ability Resource: Development and initial validation of a public-domain measure. *Intelligence, 43*, 52-64.

## Core Concept

### The Synthetic Aperture Principle

**Problem:** To study the full structure of personality comprehensively, researchers need data on thousands of items. But no single participant can answer thousands of items without fatigue, boredom, and dropout.

**Solution:** Each participant answers a small, randomly selected subset of items (typically 50-200 out of 600+). Because different participants answer overlapping subsets, the complete matrix of inter-item correlations can be reconstructed statistically, even though no single person answered all items.

### How It Works
1. A large pool of items is assembled (primarily from IPIP and other public-domain inventories)
2. Each participant receives a random (or semi-random) subset of items
3. Responses are collected from thousands of participants via the web
4. Missing data (by design -- "planned missingness") are handled through imputation and matrix completion
5. The resulting complete correlation matrix can be factor-analyzed, network-analyzed, or used for scale construction

## The SAPA Project

### Platform
- Web-based survey at sapa-project.org
- Participants are volunteers who receive personality feedback in exchange for data
- Running continuously since 2004
- As of recent reports, over 250,000+ participants have contributed data

### Item Pool
- Primarily drawn from the International Personality Item Pool (IPIP), a public-domain item repository
- Includes items measuring Big Five/HEXACO personality traits, cognitive ability, interests, values, and demographics
- Items are phrased statements (e.g., "I am the life of the party") rated on agreement scales

### Data Products
- Public datasets released for research use
- Data available through the Harvard Dataverse and personality-project.org
- R package `psych` (by Revelle) includes tools for analyzing SAPA-type data

## Key Methodological Details

### Planned Missing Data Design
- Formally known as a "planned missing data" or "matrix sampling" design
- Missing data are Missing Completely At Random (MCAR) by design
- Enables valid statistical inference despite 70-90% missing data per participant
- Requires large samples but short individual sessions

### Analysis Approaches
- Factor analysis of the reconstructed correlation matrix
- Network analysis of item relationships
- Item Response Theory (IRT) models
- Hierarchical clustering and structural analysis

### Scale Development
- SAPA data have been used to construct and validate new personality scales
- The SAPA Personality Inventory (SPI) emerged from this work
- Enables empirical comparison of competing scale structures on the same large dataset

## How It Relates to Personality Assessment

1. **Democratizes large-scale research:** Uses public-domain items, so any researcher can use the data and scales
2. **Comprehensive structure mapping:** Reveals the structure of personality at a level of detail impossible with traditional single-questionnaire studies
3. **Open science model:** Data, code, and instruments are freely available
4. **Practical assessment implications:** If each person needs only a small subset of items, assessment can be shorter and more efficient
5. **Computerized adaptive testing potential:** SAPA principles can inform adaptive personality testing that selects items dynamically

## Strengths

- Enables personality research at unprecedented scale and breadth
- Open-source, public-domain approach (IPIP items, freely available data)
- Methodologically innovative application of planned missingness
- Generates large, diverse, and continuously growing samples
- Supports replication and cross-validation across large datasets
- Platform for studying item-level personality structure beyond the Big Five

## Limitations

- **Web-based volunteer sample:** Non-representative (self-selected, likely more educated, WEIRD-biased)
- **No controlled testing environment:** Cannot verify identity, attention, or honesty
- **Planned missingness limits individual-level assessment:** Cannot compute a complete personality profile for any single participant
- **Requires large N:** The method only works with very large samples; small studies cannot use this approach
- **Public-domain items may lack refinement:** IPIP items are adequate but not always as psychometrically polished as proprietary instruments
- **Missing data techniques assume MCAR:** Violations of this assumption (e.g., selective dropout) can bias results

## Access

- **Website:** sapa-project.org and personality-project.org
- **Data:** Publicly available datasets on Harvard Dataverse
- **Software:** R package `psych` (CRAN) by William Revelle
- **Items:** IPIP items at ipip.ori.org (public domain)
- **Cost:** Free (open science project)
- **Participation:** Anyone can take the survey and receive personality feedback

## Notes

- SAPA represents a paradigm shift in personality assessment methodology, moving from "everyone answers the same questionnaire" to "everyone answers a different slice of a very large item pool"
- The project demonstrates the power of combining open-source instruments, web-based data collection, and modern missing-data methods
- SAPA data have contributed to hundreds of published studies on personality structure
- The approach is complementary to, not a replacement for, traditional personality assessment in clinical or applied settings
