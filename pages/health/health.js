// pages/health/health.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    focus: true,
    height: '',
    weight: '',
    result: null,
    logs: [],
    index: NaN,
    sex: ['男', '女'],
    age: '',
    height2: '',
    weight2: '',
    result2: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    

  },
  bindChange: function (e) {

    var that = this;
    that.setData({ currentTab: e.detail.current });

  },
  /** 
   * 点击tab切换 
   */
  swichNav: function (e) {

    var that = this;

    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },

  getHeight: function (e) {
    this.setData({
      height: e.detail.value,
    });
    if (this.data.height > 210) {
      this.alert(); this.setData({ height: '' }); return;
    }
  },

  getWeight: function (e) {
    this.setData({
      weight: e.detail.value,
    });
    if (this.data.weight > 200) {
      this.alert(); this.setData({ weight: '' }); return;
    }
  },
  process: function (e) {
    if (this.data.height == '' || this.data.weight == '') {
      this.alert(); return;
    }
    var a = this.data.height * this.data.height / 10000;
    var resultBmi = (this.data.weight / a).toFixed(2);
    if (resultBmi <= 18.5) {
      this.setData({ result: "BMI为：" + resultBmi + "\n   体重过轻" });
    } else if (resultBmi > 18.5 && resultBmi <= 23.9) {
      this.setData({ result: "BMI为：" + resultBmi + "\n   体重正常" });
    } else if (resultBmi > 23.9 && resultBmi <= 28) {
      this.setData({ result: "BMI为：" + resultBmi + "\n   体重过重" });
    } else if (resultBmi > 28 && resultBmi <= 32) {
      this.setData({ result: "BMI为：" + resultBmi + "\n   体重肥胖" });
    } else {
      this.setData({ result: "BMI为：" + resultBmi + "\n   非常肥胖" });
    }
    this.data.logs.push("身高：" + this.data.height + "   体重：" + this.data.weight + "\n" + this.data.result);
    wx.setStorageSync("logs", this.data.logs);
  },
  alert: function () {
    wx.showToast({
      title: '请输入正确数据哟，谢谢合作~',
      icon: 'none',
      duration: 2000
    });
  },

  bindPickerChange2: function (e) {
    this.setData({
      index: e.detail.value
    })
  },
  getAge: function (e) {
    this.setData({ age: e.detail.value });
    if (this.data.age > 120) {
      this.alert2(); this.setData({ age: '' }); return;
    }
  },
  getHeight2: function (e) {
    this.setData({ height2: e.detail.value });
    if (this.data.height2 > 210) {
      this.alert2(); this.setData({ height2: '' }); return;
    }
  },
  getWeight2: function (e) {
    this.setData({ weight2: e.detail.value });
    if (this.data.weight2 > 200) {
      this.alert2(); this.setData({ weight2: '' }); return;
    }
  },
  bmrman: function (e) {
    var resultbmr;
    var height2 = this.data.height2;
    var weight2 = this.data.weight2;
    var age = this.data.age;
    resultbmr = 13.7 * weight2;
    resultbmr = 5 * height2 + resultbmr;
    resultbmr = 66 - 6.8 * age + resultbmr;
    return resultbmr;
  },
  bmrwoman: function (e) {
    var resultbmr;
    var height2 = this.data.height2;
    var weight2 = this.data.weight2;
    var age = this.data.age;
    resultbmr = 9.6 * weight2;
    resultbmr = 1.8 * height2 + resultbmr;
    resultbmr = 655 - 4.7 * age + resultbmr;
    return resultbmr;
  },
  process2: function () {
    if (this.data.index == NaN || this.data.age == '' || this.data.height2 == '' || this.data.weight2 == '') {
      this.alert2(); return;
    }
    else if (this.data.index == 0) {
      this.setData({ result2: "基础代谢为：" + this.bmrman() + "kJ" });
    } else if (this.data.index == 1) {
      this.setData({ result2: "基础代谢为：" + this.bmrwoman() + "kJ" });
    }
  this.data.logs.push("性别：" + this.data.sex[this.data.index] + "  年龄：" + this.data.age +"  身高：" +this.data.height + "   体重：" + this.data.weight + "\n" + this.data.result);
    wx.setStorageSync("logs", this.data.logs);
  },
  alert2: function () {
    wx.showToast({
      title: '请输入正确数据哟，谢谢合作~',
      icon: 'none',
      duration: 2000
    });
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
    var logs = wx.getStorageSync('logs') || [];
    this.setData({ "logs": logs });
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