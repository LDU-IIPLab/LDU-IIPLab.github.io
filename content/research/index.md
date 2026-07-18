---
# 本页只使用 Hugo Blox 内置区块。研究内容可直接在本文件中维护。
title: 研究方向
type: landing

sections:
  - block: hero
    content:
      title: 研究方向
      text: |
        实验室主要开展食品计算与 Agent、具身导航两个方向的研究。
      image:
        filename: banner2.png
    design:
      spacing:
        padding: ['56px', '0', '56px', '0']

  - block: markdown
    content:
      title: 研究概况
      text: |
        实验室面向智能信息处理领域的基础问题与应用需求，研究视觉感知、多模态表征、知识增强和智能体决策方法。目前形成食品计算与 Agent、具身导航两个主要研究方向。

        食品计算方向以食品图像、文本和领域知识为研究对象，关注食品识别、检测、分割、检索以及视觉语言模型，并进一步研究面向食品与营养任务的智能体方法。具身导航方向关注智能体在三维环境中的目标理解、环境感知、空间记忆、路径规划和行动决策。
    design:
      columns: '1'

  - block: features
    content:
      title: 食品计算与 Agent
      subtitle: 面向食品、营养与健康场景的视觉计算、多模态学习和智能体研究
      text: |
        研究食品数据的感知、表征、关联与推理方法，推动食品计算从单一视觉任务向多模态理解和任务型智能体拓展。
      items:
        - icon: camera
          icon_pack: fas
          name: 食品视觉计算
          description: 研究食品与食材的识别、检测、分割和图像检索，重点关注细粒度类别、开放场景和轻量化模型。
        - icon: layer-group
          icon_pack: fas
          name: 多模态食品理解
          description: 研究食品图像、食谱文本、食材信息和营养知识之间的关联建模，探索视觉语言模型在食品领域的适配与评估。
        - icon: robot
          icon_pack: fas
          name: 食品领域 Agent
          description: 研究面向食品分析与营养服务的智能体框架，关注领域知识检索、工具调用、任务规划和结果可信性。
    design:
      columns: '3'

  - block: features
    content:
      title: 具身导航
      subtitle: 面向三维环境的视觉感知、语言理解、空间推理与行动决策
      text: |
        研究智能体如何根据目标或自然语言指令理解环境，在未知或部分可观测场景中进行探索、规划并到达目标位置。
      items:
        - icon: location-arrow
          icon_pack: fas
          name: 物体目标导航
          description: 根据给定物体类别在未知环境中寻找目标，研究视觉语义感知、目标位置推断、探索策略和路径规划。
        - icon: route
          icon_pack: fas
          name: 多物体目标导航
          description: 面向连续寻找多个目标的长程任务，研究目标顺序规划、场景记忆、空间关系建模和高效探索方法。
        - icon: comments
          icon_pack: fas
          name: 视觉语言导航
          description: 根据自然语言指令在三维环境中完成导航，研究指令理解、视觉语言对齐、历史信息利用和跨场景泛化。
    design:
      columns: '3'

---
