
const app=new Vue({

    el: "#app",

        data: {
            
            usuarios:[],
            usuarioActual:null,
        },

        methods:{
            pulsaUsuario: function(usuario){
                this.usuarioActual=usuario;
            }
        },

        created() {
            
           var url="https://randomuser.me/api/?results=15";
        // Make a request for a user with a given ID
            

            fetch(url)
            .then(response => response.json())                  
                .then(data => {
                    
                    this.usuarios=data.results;
                });
                
        }
});