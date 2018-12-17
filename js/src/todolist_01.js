//click enter to create list
//double-click to make the list transferred to the Done List
//list item에 마우스 오버 시, event추가
//list item 수정하거나 삭제

// click enter to create list
function newElements(){
	if (window.event.keyCode == 13){
		var li = document.createElement('li');
		var inputValue = document.getElementsByClassName('mustdoinput')[0].value;
		var t = document.createTextNode(inputValue);
    li.appendChild(t);

		if(inputValue === ''){
			alert("please write something here");
		} else {
			document.getElementById('mustUL').appendChild(li);
		}	
		document.getElementsByClassName('mustdoinput')[0].value = ""; 
		}
} 

//click Li to make the clicked Li line-through
 var list = document.querySelector('ul');
 var doneUL = document.getElementById('doneUL');
 var doneList = document.createElement('li');
 var i;
 
 list.addEventListener('click', function(ev) {
 // ev.target refers to the clicked <li> element 
 // event 객체의 target 사용: 클릭한 요소를 가져옴
 // classList class 이름을 toggle하여 삭제 또는 추가
   if (ev.target.tagName === 'LI') {
     ev.target.classList.toggle('checked');
   }
 }, false);


//click Li tag to make the list transferred to the Done List from must do List
 var i;
 var li = document.getElementsByTagName('LI');
 var doneUL = document.getElementById('doneUL');
 var doneList = document.createElement('LI');


 for(i=0; i<li.length; i++){
 	li[i].onclick = function(){
 		this.style.display = 'block';
 		doneUL.appendChild(this);
 	}
 }

//li에 mouseenter했을때, li에 닫기 button 

var myNodelist = document.getElementsByTagName('LI');
var i;

for(i = 0; i < myNodelist.length; i++){
	var span = document.createElement('SPAN');
	var x = document.createTextNode("\u00D7");
	span.className = 'close';
	span.appendChild(x);
	myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item

var close = document.getElementsByClassName('close');
var i;

for(i=0; i<close.length; i++){
	close[i].onclick = function(){
		var div = this.parentElement;
		div.style.display = 'none';
	}
}


