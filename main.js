var app = new Vue({
    el: '#root',
    data: {

    },

    mounted() {
        const self = this;

        axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(function(risposta) {


            });

    }
});
