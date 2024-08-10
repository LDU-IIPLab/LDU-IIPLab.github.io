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
        <br>

        **智能信息处理实验室（Intelligent Information Processing Laboratory）** 成立于2020年，是鲁东大学信息与电气工程学院下属的研究团队。\
        主要研究方向为轻量级识别、零样本检测、图像检索等方向的研究和应用。
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

      - title: 👋 Welcome to the group
        content: Take a look at what we're working on...
        align: center
        background:
          image:
            filename: 
            filters:
              brightness: 0.7
          position: right
          color: '#666'

      - title: Lunch & Learn ☕️
        content: 'Share your knowledge with the group and explore exciting new topics together!'
        align: left
        background:
          image:
            filename: 
            filters:
              brightness: 0.7
          position: center
          color: '#555'

      - title: World-Class Semiconductor Lab
        content: 'Just opened last month!'
        align: right
        background:
          image:
            filename: 
            filters:
              brightness: 0.5
          position: center
          color: '#333'
        link:
          icon: graduation-cap
          icon_pack: fas
          text: Join Us
          url: ../contact/
    design:
      # Slide height is automatic unless you force a specific height (e.g. '400px')
      slide_height: ''
      is_fullscreen: true
      # Automatically transition through slides?
      loop: true
      # Duration of transition between slides (in ms)
      interval: 2000

  - block: collection
    content:
      title: 新闻
      subtitle: 
      text: 
      count: 6
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
      view: card  
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
      count: 5
      filters:
        folders:
          - publication
        # publication_type: 'article-journal'
    design:
      view: citation
      columns: '1'

  - block: markdown
    content:
      title:
      subtitle:
      text: |
        {{% cta cta_link="./team/" cta_text="研究团队 -->" %}}
    design:
      columns: '1'
---
