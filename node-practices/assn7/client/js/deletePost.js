const deletePost = (postID) => {
    fetch('http://localhost:3000/posts/' + postID, {
        method: 'DELETE',
        headers: {"Content-Type": "application/json"}
    }).then(function(response) {
        getPosts()
    })
}

document.querySelector('.button-primary').onclick = deletePost
