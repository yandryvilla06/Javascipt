Vue.component('hijo',{

    template: `
      <div>

       <h2>SOY UN HIJO</h2>
       <p>Este numero viene de Padre {{numero}}</p>
       <p>Este numero viene de data Padre {{numPapa}}</p>
      </div>
     `,
    
     props:['numero','numPapa']
    
})
