//Bir asenkron işlemin nihai sonucunu temsil eden javascript nesnedir.

// const books = [
//     { name: 'book 1', author: 'Yazar 1' },
//     { name: 'book 2', author: 'Yazar 2' },
//     { name: 'book 3', author: 'Yazar 3' }
// ];

// const listBooks = () => {
//     books.map(book => {
//         console.log(book.name);
//         console.log(book.author);
//     });
// }


// const addBook = (newBook,callback) => {
//     books.push(newBook);
//     callback();


// };

// // listBooks();    
// addBook( { name: 'book 4', author: 'Yazar 4' },listBooks);


// const promise1 = new Promise(function (resolve, reject) {
//     reject("Error 2");
//     resolve("Data");
//     resolve("Data2");
//     reject("Error");

// })

// console.log(promise1);

//pending (undefined) - fullfiled - rejected => PromiseState 




// const promise1 = new Promise(function (resolve, reject) {
//     //resolve("Data");
//     reject("Bir hata oluştu");

// })

//console.log(promise1.value);


// promise1.then(function(value){
//     console.log(value);
// })


// promise1.then(value => console.log(value));
//promise1.catch(err => console.log(err));



// const promise1 = new Promise( (resolve, reject) =>{
//     // resolve();
//    reject();

// })

// // promise1.then(() => console.log("Veriler Alındı"));
// // promise1.catch(() => console.log("Veriler Alınmadı"));
// promise1.then(() => console.log("Veriler Alındı")).catch(() => console.log("Veriler Alınamadı")).finally(() => console.log("Çalış Köle"));

// const promise1 = new Promise( (resolve, reject) =>{
//         // resolve();
//        reject();
    
//     })

//     promise1.then(() => {
//         console.log("Veriler Alındı")
//     },
//     () => {
//         console.log("Veriler Alınamadı")
//     }
//     );
const books = [
    { name: 'book 1', author: 'Yazar 1' },
    { name: 'book 2', author: 'Yazar 2' },
    { name: 'book 3', author: 'Yazar 3' }
];

const listBooks = () => {
    books.map((book,index) => {
        console.log(book,index)
    });
}


// const addBook = (newBook) => {

//     const promise1 = new Promise((resolve,reject) => {
//         books.push(newBook);
//         //resolve(books);
// reject();
//     })

//     return promise1;
// };



// listBooks();    
// addBook( { name: 'book 4', author: 'Yazar 4' })
// .then(() => {
//     console.log("Yeni Liste");
//     listBooks();
// }).catch(() => {
//     console.log("Hata aldık ");

// })

const addTwoNumbers =  (numOne,numTwo) => {
    const promise2 = new Promise((resolve,reject) => {
        const sum = numOne + numTwo;

        (typeof numOne != "number" || typeof numTwo != "number") ? reject("2 sayı girmeniz gerekir") : resolve(sum);

        
    })
    return promise2;
}
addTwoNumbers("ASD",8).then((value) => {
    console.log("Toplam : ",value);
}).catch(err => {
    console.log("HATA ",err);
});

