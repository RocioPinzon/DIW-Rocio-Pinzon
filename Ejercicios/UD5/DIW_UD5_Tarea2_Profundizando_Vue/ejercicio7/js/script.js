
const app=new Vue({

    el: "#app",

        data: {
            
            datosFormulario: {
                nombre: '',               
                apellidos: '',              
                mensaje: '',               
                contacto: [],               
                productos: ['producto1'],
                acepta: false,             
            },
        
           
        },

        watch:{
            datosFormulario:{

                handler(nuevo,viejo){
                    window.localStorage.setItem("formulario", JSON.stringify(this.datosFormulario));
                },
                deep:true
                //guardar el objeto datosFormulario en localStorage



            },
        },

            
        created(){
            //cargar el objeto datosFormulario desde  localStorage
            if(window.localStorage.getItem("formulario")){
                this.datosFormulario=JSON.parse(window.localStorage.getItem("formulario"));

            }
        
        },
        
        methods:{
            validaCampo(campo){
                if(campo){
                    return false;
                }else{
                    return true;
                }
            }
        }

});
