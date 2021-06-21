
	function myfun(){
		var x = document.getElementsByClassName( "zebrastrip");
	for (var i=0; i < x.length; i++) {
		
			x[i].style.backgroundColor= "black";
			x[i].style.color="white";
		}
	}

/*function myfun(){
		var allRows = document.getElementByClassName( "zebra");
	for (var i=0; i < allRows.length; i++) {
		if (i % 2 == 0){
			allRows[i].classList.add("paint-row");
		}
	}}
*/


