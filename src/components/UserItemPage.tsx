
import { FC, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { IUser } from '../../types/types'

type UserItemPageParams = {
   id: string,
}

const UserItemPage: FC = () => {
   const [user, setUser] = useState<IUser | null>(null)
   const params = useParams<UserItemPageParams>()

   useEffect(() => {
      fetchUser()
   })

   async function fetchUser() {
      try {
         const response = await axios.get<IUser>(`https://jsonplaceholder.typicode.com/users/${params.id}`)
         setUser(response.data)
      } catch (error) {
         console.log(error)
      }
   }
   return (
      <div>
         <button>Back</button>
         <h1>Page of {user?.name}</h1>
         <div>{user?.email}</div>
         <div>{user?.address.city} {user?.address.street} {user?.address.zipcode}</div>
      </div>
   )
}

export default UserItemPage
