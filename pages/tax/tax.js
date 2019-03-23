// pages/tax/tax.js
//获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cityName:"请选择所在城市",
    casArray: ['全年', '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月','12月'],
    casIndex: 0,
    userName: '0',
    specialFee : 0,
    otherFee : 0,
  },
  cityselect: function () {
    wx.navigateTo({
      url: '../cityselect/cityselect'
    });

  },

  bindCasPickerChange: function (e) {
    this.setData({
      casIndex: e.detail.value
    })
  },

  policyBtn : function(){
    wx.navigateTo({
      url: '../policy/policy',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  //获取用户输入
  salaryInput: function (e) {
    this.setData({
      salary: e.detail.value
    })
  },

  specialInput: function (e) {
    this.setData({
      specialFee: e.detail.value
    })
    if (e.detail.value) { specialFee: e.detail.value }
    else {
      specialFee: 0;
    }
  },

  otherInput: function (e) {
    this.setData({
      otherFee: e.detail.value
    })
    if (e.detail.value) { otherFee: e.detail.value }
    else {
      otherFee: 0;
    }
  },
  /*计算函数*/
  count: function (e) {
    var cityName = this.data.cityName;
    var userSalary = parseFloat(this.data.salary); //税前收入
    var month = this.data.casIndex;
    var title = this.data.casArray[month];
    var specialFee = parseFloat(this.data.specialFee); //专项附加扣除
    var otherFee = parseFloat(this.data.otherFee); //其他扣除
    var commonRate = parseFloat(this.data.commonrate);//公积金比例
    var medicalRate = parseFloat(this.data.medicalRate);//医疗保险比例
    var jobRate = parseFloat(this.data.jobRate);//失业保险比例
    var userRadio = 5000; //起征点
    var sum = parseFloat(this.data.sum); //起征点
    var oldFee = 0;//养老保险金
    var medicalFee = 0;//医疗保险金
    var jobFee = 0;//失业保险金
    var houseFee = 0;//住房公积金
    var hurtFee = 0;//工伤保险金
    var babyFee = 0;//生育保险金
    var quickCutNumV = 0; //速算扣除数
    var taxRateV = 0; //适用税率
    var total = 0; //五险一金总计
    var need = 0; //所需个税
    var shouldTax = 0;//应税工资
    var taxArray = [];//每个月应交个税金额

    if(specialFee == NaN)
    {specialFee = 0}
    if(otherFee == NaN)
    {otherFee = 0}

    switch(cityName){
      case"北京":
      case"杭州":
      case"福州":
      case"厦门":
      case"南昌":
      case"南宁":
      case"沈阳":
      case"银川":
      case "请选择所在城市":
      commonRate = 0.12;
      break;
      case"天津":
      commonRate = 0.11;
      break;
      case"太原":
      case"呼和浩特":
      case"西宁":
      case"成都":
      case"贵阳":
      commonRate = 0.06;
      break;
      case"石家庄":
      case"郑州":
      case"海口":
      case"乌鲁木齐":
      case"昆明":
      commonRate = 0.10;
      break;
      case"上海":
      case"济南":
      case"长春":
      case"兰州":
      case"重庆":
      commonRate = 0.07;
      break;
      case"南京":
      case"宁波":
      case"苏州":
      case"合肥":
      case"武汉":
      case"长沙":
      case"哈尔滨":
      commonRate = 0.08;
      break;
      case"青岛":
      case"广州":
      case"深圳":
      case"珠海":
      case"佛山":
      case"东莞":
      case"西安":
      commonRate = 0.05;
      break;
      case"大连":
      commonRate = 0.15;
      break;
      default:
      break;
    }

    switch(cityName){
      case"北京":
      case"广州":
      case"珠海":
      case"佛山":
      case"东莞":
      jobRate = 0.002;
      break;
      case"天津":
      case"哈尔滨":
      case"上海":
      case"南京":
      case"杭州":
      case"宁波":
      case"苏州":
      case"福州":
      case"厦门":
      case"合肥":
      case"南昌":
      case"深圳":
      case"南宁":
      case"海口":
      case"沈阳":
      case"大连":
      case"哈尔滨":
      case"银川":
      case"西宁":
      case"乌鲁木齐":
      case"重庆":
      case "请选择所在城市":
      jobRate = 0.005;
      break;
      case"成都":
      jobRate = 0.004;
      break;
      default:
      jobRate = 0.003;
      break;
    }

    switch(cityName)
    {
      case"佛山":
      medicalRate = 0.015;
      break;
      case"东莞":
      medicalRate = 0.005;
      break;
      default:
      medicalRate = 0.02;
      break;
    }

    oldFee = parseFloat(userSalary * 0.08 );
    oldFee = oldFee.toFixed(2)
    oldFee = parseFloat(oldFee)
    jobFee = parseFloat(userSalary * jobRate);
    jobFee = jobFee.toFixed(2)
    jobFee = parseFloat(jobFee)
    medicalFee = parseFloat(userSalary * medicalRate);
    medicalFee = medicalFee.toFixed(2)
    medicalFee = parseFloat(medicalFee)
    houseFee = parseFloat(userSalary * commonRate);
    houseFee = houseFee.toFixed(2)
    houseFee = parseFloat(houseFee)
    total = (oldFee + jobFee + medicalFee + houseFee).toFixed(2)
    oldFee = oldFee.toFixed(2)
    jobFee = jobFee.toFixed(2)
    medicalFee = medicalFee.toFixed(2)
    houseFee = houseFee.toFixed(2)

     //五险总计得
    //各月纳税情况
    for(var i=1;i<13;i++){
      var cutm = userSalary*i - total*i - userRadio*i - specialFee*i - otherFee*i; ////应纳税所得金额
    switch (cutm) {
      case ((cutm < 0) ? cutm : -1):
          need = 0;
          break;
      case ((cutm >= 0 && cutm <= 36000) ? cutm : -1):
        need = cutm * 0.03;
          need = need.toFixed(2);
          need = parseFloat(need)
          break;
      case ((cutm > 36000 && cutm <= 144000) ? cutm : -1):
          quickCutNumV = 2520;
        need = cutm * 0.1 - parseFloat(quickCutNumV);
          need = need.toFixed(2);
          need = parseFloat(need)
          break;
      case ((cutm > 144000 && cutm <= 300000) ? cutm : -1):
          quickCutNumV = 16920;
        need = cutm * 0.2 - parseFloat(quickCutNumV);
          need = need.toFixed(2);
          need = parseFloat(need)
          break;
      case ((cutm > 300000 && cutm <= 420000) ? cutm : -1):
          quickCutNumV = 31920;
        need = cutm * 0.25 - parseFloat(quickCutNumV);
          need = need.toFixed(2);
          need = parseFloat(need)
          break;
      case ((cutm > 420000 && cutm <= 660000) ? cutm : -1):
          quickCutNumV = 52920;
          need = cutm * 0.3 - parseFloat(quickCutNumV);
          need = need.toFixed(2);
          need = parseFloat(need)
          break;
      case ((cutm > 660000 && cutm <= 960000) ? cutm : -1):
          quickCutNumV = 85920;
        need = cutm * 0.35 - parseFloat(quickCutNumV);
          need = need.toFixed(2);
          need = parseFloat(need)
          break;
        default:
          quickCutNumV = 181920;
        need = cutm * 0.45 - parseFloat(quickCutNumV);
          need = need.toFixed(2);
          need = parseFloat(need)
      }
    if(need !=0){
      var sumTax = 0;
      for(var j=1;j<i;j++){
        sumTax += taxArray[j];
      }
      taxArray[i] = parseFloat(need - sumTax);
      taxArray[i].toFixed(2);
      taxArray[i] = parseFloat(taxArray[i]);
    }
    else{
      taxArray[i] = need;
    }
    };
    taxArray[0] = parseFloat(need);
    
    for(i = 0;i<13;i++){
      taxArray[i].toFixed(2);
    }
    console.log(taxArray);
      //到手总额
    userSalary = parseFloat(userSalary)
    total = parseFloat(total)
    otherFee = parseFloat(otherFee)
    specialFee = parseFloat(specialFee)
    if(month == 0){
      sum = userSalary*12 - taxArray[month] - (total - otherFee - specialFee)*12;
    } else {
      sum = userSalary - taxArray[month] - total - otherFee - specialFee;
    }
      if (sum < 0) {
        sum = 0;
      } else {
        sum = sum.toFixed(2);
      };

      medicalRate = (medicalRate * 100).toFixed(2),
      commonRate = (commonRate * 100).toFixed(2),
      jobRate = (jobRate * 100).toFixed(2)
      userSalary = parseFloat(userSalary)
      total = parseFloat(total)
      otherFee = parseFloat(otherFee)
      specialFee = parseFloat(specialFee)
    shouldTax = ((userSalary - total - otherFee - specialFee) < 0 ? 0 : (userSalary - total - otherFee - specialFee)).toFixed(2)
      userSalary = userSalary.toFixed(2)
      total = total.toFixed(2)
      otherFee = otherFee.toFixed(2)
      specialFee = specialFee.toFixed(2)
      console.log(otherFee)
      console.log(specialFee)

      

    if (userSalary&&cityName) {
      if (month == 0){
        wx.navigateTo({
          delta: 2,
          url: '../tax-year/tax-year?str=' + sum + '&userSalary=' + userSalary + '&need=' + need + '&total=' + total + '&taxarray=' + JSON.stringify(taxArray) + '&value=' + userRadio + '&title=' + title + '&commonRate=' + commonRate + '&medicalRate=' + medicalRate + '&jobRate=' + jobRate + '&oldFee=' + oldFee + '&jobFee=' + jobFee + '&medicalFee=' + medicalFee + '&houseFee=' + houseFee + '&month=' + month + '&shouldTax=' + shouldTax + '&specialFee=' + specialFee + '&otherFee=' + otherFee,
        })
      }
      else{
      wx.navigateTo({
        delta: 2,
        url: '../tax-count/tax-count?str=' + sum + '&userSalary=' + userSalary + '&need=' + need + '&total=' + total + '&taxarray=' + JSON.stringify(taxArray) + '&value=' + userRadio + '&title=' + title + '&commonRate=' + commonRate + '&medicalRate=' + medicalRate + '&jobRate=' + jobRate + '&oldFee=' + oldFee + '&jobFee=' + jobFee + '&medicalFee=' + medicalFee + '&houseFee=' + houseFee + '&month=' + month + '&shouldTax=' + shouldTax + '&specialFee=' + specialFee + '&otherFee=' + otherFee,
      })
    }
    } 
    else {
      wx.showToast({
        title: '请检查一下是否填写完毕哟，谢谢合作~',
        icon: 'none',
        duration: 2000
      });
    };
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
      title: '个税计算器',

      path: '../pages/tax/tax',

      imageUrl: '/images/logo.png'
    }
  }
})