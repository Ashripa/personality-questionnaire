/* ============================================================
   scales.js — 可在线作答量表的完整双语题库 + 计分引擎
   题项均逐条转录自已核实的 .md 源文件（反编造）
   全局: SCALES, scoreScaleData()
   ============================================================ */

const SCALES = {};

/* ---------- IPIP-50 大五人格 ---------- */
SCALES.ipip = {
  id:'ipip', name:'IPIP-50 大五人格', en:'IPIP Big-Five Factor Markers (50)',
  cat:'trait', time:'6–8 分钟',
  cite:'Goldberg, L. R. (1992). Psychological Assessment, 4(1), 26-42.',
  license:'公共领域（Public Domain），可自由使用/翻译/再发布。',
  source:['IPIP 官网','https://ipip.ori.org'],
  pts:5, min:1,
  anchors:[{v:1,zh:'非常不准确'},{v:2,zh:'比较不准确'},{v:3,zh:'不确定'},{v:4,zh:'比较准确'},{v:5,zh:'非常准确'}],
  instr_zh:'请描述你现在通常的样子（而非期望的样子），与你所知的同性别、大致同龄者相比，指出每项陈述对你的准确程度。',
  factors:{
    E:{zh:'外向性',en:'Extraversion',desc:{h:'外向活跃、善于社交，乐于成为焦点，从人际互动中获取能量。',m:'社交上较均衡，既能享受热闹也能享受独处。',l:'偏好安静与独处，倾向深度的一对一交流。'}},
    A:{zh:'宜人性',en:'Agreeableness',desc:{h:'友善、善解人意、乐于助人，重视人际和谐。',m:'在合作与独立间取得平衡，能坚持己见亦尊重他人。',l:'独立直率，倾向以逻辑而非情感处理问题。'}},
    C:{zh:'尽责性',en:'Conscientiousness',desc:{h:'有条理、自律、可靠，善于计划并坚持执行。',m:'在计划性与灵活性间平衡，需要时能保持纪律。',l:'灵活随性，倾向随机应变而非严格计划。'}},
    S:{zh:'情绪稳定性',en:'Emotional Stability',desc:{h:'情绪平稳、抗压强，压力下能保持冷静。',m:'情绪调节适中，多数时候平稳，高压下偶有波动。',l:'情绪敏感、感受力强，也意味对细微变化更觉察。'}},
    O:{zh:'开放性',en:'Openness/Intellect',desc:{h:'思维活跃、富想象力、好奇心强，乐于探索新事物。',m:'在创新与务实间平衡，既好奇也重经验。',l:'务实稳重，重视经验、传统与实际可行的方案。'}}
  },
  items:[
    {zh:'我是聚会中的焦点人物。',en:'Am the life of the party.',f:'E',r:0},
    {zh:'我很少关心他人。',en:'Feel little concern for others.',f:'A',r:1},
    {zh:'我总是做好准备。',en:'Am always prepared.',f:'C',r:0},
    {zh:'我容易感到压力。',en:'Get stressed out easily.',f:'S',r:1},
    {zh:'我有丰富的词汇量。',en:'Have a rich vocabulary.',f:'O',r:0},
    {zh:'我话不多。',en:"Don't talk a lot.",f:'E',r:1},
    {zh:'我对他人感兴趣。',en:'Am interested in people.',f:'A',r:0},
    {zh:'我会把自己的东西随处乱放。',en:'Leave my belongings around.',f:'C',r:1},
    {zh:'我大多数时候都很放松。',en:'Am relaxed most of the time.',f:'S',r:0},
    {zh:'我难以理解抽象的概念。',en:'Have difficulty understanding abstract ideas.',f:'O',r:1},
    {zh:'我在人群中感到自在。',en:'Feel comfortable around people.',f:'E',r:0},
    {zh:'我会侮辱别人。',en:'Insult people.',f:'A',r:1},
    {zh:'我注重细节。',en:'Pay attention to details.',f:'C',r:0},
    {zh:'我经常担心各种事情。',en:'Worry about things.',f:'S',r:1},
    {zh:'我有丰富的想象力。',en:'Have a vivid imagination.',f:'O',r:0},
    {zh:'我总是待在不起眼的地方。',en:'Keep in the background.',f:'E',r:1},
    {zh:'我能体谅他人的感受。',en:"Sympathize with others' feelings.",f:'A',r:0},
    {zh:'我把事情搞得一团糟。',en:'Make a mess of things.',f:'C',r:1},
    {zh:'我很少感到忧郁。',en:'Seldom feel blue.',f:'S',r:0},
    {zh:'我对抽象的想法不感兴趣。',en:'Am not interested in abstract ideas.',f:'O',r:1},
    {zh:'我会主动发起交谈。',en:'Start conversations.',f:'E',r:0},
    {zh:'我对别人的问题不感兴趣。',en:"Am not interested in other people's problems.",f:'A',r:1},
    {zh:'我会立即完成该做的事。',en:'Get chores done right away.',f:'C',r:0},
    {zh:'我容易受到干扰。',en:'Am easily disturbed.',f:'S',r:1},
    {zh:'我有很好的主意。',en:'Have excellent ideas.',f:'O',r:0},
    {zh:'我没什么话好说。',en:'Have little to say.',f:'E',r:1},
    {zh:'我心肠很软。',en:'Have a soft heart.',f:'A',r:0},
    {zh:'我经常忘记把东西放回原处。',en:'Often forget to put things back in their proper place.',f:'C',r:1},
    {zh:'我容易心烦意乱。',en:'Get upset easily.',f:'S',r:1},
    {zh:'我的想象力不好。',en:'Do not have a good imagination.',f:'O',r:1},
    {zh:'我在聚会上会与很多不同的人交谈。',en:'Talk to a lot of different people at parties.',f:'E',r:0},
    {zh:'我对他人并不真正感兴趣。',en:'Am not really interested in others.',f:'A',r:1},
    {zh:'我喜欢井然有序。',en:'Like order.',f:'C',r:0},
    {zh:'我的情绪变化很大。',en:'Change my mood a lot.',f:'S',r:1},
    {zh:'我能很快理解事物。',en:'Am quick to understand things.',f:'O',r:0},
    {zh:'我不喜欢引人注目。',en:"Don't like to draw attention to myself.",f:'E',r:1},
    {zh:'我愿意花时间帮助别人。',en:'Take time out for others.',f:'A',r:0},
    {zh:'我逃避自己的职责。',en:'Shirk my duties.',f:'C',r:1},
    {zh:'我经常情绪波动。',en:'Have frequent mood swings.',f:'S',r:1},
    {zh:'我使用复杂的词汇。',en:'Use difficult words.',f:'O',r:0},
    {zh:'我不介意成为大家关注的中心。',en:"Don't mind being the center of attention.",f:'E',r:0},
    {zh:'我能感受到他人的情绪。',en:"Feel others' emotions.",f:'A',r:0},
    {zh:'我按照计划行事。',en:'Follow a schedule.',f:'C',r:0},
    {zh:'我容易被激怒。',en:'Get irritated easily.',f:'S',r:1},
    {zh:'我花时间思考事物。',en:'Spend time reflecting on things.',f:'O',r:0},
    {zh:'我在陌生人面前很安静。',en:'Am quiet around strangers.',f:'E',r:1},
    {zh:'我能让别人感到轻松自在。',en:'Make people feel at ease.',f:'A',r:0},
    {zh:'我对自己的工作要求严格。',en:'Am exacting in my work.',f:'C',r:0},
    {zh:'我经常感到忧郁。',en:'Often feel blue.',f:'S',r:1},
    {zh:'我满脑子都是想法。',en:'Am full of ideas.',f:'O',r:0}
  ]
};

/* ---------- RSES 自尊 ---------- */
SCALES.rses = {
  id:'rses', name:'RSES 罗森伯格自尊量表', en:'Rosenberg Self-Esteem Scale',
  cat:'self', time:'2 分钟',
  cite:'Rosenberg, M. (1965). Society and the Adolescent Self-Image. Princeton University Press.',
  license:'公共领域，可自由使用。',
  source:['Scholar','https://scholar.google.com/scholar?q=%22society+and+the+adolescent+self-image%22+rosenberg+1965'],
  pts:4, min:1,
  anchors:[{v:1,zh:'很不符合'},{v:2,zh:'不符合'},{v:3,zh:'符合'},{v:4,zh:'非常符合'}],
  instr_zh:'下面是关于你对自己总体感受的陈述，请指出你对每一句的符合程度。',
  note:'条目8按中文常用惯例作正向计分（原英文版常反向计分，中文版多认为其表达的是健康的自我期许）。',
  factors:{ T:{zh:'总体自尊',en:'Global Self-Esteem',desc:{
    h:'总体自尊水平高：对自我价值持稳定、肯定的态度，接纳自己。',
    m:'自尊处于中等区间：总体接纳自己，但在某些方面可能存在自我怀疑。',
    l:'自尊偏低：较多自我否定倾向，值得关注并结合具体情境理解。'}}},
  items:[
    {zh:'我感到我是一个有价值的人，至少与其他人在同一水平上。',en:"I feel that I'm a person of worth, at least on an equal plane with others.",f:'T',r:0},
    {zh:'我感到我有许多好的品质。',en:'I feel that I have a number of good qualities.',f:'T',r:0},
    {zh:'归根结底，我倾向于觉得自己是一个失败者。',en:'All in all, I am inclined to feel that I am a failure.',f:'T',r:1},
    {zh:'我能像大多数人一样把事情做好。',en:'I am able to do things as well as most other people.',f:'T',r:0},
    {zh:'我感到自己值得自豪的地方不多。',en:'I feel I do not have much to be proud of.',f:'T',r:1},
    {zh:'我对自己持肯定的态度。',en:'I take a positive attitude toward myself.',f:'T',r:0},
    {zh:'总的来说，我对自己是满意的。',en:'On the whole, I am satisfied with myself.',f:'T',r:0},
    {zh:'我希望能为自己赢得更多尊重。',en:'I wish I could have more respect for myself.',f:'T',r:0},
    {zh:'我确实时常感到自己毫无用处。',en:'I certainly feel useless at times.',f:'T',r:1},
    {zh:'我时常认为自己一无是处。',en:'At times I think I am no good at all.',f:'T',r:1}
  ]
};

/* ---------- GSE 一般自我效能感 ---------- */
SCALES.gse = {
  id:'gse', name:'GSE 一般自我效能感量表', en:'General Self-Efficacy Scale',
  cat:'self', time:'2 分钟',
  cite:'Schwarzer, R., & Jerusalem, M. (1995); 中文版 Zhang & Schwarzer (1995).',
  license:'免费使用，引用时需署名。',
  source:['Schwarzer 官网','https://userpage.fu-berlin.de/health/selfscal.htm'],
  pts:4, min:1,
  anchors:[{v:1,zh:'完全不正确'},{v:2,zh:'有点正确'},{v:3,zh:'多数正确'},{v:4,zh:'完全正确'}],
  instr_zh:'请根据你的实际情况，指出下面每一句对你而言的正确程度。',
  factors:{ T:{zh:'一般自我效能',en:'General Self-Efficacy',desc:{
    h:'自我效能感高：相信自己有能力应对挑战与突发情境。',
    m:'自我效能感中等：多数情况有信心，面对高难度任务时可能动摇。',
    l:'自我效能感偏低：面对困难时对自身应对能力信心不足。'}}},
  items:[
    {zh:'如果我尽力去做的话，我总是能够解决问题的。',en:'I can always manage to solve difficult problems if I try hard enough.',f:'T',r:0},
    {zh:'即使别人反对我，我仍有办法取得我所要的。',en:'If someone opposes me, I can find the means and ways to get what I want.',f:'T',r:0},
    {zh:'对我来说，坚持理想和达成目标是轻而易举的。',en:'It is easy for me to stick to my aims and accomplish my goals.',f:'T',r:0},
    {zh:'我自信能有效地应付任何突如其来的事情。',en:'I am confident that I could deal efficiently with unexpected events.',f:'T',r:0},
    {zh:'以我的才智，我定能应付意料之外的情况。',en:'Thanks to my resourcefulness, I know how to handle unforeseen situations.',f:'T',r:0},
    {zh:'如果我付出必要的努力，我一定能解决大多数的难题。',en:'I can solve most problems if I invest the necessary effort.',f:'T',r:0},
    {zh:'我能冷静地面对困难，因为我可信赖自己处理问题的能力。',en:'I can remain calm when facing difficulties because I can rely on my coping abilities.',f:'T',r:0},
    {zh:'面对一个难题时，我通常能找到几个解决方法。',en:'When I am confronted with a problem, I can usually find several solutions.',f:'T',r:0},
    {zh:'有麻烦的时候，我通常能想到一些应付的方法。',en:'If I am in trouble, I can usually think of a solution.',f:'T',r:0},
    {zh:'无论什么事在我身上发生，我都能够应付自如。',en:'I can usually handle whatever comes my way.',f:'T',r:0}
  ]
};

/* ---------- DS14 D型人格 ---------- */
SCALES.ds14 = {
  id:'ds14', name:'DS14 D型人格量表', en:'Type D Personality Scale',
  cat:'bio', time:'3 分钟',
  cite:'Denollet, J. (2005). Psychosomatic Medicine, 67(1), 89-97；中文版 于肖楠, 张建新 (2006).',
  license:'原论文公开，学术免费使用。',
  source:['DOI','https://doi.org/10.1097/01.psy.0000149256.81953.49'],
  pts:5, min:0,
  anchors:[{v:0,zh:'完全不符'},{v:1,zh:'较不符'},{v:2,zh:'中性'},{v:3,zh:'较符合'},{v:4,zh:'完全符合'}],
  instr_zh:'下面是人们常用来描述自己的陈述，请指出每一句对你的符合程度。',
  note:'D型人格判定标准：消极情感(NA)与社会抑制(SI)两个维度得分均 ≥ 10。',
  factors:{
    NA:{zh:'消极情感',en:'Negative Affectivity',desc:{h:'消极情感较强：较常体验到焦虑、易怒、低落等负面情绪。',m:'消极情感中等。',l:'消极情感较低：情绪多数时候平稳积极。'}},
    SI:{zh:'社会抑制',en:'Social Inhibition',desc:{h:'社会抑制较强：在人际互动中较拘谨、抑制自我表达。',m:'社会抑制中等。',l:'社会抑制较低：人际交往中较自在开放。'}}
  },
  items:[
    {zh:'我善于与人打交道。',en:'I make contact easily when I meet people.',f:'SI',r:1},
    {zh:'我常常为一些琐事而小题大做。',en:'I often make a fuss about unimportant things.',f:'NA',r:0},
    {zh:'我常常与陌生人交谈。',en:'I often talk to strangers.',f:'SI',r:1},
    {zh:'我经常感到不开心。',en:'I often feel unhappy.',f:'NA',r:0},
    {zh:'我经常感到烦躁不安。',en:'I am often irritated.',f:'NA',r:0},
    {zh:'与人交往时，我常常感到很拘谨。',en:'I often feel inhibited in social interactions.',f:'SI',r:0},
    {zh:'我对待事物的态度是悲观的。',en:'I take a gloomy view of things.',f:'NA',r:0},
    {zh:'我觉得很难打开话题。',en:'I find it hard to start a conversation.',f:'SI',r:0},
    {zh:'我常常心情不好。',en:'I am often in a bad mood.',f:'NA',r:0},
    {zh:'我是一个自我封闭的人。',en:'I am a closed kind of person.',f:'SI',r:0},
    {zh:'我较喜欢与人保持距离。',en:'I would rather keep other people at a distance.',f:'SI',r:0},
    {zh:'我常常忧心忡忡。',en:'I often find myself worrying about something.',f:'NA',r:0},
    {zh:'我经常感到闷闷不乐。',en:'I am often down in the dumps.',f:'NA',r:0},
    {zh:'跟别人相处时，我找不到合适的话题。',en:"When socializing, I don't find the right things to talk about.",f:'SI',r:0}
  ],
  classify:function(sc){
    const na=sc.NA.sum, si=sc.SI.sum;
    return (na>=10&&si>=10)
      ? '判定为 D型人格倾向（NA ≥ 10 且 SI ≥ 10）。D型人格是一种心血管疾病相关的风险特质，此结果仅供参考，不构成诊断。'
      : '未达到 D型人格判定标准（需 NA 与 SI 均 ≥ 10）。';
  }
};

/* ---------- SCC 自我概念清晰度 ---------- */
SCALES.scc = {
  id:'scc', name:'SCC 自我概念清晰度量表', en:'Self-Concept Clarity Scale',
  cat:'self', time:'3 分钟',
  cite:'Campbell, J. D., et al. (1996). JPSP, 70(1), 141-156.',
  license:'原论文公开，学术免费使用。',
  source:['DOI','https://doi.org/10.1037/0022-3514.70.6.1114'],
  pts:5, min:1,
  anchors:[{v:1,zh:'很不同意'},{v:2,zh:'不同意'},{v:3,zh:'中立'},{v:4,zh:'同意'},{v:5,zh:'很同意'}],
  instr_zh:'请指出下面每一句对你的符合程度。',
  factors:{ T:{zh:'自我概念清晰度',en:'Self-Concept Clarity',desc:{
    h:'自我概念清晰：对"我是谁"有清楚、稳定、内部一致的认识。',
    m:'自我概念清晰度中等：总体明确，但在某些方面或时刻会感到不确定。',
    l:'自我概念清晰度偏低：对自我的认识较不稳定或内部存在矛盾。'}}},
  items:[
    {zh:'我对自己的一些看法经常互相矛盾。',en:'My beliefs about myself often conflict with one another.',f:'T',r:1},
    {zh:'有时我对自己持有一种看法，另一些时候我又会有另一种不同的看法。',en:'On one day I might have one opinion of myself and on another day I might have a different opinion.',f:'T',r:1},
    {zh:'我花很长时间来思索我究竟是什么样的一种人。',en:'I spend a lot of time wondering about what kind of person I really am.',f:'T',r:1},
    {zh:'有时候我感觉我不全是我看起来的那个样子。',en:'Sometimes I feel that I am not really the person that I appear to be.',f:'T',r:1},
    {zh:'回想过去，我不确定我到底是什么样的人。',en:"When I think about the kind of person I have been in the past, I'm not sure what I was really like.",f:'T',r:1},
    {zh:'我很少体验到我性格不同方面的冲突。',en:'I seldom experience conflict between the different aspects of my personality.',f:'T',r:0},
    {zh:'有时候我觉得我对别人的了解好于对自己的了解。',en:'Sometimes I think I know other people better than I know myself.',f:'T',r:1},
    {zh:'我对自己的看法似乎比较频繁的变化。',en:'My beliefs about myself seem to change very frequently.',f:'T',r:1},
    {zh:'如果让我来描述自己的性格，或许每天我的描述都不一样。',en:'If I were asked to describe my personality, my description might end up being different from one day to another day.',f:'T',r:1},
    {zh:'即使是想告诉别人我真正是什么样子的，我认为我也做不到。',en:"Even if I wanted to, I don't think I could tell someone what I'm really like.",f:'T',r:1},
    {zh:'一般来说，我能清晰地知道我是谁，我是什么样的人。',en:'In general, I have a clear sense of who I am and what I am.',f:'T',r:0},
    {zh:'因为不知道自己真正想要什么，因此对我来说下定决心做一件事很难。',en:"It is often hard for me to make up my mind about things because I don't really know what I want.",f:'T',r:1}
  ]
};

/* ---------- BRS 复原力 ---------- */
SCALES.brs = {
  id:'brs', name:'BRS 简明复原力量表', en:'Brief Resilience Scale',
  cat:'positive', time:'2 分钟',
  cite:'Smith, B. W., et al. (2008). Int. J. Behavioral Medicine, 15(3), 194-200.',
  license:'原论文公开，学术免费使用。',
  source:['Scholar','https://scholar.google.com/scholar?q=smith+2008+%22brief+resilience+scale%22'],
  pts:5, min:1,
  anchors:[{v:1,zh:'很不同意'},{v:2,zh:'不同意'},{v:3,zh:'中立'},{v:4,zh:'同意'},{v:5,zh:'很同意'}],
  instr_zh:'请指出你对下面每一句的同意程度。',
  note:'中文为参考译文（非正式验证版本）；正式研究请采用已验证中文版。',
  factors:{ T:{zh:'复原力',en:'Resilience',desc:{
    h:'复原力强：能较快从压力与逆境中恢复、重新振作。',
    m:'复原力中等：多数情况能恢复，遇重大挫折时需要更长时间。',
    l:'复原力偏低：从压力事件中恢复较慢，值得关注自我照顾与支持资源。'}}},
  items:[
    {zh:'经历了困难时期后，我往往能很快恢复过来。',en:'I tend to bounce back quickly after hard times.',f:'T',r:0},
    {zh:'我很难熬过压力事件。',en:'I have a hard time making it through stressful events.',f:'T',r:1},
    {zh:'我从压力事件中恢复过来不需要很长时间。',en:'It does not take me long to recover from a stressful event.',f:'T',r:0},
    {zh:'当不好的事情发生时，我很难迅速振作起来。',en:'It is hard for me to snap back when something bad happens.',f:'T',r:1},
    {zh:'我通常能比较顺利地度过困难时期。',en:'I usually come through difficult times with little trouble.',f:'T',r:0},
    {zh:'我往往需要很长时间才能从生活中的挫折中恢复过来。',en:'I tend to take a long time to get over set-backs in my life.',f:'T',r:1}
  ]
};

/* ---------- BFI-2 大五人格（60题） ---------- */
SCALES.bfi2 = {
  id:'bfi2', name:'BFI-2 大五人格量表', en:'Big Five Inventory-2 (60)',
  cat:'trait', time:'8–10 分钟',
  cite:'Soto, C. J., & John, O. P. (2017). JPSP, 113(1), 117-143；中文修订 张博等（Colby Personality Lab）。',
  license:'BFI-2 题项版权 2015 归 John & Soto；非商业研究与教育用途可自由复制使用。',
  source:['DOI','https://doi.org/10.1037/pspp0000096'],
  pts:5, min:1,
  anchors:[{v:1,zh:'非常不同意'},{v:2,zh:'不太同意'},{v:3,zh:'态度中立'},{v:4,zh:'比较同意'},{v:5,zh:'非常同意'}],
  instr_zh:'下面是一些关于个人特征的描述，有些可能适用于你、有些可能不适用。题干为"我是一个……的人"。请指出你对每一句的同意程度。',
  note:'中文题项取自 Colby Personality Lab 公布的 BFI-2 中文修订版（张博等）。',
  factors:{
    E:{zh:"外向性",en:"Extraversion",desc:{h:"外向、健谈、精力充沛，乐于社交与自我表达，从人际互动中获得能量。",m:"社交上较为均衡，既能享受热闹也能享受独处。",l:"偏内向安静、低调，倾向独处与深度的一对一交流，从独处中恢复精力。"}},
    A:{zh:"宜人性",en:"Agreeableness",desc:{h:"富同情心、体谅他人、谦和信任，重视人际和谐。",m:"在合作与坚持己见之间取得平衡。",l:"较直率、独立或以自我为中心，倾向以批判的眼光看待他人。"}},
    C:{zh:"尽责性",en:"Conscientiousness",desc:{h:"有条理、自律、可靠、目标导向，善始善终。",m:"兼具计划性与灵活性，需要时能保持纪律。",l:"较随性灵活，倾向随机应变，条理与坚持性相对较弱。"}},
    N:{zh:"负性情绪",en:"Negative Emotionality",desc:{h:"情绪较敏感，较常体验焦虑、低落与情绪波动，对压力反应较强。",m:"情绪调节适中，多数时候平稳，高压下偶有起伏。",l:"情绪稳定、抗压强，较少受负面情绪困扰。"}},
    O:{zh:"开放性",en:"Open-Mindedness",desc:{h:"好奇心强、富想象力、审美敏锐，乐于探索新观念与体验。",m:"在创新与务实之间平衡，既好奇也重经验。",l:"务实、传统，偏好熟悉、具体与实际可行的事物。"}},
  },
  items:[
    {zh:"性格外向，喜欢交际",en:"Is outgoing, sociable",f:"E",r:0},
    {zh:"心肠柔软，有同情心",en:"Is compassionate, has a soft heart",f:"A",r:0},
    {zh:"缺乏条理",en:"Tends to be disorganized",f:"C",r:1},
    {zh:"从容，善于处理压力",en:"Is relaxed, handles stress well",f:"N",r:1},
    {zh:"对艺术没有什么兴趣",en:"Has few artistic interests",f:"O",r:1},
    {zh:"性格坚定自信，敢于表达自己的观点",en:"Has an assertive personality",f:"E",r:0},
    {zh:"为人恭谦，尊重他人",en:"Is respectful, treats others with respect",f:"A",r:0},
    {zh:"比较懒",en:"Tends to be lazy",f:"C",r:1},
    {zh:"经历挫折后仍能保持积极心态",en:"Stays optimistic after experiencing a setback",f:"N",r:1},
    {zh:"对许多不同的事物都感兴趣",en:"Is curious about many different things",f:"O",r:0},
    {zh:"很少觉得兴奋或者特别想要(做)什么",en:"Rarely feels excited or eager",f:"E",r:1},
    {zh:"常常挑别人的毛病",en:"Tends to find fault with others",f:"A",r:1},
    {zh:"可信赖的，可靠的",en:"Is dependable, steady",f:"C",r:0},
    {zh:"喜怒无常，情绪起伏较多",en:"Is moody, has up and down mood swings",f:"N",r:0},
    {zh:"善于创造，能找到聪明的方法来做事",en:"Is inventive, finds clever ways to do things",f:"O",r:0},
    {zh:"比较安静",en:"Tends to be quiet",f:"E",r:1},
    {zh:"对他人没有什么同情心",en:"Feels little sympathy for others",f:"A",r:1},
    {zh:"做事有计划有条理",en:"Is systematic, likes to keep things in order",f:"C",r:0},
    {zh:"容易紧张",en:"Can be tense",f:"N",r:0},
    {zh:"着迷于艺术、音乐或文学",en:"Is fascinated by art, music, or literature",f:"O",r:0},
    {zh:"常常处于主导地位，像个领导一样",en:"Is dominant, acts as a leader",f:"E",r:0},
    {zh:"常与他人意见不和",en:"Starts arguments with others",f:"A",r:1},
    {zh:"很难开始行动起来去完成一项任务",en:"Has difficulty getting started on tasks",f:"C",r:1},
    {zh:"觉得有安全感，对自己满意",en:"Feels secure, comfortable with self",f:"N",r:1},
    {zh:"不喜欢知识性或者哲学性强的讨论",en:"Avoids intellectual, philosophical discussions",f:"O",r:1},
    {zh:"不如别人有活力",en:"Is less active than other people",f:"E",r:1},
    {zh:"宽宏大量",en:"Has a forgiving nature",f:"A",r:0},
    {zh:"有时比较没有责任心",en:"Can be somewhat careless",f:"C",r:1},
    {zh:"情绪稳定，不易生气",en:"Is emotionally stable, not easily upset",f:"N",r:1},
    {zh:"几乎没有什么创造性",en:"Has little creativity",f:"O",r:1},
    {zh:"有时会害羞，比较内向",en:"Is sometimes shy, introverted",f:"E",r:1},
    {zh:"乐于助人，待人无私",en:"Is helpful and unselfish with others",f:"A",r:0},
    {zh:"习惯让事物保持整洁有序",en:"Keeps things neat and tidy",f:"C",r:0},
    {zh:"时常忧心忡忡，担心很多事情",en:"Worries a lot",f:"N",r:0},
    {zh:"重视艺术与审美",en:"Values art and beauty",f:"O",r:0},
    {zh:"感觉自己很难对他人产生影响",en:"Finds it hard to influence people",f:"E",r:1},
    {zh:"有时对人比较粗鲁",en:"Is sometimes rude to others",f:"A",r:1},
    {zh:"有效率，做事有始有终",en:"Is efficient, gets things done",f:"C",r:0},
    {zh:"时常觉得悲伤",en:"Often feels sad",f:"N",r:0},
    {zh:"思想深刻",en:"Is complex, a deep thinker",f:"O",r:0},
    {zh:"精力充沛",en:"Is full of energy",f:"E",r:0},
    {zh:"不相信别人，怀疑别人的意图",en:"Is suspicious of others' intentions",f:"A",r:1},
    {zh:"可靠的，总是值得他人信赖",en:"Is reliable, can always be counted on",f:"C",r:0},
    {zh:"能够控制自己的情绪",en:"Keeps their emotions under control",f:"N",r:1},
    {zh:"缺乏想象力",en:"Has difficulty imagining things",f:"O",r:1},
    {zh:"爱说话，健谈",en:"Is talkative",f:"E",r:0},
    {zh:"有时对人冷淡，漠不关心",en:"Can be cold and uncaring",f:"A",r:1},
    {zh:"乱糟糟的，不爱收拾",en:"Leaves a mess, doesn't clean up",f:"C",r:1},
    {zh:"很少觉得焦虑或者害怕",en:"Rarely feels anxious or afraid",f:"N",r:1},
    {zh:"觉得诗歌、戏剧很无聊",en:"Thinks poetry and plays are boring",f:"O",r:1},
    {zh:"更喜欢让别人来领头负责",en:"Prefers to have others take charge",f:"E",r:1},
    {zh:"待人谦逊礼让",en:"Is polite, courteous to others",f:"A",r:0},
    {zh:"有恒心，能坚持把事情做完",en:"Is persistent, works until the task is finished",f:"C",r:0},
    {zh:"时常觉得郁郁寡欢",en:"Tends to feel depressed, blue",f:"N",r:0},
    {zh:"对抽象的概念和想法没什么兴趣",en:"Has little interest in abstract ideas",f:"O",r:1},
    {zh:"充满热情",en:"Shows a lot of enthusiasm",f:"E",r:0},
    {zh:"把人往最好的方面想",en:"Assumes the best about people",f:"A",r:0},
    {zh:"有时候会做出一些不负责任的行为",en:"Sometimes behaves irresponsibly",f:"C",r:1},
    {zh:"情绪多变，容易愤怒",en:"Is temperamental, gets emotional easily",f:"N",r:0},
    {zh:"有创意，能想出新点子",en:"Is original, comes up with new ideas",f:"O",r:0},
  ]
};

/* ---------- ECR-R 亲密关系依恋（36题；中文为参考译文） ---------- */
SCALES.ecr = {
  id:'ecr', name:'ECR-R 亲密关系经历量表（修订版）', en:'Experiences in Close Relationships-Revised',
  cat:'interpersonal', time:'8–10 分钟',
  note:'ECR-R 暂无广泛验证的中文版；本页中文题项为依据英文原句的参考译文，仅供理解，正式研究请使用已验证中文版（如李同归 2006 的 ECR 中文版）。',
  cite:'Fraley, R. C., Waller, N. G., & Brennan, K. A. (2000). JPSP, 78(2), 350-365.',
  license:'免费用于研究（作者 R. C. Fraley 网站提供题项与计分）。',
  source:['Fraley Lab','https://labs.psychology.illinois.edu/~rcfraley/measures/ecrr.htm'],
  pts:7, min:1,
  anchors:[{v:1,zh:'非常不同意'},{v:2,zh:'不同意'},{v:3,zh:'略不同意'},{v:4,zh:'中立'},{v:5,zh:'略同意'},{v:6,zh:'同意'},{v:7,zh:'非常同意'}],
  instr_zh:'下面的陈述关于你在亲密关系中的一般感受（而非仅指当前的某段关系）。请指出你对每一句的同意程度。',
  factors:{
    ANX:{zh:'依恋焦虑',en:'Attachment Anxiety',desc:{h:'依恋焦虑高：担心被抛弃、渴求亲密与确认，对伴侣的可得性和回应高度敏感。',m:'依恋焦虑中等。',l:'依恋焦虑低：对关系较有安全感，较少担心被拒绝或抛弃。'}},
    AVO:{zh:'依恋回避',en:'Attachment Avoidance',desc:{h:'依恋回避高：回避亲密与依赖，倾向情感自足、不愿向伴侣开放内心。',m:'依恋回避中等。',l:'依恋回避低：自在于亲密与相互依赖，愿意与伴侣开放交流。'}}
  },
  items:[
    {zh:"我害怕会失去伴侣的爱。",en:"I'm afraid that I will lose my partner's love.",f:"ANX",r:0},
    {zh:"我常常担心我的伴侣会不想和我在一起。",en:"I often worry that my partner will not want to stay with me.",f:"ANX",r:0},
    {zh:"我常常担心我的伴侣不是真的爱我。",en:"I often worry that my partner doesn't really love me.",f:"ANX",r:0},
    {zh:"我担心恋爱伴侣不会像我关心他们那样关心我。",en:"I worry that romantic partners won't care about me as much as I care about them.",f:"ANX",r:0},
    {zh:"我常常希望伴侣对我的感情，能像我对他/她的感情一样强烈。",en:"I often wish that my partner's feelings for me were as strong as my feelings for him or her.",f:"ANX",r:0},
    {zh:"我很担心我的亲密关系。",en:"I worry a lot about my relationships.",f:"ANX",r:0},
    {zh:"当我的伴侣不在我身边时，我会担心他/她可能会对别人产生兴趣。",en:"When my partner is out of sight, I worry that he or she might become interested in someone else.",f:"ANX",r:0},
    {zh:"当我向恋爱伴侣表达感情时，我害怕他们不会对我有同样的感觉。",en:"When I show my feelings for romantic partners, I'm afraid they will not feel the same about me.",f:"ANX",r:0},
    {zh:"我很少担心我的伴侣会离开我。",en:"I rarely worry about my partner leaving me.",f:"ANX",r:1},
    {zh:"我的恋爱伴侣让我怀疑自己。",en:"My romantic partner makes me doubt myself.",f:"ANX",r:0},
    {zh:"我不常担心被抛弃。",en:"I do not often worry about being abandoned.",f:"ANX",r:1},
    {zh:"我发现我的伴侣不想和我希望的那样亲近。",en:"I find that my partner(s) don't want to get as close as I would like.",f:"ANX",r:0},
    {zh:"有时候，恋爱伴侣会无缘无故地改变对我的感情。",en:"Sometimes romantic partners change their feelings about me for no apparent reason.",f:"ANX",r:0},
    {zh:"我渴望非常亲近的愿望，有时会把人吓跑。",en:"My desire to be very close sometimes scares people away.",f:"ANX",r:0},
    {zh:"我害怕一旦恋爱伴侣了解我之后，他/她会不喜欢真实的我。",en:"I'm afraid that once a romantic partner gets to know me, he or she won't like who I really am.",f:"ANX",r:0},
    {zh:"我没能从伴侣那里得到我所需要的关爱和支持，这让我很恼火。",en:"It makes me mad that I don't get the affection and support I need from my partner.",f:"ANX",r:0},
    {zh:"我担心我比不上别人。",en:"I worry that I won't measure up to other people.",f:"ANX",r:0},
    {zh:"似乎只有在我生气的时候，我的伴侣才会注意到我。",en:"My partner only seems to notice me when I'm angry.",f:"ANX",r:0},
    {zh:"我倾向于不向伴侣表露我内心深处的感受。",en:"I prefer not to show a partner how I feel deep down.",f:"AVO",r:0},
    {zh:"我觉得和伴侣分享我私人的想法和感受很自在。",en:"I feel comfortable sharing my private thoughts and feelings with my partner.",f:"AVO",r:1},
    {zh:"我很难让自己去依赖恋爱伴侣。",en:"I find it difficult to allow myself to depend on romantic partners.",f:"AVO",r:0},
    {zh:"我与恋爱伴侣亲近时感到非常自在。",en:"I am very comfortable being close to romantic partners.",f:"AVO",r:1},
    {zh:"我觉得向恋爱伴侣敞开心扉很不自在。",en:"I don't feel comfortable opening up to romantic partners.",f:"AVO",r:0},
    {zh:"我倾向于不与恋爱伴侣太过亲近。",en:"I prefer not to be too close to romantic partners.",f:"AVO",r:0},
    {zh:"当恋爱伴侣想与我非常亲近时，我会感到不自在。",en:"I get uncomfortable when a romantic partner wants to be very close.",f:"AVO",r:0},
    {zh:"我觉得和我的伴侣亲近起来比较容易。",en:"I find it relatively easy to get close to my partner.",f:"AVO",r:1},
    {zh:"对我来说，和我的伴侣变得亲近并不困难。",en:"It's not difficult for me to get close to my partner.",f:"AVO",r:1},
    {zh:"我通常会和我的伴侣讨论我的问题和烦恼。",en:"I usually discuss my problems and concerns with my partner.",f:"AVO",r:1},
    {zh:"我觉得在需要的时候求助于我的恋爱伴侣是很有帮助的。",en:"It helps to turn to my romantic partner in times of need.",f:"AVO",r:1},
    {zh:"我会把几乎所有事情都告诉我的伴侣。",en:"I tell my partner just about everything.",f:"AVO",r:1},
    {zh:"我会和我的伴侣商量事情。",en:"I talk things over with my partner.",f:"AVO",r:1},
    {zh:"当伴侣和我太过亲近时，我会感到紧张。",en:"I am nervous when partners get too close to me.",f:"AVO",r:0},
    {zh:"我觉得依赖恋爱伴侣很自在。",en:"I feel comfortable depending on romantic partners.",f:"AVO",r:1},
    {zh:"我觉得依赖恋爱伴侣很容易。",en:"I find it easy to depend on romantic partners.",f:"AVO",r:1},
    {zh:"对我来说，向我的伴侣表达爱意是很容易的。",en:"It's easy for me to be affectionate with my partner.",f:"AVO",r:1},
    {zh:"我的伴侣真的理解我和我的需求。",en:"My partner really understands me and my needs.",f:"AVO",r:1},
  ]
};

/* ---------- Rotter I-E 控制源（29题迫选，其中6题为填充题；双语） ---------- */
SCALES.rotter = {
  id:'rotter', name:'Rotter 内外控制源量表', en:'Rotter Internal-External Locus of Control Scale',
  cat:'self', time:'8–12 分钟', fc:true,
  cite:'Rotter, J. B. (1966). Psychological Monographs, 80(1, Whole No. 609)；中文修订参考王登峰等（1991）。',
  license:'原始专著公开，研究用途属公共领域。',
  source:['DOI','https://doi.org/10.1037/h0092976'],
  pts:2, min:0,
  instr_zh:'每题包含 a、b 两个陈述。请从每对中选出一个你更加相信的说法——选你确实认为更真实的那一个，而非你认为“应该”选或“希望”为真的那一个。没有对错之分。其中6题为填充题，不计分。',
  note:'计分：每选择一个“外控”陈述计1分，总分0–23。分数越高越倾向外部控制源。填充题（第1、8、14、19、24、27题）不计分。',
  factors:{
    EXT:{zh:'外控倾向',en:'External Control',desc:{h:'偏外部控制源：倾向把发生在自己身上的结果归因于运气、命运、他人或强大的外部环境。',m:'内外控居中：视情境而定，兼有内外控信念。',l:'偏内部控制源：倾向相信结果主要由自身的努力、能力与选择决定。'}}
  },
  classify:function(sc){
    var s=sc.EXT.sum;
    var band = s<=8 ? '强内控倾向（0–8）' : (s<=16 ? '中等水平（9–16）' : '强外控倾向（17–23）');
    return '外控得分 '+s+' / 23，属'+band+'。常模均值通常在 11–12 左右。结果仅供参考。';
  },
  items:[
    {fc:1,filler:1,a:{zh:"子女出了问题是因为父母惩罚过度。",en:"Children get into trouble because their parents punish them too much."},b:{zh:"现今多数孩子的问题是父母过分溺爱。",en:"The trouble with most children nowadays is that their parents are too easy with them."}},
    {fc:1,f:"EXT",key:"a",a:{zh:"人们生活中发生的很多倒霉事，在某种程度上是由于运气不佳所致。",en:"Many of the unhappy things in people's lives are partly due to bad luck."},b:{zh:"人们的不幸是其自身错误造成的。",en:"People's misfortunes result from the mistakes they make."}},
    {fc:1,f:"EXT",key:"b",a:{zh:"战争发生的一个主要原因是人们对政治漠不关心。",en:"One of the major reasons why we have wars is because people don't take enough interest in politics."},b:{zh:"战争是永远不可避免的，无论人们怎么努力去防止它。",en:"There will always be wars, no matter how hard people try to prevent them."}},
    {fc:1,f:"EXT",key:"b",a:{zh:"从长远来看，人生在世总会获得应得的尊敬。",en:"In the long run people get the respect they deserve in this world."},b:{zh:"无论个人如何努力，不幸的是其价值还是经常被忽略。",en:"Unfortunately, an individual's worth often passes unrecognized no matter how hard he tries."}},
    {fc:1,f:"EXT",key:"b",a:{zh:"“老师没有公平对待学生”，这种看法毫无道理。",en:"The idea that teachers are unfair to students is nonsense."},b:{zh:"多数学生都没有意识到他们的分数受到偶然因素影响的程度有多大。",en:"Most students don't realize the extent to which their grades are influenced by accidental happenings."}},
    {fc:1,f:"EXT",key:"a",a:{zh:"不借助外力，一个人很难成为有效的领导者。",en:"Without the right breaks one cannot be an effective leader."},b:{zh:"一些能干的人未能当上领导者是因为他没能把握机会。",en:"Capable people who fail to become leaders have not taken advantage of their opportunities."}},
    {fc:1,f:"EXT",key:"a",a:{zh:"无论您如何努力，有些人就是不喜欢您。",en:"No matter how hard you try some people just don't like you."},b:{zh:"不能获得别人好感的人是因为他们不懂得如何与人相处。",en:"People who can't get others to like them don't understand how to get along with others."}},
    {fc:1,filler:1,a:{zh:"遗传对人的个性有着主要的决定作用。",en:"Heredity plays the major role in determining one's personality."},b:{zh:"一个人的生活经历决定了他会是什么样的人。",en:"It is one's experiences in life which determine what they're like."}},
    {fc:1,f:"EXT",key:"a",a:{zh:"我常常发现“人算不如天算”。",en:"I have often found that what is going to happen will happen."},b:{zh:"“听天由命”对我来说永远不如争取主动“人定胜天”。",en:"Trusting to fate has never turned out as well for me as making a decision to take a definite course of action."}},
    {fc:1,f:"EXT",key:"b",a:{zh:"对于准备充分的学生来说，基本不存在考试不公这一类的问题。",en:"In the case of the well prepared student there is rarely if ever such a thing as an unfair test."},b:{zh:"很多时候考题与课程内容相去甚远，再用功也是白费。",en:"Many times exam questions tend to be so unrelated to course work that studying is really useless."}},
    {fc:1,f:"EXT",key:"b",a:{zh:"成功之道唯有刻苦努力，与运气好坏无关。",en:"Becoming a success is a matter of hard work; luck has little or nothing to do with it."},b:{zh:"找一份好工作主要靠天时地利。",en:"Getting a good job depends mainly on being in the right place at the right time."}},
    {fc:1,f:"EXT",key:"b",a:{zh:"平民百姓能够影响政府决策。",en:"The average citizen can have an influence in government decisions."},b:{zh:"世界是由有权有势的少数人左右的，平民百姓无能为力。",en:"This world is run by the few people in power, and there is not much the little guy can do about it."}},
    {fc:1,f:"EXT",key:"b",a:{zh:"我在订计划时就已经几乎肯定自己可以将之付诸实现。",en:"When I make plans, I am almost certain that I can make them work."},b:{zh:"计划订得太早并不明智，因为很多事情只不过是运气好坏的结果而已。",en:"It is not always wise to plan too far ahead because many things turn out to be a matter of good or bad fortune anyhow."}},
    {fc:1,filler:1,a:{zh:"有些人简直一无是处。",en:"There are certain people who are just no good."},b:{zh:"每个人都有其可取之处。",en:"There is some good in everybody."}},
    {fc:1,f:"EXT",key:"b",a:{zh:"对我来说，达到自己的目标与运气无关或关系很小。",en:"In my case getting what I want has little or nothing to do with luck."},b:{zh:"很多时候，我们大可以靠抛硬币来决定何去何从。",en:"Many times we might just as well decide what to do by flipping a coin."}},
    {fc:1,f:"EXT",key:"a",a:{zh:"谁能出人头地常常首先取决于谁占天时地利。",en:"Who gets to be the boss often depends on who was lucky enough to be in the right place first."},b:{zh:"要让人们干正事靠的是能力而不是运气。",en:"Getting people to do the right thing depends upon ability; luck has little or nothing to do with it."}},
    {fc:1,f:"EXT",key:"a",a:{zh:"就国际事务而言，我们大家都是那些我们既不了解也无法控制的力量的牺牲品。",en:"As far as world affairs are concerned, most of us are the victims of forces we can neither understand, nor control."},b:{zh:"通过积极参与政治和社会活动，一般老百姓可以左右世界大事。",en:"By taking an active part in political and social affairs the people can control world events."}},
    {fc:1,f:"EXT",key:"a",a:{zh:"大多数人都未意识到他们的生活受偶然因素控制的程度有多大。",en:"Most people don't realize the extent to which their lives are controlled by accidental happenings."},b:{zh:"“运气”这类的事情根本不存在。",en:"There really is no such thing as \"luck.\""}},
    {fc:1,filler:1,a:{zh:"人在任何时候都应该勇于承认自己的错误。",en:"One should always be willing to admit mistakes."},b:{zh:"处理错误的最好办法就是加以掩盖。",en:"It is usually best to cover up one's mistakes."}},
    {fc:1,f:"EXT",key:"a",a:{zh:"您很难了解某人是否真正喜欢您。",en:"It is hard to know whether or not a person really likes you."},b:{zh:"您有多少朋友取决于您的人品有多好。",en:"How many friends you have depends upon how nice a person you are."}},
    {fc:1,f:"EXT",key:"a",a:{zh:"从长远来看，发生在我们身上的坏事与好事相互抵消。",en:"In the long run the bad things that happen to us are balanced by the good ones."},b:{zh:"霉运大多是无能、无知或懒惰的结果。",en:"Most misfortunes are the result of lack of ability, ignorance, laziness, or all three."}},
    {fc:1,f:"EXT",key:"b",a:{zh:"只要下足功夫，我们可以铲除政治腐败。",en:"With enough effort we can wipe out political corruption."},b:{zh:"人民对于政治家们的幕后活动鞭长莫及。",en:"It is difficult for people to have much control over the things politicians do in office."}},
    {fc:1,f:"EXT",key:"a",a:{zh:"有时我真不明白老师是怎么打分数的。",en:"Sometimes I can't understand how teachers arrive at the grades they give."},b:{zh:"我用功与否与我得的分数有直接关联。",en:"There is a direct connection between how hard I study and the grades I get."}},
    {fc:1,filler:1,a:{zh:"优秀的领导者要求人们自行决定应该做什么。",en:"A good leader expects people to decide for themselves what they should do."},b:{zh:"优秀的领导者明确地告诉每个人应该做什么。",en:"A good leader makes it clear to everybody what their jobs are."}},
    {fc:1,f:"EXT",key:"a",a:{zh:"很多时候我觉得自己对周围发生的事无能为力。",en:"Many times I feel that I have little influence over the things that happen to me."},b:{zh:"要让我相信机遇或运气主导了我的生活是不可能的。",en:"It is impossible for me to believe that chance or luck plays an important role in my life."}},
    {fc:1,f:"EXT",key:"b",a:{zh:"孤独的人是因为他们没有尽力友善待人。",en:"People are lonely because they don't try to be friendly."},b:{zh:"想方设法取悦他人没有多大用，因为他们喜欢您就喜欢您，不喜欢您就不喜欢您。",en:"There's not much use in trying too hard to please people; if they like you, they like you."}},
    {fc:1,filler:1,a:{zh:"学校里太过强调运动了。",en:"There is too much emphasis on athletics in high school."},b:{zh:"团队运动是陶冶品性的极佳方式。",en:"Team sports are an excellent way to build character."}},
    {fc:1,f:"EXT",key:"b",a:{zh:"我的今天是我自己一手造成的。",en:"What happens to me is my own doing."},b:{zh:"有时我感觉对自己目前的生活方向没有太大的控制。",en:"Sometimes I feel that I don't have enough control over the direction my life is taking."}},
    {fc:1,f:"EXT",key:"a",a:{zh:"大多时候，我都不能理解政治家们的所作所为。",en:"Most of the time I can't understand why politicians behave the way they do."},b:{zh:"从长远来看，人民自己应对国家和地方政府的劣绩负责。",en:"In the long run the people are responsible for bad government on a national as well as on a local level."}},
  ]
};

/* ---------- SVS/PVQ-21 基本价值观（21题；双语，欧洲社会调查版） ---------- */
SCALES.svs = {
  id:'svs', name:'PVQ-21 基本价值观问卷', en:'Portrait Values Questionnaire (Schwartz, ESS)',
  cat:'values', time:'6–8 分钟',
  cite:'Schwartz, S. H. (2003/2012). Portrait Values Questionnaire, European Social Survey.',
  license:'ESS PVQ-21 题项通过欧洲社会调查文档公开，非商业用途可自由使用。',
  source:['Scholar','https://scholar.google.com/scholar?q=schwartz+1992+%22universals+in+the+content+and+structure+of+values%22'],
  pts:6, min:1,
  anchors:[{v:1,zh:'完全不像我'},{v:2,zh:'不像我'},{v:3,zh:'有一点点像我'},{v:4,zh:'有点像我'},{v:5,zh:'像我'},{v:6,zh:'非常像我'}],
  instr_zh:'下面简要描述了一些人。请阅读每段描述，想想这个人在多大程度上与你相似或不相似，选择最能表明其与你相似程度的选项。',
  note:'施瓦茨基本价值观理论的 10 个价值维度。正式研究常对各维度分数减去个人总均分（MRAT）做中心化处理；本页展示各维度的原始相对重要度。',
  factors:{
    SD:{zh:"自我导向",en:"Self-Direction",desc:{h:"该价值观对你而言是重要的生活指导原则：独立思考与行动；重视选择、创造与探索。",m:"该价值观对你有一定重要性。",l:"相对而言，该价值观不是你主要的生活指导原则。"}},
    ST:{zh:"刺激",en:"Stimulation",desc:{h:"该价值观对你而言是重要的生活指导原则：追求生活中的兴奋、新奇与挑战。",m:"该价值观对你有一定重要性。",l:"相对而言，该价值观不是你主要的生活指导原则。"}},
    HE:{zh:"享乐主义",en:"Hedonism",desc:{h:"该价值观对你而言是重要的生活指导原则：重视个人的快乐与感官满足。",m:"该价值观对你有一定重要性。",l:"相对而言，该价值观不是你主要的生活指导原则。"}},
    AC:{zh:"成就",en:"Achievement",desc:{h:"该价值观对你而言是重要的生活指导原则：通过展示能力获得个人成功、赢得认可。",m:"该价值观对你有一定重要性。",l:"相对而言，该价值观不是你主要的生活指导原则。"}},
    PO:{zh:"权力",en:"Power",desc:{h:"该价值观对你而言是重要的生活指导原则：重视社会地位、声望以及对人和资源的掌控。",m:"该价值观对你有一定重要性。",l:"相对而言，该价值观不是你主要的生活指导原则。"}},
    SE:{zh:"安全",en:"Security",desc:{h:"该价值观对你而言是重要的生活指导原则：重视社会与人际关系的安定、和谐与稳定。",m:"该价值观对你有一定重要性。",l:"相对而言，该价值观不是你主要的生活指导原则。"}},
    CO:{zh:"顺从",en:"Conformity",desc:{h:"该价值观对你而言是重要的生活指导原则：约束可能违反规范或伤害他人的行为。",m:"该价值观对你有一定重要性。",l:"相对而言，该价值观不是你主要的生活指导原则。"}},
    TR:{zh:"传统",en:"Tradition",desc:{h:"该价值观对你而言是重要的生活指导原则：尊重并接受文化或宗教的习俗与观念。",m:"该价值观对你有一定重要性。",l:"相对而言，该价值观不是你主要的生活指导原则。"}},
    BE:{zh:"仁慈",en:"Benevolence",desc:{h:"该价值观对你而言是重要的生活指导原则：维护并增进身边亲近之人的福祉。",m:"该价值观对你有一定重要性。",l:"相对而言，该价值观不是你主要的生活指导原则。"}},
    UN:{zh:"博爱",en:"Universalism",desc:{h:"该价值观对你而言是重要的生活指导原则：理解、宽容并保护所有人与自然。",m:"该价值观对你有一定重要性。",l:"相对而言，该价值观不是你主要的生活指导原则。"}},
  },
  items:[
    {zh:"想出新主意、发挥创意对我来说很重要。我喜欢以自己独特的方式做事。",en:"Thinking up new ideas and being creative is important to him/her. He/She likes to do things in his/her own original way.",f:"SD",r:0},
    {zh:"富有对我来说很重要。我想要有很多钱和昂贵的东西。",en:"It is important to him/her to be rich. He/She wants to have a lot of money and expensive things.",f:"PO",r:0},
    {zh:"我认为世界上每个人都应受到平等的对待是很重要的。我相信每个人在生活中都应有平等的机会。",en:"He/She thinks it is important that every person in the world should be treated equally. He/She believes everyone should have equal opportunities in life.",f:"UN",r:0},
    {zh:"表现自己的能力对我来说很重要。我希望人们能赞赏我所做的事。",en:"It's very important to him/her to show his/her abilities. He/She wants people to admire what he/she does.",f:"AC",r:0},
    {zh:"生活在安全的环境里对我来说很重要。我避免任何可能危及自身安全的事。",en:"It is important to him/her to live in secure surroundings. He/She avoids anything that might endanger his/her safety.",f:"SE",r:0},
    {zh:"我认为尝试生活中许多不同的事物很重要。我总是寻找新的东西去尝试。",en:"He/She thinks it is important to do lots of different things in life. He/She always looks for new things to try.",f:"ST",r:0},
    {zh:"我认为人们应该照被告知的去做。我觉得人们在任何时候都应该遵守规则，即使没有人看着。",en:"He/She believes that people should do what they're told. He/She thinks people should follow rules at all times, even when no one is watching.",f:"CO",r:0},
    {zh:"聆听与自己不同的人对我来说很重要。即使我不同意他们的观点，我仍然想要理解他们。",en:"It is important to him/her to listen to people who are different from him/her. Even when he/she disagrees with them, he/she still wants to understand them.",f:"UN",r:0},
    {zh:"谦虚谨慎对我来说很重要。我尽量不引起别人的注意。",en:"It is important to him/her to be humble and modest. He/She tries not to draw attention to himself/herself.",f:"TR",r:0},
    {zh:"过得开心对我来说很重要。我喜欢“犒劳”自己。",en:"Having a good time is important to him/her. He/She likes to \"spoil\" himself/herself.",f:"HE",r:0},
    {zh:"自己的事由自己做决定对我来说很重要。我喜欢自由，不依赖他人。",en:"It is important to him/her to make his/her own decisions about what he/she does. He/She likes to be free and not depend on others.",f:"SD",r:0},
    {zh:"帮助身边的人对我来说非常重要。我想关心他们的幸福。",en:"It's very important to him/her to help the people around him/her. He/She wants to care for their well-being.",f:"BE",r:0},
    {zh:"非常成功对我来说很重要。我希望人们能认可我的成就。",en:"Being very successful is important to him/her. He/She hopes people will recognize his/her achievements.",f:"AC",r:0},
    {zh:"政府保障其免受一切威胁的安全对我来说很重要。我希望国家强大以保护公民。",en:"It is important to him/her that the government ensures his/her safety against all threats. He/She wants the state to be strong so it can defend its citizens.",f:"SE",r:0},
    {zh:"我喜欢冒险。我总是在寻求冒险经历。",en:"He/She likes to take risks. He/She is always looking for adventures.",f:"ST",r:0},
    {zh:"行为举止合宜对我来说很重要。我不想做任何别人会说不对的事。",en:"It is important to him/her always to behave properly. He/She wants to avoid doing anything people would say is wrong.",f:"CO",r:0},
    {zh:"获得他人尊重对我来说很重要。我希望人们按照我说的去做。",en:"It is important to him/her to get respect from others. He/She wants people to do what he/she says.",f:"PO",r:0},
    {zh:"对朋友忠诚对我来说很重要。我愿意为亲近的人奉献。",en:"It is important to him/her to be loyal to his/her friends. He/She wants to devote himself/herself to people close to him/her.",f:"BE",r:0},
    {zh:"我坚信人们应该保护大自然。爱护环境对我来说很重要。",en:"He/She strongly believes that people should care for nature. Looking after the environment is important to him/her.",f:"UN",r:0},
    {zh:"传统对我来说很重要。我尽力遵循我的宗教或家庭传承下来的习俗。",en:"Tradition is important to him/her. He/She tries to follow the customs handed down by his/her religion or his/her family.",f:"TR",r:0},
    {zh:"我把握每个享乐的机会。做让自己快乐的事对我来说很重要。",en:"He/She seeks every chance he/she can to have fun. It is important to him/her to do things that give him/her pleasure.",f:"HE",r:0},
  ]
};

/* ---------- NPI-40 自恋人格（40题迫选；中文为参考译文） ---------- */
SCALES.npi = {
  id:'npi', name:'NPI-40 自恋人格量表', en:'Narcissistic Personality Inventory (40)',
  cat:'dark', time:'8–12 分钟', fc:true,
  cite:'Raskin, R., & Terry, H. (1988). JPSP, 54(5), 890-902.',
  license:'原论文公开（1979/1988），学术免费使用。',
  source:['DOI','https://doi.org/10.1037/0022-3514.54.5.890'],
  pts:2, min:0,
  instr_zh:'每题包含 A、B 两个陈述。请选出更接近你对自己的感受与看法的那一个。没有对错之分。测量的是一般人群中的（亚临床）自恋倾向，不用于诊断自恋型人格障碍。',
  note:'本页 A/B 两侧中文为依据英文原句的参考译文，仅供理解；NPI 有多种中文改编，正式研究请采用已验证中文版（如郑涌等 2005）。计分：每选择一个自恋方向的陈述计1分，总分0–40。大学生样本均值通常在15–17。7个子维度用于刻画自恋的不同侧面。',
  factors:{
    AU:{zh:"权威",en:"Authority",desc:{h:"强烈偏好领导、支配与掌控局面。",m:"中等。",l:"不强求权威或领导地位。"}},
    SS:{zh:"自我满足",en:"Self-Sufficiency",desc:{h:"高度自信独立，强调自给自足与自我能力。",m:"中等。",l:"较能承认对他人的依赖与自身局限。"}},
    SU:{zh:"优越感",en:"Superiority",desc:{h:"自视特别、优于他人。",m:"中等。",l:"不特别自视高人一等。"}},
    EX:{zh:"表现欲",en:"Exhibitionism",desc:{h:"喜欢成为焦点、展示与炫耀自己。",m:"中等。",l:"偏好低调，不喜张扬。"}},
    EP:{zh:"利用性",en:"Exploitativeness",desc:{h:"善于操纵、利用他人以达目的。",m:"中等。",l:"较少操纵他人，重视对等。"}},
    VA:{zh:"虚荣",en:"Vanity",desc:{h:"高度在意并欣赏自己的外表。",m:"中等。",l:"不特别在意外表。"}},
    EN:{zh:"特权感",en:"Entitlement",desc:{h:"期望特殊待遇，坚持获取自认应得之物。",m:"中等。",l:"较少期待特殊待遇。"}},
  },
  classify:function(sc){
    var t=0,k; for(k in sc){ t+=sc[k].sum; }
    return '自恋总分 '+t+' / 40（大学生样本均值约 15–17）。NPI 测量的是一般人群中的亚临床自恋倾向，分数高低不构成任何临床诊断。';
  },
  items:[
    {fc:1,f:"AU",key:"a",a:{zh:"我天生就有影响他人的才能。",en:"I have a natural talent for influencing people."},b:{zh:"我不擅长影响他人。",en:"I am not good at influencing people."}},
    {fc:1,f:"EX",key:"a",a:{zh:"谦虚不适合我。",en:"Modesty doesn't become me."},b:{zh:"我本质上是一个谦虚的人。",en:"I am essentially a modest person."}},
    {fc:1,f:"EX",key:"a",a:{zh:"我几乎会接受任何挑战。",en:"I would do almost anything on a dare."},b:{zh:"我倾向于是一个相当谨慎的人。",en:"I tend to be a fairly cautious person."}},
    {fc:1,f:"SU",key:"b",a:{zh:"当别人称赞我时，我有时会感到尴尬。",en:"When people compliment me I sometimes get embarrassed."},b:{zh:"我知道我很优秀，因为每个人都这么告诉我。",en:"I know that I am good because everybody keeps telling me so."}},
    {fc:1,f:"EN",key:"b",a:{zh:"统治世界的想法让我非常恐惧。",en:"The thought of ruling the world frightens the hell out of me."},b:{zh:"如果我统治世界，世界会变得更美好。",en:"If I ruled the world it would be a better place."}},
    {fc:1,f:"EP",key:"a",a:{zh:"我通常能通过言语摆脱任何困境。",en:"I can usually talk my way out of anything."},b:{zh:"我努力接受自己行为的后果。",en:"I try to accept the consequences of my behavior."}},
    {fc:1,f:"EX",key:"b",a:{zh:"我更喜欢融入人群。",en:"I prefer to blend in with the crowd."},b:{zh:"我喜欢成为众人瞩目的焦点。",en:"I like to be the center of attention."}},
    {fc:1,f:"AU",key:"a",a:{zh:"我会成功的。",en:"I will be a success."},b:{zh:"我不太在意成功。",en:"I am not too concerned about success."}},
    {fc:1,f:"SU",key:"b",a:{zh:"我不比大多数人更好，也不比他们更差。",en:"I am no better or worse than most people."},b:{zh:"我认为我是一个特别的人。",en:"I think I am a special person."}},
    {fc:1,f:"AU",key:"b",a:{zh:"我不确定我是否能成为一个好领导。",en:"I am not sure if I would make a good leader."},b:{zh:"我认为自己是一个好领导。",en:"I see myself as a good leader."}},
    {fc:1,f:"AU",key:"a",a:{zh:"我很自信果断。",en:"I am assertive."},b:{zh:"我希望我能更自信果断一些。",en:"I wish I were more assertive."}},
    {fc:1,f:"AU",key:"a",a:{zh:"我喜欢对他人拥有权力。",en:"I like to have authority over other people."},b:{zh:"我不介意服从命令。",en:"I don't mind following orders."}},
    {fc:1,f:"EP",key:"a",a:{zh:"我觉得操纵他人很容易。",en:"I find it easy to manipulate people."},b:{zh:"我不喜欢自己操纵他人的时候。",en:"I don't like it when I find myself manipulating people."}},
    {fc:1,f:"EN",key:"a",a:{zh:"我坚持要得到我应得的尊重。",en:"I insist upon getting the respect that is due me."},b:{zh:"我通常能得到我应得的尊重。",en:"I usually get the respect that I deserve."}},
    {fc:1,f:"VA",key:"b",a:{zh:"我不特别喜欢炫耀我的身材。",en:"I don't particularly like to show off my body."},b:{zh:"我喜欢炫耀我的身材。",en:"I like to show off my body."}},
    {fc:1,f:"EP",key:"a",a:{zh:"我能把人看得很透彻。",en:"I can read people like a book."},b:{zh:"有时人们很难理解。",en:"People are sometimes hard to understand."}},
    {fc:1,f:"SS",key:"b",a:{zh:"如果我觉得自己有能力，我愿意承担做决定的责任。",en:"If I feel competent I am willing to take responsibility for making decisions."},b:{zh:"我喜欢承担做决定的责任。",en:"I like to take responsibility for making decisions."}},
    {fc:1,f:"EN",key:"b",a:{zh:"我只希望过得还算幸福。",en:"I just want to be reasonably happy."},b:{zh:"我希望在世人眼中有所成就。",en:"I want to amount to something in the eyes of the world."}},
    {fc:1,f:"VA",key:"b",a:{zh:"我的身材没什么特别的。",en:"My body is nothing special."},b:{zh:"我喜欢欣赏我的身体。",en:"I like to look at my body."}},
    {fc:1,f:"EX",key:"b",a:{zh:"我尽量不炫耀。",en:"I try not to be a show off."},b:{zh:"如果有机会，我通常会炫耀。",en:"I will usually show off if I get the chance."}},
    {fc:1,f:"SS",key:"a",a:{zh:"我总是知道自己在做什么。",en:"I always know what I am doing."},b:{zh:"有时我不确定自己在做什么。",en:"Sometimes I am not sure of what I am doing."}},
    {fc:1,f:"SS",key:"b",a:{zh:"我有时会依靠别人来完成事情。",en:"I sometimes depend on people to get things done."},b:{zh:"我很少依靠别人来完成事情。",en:"I rarely depend on anyone else to get things done."}},
    {fc:1,f:"EP",key:"b",a:{zh:"有时我讲的故事很精彩。",en:"Sometimes I tell good stories."},b:{zh:"每个人都喜欢听我讲的故事。",en:"Everybody likes to hear my stories."}},
    {fc:1,f:"EN",key:"a",a:{zh:"我对别人期望很高。",en:"I expect a great deal from other people."},b:{zh:"我喜欢为别人做事。",en:"I like to do things for other people."}},
    {fc:1,f:"EN",key:"a",a:{zh:"除非我得到我应得的一切，否则我永远不会满足。",en:"I will never be satisfied until I get all that I deserve."},b:{zh:"我随遇而安，顺其自然地获得满足。",en:"I take my satisfactions as they come."}},
    {fc:1,f:"SU",key:"b",a:{zh:"赞美让我感到尴尬。",en:"Compliments embarrass me."},b:{zh:"我喜欢被赞美。",en:"I like to be complimented."}},
    {fc:1,f:"EN",key:"a",a:{zh:"我有强烈的权力意志。",en:"I have a strong will to power."},b:{zh:"纯粹为了权力本身，我并不感兴趣。",en:"Power for its own sake doesn't interest me."}},
    {fc:1,f:"EX",key:"b",a:{zh:"我不在乎新潮流和时尚。",en:"I don't care about new fads and fashions."},b:{zh:"我喜欢引领新潮流和时尚。",en:"I like to start new fads and fashions."}},
    {fc:1,f:"VA",key:"a",a:{zh:"我喜欢照镜子。",en:"I like to look at myself in the mirror."},b:{zh:"我对照镜子不特别感兴趣。",en:"I am not particularly interested in looking at myself in the mirror."}},
    {fc:1,f:"EX",key:"a",a:{zh:"我真的很喜欢成为众人瞩目的焦点。",en:"I really like to be the center of attention."},b:{zh:"成为众人瞩目的焦点让我感到不舒服。",en:"It makes me uncomfortable to be the center of attention."}},
    {fc:1,f:"SS",key:"a",a:{zh:"我可以随心所欲地生活。",en:"I can live my life in any way I want to."},b:{zh:"人们不能总是随心所欲地生活。",en:"People can't always live their lives in terms of what they want."}},
    {fc:1,f:"AU",key:"b",a:{zh:"拥有权威对我来说意义不大。",en:"Being an authority doesn't mean that much to me."},b:{zh:"人们似乎总是认可我的权威。",en:"People always seem to recognize my authority."}},
    {fc:1,f:"AU",key:"a",a:{zh:"我更愿意成为一名领导者。",en:"I would prefer to be a leader."},b:{zh:"我是否是领导者对我来说没什么区别。",en:"It makes little difference to me whether I am a leader or not."}},
    {fc:1,f:"SS",key:"a",a:{zh:"我将成为一个伟大的人。",en:"I am going to be a great person."},b:{zh:"我希望我能成功。",en:"I hope I am going to be successful."}},
    {fc:1,f:"EP",key:"b",a:{zh:"人们有时会相信我告诉他们的事情。",en:"People sometimes believe what I tell them."},b:{zh:"我能让任何人相信我想让他们相信的任何事。",en:"I can make anybody believe anything I want them to."}},
    {fc:1,f:"AU",key:"a",a:{zh:"我天生就是领导者。",en:"I am a born leader."},b:{zh:"领导力是一种需要长时间培养的品质。",en:"Leadership is a quality that takes a long time to develop."}},
    {fc:1,f:"SU",key:"a",a:{zh:"我希望有一天有人能为我写传记。",en:"I wish somebody would someday write my biography."},b:{zh:"我不喜欢别人出于任何原因窥探我的生活。",en:"I don't like people to pry into my life for any reason."}},
    {fc:1,f:"EX",key:"a",a:{zh:"当我出门在外时，如果人们不注意我的外表，我会感到不高兴。",en:"I get upset when people don't notice how I look when I go out in public."},b:{zh:"当我出门在外时，我不介意融入人群。",en:"I don't mind blending into the crowd when I go out in public."}},
    {fc:1,f:"SS",key:"a",a:{zh:"我比其他人更有能力。",en:"I am more capable than other people."},b:{zh:"我可以从别人那里学到很多东西。",en:"There is a lot that I can learn from other people."}},
    {fc:1,f:"SU",key:"b",a:{zh:"我和大家没什么两样。",en:"I am much like everybody else."},b:{zh:"我是一个非凡的人。",en:"I am an extraordinary person."}},
  ]
};

/* ---------- IPIP-VIA 性格优势 24题筛查版（公有领域；中文为参考译文） ---------- */
SCALES.via = {
  id:'via', name:'IPIP-VIA 性格优势量表（24题筛查版）', en:'IPIP-VIA Character Strengths (24-item screener)',
  cat:'positive', time:'4–6 分钟',
  cite:'Goldberg, L. R. (1999), International Personality Item Pool; VIA 分类见 Peterson & Seligman (2004).',
  license:'IPIP-VIA 题项属公共领域，可自由复制、修改与使用。',
  source:['IPIP-VIA','https://ipip.ori.org/newVIAKey.htm'],
  pts:5, min:1,
  anchors:[{v:1,zh:'很不准确'},{v:2,zh:'比较不准确'},{v:3,zh:'不确定'},{v:4,zh:'比较准确'},{v:5,zh:'很准确'}],
  instr_zh:'请描述你现在通常的样子（而非期望的样子），指出下面每项对你的准确程度。这是一套按 6 大美德归纳的性格优势自评（每题对应一种优势）。',
  note:'官方 VIA-IS 题项受版权保护、未公开发行；本量表采用与 VIA 相同 24 项优势对应的公有领域 IPIP-VIA 题项（每优势 1 题，英文逐字取自 ipip.ori.org），中文为参考译文。这不是官方 VIA-IS，仅作快速筛查；完整优势排序请用官方 viacharacter.org。',
  factors:{
    W:{zh:"智慧",en:"Wisdom",desc:{h:"认知类优势突出：富创造力、好奇、明辨、好学且有洞察。",m:"中等。",l:"认知探索类优势相对不突出。"}},
    C:{zh:"勇气",en:"Courage",desc:{h:"意志类优势突出：勇敢、诚实、坚毅、充满热忱。",m:"中等。",l:"意志克难类优势相对不突出。"}},
    H:{zh:"仁爱",en:"Humanity",desc:{h:"人际类优势突出：善良、有爱、善解人意。",m:"中等。",l:"亲密关怀类优势相对不突出。"}},
    J:{zh:"正义",en:"Justice",desc:{h:"公民类优势突出：公平、有领导力、重团队。",m:"中等。",l:"群体协作类优势相对不突出。"}},
    T:{zh:"节制",en:"Temperance",desc:{h:"自控类优势突出：宽恕、谦逊、审慎、自律。",m:"中等。",l:"节制防过类优势相对不突出。"}},
    X:{zh:"超越",en:"Transcendence",desc:{h:"意义类优势突出：懂审美、感恩、抱希望、有幽默、重灵性。",m:"中等。",l:"联结意义类优势相对不突出。"}},
  },
  items:[
    {zh:"创造力：我是一个有原创思想的人。",en:"Am an original thinker.",f:"W",r:0},
    {zh:"好奇心：我觉得世界是一个非常有趣的地方。",en:"Find the world a very interesting place.",f:"W",r:0},
    {zh:"判断力：我会权衡利弊。",en:"Weigh the pro's and the con's.",f:"W",r:0},
    {zh:"热爱学习：每当我学到新东西时，我都会感到非常兴奋。",en:"Am thrilled when I learn something new.",f:"W",r:0},
    {zh:"洞察力：我对正在发生的事情有广阔的视野。",en:"Have a broad outlook on what is going on.",f:"W",r:0},
    {zh:"勇敢：我是一个勇敢的人。",en:"Am a brave person.",f:"C",r:0},
    {zh:"诚实：我信守诺言。",en:"Keep my promises.",f:"C",r:0},
    {zh:"毅力：我是一个目标明确的人。",en:"Am a goal-oriented person.",f:"C",r:0},
    {zh:"热忱：我热爱我所做的事情。",en:"Love what I do.",f:"C",r:0},
    {zh:"善良：我喜欢让别人开心。",en:"Love to make other people happy.",f:"H",r:0},
    {zh:"爱：我知道生命中有人像关心自己一样关心我。",en:"Know that there are people in my life who care as much for me as for themselves.",f:"H",r:0},
    {zh:"社会智慧：我了解别人的想法和动机。",en:"Know what makes others tick.",f:"H",r:0},
    {zh:"公平：我平等对待所有人。",en:"Treat all people equally.",f:"J",r:0},
    {zh:"领导力：我擅长帮助人们良好协作。",en:"Am good at helping people work well together.",f:"J",r:0},
    {zh:"团队精神：我喜欢成为团队的一员。",en:"Enjoy being part of a group.",f:"J",r:0},
    {zh:"宽恕：我对过去的事情既往不咎。",en:"Let bygones be bygones.",f:"T",r:0},
    {zh:"谦逊：我不夸耀自己的成就。",en:"Don't brag about my accomplishments.",f:"T",r:0},
    {zh:"审慎：我三思而后言。",en:"Think before I speak.",f:"T",r:0},
    {zh:"自我调节：我是一个高度自律的人。",en:"Am a highly disciplined person.",f:"T",r:0},
    {zh:"审美：我认为生活在一个充满美的世界很重要。",en:"Feel it's important to live in a world of beauty.",f:"X",r:0},
    {zh:"感恩：我向关心我的人表达感谢。",en:"Express my thanks to those who care about me.",f:"X",r:0},
    {zh:"希望：我总是看到事物积极的一面。",en:"Look on the bright side.",f:"X",r:0},
    {zh:"幽默：我很有幽默感。",en:"Have a great sense of humor.",f:"X",r:0},
    {zh:"灵性：我是一个有精神信仰的人。",en:"Am a spiritual person.",f:"X",r:0},
  ]
};

/* ============================================================
   通用计分引擎（支持李克特/评分式 + 迫选式 fc，逐题独立量程）
   scale: SCALES[id]；resp: 数组，长度=items 数
     - 李克特题：元素为原始作答值（数字）
     - 迫选题(fc)：元素为 'a' / 'b'
   返回 { facs:[...], extra }
   ============================================================ */
function scoreScaleData(scale, resp){
  const max = scale.min + scale.pts - 1;
  const revBase = 2*scale.min + scale.pts - 1;
  const acc = {};
  scale.items.forEach((it,i)=>{
    if(it.fc){
      if(it.filler) return;              // 填充题不计分
      const scored = (resp[i]===it.key) ? 1 : 0;
      if(!acc[it.f]) acc[it.f] = {sum:0,n:0,min:0,max:0};
      acc[it.f].sum += scored; acc[it.f].n += 1; acc[it.f].min += 0; acc[it.f].max += 1;
    } else {
      const raw = resp[i];
      const scored = it.r ? (revBase - raw) : raw;
      if(!acc[it.f]) acc[it.f] = {sum:0,n:0,min:0,max:0};
      acc[it.f].sum += scored; acc[it.f].n += 1; acc[it.f].min += scale.min; acc[it.f].max += max;
    }
  });
  const facs = Object.keys(scale.factors).map(k=>{
    const a = acc[k] || {sum:0,n:0,min:0,max:0};
    const minP = a.min, maxP = a.max;
    const pct = maxP>minP ? Math.round((a.sum-minP)/(maxP-minP)*100) : 0;
    const level = pct>=67 ? 'h' : pct>=34 ? 'm' : 'l';
    const F = scale.factors[k];
    return {key:k, zh:F.zh, en:F.en, sum:a.sum, n:a.n, minP, maxP, pct, level, desc:F.desc[level]};
  });
  const scMap = {}; facs.forEach(f=>scMap[f.key]=f);
  const extra = scale.classify ? scale.classify(scMap) : null;
  return {facs, extra};
}
