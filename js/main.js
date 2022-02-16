Vue.createApp({
    data() {
        return {
            urlAPIPost: 'https://jsonplaceholder.typicode.com/posts',
            posts: []
        }
    },
    methods: {
        getPosts: async function() {
            // Pedimos la información
            const fetchPosts = await fetch(this.urlAPIPost);
            // Convertimos a JSON el texto plano
            const jsonPosts = await fetchPosts.json();
            this.posts = jsonPosts;
        }
    },
    mounted: function() {
        // Constructor
        // Cargamos la información
        this.getPosts();
    }
}).mount('#app')