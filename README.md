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

