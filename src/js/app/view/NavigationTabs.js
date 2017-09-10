Ext.define('COMS.view.NavigationTabs' ,{
	extend: 'Ext.tab.Panel',
	alias : 'widget.NavigationTabs',
	name : 'Main Navigation Tabs',
	region: 'center',
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
});