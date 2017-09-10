/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */

Ext.application({
	name: 'COMS',
	controllers: [
		"Navigation"
	],

	launch: function() {
		Ext.create('Ext.container.Viewport', {
			layout: 'border',
			margin: 25,
			// style: {
			// 	backgroundColor: '#cbdbef'
			// },
			items: [
				{
					region: 'north',
					html: '<h1 class="x-panel-header">COMS...</h1>Some other information goes here as needed, along with login information',
					border: false,
					cls: "main-page"
				}, {
					region: 'south',
					// title: 'South Panel',
					// collapsible: true,
					html: 'Copyright information goes here along with sitemap links',
					split: true,
					height: 100,
					border: false,
					cls: "main-page",
					minHeight: 100
				},
				{
					xtype: "NavigationTabs"
				}
			]
		});
	}
});
