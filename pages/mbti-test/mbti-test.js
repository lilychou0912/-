// pages/mbti-test/mbti-test.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items1: [{
      name: '别人。',
      value: 1
    },
    {
      name: '我自己的想法。',
      value: 0
    }
    ],

    items2: [{
      name: '在夜色很深时，一旦我开始投入，也许就是最晚离开的那一个。',
      value: 1
    },
    {
      name: '在夜晚开始的时候，我就疲倦了并且想回家。',
      value: 0
    }
    ],

    items3: [{
      name: '与我的情人到有很多人且社交活动频繁的地方。',
      value: 1
    },
    {
      name: '待在家中与我的情人做一些特别的事情，例如说观赏一部有趣的录像带并享用我最爱的外带食物。',
      value: 0
    }
    ],

    items4: [{
      name: '整体来说蛮健谈的。',
      value: 1
    },
    {
      name: '较安静并保留，直到我觉得舒服。',
      value: 0
    }
    ],

    items5: [{
      name: '在宴会中、夜总会、工作上、休闲活动中、会议上、或当朋友介绍我给他们的朋友时。',
      value: 1
    },
    {
      name: '透过私人的方式，例如个人广告、录像约会、或是由亲密的朋友和家人介绍。',
      value: 0
    }
    ],

    items6: [{
      name: '很多认识的人和很亲密的朋友。',
      value: 1
    },
    {
      name: '一些很亲密的朋友和一些认识的人。',
      value: 0
    }
    ],

    items7: [{
      name: '你难道不可以安静一点吗？',
      value: 1
    },
    {
      name: '可以请你从你的世界中出来一下吗？',
      value: 0
    }
    ],

    items8: [{
      name: '我对有可能发生之事的想象和期望。',
      value: 1
    },
    {
      name: '我对目前状况实际认知。',
      value: 0
    }
    ],

    items9: [{
      name: '我的直觉。',
      value: 1
    },
    {
      name: '我直接的观察和现成的经验。',
      value: 0
    }
    ],

    items10: [{
      name: '永远有进步的空间。',
      value: 1
    },
    {
      name: '若它没有被破坏，别修补它。',
      value: 0
    }
    ],

    items11: [{
      name: '未来，关于改进或发明事物，和生活的种种可能性。例如说，我也许会谈论一个新的科学发明，或一个更好的方法来表达我的感受。',
      value: 1
    },
    {
      name: '实际的，具体的，关于「此时此地」的事物。例如说，我也许会谈论品酒的好方法，或我即将要参加的新奇旅程。',
      value: 0
    }
    ],

    items12: [{
      name: '喜欢先看整个大局面。',
      value: 1
    },
    {
      name: '喜欢先拿握细节。',
      value: 0
    }
    ],

    items13: [{
      name: '与其活在现实中，我选择活在我的想象里。',
      value: 1
    },
    {
      name: '与其活在我的想象里，我选择活在现实中。',
      value: 0
    }
    ],

    items14: [{
      name: '偏向于去想象一大堆关于即将来临之约会的事情。',
      value: 1
    },
    {
      name: '偏向于拘紧地想象即将来临的约会，只期待让它自然地发生。',
      value: 0
    }
    ],

    items15: [{
      name: '首先依我的心意，然依我的逻辑。',
      value: 1
    },
    {
      name: '首先依我的逻辑，然后依我的心意。',
      value: 0
    }
    ],

    items16: [{
      name: '当人们需要情感上的支持时。',
      value: 1
    },
    {
      name: '当人们不合逻辑时。',
      value: 0
    }
    ],

    items17: [{
      name: '我通常让自己的情绪深陷其中，很难才能抽身而出。',
      value: 1
    },
    {
      name: '虽然我觉得受伤，但一旦下定决心，我会直截了当地将过去恋人的影子甩开。',
      value: 0
    }
    ],

    items18: [{
      name: '情感上的兼容性：表达爱意和对另一半的需求很敏感。',
      value: 1
    },
    {
      name: '智能上的兼容性：沟通重要的想法：客观地讨论和辩论事情。',
      value: 0
    }
    ],

    items19: [{
      name: '我尽可能地避免伤害对方的感受；若是会对对方造成伤害的话，我就不会说。',
      value: 1
    },
    {
      name: '我通常毫无保留地说话，并且对我的情人直言直语，因为对的就是对的。',
      value: 0
    }
    ],

    items20: [{
      name: '热情和敏感。',
      value: 1
    },
    {
      name: '逻辑和明确。',
      value: 0
    }
    ],

    items21: [{
      name: '友善及重要的。',
      value: 1
    },
    {
      name: '另有目的。',
      value: 0
    }
    ],

    items22: [{
      name: '必须先检查我的时间表。',
      value: 1
    },
    {
      name: '立即收拾行装。',
      value: 0
    }
    ],

    items23: [{
      name: '若我所约的人来迟了，我会很不高兴。',
      value: 1
    },
    {
      name: '一点都不在乎，因为我自己已常常迟到。',
      value: 0
    }
    ],

    items24: [{
      name: '事先知道约会的行程：要去哪里、有谁参加、我会在哪里多久、该如何打扮。',
      value: 1
    },
    {
      name: '让约会自然地发生，不做先前太多的计划。',
      value: 0
    }
    ],

    items25: [{
      name: '日程表和组织。',
      value: 1
    },
    {
      name: '自然发生和弹性。',
      value: 0
    }
    ],

    items26: [{
      name: '我准时出席而其它人迟到。',
      value: 1
    },
    {
      name: '其它人都准则出席而我迟到。',
      value: 0
    }
    ],

    items27: [{
      name: '下定决心并且做出最后肯定的结论。',
      value: 1
    },
    {
      name: '开放我的选择并且持续收集信息。',
      value: 0
    }
    ],

    items28: [{
      name: '喜欢在一个时间里专心于一件事情直到完成。',
      value: 1
    },
    {
      name: '享受同时进行好几件事情。',
      value: 0
    }
    ]
  },

  //获取用户输入
  radioChange1: function (e) {
    this.setData({
      text1: e.detail.value
    });
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },

  radioChange2: function (e) {
    this.setData({
      text2: e.detail.value
    });
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },

  radioChange3: function (e) {
    this.setData({
      text3: e.detail.value
    });
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },

  radioChange4: function (e) {
    this.setData({
      text4: e.detail.value
    });
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },

  radioChange5: function (e) {
    this.setData({
      text5: e.detail.value
    });
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },

  radioChange6: function (e) {
    this.setData({
      text6: e.detail.value
    });
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },

  radioChange7: function (e) {
    this.setData({
      text7: e.detail.value
    });
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },

  radioChange8: function (e) {
    this.setData({
      text8: e.detail.value
    });
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },

  radioChange9: function (e) {
    this.setData({
      text9: e.detail.value
    });
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },

  radioChange10: function (e) {
    this.setData({
      text10: e.detail.value
    });
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },

  radioChange11: function (e) {
    this.setData({
      text11: e.detail.value
    });
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },

  radioChange12: function (e) {
    this.setData({
      text12: e.detail.value
    });
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },

  radioChange13: function (e) {
    this.setData({
      text13: e.detail.value
    });
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },

  radioChange14: function (e) {
    this.setData({
      text14: e.detail.value
    });
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },

  radioChange15: function (e) {
    this.setData({
      text15: e.detail.value
    });
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },

  radioChange16: function (e) {
    this.setData({
      text16: e.detail.value
    });
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },

  radioChange17: function (e) {
    this.setData({
      text17: e.detail.value
    });
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },

  radioChange18: function (e) {
    this.setData({
      text18: e.detail.value
    });
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },

  radioChange19: function (e) {
    this.setData({
      text19: e.detail.value
    });
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },

  radioChange20: function (e) {
    this.setData({
      text20: e.detail.value
    });
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },

  radioChange21: function (e) {
    this.setData({
      text21: e.detail.value
    });
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },

  radioChange22: function (e) {
    this.setData({
      text22: e.detail.value
    });
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },

  radioChange23: function (e) {
    this.setData({
      text23: e.detail.value
    });
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },

  radioChange24: function (e) {
    this.setData({
      text24: e.detail.value
    });
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },

  radioChange25: function (e) {
    this.setData({
      text25: e.detail.value
    });
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },

  radioChange26: function (e) {
    this.setData({
      text26: e.detail.value
    });
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },

  radioChange27: function (e) {
    this.setData({
      text27: e.detail.value
    });
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },

  radioChange28: function (e) {
    this.setData({
      text28: e.detail.value
    });
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },

  count: function (e) { 
    var EI = parseInt(this.data.text1) + parseInt(this.data.text2) + parseInt(this.data.text3) + parseInt(this.data.text4) + parseInt(this.data.text5) + parseInt(this.data.text6) + parseInt(this.data.text7)
    var NS = parseInt(this.data.text8) + parseInt(this.data.text9) + parseInt(this.data.text10) + parseInt(this.data.text11) + parseInt(this.data.text12) + parseInt(this.data.text13) + parseInt(this.data.text14)
    var FT = parseInt(this.data.text15) + parseInt(this.data.text16) + parseInt(this.data.text17) + parseInt(this.data.text18) + parseInt(this.data.text19) + parseInt(this.data.text20) + parseInt(this.data.text21)
    var JP = parseInt(this.data.text22) + parseInt(this.data.text23) + parseInt(this.data.text24) + parseInt(this.data.text25) + parseInt(this.data.text26) + parseInt(this.data.text27) + parseInt(this.data.text28);
  
    var result = ''
    if (EI < 4) {
      result = 'I'
    }
    else {
      result = 'E'
    };
    if (NS < 4) {
      result += 'S'
    }
    else {
      result += 'N'
    };
    if (FT < 4) {
      result += 'T'
    }
    else {
      result += 'F'
    };
    if (JP < 4) {
      result += 'P'
    }
    else {
      result += 'J'
    };
  
    var explain, job;
    switch (result) {
      case 'ISTJ': 
        explain = "严肃、少言、依靠精力集中，通过全面性和可靠性获得成功。注重实践、有秩序、实事求是、有逻辑、现实、值得信赖。他们自己决定该做什么并不愿反对和干扰，并坚定不移地朝着目标前进，不易分心。喜欢将工作、家庭和生活都安排得井井有条。重视传统和忠诚。"
        job = "首席信息系统执行官，天文学家，数据库管理，会计，房地产经纪人，侦探，行政管理，信用分析师"
        break
      case 'ISFJ': 
        explain = "少言、友善、有责任感和良知。坚定地致力于完成他们的义务。可以使任何项目和群体更加稳定。忠诚、体贴、周到、刻苦、精确，他们的兴趣通常不是技术性的。有洞察力，能对必要的细节有耐心，关心他人的感受。努力把工作和家庭环境营造得有序而温馨。"
        job = "内科医生，营养师，图书 / 档案管理员，室内装潢设计师，客户服务专员，记账员，特殊教育教师，酒店管理"
        break
      case 'INFJ': 
        explain = "沉静地坚强、责任心强、关心他人、富创造力，坚持自己的价值观。全力投入自己的工作。因其坚定的原则而受尊重。寻求思想、关系、物质等之间的意义和联系。希望了解什么能够激励人，对人有很强的洞察力。对于怎样更好的服务大众有清晰的远景,别人可能会尊重和追随他们。在对于目标的实现过程中有计划而且果断坚定。"
        job = "特殊教育教师，建筑设计师，培训经理 / 培训师，职业策划咨询顾问，心理咨询师，网站编辑，作家，仲裁人"
        break
      case 'INTJ': 
        explain = "具有创造性的思想，并大力推动他们自己的主意和目标。目光远大、能很快洞察到外界事物间的规律并形成长期的远景计划。一旦决定做一件事就会开始规划并直到完成为止。在吸引他们的领域,他们有很好的能力去组织工作并将其进行到底。不轻信、具批判性、独立性、有决心，对于自己和他人的能力和表现要求都非常高。"
        job = "首席财政执行官， 知识产权律师，设计工程师，精神分析师，心脏病专家，媒体策划，网络管理员，建筑师"
        break
      case 'ISTP': 
        explain = "是个安静的观察者直到有问题发生，就会马上行动。自制、以独有的好奇心和出人意料的有创意的幽默，观察和分析生活。分析事物运作的原理，对于原因和结果感兴趣，能从大量的信息中很快的找到关键的症结所在，用逻辑的方式处理问题，重视效率。"
        job = "信息服务业经理，计算机程序员，警官，软件开发员，律师助理，消防员，私人侦探，药剂师"
        break
      case 'ISFP': 
        explain = "羞怯、友善、敏感、和谐、谦虚看待自己的能力。不喜欢争论和冲突，不将自己的观点和价值观强加于人。喜欢有自己的空间，喜欢能按照自己的时间表工作。一般说,无意于做领导工作,但对于自己的价值观和自己觉得重要的人非常忠诚，有责任心。他们享受眼前的乐趣,所以事情做完经常松懈而不愿让过度的紧迫和费事来破坏这种享受。" 
        job = "室内装潢设计师，按摩师，客户服务专员，服装设计师，厨师，护士，牙医，旅游管理"
        break
      case 'INFP': 
        explain = "沉稳的观察者、理想主义、忠实、希望外部的生活和自己内心的价值观是统一的。有求知欲, 很快能看到事情的可能性,能成为实现想法的催化剂。只要某种价值观不受到威胁,他们都善于适应、灵活、善于接受。愿意谅解别人和了解充分发挥人潜力的方法。对财富和周围的事物不太关心。"
        job = "心理学家，人力资源管理， 翻译，大学教师（人文学科），社会工作者， 图书管理员，服装设计师，编辑 / 网站设计师"
        break
      case 'INTP': 
        explain = "安静、内向、灵活、适应力强。喜欢理论性的和抽象的事物，热衷于思考而非社交活动。对于自己感兴趣的领域有超凡的集中精力和深度解决问题的能力。谋求他们的某些特别的爱好能得到运用的那些职业。多疑，有时会有点挑剔，喜欢分析。"
        job = "软件设计师，风险投资家，法律仲裁人，金融分析师，大学教师（经济学），音乐家，知识产权律师，网站设计师"
        break
      case 'ESTP': 
      explain = "擅长于现场解决问题，注重当前，自然不做作。喜欢行动,不喜多加解释。对任何的进展都感到高兴。往往喜好机械的东西和运动,享受和他人在一起的时刻。善应变、容忍、重实效，注重结果，觉得理论和抽象的解释非常无趣。最喜好能干好、能掌握、能分析、能合一的交际事物。学习新事物最有效的方式是通过亲身感受和练习，喜欢物质享受和时尚。"
      job = "企业家，股票经纪人，保险经纪人，土木工程师，旅游管理，职业运动员 / 教练，电子游戏开发员，房产开发商"
        break
      case 'ESFP': 
        explain = "开朗、随和、友善、接受力强。热爱生活、人类和物质上的享受。喜欢和别人一起将事情做成功。喜欢行动并力促事情发生。他们了解正在发生的事情并积极参与。在工作中讲究常识和实用性，并使工作显得有趣。在需要丰富的知识和实际能力的情况下表现最佳。灵活、自然不做作，对于新的任何事物都能很快地适应，学习新事物最有效的方式是和他人一起尝试。"
        job = "幼教老师，公关专员，职业策划咨询师， 旅游管理 / 导游，促销员， 演员，海洋生物学家，销售"
        break
      case 'ENFP': 
        explain = "热情洋溢、极富朝气、机敏、富于想象力，认为人生有很多的可能性。能很快地将事情和信息联系起来，然后很自信地根据自己的判断解决问题。常常依据他们自己的能力去即席成事, 而不是事先准备。几乎能够做他们感兴趣的任何事情，对任何困难都能迅速给出解决办法。总是需要得到别人的认可，也总是准备着给与他人赏识和帮助。经常能对他们想做的任何事情找到令人信服的理由。灵活、自然不做作，有很强的即兴发挥的能力，言语流畅。"
        job = "广告客户管理，管理咨询顾问，演员，平面设计师，艺术指导，公司团队培训师，心理学家，人力资源管理"
        break
      case 'ENTP': 
        explain = "敏捷、睿智、有发明天才,长于许多事情。有激励别人的能力、机警、直言不讳。可能出于逗趣而争论问题的任何一个方面。在解决新的、具有挑战性的问题时机智而有策略，不喜欢例行公事，很少会用相同的方法做相同的事情，易把兴趣从一点转移到另一点。能够轻而易举地为他们的要求找到合乎逻辑的理由。善于找出理论上的可能性，然后再用战略的眼光分析。善于理解别人"
        job = "企业家，投资银行家，广告创意总监，市场管理咨询顾问，文案，广播 / 电视主持人，演员，大学校长"
        break
      case 'ESTJ': 
        explain = "实际、现实主义、果断、迅速行动起来执行决定。由于有天生的商业或机械学头脑，所以对抽象理论不感兴趣。善于将项目和人组织起来将事情完成，并尽可能用最有效率的方法得到结果，在实施计划时强而有力。喜欢组织和参与活动，通常能做优秀的领导人。注重日常的细节，有一套非常清晰的逻辑标准，有系统性地遵循，并希望他人也同样遵循。"
        job = "公司首席执行官，军官，预算分析师，药剂师，房地产经纪人，保险经纪人，教师（贸易 / 工商类），物业管理"
        break
      case 'ESFJ': 
        explain = "热心、健谈、受欢迎、有责任心、天生的合作者、积极的委员会成员。要求和谐并可能长于创造和谐，并为此果断地执行。喜欢和他人一起精确并及时地完成任务。事无巨细都会保持忠诚。能体察到他人在日常生活中的所需并竭尽全力帮助。在得到鼓励和赞扬时工作最出色。主要的兴趣在于那些对人们的生活有直接和明显的影响的事情。"
        job = "房地产经纪人，零售商，护士，理货员 / 采购，按摩师，运动教练，饮食业管理，旅游管理"
        break
      case 'ENFJ': 
        explain = "敏感、热情、为他人着想、有责任心。真正地关心他人的所想所愿。善于发现他人的潜能，并希望能帮助他们实现。处理事情时尽量适当考虑别人的感情。能成为个人或群体成长和进步的催化剂。能提出建议或轻松而机智地领导小组讨论。喜社交、受欢迎、有同情心。对表扬和批评敏感。"
        job = "广告客户管理，杂志编辑，公司培训师，电视制片人，市场专员，作家,社会工作者，人力资源管理"
        break
      case 'ENTJ': 
        explain = "直率、果断, 有天生的领导能力。能很快看到公司/组织程序和政策中的不合理性和低效能性，发展并实施有效和全面的系统来解决问题。善于做长期的计划和目标的设定。长于需要论据和机智谈吐的任何事情, 如公开演讲之类。通常见多识广，博览群书，喜欢拓广自己的知识面并将此分享给他人。在陈述自己的想法时非常强而有力。"
        job = "公司首席执行官，管理咨询顾问，政治家，房产开发商，教育咨询顾问，投资顾问，法官"
        break
    };
    
    if (!isNaN(EI) || !isNaN(NS) || !isNaN(FT) || !isNaN(JP)) {
      wx.navigateTo({
        delta: 2,
        url: '../mbti-result/mbti-result?result=' + result + '&explain=' + explain + '&job=' + job,
      })
    }
    else {
      wx.showToast({
        title: '请检查是否填写完毕！',
        icon: 'none',
        duration: 2000
      });
    };
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})