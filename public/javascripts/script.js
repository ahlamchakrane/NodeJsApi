function getUsers(cb){ //cb= calback
const xhr= new XMLHttpRequest()

xhr.open('GET','/users')
xhr.setRequestHeader('content-type','application/json')

xhr.onload = () => {
    if(xhr.status == 200){
        cb(JSON.parse(xhr.responseText))
    } 
}
xhr.send()
}
