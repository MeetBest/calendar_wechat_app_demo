var plugin = requirePlugin("myPlugin");
let app = getApp();
Page({
	data: {
		totalTime: {
			day: 0,
			hour: 0
		}
	},
	onLoad: function() {

	},
	onShow: function() {
		let that = this;
		if (app.globalData.totalTime) {
			that.setData({
				totalTime: app.globalData.totalTime
			});
		}
	},
	chooseTap: function(e) {
		wx.navigateTo({
			url: 'picker'
		});
	}
})