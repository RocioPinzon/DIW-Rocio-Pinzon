Vue.config.devtools=true

/*new Vue({
    el:"#app2",
    
    data:{
    nuevaTarea:'',
    tareas:[],
    },

    methods:{
    cambiarTexto(){
    this.tareas.push(this.nuevaTarea);
    this.nuevaTarea="";
    }
}
})*/

var example1 = new Vue({
    el: '#example-1',
    data: {
      frase: "Hola mundo"
    }
  })