// Call Stack Fonksiyonların çalışma sırasını gösterir

// function func1(){
//     console.log("Ben birinciyim");
//     func2();
//     console.log("Ben tekrar birinciyim");

// }

// function func2(){
//     console.log("Ben ikinciyim");
//     func3();
//     console.log("Ben tekrar ikinciyim");


// }

// function func3(){
//     console.log("Ben üçüncüyüm");
// }

// func1();


// function add(x, y) {
//     return x + y;
// }

// function average(x,y){

//     return add(x,y) / 2; 
// }

// let x = average(6,8);

// console.log(x);


// function task(message){
//     let n = 1000000000;
//     while(n>0) {
//         n--
//     }
//     console.log(message);
// }

// console.log("1");
// setTimeout(() =>{
//     console.log("2");
// },1000);

// console.log("3");
// console.log("4");


// //Önce normal fonksiyonlar çalışır sonra callbackler (event-loop)
// task("işlem tamamlandı");
// setTimeout(() =>{
//     console.log("5");
// },2000);

// task("işlem tamamlandı 2");

//Callback Javascriptin asenkron çalışma için bulduğu çözümlerdendir.


// const myName =  () => {
//     console.log("Benim Adım Oğuzhan");


// } 

// setTimeout(myName,3000);

// Bir fonksiyon diğer bir fonksiyona argüman olarak geliyorsa CALLBACK denir.



// setTimeout(() => {
//     console.log("Benim Adım Oğuzhan");


// },3000 );

const books = [
    { name: "Pinball 1973", author: "Haruki Murakami" },
    { name: "Özgürlük", author: "Zygmunt Bauman" },
    { name: "Türkiye'de Çağdaşlaşma", author: "Niyazi Berkes" }
];

const listBooks = () => {
    books.map((book, index) => {
        console.log(book, index);
    })
}

listBooks();

const addBook = (newBook,callback) => {
    books.push(newBook);
    callback();
}

addBook({ name: "Berlin Hatıralarım", author: "Hüsrev Gerede" },listBooks);