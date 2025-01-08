
const app = Vue.createApp({
    data(){
        return{
            phones : [
                {
                    brand : "apple",
                    model : "iphone",
                    security : "best",
                    img : "/ph_img/download.jpeg",
                    isFav : true
                },
                {
                    brand : "xiaomi",
                    model : "mi series",
                    security : "good",
                    img : "/ph_img/images.jpeg",
                    isFav : true

                },
                {
                    brand : "redMi",
                    model : "redmi series",
                    security : "fair",
                    img : "ph_img/images (1).jpeg",
                    isFav : true

                },
                {
                    brand : "other_chinese brand",
                    model : "chineses cheap series",
                    security : "poor",
                    img : "ph_img/images (2).jpeg",
                    isFav : false

                }
            ],
            showInfo : true,
            link : "https://www.google.com/"

        }
    },
    methods : {
       clickFav(phone){
        phone.isFav=!phone.isFav
       },
       mouseover(event,data){
        console.log("mouseover is working " , event.type , data )
       },
       mouseleave(event, data){
        console.log("mouseleave is working " , event.type , data )
       },
       dblclick(event, data){
        console.log("DBL clicked worked " , event.type , data )
       }
    },
    computed : {
        filteredPhones(){
            return this.phones.filter(phone=>{
                return phone.isFav;
            })
        }
    }
})


app.mount('#app')