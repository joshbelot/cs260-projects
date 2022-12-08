import { useState, useEffect } from 'react';
import axios from 'axios';
import Flashcard from './Flashcard.js'
import User from './User.js'
import './App.css';

function App() {
  // setup state
  const [flashcards, setFlashcards] = useState([]);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [creator, setCreator] = useState("");
  const [subject, setSubject] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [nameFilter, setNameFilter] = useState("");
  const [subFilter, setSubFilter] = useState("");

  
  const [user, setUser] = useState("");
  const [major, setMajor] = useState("");
  const [school, setSchool] = useState("");
  const [year, setYear] = useState("");

  const fetchFlashcards = async(e) => {
    if (e !== undefined){
      e.preventDefault();
    }
    try {  
      console.log("in flashcards")
      const response = await axios.get("/api/flashcards");
      console.log(response)
      setFlashcards(response.data.flashcards);
    } catch(error) {
      setError("error retrieving flashcards: " + error);
    }
  }
  
  const filterNameFlashcards = async(e) => {
    e.preventDefault();
    try {  
      console.log("NAME")
      const response = await axios.get("/api/flashcards/name/" + nameFilter);
      console.log(response)
      setFlashcards(response.data.flashcards);
      clearFields();
    } catch(error) {
      setError("error retrieving flashcards by name: " + error);
    }
  }
  
    const filterSubjectFlashcards = async(e) => {
      e.preventDefault();
    try {  
      console.log("SUBJECT")
      console.log(subject)
      const response = await axios.get("/api/flashcards/subject/" + subFilter);
      console.log(response)
      setFlashcards(response.data.flashcards);
      clearFields();
    } catch(error) {
      setError("error retrieving flashcards by subject: " + error);
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
  
  const shuffleCards = () => {
      let shuffled = flashcards
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value)
      
      setFlashcards(shuffled)
  }
  
  const clearFields = () => {
    setCreator("");
    setSubject("");
    setQuestion("");
    setAnswer("");
    setNameFilter("");
    setSubFilter("");
  }


  // fetch ticket data
  useEffect(() => {
    fetchFlashcards();
  },[]);

  const addFlashcard = async(e) => {
    e.preventDefault();
    await createFlashcard();
    fetchFlashcards();
    clearFields();
    //setNeedsPractice(true);

  }
  
  
  
  
  
  const fetchUsers = async() => {
    try {  
      console.log("in users")
      const response = await axios.get("/api/users");
      console.log(response)
      setUsers(response.data.users);
    } catch(error) {
      setError("error retrieving users: " + error);
    }
  }
  
  const createUser = async() => {
    try {
      await axios.post("/api/users", {name: user, major: major, 
      school: school, year: year}); //, needsPractice: needsPractice});
    } catch(error) {
      setError("error adding a user: " + error);
    }
  }
  
  const clearUserFields = () => {
    setUser("");
    setMajor("");
    setSchool("");
    setYear("");
  }


  // fetch ticket data
  useEffect(() => {
    fetchUsers();
  },[]);

  const addUser = async(e) => {
    e.preventDefault();
    await createUser();
    fetchUsers();
    clearUserFields();
    //setNeedsPractice(true);

  }
  
  
  
  
  
  
  
  
  
  
  
  document.body.style = 'background: #168eba;';


  // render results
  return (
    <div className="App">
      {error}
      <div className = "UserCol">
        <div className = "CreateUser">
          <h1>Join the Flashcard Creators!</h1>
          <form onSubmit={addUser}>
            <div className = "entry">
              <label>
                Name:
                <br></br>
                <input type="text"  value ={user} onChange={e => setUser(e.target.value)} />
              </label>
            </div>
            <div className = "entry">
              <label>
                Major:
                <br></br>
                <input type="text" value ={major} onChange={e => setMajor(e.target.value)} />
              </label>
            </div>
            <div className = "entry">
              <label>
                School:
                <br></br>
                <input type="text" value={school} onChange={e => setSchool(e.target.value)} />
              </label>
            </div>
            <div className = "entry">
              <label>
                Year:
                <br></br>
                <input type="text" value={year} onChange={e => setYear(e.target.value)} />
              </label>
            </div>
            <input type="submit" value="Submit" />
          </form>
        </div>
        
        <div className = "DisplayUsers">
          <h1>Our Creators</h1>
          <div className = "AllUsers">
            {users.map( item => {
              return <User item = {item} key = {item.id} fetchUsers = {fetchUsers}/>
            })}
          </div>
          <a href = "https://github.com/joshbelot/cs260-projects/tree/main/flashcards"> GITHUB </a>
        </div>
      </div>
        
      <div className = "TopRow">
        <div className = "CreateCard">
          <h1>Create a Flashcard</h1>
          <form onSubmit={addFlashcard}>
            <div className = "entry">
              <label>
                Creator:
                <br></br>
                <input type="text"  value ={creator} onChange={e => setCreator(e.target.value)} />
              </label>
            </div>
            <div className = "entry">
              <label>
                Subject:
                <br></br>
                <input type="text" value ={subject} onChange={e => setSubject(e.target.value)} />
              </label>
            </div>
            <div className = "entry">
              <label>
                Question:
                <br></br>
                <input type="text" value={question} onChange={e => setQuestion(e.target.value)} />
              </label>
            </div>
            <div className = "entry">
              <label>
                Answer:
                <br></br>
                <input type="text" value={answer} onChange={e => setAnswer(e.target.value)} />
              </label>
            </div>
            <input type="submit" value="Submit" />
          </form>
        </div>
        
        <div className = "FilterCard">
          <h1>Filter by Creator or Subject</h1>
          <form onSubmit={filterNameFlashcards}>
            <div className = "entry">
              <label>
                Creator Name:
                <br></br>
                <input type="text" value ={nameFilter} onChange={e => setNameFilter(e.target.value)} />
              </label>
            </div>
            <input type="submit" value="Submit" />
          </form>
          <br></br>
          <form onSubmit={filterSubjectFlashcards}>
            <div className = "entry">
              <label>
                Subject:
                <br></br>
                <input type="text" value ={subFilter} onChange={e => setSubFilter(e.target.value)} />
              </label>
            </div>
            <input type="submit" value="Submit" />
          </form>
          <form onSubmit={fetchFlashcards}>
            <input type="submit" value="Show all cards" />
          </form>
        </div>
        
      </div>
      
      <div className = "DisplayCard">
        <h1>Flashcards</h1>
        <button onClick={() => shuffleCards()}>Shuffle Cards</button>
        <div className = "AllCards">
          {flashcards.map( flashcard => {
            return <Flashcard flashcard = {flashcard} key = {flashcard.id} fetchFlashcards = {fetchFlashcards}/>
          })}
        </div>
      </div>
        
    </div>
  );
}

export default App;