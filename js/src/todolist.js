
// p에 마우스오버했을 때, 색상 변경
// let p= document.getElementsByTagName('p')[0];

// function mouseOver(){
// 	p.style.color = "red";
// }

// function mouseOut(){
// 	p.style.color = "black";
// }

//closebtn에 마우스오버시, x 보여주기
//onmouseenter="myOver()" onmouseout="myOut()"

/*document.getElementsByTagName('i')[1].onmouseover = function() {myOver()};
document.getElementsByTagName('i')[1].onmouseout = function() {myOut()};

window.onload = myOut;
 function myOver(){
 	let closeBtn = document.getElementsByTagName('i')[1];
 	closeBtn.style.display= "block";
 }

  function myOut(){
  let closeBtn = document.getElementsByTagName('i')[1];	
 	closeBtn.style.display = "none";
 }*/




//when clicking x btn, li tag is added with text from Input inserted in.

// let input =document.getElementsByTagName('input')[1];
// input.textContent = "my text"
// let text = '<li>' + input.textContent '</li'>;




// Create a "close" button and append it to each list item

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


// Add a "checked" symbol when clicking on a list item

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
// ev.target refers to the clicked <li> element 
// event 객체의 target 사용: 클릭한 요소를 가져옴
// classList class 이름을 toggle하여 삭제 또는 추가
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
//1. 버튼 클릭했을때 실행할 함수 정의
//2. 클릭했을때 input의 value값을 li에 추가되고, input의 value값 초기화
//3. input의 value값 비어있을때 add하면 메세지 출력


function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";


//추가된 input의 value값을 li에 보여주고, x버튼 클릭 시 사라지게 하기
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
























