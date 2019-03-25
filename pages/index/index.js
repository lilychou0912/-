//index.js
//获取应用实例
var app = getApp()
var calc = require("../../utils/calc")
Page({
  data: {
    calc: {},
    tapped: {}
  },
  showAbout: function(e){
    wx.showModal({
      title: '关于',
      content: '一个简单的计算器 @V1.0',
      showCancel: false  
    })
  },
  btnClicked: function(e){
    var code = e.target.dataset.op
    calc.addOp(code)
    console.log(calc.getVars())
    this.setData({calc: calc.getVars()})
  },
  btnTouchStart: function(e){
    var code = e.target.dataset.op
    var tapped = {[code]: 'active'}
    this.setData({tapped: tapped})
  },
  btnTouchEnd: function(e){
    var code = e.target.dataset.op
    var tapped = {}
    this.setData({tapped: tapped})
  },
  questionCal : function(){
    wx.showModal({
      title: '提示',
      content: '根号、幂次方、e^x以及ln都是在默认状态下先输入算术符再输入数字。要给输入的数字添加负号，先输入数字，再点击（-）。',
      confirmColor: '#ff8a65',
    })
  },
  onLoad: function () {
    console.log('onLoad')
    calc.reset()
    var that = this
  }
})
