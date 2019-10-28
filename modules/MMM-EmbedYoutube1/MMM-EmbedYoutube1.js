
/* Magic Mirror
 * Module: Embed Youtube
 * 
 * v 1.3.3
 * 
 * By Nitipoom Unrrom (aka nitpum) https://nitpum.com
 * MIT Licensed.
 */
var EmbedYoutube1;
Module.register("MMM-EmbedYoutube1", {
	defaults: {
		autoplay: false,
		color: "red",
		controls : true,
		disablekb: false,
		fs: true,
		height: 480,
		width: 600,
		loop: false,
		modestbranding: false,
		rel : false,
		showinfo : false,
		video_id : "r6A7Fsci7Ds",
		playlist: "",
		num : 1,
		
		searchlist1: "중국 여행"
	},

	start(){
		EmbedYoutube1 = this;
	},
	getDom: function () {
		var wrapper = document.createElement("div");

		// Parameter
		var params = "";
		var search_list="&listType=search&list=";
		search_list += this.config.searchlist1;

		params += (this.config.autoplay) ? "autoplay=1" : "autoplay=0";
		params += (typeof this.config.color !== "undefined" && this.config.color != "red")? "&color=" + this.config.color:"";
		params += (this.config.controls)? "&controls=1":"&controls=0";
		params += (this.config.disablekb)? "&disablekb=1":"";
		params += (this.config.fs)? "":"&fs=0";
		//params += (videoList != "" && (typeof this.config.playlist === "undefined" || this.config.playlist == "")) ? videoList : "&playlist=" + this.config.video_id; // required playlist to loopable
		params += (this.config.loop) ? "&loop=1" : "";
		params += (this.config.modestbranding) ? "&modestbranding=1" : "";
		params += (this.config.rel)? "&rel=1": "&rel=0";
		params += (this.config.showinfo)? "&showinfo=1": "&showinfo=0";
		params += search_list; 

		var videoId = this.config.video_id +"?version=3";
		if (typeof this.config.playlist !== "undefined" && this.config.playlist != "")
			videoId = "playlist?list=" + this.config.playlist + "&";

		wrapper.innerHTML = "<iframe width=\"" 
		+ this.config.width +"\" height=\"" 
		+ this.config.height 
		+ "\" src=\"https://www.youtube.com/embed/" 
		+ videoId + "&"+ params +"\" frameborder=\"0\" allowfullscreen></iframe>";
		
		if (this.config.num === 16){
			this.config.num = 1;
		 }
   
		 switch (this.config.num){
			case 1 : 
			this.config.video_id="X13sr1Rv-CM";
			this.config.searchlist1="베이징";
			break;
   
			case 2 : 
			this.config.video_id="TsphoCUqIR8";
			this.config.searchlist1="중국 여행";
			break;
   
			case 3 : 
			this.config.video_id="QYtJ6HBooPE";
			this.config.searchlist1="중국 여행";
			break;
   
			case 4 : 
			this.config.video_id="YCcE9oGkOw8";
			this.config.searchlist1="롤";
			break;
   
			case 5 : 
			this.config.video_id="YCcE9oGkOw8";
			this.config.searchlist1="롤";
			break;
   
			case 6 : 
			this.config.video_id="YCcE9oGkOw8";
			this.config.searchlist1="롤";
			break;
   
			case 7 : 
			this.config.video_id="YCcE9oGkOw8";
			this.config.searchlist1="롤";
			break;
   
			case 8 : 
			this.config.video_id="YCcE9oGkOw8";
			this.config.searchlist1="롤";
			break;
   
			case 9 : 
			this.config.video_id="YCcE9oGkOw8";
			this.config.searchlist1="롤";
			break;
   
			case 10 : 
			this.config.video_id="YCcE9oGkOw8";
			this.config.searchlist1="롤";
			break;
   
			case 11 : 
			this.config.video_id="YCcE9oGkOw8";
			this.config.searchlist1="롤";
			break;
   
			case 12 : 
			this.config.video_id="YCcE9oGkOw8";
			this.config.searchlist1="롤";
			break;
   
			case 13 : 
			this.config.video_id="YCcE9oGkOw8";
			this.config.searchlist1="롤";
			break;
   
			case 14 : 
			this.config.video_id="YCcE9oGkOw8";
			this.config.searchlist1="롤";
			break;
   
			case 15 : 
			this.config.video_id="YCcE9oGkOw8";
			this.config.searchlist1="롤";
			break;
   
			default :
			break;
		 }
		 
		 this.config.num += 1;
   
		 setTimeout(function(){
			EmbedYoutube1.updateDom();
		 },10000);
		
		return wrapper;
	},
	notificationReceived: function(notification, payload) {
		Log.info(this.name + " - received notification: " + notification);

		if(notification === "PLAYLISTCHANGE"){
			var payload1=payload.split("_");
			console.log("thisconfigid : "+payload)
			this.config.video_id=payload1[0]
			this.config.searchlist1=payload1[1]
			console.log("thisconfigid : "+this.config.searchlist1)
			this.updateDom()

			console.log("thisconfigid : "+this.config.video_id)
		}
	}
});