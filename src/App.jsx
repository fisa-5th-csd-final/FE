import { useState } from 'react'
import BoardList from './components/BoardList/BoardList.jsx'
import './App.css'
import CreatePost from './components/CreatePost/CreatePost'
import ViewPost from './components/ViewPost/ViewPost.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BoardList />} />
        <Route path="/viewpost" element={<ViewPost />} />
        <Route path="/createpost" element={<CreatePost />} />
      </Routes>
    </Router>
  )
}

export default App
