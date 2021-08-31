const posts = [
    { title: 'Post 1', description: 'Açıklama 1' },
    { title: 'Post 2', description: 'Açıklama 2' },
    { title: 'Post 3', description: 'Açıklama 3' }
];



const listPosts = () => {
    posts.map((post) => {
        console.log(post);
    })
}



const addPost = (newPost) => {
    const promise1 = new Promise((resolve, reject) => {
        posts.push(newPost);
         resolve(posts);

        //reject("ERROR");
    })
    return promise1;

}

async function showPosts() {
    try {
        await addPost({ title: 'Post 4', description: 'Açıklama 4' });

        listPosts();
    } catch (e) {
        console.log(e);
    }

}
showPosts();





