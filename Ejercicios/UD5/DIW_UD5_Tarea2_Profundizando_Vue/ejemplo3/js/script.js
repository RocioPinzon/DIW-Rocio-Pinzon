
const app=new Vue({

    el: "#app",

        data: {
           listado_prohibido:["prohiba", "123", "666", "dios", "abc"],
           password:"",
           estado:"",
        },

        watch:{
            password(nuevo){
               
                if(this.listado_prohibido.includes(nuevo)){
            
                    this.estado="Contraseña no valida";
                    return false;
                }else{
                    this.estado="Contraseña valida"; 
                }
        }},

        methods:{
           
        }


});