---
title: Cross-layer and selective distillation for asymmetric image retrieval
authors:
- Shijie Zhang
- Weiqing Min
- Fangyuan Yao
- Guorui Sheng
- Shuqiang Jiang
date: -01-01
publishDate: '2026-02-05T11:46:12.097478Z'
publication_types:
- article-journal
abstract: Existing asymmetric retrieval methods primarily rely on aligning global
  features to transfer semantic information. However, they often struggle to convey
  knowledge effectively across different network layers, limiting fine-grained alignment
  in feature representation spaces. To address this limitation, we propose a Cross-Layer
  and Selective Distillation (CLSD) framework. It first introduces a semantic-aware
  cross-layer feature distillation mechanism, where an attention-guided soft layer
  alignment strategy enables the student model to dynamically select and integrate
  the most relevant semantic knowledge from multiple intermediate teacher layers,
  based on its own layer’s semantic requirements. This alleviates the knowledge transfer
  challenges arising from architectural asymmetry. Furthermore, considering the importance
  of ranking consistency in fine-grained food image retrieval, we propose a decoupled
  differential relation distillation approach based on unambiguous samples. This method
  emphasizes the teacher model’s discriminative power and ranking behavior on unambiguous
  samples, while filtering out noisy signals from ambiguous ones. As a result, the
  student learns more reliable relative relationships between samples, ensuring consistency
  in ranking order between query and gallery features. Extensive experiments on four
  benchmark datasets demonstrate that our method consistently surpasses existing state-of-the-art
  techniques, highlighting its effectiveness in asymmetric fine-grained retrieval
  tasks.
---
