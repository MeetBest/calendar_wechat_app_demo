var plugin = requirePlugin("myPlugin");
let app = getApp();
Page({
	data: {
		dates: [],
		activeDateIndex: 0,
	},
	onLoad: function(options) {
		this.setData({
			dates: app.globalData.dates || [],
			activeDateIndex: app.globalData.activeDateIndex || 0
		});
	},
	onDoneEvent: function(e) {
		console.log(e);
		app.globalData.totalTime = e.detail.totalTime;
		app.globalData.dates = e.detail.dates;
		app.globalData.activeDateIndex = e.detail.activeDateIndex;

		wx.navigateBack();
	}
})