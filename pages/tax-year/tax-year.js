// pages/tax-year/tax-year.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listData: [
      { "code": "01", "text": "text1", "type": "type1" },
      { "code": "02", "text": "text2", "type": "type2" },
      { "code": "03", "text": "text3", "type": "type3" },
      { "code": "04", "text": "text4", "type": "type4" },
      { "code": "05", "text": "text5", "type": "type5" },
      { "code": "06", "text": "text6", "type": "type6" },
      { "code": "07", "text": "text7", "type": "type7" }
    ]
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