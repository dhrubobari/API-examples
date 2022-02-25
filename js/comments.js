const loadComments = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayComments(data))
}
loadComments();

function displayComments (comments) {
    const commentsContainer = document.getElementById('comments');
    for(const comment of comments){
        const div = document.createElement('div')
        div.classList.add('comment');
        div.innerHTML = `
        <h3>${comment.name}</h3>
        <p></p>
        `;
        commentsContainer.appendChild(div);
        console.log(comment);
    }
}