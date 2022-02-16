Vue.createApp({
    data() {
        return {
            urlAPIPost: 'https://jsonplaceholder.typicode.com/posts',
            urlAPIUsers: 'https://jsonplaceholder.typicode.com/users',
            loading: true,
            posts: [{
                    "userId": 1,
                    "id": 1,
                    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
                },
                {
                    "userId": 1,
                    "id": 1,
                    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
                },
                {
                    "userId": 1,
                    "id": 1,
                    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
                },
                {
                    "userId": 1,
                    "id": 1,
                    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
                },
                {
                    "userId": 1,
                    "id": 1,
                    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
                }
            ],
            users: [],
            pag: 1,
            maxElementsPag: 5,
            totalpages: 0
        }
    },
    methods: {
        getNameUser: function(id) {
            return this.users.filter(user => id === user.id)[0].name;
        },
        getUsers: async function() {
            // Pedimos la informacion
            const fetchUsers = await fetch(this.urlAPIUsers);
            // Convertimos a JSON el texto plano
            const jsonUsers = await fetchUsers.json();
            // Guardamos users
            this.users = jsonUsers;
        },
        nextPag: function() {
            this.pag = this.pag + 1;
        },
        prevPag: function() {
            this.pag = this.pag - 1;
        },
        getPostPag: function() {
            const posInicio = (this.pag - 1) * this.maxElementsPag;
            const posFinal = posInicio + this.maxElementsPag;
            return this.posts.slice(posInicio, posFinal);
        },
        getPosts: async function() {
            this.loading = true;
            // Pedimos la informacion
            const fetchPosts = await fetch(this.urlAPIPost);
            // Convertimos a JSON el texto plano
            const jsonPosts = await fetchPosts.json();
            // Guardamos post
            this.posts = jsonPosts;
            // Cuando se cargan posts -- loading = false
            this.loading = false;
            // Calculamos el numero de paginas
            this.totalpages = Math.ceil(this.posts.length / this.maxElementsPag);
        }
    },
    mounted: function() {
        // Constructor
        // Cargamos la informacion
        this.getPosts();
        this.getUsers();
    }
}).mount('#app')