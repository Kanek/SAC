var FrontMannager = {
	opButtons: [],
	flagHolder: '',
	firstValue: true,
	setOpButtonsListeners: function(opButtons){
		for (var i = opButtons.length - 1; i >= 0; i--) {
			var button 		= document.getElementById(opButtons[i].id);
			console.log(button.dataset.flag);
			FrontMannager.flagHolder = button.dataset.flag ? button.id : '';

			button.addEventListener("click", function(){
				var newHolder = document.getElementById(this.id+"Block");
				var oldHolder = document.getElementById(FrontMannager.flagHolder+"Block");
				var oldButton = document.getElementById(FrontMannager.flagHolder);
				FrontMannager.flagHolder = this.id;

				FrontMannager.setOpButtonValues(this, oldButton);
				FrontMannager.setSectionValues(newHolder, oldHolder);
			});
		}
	},

	setOpButtonValues: function(newB, oldB){
		newB.className	+=' selectedButton';
		var oldClass 	=oldB.className.split(" ");
		oldB.className 	= oldClass[0];
	},

	setSectionValues: function(newH, oldH){
		oldH.className	+=' hidden';
		var newClass 	= newH.className.split(" ");
		newH.className	= newClass[0];
	},

	addTableInfo: function(id, val){
		var table = document.getElementById(id);
		if (table.className == "hidden") {
			table.className = '';
		}
		table.innerHTML+=val;
	}

}