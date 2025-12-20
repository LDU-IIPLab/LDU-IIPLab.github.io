---
# Leave the homepage title empty to use the site title
title:
type: landing
sections:
  - block: hero
    content:
      title: |
        # 欢迎来到 **智能信息处理实验室**
      image:
        filename: icon.png
      text: |
        **鲁东大学智能信息处理实验室**依托于鲁东大学计算机与人工智能学院，成立于2020年。在**中国科学院计算技术研究所智能信息处理重点实验室**的大力支持下，实验室逐渐发展成为鲁东大学智能信息处理领域的重要基础研究基地。目前，实验室主要成员包括研究人员6名、硕士/本科生50余名。实验室的研究领域涵盖**计算机视觉、模式识别、机器学习/深度学习、多媒体技术、食品计算、具身智能**等学科方向，在相关领域发表研究论文10余篇，其中5篇发表在**中科院一区和二区期刊**。实验室积极鼓励和培育本科生参与各项大学生创新创业大赛，获得**中国机器人及人工智能大赛国赛一等奖一项，三等奖一项，省赛奖项十余项**；同时鼓励和培养有潜力的本科生发表**中科院二区**论文两篇。
    design:
      spacing:
        # Customize the section spacing. Order is top, right, bottom, left.
        padding: ['0', '0', '0', '0']

  - block: slider
    content:
      slides:
      - title:
        content:
        align: center
        background:
          image:
            filename: slider/20250819.jpg
            filters:
              brightness: 1
            #  Image fit. Options are `cover` (default), `contain`, or `actual` size.
            size: contain
            # Image focal point. Options include `left`, `center` (default), or `right`.
            position: center
            # 是否在桌面上使用类似视差的固定背景效果？true/false
            parallax: false
          position: center

      - title:
        content:
        align: center
        background:
          image:
            filename: slider/20250420.jpg
            filters:
              brightness: 1
            #  Image fit. Options are `cover` (default), `contain`, or `actual` size.
            size: contain
            # Image focal point. Options include `left`, `center` (default), or `right`.
            position: center
            # 是否在桌面上使用类似视差的固定背景效果？true/false
            parallax: false
          position: center

      - title:
        content:
        align: center
        background:
          image:
            filename: slider/20250419.jpg
            filters:
              brightness: 1
            #  Image fit. Options are `cover` (default), `contain`, or `actual` size.
            size: contain
            # Image focal point. Options include `left`, `center` (default), or `right`.
            position: center
            # 是否在桌面上使用类似视差的固定背景效果？true/false
            parallax: false
          position: center

      - title:
        content:
        align: center
        background:
          image:
            filename: slider/20240713.jpg
            filters:
              brightness: 1
            #  Image fit. Options are `cover` (default), `contain`, or `actual` size.
            size: contain
            # Image focal point. Options include `left`, `center` (default), or `right`.
            position: center
            # 是否在桌面上使用类似视差的固定背景效果？true/false
            parallax: false
          position: center

      - title:
        content:
        align: center
        background:
          image:
            filename: slider/20230625.jpg
            filters:
              brightness: 1
            #  Image fit. Options are `cover` (default), `contain`, or `actual` size.
            size: contain
            # Image focal point. Options include `left`, `center` (default), or `right`.
            position: center

      - title:
        content:
        align: center
        background:
          image:
            filename: slider/20230420.png
            filters:
              brightness: 1
            #  Image fit. Options are `cover` (default), `contain`, or `actual` size.
            size: contain
            # Image focal point. Options include `left`, `center` (default), or `right`.
            position: center
    design:
      spacing:
        # Customize the section spacing. Order is top, right, bottom, left.
        padding: ['0', '0', '0', '0']
      is_fullscreen: true
      # Automatically transition through slides?
      loop: true
      # Duration of transition between slides (in ms)
      interval: 3000

  - block: collection
    content:
      title: 新闻
      subtitle:
      text:
      count: 3
      filters:
        folders:
          - news
        author: ''
        category: ''
        tag: ''
        publication_type: ''
        featured_only: false
        exclude_featured: false
        exclude_future: false
        exclude_past: false
      offset: 0
      sort_by: 'Date'
      sort_ascending: false
      # order: desc
      # page_type: news
    design:
      view: showcase
      columns: '1'

  - block: markdown
    content:
      title: 研究方向
      subtitle: ''
      text: |
        <div style="max-width: 1100px; margin: 0 auto;">
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 2rem;">
            <div style="text-align: justify;">
              <h3 style="text-align: center; margin-bottom: 1rem;">多模态视觉智能与食品计算</h3>
              <p>该方向面向计算机视觉、多模态学习与人工智能的前沿研究，重点探索图像、视频、文本等异构数据的协同建模、跨模态对齐与语义理解机制。致力于发展高效、鲁棒、可泛化的视觉智能技术，包括细粒度识别、目标检测与分割、跨模态检索、开放词汇识别、视觉语言模型驱动的知识增强表征学习等方法。在此基础上，我们将多模态视觉智能技术深度应用于食品相关场景，构建面向食物图像理解、食谱解析与营养估算的智能系统，支持健康管理、智能餐饮、农业生产和饮食文化计算等应用需求。通过引入大模型、知识图谱与多源数据融合，旨在提升复杂环境下的语义表达能力、个性化分析能力与跨场景迁移能力。</p>
            </div>
            <div style="text-align: justify;">
              <h3 style="text-align: center; margin-bottom: 1rem;">具身智能</h3>
              <p>该方向面向具身人工智能与智能体感知决策的前沿研究，重点探索智能体在三维真实或仿真环境中的多模态感知、语义理解与行为决策机制。致力于发展具备环境理解与自主交互能力的具身智能方法，包括多模态融合感知、场景记忆建模、语义地图构建与目标导向决策等关键技术。在此基础上，我们围绕物体目标导航等典型具身任务，构建能够在未知环境中进行自主探索、目标定位与路径规划的智能体系统，支持服务机器人、智能家居与自主探索等应用场景。通过引入强化学习、大模型驱动的感知与决策方法以及多源数据融合，旨在提升智能体在复杂环境下的泛化能力、长期任务执行能力与跨场景迁移能力。</p>
            </div>
          </div>
        </div>
    design:
      columns: '1'

  - block: collection
    content:
      title: 发表论文
      text: ""
      count: 3
      filters:
        folders:
          - publication
        # publication_type: 'article-journal'
    design:
      view: citation
      columns: '2'

  - block: markdown
    content:
      title:
      subtitle:
      text: |
        {{% cta cta_link="./contact/" cta_text="加入我们 →" %}}
    design:
      columns: '1'
      background:
        image:
          # Name of image in `assets/media/`.
          filename: banner1.png
          # Apply image filters?
          filters:
            # Darken the image? Range 0-1 where 1 is transparent and 0 is opaque.
            brightness: 0.9
          #  Image fit. Options are `cover` (default), `contain`, or `actual` size.
          size: contain
          # Image focal point. Options include `left`, `center` (default), or `right`.
          position: center
          # 是否在桌面上使用类似视差的固定背景效果？true/false
          parallax: false
          # Text color (true=light, false=dark, or remove for the dynamic theme color).
          text_color_light: true
---