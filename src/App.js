import "./App.css";

// Imports
import { useState } from "react";

// Modules
import Footer from "./modules/Footer/Footer";
import Header from "./modules/Header/Header";

// Pages
import Notes from "./pages/Notes/Notes";
import Note from "./pages/Note/Note";

// Hooks
import { useFetch } from "./hooks/useFetch";

const url = "http://localhost:3000/entries";

function App() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const { data: entries, httpConfig } = useFetch(url);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const note = {
      title,
      text,
    };

    httpConfig(note, "POST");
    setTitle("");
    setText("");
  };

  const handleRemove = (id) => {
    httpConfig(id, "DELETE");
  };

  const showPost = (post) => {
    setTitle(post.title);
    setText(post.text);
  };

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Notes entries={entries} handleRemove={handleRemove} showPost={showPost} />
        <Note title={title} setTitle={setTitle} text={text} setText={setText} handleSubmit={handleSubmit} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
