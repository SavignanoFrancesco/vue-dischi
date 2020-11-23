var app = new Vue({
    el: '#root',
    data: {
        //array che conterrà la risposta generata dall'API
        cds: [],
        //variabile contenente il valore del select
        genre_selected: 'All',
        //
        order_selected: 'Unsorted'
    },
    methods: {
        //funzione che passa il valore selezionato nella pagina alla variabile genre_selected
        genreChange(value){
            // console.log(value);
            this.genre_selected = value;
        },
        //
        sortChange(value){
            if (value == 'Unsorted') {
                this.unsortedCds();
            }else if (value == 'Ascending') {
                this.sortByYear(this.cds)
            }else if (value == 'Descending') {
                this.sortByYearDescending(this.cds)
            }
        },
        //funzione che prende come parametro l'array di cd e lo riordina in base al valore della proprietà anno degli oggetti
        sortByYear(cds_array){

            cds_array.sort(function(a, b) {
                return a.year - b.year;
            });
            app.$forceUpdate();

        },
        //funzione che prende come parametro l'array di cd e lo riordina in base al valore della proprietà anno degli oggetti
        sortByYearDescending(cds_array){

            cds_array.sort(function(a, b) {
                return b.year - a.year;
            });
            app.$forceUpdate();

        },
        //funzione che prende come parametro l'array di cd e lo riordina in base al valore della proprietà anno degli oggetti
        unsortedCds(){
            const self = this;
            axios
                .get('https://flynn.boolean.careers/exercises/api/array/music')
                .then(function(risposta) {

                    self.cds = risposta.data.response;

                });

        }
    },
    mounted() {

        this.unsortedCds();

    }
});
