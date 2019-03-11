// pages/welcome/welcome.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  simpleone:function(){
    wx.navigateTo({
      url: '../index/index'
    });

  },
  complexone:function(){
    wx.showActionSheet({
      itemList: ['算智商', '算情商', '算恋商','算个人所得税','算贷款'],
      success: function (res) {
        if(res.tapIndex==0){
          wx.navigateTo({
            url: '../index/index'
          });
        }
        if(res.tapIndex==1){
          wx.navigateTo({
            url: '../index/index'
          });
        }
      },
      fail: function (res) {
        console.log(res.errMsg)
      }
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