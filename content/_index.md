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
      subtitle: 面向计算机视觉、多模态学习与人工智能前沿，构建高效、鲁棒的智能系统
      text: |
        <div style="max-width: 1100px; margin: 0 auto;">
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
            <div style="border: 1px solid #eaecef; border-radius: 12px; padding: 1.75rem;">
              <div style="font-size: 2.25rem; text-align: center;">🍽️</div>
              <h3 style="text-align: center; margin: 0.5rem 0 1rem;">多模态视觉智能与食品计算</h3>
              <p style="color: #555; margin-bottom: 1rem;">面向计算机视觉与多模态学习前沿，探索异构数据协同建模、跨模态对齐与语义理解，并将视觉智能技术深度应用于食品相关场景。</p>
              <ul style="color: #666; padding-left: 1.2rem; line-height: 1.7; margin-bottom: 1rem;">
                <li><strong>核心技术：</strong>细粒度识别、检测分割、跨模态检索、视觉语言模型</li>
                <li><strong>应用系统：</strong>食物图像理解、食谱解析与营养估算</li>
                <li><strong>社会价值：</strong>健康管理、智能餐饮、饮食文化计算</li>
              </ul>
              <a href="./research/" style="font-weight: 600;">了解更多 →</a>
            </div>
            <div style="border: 1px solid #eaecef; border-radius: 12px; padding: 1.75rem;">
              <div style="font-size: 2.25rem; text-align: center;">🤖</div>
              <h3 style="text-align: center; margin: 0.5rem 0 1rem;">具身智能</h3>
              <p style="color: #555; margin-bottom: 1rem;">面向智能体感知决策前沿，探索三维环境中的多模态感知、语义理解与行为决策，构建可自主探索与交互的智能体系统。</p>
              <ul style="color: #666; padding-left: 1.2rem; line-height: 1.7; margin-bottom: 1rem;">
                <li><strong>关键任务：</strong>物体目标导航、自主探索、目标定位与路径规划</li>
                <li><strong>核心创新：</strong>强化学习、大模型驱动感知决策、多源数据融合</li>
                <li><strong>应用场景：</strong>服务机器人、智能家居、自主探索</li>
              </ul>
              <a href="./research/" style="font-weight: 600;">了解更多 →</a>
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
        {{% cta cta_link="./contact/" cta_text="联系我们 →" %}}
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