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
    },
    quitarTarea(){
        //const arr = ["vds", "vddfsds", "vds"];
        const value = this.nuevaTarea;
        
        this.tareas = this.tareas.filter(function(x) {
            return x !== value;
            
        })
    }
    }
})
    