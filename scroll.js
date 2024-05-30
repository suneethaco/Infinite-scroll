// access key: iAcDqX5HNDt-Mt-6i_1UeRvht5ym6khzJTjSYKfne10(this is the key to connect with unsolash api to js file)
// secret key: WwRV3rjhJmi-7s53ruEL-mKdykIUtpC2pU6wzkYfmWQ
//unsplash API: https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY
const imageContainer = document.getElementById("imageContainer")
const myLoader = document.getElementById("loader")

function controlLoader(){
    myLoader.hidden = false
}
controlLoader()

async function getImages(){
    const response = await fetch("https://api.unsplash.com/photos/?client_id=iAcDqX5HNDt-Mt-6i_1UeRvht5ym6khzJTjSYKfne10")
    const imageData = await response.json()
    imageData.map(function(i){
        let imgUrl = i.urls.full
        const myImageElement = document.createElement("img")
        myImageElement.setAttribute("src", imgUrl)
        // console.log(myImageElement)
        imageContainer.append(myImageElement)
    })//i will poin to each object of array(means each image details(I))
}
getImages()

setTimeout(function(){

    getImages()
    myLoader.hidden = true
},1000)

window.addEventListener("scroll",function(){
    let myClientHeight = document.documentElement.clientHeight
    let myScrollHeight = this.document.documentElement.scrollHeight
    let myScrollTop = document.documentElement.scrollTop
    console.log(myClientHeight, myScrollHeight, myScrollTop)

    if(myClientHeight + myScrollTop >= myScrollHeight){
        getImages()
    }
    
})