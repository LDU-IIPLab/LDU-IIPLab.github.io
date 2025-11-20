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
      title: ''
      subtitle: ''
      text: |
        <div class="research-container" style="padding: 3rem 1rem; border-radius: 16px; position: relative; overflow: hidden;">
          <style>
            /* 默认浅色模式样式 */
            .research-container {
              background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
              color: #1e293b;
            }
            .research-title {
              background: linear-gradient(to right, #0284c7, #7c3aed);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }
            .research-card {
              background: rgba(255, 255, 255, 0.7);
              border: 1px solid rgba(255, 255, 255, 0.8);
              box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            }
            .icon-box-food { background: rgba(14, 165, 233, 0.1); color: #0284c7; }
            .icon-box-robot { background: rgba(139, 92, 246, 0.1); color: #7c3aed; }
            .text-highlight-food { color: #0284c7; }
            .text-highlight-robot { color: #7c3aed; }
            .card-footer { border-top: 1px solid rgba(0, 0, 0, 0.05); }
            .footer-label { color: #64748b; }
            .footer-text { color: #334155; }
            .blob-1 { background: radial-gradient(circle, rgba(14, 165, 233, 0.15) 0%, rgba(0,0,0,0) 70%); }
            .blob-2 { background: radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, rgba(0,0,0,0) 70%); }

            /* 深色模式适配 (Hugo Blox 通常使用 .dark 类或媒体查询) */
            @media (prefers-color-scheme: dark) {
              .research-container {
                background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
                color: #f1f5f9;
              }
              .research-title {
                background: linear-gradient(to right, #38bdf8, #c084fc);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
              }
              .research-card {
                background: rgba(255, 255, 255, 0.03);
                border: 1px solid rgba(255, 255, 255, 0.05);
                box-shadow: none;
              }
              .icon-box-food { background: rgba(56, 189, 248, 0.1); color: #38bdf8; }
              .icon-box-robot { background: rgba(168, 85, 247, 0.1); color: #c084fc; }
              .text-highlight-food { color: #38bdf8; }
              .text-highlight-robot { color: #c084fc; }
              .card-footer { border-top: 1px solid rgba(255, 255, 255, 0.1); }
              .footer-label { color: #94a3b8; }
              .footer-text { color: #cbd5e1; }
              .blob-1 { background: radial-gradient(circle, rgba(56, 189, 248, 0.4) 0%, rgba(0,0,0,0) 70%); }
              .blob-2 { background: radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, rgba(0,0,0,0) 70%); }
            }
            
            /* 强制深色模式类 (如果主题通过 class 切换) */
            .dark .research-container {
                background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
                color: #f1f5f9;
            }
            .dark .research-title {
                background: linear-gradient(to right, #38bdf8, #c084fc);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
            .dark .research-card {
                background: rgba(255, 255, 255, 0.03);
                border: 1px solid rgba(255, 255, 255, 0.05);
                box-shadow: none;
            }
            .dark .icon-box-food { background: rgba(56, 189, 248, 0.1); color: #38bdf8; }
            .dark .icon-box-robot { background: rgba(168, 85, 247, 0.1); color: #c084fc; }
            .dark .text-highlight-food { color: #38bdf8; }
            .dark .text-highlight-robot { color: #c084fc; }
            .dark .card-footer { border-top: 1px solid rgba(255, 255, 255, 0.1); }
            .dark .footer-label { color: #94a3b8; }
            .dark .footer-text { color: #cbd5e1; }
            .dark .blob-1 { background: radial-gradient(circle, rgba(56, 189, 248, 0.4) 0%, rgba(0,0,0,0) 70%); }
            .dark .blob-2 { background: radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, rgba(0,0,0,0) 70%); }

          </style>

          <!-- Decorative Blobs -->
          <div class="blob-1" style="position: absolute; top: -10%; left: -10%; width: 40%; height: 40%; border-radius: 50%; filter: blur(40px);"></div>
          <div class="blob-2" style="position: absolute; bottom: -10%; right: -10%; width: 40%; height: 40%; border-radius: 50%; filter: blur(40px);"></div>

          <h2 class="research-title" style="text-align: center; font-size: 2.5rem; margin-bottom: 3rem; position: relative; z-index: 1; font-weight: bold;">研究方向</h2>
          
          <div class="glass-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; max-width: 1200px; margin: 0 auto; position: relative; z-index: 1;">
            
            <!-- Card 1 -->
            <div class="research-card" style="backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); border-radius: 24px; padding: 2.5rem; transition: transform 0.3s ease; height: 100%;">
              <div class="icon-box-food" style="width: 60px; height: 60px; border-radius: 16px; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem;">
                <span style="font-size: 2rem;">🍽️</span>
              </div>
              <h3 style="font-size: 1.5rem; margin-bottom: 1rem; font-weight: 600;">多模态视觉智能<br>与食品计算</h3>
              <p style="font-size: 1rem; line-height: 1.7; margin-bottom: 1.5rem; opacity: 0.9;">
                面向计算机视觉、多模态学习与人工智能的前沿研究。重点探索图像、视频、文本等异构数据的<strong class="text-highlight-food">协同建模</strong>、<strong class="text-highlight-food">跨模态对齐</strong>与<strong class="text-highlight-food">语义理解</strong>。
              </p>
              <div class="card-footer" style="padding-top: 1.5rem; margin-top: auto;">
                <div class="footer-label" style="font-size: 0.9rem; font-weight: 500; margin-bottom: 0.5rem;">应用场景</div>
                <div class="footer-text" style="font-size: 0.85rem;">智能餐饮 • 健康管理 • 饮食文化计算</div>
              </div>
            </div>

            <!-- Card 2 -->
            <div class="research-card" style="backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px); border-radius: 24px; padding: 2.5rem; transition: transform 0.3s ease; height: 100%;">
              <div class="icon-box-robot" style="width: 60px; height: 60px; border-radius: 16px; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem;">
                <span style="font-size: 2rem;">🤖</span>
              </div>
              <h3 style="font-size: 1.5rem; margin-bottom: 1rem; font-weight: 600;">具身智能<br>(Embodied AI)</h3>
              <p style="font-size: 1rem; line-height: 1.7; margin-bottom: 1.5rem; opacity: 0.9;">
                聚焦智能体在三维真实环境中的<strong class="text-highlight-robot">感知、理解与交互</strong>。重点研究物体目标导航，通过多模态融合与场景记忆建模，提升探索效率。
              </p>
              <div class="card-footer" style="padding-top: 1.5rem; margin-top: auto;">
                <div class="footer-label" style="font-size: 0.9rem; font-weight: 500; margin-bottom: 0.5rem;">应用场景</div>
                <div class="footer-text" style="font-size: 0.85rem;">服务机器人 • 智能家居 • 自主探索</div>
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