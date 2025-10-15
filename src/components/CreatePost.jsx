import React, { useState } from "react";

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
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>제목</label>
          <br />
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="제목을 입력하세요"
          />
        </div>

        <div>
          <label>작성자</label>
          <br />
          <input
            type="text"
            name="author"
            value={form.author}
            onChange={handleChange}
            placeholder="작성자를 입력하세요"
          />
        </div>

        <div>
          <label>내용</label>
          <br />
          <textarea
            name="content"
            value={form.content}
            onChange={handleChange}
            placeholder="내용을 입력하세요"
            rows="6"
          />
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "12px" }}>
          <button type="button" onClick={() => onCancel?.()}>취소</button>
          <button type="submit">작성하기</button>
        </div>
      </form>
    </div>
  );
}

export default CreatePost;
