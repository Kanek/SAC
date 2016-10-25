$(document).ready(function(){
	var opButtons 	= document.querySelectorAll(".opButton");
	var Categorias 	= [];
	FrontMannager.setOpButtonsListeners(opButtons);

	$('#formNuevaCategoria').submit( function(){
		var str = '';
		var inputs = $('#formNuevaCategoria :input[type=text]');

		if ( Categorias.indexOf(inputs[0].value) == -1 ) {
			Categorias.push(inputs[0].value);
			str 		= 'Se agrego la categoria correctamente.';
			var d 		= Date()
			var date 	= d.split(" ");
			rstr 	= '<tr><td>'+Categorias[Categorias.length - 1]+'</td><td>'+date[1]+'/'+date[2]+'/'+date[3]+'</td></tr>';
			FrontMannager.addTableInfo('catTable', rstr);
		}else{
			str = 'La categoria ya existe. Ingrese una categoria inexistente.';
		}
		alert(str);
		return false;
	} );
});
