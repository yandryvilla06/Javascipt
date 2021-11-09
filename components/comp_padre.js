 Vue.component('padre',{

    template: `
     
     <div>
       <h1>SOY PADRE</h1>
       <p>Numero de data del padre {{numPapa}}</p>
       <hijo numero="5122" ></hijo>
       <hijo v-bind:numPapa="numPapa"></hijo>
     </div>
    `,


    data() {
        return {
            numPapa:12
        }
    },
   

})
