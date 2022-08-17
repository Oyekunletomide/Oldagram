const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const likeIcon1 = document.getElementById("icon-logo-like1")
const likeIcon2 = document.getElementById("icon-logo-like2")
const likeIcon3 = document.getElementById("icon-logo-like3")
const vangoghLike = document.getElementById("vangogh-name")
const courbetLike = document.getElementById("courbet-name")
const ducreuxLike = document.getElementById("ducreux-name")

likeIcon1.addEventListener("click", function(){
    vangogh()
})
likeIcon2.addEventListener("click", function(){
    courbet()
})
likeIcon3.addEventListener("click", function(){
    ducreux()
})
function vangogh(){
    let inn = `${posts[0].likes++} likes`
    vangoghLike.innerHTML = inn
}

function courbet(){
    let inn1 = `${posts[1].likes++} likes`
    courbetLike.innerHTML = inn1
}
function ducreux(){
    let inn2 = `${posts[2].likes++} likes`
    ducreuxLike.innerHTML = inn2
}


