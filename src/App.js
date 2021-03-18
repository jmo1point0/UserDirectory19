import React, { useEffect, useState } from 'react'
import randomAPI from './utils/randomusersapi'

function App() {
  const [randomUser, setRandomUser] = useState({})

  useEffect(() => {
    getUser()
  }, [])

  const getUser = async () => {
    const users = await randomAPI.getUsers();
    setRandomUser(users)
  }

  return (
    <div className="App">
      HELLO
      {randomUser.results
        ? randomUser.results.map((user) => {
            return <div>{user.name.first}</div>;
          })
        : ""}
    </div>
  );
}

export default App;
