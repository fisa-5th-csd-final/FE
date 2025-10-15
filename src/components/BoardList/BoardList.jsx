import React from 'react';
import './BoardList.css';
const dummyPosts = [
  { id: 1, title: '제목', content: '글(간단하게 20자 정도?)', author: '작성자' },
  { id: 2, title: '제목', content: '글(간단하게 20자 정도?)', author: '작성자' },
  { id: 3, title: '제목', content: '글(간단하게 20자 정도?)', author: '작성자' },
  { id: 4, title: '제목', content: '글(간단하게 20자 정도?)', author: '작성자' },
  { id: 5, title: '제목', content: '글(간단하게 20자 정도?)', author: '작성자' },
];

function BoardList() {
  return (
    <div className="board-container">
      <header className="board-header">
        <h1 className="logo">Logo example</h1>
        <button className="add-button">＋</button>
      </header>
      <ul className="post-list">
        {dummyPosts.map((post) => (
          <li key={post.id} className="post-item">
            <div>
              <div className="post-title">{post.title}</div>
              <div className="post-content">{post.content}</div>
            </div>
            <div className="post-author">{post.author}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BoardList;
