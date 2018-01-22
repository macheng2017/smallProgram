var postsData = require("../../../data/posts-data.js");
Page({
  data:{
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
     //console.log(options.id);
     var id = options.id;
     //将id放入到data变量中以备后用。
     this.data.id = id;
     //this.data.post_key = postsData.postList[id];
   this.setData({ post_key: postsData.postList[id]});
  //从storage中读取文章是否被收藏
  var postCollection = wx.getStorageSync('postCollection');
  if(postCollection){
    this.setData({
      collected:postCollection[id],
  });
}else{
  //如果postCollection 不存在则创建这个变量值,
  //如果postCollection存在，则创建当前索引的文章是收藏为false
    var postCollection = {};
  postCollection[id] = false;
  wx.setStorageSync('postCollection', postCollection);
}
  },onCollectionTap:function(event){
      //通过获取缓存的postCollection变量值判断是否获取已经收藏，
      //如果已经收藏，则改变为未收藏
      //如果为收藏，则改为收藏
      var postCollection_list = wx.getStorageSync('postCollection');
      var postCollection = postCollection_list[this.data.id];
      // if(postCollection[this.data.id]){
      //     postCollection[this.data.id] = false;
      // }else{
      //    postCollection[this.data.id] = true;
      // }
      postCollection = !postCollection;
      postCollection_list[this.data.id] = postCollection;
     
      this.meToast(postCollection,postCollection_list);
      // wx.showToast({
      //  title:postCollection?"收藏成功":"取消成功",
      //     icon:"success",
      //     duration:600,
      //     mask:false,
      // });
  },
  meModal:function(postCollection,postCollection_list){
    var that = this;
        //显示模态弹窗
        wx.showModal({
          title:"收藏",
          content:postCollection?"是否收藏该文章？":"是否取消收藏",
          success:function(res){
          if(res.confirm){
       wx.setStorageSync('postCollection', postCollection_list);
      //设置完成的时候需要实时的刷新变量区，这样就可以做到实时刷新view
      //更新数据绑定的变量，从而实现图片的
              that.setData({collected:postCollection});
              }
          }
        });     
},
meToast:function(postCollection,postCollection_list){
  var that = this;
 wx.showToast({
       title:postCollection?"收藏成功":"取消成功",
          icon:"success",
          duration:600,
          mask:false,
          success:function(res){   
       wx.setStorageSync('postCollection', postCollection_list);
      //设置完成的时候需要实时的刷新变量区，这样就可以做到实时刷新view
      //更新数据绑定的变量，从而实现图片的
              that.setData({collected:postCollection});    
          }
      });
}
})