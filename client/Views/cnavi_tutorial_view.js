CNaviTutorialView = function(){
	var _this = CNaviTutorialView;
	
	_this.prototype.show_alert = function(){
		Meteor.call('get_message', Session.get('mode'), function(error, result){
			$('#greet').html(result);
		});
	};
	
	_this.prototype.change_color = function(){
		switch(Session.get('mode')){
			case 'morning':
				$('body').css('background', '#DDDDFF');
				$('body').css('color', '#000077');
				break;
			case 'night':
				$('body').css('background', '#000');
				$('body').css('color', '#FFF');
				break;
			default:
				$('body').css('background', '#FFF');
				$('body').css('color', '#000');
				break;
		}
	};
	
	_this.prototype.render_topic = function(){
		var count = $('#count').html();
		count++;
		$('#count').html(count);
		switch(Session.get('mode')){
			case 'morning':
				$('#hello').html('Morning Mode');
				break;
			case 'night':
				$('#hello').html('Night Mode');
				break;
			default:
				$('#hello').html('Default Mode');
				break;
		}
	};
	
	_this.prototype.render_sentence = function(){
		switch(Session.get('mode')){
			case 'morning':
			case 'night':
				$('#sentence').html('Morning / Night Mode');
				break;
			default:
				$('#sentence').html('Default Mode');
				break;
		}
	};
};

cnavi_tutorial_view = new CNaviTutorialView();

