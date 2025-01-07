// console.log(" I am a VUE ")



const app = Vue.createApp({
    data(){
        return{

            books: [
                {
                    title: "learn how to code",
                    author: "mohamed",
                    age: 20,
                    img: "/img/learnCode.jpeg",
                    isFav: true
                },
                {
                    title: "learn how to SLEEP",
                    author: "nonameMan",
                    age: 30,
                    img: "/img/learnSleep.jpeg",
                    isFav: true
                },
                {
                    title: "learn how to EAT",
                    author: "Annonymous",
                    age: 40,
                    img: "/img/learnEat.jpeg",
                    isFav: true
                }

            ],
            showInfo: true,
            link: "https://www.google.com/"
           
        }
    },
    methods:{
        agePlus(){
            // alert(age)
            this.age++
        },
        changeTitle(){
            this.title = "Learn VUE JS"
        },
        mouseOverHandler(event, data){
            console.log("Mouse Over", event.type , data)
        },
        mouseLeaveHandler(event){
            console.log("Mouse Leave", event.type)
        },
        dbclickHandler(event){
            console.log("dbClick", event.type)
        },
        clickFav(book){
            // alert('clickedd')
            book.isFav=!book.isFav
        }  
        
    },
    computed:{
        filteredBooks(){
            return this.books.filter(book=>{
                return book.isFav;
            })
        }
    }
})



app.mount('#app')