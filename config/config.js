/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "127.0.0.1", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 9000,
	
    ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1","172.16.99.254", "::ffff:172.16.99.254", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "clock",
			position: "top_left",
			config : {
			display:"none", 
			}
		},
		{
			module: "CategoryHairstyle",  //1
			position: "lower_third", // This can be any of the regions.
			header: "이용노선을 선택하세요.", // Optional
			classes: "default everyone", // Optional
			config: {
				// See "Configuration options" for more information.
			}
		},
		{
			module: "CategoryManhair",   //2
			position: "middle_center", // This can be any of the regions.
			header: "목적 도시를 선택하세요.", // Optional
			classes: "default everyone", // Optional
			config: {
				hidden : "true",
				// See "Configuration options" for more information.
			}
		},
		{
			module: "CategoryChoiceContinent",   //3
			position: "middle_center", // This can be any of the regions.
			header: "목적 대륙을 선택하세요.", // Optional
			classes: "default everyone", // Optional
			config: {
				hidden : "true",
				// See "Configuration options" for more information.
			}
		},
		{	
			module: "CategoryChoiceAsia", //4
			position: "middle_center", // This can be any of the regions.
			header: "목적 아시아 국가를 선택하세요.", // Optional
			classes: "default everyone", // Optional
			config: {
		
				// See "Configuration options" for more information.
			}
		},
		{	
			module: "CategoryChoiceEurope", //5
			position: "middle_center", // This can be any of the regions.
			header: "목적 유럽 국가를 선택하세요.", // Optional
			classes: "default everyone", // Optional
			config: {
		
				// See "Configuration options" for more information.
			}
		},
		{	
			module: "CategoryChoiceAmerica", //6
			position: "middle_center", // This can be any of the regions.
			header: "목적 아메리카대륙 국가를 선택하세요.", // Optional
			classes: "default everyone", // Optional
			config: {
		
				// See "Configuration options" for more information.
			}
		},
		{	
			module: "CategoryChoiceAfrica", //7
			position: "middle_center", // This can be any of the regions.
			header: "목적 아프리카 국가를 선택하세요.", // Optional
			classes: "default everyone", // Optional
			config: {
		
				// See "Configuration options" for more information.
			}
		},
		{
			module: "ManCutdandy",
			position: "bottom_left",	// This can be any of the regions.
			hide : "true",
			config: {
				// See "Configuration options" for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/남자컷댄디.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "1000", // width of iframe
					height: "1000", // height of iframe
					frameWidth: "980", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: "ManCutRegent",
			position: "bottom_left",	// This can be any of the regions.
			hide : "true",
			config: {
				// See "Configuration options" for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/남자컷리젠트.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "1000", // width of iframe
					height: "1000", // height of iframe
					frameWidth: "980", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: "ManCutTwoBlock",
			position: "bottom_left",	// This can be any of the regions.
			hide : "true",
			config: {
				// See "Configuration options" for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/남자컷투블럭.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "1000", // width of iframe
					height: "1000", // height of iframe
					frameWidth: "980", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: "ManCutPomade",
			position: "bottom_left",	// This can be any of the regions.
			hide : "true",
			config: {
				// See "Configuration options" for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/남자컷포마드.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "1000", // width of iframe
					height: "1000", // height of iframe
					frameWidth: "980", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: "ManPermPart",
			position: "bottom_left",	// This can be any of the regions.
			hide : "true",
			config: {
				// See "Configuration options" for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/남자펌가르마.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "1000", // width of iframe
					height: "1000", // height of iframe
					frameWidth: "980", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: "ManPermRegent",
			position: "bottom_left",	// This can be any of the regions.
			hide : "true",
			config: {
				// See "Configuration options" for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/남자펌리젠트.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "1000", // width of iframe
					height: "1000", // height of iframe
					frameWidth: "980", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: "ManPermIron",
			position: "bottom_left",	// This can be any of the regions.
			hide : "true",
			config: {
				// See "Configuration options" for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/남자펌아이롱.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "1000", // width of iframe
					height: "1000", // height of iframe
					frameWidth: "980", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: "WomanCutLayered",
			position: "bottom_left",	// This can be any of the regions.
			hide : "true",
			config: {
				// See "Configuration options" for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/여자컷레이어드.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "1000", // width of iframe
					height: "1000", // height of iframe
					frameWidth: "980", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: "WomanCutBob",
			position: "bottom_left",	// This can be any of the regions.
			hide : "true",
			config: {
				// See "Configuration options" for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/여자컷보브.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "1000", // width of iframe
					height: "1000", // height of iframe
					frameWidth: "980", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: "WomanCutShort",
			position: "bottom_left",	// This can be any of the regions.
			hide : "true",
			config: {
				// See "Configuration options" for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/여자컷숏.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "1000", // width of iframe
					height: "1000", // height of iframe
					frameWidth: "980", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: "WomanCutHime",
			position: "bottom_left",	// This can be any of the regions.
			hide : "true",
			config: {
				// See "Configuration options" for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/여자컷히메.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "1000", // width of iframe
					height: "1000", // height of iframe
					frameWidth: "980", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: "WomanPermGlam",
			position: "bottom_left",	// This can be any of the regions.
			hide : "true",
			config: {
				// See "Configuration options" for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/여자펌글램.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "1000", // width of iframe
					height: "1000", // height of iframe
					frameWidth: "980", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: "WomanPermBody",
			position: "bottom_left",	// This can be any of the regions.
			hide : "true",
			config: {
				// See "Configuration options" for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/여자펌바디.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "1000", // width of iframe
					height: "1000", // height of iframe
					frameWidth: "980", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: "WomanPermHippie",
			position: "bottom_left",	// This can be any of the regions.
			hide : "true",
			config: {
				// See "Configuration options" for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/여자펌히피.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "1000", // width of iframe
					height: "1000", // height of iframe
					frameWidth: "980", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: "Man10s",
			position: "bottom_left",	// This can be any of the regions.
			visible : "true",
			config: {
				// See "Configuration options" for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/남자10대.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "1000", // width of iframe
					height: "1000", // height of iframe
					frameWidth: "980", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: "Man20s",
			position: "bottom_left",	// This can be any of the regions.
			visible : "true",
			config: {
				// See "Configuration options" for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/남자20대.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "1000", // width of iframe
					height: "1000", // height of iframe
					frameWidth: "980", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: "Man30s",
			position: "bottom_left",	// This can be any of the regions.
			visible : "false",
			config: {
				// See "Configuration options" for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/남자30대.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "1000", // width of iframe
					height: "1000", // height of iframe
					frameWidth: "980", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: "Man40s",
			position: "bottom_left",	// This can be any of the regions.
			visible : "false",
			config: {
				// See "Configuration options" for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/남자40대.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "1000", // width of iframe
					height: "1000", // height of iframe
					frameWidth: "980", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: "Man50s",
			position: "bottom_left",	// This can be any of the regions.
			visible : "false",
			config: {
				// See "Configuration options" for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/남자50대.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "1000", // width of iframe
					height: "1000", // height of iframe
					frameWidth: "980", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
			}
		},
		{
			module: "Woman10s",
			position: "bottom_left",	// This can be any of the regions.
			visible : "false",
			config: {
				// See "Configuration options" for more information.
					url: ["http://s3.us-east-2.amazonaws.com/beautymirror.com/demo/여자10대.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "1000", // width of iframe
					height: "1000", // height of iframe
					frameWidth: "980", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe		
					hidden : "true",
			}
		},
		{ 
			module: "CategorySelectMain", //24
			position: "top_left", // This can be any of the regions.
			header: "메뉴선택", // Optional
			classes: "default everyone", // Optional
			config: {
		
				// See "Configuration options" for more information.
			}
		},
		{
			module: "ShowWebtoon", //25
			position: "bottom_center",	// This can be any of the regions.
			config: {
				// See "Configuration options" for more information.
					url: ["https://comic.naver.com/webtoon/weekday.nhn"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "1000", // width of iframe
					height: "1800", // height of iframe
					frameWidth: "980", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe
					hide: "true",
				}
		},

		//1
		{
			module: "MMM-EmbedYoutube1",  //25
			position: "bottom_bar",	
			config: {
				video_id: "w3jLJU7DT5E",
				searchlist1: "쯔위",
				loop: true
			}
		},
		//2	
		{
			module: "CategoryChoiceEntMenu", //26
			position: "top_left", 
			header:"공항 지도",
			classes: "default everyone",
			config: {
			}
		},
		//3
		{
			module: "CategoryChoiceYoutube", //27
			position: "top_left",
			classes: "default everyone", 
			config: {
			}
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "MMM-Testpython",
			position: "top_right",
			config:{
			}
			
		},
		{
			module: "MMM-Dynamic-Modules",
		},
		{
			module: "MMM-Remote-Control",
			position: "center",
			
			config: {
				customCommand: {},  // Optional, See "Using Custom Commands" below
				customMenu: "custom_menu.json", // Optional, See "Custom Menu Items" below
				showModuleApiMenu: true, // Optional, Enable the  Controls menu
				apiKey: "",         // Optional, See API/README.md for details
			}
		},
		{
			module: "MMM-darksky-hourly",
			position: "top_left",  // This can be any of the regions.
			config: {
				// See "Configuration options" for more information.
				apiKey: "8d7f5d22ed1974d6b4869c9304b39f50", // Dark Sky API key.
				latitude:   37.37988109409138,
				longitude: 126.9287487782795,
				language: "ko",
			}
		},
		{
			module: "MMM-Carousel",
			position: "bottom_bar", // Required only for navigation controls
			config: {
				ignoreModules: ["alert"],
				mode: "slides",
				showPageIndicators: true,
				showPageControls: true,
				slides: {
<<<<<<< HEAD
					main: ["clock","CategoryHairstyle","CategorySelectMain"],
=======
					main: ["camera","clock","CategoryHairstyle","CategoryChoicehairMenu"],
>>>>>>> 45444eeb75ef318f2304a5159961592feb9be361
					//main: ["clock","currentweather","weatherforecast","MMM-Globe","newsfeed","mm-hide-all","clock","MMM-Avinor"],
					"Slide 2": ["MMM-Avinor"],
					"Slide 3": ["FirstAirport-2F","CategoryChoiceAirport","MMM-EmbedYoutube1","MMM-EmbedYoutube2","FirstAirport-1F","mm-hide-all","clock","The1Airport"],
					"Slide 4": ["clock","MMM-AfterImage","MMM-BeforeImage","MMM-BeforeAfter","MMM-DeleteImage"],
				},
				keyBindings: { 
					enabled: true,
					map: {
						NextSlide: "ArrowRight", 
						PrevSlide: "ArrowLeft", 
						Slide0:    "Home"
					},
					mode: "DEFAULT"
				}
			}
			
		},
		{
			module: "FirstAirport-1F",
			position: "middle_center",
			header:"  1Airport ",
			config: {
				imagePaths: ["modules/MMM-BeforeAfter/before"]
			}
		}, //41
		{
			module: "FirstAirport-2F",
			position: "middle_center",
			header:"  2Airport ",
			config: {
				imagePaths: ["modules/MMM-BeforeAfter/before"]
			}
		},//42
		{
			module: "The1Airport", 
			position: "top_left",
			classes: "default everyone", 
			config: {
			}
		},//43
		{
			module: "CategoryChoiceAirport", 
			position: "top_left", 
			header:"공항 지도",
			classes: "default everyone",
			config: {
			}
		}, //44
		{	
			module: "currentweather",
			position: "top_right",
			header: "    오늘의 날씨",
			config: {
				location: "Seoul",
				locationID: "1835847",  //ID from http://bulk.openweathermap.org/sample/; unzip the gz file and find your city
				appid: "f167f10ed5044b1a287054c8ccfb6730",                            
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "날씨",
			config: {
				location: "Anyang",
				locationID: "1835847",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "f167f10ed5044b1a287054c8ccfb6730"
			}
		},            
		{
			module: "MMM-Globe",                 // photo
			position: "middle_center",
			config: {
				style: "geoColor",
				imageSize: 300,
				ownImagePath:"http://rammb.cira.colostate.edu/ramsdis/online/images/thumb/himawari-8/full_disk_ahi_natural_color.jpg",
				updateInterval: 10*60*1000
			}
		},    
		{
			module: "alert",
		},
		{
			module: "compliments",
			position: "lower_third"
		},
		{
			module: "newsfeed",
			position: "bottom_center",
			config: {
			feeds: 
				[{
				title: "사회 , 경제  ",
				url: "http://media.daum.net/rss/part/primary/entertain/rss2.xml" 
				},
				{
				title: "스포츠  ",
				url: "http://media.daum.net/rss/today/primary/sports/rss2.xml" 
				},
				{
				title: "연예  ",
				url: "http://api.sbs.co.kr/xml/news/rss.jsp?pmDiv=entertainment" 
				},
				{
				title: "IT , 과학  ",
				url: "http://media.daum.net/rss/part/primary/digital/rss2.xml" 
				},
				],
				showSourceTitle: true,
				showPublishDate: false
			}
		},
		
		{
			module: "MMM-BeforeImage",
			position: "middle_center",
			header:"전 사진 ! ",
			config: {
				imagePaths: ["modules/MMM-BeforeAfter/before"]
			}
		},
		{
			module: "MMM-AfterImage",
			position: "middle_center",
			header:"후 사진! ",
			config: {
				imagePaths: ["modules/MMM-BeforeAfter/before"]
			}
		},
		{
			module: "MMM-BeforeAfter",
			position: "bottom_right",
			config:{
				foo:"yellow"
			}
		},
		{
			module: "mm-hide-all",
			position: "bottom_right"
		},
		{
			module: "MMM-DeleteImage",
			position: "bottom_right"
		},
		{
			module: "ShowRemoteControl", //24
			position: "bottom_center",	// This can be any of the regions.
			config: {
				// See "Configuration options" for more information.
					url: ["http://127.0.0.1:9000/remote.html"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "1000", // width of iframe
					height: "1000", // height of iframe
					frameWidth: "600", // width of embedded iframe, height is beeing calculated by aspect ratio of iframe
				}
		},
		{
			module: "MMM-Avinor",
			position: "middle_center", //top_bar, top_left, top_center, top_right, upper_third, middle_center, lower_third, bottom_left, bottom_center, bottom_right, bottom_bar, fullscreen_above, and fullscreen_below
			config: {
				refreshInterval: 5 * 60 * 1000, // every 5 minutes
				httpRequestURL: "https://flydata.avinor.no/XmlFeed.asp?TimeFrom=1&TimeTo=12&airport=OSL&lastUpdate=",
				tableLength: 5,
				minTimeDiff: 2,
				timeZone: 1,
				layout:2,
			}
		},
		{
			module: 'camera',
			position: 'top_center',
			config: {
				selfieInterval: 3,  // Time interval in seconds before the photo will be taken.
				emailConfig: {
					service: 'Hotmail', // Email provider to use to send email with a photo.
					auth: {
						user: '<emrhssla@gmail.com>', // Your email account
						pass: '<em89138913@#>'        // Your password for email account
						}
					}
				}
		},
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
