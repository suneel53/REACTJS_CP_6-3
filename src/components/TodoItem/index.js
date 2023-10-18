// Write your code here
import {Component} from 'react'
import './index.css'

class TodoItem extends Component {
  render() {
    const {todoList, deleteTodoList} = this.props
    const {id, title} = todoList
    const ondelete = () => {
      deleteTodoList(id)
    }
    return (
      <li className="line-cont">
        <p>{title}</p>
        <button type="button" onClick={ondelete} className="but">
          Delete
        </button>
      </li>
    )
  }
}

export default TodoItem
