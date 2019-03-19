// pages/eq-test/eq-test.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time: 3, 
    items1: [{
      name: '是的',
      value: 6
    },
    {
      name: '不一定',
      value: 3
    },
    {
      name: '不是的',
      value: 0
    }
    ],

    items2: [{
      name: '和从前相仿',
      value: 6
    },
    {
      name: '不一定',
      value: 3
    },
    {
      name: '和从前不一样',
      value: 0
    }
    ],

    items4: [{
      name: '不是的',
      value: 6
    },
    {
      name: '不一定',
      value: 3
    },
    {
      name: '是的',
      value: 0
    }
    ],

    items5: [{
      name: '从未如此',
      value: 6
    },
    {
      name: '偶尔如此',
      value: 3
    },
    {
      name: '有时如此',
      value: 0
    }
    ],

    items6: [{
      name: '我仍能专心工作',
      value: 6
    },
    {
      name: '介于二者之间',
      value: 3
    },
    {
      name: '我不能专心且感到愤怒',
      value: 0
    }
    ],

    items9: [{
      name: '是的',
      value: 6
    },
    {
      name: '介于二者之间',
      value: 3
    },
    {
      name: '不是的',
      value: 0
    }
    ],

    items10: [{
      name: '是的',
      value: 5
    },
    {
      name: '介于二者之间',
      value: 2
    },
    {
      name: '不是的',
      value: 0
    }
    ],

    items11: [{
      name: '是的',
      value: 5
    },
    {
      name: '不太确定',
      value: 2
    },
    {
      name: '不是的',
      value: 0
    }
    ],

    items12: [{
      name: '极易入睡',
      value: 5
    },
    {
      name: '介于二者之间',
      value: 2
    },
    {
      name: '不易入睡',
      value: 0
    }
    ],

    items13: [{
      name: '不露声色',
      value: 5
    },
    {
      name: '介于二者之间',
      value: 2
    },
    {
      name: '大声抗议，以泄己愤',
      value: 0
    }
    ],

    items16: [{
      name: '不是的',
      value: 5
    },
    {
      name: '不太确定',
      value: 2
    },
    {
      name: '是的',
      value: 0
    }
    ],

    items17: [{
      name: '从来没有',
      value: 5
    },
    {
      name: '偶尔有过',
      value: 2
    },
    {
      name: '这是常有的事',
      value: 0
    }
    ],

    items18: [{
      name: '没有',
      value: 5
    },
    {
      name: '记不清',
      value: 2
    },
    {
      name: '有',
      value: 0
    }
    ],


    items20: [{
      name: '从来没有想过',
      value: 5
    },
    {
      name: '偶尔有想到过',
      value: 2
    },
    {
      name: '经常想到',
      value: 0
    }
    ],

    items21: [{
      name: '否',
      value: 5
    },
    {
      name: '说不清楚',
      value: 2
    },
    {
      name: '是',
      value: 0
    }
    ],

    items22: [{
      name: '否',
      value: 5
    },
    {
      name: '不清楚',
      value: 2
    },
    {
      name: '是',
      value: 0
    }
    ],

    items23: [{
      name: '否',
      value: 5
    },
    {
      name: '偶尔是',
      value: 2
    },
    {
      name: '是',
      value: 0
    }
    ],

    items26: [{
      name: '是',
      value: 0
    },
    {
      name: '否',
      value: 5
    }
    ],

    items30: [{
      name: '1',
      value: 1
    },
    {
      name: '2',
      value: 2
    },
    {
      name: '3',
      value: 3
    },
    {
      name: '4',
      value: 4
    },
    {
      name: '5',
      value: 5
    }
    ],
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

  radioChange29: function (e) {
    this.setData({
      text29: e.detail.value
    });
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },
  
  radioChange30: function (e) {
    this.setData({
      text30: e.detail.value
    });
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },

  radioChange31: function (e) {
    this.setData({
      text31: e.detail.value
    });
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },

  radioChange32: function (e) {
    this.setData({
      text32: e.detail.value
    });
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },

  radioChange33: function (e) {
    this.setData({
      text33: e.detail.value
    });
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },

  count: function (e) {
    var text1 = parseInt(this.data.text1);
    var text2 = parseInt(this.data.text2);
    var text3 = parseInt(this.data.text3);
    var text4 = parseInt(this.data.text4);
    var text5 = parseInt(this.data.text5);
    var text6 = parseInt(this.data.text6);
    var text7 = parseInt(this.data.text7);
    var text8 = parseInt(this.data.text8);
    var text9 = parseInt(this.data.text9);
    var text10 = parseInt(this.data.text10);
    var text11 = parseInt(this.data.text11);
    var text12 = parseInt(this.data.text12);
    var text13 = parseInt(this.data.text13);
    var text14 = parseInt(this.data.text14);
    var text15 = parseInt(this.data.text15);
    var text16 = parseInt(this.data.text16);
    var text17 = parseInt(this.data.text17);
    var text18 = parseInt(this.data.text18);
    var text19 = parseInt(this.data.text19);
    var text20 = parseInt(this.data.text20);
    var text21 = parseInt(this.data.text21);
    var text22 = parseInt(this.data.text22);
    var text23 = parseInt(this.data.text23);
    var text24 = parseInt(this.data.text24);
    var text25 = parseInt(this.data.text25);
    var text26 = parseInt(this.data.text26);
    var text27 = parseInt(this.data.text27);
    var text28 = parseInt(this.data.text28);
    var text29 = parseInt(this.data.text29);
    var text30 = parseInt(this.data.text30);
    var text31 = parseInt(this.data.text31);
    var text32 = parseInt(this.data.text32);
    var text33 = parseInt(this.data.text33); 
   
    var score = text1 + text2 + text3 + text4 + text5 + text6 + text7 + text8 + text9 + text10 + + text11 + text12 + text13 + text14 + text15 + text16 + text17 + text18 + text19 + text20 + text21 + text22 + text23 + text24 + text25 + text26 + text27 + text28 + text29 + text30 + text31 + text32 +text33; 

    var explain;
    if (score >= 150) {
      explain = '你是个EQ高手，你的情绪智慧不但是你事业的阻碍，更是你事业有成的一个重要前提条件。'
    }
    else if (score >= 130) {
      explain = '你的EQ较高，你是个快乐的人，不易恐惧担扰，对于工作你热情投入、敢于负责，你为人更是正义正直、同情关怀，这是你的优点，应该努力保持。'
    }
    else if (score >= 90) {
      explain = '你的EQ一般，对于一件事，你不同时候的表现可能不一，这与你的意识有关，你比较具有EQ意识，但这种意识不是常常都有，因此需要你多加注意、时时提醒。'
    }
    else {
      explain = '你的EQ较低，你常常不能控制自己，你极易被自己的情绪所影响。很多时候，你容易被激怒、动火、发脾气，这是非常危险的信号——你的事业可能会毁于你的急躁，对于此，最好的解决办法是能够给不好的东西一个好的解释，保持头脑冷静，使自己心情开朗，正如富兰克林所说：“任何人生气都是有理的，但很少有令人信服的理由。”'
    };

  if (!isNaN(score)) {
    wx.navigateTo({
      delta: 2,
      url: '../eq-result/eq-result?score=' + score + '&explain=' + explain,
    }) 
    } else {
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
    this.data.Time = setInterval(() => {
      this.setData({
        time: --this.data.time
      })
      if (this.data.time <= 0) {
        clearInterval(this.data.Time)
        this.count();
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