# cvnices · 个人简介网站 (Personal Portfolio)

个人简介网站源码。审计学本科 + 数据科学硕士在读，聚焦 AI for Finance、可解释 AI、评测体系。

🌐 **在线访问**：https://cvnices8-byte.github.io/own-web/

## 技术栈 / Stack
- 纯静态站 / Pure static: HTML + CSS + 原生 JS（无构建、零后端依赖）
- 图表 / Charts: [ECharts](https://echarts.apache.org/) (CDN)
- 部署 / Deploy: GitHub Pages

## 双主题 / Dual Themes
- **亮色（默认）** — MiMo 清新现代风（参考 mimo.mi.com）
- **暗色** — ASCII 终端/代码风（参考 ascii-magic.com）

右上角月亮/太阳图标一键切换，中英双语（EN/中 按钮）。

## 板块 / Sections
Hero · About · Education · Skills · Projects · Research · Experience · Campus · Certificates · Interests · Contact

5 个项目展示（财务欺诈检测 / BI-RADS 分类 / COVID-19 蓝图 / 肥胖预测 / 数据工作台）+ ECharts 数据可视化（雷达 / 柱状）+ 专属项目可视化（融合架构 / 评测流水线 / 分析链 / 模块）。

## 本地预览 / Local Preview
```bash
python -m http.server 8080
# 打开 http://localhost:8080
```

## 目录结构 / Structure
```
site/
  index.html       # 单页结构
  css/style.css    # 双主题变量 + 样式 + 动效
  js/data.js       # 内容数据（中英双语）
  js/main.js       # 渲染 + 交互 + 图表
  assets/          # 卡通形象 + 项目封面图
```

© 2026 Shao Jinbo
