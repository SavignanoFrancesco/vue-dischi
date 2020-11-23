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
        },
        sortByYear(cds_array){
            let flag = true;
            while(flag == true){
                flag = false;
                for (let i = 1; i < cds_array.length; i++) {

                    if (parseInt(this.cds[i].year) < parseInt(this.cds[i - 1].year)) {

                        let tmp = this.cds[i - 1].year;
                        this.cds[i - 1].year = this.cds[i].year;
                        this.cds[i].year = tmp;

                        flag = true;

                    }

                }
            }

        }
    },
    mounted() {
        const self = this;

        axios
            .get('https://flynn.boolean.careers/exercises/api/array/music')
            .then(function(risposta) {

                self.cds = risposta.data.response;
                self.sortByYear(self.cds);
                console.log(self.cds);
            });



    }
});
