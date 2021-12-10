const app = new Vue({
    el: "#root",
    data: {
        mailList: [],
    },
    methods: {

    },
    created() {
        for (let i = 0; i < 10; i++) {
            let newObj = {
                mail: null,
                psw: null,
            }
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((response) => {
                newObj.mail = response.data.response;
                axios.get("https://flynn.boolean.careers/exercises/api/random/word")
                .then((response) => {
                    newObj.psw = response.data.response + Math.floor(Math.random() * 1000);
                    this.mailList.push(newObj);
                });
            });
        }
    },
});