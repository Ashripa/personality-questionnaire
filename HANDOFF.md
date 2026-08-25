# HANDOFF — 人格测评量表库项目

> 交接文档，供其他会话快速接手。最后更新：2026-08-25。
> 一句话：一个**非商用、专业/信息直给/全面**的人格测评量表库——98 个量表的结构化题库 + HF 风格多页测评平台，已部署到 Netlify。

---

## 1. 项目是什么

- 基于调研文件 `人格测评量表大全.html`（550 行，14/15 大流派、98 个量表）系统整理的**人格测评量表库**。
- 两部分：
  1. **题库**：98 个量表各一个子目录，内含结构化 Markdown（题项/维度/计分/信效度/版权/中文版）。
  2. **测评平台** `site/`：HF（Hugging Face）风格多页静态站，用户可浏览题库、在线作答、导出数据、读领域综述。
- 定位反复强调：**不是商用产品**。页面要信息直给、全面、专业（学术 register、引用/心理测量指标前置、表格化），不要营销钩子。

---

## 2. 目录结构

```
Questionnaire/
├── 人格测评量表大全.html      # 原始调研（综述的事实来源）
├── 题库收集进度.html          # tracker：98 量表元数据 + 状态分类（DATA/CATS/SOURCES/STATUS）
├── HANDOFF.md                 # 本文件
├── <98 个量表子目录>/          # 如 ipip/IPIP-50.md, rses/RSES.md ...
└── site/                      # 部署到 Netlify 的测评平台
    ├── index.html             # 主页（HF hero + 三列发现区）
    ├── fill.html              # 问卷填写（对应 HF Models）：hub + ?s=<id> 详情内嵌作答
    ├── view.html              # 问卷查看（对应 HF Datasets）：全库浏览 + ?s=<id> 详情
    ├── docs.html              # 领域综述（对应 HF Docs）：左 TOC + 正文 + 滚动高亮
    └── assets/
        ├── app.css            # 全站设计系统（HF 风格，靛蓝主色 #4f46e5，暗色主题，字体渲染优化）
        ├── library.js         # 98 量表元数据（见 §4）
        ├── scales.js          # 6 个可作答量表的完整题项 + 计分引擎 scoreScaleData()
        ├── common.js          # mountChrome()/esc()/catDot()/catName() 等共享工具
        └── docs-content.html  # 综述原始片段（已内联进 docs.html，保留备份）
```

路由：详情页用查询参数 `?s=<scaleId>`（纯静态、免构建、Netlify 友好）。

---

## 3. site/ 平台要点

- **4 页对应 HF 三区 + Docs**：填写=Models（可运行）、查看=Datasets（可浏览）、综述=Docs。
- 每页 `<head>` 加载 Google Fonts `Source Sans 3`，链 `assets/app.css`。
- JS 依赖顺序：`library.js` →（fill 另需 `scales.js`）→ `common.js` → 页面内联脚本。
- 作答引擎在 `scales.js` 的 `scoreScaleData(scale, answers)`，通用支持不同作答点数（反向计分公式 `revBase - raw`）、多维度雷达图、JSON/CSV 导出。
- **设计系统关键**：主色靛蓝 `#4f46e5`（青绿 `#0f766e` 降级为"可作答"状态色）；暗色主题用 `[data-theme]` + `prefers-color-scheme`；字体已做渲染优化（见 §7 gotcha）。

---

## 4. 数据模型（library.js 全局变量）

- `LIB[]` — 98 个量表元数据：`{id,n(中文名),en,cat,s(认可度1-5),q(题量),p(优先级1-5),acc(获取方式),cr(版权),cn(中文版),note}`
- `CATS` / `CAT_ORDER` / `CAT_COLOR` — 15 个分类的中文名/排序/色值
- `ACC_LABEL` — 获取方式：open公域/paper论文/academic学术/commercial商业/strict严格/pro专业施测/na非量表
- `STATUS` — 每个 id 的采集状态（见下）
- `ST_LABEL` — full完整题项/risk版权风险/partial部分题项/struct仅结构/framework方法论
- `SOURCES` — 每个 id 的 [标签, 可核实 URL]
- `FILLABLE` — 可在线作答的 id 数组，**必须与 scales.js 的键一致**

**当前可作答量表（6 个）**：`ipip`(50题) `rses`(10) `gse`(10) `ds14`(14) `scc`(12) `brs`(6)。
扩展作答量表 = 在 scales.js 加结构化对象 + 把 id 加进 FILLABLE。

**采集状态统计（98）**：full 46 · struct 38 · framework 8 · risk 3 · partial 3。
- full=完整题项可用；risk=有题项但版权风险(tas20/teique/cdrisc)；partial=部分(ias/via/srp4)；struct=仅结构(商业/专业量表，不复制题项)；framework=方法论(非固定量表)。

---

## 5. 题库采集：反编造红线 ⚠️（本项目最重要的原则）

- **英文题项文本整体可靠；编造的重灾区是引用文献、样本量、拟合指标、中文翻译归属。**
- 商业/严格版权量表（NEO/MMPI/PCL-R/16PF/MBTI 等）**只做结构版，绝不复制/编造题项**。
- 已完成两轮验证代理审计并修复关键错误，包括：
  - MACH-IV 题 8/18 互换；PID-5-BF 侧面标签互换 + 假切分值；EPQ-RSC 超量程常模表 + 虚构第五作者；
  - NARQ 引用 DOI 指向无关论文 + 题号错乱；NFC 中文题 13 语义反转；DS14/SCC 引用错/编造源；BRS 虚构作者。
- **给量表补题/改题时**：必须逐字取自可核实公开来源；无来源就如实标"暂无可核实版本"，**不要凑数**。中文版没有验证来源时只给英文 + 参考释义说明。

---

## 6. 部署

**GitHub**：`Ashripa/personality-questionnaire`（**private**），默认分支 `main`。整个 Questionnaire 目录已推。
**Netlify 站点**：https://univercell-personality-questionnaire.netlify.app （公开）

### ⚠️ 三个关键 gotcha

1. **Netlify 未连 Git 仓库**（`repo_url: None`）——是手动 CLI 部署起家。**push 到 GitHub 不会触发 Netlify 构建**。改代码后必须手动部署：
   ```bash
   cd Questionnaire
   netlify deploy --prod --dir=site --site=30238098-4430-46d2-bfb5-7ac1239e982e
   ```
   （若要改成自动：Netlify 面板 Site → Build & deploy → Link repository，选该仓库、分支 main、**发布目录填 `site`**，需走一次 GitHub OAuth。）
2. **git 走代理**：本机走 `http://127.0.0.1:7890` 代理，但 git 默认不继承，会报 `TLS connect error`。已给该仓库设了本地 `http.proxy`。若换机/换仓库遇到同样报错：
   ```bash
   git config http.proxy http://127.0.0.1:7890
   ```
3. **Netlify SSO 登录墙**：CLI 新建站点会默认继承账号 `account_sso_login`，导致站点返回 401 登录墙。已通过 API 关闭：`netlify api updateSite --data '{"site_id":"...","body":{"sso_login":false}}'`。

### 账号/ID 速查
- GitHub 账号：`Ashripa`（gh CLI 已登录，有 repo/workflow 权限）
- Netlify site_id：`30238098-4430-46d2-bfb5-7ac1239e982e`
- Netlify 另有公开站 `univercell-aezir`（无关，别混）

---

## 7. 已知待办 / 下一步

- **HF 风格改造**（进行中，参考用户提供的 HF 主页 DOM 校正）：
  - 主页 hero 已从"深色面板 + 应用窗口 mock"改为 **cult-ui `hero-static-radial-gradient` 风格**：深色面板 + 纯 CSS 径向 mesh 渐变视觉块（`.hero-visual`，蓝#006cff/青#00d2ff/紫#7c3aed）+ 环境辉光 `.hero-glow` + 徽章行 `.hero-badges`。原 `.mockw*` CSS 已移除。（cult-ui 原组件是 WebGL shader React 组件，静态站无法直接用，按视觉复刻。）
  - 剩余可选：真实 view.html 截图做 desktop/tablet/mobile 三张 WebP 响应式预览（**不要用 iframe，不要抄 HF 资产**）。
  - 三列"发现区"信息密度、紧凑资源行（~60px 高、hover 靛蓝/暗色黄）。
  - view.html / fill.html 详情页、筛选、`:focus-visible` 焦点环统一。
- **字体**：已做渲染层优化（`font-synthesis:none` 关 faux bold、CJK 回退栈、抗锯齿、kerning、行高 1.65）。**已加中文 webfont**：4 页 `<head>` 通过 Google Fonts 加载 `Noto Sans SC:wght@400;500;700;900`，`--sans` 现为 `"Source Sans 3","Noto Sans SC",...`（拉丁走 Source Sans 3，中文走 Noto Sans SC）。此前"字体干干的"根因是中文无 webfont、回退到系统黑体（Win=微软雅黑），非 Netlify 未同步。
- **无障碍**：搜索框加 `aria-label`、活动导航加 `aria-current`、移动端触控目标 ≥44px。

## 8. 用户偏好（跨会话通用）
- 中文沟通；要专业、信息直给、全面；**极度重视反编造/可核实**。
- 调研类任务默认派并行子代理、产出可视化报告。
- 部署目标 Netlify；代码托管在自己的 GitHub（Ashripa）。
