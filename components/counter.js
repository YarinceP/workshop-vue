Vue.component('counter',{
   template://html 
   `
   <div class="row">
    <button class="btn btn-primary" @click="counter++">+</button>
    <button class="btn btn-danger" @click="counter--">-</button>
    <h4 class="text-center col-2" >
    {{counter}}
    </h4>
   </div>
   `,
   data() {
       return {
           counter:0
       }
   }, 
})