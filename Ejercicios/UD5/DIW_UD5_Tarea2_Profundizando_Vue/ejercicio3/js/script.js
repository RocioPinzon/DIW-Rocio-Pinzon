Vue.config.devtools=true

new Vue({
    el:"#app",
    data:{
    tarea:null,
    tareas:[]
    },
    
    methods:{
        guardarTarea(){
            let nuevaTarea={
                nombre:this.tarea,
                realizada:false,
            };
        this.tareas.push(nuevaTarea);
        this.tarea="";
        },

        borrarTareas(){
            for(let i=0;i<this.tareas.lenght;i++){
                if(this.tareas[i]==this.tarea){
                    this.tareas.splice(i,1);
                }    
            }
            this.tarea="";
        }
        }
})
    