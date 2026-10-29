/**
 * 页面内容集中在这一份文件里。
 * 修改措辞、公司名、联系方式只需要改这里，不用动组件。
 * 联系方式在 profile.email 一处修改即可。
 */

export const profile = {
  name: '李梅',
  role: '细胞研究员',
  location: '杭州',
  field: '生物技术与细胞治疗',
  status: '正在看新的机会',
  email: '18702262807@163.com',
  intro:
    '细胞研究员。研究方向为多能干细胞定向分化与细胞治疗工艺开发。',
}

export const metrics = [
  { value: '4', unit: '年+', label: '细胞实验与工艺开发' },
  { value: '2', unit: '个', label: '实验平台从零搭建' },
  { value: '8–10', unit: '人', label: '团队统筹规模' },
  { value: '5', unit: '名+', label: '带教并完成技术复制' },
]

export const about: string[] = [
  '硕士毕业于西北农林科技大学动物遗传育种与繁殖专业，研究方向为 miR-127 在牛睾丸支持细胞中的功能与机制。',
  '第一份工作从事癌基因功能研究，独立或带队完成多个研究项目，两次从零搭建实验平台（免疫共沉淀平台、过表达载体构建平台），并输出全套标准操作规程。',
  '目前在一家细胞治疗公司担任细胞研究员，负责多能干细胞培养、角膜内皮细胞与视网膜色素上皮细胞的定向分化，以及无异种成分规模化扩增工艺的开发。',
  '关注的问题是：如何把实验室里可行的分化方案，变成稳定、可放大、可追溯的生产工艺。',
]

export type Job = {
  period: string
  org: string
  place: string
  role: string
  direction: string
  points: string[]
}

export const experience: Job[] = [
  {
    period: '2025.12 — 至今',
    org: '某细胞治疗公司',
    place: '杭州',
    role: '细胞研究员',
    direction: '多能干细胞定向分化与工艺开发',
    points: [
      '负责 hiPSC、MSC 与角膜内皮细胞的培养与扩增，建立并维护细胞库，完成复苏存活率、活率、形态与克隆形态等常规质控。',
      '开展 hiPSC 向角膜内皮细胞的定向分化，通过 qPCR、流式细胞术、ELISA 与细胞电阻检测评估分化效果。',
      '参与视网膜色素上皮细胞定向分化新管线的工艺建立。',
      '优化无异种成分的 hiPSC 规模化扩增工艺，并参与成熟细胞扩增与形态维持工艺的验证。',
      '按 GMP 规范撰写工艺文件初稿，规范记录实验数据，保障流程可追溯。',
    ],
  },
  {
    period: '2022.06 — 2025.08',
    org: '某生物科技公司',
    place: '杭州',
    role: '实验工程师 → 临时副主管',
    direction: '癌基因功能研究',
    points: [
      '独立负责或以项目负责人身份完成多个研究项目，覆盖基因功能验证、载体构建与稳转细胞株建立。',
      '从零搭建免疫共沉淀（IP）实验平台与过表达载体构建平台，输出全套标准操作规程，培训 5 名以上同事。',
      '在实验室首次开展多参数流式细胞术，独立完成方案设计与全部实验。',
      '担任临时副主管期间统筹 8–10 人团队与 3 个并行项目，负责任务分工、试剂耗材调配与交付节点。',
      '优化悬浮细胞转染流程，转染效率提升约 30%；过表达载体构建周期缩短至 3 天。',
    ],
  },
]

export type Project = {
  id: string
  period: string
  title: string
  role: string
  tags: string[]
  summary: string
  tech: string[]
  highlight: string
  /** 相关成果已由合作方公开发表 */
  published?: boolean
}

export const projects: Project[] = [
  {
    id: 'smurf2',
    period: '2022.11 — 2023.01',
    title: 'SMURF2 互作蛋白鉴定',
    role: '独立负责',
    tags: ['互作与检测'],
    summary:
      '以 HL60 细胞为模型，过表达 SMURF2 后通过免疫沉淀结合质谱，筛选并鉴定其相互作用蛋白。',
    tech: ['过表达', '免疫沉淀', '质谱'],
    highlight: '实验室首个免疫沉淀实验平台，产出完整 SOP',
    published: true,
  },
  {
    id: 'linc00632',
    period: '2023.02 — 2023.09',
    title: 'Linc00632 在肝癌与肺癌中的作用及机制',
    role: '项目负责人',
    tags: ['基因功能研究'],
    summary:
      '研究 Linc00632 对肝癌与肺癌细胞增殖、迁移能力的影响，并追踪其下游通路。',
    tech: ['过表达载体', '稳转株', '功能实验'],
    highlight: '从零搭建过表达载体构建平台，带 5 名同事，输出全套 SOP',
  },
  {
    id: 'ier3',
    period: '2023.10 — 2024.04',
    title: 'IER3 等基因对结直肠癌的作用及机制',
    role: '项目负责人',
    tags: ['基因功能研究'],
    summary:
      '敲低 IER3 等候选基因后，系统检测结直肠癌细胞的增殖、迁移、侵袭与凋亡变化。',
    tech: ['敲低', 'CCK8', 'Transwell', '流式'],
    highlight: '四项功能学实验完整闭环，全部由同一体系产出',
  },
  {
    id: 'fbxo',
    period: '2024.01 — 2024.06',
    title: 'FBXO25 / FBXO28 慢病毒稳转细胞株构建',
    role: '项目负责人',
    tags: ['载体与稳转株'],
    summary:
      '完成载体设计、病毒包装与纯化、滴度测定、转导与单克隆鉴定的全流程。',
    tech: ['慢病毒', '滴度测定', '单克隆筛选'],
    highlight: '建立可复用流程，稳定产出长期实验用稳转株',
  },
  {
    id: 'dcbld2',
    period: '2024.04 — 2024.05',
    title: 'DCBLD2 促进 NK 细胞杀伤 AML 细胞',
    role: '独立负责',
    tags: ['互作与检测'],
    summary:
      '构建 NK 与 AML 细胞共培养体系，检测 DCBLD2 对 NK 细胞杀伤活性的影响。',
    tech: ['多参数流式', '共培养', 'IFNγ / TNF-α / IL-2'],
    highlight: '实验室首次多参数流式，独立完成预实验与正式实验',
    published: true,
  },
  {
    id: 'rbp4',
    period: '2024.06 — 2024.11',
    title: 'RBP4 在 BV2 细胞中的功能及对血管内皮的影响',
    role: '项目负责人',
    tags: ['基因功能研究'],
    summary:
      '研究 RBP4 对小胶质细胞功能的影响，并以共培养体系评估其对血管内皮细胞的作用。',
    tech: ['共培养', 'IP 验证', 'ELISA'],
    highlight: '建立跨细胞类型的共培养与分泌因子检测体系',
  },
  {
    id: 'sam68',
    period: '2025.01 — 2025.07',
    title: 'Sam68 调控 ROCK2 / NF-κB 通路影响静脉血栓栓塞',
    role: '项目负责人',
    tags: ['基因功能研究', '载体与稳转株'],
    summary:
      '构建 shSam68 与 shROCK2 稳转株，验证 Sam68 与 ROCK2 的相互作用及其对通路的影响。',
    tech: ['shRNA', '稳转株', 'co-IP'],
    highlight: '双基因敲低体系，co-IP 验证蛋白互作',
  },
  {
    id: 'cec',
    period: '2025.12 — 至今',
    title: 'iPSC 向角膜内皮细胞定向分化工艺',
    role: '参与',
    tags: ['工艺开发'],
    summary:
      '以 hiPSC 为起始细胞，建立向角膜内皮细胞定向分化的工艺，并对分化效果做多指标评估。',
    tech: ['iPSC', '定向分化', 'qPCR', '流式', '细胞电阻'],
    highlight: '建立并验证分化工艺，支撑后续放大与批次一致性',
  },
]

export const education = [
  {
    period: '2019.09 — 2022.06',
    degree: '硕士',
    school: '西北农林科技大学',
    major: '动物遗传育种与繁殖',
  },
]

export const skills: { group: string; label: string; items: string[] }[] = [
  {
    group: '01',
    label: '细胞与工艺',
    items: [
      'iPSC 培养与定向分化',
      '原代细胞与悬浮细胞培养',
      '细胞库建立与质控',
      '无异种规模化扩增',
      '细胞电阻检测',
    ],
  },
  {
    group: '02',
    label: '分子与载体',
    items: [
      '慢病毒载体构建与包装',
      '过表达与敲低载体设计',
      '稳转细胞株筛选',
      'qPCR / Western Blot / ELISA',
      'co-IP / IP-质谱联用',
    ],
  },
  {
    group: '03',
    label: '分析与表征',
    items: [
      '多参数流式细胞术',
      '增殖 / 迁移 / 侵袭 / 凋亡实验',
      '共培养体系',
      '细胞免疫荧光',
    ],
  },
  {
    group: '04',
    label: '项目与工具',
    items: [
      '项目负责人经验',
      'SOP 与工艺文件撰写',
      '团队带教',
      'Snapgene / ImageJ / GraphPad',
      'Python 数据处理与自动化',
    ],
  },
]
