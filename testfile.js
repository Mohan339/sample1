fetch("https://reqres.in/api/login",{
    method:'Post',
    headers:{
        'content-type':'application/json'
    },
    body: JSON.stringify({
        "email": "eve.holt@reqres.in",
        "password": "cityslicka"
    })
}).then(res => {
    return res.json()
})
.then(data => console.log(data))

.catch(err => console.log(err))