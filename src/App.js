import {useState} from 'react';

function App(){
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    console.log("!!")
    event.preventDefault();
    if(todo===''){
      return;
    }
    
    setTodos(currentArray=>[todo, ...currentArray]);
    setTodo('');
    
  }
  console.log(todos)

  return (
    <div>
      <h3>My To Dos ({todos.length})</h3>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Write your to do"
          onChange={onChange}
          value={todo}
        />
        <button type="button" onClick={onSubmit}>Add Todo</button>
      </form>
      <hr/>
      <ul>
      {todos.map((x, index) => ( <li key={index}>{x}</li> ))}
      </ul>

      
    </div>
  )
}
export default App;