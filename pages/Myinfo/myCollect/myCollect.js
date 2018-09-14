// pages/Myinfo/myCollect/myCollect.js
Page({

   /**
    * 页面的初始数据
    */
   data: {
       currentTab:"0",
       autoHeight: 400,
       dataList:[
           { id: 1, title: "领先课堂1", classType: "七年级·领先课堂", image: "/images/eg.jpg" }, 
           { id: 2, title: "领先课堂2", classType: "七年级·领先课堂", image: "/images/eg.jpg" }, 
           { id: 3, title: "领先课堂3", classType: "七年级·领先课堂", image: "/images/eg.jpg" }, 
           { id: 4, title: "领先课堂4", classType: "七年级·领先课堂", image: "/images/eg.jpg" },
           { id: 5, title: "领先课堂5", classType: "七年级·领先课堂", image: "/images/eg.jpg" }, 
           { id: 6, title: "领先课堂6", classType: "七年级·领先课堂", image: "/images/eg.jpg" }
       ]
   },
    handleChange: function (event) {
        this.setData({
            currentTab: event.detail.key,
            autoHeight: 400 + this.data.dataList.length * 100
        });
    },
    bindchange: function (event) {
        this.setData({
            currentTab: event.detail.current, 
            autoHeight: 400 + this.data.dataList.length * 100
        });
    },
    clickClass:function(event){
        console.log(event)
        wx.navigateTo({
            url: '/pages/curriculum/curriculumDetail/curriculumDetail?id=' + event.currentTarget.dataset.id + "&classType=" + event.currentTarget.dataset.classType + "&classTitle=" + event.currentTarget.dataset.title
        })
    },
   /**
    * 生命周期函数--监听页面加载
    */
   onLoad: function(options) {
      wx.setNavigationBarTitle({
         title: '我的收藏',
      })
       this.setData({
           autoHeight: 400 + this.data.dataList.length*100
       });
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