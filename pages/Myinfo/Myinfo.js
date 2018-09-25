// pages/Myinfo/Myinfo.js
Page({

   /**
    * 页面的初始数据
    */
   data: {
      shouquan:0,
      nickname:"",
      headimgurl:""
   },
   // 获取用户信息
   userInfoHandler: function (res) {
      if (res.detail.userInfo) {
         var that = this;
         that.setData({
            shouquan: 1,
            headimgurl: res.detail.userInfo.avatarUrl,
            nickname: res.detail.userInfo.nickName
         })
         wx.showToast({
            title: '获取信息成功'
         })
      } else {
         wx.showToast({
            title: '获取信息失败',
            icon:"none"
         })
      }
   },
   scanClick:function(event){
      wx.scanCode({
         onlyFromCamera:false,
         success:function(res){
            console.log(res);
         }
      })
   },
   clearStorageClick:function(event){
         wx.clearStorageSync();
         wx.showToast({
            title: '清除缓存成功',
         })
   },
   myCollect:function(event){
      wx.navigateTo({
         url: '/pages/Myinfo/myCollect/myCollect',
      })
   },
   /**
    * 生命周期函数--监听页面加载
    */
   onLoad: function(options) {
       
   },

   /**
    * 生命周期函数--监听页面初次渲染完成
    */
   onReady: function() {

   },

   /**
    * 生命周期函数--监听页面显示
    */
   onShow: function() {
       
   },

   /**
    * 生命周期函数--监听页面隐藏
    */
   onHide: function() {

   },

   /**
    * 生命周期函数--监听页面卸载
    */
   onUnload: function() {

   },

   /**
    * 页面相关事件处理函数--监听用户下拉动作
    */
   onPullDownRefresh: function() {

   },

   /**
    * 页面上拉触底事件的处理函数
    */
   onReachBottom: function() {

   },

   /**
    * 用户点击右上角分享
    */
   onShareAppMessage: function() {

   }
})