import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  // setup state
  const [flashcards, setFlashcards] = useState([]);
  const [user, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [creator, setCreator] = useState("");
  const [subject, setSubject] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  //const [needsPractice, setNeedsPractice] = useState(true)

  
  const [name, setName] = useState("");
  const [major, setMajor] = useState("");
  const [school, setSchool] = useState("");
  const [year, setYear] = useState("");

  const fetchFlashcards = async() => {
    try {      
      const response = await axios.get("/api/flashcards");
      setFlashcards(response.data.flashcards);
    } catch(error) {
      setError("error retrieving flashcards: " + error);
    }
  }
  const createFlashcard = async() => {
    try {
      await axios.post("/api/flashcards", {creator: creator, subject: subject, 
      question: question, answer: answer}); //, needsPractice: needsPractice});
    } catch(error) {
      setError("error adding a flashcard: " + error);
    }
  }
  const deleteOneFlashcard = async(flashcard) => {
    try {
      await axios.delete("/api/flashcards/" + flashcard.id);
    } catch(error) {
      setError("error deleting a flashcard" + error);
    }
  }

  // fetch ticket data
  useEffect(() => {
    fetchFlashcards();
  },[]);

  const addFlashcard = async(e) => {
    e.preventDefault();
    await createFlashcard();
    fetchFlashcards();
    setCreator("");
    setSubject("");
    setQuestion("");
    setAnswer("");
    //setNeedsPractice(true);

  }

  const deleteFlashcard = async(flashcard) => {
    await deleteOneFlashcard(flashcard);
    fetchFlashcards();
  }

  // render results
  return (
    <div className="App">
      {error}
      <h1>Create a Flashcard</h1>
      <form onSubmit={addFlashcard}>
        <div>
          <label>
            Creator:
            <input type="text" value={creator} onChange={e => setCreator(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Subject:
            <textarea value={subject} onChange={e=>setSubject(e.target.value)}></textarea>
          </label>
        </div>
        <div>
          <label>
            Question:
            <textarea value={question} onChange={e=>setQuestion(e.target.value)}></textarea>
          </label>
        </div>
        <div>
          <label>
            Answer:
            <textarea value={answer} onChange={e=>setAnswer(e.target.value)}></textarea>
          </label>
        </div>

        <input type="submit" value="Submit" />
      </form>
      <h1>Flashcards</h1>
      {flashcards.map( flashcard => (
        <div key={flashcard.id} className="flashcard">
          <div className="question">
            <p>{flashcard.question}</p>
            <p><i>-- {flashcard.answer}</i></p>
          </div>
          <button onClick={e => deleteFlashcard(flashcard)}>Delete</button>
        </div>
      ))}     
    </div>
  );
}

export default App;