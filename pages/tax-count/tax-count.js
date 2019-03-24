// pages/tax-count/tax-count.js
var wxCharts = require('../../utils/wxcharts.js');
var app = getApp();
var pieChart = null;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    userSalary: '',
    value: '',
    need: '',
    total: '',
    title: '',
    commonRate: '',
    medicalRate: '',
    jobRate: '',
    oldFee: '',
    jobFee: '',
    medicalFee: '',
    houseFee: '',
    taxarray: '',
    month: '',
    shouldTax: '',
    otherFee: '',
    specialFee: ''
    
  },
  touchHandler: function (e) {
        console.log(pieChart.getCurrentDataIndex(e));
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      userSalary: options.userSalary,
      sum: options.str,
      value: options.value,
      need: options.need,
      total: options.total,
      title: options.title,
      commonRate: options.commonRate,
      medicalRate: options.medicalRate,
      jobRate: options.jobRate,
      oldFee: options.oldFee,
      jobFee: options.jobFee,
      medicalFee: options.medicalFee,
      houseFee: options.houseFee,
      taxarray: JSON.parse(options.taxarray),
      month: options.month,
      shouldTax: options.shouldTax,
      otherFee: options.otherFee,
      specialFee: options.specialFee,
    })

    var windowWidth = 320;
    var oldFee = Number(this.data.oldFee);
    var medicalFee = Number(this.data.medicalFee);
    var jobFee = Number(this.data.jobFee);
    var houseFee = Number(this.data.houseFee);
    var otherFee = Number(this.data.otherFee);
    var specialFee = Number(this.data.specialFee);
    var sum = Number(this.data.sum);
    var taxarray = this.data.taxarray;
    var month = parseInt(this.data.month);

    try {
     var res = wx.getSystemInfoSync();
      windowWidth = res.windowWidth;
    } catch (e) {
      console.error('getSystemInfoSync failed!');
    }
    pieChart = new wxCharts({
      animation: true,
      canvasId: 'pieCanvas',
      type: 'pie',
      series: [{
        name: '养老保险金',
        data: oldFee, 
        color: '#8d6868',
      }, {
        name: '医疗保险金',
          data: medicalFee,
      }, {
        name: '失业保险金',
          data: jobFee,
          color: '#ff4902',
      }, {
        name: '住房公积金',
          data: houseFee,
      }, {
        name: '个人所得税',
          data: taxarray[month],
      }, {
        name: '专项附加扣除',
          data: specialFee,
      }, {
        name: '其他扣除',
        data: otherFee,
      }, {
        name: '到手工资',
        data: sum,
          color: '#ff8a65',
      }],

      width: windowWidth,
      height: 300,
      dataLabel: true,
    });
  },


  backCount: function (e) {
    wx.navigateBack({
      url: '../tax/tax'
    })
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
    return {
      title: '我工资的月薪是',

      path: '/page/tax-count/tax-count',

      imageUrl: '/images/logo.png'
    }
  }
})