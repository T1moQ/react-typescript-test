import { FC, useState, useEffect } from 'react'
import axios from 'axios'
import { IUser } from '../../../types/types'
import List from '../List'
import UserItem from '../UserItem'
import { useNavigate } from 'react-router-dom'

const UserPage: FC = () => {
   const [users, setUsers] = useState<IUser[]>([])
   const navigate = useNavigate()

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
      <>
         <List
            items={users}
            renderItem={(user: IUser) => <UserItem
               user={user}
               key={user.id}
               onClick={() => navigate(`/users/${user.id}`)}
            />} />
      </>
   )
}

export default UserPage
