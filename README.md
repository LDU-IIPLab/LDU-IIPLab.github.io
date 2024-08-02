# Information Processing Laboratory
这是鲁东大学智能信息处理实验室的主页源代码仓库。

## 如何添加新内容
### 添加自己的个人页面
1. 在 `content\authors` 目录下新建以自己名字命名的目录，放入 `_index.md`（内容参照其他人）和头像 `avatar.jpg` 或 `avatar.png`（最好是正方形）。
2. 修改`_index.md`中的内容为自己的。其中`user_groups`字段从 `content\team\index.md`中的`user_groups`选择。
3. 修改完成后提交即可。

## 设置Git代理
```bash
#使用socks5代理（推荐）
git config --global http.https://github.com.proxy socks5://127.0.0.1:PORT

#使用http代理（不推荐）
git config --global http.https://github.com.proxy http://127.0.0.1:PORT

#取消代理
git config --global --unset http.proxy 
git config --global --unset https.proxy
```