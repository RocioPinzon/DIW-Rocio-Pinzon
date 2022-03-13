var example1 = new Vue({
	el: '#example-1',
	data: {
	  frase: "Hola mundo",
	  ancho: '',
	  alto: '',
	  urlkittenbase: 'https://placekitten.com/'
	},
	computed: {
	 urlkittenComputada: function () {
		  if (this.ancho<=50) var anchofinal = 50;
		  else var anchofinal = this.ancho;
		  if (this.alto<=50) var altofinal = 50;
		  else var altofinal = this.alto;			  			  
		  return 'https://placekitten.com/'+anchofinal+'/'+altofinal
		}
	},
  })	