// pages/welcome/welcome.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      remind: '加载中',
      angle: 0,
      userInfo: {}
  },
  simpleone:function(){
    wx.navigateTo({
      url: '../index/index'
    });

  },
  complexone:function(){
    wx.showActionSheet({
      itemList: ['智商', '情商', '职业性格','算个人所得税','BMI&基础代谢'],
      success: function (res) {
        if(res.tapIndex==0){
          wx.navigateTo({
            url: '../iq-test/iq-test'
          });
        }
        if(res.tapIndex==1){
          wx.navigateTo({
            url: '../eq-test/eq-test'
          });
        }
        if (res.tapIndex == 2) {
          wx.navigateTo({
            url: '../mbti-test/mbti-test'
          });
        }
        if (res.tapIndex == 3) {
          wx.navigateTo({
            url: '../tax/tax'
          });
        }
        if (res.tapIndex == 4) {
          wx.navigateTo({
            url: '../health/health'
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
    var that = this;
    setTimeout(function () {
      that.setData({
        remind: ''
      });
    }, 1000);
    wx.onAccelerometerChange(function (res) {
      var angle = -(res.x * 30).toFixed(1);
      if (angle > 14) { angle = 14; }
      else if (angle < -14) { angle = -14; }
      if (that.data.angle !== angle) {
        that.setData({
          angle: angle
        });
      }
    });
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