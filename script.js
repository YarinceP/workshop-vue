new Vue({
    el: '#appVue',
    data:{
        list:[
            
        ],
        newKeep:'',
    },
    methods: {
        addKeep: function(){
            this.list.push({keep:this.newKeep,completed:false});
            this.newKeep='';
        }
    },
});