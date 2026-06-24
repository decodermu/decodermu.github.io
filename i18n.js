/* ============================================================
   i18n — English / Chinese  (multi-page site)
   Default: English. Stored in localStorage.
   ============================================================ */

const I18N = {
  en: {
    /* ---- nav ---- */
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.research": "Research",
    "nav.software": "Software",
    "nav.cooking": "Cooking",
    "nav.lang": "中文",

    /* ---- about / portal page ---- */
    "about.tag": "Computational biologist · Protein designer · Curious cook",
    "about.name": "Junxi Mu",
    "about.namecn": "穆俊羲",
    "about.hello": "Hi, I'm Junxi —",
    "about.intro": "Ph.D. candidate at Peking University working on intrinsically disordered proteins and AI-driven protein design. Outside the lab I build small software tools and develop new recipes. This site is a corner for all of it.",
    "about.loc": "Based in",
    "about.locv": "Beijing, China",
    "about.role": "Now",
    "about.rolev": "Ph.D. candidate @ Peking University",
    "about.email": "Email",
    "about.emailv": "junximu@stu.pku.edu.cn",
    "about.scholar": "Google Scholar",
    "about.scholarv": "300+ citations · h-index 9",
    "about.explore": "Explore the site",
    "about.portal.exp.t": "Experience",
    "portal.exp.d": "Education, research timeline & technical skills.",
    "about.portal.res.t": "Research",
    "portal.res.d": "Computational biology, publications & citations.",
    "about.portal.sw.t": "Software",
    "portal.sw.d": "Small tools I've vibe-coded in my spare time.",
    "about.portal.ck.t": "Cooking",
    "portal.ck.d": "Original recipes I've developed and tested.",

    /* ---- page heroes ---- */
    "page.exp.kicker": "03 · Career",
    "page.exp.title": "Experience",
    "page.exp.desc": "Where I've studied, what I've worked on, and the tools I use.",
    "page.res.kicker": "02 · Academic",
    "page.res.title": "Research",
    "page.res.desc": "Computational structural biology, protein design & publications.",
    "page.sw.kicker": "04 · Building",
    "page.sw.title": "Software",
    "page.sw.desc": "Side projects and small tools — mostly vibe-coded, built for fun and utility.",
    "page.ck.kicker": "05 · Kitchen",
    "page.ck.title": "Cooking",
    "page.ck.desc": "Original recipes developed and tested in my own kitchen.",

    /* ---- experience page ---- */
    "exp.edu.title": "Education",
    "exp.edu1.deg": "Ph.D. in Computational Biology",
    "exp.edu1.school": "Peking University — Academy for Advanced Interdisciplinary Studies, CLS",
    "exp.edu1.date": "2022.9 – present (expected 2027)",
    "exp.edu1.detail": "Advised by Prof. Luhua Lai. Modeling & design of phase-separating intrinsically disordered proteins.",
    "exp.edu2.deg": "B.S. in Bioinformatics & Biostatistics",
    "exp.edu2.school": "Shanghai Jiao Tong University — School of Life Sciences & Biotechnology",
    "exp.edu2.date": "2018.9 – 2022.6",
    "exp.edu2.detail": "Research on molecular force fields and AI protein sequence design (Chen lab).",

    "exp.timeline.title": "Research Timeline",
    "exp.t5.t": "ByteDance — Seed Protenix Team",
    "exp.t5.s": "AI Protein–Ligand Conformational Ensemble Prediction",
    "exp.t5.d": "Built a high-throughput MD platform; generated, collected, and cleaned training data for structure-prediction models.",
    "exp.t4.t": "Peking University — Lai Group",
    "exp.t4.s": "Ph.D. Candidate · Advised by Prof. Luhua Lai",
    "exp.t4.d": "Accurately modeling and parameterizing coarse-grained IDP models to simulate phase-separation systems; computationally designing IDPs with target functions and properties.",
    "exp.t3.t": "Shanghai Jiao Tong University — Chen Lab",
    "exp.t3.s": "AI Protein Sequence Design",
    "exp.t3.d": "Developed GPD, a Graphormer-based de novo protein sequence-design model. Redesigned CALB esterase with <50% sequence identity — 37.5% of sequences active, top activity 2× wild-type, with altered substrate selectivity.",
    "exp.t2.t": "Shanghai Jiao Tong University — Chen Lab",
    "exp.t2.s": "IDP & RNA Force Field Development",
    "exp.t2.d": "Developed new solvent models TIP4P-B and OPC3-B, and the BSFF1 RNA force field. Published in JCIM, JCTC, and IJBM.",
    "exp.t1.t": "Shanghai Jiao Tong University — Xu & Gong Lab",
    "exp.t1.s": "Allosteric Regulation of SIK1 Kinase",
    "exp.t1.d": "Analyzed the allosteric pathway of Arabidopsis SIK1 kinase and validated key residues through wet-lab experiments. Published as first author in CSBJ.",

    "exp.skills.title": "Technical Skills",
    "exp.skills.s1.t": "Molecular Modeling",
    "exp.skills.s2.t": "Molecular Docking",
    "exp.skills.s3.t": "Molecular Dynamics",
    "exp.skills.s4.t": "Deep Learning",
    "exp.skills.s5.t": "Drug Discovery",
    "exp.skills.s6.t": "Other",

    /* ---- research page ---- */
    "res.stats.cites": "Citations",
    "res.stats.h": "h-index",
    "res.stats.pubs": "First-author Papers",
    "res.stats.phd": "Expected Ph.D.",
    "res.interests.title": "Research Interests",
    "res.r1.t": "Intrinsically Disordered Proteins",
    "res.r1.d": "Modeling and parameterizing coarse-grained models of IDPs to simulate phase-separation condensates, and computationally designing IDPs with specified functions and physicochemical properties.",
    "res.r2.t": "Molecular Force Fields",
    "res.r2.d": "Developing balanced force fields and solvent models (TIP4P-B, OPC3-B) and RNA force fields (BSFF1) that accurately capture the dynamics of disordered and ordered proteins.",
    "res.r3.t": "Deep Learning for Proteins",
    "res.r3.d": "Building neural architectures (e.g. Graphormer-based GPD) for de novo protein sequence design, and applying AI to protein–ligand conformational ensemble prediction.",
    "res.r4.t": "Enhanced Sampling & MD",
    "res.r4.d": "Running large-scale molecular dynamics (Amber, GROMACS, OpenMM) with enhanced-sampling methods (US, GaMD, REMD, REST2) for allosteric-pathway and conformational analysis.",
    "res.pubs.title": "Selected Publications",
    "res.pubs.all": "Google Scholar →",

    /* ---- software page ---- */
    "sw.intro": "These are small tools I build in my spare time — usually vibe-coded with AI assistance, refined by hand, and shared because they're useful to me. More coming soon.",
    "sw.proj.tag": "vibe-coded",
    "sw.proj.more": "View project →",
    "sw.proj.soon": "Coming soon",
    "sw.proj.empty.t": "First project coming soon",
    "sw.proj.empty.d": "I'm tidying up my first few tools to publish here. Check back shortly — or reach out if you're curious.",

    /* ---- cooking page ---- */
    "ck.intro": "A growing collection of original recipes I've developed and tested at home. Most are weeknight-friendly and built around technique rather than precise measurement.",
    "ck.recipe.time": "min",
    "ck.recipe.serves": "serves",
    "ck.recipe.view": "View recipe →",
    "ck.recipe.soon": "Coming soon",
    "ck.recipe.empty.t": "First recipes coming soon",
    "ck.recipe.empty.d": "I'm photographing and writing up my go-to recipes. The first batch will land here soon.",

    /* ---- footer ---- */
    "footer.line": "© <span id=\"year\"></span> Junxi Mu · Built with care",
    "footer.top": "Back to top ↑",

    /* ---- publications data ---- */
    "_pubs": [
      {
        n: "01",
        authors: "<span class=\"me\">Mu J</span>, Li Z, Zhang B, et al.",
        title: "Graphormer supervised de novo protein design method and function validation",
        venue: "BIB · 2024",
        url: "https://doi.org/10.1093/bib/bbae135"
      },
      {
        n: "02",
        authors: "Pan Z#, <span class=\"me\">Mu J#</span>, Chen HF.",
        title: "Balanced three-point water model OPC3-B for intrinsically disordered and ordered proteins",
        venue: "JCTC · 2023",
        url: "https://doi.org/10.1021/acs.jctc.3c00498"
      },
      {
        n: "03",
        authors: "<span class=\"me\">Mu J</span>, Zhou J, Gong Q, et al.",
        title: "An allosteric regulation mechanism of Arabidopsis Serine/Threonine kinase 1 (SIK1) through phosphorylation",
        venue: "CSBJ · 2022",
        url: "https://doi.org/10.1016/j.csbj.2021.12.005"
      },
      {
        n: "04",
        authors: "<span class=\"me\">Mu J</span>, Pan Z, Chen HF.",
        title: "Balanced solvent model for intrinsically disordered and ordered proteins",
        venue: "JCIM · 2021",
        url: "https://doi.org/10.1021/acs.jcim.1c00929"
      },
      {
        n: "05",
        authors: "Li Z#, <span class=\"me\">Mu J#</span>, Chen J, et al.",
        title: "Base-specific RNA force field improving the dynamics conformation of nucleotide",
        venue: "IJBM · 2022",
        url: "https://doi.org/10.1016/j.ijbiomac.2022.08.106"
      },
      {
        n: "06",
        authors: "<span class=\"me\">Mu J</span>, Liu H, Zhang J, et al.",
        title: "Recent force field strategies for intrinsically disordered proteins",
        venue: "JCIM · 2021",
        url: "https://doi.org/10.1021/acs.jcim.0c01198"
      }
    ],

    /* ---- software projects data ---- */
    "_projects": [],

    /* ---- cooking recipes data ---- */
    "_recipes": []
  },

  zh: {
    /* ---- nav ---- */
    "nav.about": "关于",
    "nav.experience": "经历",
    "nav.research": "研究",
    "nav.software": "软件",
    "nav.cooking": "下厨",
    "nav.lang": "EN",

    /* ---- about / portal page ---- */
    "about.tag": "计算生物学者 · 蛋白质设计者 · 喜欢下厨的人",
    "about.name": "Junxi Mu",
    "about.namecn": "穆俊羲",
    "about.hello": "你好，我是俊羲——",
    "about.intro": "北京大学博士在读，研究方向为天然无规蛋白与 AI 蛋白质设计。实验室之外，我也会写些小软件、研发新菜谱。这个网站就是用来收纳这些内容的地方。",
    "about.loc": "所在地",
    "about.locv": "中国 · 北京",
    "about.role": "现在",
    "about.rolev": "北京大学博士在读",
    "about.email": "邮箱",
    "about.emailv": "junximu@stu.pku.edu.cn",
    "about.scholar": "Google Scholar",
    "about.scholarv": "300+ 引用 · h指数 9",
    "about.explore": "逛逛这个站",
    "about.portal.exp.t": "经历",
    "portal.exp.d": "教育背景、研究时间线与技术技能。",
    "about.portal.res.t": "研究",
    "portal.res.d": "计算生物学、论文与引用。",
    "about.portal.sw.t": "软件",
    "portal.sw.d": "业余 vibe coding 写的小工具。",
    "about.portal.ck.t": "下厨",
    "portal.ck.d": "我研发并实测过的原创菜谱。",

    /* ---- page heroes ---- */
    "page.exp.kicker": "03 · 履历",
    "page.exp.title": "经历",
    "page.exp.desc": "在哪里求学、做过什么、用什么工具。",
    "page.res.kicker": "02 · 学术",
    "page.res.title": "研究",
    "page.res.desc": "计算结构生物学、蛋白质设计与发表论文。",
    "page.sw.kicker": "04 · 创造",
    "page.sw.title": "软件",
    "page.sw.desc": "业余项目和小工具——大多是 vibe coding 出来的，好玩又好用。",
    "page.ck.kicker": "05 · 厨房",
    "page.ck.title": "下厨",
    "page.ck.desc": "我在自家厨房研发并实测过的原创菜谱。",

    /* ---- experience page ---- */
    "exp.edu.title": "教育背景",
    "exp.edu1.deg": "计算生物学博士",
    "exp.edu1.school": "北京大学 · 前沿交叉学科研究院 / 生命科学联合中心",
    "exp.edu1.date": "2022.9 – 至今（预计 2027）",
    "exp.edu1.detail": "导师：来鲁华教授。研究方向：相分离天然无规蛋白的建模与设计。",
    "exp.edu2.deg": "生物信息与生物统计学系 理学学士",
    "exp.edu2.school": "上海交通大学 · 生命科学技术学院",
    "exp.edu2.date": "2018.9 – 2022.6",
    "exp.edu2.detail": "研究方向：分子力场与 AI 蛋白质序列设计（陈海峰课题组）。",

    "exp.timeline.title": "研究时间线",
    "exp.t5.t": "字节跳动 — Seed Protenix 团队",
    "exp.t5.s": "基于 AI 的蛋白–小分子构象系综预测",
    "exp.t5.d": "参与高通量分子动力学平台搭建；参与训练数据的生成、收集与清洗。",
    "exp.t4.t": "北京大学 — 来鲁华课题组",
    "exp.t4.s": "博士在读 · 导师：来鲁华教授",
    "exp.t4.d": "精准建模并参数化天然无规蛋白的粗粒化模型，用以模拟凝聚相体系；通过计算机辅助设计具有指定功能和物化性质的天然无规蛋白。",
    "exp.t3.t": "上海交通大学 — 陈海峰课题组",
    "exp.t3.s": "AI 蛋白质序列设计",
    "exp.t3.d": "开发基于 Graphormer 架构的从头蛋白质序列设计模型 GPD。重新设计 CALB 酯水解酶，序列同源性小于 50%，37.5% 的序列有活性，活性最高提升至野生型 2 倍，并具有底物选择性。",
    "exp.t2.t": "上海交通大学 — 陈海峰课题组",
    "exp.t2.s": "天然无规蛋白与 RNA 力场开发",
    "exp.t2.d": "开发新的溶剂化模型 TIP4P-B、OPC3-B 以及 RNA 分子力场 BSFF1。论文发表于 JCIM、JCTC、IJBM。",
    "exp.t1.t": "上海交通大学 — 徐沁、龚清秋课题组",
    "exp.t1.s": "SIK1 激酶的变构调控机制",
    "exp.t1.d": "分析拟南芥 SIK1 激酶的变构路径，并通过湿实验验证关键残基的作用。以第一作者发表于 CSBJ。",

    "exp.skills.title": "技术技能",
    "exp.skills.s1.t": "分子建模",
    "exp.skills.s2.t": "分子对接",
    "exp.skills.s3.t": "分子动力学模拟",
    "exp.skills.s4.t": "深度学习",
    "exp.skills.s5.t": "药物发现",
    "exp.skills.s6.t": "其他",

    /* ---- research page ---- */
    "res.stats.cites": "谷歌学术引用",
    "res.stats.h": "h指数",
    "res.stats.pubs": "第一作者论文",
    "res.stats.phd": "预计博士毕业",
    "res.interests.title": "研究方向",
    "res.r1.t": "天然无规蛋白",
    "res.r1.d": "对天然无规蛋白的粗粒化模型进行精准建模与参数化，用以模拟大量蛋白形成的凝聚相体系；并通过计算机辅助设计具有指定功能和物化性质的天然无规蛋白。",
    "res.r2.t": "分子力场",
    "res.r2.d": "开发平衡的力场与溶剂化模型（TIP4P-B、OPC3-B）以及 RNA 力场（BSFF1），准确刻画无规与有序蛋白的动力学行为。",
    "res.r3.t": "蛋白质深度学习",
    "res.r3.d": "构建用于蛋白质从头序列设计的神经网络架构（如基于 Graphormer 的 GPD 模型），并将 AI 应用于蛋白–小分子构象系综预测。",
    "res.r4.t": "增强采样与分子动力学",
    "res.r4.d": "使用 Amber、GROMACS、OpenMM 进行大规模分子动力学模拟，结合增强采样方法（US、GaMD、REMD、REST2）分析变构路径与构象变化。",
    "res.pubs.title": "代表性论文",
    "res.pubs.all": "Google Scholar →",

    /* ---- software page ---- */
    "sw.intro": "这些是我在业余时间做的小工具——大多是用 AI 辅助 vibe coding 出来的，再手工打磨，因为自己用得上所以分享出来。后续会陆续更新。",
    "sw.proj.tag": "vibe-coded",
    "sw.proj.more": "查看项目 →",
    "sw.proj.soon": "敬请期待",
    "sw.proj.empty.t": "第一个项目即将上线",
    "sw.proj.empty.d": "我正在整理即将发布的几个小工具，稍后就会出现在这里——感兴趣的话也可以直接联系我。",

    /* ---- cooking page ---- */
    "ck.intro": "我研发并在家实测过的原创菜谱合集，持续更新中。大多适合工作日晚上做，重在技法而非精确到克的配料。",
    "ck.recipe.time": "分钟",
    "ck.recipe.serves": "人份",
    "ck.recipe.view": "查看菜谱 →",
    "ck.recipe.soon": "敬请期待",
    "ck.recipe.empty.t": "第一批菜谱即将上线",
    "ck.recipe.empty.d": "我正在拍摄并撰写常用菜谱，第一批很快就会发布在这里。",

    /* ---- footer ---- */
    "footer.line": "© <span id=\"year\"></span> 穆俊羲 · Built with care",
    "footer.top": "回到顶部 ↑",

    /* ---- publications data ---- */
    "_pubs": [
      {
        n: "01",
        authors: "<span class=\"me\">Mu J</span>, Li Z, Zhang B, 等.",
        title: "Graphormer supervised de novo protein design method and function validation",
        venue: "BIB · 2024",
        url: "https://doi.org/10.1093/bib/bbae135"
      },
      {
        n: "02",
        authors: "Pan Z#, <span class=\"me\">Mu J#</span>, Chen HF.",
        title: "Balanced three-point water model OPC3-B for intrinsically disordered and ordered proteins",
        venue: "JCTC · 2023",
        url: "https://doi.org/10.1021/acs.jctc.3c00498"
      },
      {
        n: "03",
        authors: "<span class=\"me\">Mu J</span>, Zhou J, Gong Q, 等.",
        title: "An allosteric regulation mechanism of Arabidopsis Serine/Threonine kinase 1 (SIK1) through phosphorylation",
        venue: "CSBJ · 2022",
        url: "https://doi.org/10.1016/j.csbj.2021.12.005"
      },
      {
        n: "04",
        authors: "<span class=\"me\">Mu J</span>, Pan Z, Chen HF.",
        title: "Balanced solvent model for intrinsically disordered and ordered proteins",
        venue: "JCIM · 2021",
        url: "https://doi.org/10.1021/acs.jcim.1c00929"
      },
      {
        n: "05",
        authors: "Li Z#, <span class=\"me\">Mu J#</span>, Chen J, 等.",
        title: "Base-specific RNA force field improving the dynamics conformation of nucleotide",
        venue: "IJBM · 2022",
        url: "https://doi.org/10.1016/j.ijbiomac.2022.08.106"
      },
      {
        n: "06",
        authors: "<span class=\"me\">Mu J</span>, Liu H, Zhang J, 等.",
        title: "Recent force field strategies for intrinsically disordered proteins",
        venue: "JCIM · 2021",
        url: "https://doi.org/10.1021/acs.jcim.0c01198"
      }
    ],

    /* ---- software projects data ---- */
    "_projects": [],

    /* ---- cooking recipes data ---- */
    "_recipes": []
  }
};

// expose for main.js
window.I18N = I18N;
