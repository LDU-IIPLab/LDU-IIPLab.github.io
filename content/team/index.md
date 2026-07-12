---
title: 研究团队

type: landing

sections:
  - block: people
    content:
      title: 研究人员
      # Choose which groups/teams of users to display.
      #   Edit `user_groups` in each user's profile to add them to one or more of these groups.
      user_groups:
          - 研究人员
      sort_by: Params.order
      sort_ascending: true
    design:
      show_interests: true
      show_role: true
      show_social: true

  - block: people
    content:
      title: 在读研究生
      user_groups:
          - 2024 级硕士生
          - 2025 级硕士生
          - 2026 级硕士生
      sort_by: Params.last_name
      sort_ascending: true
    design:
      show_interests: false
      show_role: false
      show_social: true

  - block: people
    content:
      title: 毕业校友
      user_groups:
          - 2025 届硕士生
          - 2026 届硕士生
      sort_by: Params.last_name
      sort_ascending: true
    design:
      show_interests: false
      show_role: false
      show_social: true
---