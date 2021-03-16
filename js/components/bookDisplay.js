app.component('book-display', {
    props: {
        book: {
            type: String,
            required: true,
            default: null
        }
    },
    template:
        /*html*/
        `<ul class="col-sm-12 col-md-6 col-xl-4">
        <a class="list-group-item list-group-item-action active" :href="this.bookObj.selfLink"> {{ this.bookObj.volumeInfo.title }}</a>
        <li class="list-group-item" v-if="this.bookObj.volumeInfo.authors">{{this.authors}}</li>
        <li class="list-group-item" v-if="this.bookObj.volumeInfo.publishedDate">{{this.bookObj.volumeInfo.publisher}}, {{this.bookObj.volumeInfo.publishedDate}}</li>
        <li class="list-group-item"><img :src="this.bookObj.volumeInfo.imageLinks.thumbnail"></li>
        <li class="list-group-item" v-if="this.bookObj.volumeInfo.description">{{this.bookObj.volumeInfo.description}}</li>
        <li class="list-group-item" v-if="this.bookObj.volumeInfo.averageRating">Avereage Rating: {{this.bookObj.volumeInfo.averageRating}}</li>
        </ul>`,
    computed: {
        bookObj() {
            if(this.book != null)
                return JSON.parse(this.book)
            else
                return null;
        },
        authors() {
            return JSON.stringify(this.bookObj.volumeInfo.authors).replace(/[\[\]"]+/g,"");
        }
    }
})