import { FC } from "react"
import { IUser } from '../../types/types'
import UserItem from "./UserItem"

interface UsersListProps {
   users: IUser[]
}

const UserList: FC<UsersListProps> = ({ users }) => {
   return (
      <div>
         {users.map((user) =>
            // <div key={user.id} style={{ border: '2px solid gray', padding: '10px', margin: '10px' }}>
            //    {user.id}. {user.name} lives in {user.adress.city} at {user.adress.street} street
            // </div>
            <UserItem key={user.id} user={user} />
         )}
      </div>
   )
}

export default UserList
