function submitData(name, email) {
    const configuration = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: `${name}`,
        email: `${email}`,
      }),
    };
  
    return fetch('http://localhost:3000/users', configuration)
      .then(response => response.json())
      .then(data => {
        const emailElement = document.createElement('p')
        const nameElement = document.createElement('p');
        emailElement.innerText = data.email
        nameElement.innerText = data.name
        document.body.innerHTML = data.id 
    })
      .catch(error => {
        document.body.innerHTML = error.message
      });
  }

submitData()
  

  