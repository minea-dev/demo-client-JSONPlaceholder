/*Vue.createApp({
    data() {
        return {
            URL_API: 'https://jsonplaceholder.typicode.com/',
            POST: 'posts',
            USER: 'users',
            COMMENT: 'comments',
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
            comments: [],
            pag: 1,
            maxElementsPag: 5,
            totalpages: 0,
            showBody: false,
            showBodySet: new Set(),
        }
    },
    methods: {
        getArticleComments: function(id) {
            return this.comments.filter(com => id === com.postId);
        },
        capitalizationFirstLetter: function(str) {
            return str.charAt(0).toUpperCase() + str.slice(1);
        },
        getNameUser: function(id) {
            return this.users.filter(user => id === user.id)[0].name;
        },
        getComments: async function() {
            // Pedimos la informacion
            const fetchComments = await fetch(this.URL_API + this.COMMENT);
            // Convertimos a JSON el texto plano
            const jsonComments = await fetchComments.json();
            // Guardamos comments
            this.comments = jsonComments;
        },
        getUsers: async function() {
            // Pedimos la informacion
            const fetchUsers = await fetch(this.URL_API + this.USER);
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
            const fetchPosts = await fetch(this.URL_API + this.POST);
            // Convertimos a JSON el texto plano
            const jsonPosts = await fetchPosts.json();
            // Guardamos post
            this.posts = jsonPosts;
            // Cuando se cargan posts -- loading = false
            this.loading = false;
            // Calculamos el numero de paginas
            this.totalpages = Math.ceil(this.posts.length / this.maxElementsPag);
        },
        toggleBody: function() {
            this.showBody = !this.showBody;
        }
    },
    mounted: function() {
        // Constructor
        // Cargamos la informacion
        this.getPosts();
        this.getUsers();
        this.getComments();
    }
}).mount('#app') */

Vue.createApp({
    data() {
        return {
            urlAPIPost: 'https://jsonplaceholder.typicode.com/posts',
            urlAPIUsers: 'https://jsonplaceholder.typicode.com/users',
            urlAPIComments: 'https://jsonplaceholder.typicode.com/comments',
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
            comments: [],
            pag: 1,
            maxElementsPag: 5,
            totalpages: 0,
            showBodySet: new Set(),
            search: ""
        }
    },
    computed: {
        searchResult: function() {
            const result = this.posts.filter(post => post.title.includes(this.search));
            // Calculamos el numero de paginas
            this.totalpages = Math.ceil(result.length / this.maxElementsPag);
            return result;
        }
    },
    methods: {
        getUserName: function(id) {
            // Filtramos usuarios por el ID del post
            const user = this.users.filter(user => id === user.id)[0];
            // Devolvemos el nombre del usuario
            return user.name;
        },
        getCommentsRelatedToPost: function(postID) {
            // Filtramos comentarios por el ID del post
            const commentList = this.comments.filter(comment => postID === comment.postId);
            // Devolvemos solo los valores que pertenecen a las llaves de "name" y "body" 
            return commentList.map(comment => ({
                name: comment.name,
                body: comment.body,
            }));
        },
        getData: async function(url) {
            // Pedimos la informacion
            const fetchData = await fetch(url);
            // Convertimos a JSON el texto plano
            const jsonData = await fetchData.json();
            // Guardamos data
            return jsonData;
        },
        getUsers: async function(url) {
            this.users = await this.getData(url);
        },
        getComments: async function(url) {
            this.comments = await this.getData(url);
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
            return this.searchResult.slice(posInicio, posFinal);
        },
        getPosts: async function() {
            this.loading = true;
            // Pedimos la informacion
            const fetchPosts = await fetch(this.urlAPIPost);
            // Convertimos a JSON el texto plano
            const jsonPosts = await fetchPosts.json();
            // Guardamos post
            this.posts = jsonPosts;
            this.loading = false;
        },
        // Añadimos el ID del post que queremos mostrar el conntenido
        showBody: function(id) {
            this.showBodySet.add(id);
        },
        // Quitamos el ID del post que queremos esconder el contenido
        hideBody: function(id) {
            this.showBodySet.delete(id);
        },
        // Añadimos o quitamos el ID del post si queremos o no mostrar el contenido
        toggleBody: function(id) {
            // Comprobamos si el Set contiene el ID del post sobre el cual queremos actuar
            switch (this.showBodySet.has(id)) {
                // En caso de que si quitamos el ID del Set
                case true:
                    this.hideBody(id);
                    break;
                    // En caso de que no añadimos el ID al Set
                case false:
                    this.showBody(id);
                    break;
            }
        },

        // Transiciones
        // el contenidor debe cambiar su altura
        addHeightZero: function(el) {
            el.style.height = "0";
        },
        addRealHeight: function(el) {
            el.style.height = `${el.scrollHeight}px`;
        }
    },
    watch: {
        search: function() {
            this.pag = 1;
        }
    },
    mounted: function() {
        // Constructor
        // Cargamos la informacion
        this.getPosts();
        this.getUsers(this.urlAPIUsers);
        this.getComments(this.urlAPIComments);
    }
}).mount('#app')