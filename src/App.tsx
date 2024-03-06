import { useEffect, useState } from "react"
import Card, { CardVariant } from "./components/Card"
import './App.css'
import List from "./components/List"
import { ITodo, IUser } from "../types/types"
import axios from "axios"
import UserItem from "./components/UserItem"
import TodoItem from "./components/TodoItem"

const App = () => {
  const [users, setUsers] = useState<IUser[]>([])
  const [todo, setTodo] = useState<ITodo[]>([])

  useEffect(() => {
    fetchUsers()
    fetchTodos()
  }, [])

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
      setUsers(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  async function fetchTodos() {
    try {
      const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
      setTodo(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="root">
      <h1>
        TypeScript Test
      </h1>
      <Card onClick={(num) => console.log('click', num)} variant={CardVariant.primary} width="200px" height="200px">
        <button>Button</button>
      </Card>
      <List items={users} renderItem={(user: IUser) => <UserItem user={user} key={user.id} />} />

      <List items={todo} renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />} />
    </div>
  )
}

export default App
