function printed_el_text( el ){
	var text = el.innerHTML,
		i = 0,
		__print = function (){
			i++;
			if( i <= text.length ){
				el.innerHTML = text.substr(0, i);
				setTimeout( __print, 100 );
			}
		};
		__print();
};

printed_el_text( document.getElementById("type_text") );