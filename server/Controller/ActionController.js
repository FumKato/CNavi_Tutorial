ActionController = function(){
	var _this = ActionController;
	
	_this.prototype.get_message = function(mode){
		//TODO
	};
};

action_controller = new ActionController();

Meteor.methods({
	get_message: function(mode){
		return action_controller.get_message(mode);
	}
});
