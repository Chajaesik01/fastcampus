import React from 'react'


// 역할을 나눠 컴포넌트를 구성
const Message = React.memo(({message}) => {
  return <p>{message}</p>
})
const ListItem = ({post}) =>{
  return(
    <li key = {post.id}>
      <p>{post.title}</p>
    </li>
  )
}
const List = ({posts}) =>{
  return (
    <ul>
      {posts.map(post => (
        <ListItem key = {post.id} post = {post}/>
      ))}
    </ul>
  )
}

export const B = ({message, posts}) => {
  return (
    <div>
      <h1>B Component</h1>
      <Message message = {message}/>
      <List posts = {posts} />
    </div>
  )
}
