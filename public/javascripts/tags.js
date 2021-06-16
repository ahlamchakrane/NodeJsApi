function getTags(cb){ //cb= calback
const xhr= new XMLHttpRequest()

xhr.open('GET','/tags')
xhr.setRequestHeader('content-type','application/json')

xhr.onload = () => {
    if(xhr.status == 200){
        cb(JSON.parse(xhr.responseText))
    } 
}
xhr.send()
}
