import { useState } from "react";

import styles from "./Note.module.css";

const Note = ({ title, setTitle, text, setText, handleSubmit }) => {
  return (
    <div className={styles.note}>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            name="Title"
            required
            placeHolder="Title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>
        <label>
          <textarea
            name="body"
            required
            placeholder="Write what you feel like..."
            onChange={(e) => setText(e.target.value)}
            value={text}
          ></textarea>
        </label>
        <button className="btn">Save note</button>
      </form>
    </div>
  );
};

export default Note;
