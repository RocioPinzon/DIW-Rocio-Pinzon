Vue.config.devtools=true

new Vue({
    el:"#app",
    data:{
    nuevaTarea:'',
    tareas:[],
    },
    
    methods:{
    guardarTarea(){
    this.tareas.push(this.nuevaTarea);
    this.nuevaTarea="";
    }
    }
})
    