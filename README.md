# Dicoding-Books
Aplikasi List buku pada belajar fundamemntal belajar frond-end website


Kode Uji Coba ke Konsole
    
    const xhr = new XMLHttpRequest();
    
    xhr.onload = function () {
        console.log(this.responseText);
    }
    xhr.onerror = function () {
        console.log('Ups smoting error');
    }
    
    
    xhr.open('GET', 'ttps://books-api.dicoding.dev/list');
    
    xhr.send();



Mengakses data web api dengan method fetch
network request

    fetch('https://books-api.dicoding.dev/list');

Jika request berhasil maka  promise akan membawa nilai response seperti status code bukan data json

    fetch('https://books-api.dicoding.dev/list')
        .then(response => {
          return response.json();
        });

Maka kita perlu chaining untuk mendapatkan nilai data JSON

    .then(responseJson => {
        console.log(responseJson);
    });

di karenakan fetch memafaatkan promise maka kita juga bisa menggunakan async/await
    
    async function getBooks() {
      try {
        const response = await fetch('https://books-api.dicoding.dev/list');
        const responseJson = await response.json();
        console.log(responseJson);
      } catch (error) {
        console.log(error);
      }
    }
     
    getBooks()

Menggunakan Promise

    fetch('https://books-api.dicoding.dev/list')
        .then(response => {
          return response.json();
        })
        .then(responseJson => {
          console.log(responseJson);
        })
        .catch(error => {
          console.log(error);
        });
