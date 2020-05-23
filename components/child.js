Vue.component('child',{
    template:/*html*/
     //TODO : remover el button porque la propiedad number sera sobreescrita desde el componente padre(parent)
     //Por esta razon necesitamos usar Vuex
    `<div class="py-5 bg-success">
    <h4>Child Component: {{number}}</h4>
    <h5>Name: {{name}}</h5>
    <button class="btn btn-warning" @click="number++">+</button>
    </div>
    `,
props:['number'],
data() {
    return {
        name:'Yarince'
    }
},
mounted() {
    this.$emit('childName',this.name);
},
})