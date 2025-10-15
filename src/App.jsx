import { useState } from 'react'
import BoardList from './components/BoardList/BoardList.jsx'
import './App.css'
import CreatePost from './components/CreatePost/CreatePost'

function App() {
  return (
    <div>
      <BoardList />
      <CreatePost />
    </div>
  )
}

export default App
