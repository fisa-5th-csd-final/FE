import React, { useEffect, useState } from 'react';
import './BoardList.css';

function BoardList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/boards?page=0&size=10")
      .then((res) => setPosts(res.data.contents || []))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="board-container">로딩 중...</div>;
  }

  return (
    <div className="board-container">
      <header className="board-header">
        <h1 className="logo">Logo example</h1>
        <button className="add-button">＋</button>
      </header>
      {posts.length === 0 ? (
        <p>게시물이 없습니다</p>
      ) : (
        <ul className="post-list">
          {posts.map((post) => (
            <li key={post.boardId} className="post-item">
              <div>
                <div className="post-title">{post.title}</div>
                <div className="post-content">{post.content}</div>
              </div>
              <div className="post-author">{post.writer}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BoardList;
