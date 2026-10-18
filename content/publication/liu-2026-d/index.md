---
title: 'D-pFoodReQ: Answer-Frequency-Aware Debiasing for Constrained Knowledge-Base
  Question Answering in Food Recommendation'
authors:
- Zhifang Liu
- Wenchao Liu
- Guorui Sheng
- Yancun Yang
- Weiqing Min
- Shuqiang Jiang
date: '2026-09-24'
publishDate: '2026-10-10T07:43:09.320867Z'
publication_types:
- article-journal
publication: '*Foods*'
doi: 10.3390/foods15193418
url_code: 'https://github.com/bishi17/D-pFoodreq'
abstract: Food recommendation systems must satisfy dietary preferences and nutritional,
  health, and ingredient constraints. In constrained food knowledge-base question
  answering, unequal positive training-answer frequency may influence ranking without
  necessarily reflecting query–recipe fit. We develop D-pFoodReQ by replacing the pFoodReQ
  answer ranker with BAMnet-D while retaining its food-knowledge and constraint-processing
  pipeline. BAMnet-D introduces a separate answer-frequency branch alongside semantic
  matching, applies candidate-set-relative loss reweighting, and uses a counterfactual-inspired
  intervention that sets the explicit frequency input to zero during validation and
  testing. Across three runs using the same protocol on the pFoodReQ benchmark, D-pFoodReQ
  achieved an F1 score of 62.96 ± 2.06%, compared with 61.33 ± 2.27% for pFoodReQ.
  Its mean average precision and mean average recall were 66.50 ± 0.54% and 65.38
  ± 0.66%, respectively. On 1355 questions for which no gold answer appeared as a positive
  training label, D-pFoodReQ attained a mean answer-set F1 nearly identical to that
  of pFoodReQ while achieving higher Recall@5 and NDCG@5. Ablation and output-composition
  analyses indicated that loss reweighting alone did not account for the full improvement,
  while retaining the explicit frequency term was associated with a larger share of
  answers observed as positive training labels. These results support answer-frequency-aware
  ranking for constrained food knowledge-base question answering.
---
