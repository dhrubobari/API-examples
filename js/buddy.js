const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => displayBuddies(data))
}
loadBuddies();

const displayBuddies = data => {
    const buddies = data.results; // data vitore result ache
    const buddiesDiv = document.getElementById('buddies') // div take anlam
    for(const buddy of buddies){
        console.log(buddy.name.first, buddy.name.last) // name ekta object e ase, buddy > name > fist
        const p = document.createElement('p')
        p.innerText = `Name: ${buddy.name.first} ${buddy.name.last} Email: ${buddy.email}`; // name ekta object
        buddiesDiv.appendChild(p); // buddiesDiv e main id ase sekhane paragraph dibe
    }
}