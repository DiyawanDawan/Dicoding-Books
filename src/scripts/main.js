function main() {

  const baseURL = 'https://books-api.dicoding.dev';

  const getBook = () => {
    /**
     * Endpoints
     * Get All Books
     * Method: GET
     * Endpoint: /list
     */

    // tuliskan kode istiasi di sini!
    const xhr = new XMLHttpRequest();

    // menetapkan callback ketika response Ok dan response Error
    xhr.onload = function () {
      const responseJson = JSON.parse(this.responseText);

      if (responseJson.error) {
        showResponseMessage(response.message);
      } else {
        renderAllBooks(responseJson.books);
      }
    };
    xhr.onerror = function () {
      showResponseMessage();
    };
    // Membuat GET request
    xhr.open("GET", `${baseURL}/list`);

    // Mengirim request
    xhr.send();
  };
  

  const insertBook = (book) => {
    /**
   * Add New Book
   * Method: POST
   * URL: /add
   * Headers:
   * Content-Type: application/json | application/x-www-form-urlencoded
   * X-Auth-Token: YOUT_API_KEY (for test using 12345)
   * Body:
   * id: number
   * title: string
   * author: string
   */
    // tuliskan kode di sini!
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      const responseJson = JSON.parse(this.responseText);
      showResponseMessage(responseJson.message);
      getBook();
    };

    xhr.onerror = function () {
      showResponseMessage();
    };

    xhr.open("POST", `${baseURL}/add`);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("X-Auth-Token", "12345");

    // Mengririm request dan menyimpan JSON.stringify(book) pada body
    xhr.send(JSON.stringify(book));
  };

  const updateBook = (book) => {
    /**
     * Edit Book
     * Method: PUT
     * URL: /edit/:id
     * Headers:
     * Content-Type: application/json | application/x-www-form-urlencoded
     * X-Auth-Token: YOUT_API_KEY (for test using 12345)
     * Body:
     * id: number
     * title: string
     * author: string
     */
    // tuliskan kode di sini!
    const xhr = new XMLHttpRequest()
    xhr.onload = function (){
      const responseJson = JSON.parse(this.responseText);
      showResponseMessage(responseJson.message);
      getBook();
    }
    xhr.onerror = function ( ){
      showResponseMessage();
    }
    xhr.open("PUT", `${baseURL}/edit/${book.id}`)
    xhr.setRequestHeader("Content-Type", "application/json"),
    xhr.setRequestHeader("X-Auth-Token", "12345");

    xhr.send(JSON.stringify(book));
  };

  const removeBook = (bookId) => {
    /**
     * Delete Book
     * Method: DELETE
     * URL: /delete/:id
     * Headers:
     * X-Auth-Token: YOUT_API_KEY (for test using 12345)
     */
    // tuliskan kode di sini!
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      const responseJson = JSON.parse(this.responseText);
      showResponseMessage(responseJson.message);
      getBook();
    }
    xhr.onerror =  function () {
      showResponseMessage();
    }
    xhr.open('DELETE', `${baseURL}/delete/${bookId}`);
    xhr.setRequestHeader('X-Auth-Token', '12345');

    xhr.send();
  };

  /*
      jangan ubah kode di bawah ini ya!
  */

  const renderAllBooks = (books) => {
    const listBookElement = document.querySelector("#listBook");
    listBookElement.innerHTML = "";

    books.forEach((book) => {
      listBookElement.innerHTML += `
        <div class="col-lg-4 col-md-6 col-sm-12" style="margin-top: 12px;">
          <div class="card">
            <div class="card-body">
              <h5>(${book.id}) ${book.title}</h5>
              <p>${book.author}</p>
              <button type="button" class="btn btn-danger button-delete" id="${book.id}">Hapus</button>
            </div>
          </div>
        </div>
      `;
    });

    const buttons = document.querySelectorAll(".button-delete");
    buttons.forEach((button) => {
      button.addEventListener("click", (event) => {
        const bookId = event.target.id;

        removeBook(bookId);
      });
    });
  };

  const showResponseMessage = (message = "Check your internet connection") => {
    alert(message);
  };

  document.addEventListener("DOMContentLoaded", () => {
    const inputBookId = document.querySelector("#inputBookId");
    const inputBookTitle = document.querySelector("#inputBookTitle");
    const inputBookAuthor = document.querySelector("#inputBookAuthor");
    const buttonSave = document.querySelector("#buttonSave");
    const buttonUpdate = document.querySelector("#buttonUpdate");

    buttonSave.addEventListener("click", function () {
      const book = {
        id: Number.parseInt(inputBookId.value),
        title: inputBookTitle.value,
        author: inputBookAuthor.value,
      };

      insertBook(book);
    });

    buttonUpdate.addEventListener("click", function () {
      const book = {
        id: Number.parseInt(inputBookId.value),
        title: inputBookTitle.value,
        author: inputBookAuthor.value,
      };

      updateBook(book);
    });
    getBook();
  });
}

export default main;
