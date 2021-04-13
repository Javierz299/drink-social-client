import React from 'react'

const UserList = ({users}) => {
    console.log("users",users)
    return (
        <div>
            {users && users.map(user => (
                <li key={user.id}>
                    {user.username}
                    <button onClick={() =>console.log("added friend",user.id)}>
                        add
                    </button>
                </li>
            ))}
        </div>
    )
}

export default UserList
