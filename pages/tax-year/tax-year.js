// pages/tax-year/tax-year.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
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
   })

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

  }
})