import { useState } from "react";
import "./App.css";
import pdfjsLib from "pdfjs-dist";
import QuestionForm from "./components/QuestionForm";

function App() {
  const [count, setCount] = useState(0);
  // const fileInput = document.getElementById('file-input');
  // const file = fileInput.files[0];
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.input.files[0]);
    console.log("submitted");
  };
  return (
    <div className="w-screen h-screen bg-base-100">
      <div className="flex justify-center items-center flex-col">
        <div className="card">
          <form onSubmit={handleSubmit}>
            <input
              name="input"
              type="file"
              className="file-input w-full max-w-xs"
            />
            <button type="submit" className="btn">
              Submit
            </button>
          </form>
        </div>
        <QuestionForm />
      </div>
    </div>
  );
}

export default App;
