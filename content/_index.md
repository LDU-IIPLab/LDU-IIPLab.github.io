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
        <div class="neo-wrapper" style="font-family: 'Courier New', Courier, monospace; color: #000; overflow: hidden;">
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');
        .neo-wrapper { --neo-shadow: 6px 6px 0px 0px #000; --neo-border: 3px solid #000; }
        .neo-card { transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1); border: var(--neo-border); box-shadow: var(--neo-shadow); }
        .neo-card:hover { transform: translate(-4px, -4px); box-shadow: 10px 10px 0px 0px #000 !important; }
        .neo-scroll-text { white-space: nowrap; overflow: hidden; box-sizing: border-box; }
        .neo-scroll-text p { display: inline-block; padding-left: 100%; animation: neo-marquee 20s linear infinite; margin: 0; }
        @keyframes neo-marquee { 0% { transform: translate(0, 0); } 100% { transform: translate(-100%, 0); } }
        @media (max-width: 768px) { .neo-grid { grid-template-columns: 1fr !important; } }
        </style>
        <div class="neo-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 2rem; padding: 1rem;">
        <!-- Card 1 -->
        <div class="neo-card" style="background: #FF90E8; position: relative; display: flex; flex-direction: column;">
        <div style="border-bottom: 3px solid #000; padding: 0.8rem; background: #fff; display: flex; justify-content: space-between; align-items: center;">
        <span style="font-weight: 900; font-size: 1rem;">01 // FOOD_COMPUTING</span>
        <span style="font-size: 1.5rem;">🍽️</span>
        </div>
        <div style="padding: 1.5rem; flex-grow: 1;">
        <h3 style="font-weight: 900; font-size: 1.6rem; margin: 0 0 1rem 0; text-transform: uppercase; line-height: 1.2;">多模态视觉智能<br>& 食品计算</h3>
        <p style="font-weight: bold; margin-bottom: 1rem; text-align: justify; font-size: 0.95rem; line-height: 1.6;">面向计算机视觉、多模态学习与人工智能的前沿研究。探索图像、视频、文本等异构数据的<span style="background: #fff; padding: 0 4px; border: 2px solid #000;">协同建模</span>与<span style="background: #fff; padding: 0 4px; border: 2px solid #000;">跨模态对齐</span>。</p>
        <div style="background: #000; color: #FF90E8; padding: 1rem; margin-top: 1rem; font-size: 0.85rem; border: 2px solid #fff;">
        <p style="margin: 0;">+ 细粒度识别 / 目标检测</p>
        <p style="margin: 5px 0;">+ 跨模态检索 / 开放词汇识别</p>
        <p style="margin: 0;">+ 视觉语言模型 / 知识增强</p>
        </div>
        <p style="margin-top: 1rem; font-size: 0.9rem; font-weight: bold;">应用: 智能餐饮、健康管理、饮食文化计算。</p>
        </div>
        <div class="neo-scroll-text" style="border-top: 3px solid #000; background: #fff; padding: 0.5rem; font-size: 0.8rem; font-weight: bold;">
        <p>构建面向食物图像理解、食谱解析与营养估算的智能系统 ➔ 支持健康管理与农业生产 ➔ 引入大模型与知识图谱</p>
        </div>
        </div>
        <!-- Card 2 -->
        <div class="neo-card" style="background: #23A094; position: relative; display: flex; flex-direction: column;">
        <div style="border-bottom: 3px solid #000; padding: 0.8rem; background: #fff; display: flex; justify-content: space-between; align-items: center;">
        <span style="font-weight: 900; font-size: 1rem;">02 // EMBODIED_AI</span>
        <span style="font-size: 1.5rem;">🤖</span>
        </div>
        <div style="padding: 1.5rem; flex-grow: 1;">
        <h3 style="font-weight: 900; font-size: 1.6rem; margin: 0 0 1rem 0; text-transform: uppercase; line-height: 1.2;">具身智能<br>(Embodied AI)</h3>
        <p style="font-weight: bold; margin-bottom: 1rem; text-align: justify; font-size: 0.95rem; line-height: 1.6;">聚焦智能体在三维真实环境中的<span style="background: #fff; padding: 0 4px; border: 2px solid #000;">感知、理解与交互</span>。重点研究物体目标导航。</p>
        <div style="background: #000; color: #23A094; padding: 1rem; margin-top: 1rem; font-size: 0.85rem; border: 2px solid #fff;">
        <p style="margin: 0;">+ 多模态融合 / 场景记忆建模</p>
        <p style="margin: 5px 0;">+ 语义地图构建 / 动态决策</p>
        <p style="margin: 0;">+ 跨模态语义对齐</p>
        </div>
        <p style="margin-top: 1rem; font-size: 0.9rem; font-weight: bold;">愿景: 推动具身智能从感知走向认知。</p>
        </div>
        <div class="neo-scroll-text" style="border-top: 3px solid #000; background: #fff; padding: 0.5rem; font-size: 0.8rem; font-weight: bold;">
        <p>服务机器人、智能家居、自主探索 ➔ 提升未知环境探索效率 ➔ 长期任务执行鲁棒性</p>
        </div>
        </div>
        </div>
        </div>
    design:
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

