Page({
  tapName:function(event){
      console.log("tapName");
  },
  onTap:function(){
    //console.log("onTap");
    wx.redirectTo({
       url: '../posts/post',
       success: function(res){
         // success
       },
       fail: function() {
         // fail
       },
       complete: function() {
         // complete
       }
     })
  }
})