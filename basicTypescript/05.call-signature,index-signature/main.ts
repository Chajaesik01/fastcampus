interface getLikeNUmber{
    (like: number): number; // 호출 시그니처 작성
}

interface Post{
    id: number;
    title: string;
    getLikeNUmber: getLikeNUmber;
}

const post1: Post = {
    id: 1,
    title: 'post1',
    getLikeNUmber(like: number){
        return like
    }
}

post1.getLikeNUmber(1);


interface Post {
    [key: string]: unknown; // index signature
    id: number;
    title: string;
}

const post1 = {
    id: 1,
    title: 'post 1',
}

post1['description'] = 'description1';
post1['pages'] = 300;

interface Names{
    [item: number] : string;
//  userNames[0] ===  'John';
}

const userNames = ['John', 'Kim', 'Joe']
userNames[0] === 'John';