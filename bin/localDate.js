var localDate={sources:["render","current","realtime"],daysFull:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],daysAbbr:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],monthsFull:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsAbbr:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],tz:{"Etc/GMT-12":{offset:-12,DST:false},"Etc/GMT-11":{offset:-11,DST:false},"Pacific/Midway":{offset:-11,DST:true},"America/Adak":{offset:-10,DST:true},"America/Hawaii":{offset:-10,DST:false},"America/Anchorage":{offset:-9,DST:true},"Pacific/Gambier":{offset:-9,DST:true},"America/Dawson_Creek":{offset:-8,DST:true},"America/Ensenada":{offset:-8,DST:true},"America/Los_Angeles":{offset:-8,DST:true},"America/Chihuahua":{offset:-7,DST:true},"America/Denver":{offset:-7,DST:true},"America/Arizona":{offset:-7,DST:false},"America/Belize":{offset:-6,DST:true},"America/Cancun":{offset:-6,DST:true},"America/Chicago":{offset:-6,DST:true},"America/Saskatchewan":{offset:-6,DST:false},"Chile/EasterIsland":{offset:-6,DST:false},"America/Bogota":{offset:-5,DST:false},"America/Havana":{offset:-5,DST:true},"America/New_York":{offset:-5,DST:true},"America/Caracas":{offset:-4.5,DST:false},"America/Campo_Grande":{offset:-4,DST:true},"America/Glace_Bay":{offset:-4,DST:true},"America/Goose_Bay":{offset:-4,DST:true},"America/Santiago":{offset:-4,DST:true},"America/La_Paz":{offset:-4,DST:false},"America/Argentina/Buenos_Aires":{offset:-3,DST:false},"America/Montevideo":{offset:-3,DST:true},"America/Araguaina":{offset:-3,DST:true},"America/Godthab":{offset:-3,DST:true},"America/Miquelon":{offset:-3,DST:true},"America/Sao_Paulo":{offset:-3,DST:true},"America/St_Johns":{offset:-3.5,DST:true},"America/Noronha":{offset:-2,DST:true},"Atlantic/Cape_Verde":{offset:-1,DST:false},"Europe/Belfast":{offset:0,DST:true},"Africa/Abidjan":{offset:0,DST:true},"Europe/Dublin":{offset:0,DST:true},"Europe/Lisbon":{offset:0,DST:true},"Europe/London":{offset:0,DST:true},UTC:{offset:0,DST:false},"Africa/Algiers":{offset:1,DST:true},"Africa/Windhoek":{offset:1,DST:false},"Atlantic/Azores":{offset:1,DST:true},"Atlantic/Stanley":{offset:1,DST:true},"Europe/Amsterdam":{offset:1,DST:true},"Europe/Belgrade":{offset:1,DST:true},"Europe/Brussels":{offset:1,DST:true},"Africa/Cairo":{offset:2,DST:true},"Africa/Blantyre":{offset:2,DST:true},"Asia/Beirut":{offset:2,DST:true},"Asia/Damascus":{offset:2,DST:true},"Asia/Gaza":{offset:2,DST:true},"Asia/Jerusalem":{offset:2,DST:true},"Africa/Addis_Ababa":{offset:3,DST:true},"Africa/Nairobi":{offset:3,DST:false},"Asia/Riyadh89":{offset:3,DST:true},"Europe/Minsk":{offset:3,DST:true},"Asia/Tehran":{offset:3.5,DST:true},"Asia/Dubai":{offset:4,DST:true},"Asia/Yerevan":{offset:4,DST:true},"Europe/Moscow":{offset:4,DST:true},"Asia/Kabul":{offset:4.5,DST:false},"Asia/Tashkent":{offset:5,DST:false},"Asia/Kolkata":{offset:5.5,DST:false},"Asia/Katmandu":{offset:5.75,DST:true},"Asia/Dhaka":{offset:6,DST:false},"Asia/Yekaterinburg":{offset:6,DST:true},"Asia/Rangoon":{offset:6.5,DST:false},"Asia/Bangkok":{offset:7,DST:false},"Asia/Novosibirsk":{offset:7,DST:true},"Etc/GMT+8":{offset:8,DST:false},"Asia/Hong_Kong":{offset:8,DST:false},"Asia/Krasnoyarsk":{offset:8,DST:true},"Australia/Perth":{offset:8,DST:false},"Australia/Eucla":{offset:8.75,DST:true},"Asia/Irkutsk":{offset:9,DST:true},"Asia/Seoul":{offset:9,DST:false},"Asia/Tokyo":{offset:9,DST:false},"Australia/Adelaide":{offset:9.5,DST:true},"Australia/Darwin":{offset:9.5,DST:false},"Pacific/Marquesas":{offset:9.5,DST:true},"Etc/GMT+10":{offset:10,DST:false},"Australia/Brisbane":{offset:10,DST:false},"Australia/Hobart":{offset:10,DST:true},"Asia/Yakutsk":{offset:10,DST:true},"Australia/Lord_Howe":{offset:10.5,DST:true},"Asia/Vladivostok":{offset:11,DST:true},"Pacific/Norfolk":{offset:11.5,DST:true},"Etc/GMT+12":{offset:12,DST:false},"Asia/Anadyr":{offset:12,DST:true},"Asia/Magadan":{offset:12,DST:true},"Pacific/Auckland":{offset:12,DST:true},"Pacific/Chatham":{offset:12.75,DST:true},"Pacific/Tongatapu":{offset:13,DST:true},"Pacific/Kiritimati":{offset:14,DST:true}},init:function(selector){selector=selector?selector:".localDate";if(typeof([].indexOf)=="undefined"){this.indexOfFix();}if(typeof(document.querySelectorAll)=="undefined"){this.querySelectorAllFix();}var i,el;var els=document.querySelectorAll(selector);if(!els.length){return;}for(i in els){el=els[i];if(typeof(el)=="object"&&typeof(el.tagName)!="undefined"&&typeof(el.nodeName)!="undefined"&&typeof(el.className)!="undefined"){this.initSingle(el);}}},initSingle:function(el){el=el?el:false;if(typeof(el)!="object"||typeof(el.tagName)=="undefined"||typeof(el.nodeName)=="undefined"||typeof(el.className)=="undefined"){return;}if(isNaN(el.getAttribute("data-source"))&&!(this.sources.indexOf(el.getAttribute("data-source"))+1)){el.setAttribute("data-source","render");}if(!el.getAttribute("data-format")){el.setAttribute("data-format","$h:$M:$S$A $n-$d-$Y");}if(el.getAttribute("data-locale")!="local"&&!this.tz.hasOwnProperty(el.getAttribute("data-locale"))){if(el.getAttribute("data-locale")===null){el.setAttribute("data-locale","local");}else{el.setAttribute("data-locale","UTC");}}var refresh=0;switch(el.getAttribute("data-source")){case"current":refresh=1000;break;case"realtime":refresh=33;break;}this.render(el,refresh);},render:function(el,refresh){el=el?el:false;if(!el){return;}if(typeof(el)!="object"||typeof(el.tagName)=="undefined"||typeof(el.nodeName)=="undefined"||typeof(el.className)=="undefined"){return;}var localTime;var time=el.getAttribute("data-source");if(typeof(time)=="undefined"||isNaN(time)){time=null;}else{time=Math.round(time*1000);}if(refresh){setTimeout(function(){localDate.render(el,refresh);},refresh);}if(time===null){localTime=new Date();}else{localTime=new Date(time);}if(el.getAttribute("data-locale")=="local"){time=localTime.getTime()-(localTime.getTimezoneOffset()*60000);}else{if(!this.tz.hasOwnProperty(el.getAttribute("data-locale"))){el.setAttribute("data-locale","UTC");}time=localTime.getTime()+(this.tz[el.getAttribute("data-locale")].offset*3600000);if(this.tz[el.getAttribute("data-locale")].DST){var nowOffset=localTime.getTimezoneOffset();localTime.setDate(0);if(nowOffset!=localTime.getTimezoneOffset()){time+=3600000;}}}el.innerHTML=el.getAttribute("data-format").replace(/\$./g,function(arg){return localDate.format(arg,time);});},format:function(arg,time){var date=time?new Date(time):new Date();var hour,min,sec,ms,day,month,year;switch(arg){case"$h":case"$H":case"$t":case"$T":hour=date.getUTCHours();if(arg==="$h"||arg==="$H"){hour=hour%12;if(!hour){hour=12;}}if(hour<10&&(arg==="$T"||arg==="$H")){hour="0"+hour;}return""+hour;case"$m":case"$M":min=date.getUTCMinutes();if(min<10&&arg==="$M"){min="0"+min;}return""+min;case"$s":case"$S":sec=date.getUTCSeconds();if(sec<10&&arg==="$S"){sec="0"+sec;}return""+sec;case"$z":case"$Z":ms=date.getUTCMilliseconds();if(ms==="$Z"){if(ms<10){ms="00"+ms;}else{if(ms<100){ms="0"+ms;}}}return""+ms;case"$a":hour=date.getUTCHours();if(hour<12){return"am";}return"pm";case"$A":hour=date.getUTCHours();if(hour<12){return"AM";}return"PM";case"$d":case"$D":day=date.getUTCDate();if(day<10&&arg==="$D"){day="0"+day;}return""+day;case"$w":return""+this.daysAbbr[date.getUTCDay()];case"$W":return""+this.daysFull[date.getUTCDay()];case"$c":case"$C":case"$n":case"$N":month=date.getUTCMonth();if(arg==="$c"){month=this.monthsAbbr[month];}else{if(arg==="$C"){month=this.monthsFull[month];}else{month++;if(month<10&&arg==="$N"){month="0"+month;}}}return""+month;case"$y":case"$Y":year=date.getUTCFullYear();if(arg==="$y"){year=Math.round(((year/100)-Math.floor(year/100)).toFixed(2)*100);}return""+year;case"$$":return"$";default:return""+arg;}},indexOfFix:function(){Array.prototype.indexOf=function(obj,start){for(var i=(start||0),j=this.length;i<j;i++){if(this[i]===obj){return i;}}return -1;};},querySelectorAllFix:function(){var d=document;var s=d.createStyleSheet();d.querySelectorAll=function(r,c,i,j,a){a=d.all,c=[],r=r.replace(/\[for\b/gi,"[htmlFor").split(",");for(i=r.length;i--;){s.addRule(r[i],"k:v");for(j=a.length;j--;){a[j].currentStyle.k&&c.push(a[j]);}s.removeRule(0);}return c;};}};