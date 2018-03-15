const deletePost = (postID) => {
    fetch('http://localhost:3000/posts/' + postID, {
        method: 'DELETE',
        headers: {"Content-Type": "application/json"}
    }).then(function(response) {
        getPosts()
    })
}

document.querySelector('.post').onclick = deletePost

// This selects & deletes .post (but it deletes 1st post rather than the one you are clicking for now..)
// if querySelector had .button-primary it would have adverse effects in the modal,
// instead of adding new posts it would delete posts.
