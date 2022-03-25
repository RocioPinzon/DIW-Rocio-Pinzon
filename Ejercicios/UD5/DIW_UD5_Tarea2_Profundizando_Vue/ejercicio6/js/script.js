
const app=new Vue({

    el: "#app",

        data: {
            
            url:"",
            numero:20,
            //listado_prohibido:["prohiba", "123", "666", "dios", "abc"],
            resultUsuarios:"",
            estado:"",
            usuarios:[],
            genero:"ambos",
           
        },
        created() {
            var url="https://randomuser.me/api/?results="+this.numero+"&gender="+this.genero;

            fetch(url)
            .then(response => response.json())                  
             .then(data => {
                 
                 this.usuarios=data.results;
             });
         },

        watch:{

            numero(nuevo, antiguo){
                var url="https://randomuser.me/api/?results="+nuevo+"&gender="+this.genero;
                
                axios.get(url)
                .then(response =>
                     this.usuarios=response.data.results);
            },

            genero(nuevo,antiguo){
                var url="https://randomuser.me/api/?results="+this.numero+"&gender="+nuevo;
                
                

                axios.get(url)
                .then(response =>
                     this.usuarios=response.data.results);
    
            }
        
        },

            
        methods:{
        
        }

});
