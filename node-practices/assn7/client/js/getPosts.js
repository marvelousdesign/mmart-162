//1. define functions:
const getPosts = () => {
    container.innerHTML = ''
    fetch('http://localhost:3000/posts/').then(response =>{
        return response.json();
      }).then(showPosts)
}

const showPosts = (posts) => {
    console.log(posts)
    const container = document.getElementById('container')
    posts.forEach(post => {
        let template = `
            <h2>${post.name}</h2>
            <img src="${post.imageURL}">
            <p>${post.text}</p>
            <a href="${post.url}">More</a>
            <button class="button-primary right post" onclick="deletePost()">Delete</button>
            <div class="comments">
                <h3>Comments</h3>
                <p>TODO next week...</p>
            </div>`
        container.innerHTML += template;
    })
}
getPosts()

// This gets and show posts in the index.html via template.
