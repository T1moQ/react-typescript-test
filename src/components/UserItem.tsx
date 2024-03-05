import { FC } from 'react'
import { IUser } from '../../types/types'

interface UserItemProp {
   user: IUser
}

const UserItem: FC<UserItemProp> = ({ user }) => {
   return (
      <div>
         <div key={user.id} style={{ border: '2px solid gray', padding: '10px', margin: '10px' }}>
            {user.id}. {user.name} lives in {user.address.city} at {user.address.street} street
         </div>
      </div>
   )
}

export default UserItem
