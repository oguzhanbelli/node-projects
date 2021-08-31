const fs = require('fs');

// fs.writeFile('../employees.json', '[{"name":"Employee 1 Name","salary":2000}', 'utf8', (err, data) => {
//     if (err) console.log(err);

//     console.log("JSON Dosya Başarılı bir şekilde oluşturuldu")
// });

// fs.appendFile("../employees.json", '\n,{"name":"Employee 2 Name","salary":3000}]', 'utf8', (err) => {
//     if (err) console.log(err);


//     console.log("Veri Güncellendi");
// })
// fs.readFile("../employees.json", 'utf-8', (err, data) => {
//     if (err) console.log(err);
//     console.log(data);
// })

fs.rm("../employees.json",(err)=>{
    if (err) console.log(err);

    console.log("Dosya silindi");
})



