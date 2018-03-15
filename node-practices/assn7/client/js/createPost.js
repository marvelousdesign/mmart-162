const createPost = () => {
    const data = {
        name: document.querySelector('#name').value,
        imageURL: document.querySelector('#imageURL').value,
        url: document.querySelector('#url').value,
        text: document.querySelector('#text').value
    }
    console.log('Saving the following object to the server:', data);

    fetch('http://localhost:3000/posts/', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {"Content-Type": "application/json"}
    }).then((response) => {
        return response.json();
    }).then((data) => {
        document.querySelector('#name').value = ''
        document.querySelector('#url').value = ''
        document.querySelector('#imageURL').value = ''
        document.querySelector('#text').value = ''
        document.querySelector('.modal').classList.toggle('show')
        getPosts()
    })
}

document.querySelector('.button-primary').onclick = createPost
