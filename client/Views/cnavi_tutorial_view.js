CNaviTutorialView = function(){
	var _this = CNaviTutorialView;
	
	_this.prototype.show_alert = function(){
		Meteor.call('get_message', Session.get('mode'), function(error, result){
			$('#greet').html(result);
		});
	};
	
	_this.prototype.change_color = function(){
		//TODO
	};
	
	_this.prototype.render_topic = function(){
		//TODO
	};
	
	_this.prototype.render_sentence = function(){
		
	};
};

cnavi_tutorial_view = new CNaviTutorialView();

