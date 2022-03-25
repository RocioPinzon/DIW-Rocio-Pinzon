const app=new Vue({

    el: "#app",

        data: {

           NUMERO_ANIMALES: 9,
           animales: []

        },

        methods: {
            pulsacion(indice) {

                //console.log(indice);
                this.animales[indice].numeroPulsaciones++;
            }

            /*pulsacion(a) { 
                a.numeroPulsaciones++;
                //esto es sin poner lo de índice, q en este caso funciona igual, pero se hacen copias, así q no es tan efectivo

            }*/

        },

        created() {
            for(let i=0;i<this.NUMERO_ANIMALES;i++) {

                let numero=Math.round(Math.random());
                let codigoAnimal="";

                if(numero==0)
                    codigoAnimal="perro";
                else
                    codigoAnimal="gato";

                let a={
                    tipo: codigoAnimal,
                    numeroPulsaciones: 0
                };

                this.animales.push(a);

            }
        }
});