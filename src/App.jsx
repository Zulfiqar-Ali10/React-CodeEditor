import React, { useEffect, useState } from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';

function App() {
  const [text, setText] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  const toUpperCase = () => {
    setText(text.toUpperCase());
  };

  const toLowerCase = () => {
    setText(text.toLowerCase());
  };

  const clearText = () => {
    setText("");
  };

  const Bold = () => {
    const textarea = document.getElementById("editor");
    textarea.style.fontWeight = "bold";
  };

  const Italic = () => {Text 
    const textarea = document.getElementById("editor");
    textarea.style.fontStyle = "italic";
  };

  const Underline = () => {
    const textarea = document.getElementById("editor");
    textarea.style.textDecoration = "underline";
  };


  

  const copyToCode = () => {
    navigator.clipboard.writeText(text)
      .then(() => {
        alert("Code Copied");
      })
      .catch((err) => {
        alert("Failed to copy: " + err);
      });
  };

  return (
    <div className="App">
      <h1 className="heading" data-aos="fade-down">React Code Editor</h1>
      <textarea
        data-aos="fade-right"
        id="editor"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a Text..."
      />
      <div className="CodeEditor-btns" data-aos="fade-up">
        <button onClick={toUpperCase} className="buttonStyle">UPPER CASE</button>
        <button onClick={toLowerCase} className="buttonStyle">lower case</button>
        <button onClick={Underline} className="buttonStyle">Text Underline</button>
        <button onClick={copyToCode} className="buttonStyle">Copy to Code</button>
        <button onClick={Bold} className="buttonStyle">Text Bold</button>
        <button onClick={Italic} className="buttonStyle">Text Italic</button>
        <button onClick={clearText} className="buttonStyle">Text Clear</button>
      </div>
    </div>
  );
}

export default App;
