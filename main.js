


const xhr = new XMLHttpRequest();

xhr.onload = function () {
    console.log(this.responseText);
}
xhr.onerror = function () {
    console.log('Ups smoting error');
}


xhr.open('GET', 'ttps://books-api.dicoding.dev/list');

xhr.send();

