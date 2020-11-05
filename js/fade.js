/****************************************************************************
 *				Animaciones para aparecer cualquier etiqueta 				*
 *	Utilizar la clase hide para ocultar la etiqueta 						*
 *	a la que se le quiera dar el efecto										*
 *	existen 4 animaciones las cuales se agregan con las siguientes clases	*
 *	1)fade-up	 2)fade-down 	3)fade-right 	4)fade-left					*
 *																			*
 *	RECORDATORIO: utilizar ambas clases hide y la animacion que se desea	*
 * 	version:0.1																*
 ************************Desarrollar version jquery**************************
*/

window.addEventListener('scroll',function(){
	
	function fade(direction){

		var imagen = document.querySelectorAll('.fade'+direction);

		for (var i = 0; i < imagen.length; i++) {
		
			var altura = window.innerHeight/1.2;
			var distancia = imagen[i].getBoundingClientRect().top;

			imagen[i].classList.add(direction);

			if (distancia <= altura) {
				imagen[i].classList.add('show');
			}else{
				imagen[i].classList.remove('show');
			}
		}
	}
	fade('Up');
	fade('Down');
	fade('Right');
	fade('Left');
});