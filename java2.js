function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
}



function loaduser() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUser(data));

};
function loadpost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => console.log(data));
};
// loadpost() // auto called 
function displayUser(data) {
    const ul = document.getElementById('users');
    // console.log(data);
    for (const user of data) {
        console.log(user.name)
        // console.log(user.name);// just check
        const li = document.createElement('li');
        li.innerText = `name: ${user.name} emails : ${user.email}`;
        ul.appendChild(li);


    };
}
