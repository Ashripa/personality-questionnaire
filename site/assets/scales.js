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

/* ============================================================
   通用计分引擎
   scale: SCALES[id]；resp: 数组，长度=items 数，元素为原始作答值
   返回 { facs:[{key,zh,en,sum,minP,maxP,pct,level,desc}], extra }
   ============================================================ */
function scoreScaleData(scale, resp){
  const max = scale.min + scale.pts - 1;
  const revBase = 2*scale.min + scale.pts - 1;
  const acc = {};
  scale.items.forEach((it,i)=>{
    const raw = resp[i];
    const scored = it.r ? (revBase - raw) : raw;
    if(!acc[it.f]) acc[it.f] = {sum:0, n:0};
    acc[it.f].sum += scored;
    acc[it.f].n += 1;
  });
  const facs = Object.keys(scale.factors).map(k=>{
    const a = acc[k] || {sum:0,n:0};
    const minP = a.n*scale.min, maxP = a.n*max;
    const pct = maxP>minP ? Math.round((a.sum-minP)/(maxP-minP)*100) : 0;
    const level = pct>=67 ? 'h' : pct>=34 ? 'm' : 'l';
    const F = scale.factors[k];
    return {key:k, zh:F.zh, en:F.en, sum:a.sum, n:a.n, minP, maxP, pct, level, desc:F.desc[level]};
  });
  const scMap = {}; facs.forEach(f=>scMap[f.key]=f);
  const extra = scale.classify ? scale.classify(scMap) : null;
  return {facs, extra};
}
