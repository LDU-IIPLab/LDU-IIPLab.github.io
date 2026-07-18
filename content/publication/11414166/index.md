---
title: 'SyMFood: Synergistic Multi-Modal Prompting for Fine-Grained Zero-Shot Food Detection'
authors:
- Xinlong Wang
- Weiqing Min
- Shoulong Liu
- Guorui Sheng
- Shuqiang Jiang
date: '2026-02-26'
publishDate: '2026-02-27T09:49:46.301978Z'
publication_types:
- article-journal
publication: '*IEEE Transactions on Circuits and Systems for Video Technology*'
doi: 10.1109/TCSVT.2026.3668226
abstract: 'Fine-grained object detection in food computing is severely constrained
  by the vast diversity of food items and the high cost of data annotation. Existing
  Zero-Shot Food Detection (ZSFD) methods attempt to solve this by leveraging semantic
  information, but they suffer from two critical bottlenecks: (1) a \"Semantic Dilemma\"
  (SD) where textual descriptions are too ambiguous to distinguish visually similar
  food categories, and (2) an \"Architectural Bottleneck\" (AB) due to the granularity
  mismatch between high-level semantics and low-level visual features. In this article,
  we propose SyMFood (Synergistic Multi-modal Framework for Food Generalization),
  a novel ZSFD framework designed to systematically overcome these challenges. To
  resolve the SD, SyMFood employs a multi-modal prompt system, which combines rich
  descriptions from Large Language Models (LLMs) with unambiguous visual exemplars
  to provide precise semantic grounding. To break the AB, SyMFood introduces a “Refine-then-Fuse”
  architecture. This design first utilizes a Context-Aware Spatial-Channel Refinement
  (CaSC) block to enhance visual features independently. Subsequently, a Progressive
  Food Knowledge Fusion (ProFus) module performs bi-directional, iterative co-refinement
  between the enhanced visual features and multi-modal prompts across all scales.
  Extensive experiments across four challenging datasets, including food-specific
  (UEC FOOD 256, FOWA) and general-purpose (PASCAL VOC, MS COCO) benchmarks, validate
  our approach. The proposed method outperforms baselines, yielding a notable 8.5%
  improvement in Harmonic Mean on the FOWA dataset in the genearl ZSD (GZSD) setting.
  The source code will be available at https://github.com/Niko000202/SymFood0202.'
tags:
- Visualization;Semantics;Zero shot learning;Videos;Grounding;Vectors;Object detection;Feature
  extraction;Training;Iterative methods;Food Computing;Zero-Shot Learning;Zero-Shot
  Detection;Cross-Modal Fusion;Food Detection
url_code: 'https://github.com/Niko000202/SymFood0202'
---
