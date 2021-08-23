Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [{
      pagePath: "/pages/index/index",
      iconPath: "/img/1-n.png",
      selectedIconPath: "/img/1-y.png",
      text: "首页"
    }, {
      pagePath: "/pages/about/index",
      iconPath: "/img/2-n.png",
      selectedIconPath: "/img/2-y.png",
      text: "关于我们"
    }, {
      pagePath: "/pages/case/index",
      iconPath: "/img/3-n.png",
      selectedIconPath: "/img/3-y.png",
      text: "课程中心"
    }, {
      pagePath: "/pages/solution/index",
      iconPath: "/img/4-n.png",
      selectedIconPath:  "/img/4-y.png",
      text: "诚聘英才"
    }, {
      pagePath: "/pages/personal/index",
      iconPath:"/img/5-n.png",
      selectedIconPath: "/img/5-y.png",
      text: "个人中心"
    }]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})