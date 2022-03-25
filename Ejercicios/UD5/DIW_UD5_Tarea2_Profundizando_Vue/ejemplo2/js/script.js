const app=new Vue({

    el: "#app",

        data: {

            fotografias:[]
        },

        created() {
            
            url="https://jsonplaceholder.typicode.com/photos";
            // Make a request for a user with a given ID
            axios.get(url)
              .then(response  =>
                  this.fotografias=response.data);

                  
        }
});