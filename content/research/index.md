---
title: 研究方向
type: landing

sections:
  - block: hero
    content:
      title: 研究方向
      text: |
        智能信息处理实验室面向**计算机视觉、多模态学习与人工智能**前沿，致力于构建高效、鲁棒、可泛化的智能系统。当前重点开展**多模态视觉智能与食品计算**和**具身智能**两个方向的研究，推动基础方法创新与真实场景应用相结合。
      cta:
        label: 查看研究成果
        url: ../publication/
        icon_pack: fas
        icon: book-open
      cta_alt:
        label: 联系我们
        url: ../contact/
    design:
      spacing:
        padding: ['40px', '0', '40px', '0']

  - block: features
    content:
      title: 🍽️ 多模态视觉智能与食品计算
      subtitle: 从多模态理解到食品智能应用
      text: |
        重点探索图像、视频、文本等异构数据的协同建模、跨模态对齐与语义理解机制，发展高效、鲁棒、可泛化的视觉智能技术，并将其应用于食品与健康相关场景。
      items:
        - icon: 🧠
          icon_pack: emoji
          name: 视觉与多模态理解
          description: 面向细粒度识别、目标检测与分割、开放词汇识别等任务，研究复杂视觉内容的高效表征与深层语义理解方法。
        - icon: 🔗
          icon_pack: emoji
          name: 跨模态学习
          description: 研究图像、视频与文本之间的跨模态对齐、检索和知识增强表征学习，探索视觉语言模型与多源数据融合方法。
        - icon: 🍲
          icon_pack: emoji
          name: 食品计算
          description: 构建面向食物图像理解、食谱解析与营养估算的智能系统，服务健康管理、智能餐饮、农业生产与饮食文化计算。
    design:
      columns: '1'

  - block: features
    content:
      title: 🤖 具身智能
      subtitle: 让智能体在真实与仿真环境中感知、理解和行动
      text: |
        面向具身人工智能与智能体感知决策前沿，研究智能体在三维真实或仿真环境中的多模态感知、语义理解和行为决策机制，提升其自主交互与长期任务执行能力。
      items:
        - icon: 👁️
          icon_pack: emoji
          name: 多模态感知
          description: 研究视觉、语言与空间信息的融合感知方法，增强智能体对复杂环境、物体关系和任务语义的理解能力。
        - icon: 🗺️
          icon_pack: emoji
          name: 导航与决策
          description: 围绕物体目标导航、自主探索、目标定位与路径规划等任务，研究场景记忆、语义地图和目标导向决策方法。
        - icon: 🦾
          icon_pack: emoji
          name: 自主智能体
          description: 引入强化学习、大模型驱动的感知与决策以及多源数据融合，提升智能体的泛化、长期执行与跨场景迁移能力。
    design:
      columns: '1'

  - block: collection
    content:
      title: 近期研究成果
      subtitle: 实验室在相关研究方向发表的代表性工作
      text: ''
      count: 5
      filters:
        folders:
          - publication
        featured_only: false
        exclude_featured: false
        exclude_future: false
        exclude_past: false
      offset: 0
      sort_by: Date
      sort_ascending: false
      archive:
        enable: true
        text: 查看全部研究成果
        link: ../publication/
    design:
      view: citation
      columns: '1'
---
