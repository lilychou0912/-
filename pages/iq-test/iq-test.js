// pages/iq-test/iq-test.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time: 1800,
    score: '0',
    text1: '0',
    text2: '0',
    text3: '0',
    text4: '0',
    text5: '0',
    text6: '0', 
    text7: '0',
    text8: '0',
    text9: '0',
    text10: '0',
    text11: '0',
    text12: '0',
    text13: '0',
    text14: '0',
    text15: '0',
    text16: '0',
    text17: '0',
    text18: '0',
    text19: '0',
    text20: '0',
    text21: '0',
    text22: '0',
    text23: '0',
    text24: '0',
    text25: '0',
    text26: '0',
    text27: '0',
    text28: '0',
    text29: '0',
    text30: '*', 
    items1: [{
      name: '蛇',
      value: '0'
    },
    {
      name: '大树',
      value: '1'
    },
    {
      name: '老虎',
      value: '0'
    }
    ],

    items2: [{
      name: '3/5',
      value: '0'
    },
    {
      name: '3/7',
      value: '0'
    },
    {
      name: '3/9',
      value: '1'
    }
    ],

    items3: [{
      name: '青年',
      value: '0'
    },
    {
      name: '孩子',
      value: '0'
    },
    {
      name: '夫人',
      value: '0'
    },
    {
      name: '姑娘',
      value: '0'
    },
    {
      name: '妇女',
      value: '1'
    }
    ],

    items4: [{
      name: '娱乐',
      value: '0'
    },
    {
      name: '阅读',
      value: '1'
    },
    {
      name: '学文化',
      value: '0'
    },
    {
      name: '解除疲劳',
      value: '0'
    }
    ],

    items5: [{
      name: '牛棚',
      value: '0'
    },
    {
      name: '马车',
      value: '0'
    },
    {
      name: '房屋',
      value: '1'
    },
    {
      name: '农场',
      value: '0'
    },
    {
      name: '楼房',
      value: '0'
    }
    ],

    items7: [{
      name: '是',
      value: '1'
    },
    {
      name: '否',
      value: '0'
    }
    ],

    items8: [{
      name: '是',
      value: '1'
    },
    {
      name: '否',
      value: '0'
    }
    ],

    items9: [{
      name: '人类',
      value: '1'
    },
    {
      name: '问题',
      value: '0'
    },
    {
      name: '社会',
      value: '0'
    },
    {
      name: '社会学',
      value: '0'
    }
    ],

    items10: [{
      name: '更多的大衣',
      value: '0'
    },
    {
      name: '时髦的大衣',
      value: '0'
    },
    {
      name: '大衣',
      value: '1'
    },
    {
      name: '昂贵的大衣',
      value: '0'
    }
    ],

    items12: [{
      name: '西北',
      value: '0'
    },
    {
      name: '东北',
      value: '1'
    },
    {
      name: '西南',
      value: '0'
    },
    {
      name: '东南',
      value: '0'
    }
    ],

    items13: [{
      name: '铁锅',
      value: '0'
    },
    {
      name: '小勺',
      value: '0'
    },
    {
      name: '米饭',
      value: '1'
    },
    {
      name: '碟子',
      value: '0'
    }
    ],

    items15: [{
      name: '写字台',
      value: '0'
      //checked: 'true'
    },
    {
      name: '沙发',
      value: '0'
    },
    {
      name: '电视',
      value: '0'
    },
    {
      name: '桌布',
      value: '1'
    }
    ],

    items17: [{
      name: 'XOO',
      value: '0'
    },
    {
      name: 'OO',
      value: '1'
    },
    {
      name: 'OOX',
      value: '0'
    },
    {
      name: 'OXX',
      value: '0'
    }
    ],

    items18: [{
      name: '揠',
      value: '1'
    },
    {
      name: '堰',
      value: '0'
    },
    {
      name: '偃',
      value: '0'
    }
    ],

    items20: [{
      name: '地板',
      value: '0'
    },
    {
      name: '壁橱',
      value: '0'
    },
    {
      name: '窗户',
      value: '0'
    },
    {
      name: '窗帘',
      value: '1'
    }
    ],

    items25: [{
      name: '斑马',
      value: '0'
    },
    {
      name: '军马',
      value: '0'
    },
    {
      name: '赛马',
      value: '0'
    },
    {
      name: '骏马',
      value: '0'
    },
    {
      name: '驸马',
      value: '1'
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

  radioChange15: function (e) {
    this.setData({
      text15: e.detail.value
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

  radioChange20: function (e) {
    this.setData({
      text20: e.detail.value
    });
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },

  radioChange25: function (e) {
    this.setData({
      text25: e.detail.value
    });
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },

  Input6: function (e) {
    this.setData({
      text6: e.detail.value
    })
  },

  Input11: function (e) {
    this.setData({
      text11: e.detail.value
    })
  },

  Input14: function (e) {
    this.setData({
      text14: e.detail.value
    })
  },

  Input16: function (e) {
    this.setData({
      text16: e.detail.value
    })
  },

  Input19: function (e) {
    this.setData({
      text19: e.detail.value
    })
  },

  Input21: function (e) {
    this.setData({
      text21: e.detail.value
    })
  },

  Input22: function (e) {
    this.setData({
      text22: e.detail.value
    })
  },

  Input23: function (e) {
    this.setData({
      text23: e.detail.value
    })
  },

  Input24: function (e) {
    this.setData({
      text24: e.detail.value
    })
  },

  Input26: function (e) {
    this.setData({
      text26: e.detail.value
    })
  },

  Input27: function (e) {
    this.setData({
      text27: e.detail.value
    })
  },

  Input28: function (e) {
    this.setData({
      text28: e.detail.value
    })
  },

  Input29: function (e) {
    this.setData({
      text29: e.detail.value
    })
  },

  Input30: function (e) {
    this.setData({
      text30: e.detail.value
    })
  },

  count:function (e) {
    var text1 = parseInt(this.data.text1);
    var text2 = parseInt(this.data.text2);
    var text3 = parseInt(this.data.text3);
    var text4 = parseInt(this.data.text4);
    var text5 = parseInt(this.data.text5);
    var text7 = parseInt(this.data.text7);
    var text8 = parseInt(this.data.text8);
    var text9 = parseInt(this.data.text9);
    var text10 = parseInt(this.data.text10);
    var text12 = parseInt(this.data.text12);
    var text13 = parseInt(this.data.text13);
    var text15 = parseInt(this.data.text15);
    var text17 = parseInt(this.data.text17);
    var text18 = parseInt(this.data.text18);
    var text20 = parseInt(this.data.text20);
    var text25 = parseInt(this.data.text25);
    
    var text6 = (this.data.text6 == '26') ? 1 : 0;
    var text11 = (this.data.text11 == '9') ? 1 : 0;
    var text14 = (this.data.text14 == '7') ? 1 : 0; //??
    var text16 = (this.data.text16 == '38') ? 1 : 0;
    var text19 = (this.data.text19 == "美国") ? 1 : 0;
    var text21 = (this.data.text21 == '64') ? 1 : 0;
    var text22 = (this.data.text22 == "科学") ? 1 : 0;
    var text23 = (this.data.text23 == "式") ? 1 : 0;
    var text24 = (this.data.text24 == '60') ? 1 : 0;
    var text26 = (this.data.text26 == "奠") ? 1 : 0;
    var text27 = (this.data.text27 == "脑") ? 1 : 0;
    var text28 = (this.data.text28 == '5') ? 1 : 0;
    var text29 = (this.data.text29 == '36') ? 1 : 0;
    var text30 = (this.data.text30 == '0') ? 1 : 0;


    var score = (text1 + text2 + text3 + text4 + text5 + text7 + text8 + text9 + text10 + text12 + text13 + text15 + text17 + text18 + text20 + text25 + text6 + text11 + text14 + text16 + text19 + text21 + text22 + text23 + text24 + text26 + text27 + text28 + text29 + text30) * 5;
    
    var explain;
    if (score >= 140) {
      explain = '恭喜你，你的测试结果显示你是个天才！'
    }
    else if (score >= 120) {
      explain = '恭喜你，你的测试结果显示你很优秀！'
    }
    else if (score >= 100) {
      explain = '恭喜你，你的测试结果显示你和大多数人的智商一样！'
    }
    else if (this.data.score >= 90) {
      explain = '你的测试结果显示你的智商比较正常！'
    }
    else {
      explain = '不会吧？你的测试结果显示你的智商还未达到正常，要不要再做一次？'
    }

    wx.navigateTo({
      delta: 2,
      url: '../iq-result/iq-result?score=' + score + '&explain=' + explain,
    })
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
    this.data.Time = setInterval(() => {
      this.setData({
        time: --this.data.time
        })
        if (this.data.time <= 0) {
          clearInterval(this.data.Time)
          this.count()
          }
          }, 1000)
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