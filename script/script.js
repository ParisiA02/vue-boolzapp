var app = new Vue({
    el: "#app",
    data:{
        contacts:[
            {
                name: "Michele",
                avatar: "img/avatar_1.jpg",
                active: false,
                messages: [
                    {
                        date:"10/01/2020 15:30:55",
                        text:"Hai portato a spasso il cane?",
                        status:"sent"
                    },
                    {
                        date:"10/01/2020 15:30:55",
                        text:"Ricordati di dargli da mangiare",
                        status:"sent"
                    },
                    {
                        date:"10/01/2020 16:15:22",
                        text:"Tutto fatto",
                        status:"received"
                    }
                ]
            },
            {
                name: "Fabio",
                avatar: "img/avatar_2.jpg",
                active: false,
                messages: [
                    {
                        date:"20/03/2020 16:30:00",
                        text:"Ciao come stai?",
                        status:"sent"
                    },
                    {
                        date:"20/03/2020 16:30:55",
                        text:"Bene Grazie!",
                        status:"received"
                    },
                    {
                        date:"20/03/2020 16:31:34",
                        text:"Devo andare a fare la spesa.",
                        status:"received"
                    }
                ]
            },
            {
                name: "Samuele",
                avatar: "img/avatar_3.jpg",
                active: true,
                messages: [
                    {
                        date:"28/03/2020 10:20:40",
                        text:"La Marianna va in campagna",
                        status:"received"
                    },
                    {
                        date:"28/03/2020 10:10:40",
                        text:"Sicuro di non aver sbagliato chat?",
                        status:"sent"
                    },
                    {
                        date:"28/03/2020 10:30:40",
                        text:"Ah scusa!",
                        status:"received"
                    }
                ]
            },
            {
                name: "Luisa",
                avatar: "img/avatar_4.jpg",
                active: false,
                messages: [
                    {
                        date:"10/01/2020 15:30:55",
                        text:"pizzeria?",
                        status:"sent"
                    },
                    {
                        date:"10/01/2020 15:50:00",
                        text:"Meglio cinema",
                        status:"received"
                    }
                ]
            }
        ]
    },
    methods:{
        removeActive(){
            for(let i=0; i < this.contacts.length; i++){
                this.contacts[i].active = false;
            }
        },
        addActive(i){
            this.contacts[i].active = true;
        }
    }
});
   