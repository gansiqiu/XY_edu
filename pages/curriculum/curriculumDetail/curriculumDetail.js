// pages/curriculum/curriculumDetail/curriculumDetail.js
Page({

   /**
    * 页面的初始数据
    */
   data: {
      id: "",
      classType:"",
      collectFlag:0     //0:未收藏，1:已收藏
   },
   // 添加至收藏
   collectTap: function(event) {
      if(this.data.collectFlag){
         this.setData({
            collectFlag: 0
         })
      }else{
         this.setData({
            collectFlag: 1
         })
      }
   },
   /**
    * 生命周期函数--监听页面加载
    */
   onLoad: function(options) {
      this.setData({
         id: options.id,
         classType: options.classType
      })
      wx.setNavigationBarTitle({
         title: options.classTitle,
      })
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