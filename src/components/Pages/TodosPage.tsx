import { FC, useState, useEffect } from 'react'
import axios from 'axios'
import { ITodo } from '../../../types/types'
import List from '../List'
import TodoItem from '../TodoItem'

const TodosPage: FC = () => {
   const [todo, setTodo] = useState<ITodo[]>([])

   useEffect(() => {
      fetchTodos()
   }, [])


   async function fetchTodos() {
      try {
         const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
         setTodo(response.data)
      } catch (error) {
         console.log(error)
      }
   }

   return (
      <>
         <List items={todo} renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />} />
      </>
   )
}

export default TodosPage
