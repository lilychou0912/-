// pages/tax-year/tax-year.js
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
    specialFee: '',
    winWidth: 0,
    winHeight: 0,
    // tab切换 
    currentTab: 0, 
    themeArr: { month: '月份', salary: '税前收入', minus:'扣除总和', tax: '应纳税额', rest: '到手工资' }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this; 
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
      yearSalary : options.yearSalary,
      yearTotal : options.yearTotal,
      yearSpecial : options.yearSpecial,
      yearOther : options.yearOther,
      yeararray: JSON.parse(options.yeararray),
   })

    var windowWidth = 320;
    var yearSalary = Number(this.data.yearSalary);
    var yearTotal = Number(this.data.yearTotal);
    var yearSpecial = Number(this.data.yearSpecial);
    var yearOther = Number(this.data.yearOther);
    var need = Number(this.data.need);
    var sum = Number(this.data.sum);
    wx.getSystemInfo({

      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }

    }); 
    try {
      var res = wx.getSystemInfoSync();
      windowWidth = res.windowWidth;
    } catch (e) {
      console.error('getSystemInfoSync failed!');
    }
    pieChart = new wxCharts({
      animation: true,
      canvasId: 'pieCanvas2',
      type: 'pie',
      series: [{
        name: '全年税前总收入',
        data: yearSalary,
        color: '#8d6868',
      }, {
        name: '全年五险一金总计',
          data: yearTotal,
      }, {
        name: '全年专项附加扣除总计',
          data: yearSpecial,
        color: '#ff4902',
      }, {
        name: '全年其他附加扣除总计',
          data: yearOther,
      }, {
        name: '全年个人所得税总计',
          data: need,
      }, {
        name: '全年到手工资总计',
          data: sum,
      }],

      width: windowWidth,
      height: 300,
      dataLabel: true,
    });

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
  } ,

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

  }
})