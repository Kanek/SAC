var FrontMannager = {
	opButtons: [],
	flagHolder: '',
	setOpButtonsListeners: function(){
		opButtons = document.querySelectorAll(".opButton");
		console.log(document.querySelectorAll(".opButton .selectedButton"));
		for (var i = opButtons.length - 1; i >= 0; i--) {
			var sectionResp = document.getElementById(opButtons[i] + "Block")
			this.flagHolder = opButtons[i].flag ? opButtons[i].id : '';
			opButtons[i].addEventListener("click", function(sectionResp){
				var flagHolder = FrontMannager.flagHolder;
				console.log("So far so good...");
				this.flag = "1";
				document.getElementById(flagHolder).flag = '0';
				var oldHolder = document.getElementById(flagHolder + 'Block');
				oldHolder.className += ' hidden'
				var newHolder = document.getElementById(this.id + 'Block');
				var newHolderClass = newHolder.className.split(" ");
				newHolder.className = newHolderClass[0];
				console.log(FrontMannager.flagHolder);
			});
		};
	},

}