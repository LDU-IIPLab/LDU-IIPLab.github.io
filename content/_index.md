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
        <div class="tech-glass-wrapper" style="font-family: system-ui, -apple-system, sans-serif; color: #fff; overflow: hidden; border-radius: 16px; background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); position: relative;">
        <!-- Decorative Blobs -->
        <div style="position: absolute; top: -10%; left: -10%; width: 40%; height: 40%; background: radial-gradient(circle, rgba(56,189,248,0.4) 0%, rgba(0,0,0,0) 70%); border-radius: 50%; filter: blur(40px);"></div>
        <div style="position: absolute; bottom: -10%; right: -10%; width: 40%; height: 40%; background: radial-gradient(circle, rgba(139,92,246,0.4) 0%, rgba(0,0,0,0) 70%); border-radius: 50%; filter: blur(40px);"></div>
        <div class="glass-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 2rem; padding: 2rem; position: relative; z-index: 1;">
        <!-- Card 1 -->
        <div class="glass-card" style="background: rgba(255, 255, 255, 0.05); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 16px; padding: 2rem; box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); transition: transform 0.3s ease;">
        <h3 style="color: #38bdf8; font-size: 1.5rem; margin-bottom: 1rem; display: flex; align-items: center; gap: 10px;">
        <span style="font-size: 1.8rem;">🍽️</span> 多模态视觉智能<br>与食品计算
        </h3>
        <p style="color: #cbd5e1; font-size: 0.95rem; line-height: 1.7; text-align: justify; margin-bottom: 1rem;">
        面向计算机视觉、多模态学习与人工智能的前沿研究。重点探索图像、视频、文本等异构数据的<span style="color: #7dd3fc; font-weight: bold;">协同建模</span>、<span style="color: #7dd3fc; font-weight: bold;">跨模态对齐</span>与<span style="color: #7dd3fc; font-weight: bold;">语义理解</span>。
        </p>
        <p style="color: #94a3b8; font-size: 0.9rem; margin-bottom: 1rem;">
        应用于<span style="color: #e2e8f0;">智能餐饮、健康管理、饮食文化计算</span>，构建面向食物图像理解与营养估算的智能系统。
        </p>
        <div style="margin-top: 1.5rem; display: flex; flex-wrap: wrap; gap: 0.5rem;">
        <span style="background: rgba(56, 189, 248, 0.15); color: #7dd3fc; padding: 4px 12px; border-radius: 20px; font-size: 0.8rem;">细粒度识别</span>
        <span style="background: rgba(56, 189, 248, 0.15); color: #7dd3fc; padding: 4px 12px; border-radius: 20px; font-size: 0.8rem;">视觉语言模型</span>
        <span style="background: rgba(56, 189, 248, 0.15); color: #7dd3fc; padding: 4px 12px; border-radius: 20px; font-size: 0.8rem;">大模型融合</span>
        </div>
        </div>
        <!-- Card 2 -->
        <div class="glass-card" style="background: rgba(255, 255, 255, 0.05); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 16px; padding: 2rem; box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); transition: transform 0.3s ease;">
        <h3 style="color: #a78bfa; font-size: 1.5rem; margin-bottom: 1rem; display: flex; align-items: center; gap: 10px;">
        <span style="font-size: 1.8rem;">🤖</span> 具身智能<br>(Embodied AI)
        </h3>
        <p style="color: #cbd5e1; font-size: 0.95rem; line-height: 1.7; text-align: justify; margin-bottom: 1rem;">
        聚焦智能体在三维真实环境中的<span style="color: #c4b5fd; font-weight: bold;">感知、理解与交互</span>。重点研究物体目标导航，通过多模态融合与场景记忆建模，提升智能体探索效率。
        </p>
        <p style="color: #94a3b8; font-size: 0.9rem; margin-bottom: 1rem;">
        致力于推动具身智能从感知走向认知，服务于<span style="color: #e2e8f0;">服务机器人、智能家居、自主探索</span>等领域。
        </p>
        <div style="margin-top: 1.5rem; display: flex; flex-wrap: wrap; gap: 0.5rem;">
        <span style="background: rgba(139, 92, 246, 0.15); color: #c4b5fd; padding: 4px 12px; border-radius: 20px; font-size: 0.8rem;">物体目标导航</span>
        <span style="background: rgba(139, 92, 246, 0.15); color: #c4b5fd; padding: 4px 12px; border-radius: 20px; font-size: 0.8rem;">三维感知</span>
        <span style="background: rgba(139, 92, 246, 0.15); color: #c4b5fd; padding: 4px 12px; border-radius: 20px; font-size: 0.8rem;">语义地图</span>
        </div>
        </div>
        </div>
        </div>
      columns: '1'
  
  # - block: markdown
  #   content:
  #     title:
  #     subtitle: ''
  #     text:
  #   design:
  #     columns: '1'
  #     background:
  #       image: 
  #         filename: coders.jpg
  #         filters:
  #           brightness: 1
  #         parallax: false
  #         position: center
  #         size: cover
  #         text_color_light: true
  #     spacing:
  #       padding: ['20px', '0', '20px', '0']
  #     css_class: fullscreen

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

