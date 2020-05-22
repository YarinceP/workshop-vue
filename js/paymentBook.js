new Vue({
    el:'#app',
    data:  {
        payment:{
            name:'',
            amount:0,
            paid:false,
        },
        items:[
            {name:'Servicios', amount:200, paid:false},
            {name:'Hosting', amount:500, paid:false},
            {name:'Energia Electrica', amount:752, paid:true},
        ],
    },
    methods: {
        remove(index){
            this.items.splice(index,1)
        },
        //ECMAS 6 syntax
        addPayment(){
            
            this.items.push({
                name: this.payment.name,
                amount:parseFloat(this.payment.amount),
                paid:false,
            })

            this.cleanForm(this.payment);
        },
        cleanForm(payment){
            payment.name = '';
            payment.amount = 0;
        },
        changeStatusPay(item){
            item.paid = !item.paid
        },
        totalAmount(t){
           let total = this.items.reduce(function(a,b){
            switch (t) {
                case 0: return a +(b.paid ? 0 : b.amount);
                case 1: return a +(b.paid ? b.amount : 0);
                case 2: return a +b.amount;
            }   
            },0)
            return total.toFixed(2);
        },
        showAlert(){
            alert("No puede ingresar valores vacios");
        }

    },
});