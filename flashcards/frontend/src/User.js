
import axios from 'axios';

function User(props) {
    
    const deleteUser = async(user) => {
      await deleteOneUser(user);
      props.fetchUsers();
    }
  
    const deleteOneUser = async(user) => {
    try {
      await axios.delete("/api/users/" + user.id);
    } catch(error) {
      props.setError("error deleting a user" + error);
    }
    
  }
    return (
        <div key={props.item.id} className="flashcard">
          <div className="Card">
            <b>Creator: </b>{props.item.name}
            <br></br>
            <b>Major: </b>{props.item.major}
            <br></br>
            <b>School: </b>{props.item.school}
            <br></br>
            <b>Year: </b>{props.item.year}
            <br></br>
            <button onClick={e => deleteUser(props.item)}>Delete</button>
          </div>
          
        </div>
        )
}

export default User