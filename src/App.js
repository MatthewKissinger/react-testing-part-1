import { useState, useEffect } from 'react'
import './App.css';
import User from './User';

function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then((res) => res.json())
      .then((user) => setUser(user))
      .catch((error) => setError(error.message));
  })

  if (error) {
    return <span>{error}</span>
  }

  return (
    <div>
      {user ? <User user={user} /> : <span>Loading...</span>}
    </div>
  )
}

export default App;
