import React, { Component } from 'react';
import { Link } from "react-router-dom";
const Todo: React.FC<any> = props  => (
  <tr>
      <td>{props.todo.id}</td>
      <td>{props.todo.description}</td>
      <td>{props.todo.responsible}</td>
      <td>{props.todo.priority}</td>
      <td>{props.todo.isComplete}</td>
      <td> <Link to={"/edit"+props.todo.id}>Edit</Link></td>
  </tr>
)

class TodoList extends Component<any,any> {
  constructor(props: any) {
    super(props);
    this.state = {
        todos: [],
        isLoaded: false
    }
}
 componentDidMount = async ()  =>{
  await fetch('http://localhost:4000/list')
    .then(res => res.json())
    .then(
      json => {
        this.setState({
          isLoaded: true,
          todos: json.data
        });
      })
      .catch(function (error){
          console.log(error);
      })
}
// componentDidUpdate = async ()  =>{
//   await fetch('http://localhost:4000/list')
//     .then(res => res.json())
//     .then(
//       json => {
//         this.setState({
//           isLoaded: true,
//           todos: json.data
//         });
//       })
//       .catch(function (error){
//           console.log(error);
//       })
// }

getTodosList = () => {
  return   this.state.todos && this.state.todos.map((todoz: any) => {

      return <Todo key={todoz.id} todo={todoz} /> ;
  });
}


render() { 
  return(
      <div className="content-fluid">
          <h2 className="text-center">Todo List</h2>
      <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Description</th>
          <th scope="col">Responsible</th>
          <th scope="col">Priority</th>
          <th scope="col">Completed</th>
        </tr>
      </thead>
      <tbody>
      {this.getTodosList()}
      </tbody>
  </table>
    </div>
   );
}
}
export default TodoList;
  