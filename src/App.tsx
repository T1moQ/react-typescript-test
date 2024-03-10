
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import DefaultPage from './components/Pages/DefaultPage'
import UserPage from './components/Pages/UserPage'
import TodosPage from './components/Pages/TodosPage'
import { Link } from 'react-router-dom'
import UserItemPage from './components/UserItemPage'

const App = () => {

  return (
    <BrowserRouter>
      <div className="root">
        <div>
          <Link to={'/'}>Home</Link>
          <Link to={'/users'}>Users</Link>
          <Link to={'/todos'}>Todos</Link>
        </div>
        <Routes>
          <Route path='/' element={<DefaultPage />} />
          <Route path='/users' element={<UserPage />} />
          <Route path='/todos' element={<TodosPage />} />
          <Route path='/users/:id' element={<UserItemPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
