/* global Module */

/* Magic Mirror 2
 * Module: MMM-Modulebar
 *
 * By Erik Pettersson
 * Based on the TouchNavigation Module by Brian Janssen
 *
 * MIT Licensed.
 */
var CategoryChoiceEurope;
//var request = require('request');

Module.register("CategoryChoiceEurope",{
	
	requiresVersion: "2.1.0",
	
    defaults: {
        // Allow the module to force modules to be shown (if hidden and locked by another module ex. profile-switcher).
        allowForce: true,
        // Determines if the border around the buttons should be shown.
        showBorder: false,
        // The minimum width for all the buttons.
        minWidth: "0px",
        // The minimum height for all the buttons.
        minHeight: "0px",
        // The location of the symbol relative to the text. Options: left, right, top or bottom
        picturePlacement: "left",
        // The direction of the bar. Options: row, column, row-reverse or column-reverse
        direction: "column",
		// The speed of the hide and show animation.
		animationSpeed: 500,
        // The default button 1. Add your buttons in the config.
		buttons: {
            "1": {
				module: "ManCutdandy",
				text:   "프랑스",
				img: "modules/CategoryChoiceEurope/225px-Flag_of_France.svg.png",
				width: "50",
				height: "50",
			},
			
			"2": {
				module: "ManCutRegent",
				text:   "영국",
				img: "modules/CategoryChoiceEurope/225px-Flag_of_the_United_Kingdom.svg.png",
				width: "50",
				height: "50",
			},

			"3": {
				module: "ManCutTwoBlock",
				text:   "스페인",
				img: "modules/CategoryChoiceEurope/225px-Flag_of_Spain.svg.png",
				width: "50",
				height: "50",
			},

			"4": {
				module: "ManCutPomade",
				text:   "이탈리아",
				img: "modules/CategoryChoiceEurope/215px-Flag_of_Italy.svg.png",
				width: "50",
				height: "50",
			},
			
			"5": {
				module: "ManPermPart",
				text:   "독일",
				img: "modules/CategoryChoiceEurope/225px-Flag_of_Germany.svg.png",
				width: "50",
				height: "50",
			},

			"6": {
				module: "ManPermRegent",
				text:   "체코",
				img: "modules/CategoryChoiceEurope/225px-Flag_of_the_Czech_Republic.svg.png",
				width: "50",
				height: "50",
			},

			"7": {
				module: "ManPermIron",
				text:   "네덜란드",
				img: "modules/CategoryChoiceEurope/225px-Flag_of_the_Netherlands.svg.png",
				width: "50",
				height: "50",
			},

			"8": {
				module: "ManPermIron",
				text:   "포르투갈",
				img: "modules/CategoryChoiceEurope/225px-Flag_of_Portugal.svg.png",
				width: "50",
				height: "50",
			},

		}
	},
	start(){
		CategoryChoiceEurope = this;
	},

    // Define required styles.
	getStyles: function(){
		return ["font-awesome.css", "MMM-Modulebar.css"];
	},

    // Override dom generator.
    getDom: function() {
        var menu = document.createElement("span");
        menu.className = "modulebar-menu";
        menu.id = this.identifier + "_menu";
        menu.style.flexDirection = this.config.direction;
		// Sends each button to the "createButton" function be created.
		for (var num in this.config.buttons) {
			menu.appendChild(this.createButton(this, num, this.config.buttons[num], this.config.picturePlacement));
		}


		return menu;
	},
	// Creates the buttons.
    createButton: function (self, num, data, placement) {
		// Creates the span elemet to contain all the buttons.
		var item = document.createElement("span");
        // Builds a uniqe indentity / button.
		item.id = self.identifier + "_button_" + num;
        // Sets a class to all buttons.
		item.className = "modulebar-button";
        // Makes sure the width and height is at least the defined minimum.
		item.style.minWidth = self.config.minWidth;
        item.style.minHeight = self.config.minHeight;
		// Collects all modules loaded in MagicMirror.
		var modules = MM.getModules();
		// When a button is clicked, the module either gets hidden or shown depending on current module status.
		item.addEventListener("click", function () {
			// Lists through all modules for testing.
			CategoryChoiceEurope.sendNotification("CategoryChoiceEurope is Clicked");	
		});
		// Fixes the aligning.
        item.style.flexDirection = {
            "right"  : "row-reverse",
            "left"   : "row",
            "top"    : "column",
            "bottom" : "column-reverse"
        }[placement];
		// Sets the border around the symbol/picture/text to black.
        if (!self.config.showBorder) {
            item.style.borderColor = "black";
        }
		// Adds the Font-Awesome symbol if specified.
        if (data.symbol) {
            var symbol = document.createElement("span");
            symbol.className = "modulebar-picture fa fa-" + data.symbol;
			// Sets the size on the symbol if specified.
            if (data.size) {
                symbol.className += " fa-" + data.size;
                symbol.className += data.size == 1 ? "g" : "x";
            }
			// Align the symbol with a margin.
            if (data.text && placement === "left") {
                symbol.style.marginRight = "4px";
            }
			// Adds the symbol to the item.
            item.appendChild(symbol);

		// Adds a picture if specified.
		} else if (data.img) {
            var image = document.createElement("img");
            image.className = "modulebar-picture";
            image.src = data.img;
			// Sets the size of the picture if specified.
            if (data.width)  image.width  = data.width;
            if (data.height) image.height = data.height;
			// Align the picture with a margin.
            if (data.text && placement === "left") {
                image.style.marginRight = "4px";
            }
			// Adds the picture to the item.
            item.appendChild(image);
        }
		// Adds the text if specified.
        if (data.text) {
            var text = document.createElement("span");
            text.className = "modulebar-text";
            text.innerHTML = data.text;
			// Align the text with a margin.
            if ((data.symbol || data.img) && placement === "right") {
                text.style.marginRight = "4px";
            }
			// Adds the text to the item.
            item.appendChild(text);
		}
		
		// All done. :)
        return item;
	},
	notificationReceived: function(notification, payload){
		Log.info(this.name + " - received norification : " + notification);

		if(notification === 'Modules All Change'){
			this.hide();
		}
		
		if(notification === 'dfdf'){
			this.hide();
		}

	}
});	


