/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */

Ext.application({
    name: 'COMS',

	launch: function() {
		Ext.create('Ext.container.Viewport', {
			layout: 'border',
			margin: 25,
            style: {
		        backgroundColor: '#cbdbef'
		    },
			items: [{
				region: 'north',
				html: '<h1 class="x-panel-header">COMS...</h1>Some other information goes here as needed, along with login information',
				border: false,
				cls: "main-page",
				margin: '0 0 5 0'
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
			}, {
				region: 'center',
				xtype: 'tabpanel', // TabPanel itself has no title
				activeTab: 0,      // First tab active by default
				margins: '0, 5, 0, 0',
				border: false,

				items: [
	                { title : 'Patient' },
					{ title : 'Orders' },
					{ title : 'Template Authoring' },
					{ title : 'Template List' },
					{ title : 'Template Promotion' },
					{ xtype : "tabpanel", title: "Reports",
						defaults: {
							padding : "10 10 5 10"
						},
						items : [
							{ "title" : "Inventory" },
							{ "title" : "Patterns of Care Determination", "closable" : false },
							{ "title" : "Lab Reports", "closable" : false, items : [
								{ xtype : "box", "html" : "<h1>Not Yet Available</h1>" }
							]}
						]
					},
					{ title : 'Messages' },
					{ title : 'Site Configuration' }
				]
			}]
		});
	}
});
