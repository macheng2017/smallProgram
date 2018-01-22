App({
  onLaunch: function () {
    console.log("onLaunch_app");
  },
  onShow: function () {
   console.log("onShow_app");
  },
  onHide: function () {
    console.log("onHide");
  },
  onError: function (msg) {
    console.log("onError"+msg);
  }
})