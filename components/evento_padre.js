Vue.component('e_padre', {

   
    template:`
     
        <div>
            <h3>{{saludo}}</h3>
            <div v-for="post in posts" :style="{ fontSize: tamPost + 'em' }">
               {{post.title}}
            
            <button v-on:click="agrandar">AGRANDAR</button>
            
            </div>

        </div>
    
    `,

    data() {
        return {
            posts:[{title:"POST 1"},{title:"POST2"},{title:"POST3"}],
            saludo:"ESTAMOS EN  DATA PADRE ",
            tamPost :1
         
        }
    },

    methods: {
        
        agrandar:function(){

             this.tamPost=this.tamPost+1

        }

    },
})



