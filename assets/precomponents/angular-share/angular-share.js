(function(){

angular
	.module('share',[])
	.factory('share',shareFactory)
	.directive('share',shareDirective)

function shareDirective(share,$log){
	return {
		link:function(scope,element,attributes){

			var network = attributes.share
				,that = this

			if(share.linkFunctions[network])
				share.linkFunctions[network].apply(this,arguments)

			if(share.clickFunctions[network])
				element.bind('click',share.clickFunctions[network])

		}
	}
}


function shareFactory(){
			
	var share = {
		url:window.location.href
		,title:document.title
		,via:null
		,hashtags:null
		,source:null
		,clickFunctions:{}
		,linkFunctions:{}
		,windowName:'shareWindow'
		,dimensions:{
			facebook:[600,368]
			,twitter:[600,458]
			,linkedin:[585,471]
			,googleplus:[500,505]
			,pinterest:[750,322]
		}
	}

	share.summary = getMeta('name','description')
	share.image = getMeta('property','og:image')

	share.clickFunctions.facebook = function(){
		var url = buildUrl('http://www.facebook.com/sharer.php',{
			'p[url]':share.url
		})

		window.open(url,share.windowName,getSpecs(share.dimensions.facebook))
	}

	share.clickFunctions.twitter = function(){
		var url = buildUrl('http://twitter.com/intent/tweet',{
			'text':share.title+' '+share.url
			,'via':share.via
			,'hashtags':share.hashtags
		})

		window.open(url,share.windowName,getSpecs(share.dimensions.twitter))
	}

	share.clickFunctions.linkedin = function(){
		var url = buildUrl('http://www.linkedin.com/shareArticle',{
			'mini':'true'
			,'url':share.url
			,'title':share.title
			,'source':share.source
			,'summary':share.description
			,getMeta:getMeta
			,buildUrl:buildUrl
			,getSpecs:getSpecs
		})

		window.open(url,share.windowName,getSpecs(share.dimensions.linkedin))
	}

	share.clickFunctions.googleplus = function(){
		var url = buildUrl(' https://plus.google.com/share',{
			'url':share.url
		})
		
		window.open(url,share.windowName,getSpecs(share.dimensions.googleplus))
	}

	share.linkFunctions.email = function(scope,element,attributes){
		var url = buildUrl('mailto:',{
			'su':share.title
			,'subject':share.title
			,'body':share.url
		})
		element.attr('href',url)
	}

	return share

}

function buildUrl(url, parameters){
	var qs = "";
	for(var key in parameters) {
		var value = parameters[key];
		if(!value){continue}
		value = value.toString().split('\"').join('"');
		qs += key + "=" + encodeURIComponent(value) + "&";
	}
	if (qs.length > 0){
		qs = qs.substring(0, qs.length-1); //chop off last "&"
		url = url + "?" + qs;
	}
	return url;
}

function getMeta(attr,name){
	var metas = document.getElementsByTagName('meta')
	
	for(var i=0;i<metas.length;i++)
		if(metas[i].getAttribute('name') && metas[i].getAttribute('name').toLowerCase() == name)
  			return metas[i].getAttribute('content')
	
	return null
}

function getSpecs(dimensions){
	var width = dimensions[0]
		,height = dimensions[1]
		,top =  Math.max(0,(screen.height-height)/2)
		,left =  Math.max(0,(screen.width-width)/2)

	return 'height='+height+',width='+width+',top='+top+',left='+left
		+',status=0,toolbar=0,directories=0,location=0'
		+',menubar=0,resizable=1,scrollbars=1'
}



})()