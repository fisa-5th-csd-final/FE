import { useState } from 'react'
import BoardList from './components/BoardList/BoardList.jsx'
import './App.css'
import CreatePost from './components/CreatePost/CreatePost'
import ViewPost from './components/ViewPost/ViewPost.jsx'

function App() {
  return (
    <div>
      <BoardList />
      <CreatePost />
      <ViewPost />
    </div>
  )
}

export default App
