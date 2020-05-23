Vue.component('parent',{
    template: /*html*/
    `<div class="p-5 bg-dark text-white">
    <h2>Parent Component: {{parentNumber}}</h2>
    <button class="btn btn-danger" @click="parentNumber++">+</button>
    {{parentName}}
    <child :number="parentNumber" @childName="parentName = $event"></child>
    </div>
    `,
    data() {
        return {
            parentNumber:0,
            parentName:''
        }
    },
    
    
});