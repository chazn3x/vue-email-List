const app = new Vue({
    el: "#root",
    data: {
        mailList: [],
    },
    methods: {

    },
    created() {
        for (let i = 0; i < 10; i++) {
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((response) => {
                console.log(response.data.response);
                this.mailList.push(response.data.response);
            });
        }
    },
});