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
        # 欢迎来到 **智能信息处理实验室**
      text: |
        **鲁东大学智能信息处理实验室**依托鲁东大学计算机与人工智能学院，成立于 2020 年。在**中国科学院计算技术研究所智能信息处理重点实验室**支持下，实验室开展智能信息处理领域的基础研究与应用探索。

        实验室目前主要研究方向为**食品计算与 Agent**和**具身导航**。食品计算方向关注食品识别、检测、分割、检索、多模态理解与领域智能体；具身导航方向关注物体目标导航、多物体目标导航与视觉语言导航。实验室重视研究生与本科生科研能力培养，鼓励学生参与论文研究、学术交流和创新竞赛。
      image:
        filename: icon.png
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

  # 实验室影像：使用 Hugo Blox slider 展示六张代表性照片。
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
              size: contain
              position: center
              parallax: false
            position: center
        - title: 学术交流与团队活动
          content:
          align: center
          background:
            image:
              filename: slider/20250420.jpg
              filters:
                brightness: 1
              size: contain
              position: center
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
              size: contain
              position: center
              parallax: false
            position: center
        - title: 在实践中探索智能技术
          content:
          align: center
          background:
            image:
              filename: slider/20240713.jpg
              filters:
                brightness: 1
              size: contain
              position: center
              parallax: false
            position: center
        - title: 与优秀伙伴共同成长
          content:
          align: center
          background:
            image:
              filename: slider/20230625.jpg
              filters:
                brightness: 1
              size: contain
              position: center
              parallax: false
            position: center
        - title:
          content:
          align: center
          background:
            image:
              filename: slider/20230420.png
              filters:
                brightness: 1
              size: contain
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

  # 最新论文：自动读取 Hugo Blox 约定的 content/publication/。
  - block: collection
    content:
      title: 最新论文
      subtitle: 实验室近期发表的代表性研究成果
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

---
