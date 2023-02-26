const loadUsers = () => {
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data => displayUser(data));
}

const displayUser = user => {
    const name = document.getElementById('name');
    name.innerText =user.results[0].name.title + ' ' + user.results[0].name.first + ' ' + user.results[0].name.last
    const gender = document.getElementById('gender');
    gender.innerText = user.results[0].gender;
    console.log(user.results[0].picture.large)
    const container = document.getElementById('container');
    const div = document.createElement('div');
    div.innerHTML = `
    <img src="${user.results[0].picture.large}">
    <p> Location: ${user.results[0].location.state},${user.results[0].location.city},${user.results[0].location.country},${user.results[0].location.postcode}. </p>
    `
    container.appendChild(div);
}

loadUsers();