// useMutation hook 예시
function App() {
	const mutation = useMutation({
    	mutationFn: (newTodo) => {
        	return axios.post('/todos', newTodo)
     },
  }) 
  
  	// ...

// Promises 예시

const mutation = useMutation({ mutationFn: addTodo })

try{
	const todo = await mutation.mutateAsync(todo)
    console.log(todo)
} catch (error) {
	console.error(error)
 } finally { 
 	console.log('done')
 }