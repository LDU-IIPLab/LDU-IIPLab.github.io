---
# Leave the homepage title empty to use the site title
title: 
type: landing

sections:
  - block: hero
    content:
      title: |
        ## 欢迎来到智能信息处理实验室
      image:
        filename: icon.png
      text: |
        **鲁东大学智能信息处理实验室**成立于2020年，依托于鲁东大学信息与电气工程学院,并在中国科学院计算技术研究所的国家杰青蒋树强研究员、北京市杰青闵巍庆副研究员、北京市杰青宋新航副研究员的大力支持下迅速成长。如今，实验室已经成为鲁东大学智能信息处理领域的重要基础研究基地。

        实验室现有研究人员5名，硕士和本科生50余名，研究方向涵盖了计算机视觉、模式识别、机器学习与深度学习、多媒体技术、食品计算和具身智能等领域。在这些前沿领域，已发表了10余篇高水平研究论文，其中5篇发表于中科院一区和二区期刊。实验室高度重视本科生的科研培养，积极鼓励他们参与大学生创新创业大赛，取得了中国机器人及人工智能大赛国家一等奖一项、三等奖一项，以及多项省级奖项的优异成绩。此外，实验室还培养了多名有潜力的本科生发表中科院二区论文两篇。

        实验室不仅专注于具有高学术影响力的基础理论和方法研究，还致力于推动具有实际应用价值的技术创新。目前，多项创新技术即将进入实际应用阶段，进一步彰显了实验室在智能信息处理领域的实力与影响力。

  - block: slider
    content:
      slides:
      
      - title: 
        content: 
        align: center
        background:
          image:
            filename: slider/20240713.jpg
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
            filename: slider/20230625.JPG
            filters:
              brightness: 1
          position: center

      - title: 
        content: 
        align: center
        background:
          image:
            filename: slider/20230420.png
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
      columns: '2'
---