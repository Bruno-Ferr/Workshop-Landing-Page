
function sendMe() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let place = document.getElementById('place').value;

    let lead = {name, email, place};

    const options = {
        method: "POST", 
        headers: new Headers({'content-type': 'application/json'}), 
        body: JSON.stringify(lead)
    }

    fetch("localhost:4000/form", options).then(res => {
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('place').value = 'NY';
    });
    
}
