---
# 主页维护说明：
# 1. 每个 `block` 对应一个 Hugo Blox 内置区块，调整顺序只需移动整个区块。
# 2. 新闻会自动读取 content/news/ 下的内容，无需在主页重复维护。
# 3. 图片统一放在 assets/media/，这里只填写相对文件名。
title:
type: landing

sections:
  # 首屏：使用 Hugo Blox slider 展示六张代表性照片。
  - block: slider
    content:
      slides:
        - title:
          align: center
          background:
            image:
              filename: slider/20260718.jpg
              size: cover
              position: center
              parallax: false
            position: center
        - title:
          align: center
          background:
            image:
              filename: slider/20250819.jpg
              size: cover
              position: center
              parallax: false
            position: center
        - title:
          align: center
          background:
            image:
              filename: slider/20250420.jpg
              size: cover
              position: center
              parallax: false
            position: center
        - title:
          align: center
          background:
            image:
              filename: slider/20250419.jpg
              size: cover
              position: center
              parallax: false
            position: center
        - title:
          align: center
          background:
            image:
              filename: slider/20240713.jpg
              size: cover
              position: center
              parallax: false
            position: center
        - title:
          align: center
          background:
            image:
              filename: slider/20230625.jpg
              size: cover
              position: center
              parallax: false
            position: center
        - title:
          align: center
          background:
            image:
              filename: slider/20230420.png
              size: cover
              position: center
              parallax: false
            position: center
    design:
      spacing:
        padding: ['0', '0', '0', '0']
      # 当前 Hugo Blox 版本依赖全屏模式为 slider 提供稳定高度。
      is_fullscreen: true
      loop: true
      interval: 5000

  # 新闻动态：自动读取 content/news/，新增新闻后主页会自动更新。
  - block: collection
    content:
      title: 新闻动态
      count: 3
      filters:
        folders:
          - news
        featured_only: false
        exclude_featured: false
        exclude_future: false
        exclude_past: false
      offset: 0
      sort_by: Date
      sort_ascending: false
    design:
      view: showcase
      columns: '1'

  # 科研成果：自动读取 Hugo Blox 约定的 content/publication/。
  - block: collection
    content:
      title: 科研成果
      count: 4
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
    design:
      view: citation
      columns: '1'

  # 实验室概况：放在首页底部，简要说明定位与研究方向。
  - block: hero
    content:
      text: |
        **鲁东大学智能信息处理实验室**依托鲁东大学计算机与人工智能学院，成立于 2020 年。在中国科学院计算技术研究所智能信息处理重点实验室支持下，实验室面向智能信息处理领域开展基础研究与应用探索，注重理论方法、关键技术和实际场景之间的结合。

        实验室目前主要围绕**食品计算与 Agent**、**具身智能**两个方向开展研究。食品计算与 Agent 方向关注食品识别、检测、分割与检索，多模态食品理解、食谱与营养知识建模，以及面向食品、营养和健康任务的领域智能体；具身智能方向关注物体目标导航、多物体目标导航与视觉语言导航，研究智能体在三维环境中的视觉感知、语言理解、空间推理、路径规划和行动决策。

        实验室重视研究生和本科生科研能力培养，通过论文研究、项目实践、学术交流和创新竞赛提升学生的问题分析、方法设计与工程实践能力，鼓励学生围绕真实科研问题持续探索，并积极参与国内外学术交流与合作。
    # design:
    #   spacing:
    #     padding: ['56px', '0', '56px', '0']

---
