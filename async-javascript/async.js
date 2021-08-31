function getData(data) {

    return new Promise((resolve, reject) => {
        console.log("Veri alınmaya çalışılıyor");

        if (data) {
            resolve("Veriler alındı");

        } else {
            reject("Veriler alınamadı");
        }

    })

}

function cleanData(receivedData) {

    return new Promise((resolve, reject) => {
        console.log("Veri düzenleniyor");

        if (receivedData) {
            resolve("Veriler düzenlendi");

        } else {
            reject("Veriler düzenlemedi");
        }

    })

}

// getData(true).then((result) => {
//     console.log(result);
//     return cleanData(false).then((result) => {
//         console.log(result);
//     })
// }).catch(err => {
//     console.log(err);
// });

//Async - Await


// async function processData(){
//   try{
//     const receivedData =  await getData(true);
//     console.log(receivedData);
//     const cleanedData = await cleanData(false);
//     console.log(cleanedData);

//   }catch(error){
//       console.log(error);
//   }


// }
// processData();

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

    const promise1 = new Promise((resolve, reject) => {
        books.push(newBook);
        resolve(books);
        //reject("Bir hata oluştu");
    })

    return promise1;




};

// listBooks();    
// addBook({ name: 'book 10', author: 'Yazar 10' }).then(() => {
//     console.log("Yeni Liste ");
//     listBooks();
// }).catch(err => {
//     console.log(err);
// });

async function showBooks() {

    try {
        await addBook({ name: 'book 12', author: 'Yazar 12' },);
        listBooks();
    } catch (e) {
        console.log(e);
    }

}
showBooks();

