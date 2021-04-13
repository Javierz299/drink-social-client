import React from 'react'

const UserList = ({users}) => {
    console.log("users",users)
    return (
        <div>
            {users && users.map(user => (
                <li key={user.id}>
                    {user.username}
                </li>
            ))}
        </div>
    )
}

export default UserList
