import React from 'react'


// 역할을 나눠 컴포넌트를 구성

const Message = ({message}) => {
  return <p>{message}</p>
};

/*
function compareFunction(prevProps, nextprops){
  return (
    prevProps.a === nextprops.a &&
    prevProps.b === nextprops.b 
  )
}
*/
const ListItem = React.memo(({post}) =>{
  return(
    <li key = {post.id}>
      <p>{post.title}</p>
    </li>
  )
})
const List = React.memo(({posts, testFunction}) =>{
  console.log('List component is Rendering')
  return (
    <ul>
      {posts.map(post => (
        <ListItem key = {post.id} post = {post}/>
      ))}
    </ul>
  )
})

export const B = React.memo(({message, posts}) => {
  console.log('B component is Rendering');
  const testFunction = useCallback(() => {}, []);
  return (
    <div>
      <h1>B Component</h1>
      <Message message = {message}/>
      <List posts = {posts} />
    </div>
  )
})

