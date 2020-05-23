Vue.component('greet',{
    template: /*html*/
    ` <div>
        <h1 class="text-success">{{greet}}</h1>
        <h3>Welcome to my first component</h3>
    </div>
    `,
    data() {
        return {
            greet:'Hello from Vue'
        }
    },
})