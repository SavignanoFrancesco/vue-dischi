var app = new Vue({
    el: '#root',
    data: {
        //array che conterrà la risposta generata dall'API
        cds: [],
        //variabile contenente il valore del select
        genre_selected: 'All'
    },
    methods: {
        //funzione che passa il valore selezionato nella pagina alla variabile genre_selected
        genreChange(value){
            // console.log(value);
            this.genre_selected = value;
        },
        //funzione che prende come parametro l'array di cd e lo riordina in base al valore della proprietà anno degli oggetti
        sortByYear(cds_array){
            //variabile che, se vera, indica che sono stati cambiati dei valori per ordinare l'array
            let flag;

            do{

                //variabile che ad ogni giro del do/while viene impostata a false, per indicare che non ci sono stati scambi fino ad ora
                flag = false;

                //scorro l'array confrontando le coppie di oggetti dell'array in posizione i e i-1
                for (let i = 1; i < cds_array.length; i++) {

                    //se l'anno dell'oggetto in i è maggiore dell'anno dell'oggetto precedente, scambia di posizione la coppia di oggetti e imposta flag=true
                    if (parseInt(this.cds[i].year) < parseInt(this.cds[i - 1].year)) {

                        let tmp = this.cds[i - 1].year;
                        this.cds[i - 1].year = this.cds[i].year;
                        this.cds[i].year = tmp;

                        flag = true;

                    }

                }

            //ripeti se ci sono stati scambi di oggetti nell'array
            }while(flag == true);

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
