/*
 * Write your client-side JS code in this file.  Don't forget to include your
 * name and @oregonstate.edu email address below.
 *
 * Name: Blake Babb
 * Email: babbb@oregonstate.edu
 */

let allPosts = []
for (let i = 0; i < document.getElementsByClassName("post").length; i++) {
    allPosts[i] = document.getElementsByClassName("post").item(i)
}

// 1: inserting new posts

class SellSomethingModal {

    static dialogue = document.getElementById("sell-something-modal")
    static backdrop = document.getElementById("modal-backdrop")
    static visible = false;

    static toggle() {
        if (this.visible) this.hide()
        else this.show()
        this.visible = !this.visible
    }

    static show() {
        this.dialogue.className = "modal-dialogue"
        this.backdrop.className = null
    }

    static hide() {
        this.dialogue.className = "hidden"
        this.backdrop.className = "hidden"
    }
}

let newPost = new Post()

function SellSomethingModalToggle() {
    SellSomethingModal.toggle()
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].type === "text") inputs[i].value = ""
    }
    newPost.text = undefined
    newPost.price = undefined
    newPost.city = undefined
    newPost.condition = undefined
    newPost.imageURL = undefined
}

function setSellSomethingModalToggle(elementId) {
    document.getElementById(elementId).addEventListener("click", SellSomethingModalToggle)
}

setSellSomethingModalToggle("sell-something-button")
setSellSomethingModalToggle("modal-cancel")
setSellSomethingModalToggle("modal-close")

let inputs = document.getElementsByTagName("input")
for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("input", function () {
        newPost.text = document.getElementById("post-text-input").value
        newPost.price = document.getElementById("post-price-input").value
        newPost.city = document.getElementById("post-city-input").value
        newPost.condition = "new"
        newPost.imageURL = document.getElementById("post-photo-input").value
    })
}

document.getElementById("modal-accept").addEventListener("click", function () {
    if (newPost.text !== undefined && newPost.price !== undefined && newPost.city !== undefined &&
        newPost.condition !== undefined && newPost.imageURL !== undefined) {
        newPost.insertNew()
        SellSomethingModalToggle()

        allPosts = []
        for (let i = 0; i < document.getElementsByClassName("post").length; i++) {
            allPosts[i] = document.getElementsByClassName("post").item(i)
        }
    } else {
        alert("Please fill out all fields")
    }
})

function Post(text, price, city, condition, imageURL) {
    this.text = text
    this.price = price
    this.city = city
    this.condition = condition
    this.imageURL = imageURL
}

Post.prototype.insertNew = function () {
    let parent = document.getElementById("posts")

    let post = document.createElement("div")
    post.className = "post"
    post.dataset.price = this.price
    post.dataset.city = this.city
    post.dataset.condition = this.condition.toLowerCase()

    let postContents = document.createElement("div")
    postContents.className = "post-contents"

    let postImageContainer = document.createElement("div")
    postImageContainer.className = "post-image-container"

    let postImage = document.createElement("img")
    postImage.src = this.imageURL
    postImage.alt = this.text

    let postInfoContainer = document.createElement("div")
    postInfoContainer.className = "post-info-container"

    let postTitle = document.createElement("a")
    postTitle.href = "#"
    postTitle.className = "post-title"
    postTitle.innerText = this.text
    let postPrice = document.createElement("span")
    postPrice.className = "post-price"
    postPrice.innerText = "$" + this.price
    let postCity = document.createElement("span")
    postCity.className = "post-city"
    postCity.innerText = "(" + this.city + ")"


    postImageContainer.appendChild(postImage)
    postInfoContainer.appendChild(postTitle)
    postInfoContainer.appendChild(postPrice)
    postInfoContainer.appendChild(postCity)

    postContents.appendChild(postImageContainer)
    postContents.appendChild(postInfoContainer)

    post.appendChild(postContents)

    parent.appendChild(post)

    return post
}

// 2: filtering posts

let parent = document.getElementById("posts")

function updatePostFilter() {
    let text = document.getElementById("filter-text").value
    let min = document.getElementById("filter-min-price").value
    let max = document.getElementById("filter-max-price").value
    let city = document.getElementById("filter-city").value

    for (let i = 0; i < allPosts.length; i++) {
        let selPost = allPosts[i]
        selPost.remove()
        if (matchText(selPost, text) &&
            matchMinPrice(selPost, min) &&
            matchMaxPrice(selPost, max) &&
            matchCity(selPost, city) &&
            matchCondition(selPost)) {
            parent.appendChild(selPost)
        }
    }
}

document.getElementById("filter-update-button").addEventListener("click", updatePostFilter)

function matchText(post, text) {
    let innerText = post.getElementsByTagName("a")[0].innerText.toLowerCase()
    if (text === "") return true
    else return innerText.includes(text.toLowerCase())
}

function matchMinPrice(post, min) {
    if (min === "") return true
    else return Number(post.dataset.price) >= Number(min)
}

function matchMaxPrice(post, max) {
    if (max === "") return true
    else return Number(post.dataset.price) <= Number(max)
}

function matchCity(post, city) {
    let innerCity = post.dataset.city.toLowerCase()
    if (city === "") return true
    else return innerCity.includes(city.toLowerCase())
}

function matchCondition(post) {
    let allFalse = true
    let conditionBoxes = document.getElementsByName("filter-condition")
    for (let i = 0; i < conditionBoxes.length; i++) {
        if (conditionBoxes[i].checked) {
            allFalse = false
            if (conditionBoxes[i].value === post.dataset.condition) return true
        }
    }
    return allFalse
}