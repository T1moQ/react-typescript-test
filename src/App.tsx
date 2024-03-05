import { useEffect, useState } from "react"
import Card, { CardVariant } from "./components/Card"
import './App.css'
import UserList from "./components/UserList"
import { IUser } from "../types/types"
import axios from "axios"

const App = () => {
  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    fetchUsers()
  }, [])

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
      setUsers(response.data)
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
      <UserList users={users} />
    </div>
  )
}

export default App
