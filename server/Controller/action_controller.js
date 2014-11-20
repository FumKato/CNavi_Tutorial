ActionController = function(){
	var _this = ActionController;
	
	_this.prototype.get_message = function(mode){
		switch(mode){
			case 'morning':
				return 'Good Morning!';
			case 'night':
				return 'Good Night!';
			default:
				return 'Hello World!';
		}
	};
};

action_controller = new ActionController();

Meteor.methods({
	get_message: function(mode){
		return action_controller.get_message(mode);
	}
});
