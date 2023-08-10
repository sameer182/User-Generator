const app = Vue.createApp({
    data() {
        return {
            firstName: 'Sameer',
            lastName: 'Limbu',
            email: 'sam@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg',
            
        }
    },
   
})

app.mount('#app')