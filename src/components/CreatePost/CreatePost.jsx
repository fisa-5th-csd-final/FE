import React, { useState } from "react";
import "./CreatePost.css";

function CreatePost({ onSubmit, onCancel }) {
  const [form, setForm] = useState({
    title: "",
    author: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.author || !form.content) {
      alert("모든 항목을 입력해주세요!");
      return;
    }
    onSubmit?.(form);
    setForm({ title: "", author: "", content: "" });
  };

  return (
    <div className="create-post-container">
      <h2 className="page-title">게시물 작성</h2>

      <form onSubmit={handleSubmit} className="create-post-form">
        <label>제목</label>
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="제목을 입력하세요"
        />

        <label>작성자</label>
        <input
          type="text"
          name="author"
          value={form.author}
          onChange={handleChange}
          placeholder="작성자를 입력하세요"
        />

        <label>내용</label>
        <textarea
          name="content"
          value={form.content}
          onChange={handleChange}
          placeholder="내용을 입력하세요"
        />

        <div className="button-group">
          <button
            type="button"
            className="cancel-btn"
            onClick={() => onCancel?.()}
          >
            취소
          </button>
          <button type="submit" className="submit-btn">
            작성하기
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreatePost;
