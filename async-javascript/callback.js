// console.log("1.Görev");
// console.log("2.Görev");
// console.log("3.Görev");

// const func1 = () => {
//     console.log("Func 1 Tamamlandı")
//      func2;
// }

// const func2 = () => {
//     console.log("Func 2 Tamamlandı")
// }

// func2();
// func1();

// const func1 = () => {
//     console.log("Func 1 Tamamlandı")
//     func2();
// }

// const func2 = () => {
//     console.log("Func 2 Tamamlandı")
//     func3();
// }
// const func3 = () => {
//     console.log("Func 3 Tamamlandı")

// }
// func1();

// const func1 = () => {
//     console.log("Func 1 Tamamlandı")
//     func3();
// }

// const func2 = () => {
//     console.log("Func 2 Tamamlandı")

// }
// const func3 = () => {
//     console.log("Func 3 Tamamlandı")
//     func2();
// }
// func1();



//Javascript Her zaman Senkron olarak çalışır -- Single Thread -- 

// let x = 5;
// console.log('1. gelen veri',x);

// setTimeout(() => {
//     x = x + 5;
//     console.log('2.gelen veri',x);
// }
//     , 5000)





// x = x + 5;

// console.log('3. gelen veri',x);

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


const addBook = (newBook,callback) => {
    books.push(newBook);
    callback();
    

};

// listBooks();    
addBook( { name: 'book 4', author: 'Yazar 4' },listBooks);
