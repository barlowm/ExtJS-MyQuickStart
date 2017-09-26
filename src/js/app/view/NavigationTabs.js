Ext.define('App.view.NavigationTabs' ,{
	extend: 'Ext.tab.Panel',
	alias : 'widget.NavigationTabs',
	name : 'Main Navigation Tabs',
	region: 'center',
	activeTab: 0,      // First tab active by default
	margins: '0, 5, 0, 0',
	border: false,

	items: [
		{ title : 'Tab 1',
			html: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu enim posuere, gravida erat vitae, pulvinar enim. Cras dictum est quis facilisis euismod. Nullam arcu metus, aliquet quis mauris quis, porttitor imperdiet sem. Vivamus ut hendrerit turpis. Etiam maximus porta risus quis commodo. Cras molestie lobortis rutrum. Nullam enim diam, consequat quis efficitur eget, rhoncus ac nisi. Donec pharetra non enim sit amet rutrum. Nullam hendrerit, arcu eget dapibus iaculis, nisi ligula blandit velit, in eleifend dui justo non enim. Maecenas sollicitudin arcu dignissim sapien dignissim, maximus mollis leo semper. Pellentesque pellentesque lorem eros, ac sagittis orci efficitur molestie. Morbi condimentum ultrices vulputate.</p><p>Etiam dignissim rhoncus magna non consequat. Fusce tellus lectus, porttitor et ipsum vel, consequat auctor ante. Curabitur vitae lorem ipsum. Aliquam ultricies odio et ultrices ultrices. Morbi scelerisque risus felis, vitae sagittis magna efficitur a. Morbi accumsan nulla eget odio dictum, non efficitur erat convallis. Vestibulum varius justo in auctor luctus. Vestibulum tincidunt metus a ipsum scelerisque molestie. Nunc non arcu justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam ligula magna, elementum in urna et, molestie vestibulum ex. Cras ullamcorper euismod euismod. Sed id accumsan eros, vitae consectetur turpis. Nam in dictum libero.</p><p>Curabitur feugiat congue scelerisque. Sed eleifend erat nec massa porttitor molestie dignissim in nunc. Aenean augue mi, finibus nec nisi a, accumsan porttitor mi. Donec non libero eget mauris porttitor lobortis. Aliquam tempus tempus magna, vel accumsan justo. Donec sit amet erat a augue molestie commodo sit amet nec ex. Morbi et quam eu felis vestibulum malesuada a eu nisi. Duis eu erat euismod dui sagittis bibendum quis at tellus. Aliquam ante orci, interdum eget sapien in, elementum ultrices est. Pellentesque rhoncus convallis sem quis finibus. Morbi quam mi, facilisis ac sem porta, sodales venenatis dui. Quisque eget ullamcorper justo. Donec metus orci, commodo id ipsum in, varius mollis sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae arcu non augue gravida lacinia. Aliquam at quam ultrices est euismod eleifend.</p><p>Nullam aliquet in risus sit amet sagittis. Pellentesque nec quam ac urna vulputate eleifend eu pretium metus. Fusce viverra ligula et leo euismod suscipit. Cras non diam sed nulla vulputate condimentum eu viverra odio. Nulla facilisi. Fusce mattis turpis sed magna commodo, at facilisis quam pretium. Nullam ullamcorper, libero at fringilla aliquet, lacus urna luctus dui, quis vehicula justo nisl vel massa. Ut massa diam, commodo bibendum scelerisque ut, ultrices nec lectus. Fusce rutrum ipsum commodo maximus vestibulum.</p><p>Maecenas malesuada est lectus, in venenatis dui vulputate a. Morbi tincidunt felis nec faucibus venenatis. Etiam ut lacus rhoncus, dignissim sapien et, viverra ipsum. Mauris ultricies in quam non malesuada. Mauris varius fringilla tellus ac fringilla. Pellentesque sollicitudin turpis massa, eget mattis eros vehicula a. Sed a nunc orci. Mauris molestie metus efficitur, condimentum justo in, vulputate purus. Cras condimentum nisl nibh, in tristique metus rhoncus sed. Etiam volutpat efficitur dictum. In fringilla dignissim lorem, ut efficitur urna. Duis quis ex diam. In quis nisl ipsum. Mauris venenatis, lorem finibus sagittis commodo, nisl enim dignissim ex, vel viverra justo quam eget metus. Proin molestie dui ut faucibus placerat. In ac nibh consectetur, elementum enim at, sagittis magna.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu enim posuere, gravida erat vitae, pulvinar enim. Cras dictum est quis facilisis euismod. Nullam arcu metus, aliquet quis mauris quis, porttitor imperdiet sem. Vivamus ut hendrerit turpis. Etiam maximus porta risus quis commodo. Cras molestie lobortis rutrum. Nullam enim diam, consequat quis efficitur eget, rhoncus ac nisi. Donec pharetra non enim sit amet rutrum. Nullam hendrerit, arcu eget dapibus iaculis, nisi ligula blandit velit, in eleifend dui justo non enim. Maecenas sollicitudin arcu dignissim sapien dignissim, maximus mollis leo semper. Pellentesque pellentesque lorem eros, ac sagittis orci efficitur molestie. Morbi condimentum ultrices vulputate.</p><p>Etiam dignissim rhoncus magna non consequat. Fusce tellus lectus, porttitor et ipsum vel, consequat auctor ante. Curabitur vitae lorem ipsum. Aliquam ultricies odio et ultrices ultrices. Morbi scelerisque risus felis, vitae sagittis magna efficitur a. Morbi accumsan nulla eget odio dictum, non efficitur erat convallis. Vestibulum varius justo in auctor luctus. Vestibulum tincidunt metus a ipsum scelerisque molestie. Nunc non arcu justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam ligula magna, elementum in urna et, molestie vestibulum ex. Cras ullamcorper euismod euismod. Sed id accumsan eros, vitae consectetur turpis. Nam in dictum libero.</p><p>Curabitur feugiat congue scelerisque. Sed eleifend erat nec massa porttitor molestie dignissim in nunc. Aenean augue mi, finibus nec nisi a, accumsan porttitor mi. Donec non libero eget mauris porttitor lobortis. Aliquam tempus tempus magna, vel accumsan justo. Donec sit amet erat a augue molestie commodo sit amet nec ex. Morbi et quam eu felis vestibulum malesuada a eu nisi. Duis eu erat euismod dui sagittis bibendum quis at tellus. Aliquam ante orci, interdum eget sapien in, elementum ultrices est. Pellentesque rhoncus convallis sem quis finibus. Morbi quam mi, facilisis ac sem porta, sodales venenatis dui. Quisque eget ullamcorper justo. Donec metus orci, commodo id ipsum in, varius mollis sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae arcu non augue gravida lacinia. Aliquam at quam ultrices est euismod eleifend.</p><p>Nullam aliquet in risus sit amet sagittis. Pellentesque nec quam ac urna vulputate eleifend eu pretium metus. Fusce viverra ligula et leo euismod suscipit. Cras non diam sed nulla vulputate condimentum eu viverra odio. Nulla facilisi. Fusce mattis turpis sed magna commodo, at facilisis quam pretium. Nullam ullamcorper, libero at fringilla aliquet, lacus urna luctus dui, quis vehicula justo nisl vel massa. Ut massa diam, commodo bibendum scelerisque ut, ultrices nec lectus. Fusce rutrum ipsum commodo maximus vestibulum.</p><p>Maecenas malesuada est lectus, in venenatis dui vulputate a. Morbi tincidunt felis nec faucibus venenatis. Etiam ut lacus rhoncus, dignissim sapien et, viverra ipsum. Mauris ultricies in quam non malesuada. Mauris varius fringilla tellus ac fringilla. Pellentesque sollicitudin turpis massa, eget mattis eros vehicula a. Sed a nunc orci. Mauris molestie metus efficitur, condimentum justo in, vulputate purus. Cras condimentum nisl nibh, in tristique metus rhoncus sed. Etiam volutpat efficitur dictum. In fringilla dignissim lorem, ut efficitur urna. Duis quis ex diam. In quis nisl ipsum. Mauris venenatis, lorem finibus sagittis commodo, nisl enim dignissim ex, vel viverra justo quam eget metus. Proin molestie dui ut faucibus placerat. In ac nibh consectetur, elementum enim at, sagittis magna.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu enim posuere, gravida erat vitae, pulvinar enim. Cras dictum est quis facilisis euismod. Nullam arcu metus, aliquet quis mauris quis, porttitor imperdiet sem. Vivamus ut hendrerit turpis. Etiam maximus porta risus quis commodo. Cras molestie lobortis rutrum. Nullam enim diam, consequat quis efficitur eget, rhoncus ac nisi. Donec pharetra non enim sit amet rutrum. Nullam hendrerit, arcu eget dapibus iaculis, nisi ligula blandit velit, in eleifend dui justo non enim. Maecenas sollicitudin arcu dignissim sapien dignissim, maximus mollis leo semper. Pellentesque pellentesque lorem eros, ac sagittis orci efficitur molestie. Morbi condimentum ultrices vulputate.</p><p>Etiam dignissim rhoncus magna non consequat. Fusce tellus lectus, porttitor et ipsum vel, consequat auctor ante. Curabitur vitae lorem ipsum. Aliquam ultricies odio et ultrices ultrices. Morbi scelerisque risus felis, vitae sagittis magna efficitur a. Morbi accumsan nulla eget odio dictum, non efficitur erat convallis. Vestibulum varius justo in auctor luctus. Vestibulum tincidunt metus a ipsum scelerisque molestie. Nunc non arcu justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam ligula magna, elementum in urna et, molestie vestibulum ex. Cras ullamcorper euismod euismod. Sed id accumsan eros, vitae consectetur turpis. Nam in dictum libero.</p><p>Curabitur feugiat congue scelerisque. Sed eleifend erat nec massa porttitor molestie dignissim in nunc. Aenean augue mi, finibus nec nisi a, accumsan porttitor mi. Donec non libero eget mauris porttitor lobortis. Aliquam tempus tempus magna, vel accumsan justo. Donec sit amet erat a augue molestie commodo sit amet nec ex. Morbi et quam eu felis vestibulum malesuada a eu nisi. Duis eu erat euismod dui sagittis bibendum quis at tellus. Aliquam ante orci, interdum eget sapien in, elementum ultrices est. Pellentesque rhoncus convallis sem quis finibus. Morbi quam mi, facilisis ac sem porta, sodales venenatis dui. Quisque eget ullamcorper justo. Donec metus orci, commodo id ipsum in, varius mollis sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae arcu non augue gravida lacinia. Aliquam at quam ultrices est euismod eleifend.</p><p>Nullam aliquet in risus sit amet sagittis. Pellentesque nec quam ac urna vulputate eleifend eu pretium metus. Fusce viverra ligula et leo euismod suscipit. Cras non diam sed nulla vulputate condimentum eu viverra odio. Nulla facilisi. Fusce mattis turpis sed magna commodo, at facilisis quam pretium. Nullam ullamcorper, libero at fringilla aliquet, lacus urna luctus dui, quis vehicula justo nisl vel massa. Ut massa diam, commodo bibendum scelerisque ut, ultrices nec lectus. Fusce rutrum ipsum commodo maximus vestibulum.</p><p>Maecenas malesuada est lectus, in venenatis dui vulputate a. Morbi tincidunt felis nec faucibus venenatis. Etiam ut lacus rhoncus, dignissim sapien et, viverra ipsum. Mauris ultricies in quam non malesuada. Mauris varius fringilla tellus ac fringilla. Pellentesque sollicitudin turpis massa, eget mattis eros vehicula a. Sed a nunc orci. Mauris molestie metus efficitur, condimentum justo in, vulputate purus. Cras condimentum nisl nibh, in tristique metus rhoncus sed. Etiam volutpat efficitur dictum. In fringilla dignissim lorem, ut efficitur urna. Duis quis ex diam. In quis nisl ipsum. Mauris venenatis, lorem finibus sagittis commodo, nisl enim dignissim ex, vel viverra justo quam eget metus. Proin molestie dui ut faucibus placerat. In ac nibh consectetur, elementum enim at, sagittis magna.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu enim posuere, gravida erat vitae, pulvinar enim. Cras dictum est quis facilisis euismod. Nullam arcu metus, aliquet quis mauris quis, porttitor imperdiet sem. Vivamus ut hendrerit turpis. Etiam maximus porta risus quis commodo. Cras molestie lobortis rutrum. Nullam enim diam, consequat quis efficitur eget, rhoncus ac nisi. Donec pharetra non enim sit amet rutrum. Nullam hendrerit, arcu eget dapibus iaculis, nisi ligula blandit velit, in eleifend dui justo non enim. Maecenas sollicitudin arcu dignissim sapien dignissim, maximus mollis leo semper. Pellentesque pellentesque lorem eros, ac sagittis orci efficitur molestie. Morbi condimentum ultrices vulputate.</p><p>Etiam dignissim rhoncus magna non consequat. Fusce tellus lectus, porttitor et ipsum vel, consequat auctor ante. Curabitur vitae lorem ipsum. Aliquam ultricies odio et ultrices ultrices. Morbi scelerisque risus felis, vitae sagittis magna efficitur a. Morbi accumsan nulla eget odio dictum, non efficitur erat convallis. Vestibulum varius justo in auctor luctus. Vestibulum tincidunt metus a ipsum scelerisque molestie. Nunc non arcu justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam ligula magna, elementum in urna et, molestie vestibulum ex. Cras ullamcorper euismod euismod. Sed id accumsan eros, vitae consectetur turpis. Nam in dictum libero.</p><p>Curabitur feugiat congue scelerisque. Sed eleifend erat nec massa porttitor molestie dignissim in nunc. Aenean augue mi, finibus nec nisi a, accumsan porttitor mi. Donec non libero eget mauris porttitor lobortis. Aliquam tempus tempus magna, vel accumsan justo. Donec sit amet erat a augue molestie commodo sit amet nec ex. Morbi et quam eu felis vestibulum malesuada a eu nisi. Duis eu erat euismod dui sagittis bibendum quis at tellus. Aliquam ante orci, interdum eget sapien in, elementum ultrices est. Pellentesque rhoncus convallis sem quis finibus. Morbi quam mi, facilisis ac sem porta, sodales venenatis dui. Quisque eget ullamcorper justo. Donec metus orci, commodo id ipsum in, varius mollis sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae arcu non augue gravida lacinia. Aliquam at quam ultrices est euismod eleifend.</p><p>Nullam aliquet in risus sit amet sagittis. Pellentesque nec quam ac urna vulputate eleifend eu pretium metus. Fusce viverra ligula et leo euismod suscipit. Cras non diam sed nulla vulputate condimentum eu viverra odio. Nulla facilisi. Fusce mattis turpis sed magna commodo, at facilisis quam pretium. Nullam ullamcorper, libero at fringilla aliquet, lacus urna luctus dui, quis vehicula justo nisl vel massa. Ut massa diam, commodo bibendum scelerisque ut, ultrices nec lectus. Fusce rutrum ipsum commodo maximus vestibulum.</p><p>Maecenas malesuada est lectus, in venenatis dui vulputate a. Morbi tincidunt felis nec faucibus venenatis. Etiam ut lacus rhoncus, dignissim sapien et, viverra ipsum. Mauris ultricies in quam non malesuada. Mauris varius fringilla tellus ac fringilla. Pellentesque sollicitudin turpis massa, eget mattis eros vehicula a. Sed a nunc orci. Mauris molestie metus efficitur, condimentum justo in, vulputate purus. Cras condimentum nisl nibh, in tristique metus rhoncus sed. Etiam volutpat efficitur dictum. In fringilla dignissim lorem, ut efficitur urna. Duis quis ex diam. In quis nisl ipsum. Mauris venenatis, lorem finibus sagittis commodo, nisl enim dignissim ex, vel viverra justo quam eget metus. Proin molestie dui ut faucibus placerat. In ac nibh consectetur, elementum enim at, sagittis magna.</p>"
		},
		{ title : 'Tab 2', items : [
			{ xtype : "box", "html" : "<h2>Not Yet Available</h2>" }
		]},
		{ title : 'Tab 3', items : [
			{ xtype : "box", "html" : "<h2>Not Yet Available</h2>" }
		]},
		{ title : 'Tab 4', items : [
			{ xtype : "box", "html" : "<h2>Not Yet Available</h2>" }
		]},
		{ title : 'Tab 5', items : [
			{ xtype : "box", "html" : "<h2>Not Yet Available</h2>" }
		]},
		{ xtype : "tabpanel", title: "Tab 6",
			defaults: {
				padding : "10 10 5 10"
			},
			items : [
				{ "title" : "Nested Tab 1", items : [
					{ xtype : "box", "html" : "<h2>Not Yet Available</h2>" }
				]},
				{ "title" : "Nested Tab 2", "closable" : false, items : [
					{ xtype : "box", "html" : "<h2>Not Yet Available</h2>" }
				]},
				{ "title" : "Nested Tab 3", "closable" : false, items : [
					{ xtype : "box", "html" : "<h2>Not Yet Available</h2>" }
				]}
			]
		},
		{ title : 'Tab 7', items : [
			{ xtype : "box", "html" : "<h2>Not Yet Available</h2>" }
		]},
		{ title : 'Configuration Tab' }
	]
});