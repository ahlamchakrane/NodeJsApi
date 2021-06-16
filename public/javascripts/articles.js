function getArticles(cb){ //cb= calback
const xhr= new XMLHttpRequest()

xhr.open('GET','/articles')
xhr.setRequestHeader('content-type','application/json')

xhr.onload = () => {
    if(xhr.status == 200){
        cb(JSON.parse(xhr.responseText))
    } 
}
xhr.send()
}
