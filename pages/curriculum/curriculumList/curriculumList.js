// pages/curriculum/curriculumList/curriculumList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     classType:"",
     classTitle:"",
      dataList: [
         { id: 1, title: "领先课堂1", image: "/images/eg.jpg" }, { id: 2, title: "领先课堂2", image: "/images/eg.jpg" },            { id: 3, title: "领先课堂3", image: "/images/eg.jpg" }, { id: 4, title: "领先课堂4", image: "/images/eg.jpg" },
         { id: 5, title: "领先课堂5", image: "/images/eg.jpg" }, { id: 6, title: "领先课堂6", image: "/images/eg.jpg" },
         { id: 7, title: "领先课堂7", image: "/images/eg.jpg" }, { id: 8, title: "领先课堂8", image: "/images/eg.jpg" },
         { id: 9, title: "领先课堂9", image: "/images/eg.jpg" }, { id: 10, title: "领先课堂10", image: "/images/eg.jpg" },
         { id: 11, title: "领先课堂11", image: "/images/eg.jpg" }, { id: 12, title: "领先课堂1", image: "/images/eg.jpg" }
      ]
  },
   clickClass:function(event){
      wx.navigateTo({
         url: '/pages/curriculum/curriculumDetail/curriculumDetail?id=' + event.currentTarget.dataset.id + "&classType=" + this.data.classType + "&classTitle=" + event.currentTarget.dataset.title
      })
   },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     wx.setNavigationBarTitle({
        title: options.classTitle,
     })
     this.setData({
         classType: options.classTitle
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