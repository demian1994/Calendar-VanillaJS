"use strict";var calendar=document.querySelector(".js-calendar"),calHeader=document.querySelector(".js-cal-header"),pMonth=document.querySelector(".js-month"),pYear=document.querySelector(".js-year"),daysContainer=document.querySelector(".js-days-container"),monthLeft=document.querySelector(".js-month-left"),monthRight=document.querySelector(".js-month-right"),yearLeft=document.querySelector(".js-year-left"),yearRight=document.querySelector(".js-year-right"),arrows=[monthLeft,monthRight,yearLeft,yearRight],date=new Date,month_names=["January","February","March","April","May","June","July","August","September","October","November","December"],month=date.getMonth(),year=date.getFullYear();pMonth.innerHTML=month_names[month],pYear.innerHTML=year;var firstDate=month_names[month]+" 1 "+year,dayInWeek=new Date(firstDate).toDateString().substring(0,3),dayNames=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayIndex=dayNames.indexOf(dayInWeek),daysNumber=new Date(year,month+1,0).getDate(),table=document.createElement("table");function render_calendar(){for(var e=date.getDate(),t=date.getMonth()+1,a=date.getFullYear(),n=document.createElement("tr"),r=0;r<=6;r++){var d=document.createElement("td");d.innerHTML="SMTWTFS"[r],n.appendChild(d)}table.appendChild(n);for(var o=document.createElement("tr"),l=0;l<=6&&l!=dayIndex;l++){var m=document.createElement("td");m.innerHTML="",o.appendChild(m)}for(var s=1,c=dayIndex;c<=6;c++){var i=document.createElement("td");s==e&&t==month+1&&a==year&&i.classList.add("dayToday"),i.innerHTML=s,s++,o.appendChild(i)}table.appendChild(o);for(var h=0;h<=4;h++){for(var y=document.createElement("tr"),u=0;u<=6;u++){if(s>daysNumber)return table.appendChild(y),table;var p=document.createElement("td");s==e&&t==month+1&&a==year&&p.classList.add("dayToday"),p.innerHTML=s,s++,y.appendChild(p)}table.appendChild(y)}return table}table.classList.add("table"),daysContainer.appendChild(table),arrows.forEach((function(e){e.addEventListener("click",(function(t){for(e.classList.contains("js-month-left")?0==month?(month=11,year--):month--:e.classList.contains("js-month-right")?11==month?(month=0,year++):month++:e.classList.contains("js-year-left")?year--:year++,pMonth.innerHTML=month_names[month],pYear.innerHTML=year,firstDate=month_names[month]+" 1 "+year,dayInWeek=new Date(firstDate).toDateString().substring(0,3),dayIndex=dayNames.indexOf(dayInWeek);table.hasChildNodes();)table.removeChild(table.lastChild);render_calendar()}))})),render_calendar();
//# sourceMappingURL=script.js.map