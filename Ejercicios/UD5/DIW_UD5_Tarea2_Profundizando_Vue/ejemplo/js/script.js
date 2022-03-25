const app=new Vue({

    el: "#app",

        data: {

            fotografias:[]
        },

        created() {
            
            url="https://jsonplaceholder.typicode.com/photos";
            // Make a request for a user with a given ID
            axios.get(url)
              .then(function (response) {
                this.fotografias=response.data;
              })
              .catch(function (error) {
                console.log(error);
              })
              
        }
});