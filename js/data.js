/* ============ 双语 UI 文案 ============ */
const I18N = {
  zh: {
    "nav.logo": "邵锦波",
    "nav.about": "关于",
    "nav.edu": "教育",
    "nav.skills": "技能",
    "nav.projects": "项目",
    "nav.research": "研究",
    "nav.exp": "经历",
    "nav.contact": "联系",
    "hero.subtitle": "审计学本科 + 数据科学硕士在读，让 AI 在财务与商业决策中更可解释、更可信、更可落地。",
    "hero.cta1": "查看项目",
    "hero.cta2": "联系我",
    "about.title": "关于我",
    "about.lead": "财务 × 数据科学的复合背景，既懂业务、会建模，也能交付。",
    "edu.title": "教育背景",
    "skills.title": "技能",
    "projects.title": "项目",
    "projects.lead": "4 个核心项目 + 1 个个人工具，覆盖财务 AI、临床 NLP、公共卫生与机器学习。",
    "research.title": "研究兴趣与学术产出",
    "exp.title": "实习经历",
    "campus.title": "校园经历",
    "cert.title": "证书与荣誉",
    "interests.title": "兴趣",
    "contact.title": "联系我",
    "contact.cta": "Let's build something reliable.",
    "footer.copyright": "© 2026 邵锦波 Shao Jinbo",
    "footer.tech": "纯静态站 · HTML/CSS/JS + ECharts · 部署于 GitHub Pages"
  },
  en: {
    "nav.logo": "Shao Jinbo",
    "nav.about": "About",
    "nav.edu": "Education",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.research": "Research",
    "nav.exp": "Experience",
    "nav.contact": "Contact",
    "hero.subtitle": "Audit undergraduate + Data Science MSc candidate, making AI more explainable, trustworthy and actionable in finance and business decisions.",
    "hero.cta1": "View Projects",
    "hero.cta2": "Contact Me",
    "about.title": "About Me",
    "about.lead": "A finance × data science hybrid background — I understand the business, build the models, and ship the results.",
    "edu.title": "Education",
    "skills.title": "Skills",
    "projects.title": "Projects",
    "projects.lead": "4 core projects + 1 personal tool, spanning finance AI, clinical NLP, public health and machine learning.",
    "research.title": "Research Interests & Outputs",
    "exp.title": "Experience",
    "campus.title": "Campus",
    "cert.title": "Certificates & Honors",
    "interests.title": "Interests",
    "contact.title": "Contact",
    "contact.cta": "Let's build something reliable.",
    "footer.copyright": "© 2026 Shao Jinbo",
    "footer.tech": "Static site · HTML/CSS/JS + ECharts · Deployed on GitHub Pages"
  }
};

/* ============ 内容数据 ============ */
const DATA = {
  /* 首屏标签 */
  heroBadges: [
    { zh: "数据科学硕士（在读）", en: "Data Science MSc (in progress)" },
    { zh: "AI for Finance", en: "AI for Finance" },
    { zh: "可解释 AI · 评测体系", en: "Explainable AI · Evaluation" },
    { zh: "CISA 持证", en: "CISA Certified" },
    { zh: "审计 × AI 复合背景", en: "Audit × AI Hybrid" }
  ],

  /* 关于我 · 4 条优势 */
  about: [
    { idx: "01", zh: "财务 × 数据科学复合背景", en: "Finance × Data Science Hybrid", desc: { zh: "审计学本科（财务核算、审计程序、内控与信息系统审计）+ 数据科学硕士在读（机器学习、数据治理、可解释 AI），兼具「懂业务、会建模、能交付」的复合能力。", en: "Audit undergraduate plus a Data Science MSc in progress — spanning financial accounting, audit procedures, IS audit, ML, data governance and XAI." } },
    { idx: "02", zh: "AI 项目全流程实战", en: "Full-cycle AI Project Practice", desc: { zh: "在多个真实项目中主导评测体系与数据管线建设——MD5 去重、分层分组交叉验证、RegEx 预处理流水线、一致性校验，对模型能力边界与数据质量有从原理到实践的判断力。", en: "Led evaluation systems and data pipelines across real projects — MD5 dedup, stratified group CV, RegEx pipelines, consistency checks." } },
    { idx: "03", zh: "项目领导与咨询式交付", en: "Leadership & Consultative Delivery", desc: { zh: "多次担任项目组长/负责人，擅长将复杂技术方案转化为面向非技术决策者的清晰汇报，具备「问题定义 → 方案落地 → 汇报交付」完整闭环经验。", en: "Repeatedly led teams, translating complex technical solutions into clear reports for non-technical decision-makers." } },
    { idx: "04", zh: "面向 Agent 与自动化的热情", en: "Passion for Agents & Automation", desc: { zh: "持续关注 AI Agent 与 AI 搜索能力演进，习惯用脚本与自动化提升真实任务效率，推动「人机协作」在财务与办公场景落地。", en: "Following the evolution of AI agents and search, using scripting and automation to boost real-world productivity." } }
  ],

  /* 教育 */
  education: [
    {
      time: "2026.03 – 2027.09",
      school: { zh: "马来亚大学（University of Malaya）", en: "University of Malaya" },
      degree: { zh: "数据科学硕士（在读）", en: "Master of Data Science (in progress)" },
      loc: { zh: "吉隆坡", en: "Kuala Lumpur" },
      points: { zh: ["机器学习、数据治理与可解释 AI", "公共卫生与金融场景的数据科学应用"], en: ["Machine learning, data governance & explainable AI", "Data science for public health and finance"] }
    },
    {
      time: "2021.09 – 2025.06",
      school: { zh: "浙江财经大学东方学院", en: "Zhejiang University of Finance & Economics (Oriental College)" },
      degree: { zh: "审计学（本科）· 团支书 · 中共预备党员", en: "B.A. Auditing · Class Secretary · CPC Probationary Member" },
      loc: { zh: "浙江杭州", en: "Hangzhou, Zhejiang" },
      points: { zh: ["主修：中级财务会计、信息系统审计、IT 治理与管理、公司战略与风险管理、程序设计、MySQL 数据库基础", "荣誉：校级二、三等奖学金，优秀团干部，优秀学生助理"], en: ["Core: Intermediate Financial Accounting, IS Audit, IT Governance, Strategic Risk Management, Programming, MySQL", "Honors: University 2nd/3rd-class scholarships, Outstanding League Cadre"] }
    }
  ],

  /* 技能 */
  skills: {
    groups: [
      { zh: "编程语言", en: "Languages", tags: ["Python", "SQL", "R", "Java"] },
      { zh: "机器学习与深度学习", en: "ML & Deep Learning", tags: ["pandas", "scikit-learn", "LightGBM", "XGBoost", "HistGradientBoosting", "BERTimbau", "FinBERT", "Wav2Vec2.0", "SHAP"] },
      { zh: "方法与流程", en: "Methods & Workflow", tags: ["特征工程", "交叉验证", "可解释性分析", "多模态融合", "聚类", "时间序列", "数据治理", "可复现研究"] },
      { zh: "可视化与数据产品", en: "Visualization & Products", tags: ["Plotly", "Seaborn", "ECharts", "GUI 数据产品"] },
      { zh: "财务与审计", en: "Finance & Audit", tags: ["CISA", "审计底稿", "IPO/年报审计", "财务核算", "用友财务系统"] }
    ],
    radar: {
      zh: [
        { name: "Python 数据分析", v: 88 }, { name: "SQL", v: 80 }, { name: "机器学习建模", v: 82 },
        { name: "可解释 AI", v: 78 }, { name: "评测体系设计", v: 85 }, { name: "数据治理", v: 80 },
        { name: "财务/审计", v: 85 }, { name: "项目管理", v: 88 }, { name: "中英双语", v: 78 }
      ],
      en: [
        { name: "Python", v: 88 }, { name: "SQL", v: 80 }, { name: "ML Modeling", v: 82 },
        { name: "Explainable AI", v: 78 }, { name: "Evaluation Design", v: 85 }, { name: "Data Governance", v: 80 },
        { name: "Finance/Audit", v: 85 }, { name: "Project Mgmt", v: 88 }, { name: "Bilingual", v: 78 }
      ]
    }
  },

  /* 项目 */
  projects: [
    {
      id: "fraud",
      role: { zh: "独立研究", en: "Independent Research" },
      dirs: [{ zh: "AI for Finance", en: "AI for Finance" }, { zh: "可解释 AI", en: "Explainable AI" }, { zh: "多模态学习", en: "Multimodal" }],
      title: { zh: "多模态机器学习在企业财务欺诈检测中的应用研究", en: "Multimodal ML for Corporate Financial Fraud Detection" },
      pain: { zh: "单一模态难以捕捉财务报告、文本与电话会议间的矛盾信号，提出跨注意力三模态融合框架。", en: "Single modalities miss conflicting signals across financial reports, text and earnings calls — proposing a cross-attention tri-modal fusion framework." },
      metrics: [
        { num: "3", label: { zh: "模态数", en: "Modalities" } },
        { num: "2", label: { zh: "数据源", en: "Data Sources" } },
        { num: "12", label: { zh: "研究月份", en: "Months" } },
        { num: "6", label: { zh: "研究阶段", en: "Phases" } }
      ],
      points: {
        zh: ["系统梳理财务比率、文本 NLP、多模态、可解释 AI 四大流派，定位三大研究空白", "三模态独立编码（Lasso / FinBERT+Loughran-McDonald / Wav2Vec2.0）后跨注意力融合", "SHAP 前置引入，设计「财务–文本–声学」证据排序式风险报告", "落实负责任 AI：定位「风险筛查辅助」而非「自动指控系统」"],
        en: ["Surveyed four research streams, identified three research gaps", "Tri-modal encoders (Lasso / FinBERT+LM / Wav2Vec2.0) fused via cross-attention", "SHAP integrated from the start, ranking evidence across finance-text-acoustics", "Responsible AI: a risk-screening aid, not an auto-accusation system"]
      },
      cover: "assets/covers/fraud-ascii.png",
      coverLight: "assets/covers/fraud-light.png",
      visual: {
        type: "fusion",
        title: { zh: "三模态融合架构", en: "Tri-modal Fusion Architecture" },
        branches: [
          { ico: "📊", name: { zh: "财务比率", en: "Financial Ratios" }, method: { zh: "Lasso 特征选择", en: "Lasso" } },
          { ico: "📝", name: { zh: "MD&A 文本", en: "MD&A Text" }, method: { zh: "FinBERT + LM 词典", en: "FinBERT + LM" } },
          { ico: "🎙️", name: { zh: "电话会议音频", en: "Earnings-call Audio" }, method: { zh: "Wav2Vec2.0 声学特征", en: "Wav2Vec2.0" } }
        ],
        fusion: { zh: "跨注意力融合", en: "Cross-Attention Fusion" },
        output: { zh: "SHAP 证据排序 → 风险报告", en: "SHAP Evidence Ranking → Risk Report" }
      }
    },
    {
      id: "birads",
      role: { zh: "项目管理负责人 & AI 伦理审查", en: "PM Lead & AI Ethics Reviewer" },
      dirs: [{ zh: "NLP", en: "NLP" }, { zh: "临床 AI", en: "Clinical AI" }, { zh: "评测体系", en: "Evaluation" }],
      title: { zh: "AI 驱动的乳腺 X 线摄影报告 BI-RADS 自动分类", en: "AI-Driven BI-RADS Classification of Mammography Reports" },
      pain: { zh: "放射科筛查积压可达 8 周、阅片不一致，构建毫秒级 BI-RADS 0–6 七级自动分类系统。", en: "Screening backlogs up to 8 weeks and inconsistent readings — building millisecond-level BI-RADS 0–6 classification." },
      metrics: [
        { num: "18272", label: { zh: "报告数", en: "Reports" } },
        { num: "7", label: { zh: "分类级别", en: "Classes" } },
        { num: "3", label: { zh: "集成模型", en: "Models" } },
        { num: "5", label: { zh: "折数", en: "Folds" } }
      ],
      points: {
        zh: ["端到端项目管理：数据获取→预处理→三模型开发→集成评测→答辩交付", "MD5 哈希去重 + StratifiedGroupKFold 5 折分层分组交叉验证", "RegEx 预处理流水线统一不规则空白与临床噪音", "AI 伦理：量化错分风险，确立「辅助决策、不替代医生」边界"],
        en: ["End-to-end PM: data → preprocessing → 3 models → ensemble → defense", "MD5 dedup + StratifiedGroupKFold 5-fold leak-free evaluation", "RegEx pipeline to normalize whitespace and clinical noise", "AI ethics: quantified misclassification risk, assistive-not-replacement boundary"]
      },
      cover: "assets/covers/birads-ascii.png",
      coverLight: "assets/covers/birads-light.png",
      visual: {
        type: "pipeline",
        title: { zh: "评测体系流水线", en: "Evaluation Pipeline" },
        steps: [
          { ico: "📄", label: { zh: "18,272 份报告", en: "18,272 reports" } },
          { ico: "🔐", label: { zh: "MD5 去重", en: "MD5 dedup" } },
          { ico: "🧹", label: { zh: "RegEx 预处理", en: "RegEx clean" } },
          { ico: "🔀", label: { zh: "5 折 GroupKFold", en: "5-fold GroupKFold" } },
          { ico: "🧠", label: { zh: "三模型集成", en: "3-model ensemble" } },
          { ico: "🏷️", label: { zh: "BI-RADS 0–6", en: "BI-RADS 0–6" } }
        ]
      }
    },
    {
      id: "covid",
      role: { zh: "项目主导组长（Team Lead）", en: "Team Lead" },
      dirs: [{ zh: "公共卫生", en: "Public Health" }, { zh: "决策支持", en: "Decision Support" }],
      title: { zh: "数据驱动的未来健康紧急事件蓝图（COVID-19 早期动力学）", en: "Data-Driven Blueprint for Future Health Emergencies" },
      pain: { zh: "面向未知疫情 Disease X 早期信息稀缺期的决策盲区，构建「识别→匹配→预估→规划」预警蓝图。", en: "Tackling decision blind-spots in early info-scarce epidemics, building an identify-match-forecast-plan blueprint." },
      metrics: [
        { num: "187", label: { zh: "国家/地区", en: "Countries" } },
        { num: "188", label: { zh: "天数", en: "Days" } },
        { num: "0.744", label: { zh: "预警 Accuracy", en: "Accuracy" } },
        { num: "3", label: { zh: "聚类数", en: "Clusters" } }
      ],
      points: {
        zh: ["CRISP-DM 五阶段全流程主导", "数据治理：Active = Confirmed − Deaths − Recovered 一致性校验、7 日滑动均值降噪", "EWI 早期预警指数 = 新增病例 × 1 周增长率 × 活跃病例", "K-Means 聚类 + DTW 轨迹匹配 + 随机森林 + ML 增强 SEIR"],
        en: ["Led the full CRISP-DM five-stage process", "Data governance: consistency checks + 7-day rolling smoothing", "EWI = new cases × 1-week growth × active cases", "K-Means + DTW + Random Forest + ML-enhanced SEIR"]
      },
      cover: "assets/covers/covid-ascii.png",
      coverLight: "assets/covers/covid-light.png",
      visual: {
        type: "chain",
        title: { zh: "预警分析链", en: "Early-Warning Chain" },
        steps: [
          { name: { zh: "K-Means 聚类", en: "K-Means" }, detail: { zh: "K=3 卫生系统韧性", en: "K=3 resilience" } },
          { name: { zh: "DTW 轨迹匹配", en: "DTW Matching" }, detail: { zh: "历史情景参照", en: "Historical reference" } },
          { name: { zh: "随机森林", en: "Random Forest" }, detail: { zh: "预警 Accuracy 0.744", en: "Accuracy 0.744" } },
          { name: { zh: "ML 增强 SEIR", en: "ML-SEIR" }, detail: { zh: "前 60 天 RMSE 69,236", en: "RMSE 69,236" } }
        ]
      }
    },
    {
      id: "obesity",
      role: { zh: "项目成员（Oracle）+ 可复现研究主讲", en: "Oracle + Reproducibility Lead" },
      dirs: [{ zh: "机器学习", en: "ML" }, { zh: "数据产品", en: "Data Product" }, { zh: "可复现研究", en: "Reproducible" }],
      title: { zh: "基于机器学习的肥胖风险预测", en: "Obesity Risk Prediction Using Machine Learning" },
      pain: { zh: "基于问卷数据构建 7 分类肥胖等级预测系统 + 面向用户的 GUI 工具，呼应 SDG 3。", en: "Building a 7-class obesity-level predictor + a GUI tool from survey data, aligned with SDG 3." },
      metrics: [
        { num: "7", label: { zh: "对比模型", en: "Models" } },
        { num: "84.69%", label: { zh: "Accuracy", en: "Accuracy" } },
        { num: "0.8471", label: { zh: "加权 F1", en: "Weighted F1" } },
        { num: "80/20", label: { zh: "训练/验证", en: "Train/Val" } }
      ],
      points: {
        zh: ["主讲「Plan for Reproducible Research」：Git 版本控制 + Jupyter Notebook", "Oracle 角色：数据采集、质量检查、缺失值分析，锁定 family_history 与 FAVC 关键特征", "7 模型横向对比，最优 HistGradientBoosting（Accuracy 84.69%）", "GUI 预测工具：输入人口统计/饮食/生活方式即输出风险解读"],
        en: ["Lectured on reproducible research: Git + Jupyter (literate programming)", "Oracle role: collection, QA, missing-value analysis; key features family_history & FAVC", "7-model comparison, best HistGradientBoosting (84.69% accuracy)", "GUI predictor: demographics/diet/lifestyle in, risk interpretation out"]
      },
      cover: "assets/covers/obesity-ascii.png",
      coverLight: "assets/covers/obesity-light.png",
      visual: {
        type: "bar",
        title: { zh: "7 模型 Accuracy 对比", en: "7-Model Accuracy" },
        labels: { zh: ["HistGB", "ExtraTrees", "XGBoost", "LightGBM", "随机森林", "逻辑回归", "朴素贝叶斯"], en: ["HistGB", "ExtraTrees", "XGBoost", "LightGBM", "RandomForest", "Logistic", "NaiveBayes"] },
        accuracy: [0.8469, 0.841, 0.839, 0.836, 0.834, 0.789, 0.762],
        highlight: 0,
        note: { zh: "HistGradientBoosting 最优 · 84.69%", en: "HistGradientBoosting best · 84.69%" }
      }
    },
    {
      id: "workbench",
      role: { zh: "个人项目", en: "Personal Project" },
      dirs: [{ zh: "Web App", en: "Web App" }, { zh: "FSRS", en: "FSRS" }, { zh: "单文件", en: "Single-file" }],
      title: { zh: "数据科学留学学习工作台", en: "Data Science Study Workbench" },
      pain: { zh: "单文件 Web App，集成 FSRS-6.0 间隔重复、雅思口语训练、文献追踪与 AI 编程练习，数据本地存储、可离线。", en: "A single-file web app integrating FSRS-6.0 spaced repetition, IELTS speaking, paper tracking and AI coding practice; offline, local storage." },
      metrics: [
        { num: "4", label: { zh: "模块", en: "Modules" } },
        { num: "FSRS-6", label: { zh: "间隔重复", en: "Spaced Repetition" } },
        { num: "1", label: { zh: "单文件", en: "File" } },
        { num: "0", label: { zh: "后端依赖", en: "Backend" } }
      ],
      points: {
        zh: ["内嵌 FSRS-6.0 算法，实现智能间隔重复调度", "雅思口语卡复习流 + 文献追踪 + AI 编程练习四大模块", "纯前端 + localStorage，单文件可离线运行"],
        en: ["Embedded FSRS-6.0 algorithm for intelligent spaced-repetition scheduling", "Four modules: IELTS speaking, paper tracking, AI coding practice", "Pure front-end + localStorage, single-file and offline-capable"]
      },
      cover: "assets/covers/workbench-ascii.png",
      coverLight: "assets/covers/workbench-light.png",
      visual: {
        type: "modules",
        title: { zh: "四大模块", en: "Four Modules" },
        modules: [
          { ico: "🃏", name: { zh: "单词 · FSRS-6.0", en: "Vocab · FSRS-6.0" }, desc: { zh: "间隔重复调度", en: "Spaced repetition" } },
          { ico: "🎤", name: { zh: "雅思口语", en: "IELTS Speaking" }, desc: { zh: "口语训练", en: "Speaking practice" } },
          { ico: "📚", name: { zh: "文献追踪", en: "Paper Tracking" }, desc: { zh: "论文管理", en: "Paper management" } },
          { ico: "💻", name: { zh: "AI 编程练习", en: "AI Coding" }, desc: { zh: "代码练习", en: "Coding practice" } }
        ]
      }
    }
  ],

  /* 研究兴趣与学术产出 */
  research: {
    interests: {
      zh: ["机器学习与可解释 AI（XAI）", "AI for Finance：欺诈检测、风险预警与 RegTech", "多模态学习与跨模态融合", "数据治理、评测体系与负责任 AI", "数据科学在公共决策中的应用"],
      en: ["Machine learning & explainable AI (XAI)", "AI for Finance: fraud detection, risk warning & RegTech", "Multimodal learning & cross-modal fusion", "Data governance, evaluation & responsible AI", "Data science for public decision-making"]
    },
    output: {
      zh: ["研究提案：《多模态机器学习在企业财务欺诈检测中的应用研究》（独立完成，含系统综述与 12 个月研究路线）", "学术分享：主讲「Plan for Reproducible Research」模块（Git + Literate Programming）"],
      en: ["Research proposal: Multimodal ML for Corporate Financial Fraud Detection (independent, with systematic review + 12-month roadmap)", "Lecture: 'Plan for Reproducible Research' (Git + literate programming)"]
    }
  },

  /* 实习经历 */
  experience: [
    {
      org: { zh: "中兴华会计师事务所（浙江分所）", en: "Zhongxinghua CPAs (Zhejiang Branch)" },
      role: { zh: "审计助理", en: "Audit Assistant" },
      time: "2025.01 – 2025.03",
      highlight: true,
      points: {
        zh: ["IPO 项目：独立完成子公司收入/成本底稿与细节测试、存货计价测试、截止测试，识别采购合同合规风险 3 处", "上市公司年报审计：独立完成 8 项项目查证，主导审计走访并撰写走访小结"],
        en: ["IPO: independently completed subsidiary revenue/cost working papers, inventory pricing and cut-off tests; flagged 3 procurement compliance risks", "Annual audit: 8 verification items, led audit visits and wrote summaries"]
      }
    },
    {
      org: { zh: "浙江绿佰园农产品有限公司", en: "Zhejiang Lübaiyuan Agricultural Products" },
      role: { zh: "财务助理", en: "Finance Assistant" },
      time: "2023.07 – 2023.08",
      highlight: false,
      points: {
        zh: ["日常会计核算与期末结算、资金往来核对、工资核算、增值税发票开具与核验"],
        en: ["Daily accounting and period-end settlement, fund reconciliation, payroll, VAT invoicing and verification"]
      }
    },
    {
      org: { zh: "浙江财经大学东方学院 体育部", en: "Oriental College Sports Department" },
      role: { zh: "办公室主任助理", en: "Office Director Assistant" },
      time: "2022.05 – 2024.06",
      highlight: false,
      points: {
        zh: ["部门经费预算/期末结算/工资发放，报销审核与系统对接，教学事务辅助"],
        en: ["Department budget, settlement and payroll, reimbursement review, system integration, teaching support"]
      }
    }
  ],

  /* 校园经历 */
  campus: [
    {
      org: { zh: "21 审计 1 班 · 团支书", en: "Class 21 Auditing 1 · League Secretary" },
      time: "2021.09 – 2025.06",
      points: {
        zh: ["组织团日活动 20 余次，带领班级获 2 次院级「十佳团日活动」、1 次校级「十佳团日活动」、院级「十佳团支部」", "智慧团建系统录入与团组织关系转接"],
        en: ["Organized 20+ league activities; class won 2 college-level and 1 university-level 'Top 10 League Activity'", "Smart league system data entry and membership transfer"]
      }
    },
    {
      org: { zh: "会计学院党群服务中心 · 干事", en: "School of Accounting Party-Mass Service Center · Staff" },
      time: "2021.10 – 2023.06",
      points: {
        zh: ["党员/入党积极分子档案管理，党日活动策划（多次入选学院公众号推文）"],
        en: ["Member archive management and Party Day activity planning (featured on college WeChat)"]
      }
    }
  ],

  /* 证书与荣誉 */
  certificates: {
    certs: [
      { zh: "CISA 国际信息系统审计师", en: "CISA — Certified Information Systems Auditor", ico: "🛡️", highlight: true },
      { zh: "BDS 数据分析师（5/6 级）", en: "BDS Data Analyst (Level 5/6)", ico: "📊", highlight: true },
      { zh: "浙江省计算机二级（Python）", en: "Zhejiang Computer Level 2 (Python)", ico: "🐍", highlight: false },
      { zh: "浙江省计算机三级（网络安全）", en: "Zhejiang Computer Level 3 (Network Security)", ico: "🔐", highlight: false },
      { zh: "CET-4 大学英语四级", en: "CET-4", ico: "🌐", highlight: false },
      { zh: "普通话二级甲等", en: "Mandarin Level 2A", ico: "🗣️", highlight: false },
      { zh: "国际人才英语初级", en: "International Talent English (Elementary)", ico: "🌍", highlight: false }
    ],
    honors: [
      { zh: "校级二、三等奖学金", en: "University 2nd & 3rd-class Scholarships", ico: "🎓" },
      { zh: "优秀团干部", en: "Outstanding League Cadre", ico: "⭐" },
      { zh: "优秀学生助理", en: "Outstanding Student Assistant", ico: "🏅" },
      { zh: "带领班级获「十佳团日活动」「十佳团支部」", en: "Led class to 'Top 10 League Activity' & 'Top 10 League Branch'", ico: "🏆" }
    ]
  },

  /* 兴趣 */
  interests: [
    { zh: "乒乓球", en: "Table Tennis", ico: "🏓" },
    { zh: "羽毛球", en: "Badminton", ico: "🏸" },
    { zh: "网球", en: "Tennis", ico: "🎾" },
    { zh: "壁球", en: "Squash", ico: "🥎" }
  ],

  /* 联系方式 */
  contact: [
    { label: { zh: "邮箱", en: "Email" }, value: "cvnices@163.com", href: "mailto:cvnices@163.com" },
    { label: { zh: "手机", en: "Phone" }, value: "133-2570-5737", href: "tel:13325705737" },
    { label: { zh: "GitHub", en: "GitHub" }, value: "github.com/cvnices8-byte", href: "https://github.com/cvnices8-byte/" },
    { label: { zh: "现居地", en: "Location" }, value: "浙江衢州 · 马来亚大学（吉隆坡）", href: null }
  ]
};
