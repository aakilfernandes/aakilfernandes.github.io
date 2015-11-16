angular
	.module('app',['sidenav','share'])
	.run(function(sidenav){
		sidenav.shouldUpdateFragment=false
	})