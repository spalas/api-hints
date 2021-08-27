function loadpost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayposts(data))
}

loadpost();

function displayposts(posts) {
    const postCantaine = document.getElementById('posts')
    // console.log(posts);// just check it working or not
    for (const post of posts) {

        const div = document.createElement('div');
        div.classList.add('post')
        div.innerHTML = `
        <h3> ${post.title} </h3>
        <p> ${post.body}</p>
        `;
        postCantaine.appendChild(div)
        console.log(post.title);

    }


}