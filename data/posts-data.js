var local_database = [
    {
        date: "Sep 18 2016",
        title: "小程序开发框架的目标",
        imgSrc: "/images/post/crab.png",
        avatar: "/images/avatar/1.png",
        content: "小程序开发框架的目标是通过尽可能简单、高效的方式让开发者可以在微信中开发具有原生 APP 体验的服务。",
        reading: "89",
        collection: "90",
        flag: true,
        headImgSrc: "/images/post/crab.png",
        author: "林白衣",
        dateTime: "24小时前",
        detail: "小程序开发框架的目标是通过尽可能简单、高效的方式让开发者可以在微信中开发具有原生 APP 体验的服务。框架提供了自己的视图层描述语言 WXML 和 WXSS，以及基于 JavaScript 的逻辑层框架，并在视图层与逻辑层间提供了数据传输和事件系统，可以让开发者可以方便的聚焦于数据与逻辑上。",
        postId: "0",
    }, {
        date: "Sep 19 2016",
        title: "微信小程序说明文档",
        imgSrc: "/images/post/sls.jpg",
        avatar: "/images/avatar/5.png",
        content: "本文档将带你一步步创建完成一个微信小程序，并可以在手机上体验该小程序的实际效果。这个小程序的首页将会显示欢迎语以及当前用户的微信头像，点击头像，可以在新开的页面中查看当前小程序的启动日志。",
        reading: "89",
        collection: "90",
        flag: true,
        headImgSrc: "/images/post/sls.jpg",
        author: "呵呵笑很重要",
        dateTime: "48小时前",
        detail: "我们需要通过开发者工具，来完成小程序创建和代码编辑。开发者工具安装完成后，打开并使用微信扫码登录。选择创建“项目”，填入上文获取到的 AppID ，设置一个本地项目的名称（非小程序名称），比如“我的第一个项目”，并选择一个本地的文件夹作为代码存储的目录，点击“新建项目”就可以了。为方便初学者了解微信小程序的基本代码结构，在创建过程中，如果选择的本地文件夹是个空文件夹，开发者工具会提示，是否需要创建一个 quick start 项目。选择“是”，开发者工具会帮助我们在开发目录里生成一个简单的 demo。",
        postId: "1",
    }
];
//定义一个出口
module.exports = {
    postList: local_database
};