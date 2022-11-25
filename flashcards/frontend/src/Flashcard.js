import { useState} from 'react';
import axios from 'axios';

function Flashcard(props) {
    const [flipCard, setFlipCard] = useState(false)
    
    const deleteFlashcard = async(flashcard) => {
      await deleteOneFlashcard(flashcard);
      props.fetchFlashcards();
    }
  
    const deleteOneFlashcard = async(flashcard) => {
    try {
      await axios.delete("/api/flashcards/" + flashcard.id);
    } catch(error) {
      props.setError("error deleting a flashcard" + error);
    }
    
  }
    return (
        <div key={props.flashcard.id} className="flashcard">
          <div className="card">
            <b>Creator: </b>{props.flashcard.creator}
            <br></br>
            <b>Subject: </b>{props.flashcard.subject}
            <br></br>
            <u><h3><b>{flipCard ? "Answer": "Question"}</b></h3></u>
            
            <h3>{flipCard ? props.flashcard.answer : props.flashcard.question}</h3>
            <br></br>
            <button onClick={() => setFlipCard(!flipCard)}>Flip Card</button>
            <br></br>
            <button onClick={e => deleteFlashcard(props.flashcard)}>Delete</button>
          </div>
          
        </div>
        )
}

export default Flashcard