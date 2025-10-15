import { useState } from 'react'
import BoardList from './components/BoardList/BoardList.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BoardList />
    </div>
  )
}

export default App
