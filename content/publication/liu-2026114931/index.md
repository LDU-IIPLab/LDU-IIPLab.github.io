---
title: 'Focus more, compute less: Lightweight fruit and vegetable recognition with
  focus token vision transformer'
authors:
- Chengxu Liu
- Bingqian Lv
- Shangzihan Wang
- Haowen Meng
- Guorui Sheng
date: '2026-03-05'
publishDate: '2026-03-06T01:08:20.629856Z'
publication_types:
- article-journal
publication: '*Applied Soft Computing*'
doi: 10.1016/j.asoc.2026.114931
abstract: 'Fruit and vegetable recognition is a core technology in intelligent agricultural
  sorting systems. Unlike general object recognition tasks, it faces unique challenges
  such as the wide variety of crop categories, highly variable and irregular shapes,
  subtle fine-grained feature differences, and significant background interference.
  These characteristics impose stringent demands on both the accuracy and efficiency
  of recognition models. Although Vision Transformers have achieved remarkable performance
  across a range of computer vision tasks, their high computational complexity in
  global context modeling limits their applicability in resource-constrained environments,
  such as edge devices. To address the challenges of fruit and vegetable recognition,
  including small object sizes, subtle inter-class variations, and complex backgrounds,
  we propose a novel lightweight vision Transformer architecture, termed Super Focus
  Attention Vision Transformer (FocalViT). FocalViT introduces a focus token mechanism
  that compresses high-resolution agricultural images into semantically meaningful
  visual embeddings, significantly reducing the number of tokens involved in self-attention
  computation while maintaining strong global modeling capability. Moreover, FocalViT
  incorporates a latent spatial-channel attention interaction mechanism, which decomposes
  global attention into two stages: sparse correlation mapping and low-dimensional
  attention computation. This design enables the model to more effectively extract
  key visual features from fruit and vegetable images, such as texture details, color
  distribution, and shape boundaries. We further develop a scalable family of lightweight
  network variants based on FocalViT to accommodate a wide range of agricultural vision
  tasks. Experimental results on the Fru92 dataset demonstrate that FocalViT achieves
  an average Top-1 accuracy of 79.20% with only 2.48G FLOPs, outperforming state-of-the-art(SOTA)
  lightweight methods and achieving a superior trade-off between recognition accuracy
  and computational efficiency. The proposed FocalViT also exhibits real-time inference
  capabilities on embedded platforms, providing an efficient and deployable solution
  for intelligent fruit and vegetable sorting systems and confirming its technical
  feasibility for practical applications in agricultural industrialization.'
tags:
- Fruit recognition
- Vegetable recognition
- Lightweight
- Focus token
- Vision transformer
---
