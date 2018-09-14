// pages/pieceShare/pieceShare.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     currentTab:"0",
     autoHeight:1600,
     dataList: [
        { id: 1, title: "好文分享1", image: "/images/eg2.jpg" }, { id: 2, title: "好文分享2", image: "/images/eg2.jpg" }, 
        { id: 3, title: "好文分享3", image: "/images/eg2.jpg" }, { id: 4, title: "好文分享4", image: "/images/eg2.jpg" },
        { id: 5, title: "好文分享5", image: "/images/eg2.jpg" }, { id: 6, title: "好文分享6", image: "/images/eg2.jpg" },
        { id: 7, title: "好文分享7", image: "/images/eg2.jpg" }, { id: 8, title: "好文分享8", image: "/images/eg2.jpg" },
        { id: 9, title: "好文分享9", image: "/images/eg2.jpg" }, { id: 10, title: "好文分享10", image: "/images/eg2.jpg" },
        { id: 11, title: "好文分享11", image: "/images/eg2.jpg" },{ id: 12, title: "好文分享12", image: "/images/eg2.jpg" }
     ]
  },
   catchtap:function(event){
      wx.navigateTo({
         url: '/pages/pieceShare/pieceShareList/pieceShareList?classId=' + event.currentTarget.dataset.classId +
            "&classTitle=" + event.currentTarget.dataset.classTitle,
      })
   },
   handleChange:function(event){
      this.setData({
         currentTab: event.detail.key
      });
   },
   bindchange: function (event) {
      this.setData({
         currentTab: event.detail.current,
      });
   },
   clickClass:function(event){
      wx.navigateTo({
         url: '/pages/pieceShare/pieceShareDetail/pieceShareDetail?Id=' + event.currentTarget.dataset.id
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