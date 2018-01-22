var helloData = {
    name:"kitty",
    array:[
      {message:'foo'},
      {message:'bar'}
    ]
}

Page({
  data:helloData,
     changename:function(e){
        this.setData({
            name:"MINA"
        })
   },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
  }  
})