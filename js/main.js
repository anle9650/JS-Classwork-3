const app = Vue.createApp({
    data() {
        return {
            keyword: '',
            result: null,
            startIndex: 0,
        }
    },
    methods: {
        searchGoogleBooks() {
            fetch('https://www.googleapis.com/books/v1/volumes?q=' + this.keyword + "&startIndex=" + this.startIndex + "&maxResults=20")
                .then(response => response.json())
                .then(json => this.result = json)
        }, 
        nextResults() {
            this.startIndex += 20;
        }, 
        prevResults() {
            this.startIndex -= 20;
        },
        cleanPagination() {
            this.startIndex = 0;
        }
    }


})