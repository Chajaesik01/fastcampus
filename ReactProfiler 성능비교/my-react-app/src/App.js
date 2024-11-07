import { A } from './components/A';
import { B } from './components/B';
import './App.css';
import { useState, useEffect} from 'react';
function App() {

  const [value, setValue] = useState("");
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json()) //통으로 데이터가 올 때 json으로 변환
    .then(posts => setPosts(posts))
  }, [])
  
  return (
    <div style = {{ padding: '1rem'}}>
      <input
        value= {value}
        onChange={e => setValue(e.target.value)}
      />

      <div style = {{display: "flex"}}>
        <A 
        message ={value}
        posts = {posts}/>
        <B         
        message ={value}
        posts = {posts}/>
      </div>
    </div>
  );
}

export default App;
