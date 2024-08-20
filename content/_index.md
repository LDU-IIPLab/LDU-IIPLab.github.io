---
# Leave the homepage title empty to use the site title
title: 
type: landing

sections:
  - block: hero
    content:
      title: |
        # 欢迎来到智能信息处理实验室
      image:
        filename: icon.png
      text: |
        **鲁东大学智能信息处理实验室**依托于鲁东大学信息与电气工程学院，成立于2020年。在中国科学院计算技术研究所国家杰青蒋树强研究员、北京市杰青闵巍庆副研究员、北京市杰青宋新航副研究员的大力支持下，实验室逐渐发展成为鲁东大学智能信息处理领域的重要基础研究基地。目前，实验室主要成员包括研究人员5名、硕士/本科生50余名。实验室的研究领域涵盖计算机视觉、模式识别、机器学习/深度学习、多媒体技术、食品计算、具身智能等学科方向，在相关领域发表研究论文10余篇，其中5篇发表在中科院一区和二区期刊。实验室积极鼓励和培育本科生参与各项大学生创新创业大赛，获得中国机器人及人工智能大赛国赛一等奖一项，三等奖一项，省赛奖项十余项；同时鼓励和培养有潜力的本科生发表中科院二区论文两篇。实验室不仅致力于开展具有高学术影响力的基础理论和方法研究，同时密切关注具有潜在应用价值的技术创新，研发的多项创新技术即将获得实际应用。
    design:
      background:
        # Choose colors such as from https://html-color-codes.info
        # gradient_start: 'red'
        # gradient_end: 'blue'
        # The gradient angle from 0-360 degrees
        # gradient_angle: 270
        # Text color (true=light, false=dark, or remove for the dynamic theme color).
        # text_color_light: true

  - block: slider
    content:
      slides:

      - title: 
        content: 
        align: center
        background:
          image:
            filename: slider/20230420.png
            filters:
              brightness: 1
          position: center
      
      - title: 
        content: 
        align: center
        background:
          image:
            filename: slider/20230625.JPG
            filters:
              brightness: 1
          position: center

      - title: 
        content: 
        align: center
        background:
          image:
            filename: slider/20230802.png
            filters:
              brightness: 1
          position: center
      - title: 
        content: 
        align: center
        background:
          image:
            filename: slider/20240713.jpg
            filters:
              brightness: 1
          position: center
        
    design:
      spacing:
        # Customize the section spacing. Order is top, right, bottom, left.
        padding: ['0', '5vw', '0', '5vw']
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
---