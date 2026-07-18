---
# 研究页使用 Hugo Blox 内置区块。研究方向的文字与图标均在本文件维护。
title: 研究方向
type: landing

sections:
  - block: hero
    content:
      title: 研究方向
      text: |
        聚焦食品计算与智能体、具身导航，开展面向真实场景的智能信息处理研究。
      image:
        filename: banner2.png
    design:
      spacing:
        padding: ['56px', '0', '56px', '0']

  - block: features
    content:
      title: 食品计算与智能体
      subtitle: 面向食品、营养与健康场景的多模态智能研究
      text: |
        研究食品领域视觉、文本与知识的协同建模，并探索智能体在食品理解、营养分析和知识服务中的方法与应用。
      items:
        - icon: eye
          icon_pack: fas
          name: 食品视觉理解
          description: 面向食物识别、检测分割、成分分析和份量估计等任务，研究细粒度视觉表征与开放场景识别方法。
        - icon: link
          icon_pack: fas
          name: 多模态食品计算
          description: 研究食物图像、食谱文本、营养信息与领域知识的对齐、检索、推理和知识增强学习。
        - icon: robot
          icon_pack: fas
          name: 食品智能体
          description: 构建面向营养分析、膳食推荐与食品知识服务的智能体，探索领域工具调用、规划和可信交互方法。
    design:
      columns: '3'

  - block: features
    content:
      title: 具身导航
      subtitle: 面向复杂三维环境的目标理解、空间推理与自主决策
      text: |
        研究智能体在三维真实或仿真环境中的多模态感知、目标理解、空间记忆和导航决策。
      items:
        - icon: location-arrow
          icon_pack: fas
          name: 物体目标导航
          description: 研究面向指定物体类别的环境感知、语义地图、目标推断与路径规划方法，提高未知环境中的导航效率。
        - icon: route
          icon_pack: fas
          name: 多物体目标导航
          description: 研究多个目标之间的搜索顺序、空间关系建模、历史观测利用和长程任务规划，降低重复探索成本。
        - icon: comments
          icon_pack: fas
          name: 视觉语言导航
          description: 融合自然语言指令、第一视角视觉和空间信息，研究指令理解、跨模态对齐与语言引导的导航决策。
    design:
      columns: '3'

  - block: collection
    content:
      title: 近期研究成果
      subtitle: 实验室近期发表的代表性工作
      count: 5
      filters:
        folders:
          - publications
        featured_only: false
        exclude_featured: false
        exclude_future: false
        exclude_past: false
      offset: 0
      sort_by: Date
      sort_ascending: false
    design:
      view: citation
      columns: '1'
---
