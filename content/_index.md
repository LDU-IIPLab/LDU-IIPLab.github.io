---
# 主页维护说明：
# 1. 每个 `block` 对应一个 Hugo Blox 内置区块，调整顺序只需移动整个区块。
# 2. 新闻、论文和成员会自动读取 content/ 下的内容，无需在主页重复维护。
# 3. 图片统一放在 assets/media/，这里只填写相对文件名。
title:
type: landing

sections:
  # 首屏：一句话说明实验室定位。页面跳转统一由顶部导航承担。
  - block: hero
    content:
      title: |
        # 智能信息处理实验室
      text: |
        聚焦食品计算与智能体、具身导航研究，推进基础方法、应用实践与人才培养。
      image:
        filename: slider/20250819.jpg
    design:
      spacing:
        padding: ['56px', '0', '56px', '0']

  # 实验室简介：保持为普通 Markdown，后续可直接修改文字。
  - block: markdown
    content:
      title: 关于我们
      subtitle: 依托鲁东大学计算机与人工智能学院
      text: |
        鲁东大学智能信息处理实验室成立于 2020 年，在中国科学院计算技术研究所智能信息处理重点实验室支持下开展研究。实验室以食品计算与智能体、具身导航为主要研究方向，重视基础方法研究、实际场景应用和学生创新能力培养。

    design:
      columns: '1'

  # 研究方向：使用内置 features block，避免在 Markdown 中维护 HTML 和行内样式。
  - block: features
    content:
      title: 研究方向
      subtitle: 围绕食品智能与空间智能开展方法研究和应用探索
      items:
        - icon: utensils
          icon_pack: fas
          name: 食品计算与智能体
          description: 研究食物视觉理解、食谱与营养知识建模、多模态学习和智能体方法，服务健康管理、智能餐饮与食品领域知识应用。
        - icon: robot
          icon_pack: fas
          name: 具身导航
          description: 研究物体目标导航、多物体目标导航与视觉语言导航，提升智能体在三维环境中的感知、理解、规划和决策能力。
    design:
      columns: '2'

  # 最新动态：自动读取 content/news/，新增新闻后主页会自动更新。
  - block: collection
    content:
      title: 最新动态
      subtitle: 关注实验室近期研究、竞赛与学术活动
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

  # 实验室影像：只保留三张代表性照片，避免整屏轮播拖慢浏览节奏。
  - block: slider
    content:
      slides:
        - title: 学术交流与团队活动
          align: center
          background:
            image:
              filename: slider/20250420.jpg
              filters:
                brightness: 0.75
              size: cover
              position: center
              parallax: false
            position: center
        - title: 在实践中探索智能技术
          align: center
          background:
            image:
              filename: slider/20240713.jpg
              filters:
                brightness: 0.75
              size: cover
              position: center
              parallax: false
            position: center
        - title: 与优秀伙伴共同成长
          align: center
          background:
            image:
              filename: slider/20230625.jpg
              filters:
                brightness: 0.75
              size: cover
              position: center
              parallax: false
            position: center
    design:
      spacing:
        padding: ['0', '0', '0', '0']
      is_fullscreen: false
      loop: true
      interval: 5000

  # 最新论文：自动读取 content/publications/。
  - block: collection
    content:
      title: 最新论文
      subtitle: 实验室近期发表的代表性研究成果
      count: 4
      filters:
        folders:
          - publications
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

---
