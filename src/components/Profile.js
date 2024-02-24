import React , { useContext  } from 'react'
import UserContext from '../Context/UserContext'

const Profile = () => {
  const {user} = useContext(UserContext)
      if (!user) return <div className='bg-red-600'>Please Login</div>
      return <div className='bg-red-600 text-white'> Welcome {user.username} </div>
}

export default Profile
