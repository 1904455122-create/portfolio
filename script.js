const asset = (path) => `assets/images/${path}`;

const projects = [
  {
    id: "kos-growth",
    category: "strategy",
    categoryLabel: "实习策略",
    title: "KOS 内容增长与 AI 素材优化",
    client: "去哪儿网",
    role: "内容增长部实习生",
    year: "2026",
    span: 7,
    description:
      "把封面、标题和正文从经验判断，推进到一套可复用的 AI 内容增长机制。",
    image: asset("projects/strategy-cities.jpg"),
    imagePosition: "center",
    tags: ["内容增长", "AI 工作流", "数据策略"],
    deliverables: "KOS 素材库 MRD · 8 月门票策略地图",
    sections: [
      {
        label: "项目背景",
        text:
          "在去哪儿网内容增长部实习期间，参与 KOS 视频封面、标题与正文 AI 优化方案的 1.0 至 2.0 迭代。项目需要解决内容素材与用户点击动机之间不匹配的问题，并把优化方法沉淀为可复用的内容生产机制。",
      },
      {
        label: "我的工作",
        text:
          "拆解小红书内容场景与合规边界，落地时效场景、悬念式利益点、封面视觉升级三大策略；持续完善标题公式、正文结构和话题词模板。同时基于投放数据搭建“热度—成本—转化”三维评分模型，辅助城市内容扩量与资源配置。",
      },
      {
        label: "项目结果",
        text:
          "平均封面点击率由 3.9% 提升至 5.9%，日均引流 UV 提升 20%，潜新客占比由 22.1% 提升至 31.2%。从 66 个候选城市中筛选出 12 个“高热度 + 低 CAC”重点城市，形成可支持后续排期的策略地图。",
      },
      {
        label: "延伸实践",
        text:
          "负责 30 个 KOS 账号的内容生产与运营，覆盖酒店、机票、门票、跟团游 4 条业务线，累计产出短视频 200+ 条；同步推进李诞 IP、房琪 IP 合作视频及双节营销等 4 条项目线，沉淀埋词词包、标题模板和存量内容整改方法。",
      },
    ],
    gallery: [
      asset("projects/strategy-cover.jpg"),
      asset("projects/strategy-map.jpg"),
      asset("projects/strategy-cities.jpg"),
    ],
    files: [
      {
        label: "查看 KOS 素材库 MRD",
        path: "实习项目，前期策略体系输出/KOS视频封面_标题_正文素材库MRD.docx",
        previewPath: "assets/documents/kos-material-library.pdf",
      },
      {
        label: "查看 8 月门票策略地图",
        path: "实习项目，前期策略体系输出/8月门票策略地图（九宫格）.pdf",
      },
    ],
  },
  {
    id: "beeswax",
    category: "creative",
    categoryLabel: "创意策划",
    title: "蜂蜡保鲜布跨境品牌方案",
    client: "BEEWAX FOOD WRAP",
    role: "市场研究 / 产品定位 / 运营策略",
    year: "PROJECT",
    span: 5,
    description:
      "从欧洲市场研究、产品本土化到 Amazon 与社交平台运营，完成一条完整的跨境品牌链路。",
    image: asset("projects/beeswax-cover.jpg"),
    imagePosition: "center",
    tags: ["跨境品牌", "市场研究", "电商运营"],
    deliverables: "22 页跨境选品与运营方案",
    sections: [
      {
        label: "项目背景",
        text:
          "针对蜂蜡保鲜布这一可持续生活产品，分析欧洲市场的宏观环境、品类趋势、消费者需求与竞争格局，寻找适合中国供应链和跨境电商渠道的市场机会。",
      },
      {
        label: "策略路径",
        text:
          "从 PEST、微观竞争环境和细分市场切入，完成目标市场选择、消费者洞察、产品定位与差异化价值主张。方案进一步覆盖英文产品介绍、定价策略、Amazon 站内运营、节日营销以及 Instagram、TikTok 站外传播。",
      },
      {
        label: "方案亮点",
        text:
          "围绕环保替代、可持续生活方式和厨房场景建立产品沟通语言，并将品牌定位、电商页面、定价与内容传播连接成一条完整链路，而不是停留在单一市场分析层面。",
      },
    ],
    gallery: [
      asset("projects/beeswax-market.jpg"),
      asset("projects/beeswax-segment.jpg"),
      asset("projects/beeswax-product.jpg"),
      asset("projects/beeswax-amazon.jpg"),
      asset("projects/beeswax-social.jpg"),
    ],
    files: [
      {
        label: "查看完整跨境方案",
        path: "创意策划类作品/蜂蜡保鲜布跨境电商选品与运营方案.pdf",
      },
    ],
  },
  {
    id: "haidilao",
    category: "creative",
    categoryLabel: "创意策划",
    title: "海底捞品牌现状与建议",
    client: "海底捞",
    role: "桌面研究 / 消费者洞察 / 品牌诊断",
    year: "PROJECT",
    span: 5,
    description:
      "用桌面研究、网络民族志与门店走访三重方法，找到海底捞“服务价值”之外的品牌增长问题。",
    image: asset("projects/haidilao-cover.jpg"),
    imagePosition: "center",
    tags: ["品牌诊断", "消费者研究", "品牌策略"],
    deliverables: "26 页品牌研究与建议方案",
    sections: [
      {
        label: "研究设计",
        text:
          "通过桌面研究梳理行业与品牌资料，以网络民族志观察真实消费者讨论，并辅以门店走访验证体验判断。三种方法结合，提升研究结论的可信度与现场感。",
      },
      {
        label: "核心发现",
        text:
          "方案从门店运营、品牌感知、消费行为、品牌构成与竞争格局出发，提炼品牌当前的核心矛盾：消费者对服务高度认可，但品牌价值表达与新的消费心理之间存在错位。",
      },
      {
        label: "改进建议",
        text:
          "围绕品牌价值重构、消费心理门槛、服务体验表达与社交传播机制提出改进建议，将服务优势转化为更清晰的品牌认知，并强化海底捞在年轻消费者生活中的情绪价值。",
      },
    ],
    gallery: [
      asset("projects/haidilao-method.jpg"),
      asset("projects/haidilao-insight.jpg"),
      asset("projects/haidilao-solution.jpg"),
      asset("projects/haidilao-evidence.jpg"),
    ],
    files: [
      {
        label: "查看完整品牌研究",
        path: "创意策划类作品/海底捞品牌发展现状与建议.pdf",
      },
    ],
  },
  {
    id: "haoshi",
    category: "creative",
    categoryLabel: "创意策划",
    title: "豪士透明工厂创意策划",
    client: "豪士面包",
    role: "市场分析 / 人群洞察 / 活动创意",
    year: "PROJECT",
    span: 7,
    description:
      "把“透明工厂”从生产概念转译成年轻人愿意参与的“透明快乐”，完成从洞察到活动地图的策划。",
    image: asset("projects/haoshi-cover.jpg"),
    imagePosition: "center",
    tags: ["品牌策划", "活动创意", "整合营销"],
    deliverables: "30 页透明工厂整合策划案",
    sections: [
      {
        label: "问题切入",
        text:
          "通过市场、竞品与消费者分析，重新审视豪士透明工厂的传播价值：消费者真正关心的不只是生产过程透明，而是品牌能否提供一种真实、轻松且可参与的情绪体验。",
      },
      {
        label: "核心策略",
        text:
          "将“透明工厂”升级为“透明快乐”，围绕“猴感”与“类人猿”人群画像建立沟通语言，把工厂参观、产品体验、内容互动和品牌社交传播组合成一套可执行的活动系统。",
      },
      {
        label: "创意落地",
        text:
          "方案包含人群洞察、产品与空间分区、营销 roadmap、预热传播、现场体验、跨界联动、校园行和效果评估等模块，覆盖从传播概念到活动执行的完整路径。",
      },
    ],
    gallery: [
      asset("projects/haoshi-roadmap.jpg"),
      asset("projects/haoshi-campaign.jpg"),
      asset("projects/haoshi-experience.jpg"),
    ],
    files: [
      {
        label: "查看完整策划案",
        path: "创意策划类作品/豪士透明工厂策划案.pdf",
      },
    ],
  },
  {
    id: "yili",
    category: "creative",
    categoryLabel: "创意策划",
    title: "伊利品质传播升级提案",
    client: "伊利",
    role: "消费者洞察 / 传播策略 / 创意提案",
    year: "PROJECT",
    span: 5,
    description:
      "从“看见品质”到“感知品质”，让企业视角下的质量标准，变成消费者能直接感受的体验。",
    image: asset("visuals/yili-cover.webp"),
    imagePosition: "center",
    tags: ["品牌传播", "消费者视角", "体验创意"],
    deliverables: "品质传播升级提案与视觉方案",
    sections: [
      {
        label: "洞察",
        text:
          "企业通常用标准、体系、认证和产业链讲述品质，而消费者更在意口感、新鲜、安心和情绪感受。两者之间需要一个从“事实”走向“感受”的沟通桥梁。",
      },
      {
        label: "核心策略",
        text:
          "提出“让消费者感知品质，而非被告知品质”的传播思路，从单向传播转向可体验、可参与的感知体验，让品质成为消费者的切身感受。",
      },
      {
        label: "创意呈现",
        text:
          "通过产品视觉实验与“可以挤奶的装置”等互动创意，把牛奶产品的品质语言转化为更直观、更有参与感的体验，并用统一视觉系统串联提案。",
      },
    ],
    gallery: [
      asset("visuals/yili-cover.webp"),
      asset("visuals/yili-creative.webp"),
      asset("visuals/yili-installation.webp"),
      asset("visuals/yili-product-design-1.webp"),
      asset("visuals/yili-product-design-2.webp"),
    ],
    files: [
      {
        label: "查看完整传播提案",
        path: "创意策划类作品/伊利 品质传播升级提案.pptx",
        previewPath: "assets/documents/yili-proposal.pdf",
      },
    ],
  },
  {
    id: "nuclear",
    category: "visual-archive",
    categoryLabel: "平面视觉",
    title: "全球核能工艺传播创意大赛获奖系列",
    client: "CNNE",
    role: "创意构思 / 视觉设计",
    year: "AWARD",
    span: 7,
    description:
      "以“核能工艺”为核心视觉线索，通过海、雪、草地三种场景形成完整系列表达。",
    image: asset("visuals/nuclear-sea.webp"),
    imagePosition: "top",
    poster: true,
    tags: ["获奖作品", "系列海报", "视觉表达"],
    deliverables: "3 张系列主题海报",
    sections: [
      {
        label: "系列概念",
        text:
          "围绕核能工艺传播主题，将科技、产业与自然场景有机连接。系列作品在统一构图与视觉语言下，分别以海洋、雪景和草地场景展开，形成从技术表达走向生活感知的传播叙事。",
      },
      {
        label: "视觉语言",
        text:
          "使用横向卷轴、场景化插画与高饱和色彩建立系列识别，让核能工艺不再停留在抽象技术层面，而是与城市、自然和人的未来生活产生联系。",
      },
    ],
    gallery: [
      asset("visuals/nuclear-sea.webp"),
      asset("visuals/nuclear-snow.webp"),
      asset("visuals/nuclear-grass.webp"),
    ],
    files: [],
    galleryMixed: true,
  },
  {
    id: "poster-collection",
    category: "visual-archive",
    categoryLabel: "平面视觉",
    title: "主题海报与视觉实验",
    client: "SELECTED POSTERS",
    role: "创意构思 / 版式设计 / 视觉表达",
    year: "VISUAL",
    span: 5,
    description:
      "涵盖电影节、劳动节、品牌产品与公益主题的多样视觉练习，尝试在不同命题中建立统一而鲜明的表达。",
    image: asset("visuals/collage-poster.webp"),
    imagePosition: "top",
    poster: true,
    tags: ["主题海报", "版式设计", "视觉实验"],
    deliverables: "5 组主题视觉",
    sections: [
      {
        label: "项目构成",
        text:
          "包括大学生电影节海报、劳动节宣传海报、赤尾产品海报、自然资源保护主题海报与多媒介视觉拼贴实验。不同作品分别围绕文化活动、公共议题和商业产品展开。",
      },
      {
        label: "设计思考",
        text:
          "根据不同传播目的选择字体、图像和版式语言：电影节强调复古胶片感，劳动节突出劳动者的时代形象，产品海报尝试文字与产品语境的结合，公益主题则采用更直观的场景叙事。",
      },
    ],
    gallery: [
      asset("visuals/student-film-poster.webp"),
      asset("visuals/labor-day-poster.webp"),
      asset("visuals/chiwei-product-poster.webp"),
      asset("visuals/environment-poster.webp"),
      asset("visuals/collage-poster.webp"),
    ],
    files: [],
    galleryMixed: true,
  },
  {
    id: "yili-design",
    category: "visual-archive",
    categoryLabel: "平面视觉",
    title: "伊利创意提案产品设计图",
    client: "YILI VISUAL STUDY",
    role: "AIGC 视觉生成 / 产品场景设计",
    year: "AIGC",
    span: 4,
    description:
      "将“可以挤奶的装置”从传播概念转化为产品视觉场景，探索 AIGC 在创意提案中的应用。",
    image: asset("visuals/yili-product-design-1.webp"),
    imagePosition: "center",
    tags: ["AIGC", "产品视觉", "创意提案"],
    deliverables: "2 组产品视觉设计",
    sections: [
      {
        label: "设计目的",
        text:
          "围绕伊利品质传播提案中的互动创意，把牛奶产品的功能特征转化为清晰、可感知的装置场景，用于增强提案的可视化表达能力。",
      },
      {
        label: "应用方式",
        text:
          "通过 AIGC 完成多轮视觉生成与筛选，再结合场景、产品与人物关系进行组合，让抽象概念以更直观的方式出现在传播提案中。",
      },
    ],
    gallery: [
      asset("visuals/yili-product-design-1.webp"),
      asset("visuals/yili-product-design-2.webp"),
    ],
    files: [],
    galleryMixed: true,
  },
  {
    id: "sound-season",
    category: "campus",
    categoryLabel: "校园活动",
    title: "第十六届大学生声音潮流季",
    client: "全国大学生声音潮流季",
    role: "活动策划 / 宣传推广",
    year: "2025",
    span: 7,
    description:
      "参与四个月系列活动全流程策划，联动百余所高校，让声音文化从校园走向更广泛的线上传播。",
    image: asset("experience/sound-stage.webp"),
    imagePosition: "center",
    tags: ["全流程策划", "高校联动", "活动执行"],
    deliverables: "预热策划 · 台本撰写 · 高校征集 · 艺人合作",
    sections: [
      {
        label: "活动目标",
        text:
          "以引导学生牢记使命、弘扬广播文化、展现声音魅力、促进全国高校广播媒体交流为目标，参与第十六届全国大学生声音潮流季的策划与执行。",
      },
      {
        label: "我的工作",
        text:
          "参与活动全流程策划与执行，包括校内线下预热、物料发放、微博与公众号宣传；撰写主持词及相关台本并负责节目排练；邀请姜广涛、姚柏南、李兰陵等业内嘉宾；负责全国高校作品收集、协办与合作高校沟通。",
      },
      {
        label: "合作与成果",
        text:
          "与爱奇艺《北上》剧组达成合作并制定专题配音栏目；协同外联部、行政部保障物料、推文和赞助资金按期落地。最终联动百余所高校，收集 900+ 参赛作品，晚会现场 1500+ 人，线上线下曝光 10w+。",
      },
    ],
    gallery: [
      asset("experience/sound-stage.webp"),
      asset("experience/sound-schools.webp"),
      asset("experience/sound-broadcast.webp"),
      asset("experience/sound-livestream.webp"),
    ],
    files: [],
  },
  {
    id: "choir-event",
    category: "campus",
    categoryLabel: "校园活动",
    title: "校级合唱比赛暨五四表彰大会",
    client: "中国传媒大学",
    role: "执行导演",
    year: "CAMPUS",
    span: 5,
    description:
      "围绕“传递总书记回信精神”策划晚会内容与节目编排，统筹全环节流程设计和现场落地。",
    image: asset("experience/choir-stage.webp"),
    imagePosition: "center",
    tags: ["执行导演", "晚会策划", "现场统筹"],
    deliverables: "内容策划 · 节目编排 · 流程执行",
    sections: [
      {
        label: "活动定位",
        text:
          "围绕“传递总书记回信精神”开展晚会内容策划调研与节目编排，将主题精神转化为可感知、可参与的舞台内容。",
      },
      {
        label: "我的职责",
        text:
          "担任执行导演，统筹全环节流程设计与落地执行，协调节目、舞台与现场各工作单元，保障晚会顺利举办。",
      },
    ],
    gallery: [
      asset("experience/choir-stage.webp"),
      asset("experience/choir-runofshow.webp"),
      asset("experience/choir-schedule.webp"),
    ],
    files: [],
  },
];

const individualVisualWorks = [
  {
    id: "yili-product-1",
    title: "伊利产品设计：可挤奶互动装置",
    client: "YILI VISUAL STUDY",
    role: "AIGC 视觉生成 / 产品场景设计",
    year: "AIGC",
    image: asset("visuals/yili-product-design-1.webp"),
    description:
      "把“可以挤奶的装置”转化为可视化产品场景，让品质传播从概念变成可感知的互动体验。",
    tags: ["AIGC", "产品视觉", "互动装置"],
    sections: [
      {
        label: "设计目的",
        text:
          "围绕伊利品质传播提案中的互动创意，将牛奶产品的功能特征转化为清晰、直观的装置场景，增强提案的可视化表达能力。",
      },
      {
        label: "视觉方法",
        text:
          "通过 AIGC 完成多轮视觉生成与筛选，再结合产品、空间与人物关系进行组合，使抽象概念以更具现场感的方式出现。",
      },
    ],
  },
  {
    id: "yili-product-2",
    title: "伊利产品设计：品质体验场景",
    client: "YILI VISUAL STUDY",
    role: "AIGC 视觉生成 / 场景设计",
    year: "AIGC",
    image: asset("visuals/yili-product-design-2.webp"),
    description:
      "延续品质体验概念，用温暖、自然的产品场景表达牛奶的新鲜感、安心感与可感知品质。",
    tags: ["AIGC", "场景设计", "品质表达"],
    sections: [
      {
        label: "设计目的",
        text:
          "将企业视角下的质量标准，转化为消费者可以直接看见和感受到的产品体验。",
      },
      {
        label: "视觉方法",
        text:
          "使用自然光、草场、奶牛与产品细节建立场景叙事，并通过统一的视觉语言延续伊利品质传播提案。",
      },
    ],
  },
  {
    id: "nuclear-sea",
    title: "核能创意海报｜海",
    client: "CNNE AWARD",
    role: "创意构思 / 视觉设计",
    year: "AWARD",
    image: asset("visuals/nuclear-sea.webp"),
    description:
      "以海洋场景连接核能工艺与未来生活，形成获奖系列中的蓝色视觉篇章。",
    tags: ["获奖海报", "海洋场景", "科技传播"],
    sections: [
      {
        label: "创意概念",
        text:
          "将核能工艺置于海洋、城市与未来生活的连续场景中，用横向卷轴和高饱和色彩降低技术主题的疏离感。",
      },
    ],
  },
  {
    id: "nuclear-snow",
    title: "核能创意海报｜雪",
    client: "CNNE AWARD",
    role: "创意构思 / 视觉设计",
    year: "AWARD",
    image: asset("visuals/nuclear-snow.webp"),
    description:
      "以雪景和冷色调建立系列中的静谧视觉节奏，表现核能工艺与自然环境的共生关系。",
    tags: ["获奖海报", "雪景", "视觉叙事"],
    sections: [
      {
        label: "创意概念",
        text:
          "通过雪景、低温与清洁能源的视觉联想，建立与海洋、草地场景相区别又相互统一的系列表达。",
      },
    ],
  },
  {
    id: "nuclear-grass",
    title: "核能创意海报｜草地",
    client: "CNNE AWARD",
    role: "创意构思 / 视觉设计",
    year: "AWARD",
    image: asset("visuals/nuclear-grass.webp"),
    description:
      "用绿色生态场景收束系列叙事，让核能工艺回到人与自然的日常关系之中。",
    tags: ["获奖海报", "生态场景", "系列视觉"],
    sections: [
      {
        label: "创意概念",
        text:
          "以草地与城市生活作为视觉落点，将科技、产业和自然环境连接为完整的未来生活图景。",
      },
    ],
  },
  {
    id: "student-film-poster",
    title: "大学生电影节海报",
    client: "CAMPUS FILM FESTIVAL",
    role: "创意构思 / 字体与版式设计",
    year: "POSTER",
    image: asset("visuals/student-film-poster.webp"),
    description:
      "以胶片颗粒、人物叠影和复古字体建立电影节海报的叙事氛围。",
    tags: ["电影海报", "字体设计", "复古视觉"],
    sections: [
      {
        label: "设计思考",
        text:
          "从电影胶片、银幕与青春记忆出发，组合人物影像和复古字体，让海报兼具电影感与校园文化属性。",
      },
    ],
  },
  {
    id: "labor-day-poster",
    title: "劳动节宣传海报",
    client: "LABOR DAY CAMPAIGN",
    role: "主题创意 / 视觉设计",
    year: "POSTER",
    image: asset("visuals/labor-day-poster.webp"),
    description:
      "以劳动者群像和强烈标题构建节日传播主视觉，突出个体价值与时代精神。",
    tags: ["劳动节", "人物海报", "主题传播"],
    sections: [
      {
        label: "设计思考",
        text:
          "通过清晰的人物层次、醒目的标题和节庆色彩，形成适合线上传播与线下展示的劳动节宣传视觉。",
      },
    ],
  },
  {
    id: "chiwei-product-poster",
    title: "赤尾产品海报",
    client: "CHIWEI",
    role: "产品创意 / 版式设计",
    year: "POSTER",
    image: asset("visuals/chiwei-product-poster.webp"),
    description:
      "围绕产品特征组织图像、文字和留白，让商业信息以更鲜明的版式语言被看见。",
    tags: ["产品海报", "商业视觉", "版式设计"],
    sections: [
      {
        label: "设计思考",
        text:
          "从产品卖点与品牌气质出发，尝试文字与产品语境的结合，让信息层级、视觉重心与传播目的保持一致。",
      },
    ],
  },
  {
    id: "environment-poster",
    title: "自然资源保护主题海报",
    client: "PUBLIC INTEREST",
    role: "公益创意 / 视觉叙事",
    year: "POSTER",
    image: asset("visuals/environment-poster.webp"),
    description:
      "以直观场景与对比关系传达自然资源保护议题，强化公益传播的情绪记忆。",
    tags: ["公益海报", "环境保护", "场景叙事"],
    sections: [
      {
        label: "设计思考",
        text:
          "通过具象场景建立环境议题与观看者的关系，用简洁文字和视觉对比强化保护自然资源的行动感。",
      },
    ],
  },
  {
    id: "collage-poster",
    title: "多媒介视觉拼贴实验",
    client: "VISUAL EXPERIMENT",
    role: "拼贴实验 / 版式设计",
    year: "VISUAL",
    image: asset("visuals/collage-poster.webp"),
    description:
      "以多媒介图像、手绘符号与文字拼贴形成实验性版式，探索信息与情绪的混合表达。",
    tags: ["视觉实验", "拼贴设计", "多媒介"],
    sections: [
      {
        label: "设计思考",
        text:
          "将不同类型图像视为可重新组合的视觉材料，通过尺度、色彩和空间关系制造冲突与节奏，拓展平面叙事的自由边界。",
      },
    ],
  },
].map((work) => ({
  category: "visual",
  categoryLabel: "平面视觉",
  span: 4,
  poster: true,
  imagePosition: "center",
  gallery: [work.image],
  files: [],
  galleryMixed: true,
  deliverables: "单件视觉作品",
  ...work,
}));

projects.push(...individualVisualWorks);

const videoGroups = [
  {
    label: "AIGC类",
    items: [
      {
        name: "VJ 视觉作品",
        path: "视频类作品/AIGC类/vj.mp4",
        webPath: "assets/videos/vj.mp4",
        cover: "assets/images/video-covers/vj.jpg",
        kind: "VJ / AIGC",
        description: "空间、节奏与视觉映射的组合实验。",
      },
      {
        name: "肯尼迪刺杀最终版",
        path: "视频类作品/AIGC类/肯尼迪刺杀最终版.mov",
        webPath: "assets/videos/kennedy.mp4",
        cover: "assets/images/video-covers/kennedy.jpg",
        kind: "AIGC / SHORT FILM",
        description: "以历史现场为灵感的 AI 影像重构。",
      },
      {
        name: "火车进站",
        path: "视频类作品/AIGC类/火车进站.mov",
        webPath: "assets/videos/train.mp4",
        cover: "assets/images/video-covers/train.jpg",
        kind: "AIGC / EXPERIMENT",
        description: "超宽画幅中的时间与空间叙事实验。",
      },
    ],
  },
  {
    label: "TVC类",
    items: [
      {
        name: "赤手空拳",
        path: "视频类作品/TVC类/赤手空拳.mp4",
        cover: "assets/images/video-covers/tvc-bare-hands.jpg",
        kind: "TVC / BRAND FILM",
        description: "从产品卖点走向生活场景的短片表达。",
      },
      {
        name: "别隔那么厚",
        path: "视频类作品/TVC类/别隔那么厚.mp4",
        cover: "assets/images/video-covers/tvc-thick-wall.jpg",
        kind: "TVC / BRAND FILM",
        description: "用轻巧叙事完成品牌信息的视觉转译。",
      },
    ],
  },
  {
    label: "vlog类",
    items: [
      {
        name: "6月13日 Vlog",
        path: "视频类作品/vlog类/6月13日 彭晓璐vlog.mov",
        webPath: "assets/videos/vlog-june13.mp4",
        cover: "assets/images/video-covers/vlog-june13.jpg",
        kind: "VLOG / DAILY RECORD",
        description: "以第一视角记录生活片段与情绪节奏。",
      },
    ],
  },
];

const guanyueResults = [
  {
    title: "带台湾大伯参加九三阅兵观礼",
    kind: "观礼 01 / 03",
    cover: "assets/images/douyin-covers/guanyue-01-cover.jpg",
    href: "https://www.douyin.com/video/7545501093569039675",
    description: "带台湾大学教授苑举正参加九三阅兵观礼。",
  },
  {
    title: "带大伯参观抗战纪念馆，偶遇洪秀柱",
    kind: "观礼 02 / 03",
    cover: "assets/images/douyin-covers/guanyue-02-cover.jpg",
    href: "https://www.douyin.com/video/7545396821113752891",
    description: "带大伯参观抗战纪念馆，并向洪秀柱介绍采访经历。",
  },
  {
    title: "九三阅兵观礼谁会被邀请？",
    kind: "观礼 03 / 03",
    cover: "assets/images/douyin-covers/guanyue-03-cover.jpg",
    href: "https://www.douyin.com/video/7545013521748086075",
    description: "台湾大学教授苑举正受邀参加九三阅兵观礼。",
  },
];

const chinaTechResults = [
  {
    title: "南非打击非法盗猎犀牛",
    kind: "CHINADAILY / 01",
    cover: "assets/images/douyin-covers/tech-rhino-cover.jpg",
    href: "https://www.douyin.com/jingxuan?modal_id=7534975751636913471",
    description: "放射性同位素检测如何帮助拦截非法犀牛角交易。",
  },
  {
    title: "黄仁勋：中国大模型推动全球 AI 发展",
    kind: "CHINADAILY / 02",
    cover: "assets/images/douyin-covers/tech-nvidia-cover.jpg",
    href: "https://www.douyin.com/jingxuan?modal_id=7528334210340736299",
    description: "黄仁勋在链博会谈中国大模型与全球 AI 发展。",
  },
  {
    title: "采访被鸟叫打断？重庆鸟类“争地盘”",
    kind: "CHINADAILY / 03",
    cover: "assets/images/douyin-covers/tech-birds-cover.jpg",
    href: "https://www.douyin.com/jingxuan?modal_id=7538389313425657130",
    description: "重庆开州汉丰湖鸟类数量增长四倍的现场报道。",
  },
  {
    title: "做饭太热？厨房空调了解一下",
    kind: "CHINADAILY / 04",
    cover: "assets/images/douyin-covers/tech-kitchen-cover.jpg",
    href: "https://www.douyin.com/jingxuan?modal_id=7539479492864838931",
    description: "走访厨房空调产品，体验高温烹饪场景的新方案。",
  },
];

const tiktokResults = [
  {
    title: "8月25日 美高",
    kind: "TIKTOK / GROWTH",
    cover: "assets/images/video-covers/china-meigao.jpg",
    localPath: "视频类作品/tiktok营销号类/8月25日 美高.mov",
    webPath: "assets/videos/china-meigao.mp4",
    description: "面向海外受众的英语短视频内容。",
  },
  {
    title: "8月29日 医生最新版",
    kind: "TIKTOK / GROWTH",
    cover: "assets/images/video-covers/china-doctor.jpg",
    localPath: "视频类作品/tiktok营销号类/8月29日医生最新版.mov",
    webPath: "assets/videos/china-doctor.mp4",
    description: "以轻剧情方式完成新闻议题的社交化表达。",
  },
  {
    title: "9月3日 国家",
    kind: "TIKTOK / NEWS",
    cover: "assets/images/video-covers/china-national.jpg",
    localPath: "视频类作品/tiktok营销号类/9月3日 国家.mov",
    webPath: "assets/videos/china-national.mp4",
    description: "九三阅兵节点的海外社交短视频。",
  },
];

const grid = document.querySelector("[data-work-grid]");
const filterButtons = [...document.querySelectorAll("[data-filter]")];
const filterNote = document.querySelector("[data-filter-note]");
const dialog = document.querySelector("[data-project-dialog]");
const dialogContent = document.querySelector("[data-dialog-content]");
const dialogClose = document.querySelector("[data-dialog-close]");
const workCarouselShell = document.querySelector(".work-carousel-shell");
const workPrev = document.querySelector("[data-work-prev]");
const workNext = document.querySelector("[data-work-next]");
const workStatus = document.querySelector("[data-work-status]");
const documentReader = document.querySelector("[data-document-reader]");
const documentFrame = document.querySelector("[data-document-frame]");
const documentReaderTitle = document.querySelector("[data-document-reader-title]");
const documentReaderClose = document.querySelector("[data-document-close]");
const documentExternal = document.querySelector("[data-document-external]");
let lastDialogTrigger = null;
let lastDocumentTrigger = null;
let activeWorkIndex = 0;
let workWasDragged = false;

function encodedPath(path) {
  return encodeURI(path);
}

function projectCard(project, span = project.span || 4) {
  const article = document.createElement("article");
  article.className = "work-card";
  article.style.setProperty("--span", span);
  article.tabIndex = 0;
  article.setAttribute("role", "button");
  article.setAttribute("aria-label", `查看项目：${project.title}`);
  article.dataset.projectId = project.id;
  article.dataset.workCard = "";

  article.innerHTML = `
    <div class="work-card-media ${project.poster ? "is-poster" : ""}">
      <span class="work-card-badge">${project.categoryLabel}</span>
      <span class="work-card-year">${project.year}</span>
      <img
        src="${project.image}"
        alt="${project.title}项目预览"
        loading="lazy"
        style="object-position:${project.imagePosition || "center"}"
      />
    </div>
    <div class="work-card-body">
      <div class="work-card-meta">
        <span>${project.client}</span>
        <span>${project.role}</span>
      </div>
      <h3>${project.title}</h3>
      <p class="work-card-description">${project.description}</p>
      <div class="work-card-footer">
        <div class="work-card-tags">
          ${project.tags.map((tag) => `<span>${tag}</span>`).join("")}
        </div>
      </div>
    </div>
    <span class="work-card-open-cue" aria-hidden="true">→</span>
  `;

  article.addEventListener("click", () => {
    if (workWasDragged) return;
    openProject(project.openProjectId || project.id, article);
  });
  article.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openProject(project.openProjectId || project.id, article);
    }
  });

  return article;
}

function videoWorkCard(item, groupLabel) {
  const article = document.createElement("article");
  article.className = "work-card video-work-card";
  article.dataset.workCard = "";
  article.tabIndex = 0;
  article.setAttribute("role", "button");
  article.setAttribute("aria-label", `播放视频：${item.name}`);
  article.innerHTML = `
    <div class="work-card-media video-work-media">
      <img src="${item.cover}" alt="${item.name}视频封面" loading="lazy" />
      <span class="work-card-badge">${groupLabel}</span>
      <span class="video-card-play" aria-hidden="true">▶</span>
    </div>
    <div class="work-card-body video-work-body">
      <div class="work-card-meta">
        <span>${item.kind}</span>
        <span>PLAY VIDEO</span>
      </div>
      <h3>${item.name}</h3>
      <p class="video-work-description">${item.description}</p>
    </div>
    <span class="work-card-open-cue" aria-hidden="true">→</span>
  `;

  article.addEventListener("click", () => {
    if (workWasDragged) return;
    openVideo(item, article);
  });
  article.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openVideo(item, article);
    }
  });

  return article;
}

function videoWorkCards() {
  return videoGroups.flatMap((group) =>
    group.items.map((item) => videoWorkCard(item, group.label)),
  );
}

function featuredWorkCards() {
  const projectById = (id) => projects.find((project) => project.id === id);
  const aigcItems = videoGroups.find((group) => group.label === "AIGC类").items;
  const kennedy = aigcItems.find((item) => item.name.includes("肯尼迪"));
  const vj = aigcItems.find((item) => item.name.includes("VJ"));
  const train = aigcItems.find((item) => item.name.includes("火车进站"));
  const posterWorks = [
    {
      id: "featured-labor-poster",
      openProjectId: "poster-collection",
      categoryLabel: "平面视觉",
      title: "劳动节宣传海报",
      client: "LABOUR DAY / POSTER",
      role: "创意构思 / 海报设计",
      year: "POSTER",
      description: "以劳动者的群像与时代情绪为核心，完成节日主题视觉表达。",
      image: asset("visuals/labor-day-poster.webp"),
      imagePosition: "center",
      poster: true,
      tags: ["节日海报", "版式设计", "主题视觉"],
    },
    {
      id: "featured-yili-design",
      openProjectId: "yili-design",
      categoryLabel: "产品视觉",
      title: "伊利产品设计海报",
      client: "YILI / PRODUCT VISUAL",
      role: "AIGC 视觉生成 / 产品场景",
      year: "AIGC",
      description: "把产品概念转译为可视化的装置与消费场景，强化提案表达。",
      image: asset("visuals/yili-product-design-1.webp"),
      imagePosition: "center",
      poster: true,
      tags: ["AIGC", "产品视觉", "伊利"],
    },
    {
      id: "featured-chiwei-poster",
      openProjectId: "poster-collection",
      categoryLabel: "平面视觉",
      title: "赤尾产品海报",
      client: "CHIWEI / PRODUCT POSTER",
      role: "创意构思 / 产品视觉",
      year: "POSTER",
      description: "围绕产品气质建立鲜明视觉记忆，让商业信息更直观地进入画面。",
      image: asset("visuals/chiwei-product-poster.webp"),
      imagePosition: "center",
      poster: true,
      tags: ["产品海报", "品牌视觉", "创意表达"],
    },
  ];

  return [
    projectCard(projectById("yili")),
    projectCard(projectById("haoshi")),
    videoWorkCard(kennedy, "AIGC类"),
    videoWorkCard(vj, "AIGC类"),
    videoWorkCard(train, "AIGC类"),
    ...posterWorks.map((project) => projectCard(project)),
  ];
}

function renderWorks(filter = "creative") {
  grid.classList.remove("is-switching");
  grid.innerHTML = "";
  activeWorkIndex = 0;

  let items = [];
  const spanPatterns = {
    creative: [7, 5, 5, 7],
    visual: [5, 7, 12],
    campus: [7, 5],
  };
  const projectOrder = {
    creative: ["beeswax", "haidilao", "yili", "haoshi"],
    visual: [
      "yili-product-1",
      "yili-product-2",
      "nuclear-sea",
      "nuclear-snow",
      "nuclear-grass",
      "student-film-poster",
      "labor-day-poster",
      "chiwei-product-poster",
      "environment-poster",
      "collage-poster",
    ],
    campus: ["sound-season", "choir-event"],
  };

  if (filter === "featured") {
    items = featuredWorkCards();
  } else if (filter === "video") {
    items = videoWorkCards();
  } else {
    items = (projectOrder[filter] || [])
      .map((id) => projects.find((project) => project.id === id))
      .filter(Boolean);
  }

  if (!items.length) {
    const empty = document.createElement("div");
    empty.className = "empty-work-state";
    empty.textContent = "这一分类的作品正在整理中。";
    grid.append(empty);
  } else {
    items.forEach((item, index) => {
      if (item instanceof HTMLElement) {
        grid.append(item);
      } else {
        const pattern = spanPatterns[filter] || [item.span || 4];
        grid.append(projectCard(item, pattern[index % pattern.length]));
      }
    });
  }

  const isRing = items.length > 1;
  grid.classList.toggle("is-ring", isRing);
  workCarouselShell?.classList.toggle("is-single", !isRing);
  if (filter === "creative") {
    activeWorkIndex = Math.max(
      0,
      items.findIndex((item) => item.id === "yili"),
    );
  }

  const filterLabels = {
    featured: "精选作品",
    creative: "创意策划",
    visual: "平面视觉",
    video: "视频",
    campus: "校园活动",
  };
  const countText = `${String(items.length).padStart(2, "0")} 个${
    filterLabels[filter] || "作品"
  } / 点击查看或播放`;
  filterNote.textContent = countText;

  requestAnimationFrame(() => {
    grid.classList.add("is-switching");
    layoutWorkRing();
  });
}

function layoutWorkRing() {
  if (!grid.classList.contains("is-ring")) return;

  const cards = [...grid.querySelectorAll("[data-work-card]")];
  const count = cards.length;
  if (!count) return;

  activeWorkIndex = (activeWorkIndex + count) % count;

  cards.forEach((card, index) => {
    let relativeIndex = index - activeWorkIndex;
    if (relativeIndex > count / 2) relativeIndex -= count;
    if (relativeIndex < -count / 2) relativeIndex += count;

    const distance = Math.abs(relativeIndex);
    const isVisible = distance <= 2;
    const isActive = relativeIndex === 0;
    const scale = Math.max(0.72, 1 - distance * 0.105);

    card.style.setProperty("--ring-x", `${relativeIndex * 252}px`);
    card.style.setProperty("--ring-y", `${distance * 22}px`);
    card.style.setProperty("--ring-rotate", `${relativeIndex * -16}deg`);
    card.style.setProperty("--ring-scale", String(scale));
    card.style.setProperty("--ring-opacity", isVisible ? "1" : "0");
    card.style.zIndex = String(30 - distance);
    card.classList.toggle("is-active", isActive);
    card.tabIndex = isVisible ? 0 : -1;
    card.setAttribute("aria-hidden", String(!isVisible));
  });

  if (workStatus) {
    const title = cards[activeWorkIndex]?.querySelector("h3")?.textContent || "作品";
    workStatus.textContent = `${String(activeWorkIndex + 1).padStart(2, "0")} / ${String(
      count,
    ).padStart(2, "0")} · ${title}`;
  }
}

function shiftWorkRing(direction) {
  if (!grid.classList.contains("is-ring")) return;
  activeWorkIndex += direction;
  layoutWorkRing();
}

workPrev?.addEventListener("click", () => shiftWorkRing(-1));
workNext?.addEventListener("click", () => shiftWorkRing(1));

let workDrag = null;

grid.addEventListener("pointerdown", (event) => {
  if (!grid.classList.contains("is-ring") || event.pointerType === "mouse") return;
  workDrag = { x: event.clientX, y: event.clientY };
  workWasDragged = false;
});

grid.addEventListener("pointerup", (event) => {
  if (!workDrag) return;
  const deltaX = event.clientX - workDrag.x;
  const deltaY = event.clientY - workDrag.y;
  if (Math.abs(deltaX) > 46 && Math.abs(deltaX) > Math.abs(deltaY)) {
    workWasDragged = true;
    shiftWorkRing(deltaX < 0 ? 1 : -1);
    window.setTimeout(() => {
      workWasDragged = false;
    }, 80);
  }
  workDrag = null;
});

let wheelLocked = false;
grid.addEventListener(
  "wheel",
  (event) => {
    if (!grid.classList.contains("is-ring") || wheelLocked) return;
    const horizontalIntent = Math.abs(event.deltaX) > Math.abs(event.deltaY);
    if (!horizontalIntent && !event.shiftKey) return;
    event.preventDefault();
    wheelLocked = true;
    shiftWorkRing(event.deltaX + (event.shiftKey ? event.deltaY : 0) > 0 ? 1 : -1);
    window.setTimeout(() => {
      wheelLocked = false;
    }, 320);
  },
  { passive: false },
);

function detailSections(project) {
  return project.sections
    .map(
      (section) => `
        <div class="detail-section-grid">
          <h3>${section.label}</h3>
          <p>${section.text}</p>
        </div>
      `,
    )
    .join("");
}

function detailFiles(project) {
  if (!project.files?.length) {
    return "";
  }

  return `
    <div class="detail-file-actions">
      ${project.files
        .map(
          (file, index) => {
            const extension = file.path.split(".").pop()?.toUpperCase() || "FILE";
            return `
              <div class="detail-file-action">
                <button
                  class="master-file-button"
                  type="button"
                  data-document-open
                  data-document-title="${file.label}"
                  data-document-preview="${file.previewPath || file.path}"
                  data-document-source="${file.path}"
                >
                  <span>
                    <small>FULL DOCUMENT / ${extension}</small>
                    <strong>查看完整文件</strong>
                  </span>
                  <span class="master-file-arrow" aria-hidden="true">↗</span>
                </button>
                <a
                  class="detail-source-link"
                  href="${encodedPath(file.path)}"
                  target="_blank"
                  rel="noopener"
                >
                  打开或下载源文件 · ${extension}
                </a>
              </div>
            `;
          },
        )
        .join("")}
      <p class="document-support-note">
        支持 PDF、PPT / PPTX 与 Word 文档的完整页面预览，原始文件可直接打开或下载。
      </p>
    </div>
  `;
}

function openProject(projectId, trigger) {
  const project = projects.find((entry) => entry.id === projectId);
  if (!project) return;

  lastDialogTrigger = trigger || document.activeElement;
  dialogContent.innerHTML = `
    <article class="project-detail">
      <header class="detail-hero">
        <div class="detail-hero-copy">
          <p class="eyebrow">${project.categoryLabel} / ${project.year}</p>
          <h2 id="dialog-title">${project.title}</h2>
          <p>${project.description}</p>
        </div>
        <div class="detail-hero-media">
          <img src="${project.image}" alt="${project.title}项目主视觉" />
        </div>
      </header>
      <div class="detail-meta">
        <div><span>CLIENT / CONTEXT</span><strong>${project.client}</strong></div>
        <div><span>ROLE</span><strong>${project.role}</strong></div>
        <div><span>DELIVERABLES</span><strong>${project.deliverables}</strong></div>
        <div><span>YEAR / TYPE</span><strong>${project.year} · ${project.categoryLabel}</strong></div>
      </div>
      <div class="detail-main">
        ${detailSections(project)}
        <div class="detail-document">
          <div class="detail-document-head">
            <div>
              <strong>完整项目文档</strong>
              <span>PREVIEW</span>
            </div>
            <small>${project.gallery.length} PAGES · 点击缩略图切换</small>
          </div>
          <div class="detail-document-body">
            <div class="detail-document-thumbs" role="tablist" aria-label="项目文档页面">
              ${project.gallery
                .map(
                  (source, index) => `
                    <button
                      type="button"
                      class="${index === 0 ? "is-active" : ""}"
                      data-document-preview="${source}"
                      data-document-index="${index}"
                      aria-label="查看第 ${index + 1} 页"
                    >
                      <img src="${source}" alt="" loading="lazy" />
                      <span>${String(index + 1).padStart(2, "0")}</span>
                    </button>
                  `,
                )
                .join("")}
            </div>
            <div class="detail-document-canvas">
              <img
                src="${project.gallery[0]}"
                alt="${project.title}项目内容图 1"
                data-document-canvas
              />
            </div>
          </div>
          <div class="detail-document-foot">
            <span>PAGE 01 / ${String(project.gallery.length).padStart(2, "0")}</span>
            <span>点击“查看完整项目文件”打开原始文档</span>
          </div>
        </div>
        ${detailFiles(project)}
      </div>
    </article>
  `;

  const documentButtons = [...dialogContent.querySelectorAll("[data-document-preview]")];
  const documentCanvas = dialogContent.querySelector("[data-document-canvas]");
  const documentPage = dialogContent.querySelector(".detail-document-foot span:first-child");
  documentButtons.forEach((button) => {
    button.addEventListener("click", () => {
      documentButtons.forEach((entry) => entry.classList.remove("is-active"));
      button.classList.add("is-active");
      if (documentCanvas) {
        documentCanvas.src = button.dataset.documentPreview;
        documentCanvas.alt = `${project.title}项目内容图 ${
          Number(button.dataset.documentIndex) + 1
        }`;
      }
      if (documentPage) {
        documentPage.textContent = `PAGE ${String(
          Number(button.dataset.documentIndex) + 1,
        ).padStart(2, "0")} / ${String(project.gallery.length).padStart(2, "0")}`;
      }
    });
  });

  showDialog();
}

function openDocument(file, trigger) {
  if (!documentReader || !documentFrame) return;
  lastDocumentTrigger = trigger || document.activeElement;
  documentReaderTitle.textContent = file.title || "完整项目文件";
  documentExternal.href = encodedPath(file.sourcePath);
  documentFrame.src = encodedPath(file.previewPath);
  documentReader.showModal();
  requestAnimationFrame(() => documentReaderClose.focus());
}

function openChinaDailyResults(trigger) {
  lastDialogTrigger = trigger || document.activeElement;
  dialogContent.innerHTML = `
    <article class="china-results-page">
      <header class="china-results-head">
        <p class="eyebrow">CHINA DAILY / INTERNSHIP ARCHIVE</p>
        <div>
          <h2 id="dialog-title">中国日报实习成果</h2>
          <p>新闻策划、短视频创作与海外账号运营。点击任意封面播放，或跳转查看完整新闻内容。</p>
        </div>
      </header>
      <section class="china-results-section china-results-guanyue">
        <div class="china-results-section-head">
          <h3>九三阅兵观礼系列视频</h3>
          <span>03 EXTERNAL DOUYIN LINKS</span>
        </div>
        <div class="china-result-grid">
          ${guanyueResults
            .map(
              (item) => `
                <a
                  class="china-result-card"
                  href="${item.href}"
                  target="_blank"
                  rel="noopener"
                >
                  <div class="china-result-cover">
                    <img src="${item.cover}" alt="${item.title}封面" loading="lazy" />
                    <span class="china-result-play" aria-hidden="true">▶</span>
                    <span class="china-result-kind">${item.kind}</span>
                  </div>
                  <div class="china-result-copy">
                    <h4>${item.title}</h4>
                    <p>${item.description}</p>
                    <span>打开新闻作品 ↗</span>
                  </div>
                </a>
              `,
            )
            .join("")}
        </div>
      </section>
      <section class="china-results-section china-results-tech">
        <div class="china-results-section-head">
          <h3>中国日报双语科技</h3>
          <span>04 EXTERNAL DOUYIN LINKS</span>
        </div>
        <div class="china-result-grid">
          ${chinaTechResults
            .map(
              (item) => `
                <a
                  class="china-result-card"
                  href="${item.href}"
                  target="_blank"
                  rel="noopener"
                >
                  <div class="china-result-cover">
                    <img src="${item.cover}" alt="${item.title}封面" loading="lazy" />
                    <span class="china-result-play" aria-hidden="true">▶</span>
                    <span class="china-result-kind">${item.kind}</span>
                  </div>
                  <div class="china-result-copy">
                    <h4>${item.title}</h4>
                    <p>${item.description}</p>
                    <span>打开双语科技视频 ↗</span>
                  </div>
                </a>
              `,
            )
            .join("")}
        </div>
      </section>
      <section class="china-results-section china-results-local">
        <div class="china-results-section-head">
          <h3>TikTok 与社交短视频</h3>
          <span>03 PLAYABLE FILES</span>
        </div>
        <div class="china-result-grid">
          ${tiktokResults
            .map(
              (item, index) => `
                <button
                  class="china-result-card"
                  type="button"
                  data-china-video="${index}"
                >
                  <div class="china-result-cover">
                    <img src="${item.cover}" alt="${item.title}视频封面" loading="lazy" />
                    <span class="china-result-play" aria-hidden="true">▶</span>
                    <span class="china-result-kind">${item.kind}</span>
                  </div>
                  <div class="china-result-copy">
                    <h4>${item.title}</h4>
                    <p>${item.description}</p>
                    <span>播放视频 ↗</span>
                  </div>
                </button>
              `,
            )
            .join("")}
        </div>
      </section>
      <footer class="china-results-foot">
        <strong>九三阅兵期间系列视频全网传播 10 亿+</strong>
        <span>抖音、微博 20+ 条热搜词条 · 海外 TikTok 账号全流程运营</span>
      </footer>
    </article>
  `;

  dialogContent.querySelectorAll("[data-china-video]").forEach((button) => {
    button.addEventListener("click", () => {
      openVideo(tiktokResults[Number(button.dataset.chinaVideo)], button);
    });
  });

  showDialog();
}

function openVideo(item, trigger) {
  lastDialogTrigger = trigger || document.activeElement;
  const playableSource = item.webPath || item.path;
  dialogContent.innerHTML = `
    <div class="video-detail">
      <div class="video-detail-bar">
        <h2 id="dialog-title">${item.name}</h2>
        <span>VIDEO ARCHIVE / WEB PLAYER</span>
      </div>
      <div class="video-player-shell">
        <video controls autoplay playsinline preload="metadata" poster="${item.cover || ""}">
          <source src="${encodedPath(playableSource)}" />
          当前浏览器无法播放该视频格式。
        </video>
      </div>
      <div class="news-links" style="margin-top: 12px; padding: 18px; border-radius: 10px;">
        <a class="news-link" href="${encodedPath(item.path)}" target="_blank" rel="noopener">
          <span>打开或下载原始视频文件</span>
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </div>
  `;
  showDialog();
}

function openNews(item, trigger) {
  lastDialogTrigger = trigger || document.activeElement;
  dialogContent.innerHTML = `
    <div class="video-detail">
      <div class="video-detail-bar">
        <h2 id="dialog-title">${item.name}</h2>
        <span>NEWS ARCHIVE / 04 LINKS</span>
      </div>
      <div class="news-links">
        ${item.links
          .map(
            (link, index) => `
              <a class="news-link" href="${link}" target="_blank" rel="noopener">
                <span>新闻类作品 ${String(index + 1).padStart(2, "0")}</span>
                <span aria-hidden="true">打开 ↗</span>
              </a>
            `,
          )
          .join("")}
      </div>
    </div>
  `;
  showDialog();
}

function showDialog() {
  dialog.showModal();
  document.body.classList.add("is-locked");
  dialogContent.scrollTop = 0;
  requestAnimationFrame(() => dialogClose.focus());
}

function closeDialog() {
  if (dialog.open) {
    dialog.close();
  }
}

document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-document-open]");
  if (!button) return;
  openDocument(
    {
      title: button.dataset.documentTitle,
      previewPath: button.dataset.documentPreview,
      sourcePath: button.dataset.documentSource,
    },
    button,
  );
});

dialogClose.addEventListener("click", closeDialog);
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) {
    closeDialog();
  }
});
dialog.addEventListener("close", () => {
  document.body.classList.remove("is-locked");
  dialogContent.innerHTML = "";
  lastDialogTrigger?.focus?.();
});

documentReaderClose?.addEventListener("click", () => {
  documentReader.close();
});

documentReader?.addEventListener("click", (event) => {
  if (event.target === documentReader) {
    documentReader.close();
  }
});

documentReader?.addEventListener("close", () => {
  if (documentFrame) {
    documentFrame.src = "about:blank";
  }
  lastDocumentTrigger?.focus?.();
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((entry) => entry.classList.remove("is-active"));
    button.classList.add("is-active");
    renderWorks(button.dataset.filter);
  });
});

document.querySelectorAll("[data-work-filter-target]").forEach((link) => {
  link.addEventListener("click", () => {
    const filterButton = filterButtons.find(
      (button) => button.dataset.filter === link.dataset.workFilterTarget,
    );
    filterButton?.click();
  });
});

const chinaResultsTrigger = document.querySelector("[data-china-results]");
chinaResultsTrigger?.addEventListener("click", () => {
  openChinaDailyResults(chinaResultsTrigger);
});
chinaResultsTrigger?.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    openChinaDailyResults(chinaResultsTrigger);
  }
});

// Navigation
const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-nav]");
const menuLabel = menuToggle.querySelector("[data-menu-label]");

function setMenuOpen(isOpen) {
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  nav.classList.toggle("is-open", isOpen);
  if (menuLabel) {
    menuLabel.textContent = isOpen ? "关闭导航" : "打开导航";
  }
}

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  setMenuOpen(!isOpen);
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    setMenuOpen(false);
    nav.querySelectorAll("a").forEach((entry) => {
      entry.classList.toggle("is-active", entry === link);
    });
  });
});

// Copy contact details with a visible, screen-reader-friendly confirmation.
const copyButtons = [
  ...document.querySelectorAll(
    '[data-copy-value]:not([aria-hidden="true"])',
  ),
];
const copyToast = [...document.querySelectorAll("[data-copy-toast]")].find(
  (toast) => !toast.closest(".footer-magnifier"),
);
const copyResetTimers = new WeakMap();
let copyToastTimer = null;

function legacyCopyText(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.top = "-9999px";
  textarea.style.opacity = "0";
  document.body.append(textarea);
  textarea.select();
  textarea.setSelectionRange(0, textarea.value.length);

  let copied = false;
  try {
    copied = document.execCommand("copy");
  } catch {
    copied = false;
  }
  textarea.remove();
  return copied;
}

async function copyText(text) {
  if (navigator.clipboard?.writeText && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // Fall through for browsers that expose the API but deny the write.
    }
  }
  return legacyCopyText(text);
}

function showCopyToast(message) {
  if (!copyToast) return;
  window.clearTimeout(copyToastTimer);
  copyToast.textContent = message;
  copyToast.classList.remove("is-visible");
  void copyToast.offsetWidth;
  copyToast.classList.add("is-visible");
  copyToastTimer = window.setTimeout(() => {
    copyToast.classList.remove("is-visible");
  }, 2400);
}

copyButtons.forEach((button) => {
  button.addEventListener("click", async () => {
    const value = button.dataset.copyValue;
    const name = button.dataset.copyName || "内容";
    const label = button.querySelector(".contact-action-label");
    const icon = button.querySelector("[data-copy-icon]");
    const copied = await copyText(value);

    if (!copied) {
      showCopyToast(`${name}复制失败，请手动复制：${value}`);
      return;
    }

    window.clearTimeout(copyResetTimers.get(button));
    button.classList.add("is-copied");
    if (label) {
      label.textContent = button.dataset.copySuccessLabel || `${name}已复制`;
    }
    if (icon) {
      icon.textContent = "✓";
    }
    showCopyToast(button.dataset.copyMessage || `${name}已复制`);

    copyResetTimers.set(
      button,
      window.setTimeout(() => {
        button.classList.remove("is-copied");
        if (label) {
          label.textContent = name === "邮箱" ? "一键复制邮箱" : "一键复制电话";
        }
        if (icon) {
          icon.textContent = "⧉";
        }
      }, 1800),
    );
  });
});

function updateHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 36);
}

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

// Active navigation
const navLinks = [...nav.querySelectorAll("a")];
const observedSections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

let activeNavFrame = null;

function updateActiveNavigation() {
  if (!observedSections.length) return;

  const headerBottom = header.getBoundingClientRect().bottom;
  const marker = headerBottom + 24;
  let activeSection = null;

  observedSections.forEach((section) => {
    if (section.getBoundingClientRect().top <= marker) {
      activeSection = section;
    }
  });

  const atPageEnd =
    window.innerHeight + window.scrollY >=
    document.documentElement.scrollHeight - 2;
  if (atPageEnd) {
    activeSection = observedSections[observedSections.length - 1];
  }

  navLinks.forEach((link) => {
    const isActive =
      activeSection &&
      link.getAttribute("href") === `#${activeSection.id}`;
    link.classList.toggle("is-active", isActive);
    if (isActive) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
  activeNavFrame = null;
}

function scheduleActiveNavigation() {
  if (activeNavFrame !== null) return;
  activeNavFrame = requestAnimationFrame(updateActiveNavigation);
}

window.addEventListener("scroll", scheduleActiveNavigation, { passive: true });
window.addEventListener("resize", scheduleActiveNavigation, { passive: true });
scheduleActiveNavigation();

// Scroll reveal
const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -5% 0px" },
);

document.querySelectorAll(".reveal").forEach((element, index) => {
  element.style.transitionDelay = `${Math.min(index % 4, 3) * 70}ms`;
  revealObserver.observe(element);
});

// Render initial content
renderWorks("featured");

// Pizza sticker cursor with a trail of ingredients. Native cursors remain
// available on touch devices, in modal documents, and with reduced motion.
function initPizzaCursor() {
  const layer = document.querySelector("[data-cursor-layer]");
  const canvas = document.querySelector("[data-cursor-trail]");
  const foodContainer = document.querySelector("[data-cursor-food-trail]");
  const halo = document.querySelector("[data-cursor-halo]");
  const pointer = document.querySelector("[data-cursor-pointer]");
  const finePointer = window.matchMedia("(pointer: fine) and (hover: hover)");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  if (!layer || !canvas || !foodContainer || !halo || !pointer) {
    return;
  }
  if (!finePointer.matches || reducedMotion.matches) return;

  const context = canvas.getContext("2d");
  if (!context) return;

  const root = document.documentElement;
  const dialogs = [...document.querySelectorAll("dialog")];
  const palette = {
    cheese: "255, 203, 59",
    cheeseLight: "255, 229, 152",
    pepperoni: "255, 91, 63",
    crust: "217, 133, 63",
    basil: "118, 212, 174",
  };
  const trail = [];
  const particles = [];
  const trailDuration = 440;
  const foodTrailItems = Array.from({ length: 16 }, () => {
    const food = document.createElement("span");
    food.className = "cursor-food";
    foodContainer.append(food);
    return food;
  });
  let targetX = -100;
  let targetY = -100;
  let pointerX = -100;
  let pointerY = -100;
  let haloX = -100;
  let haloY = -100;
  let pointerScale = 1;
  let haloScale = 1;
  let lastTrailPoint = null;
  let lastFrame = performance.now();
  let started = false;
  let pressed = false;
  let interactive = false;
  let modalOpen = false;
  let frameId = null;

  function resizeCanvas() {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(window.innerWidth * ratio);
    canvas.height = Math.round(window.innerHeight * ratio);
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
  }

  function cursorTarget(target) {
    if (!(target instanceof Element)) return null;
    return target.closest("a, button, [role='button'], video");
  }

  function updateInteractive(target) {
    const element = cursorTarget(target);
    const nextInteractive = Boolean(element);

    if (nextInteractive !== interactive) {
      interactive = nextInteractive;
      halo.classList.toggle("is-interactive", interactive);
    }
  }

  function spawnBurst(x, y) {
    const foodColors = [
      palette.cheese,
      palette.pepperoni,
      palette.basil,
      palette.crust,
    ];

    for (let index = 0; index < 14; index += 1) {
      const angle = (Math.PI * 2 * index) / 14 + Math.random() * 0.3;
      const speed = 1.5 + Math.random() * 2.4;
      particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: 2 + Math.random() * 4,
        life: 1,
        decay: 0.032 + Math.random() * 0.025,
        color: foodColors[index % foodColors.length],
        shape: index % 3 === 0 ? "circle" : "square",
      });
    }
  }

  function drawTrail(now) {
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);

    while (trail.length && now - trail[0].time > trailDuration) {
      trail.shift();
    }

    context.lineCap = "round";
    context.lineJoin = "round";

    for (let index = 1; index < trail.length; index += 1) {
      const previous = trail[index - 1];
      const current = trail[index];
      const progress = index / trail.length;
      const age = 1 - (now - current.time) / trailDuration;

      context.beginPath();
      context.moveTo(previous.x, previous.y);
      context.lineTo(current.x, current.y);
      const trailColor =
        index % 5 === 0 ? palette.pepperoni : palette.cheese;
      context.strokeStyle = `rgba(${trailColor}, ${Math.max(
        0,
        age * progress * 0.42,
      )})`;
      context.lineWidth = 1.2 + progress * 10;
      context.stroke();

      if (index % 4 === 0) {
        context.beginPath();
        context.arc(current.x, current.y, 0.8 + progress * 3.2, 0, Math.PI * 2);
        const dotColor =
          index % 8 === 0 ? palette.pepperoni : palette.cheeseLight;
        context.fillStyle = `rgba(${dotColor}, ${Math.max(
          0,
          age * progress * 0.8,
        )})`;
        context.fill();
      }
    }

    for (let index = particles.length - 1; index >= 0; index -= 1) {
      const particle = particles[index];
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.vx *= 0.975;
      particle.vy = particle.vy * 0.975 + 0.035;
      particle.life -= particle.decay;

      if (particle.life <= 0) {
        particles.splice(index, 1);
        continue;
      }

      context.save();
      context.translate(particle.x, particle.y);
      context.rotate((1 - particle.life) * 1.8);
      context.fillStyle = `rgba(${particle.color}, ${particle.life})`;
      context.beginPath();
      if (particle.shape === "circle") {
        context.arc(0, 0, particle.size / 2, 0, Math.PI * 2);
      } else {
        context.rect(
          -particle.size / 2,
          -particle.size / 2,
          particle.size,
          particle.size,
        );
      }
      context.fill();
      context.restore();
    }
  }

  function drawFoodTrail(now) {
    if (!trail.length) {
      foodTrailItems.forEach((food) => {
        food.style.opacity = "0";
      });
      return;
    }

    foodTrailItems.forEach((food, index) => {
      const progress = (index + 1) / foodTrailItems.length;
      const trailIndex = Math.min(
        trail.length - 1,
        Math.floor((trail.length - 1) * progress),
      );
      const point = trail[trailIndex];
      const fade = Math.max(0, 1 - (now - point.time) / trailDuration);
      const scale = 0.34 + progress * 0.76;
      const rotation = ((index * 43) % 78) - 39 + progress * 24;
      food.style.transform = `translate3d(${point.x}px, ${point.y}px, 0) translate(-50%, -50%) scale(${scale}) rotate(${rotation}deg)`;
      food.style.opacity = String(fade * progress * 0.92);
    });
  }

  function render(now) {
    const elapsed = Math.min((now - lastFrame) / 16.67, 2);
    const followPointer = 1 - Math.pow(1 - 0.72, elapsed);
    const followHalo = 1 - Math.pow(1 - 0.18, elapsed);

    pointerX += (targetX - pointerX) * followPointer;
    pointerY += (targetY - pointerY) * followPointer;
    haloX += (targetX - haloX) * followHalo;
    haloY += (targetY - haloY) * followHalo;

    const nextPointerScale = pressed ? 0.64 : interactive ? 0.55 : 1;
    const nextHaloScale = pressed ? 1.08 : 1;
    pointerScale += (nextPointerScale - pointerScale) * 0.22;
    haloScale += (nextHaloScale - haloScale) * 0.24;

    if (
      !started ||
      !lastTrailPoint ||
      Math.hypot(haloX - lastTrailPoint.x, haloY - lastTrailPoint.y) > 0.7
    ) {
      lastTrailPoint = { x: haloX, y: haloY, time: now };
      trail.push(lastTrailPoint);
      if (trail.length > 40) trail.shift();
    }

    pointer.style.transform = `translate3d(${pointerX - 4}px, ${
      pointerY - 1
    }px, 0) scale(${pointerScale})`;
    halo.style.transform = `translate3d(${haloX}px, ${haloY}px, 0) translate(-50%, -50%) scale(${haloScale})`;

    drawFoodTrail(now);
    drawTrail(now);
    lastFrame = now;
    frameId = requestAnimationFrame(render);
  }

  function syncModalState() {
    modalOpen = dialogs.some((dialogElement) => dialogElement.open);
    layer.classList.toggle("is-suspended", modalOpen);
    root.classList.toggle("has-custom-cursor", started && !modalOpen);
  }

  window.addEventListener(
    "pointermove",
    (event) => {
      if (event.pointerType && !["mouse", "pen"].includes(event.pointerType)) {
        return;
      }

      targetX = event.clientX;
      targetY = event.clientY;

      if (!started) {
        started = true;
        pointerX = targetX;
        pointerY = targetY;
        haloX = targetX;
        haloY = targetY;
        lastTrailPoint = { x: targetX, y: targetY, time: performance.now() };
        trail.push(lastTrailPoint);
        lastFrame = performance.now();
        frameId = requestAnimationFrame(render);
      }

      updateInteractive(event.target);
      syncModalState();
    },
    { passive: true },
  );

  window.addEventListener(
    "pointerdown",
    (event) => {
      if (!started || modalOpen) return;
      if (event.button !== 0) return;
      pressed = true;
      halo.classList.add("is-pressed");
      spawnBurst(event.clientX, event.clientY);
    },
    { passive: true },
  );

  const releasePointer = () => {
    pressed = false;
    halo.classList.remove("is-pressed");
  };

  window.addEventListener("pointerup", releasePointer, { passive: true });
  window.addEventListener("pointercancel", releasePointer, { passive: true });
  window.addEventListener("blur", () => {
    releasePointer();
    root.classList.remove("has-custom-cursor");
    if (frameId) cancelAnimationFrame(frameId);
    frameId = null;
    started = false;
  });

  dialogs.forEach((dialogElement) => {
    dialogElement.addEventListener("toggle", syncModalState);
  });

  window.addEventListener("resize", resizeCanvas, { passive: true });
  resizeCanvas();
}

initPizzaCursor();

// The closing section gets a true magnifying lens instead of the pizza cursor.
// Its preview is a non-interactive clone of the section, scaled around the pointer.
function initFooterMagnifier() {
  const contact = document.querySelector("#contact");
  const magnifier = document.querySelector("[data-footer-magnifier]");
  const lens = document.querySelector("[data-footer-magnifier-lens]");
  const content = document.querySelector("[data-footer-magnifier-content]");
  const finePointer = window.matchMedia("(pointer: fine) and (hover: hover)");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  if (!contact || !magnifier || !lens || !content) return;
  if (!finePointer.matches || reducedMotion.matches) return;

  const root = document.documentElement;
  const dialogs = [...document.querySelectorAll("dialog")];
  const zoom = 1.65;
  const preview = contact.cloneNode(true);
  const interactiveSelector =
    "a, button, input, select, textarea, [tabindex], [contenteditable]";

  preview.removeAttribute("id");
  preview.removeAttribute("aria-labelledby");
  preview.setAttribute("aria-hidden", "true");
  preview.querySelectorAll("[id]").forEach((element) => element.removeAttribute("id"));
  preview.querySelectorAll(".reveal").forEach((element) => {
    element.classList.add("is-visible");
  });
  preview.querySelectorAll(interactiveSelector).forEach((element) => {
    element.setAttribute("tabindex", "-1");
    element.setAttribute("aria-hidden", "true");
  });
  content.replaceChildren(preview);

  let currentX = 0;
  let currentY = 0;
  let visible = false;
  let pressed = false;
  let frameId = null;

  function hasOpenDialog() {
    return dialogs.some((dialogElement) => dialogElement.open);
  }

  function hideMagnifier() {
    visible = false;
    pressed = false;
    magnifier.classList.remove("is-visible", "is-pressed");
    root.classList.remove("is-footer-cursor");
  }

  function positionMagnifier() {
    frameId = null;
    if (!visible || hasOpenDialog()) {
      hideMagnifier();
      return;
    }

    const sectionRect = contact.getBoundingClientRect();
    const lensRect = lens.getBoundingClientRect();
    const radius = lensRect.width / 2;
    const localX = currentX - sectionRect.left;
    const localY = currentY - sectionRect.top;

    preview.style.width = `${sectionRect.width}px`;
    preview.style.height = `${sectionRect.height}px`;
    preview.style.left = `${radius - localX}px`;
    preview.style.top = `${radius - localY}px`;
    preview.style.transformOrigin = `${localX}px ${localY}px`;
    preview.style.transform = `scale(${zoom})`;
    magnifier.style.transform = `translate3d(${currentX - radius}px, ${
      currentY - radius
    }px, 0)`;
  }

  function scheduleMagnifier() {
    if (frameId !== null) return;
    frameId = requestAnimationFrame(positionMagnifier);
  }

  function updateMagnifier(target, x, y) {
    currentX = x;
    currentY = y;
    const isInFooter =
      !hasOpenDialog() && target instanceof Element && contact.contains(target);

    if (!isInFooter) {
      hideMagnifier();
      return;
    }

    if (!visible) {
      visible = true;
      magnifier.classList.add("is-visible");
      root.classList.add("is-footer-cursor");
    }
    scheduleMagnifier();
  }

  window.addEventListener(
    "pointermove",
    (event) => {
      if (event.pointerType && !["mouse", "pen"].includes(event.pointerType)) {
        return;
      }
      updateMagnifier(event.target, event.clientX, event.clientY);
    },
    { passive: true },
  );

  window.addEventListener(
    "pointerdown",
    (event) => {
      if (!visible || hasOpenDialog() || event.button !== 0) return;
      pressed = true;
      magnifier.classList.add("is-pressed");
    },
    { passive: true },
  );

  const releasePointer = () => {
    pressed = false;
    magnifier.classList.remove("is-pressed");
  };

  window.addEventListener("pointerup", releasePointer, { passive: true });
  window.addEventListener("pointercancel", releasePointer, { passive: true });
  window.addEventListener("resize", scheduleMagnifier, { passive: true });
  window.addEventListener(
    "scroll",
    () => {
      if (!visible) return;
      const target = document.elementFromPoint(currentX, currentY);
      updateMagnifier(target, currentX, currentY);
    },
    { passive: true },
  );

  document.documentElement.addEventListener("pointerleave", hideMagnifier);
  dialogs.forEach((dialogElement) => {
    dialogElement.addEventListener("toggle", () => {
      if (dialogElement.open) hideMagnifier();
    });
  });
}

initFooterMagnifier();
