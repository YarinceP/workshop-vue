new Vue({
el:'#app',
data: {
    message:'Soy el mensaje largo original',
    counter:0,
},
computed: {
    reversedMessage(){
        return this.message.split('').reverse().join('');
    },
    color(counter){
        return {
            'bg-success':this.counter <=10,
            'bg-warning':this.counter > 10 && this.counter <= 20,
            'bg-danger':this.counter >20,
        }
    }
    
},
});