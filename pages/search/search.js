// pages/search/search.js
Page({
   // 页面的初始数据
   data: {
      searchCursor: "",
      dataList: [],
      storageData: "",
      searchValue:""
   },
   // 点击搜索按钮
   bindConfirmr: function(event) {
      if (event.detail.value) {
         this.setData({
            searchCursor: 1,
            dataList: [
               { id: 1, title: "好文分享1", classType:"七年级·领先课堂", image: "/images/eg2.jpg" },
               { id: 2, title: "好文分享2", classType:"八年级·汇智课堂", image: "/images/eg2.jpg" }
            ]
         })
         let storageArr = wx.getStorageSync("search") || [];
         if (storageArr.indexOf(event.detail.value) == -1) {
            storageArr.unshift(event.detail.value);
         }
         wx.setStorageSync("search", storageArr);
      }
   },
   clickClass:function(event){
      console.log(event);
      wx.navigateTo({
         url: '/pages/curriculum/curriculumDetail/curriculumDetail?id=' + event.currentTarget.dataset.id + "&classType=" + event.currentTarget.dataset.classType + "&classTitle=" + event.currentTarget.dataset.title
      })
   },
   // input内容变化监听
   bindInput: function(event) {
      this.setData({
         searchValue: event.detail.value,
         storageData: wx.getStorageSync('search')
      })
      if (event.detail.cursor == 0) {
         this.setData({
            searchCursor: 0,
            storageData: wx.getStorageSync('search')
         })
      }
   },
   // 点击缓存按钮
   handleClick: function(event) {
      var searchValue = event.currentTarget.dataset.storageValue;
      this.setData({
         searchValue: searchValue
      })
   },
   // 点击清除按钮
   clearTap:function(event){
      this.setData({
         searchValue : "",
         searchCursor:0,
         storageData: wx.getStorageSync('search')
      })
   },
   // 点击input旁边搜索按钮
   searchTap:function(event){
      if (this.data.searchValue) {
         this.setData({
            searchCursor: 1,
            dataList: [{
               id: 1,
               title: "好文分享1",
               image: "/images/eg2.jpg"
            },
            {
               id: 2,
               title: "好文分享2",
               image: "/images/eg2.jpg"
            }
            ]
         })
         let storageArr = wx.getStorageSync("search") || [];
         if (storageArr.indexOf(this.data.searchValue) == -1) {
            storageArr.unshift(this.data.searchValue);
         }
         wx.setStorageSync("search", storageArr);
      }
   },
   clearStorage:function(event){
      wx.removeStorageSync("search");
      this.setData({
         storageData: wx.getStorageSync('search')
      })
   },
   // 生命周期函数--监听页面加载
   onLoad: function(options) {
      this.setData({
         storageData: wx.getStorageSync('search')
      })
   }
})