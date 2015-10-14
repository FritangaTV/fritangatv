$(function(){
    $('.prettySocial').prettySocial();
    var loadedChan = false;
    var checkForChannels = 'fritangatv,jimrsng,thewiredfixer,pokemex,UsagiHimura,theattack';
    function checkChannels(){
    	$.ajax({
        	url: ' https://api.twitch.tv/kraken/streams?',
        	data: { 'channel' : checkForChannels, 'client_id' : 'q3zej6c9hamkv74ft8waf9ft9l8lt10'},
        	dataType: 'jsonp',
        	success: function(data){
        		if ( data.streams.length > 0 ){
    
        			var selectedChannel = data.streams[0].channel;
        			
        			if ( !loadedChan ){
        				insertPlayer(selectedChannel);
        				loadedChan = true;
        			};
    
        			$.each(data.streams, function(index, stream){
    
        			});
    
        		};
        	},
        	error: function(){
        		checkChannels();
        	}
        });
	};
    function insertPlayer(channel){
    	var selectedChannel = channel.name;
    	var displayName = channel.display_name;
    	var gameName = channel.game;
    	var template = '<h2>'+ displayName +' jugando: '+ gameName +'</h2><div class="embed video-player videoWrapper"><iframe height="378" width="100%" frameborder="0" scrolling="no" src="http://www.twitch.tv/' + selectedChannel + '/embed"></iframe></div>';
    	$('#streamZone').empty().append(template);
    };
    checkChannels();
    setInterval(function(){
    	checkChannels();
    }, 300000);
});