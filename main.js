var app = new Vue({
    el: '#root',
    data: {
        cds: [],
        genre_selected: 'All'
    },
    methods: {
        genreChange(value){
            // console.log(value);
            this.genre_selected = value;
        }
    },
    mounted() {
        const self = this;

        axios
            .get('https://flynn.boolean.careers/exercises/api/array/music')
            .then(function(risposta) {
                self.cds = risposta.data.response;
            });

    }
});
