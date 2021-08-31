//Promise:Bir işlemin sonucunu temsil eden bir javascript nesnesi.


// const promise1 = new Promise((resolve,reject) => {
//     reject("Bağlantı Hatası");
//     resolve("Veriler Alındı");
    
// });

// //console.log(promise1);

// promise1
//     .then((value) => {
//         console.log(value);
//     }).catch(err =>{
//         console.log(err);
//     })

const books = [
    { name: 'book 1', author: 'Yazar 1' },
    { name: 'book 2', author: 'Yazar 2' },
    { name: 'book 3', author: 'Yazar 3' }
];

const listBooks = () => {
    books.map(book => {
        console.log(book.name);
        console.log(book.author);
    });
}


const addBook = (newBook) => {

    const promise1 = new Promise((resolve,reject)=>{
        books.push(newBook);
       // resolve(books);
        reject("Bir hata oluştu");
    })

    return promise1;
   
    
    

};

// listBooks();    
addBook( { name: 'book 10', author: 'Yazar 10' }).then(() => {
    console.log("Yeni Liste ");
    listBooks();
}).catch(err =>{
    console.log(err);
});
