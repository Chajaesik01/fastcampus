class Post {
    private text: string = "";

    constructor(private id: number, protected title: string){
        this.id = id;
        this.title = title;
    }

    getPost(){
        return 'postId : ${this.id}, postTitle: ${this.title}'
    }
}

const post : Post = new Post(1, "title 1");

console.log(post.id); // 1
console.log(post.title); // "title 1"


// public, protectted, private 

class PostB extends Post{
    getPost(){
        return this.title;
    }
    console.log(this.text);
}

