import {Component} from 'react'
import './index.css'
import TodoItem from '../TodoItem'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here

class SimpleTodos extends Component {
  state = {
    todosList: initialTodosList,
  }

  deleteTodoList = id => {
    const {todosList} = this.state
    const filteredList = todosList.filter(each => each.id !== id)
    this.setState({todosList: filteredList})
  }

  render() {
    const {todosList} = this.state
    return (
      <div className="bg-cont">
        <div className="cont">
          <h1 className="hed">Simple Todos</h1>
          <ul className="todolist-contaner">
            {todosList.map(todoList => (
              <TodoItem
                todoList={todoList}
                deleteTodoList={this.deleteTodoList}
                key={todoList.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
