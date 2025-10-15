import React from "react";
import { useParams } from "react-router-dom";
import "./ViewPost.css";


const ViewPost = () => {
    const { id } = useParams(); // URL의 :id 추출
  const post = ViewPost.find((p) => p.id === Number(id));

  if (!post) {
    return <div className="viewpost-container">게시글을 찾을 수 없습니다.</div>;
  }

  const comments = [
    { id: 1, writer: "익명1", content: "댓글" },
    { id: 2, writer: "익명2", content: "댓글" },
    { id: 3, writer: "익명3", content: "댓글" },
    { id: 4, writer: "익명4", content: "댓글" },
  ];

  return (
    <div className="viewpost-container">
      <div className="post-section">
        <div className="post-item">
          <span className="label">제목</span>
          <div className="input-placeholder title"></div>
        </div>

        <div className="post-item">
          <span className="label">작성자</span>
          <div className="input-placeholder author"></div>
        </div>

        <div className="post-item">
          <span className="label">내용</span>
          <div className="input-placeholder content"></div>
        </div>
      </div>

      <hr className="divider" />

      <div className="comment-section">
        {comments.map((c) => (
          <div key={c.id} className="comment">
            <p className="comment-writer">{c.writer}</p>
            <p className="comment-content">{c.content}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewPost;
