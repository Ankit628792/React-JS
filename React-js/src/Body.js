import React, {useState} from 'react'
import './Body.css'

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Notelist from './Notelist'

const data = [
    "Your positive thoughts and affirmations are creating very powerful habits. These habits will cause a powerful shift in your reality. Visualize yourself doing better each day and watch yourself elevate to higher frequencies. Things are about to get awesome for you. Hold on and be prepared for the ride of your life!",
    "The inner healing and personal growth you’ve achieved created a positive ripple effect in your life. You’ve been willing to do all the energy work and practical work needed to be done to get to where you are now. Ankit, you are just getting started and the roads are becoming clearer as the days goes. Affirm it.",
    "Psychology is the scientific study of the mind and behavior, according to the American Psychological Association. Psychology is a multifaceted discipline and includes many sub-fields of study such areas as human development, sports, health, clinical, social behavior and cognitive processes.",
    "We shouldn’t teach great books; we should teach a love of reading. Knowing the contents of a few works of literature is a trivial achievement. Being inclined to go on reading is a great achievement.",
    "Motivation is one of the driving forces behind human behavior. It fuels competition and sparks social connection. Its absence can lead to mental illnesses such as depression. Motivation encompasses the desire to continue striving toward meaning, purpose, and a life worth living.",
    "Just added a new feature to delete the note from the list... all the data is dynamic... you can add , update and remove the note. Op in the chat guys.....😎😎😎",
    
]

function Body() {

    const [inputNote, setinputNote] = useState("");
    const [Notes, setNotes] = useState([]);

    const itemEvent = (event) => {
        setinputNote(event.target.value);
    }

    const addNote = (event) => {
        event.preventDefault();
        setNotes((oldNotes) => {
            if (inputNote !== '') {
                return [...oldNotes, inputNote]
            }
            else {
                alert("Enter an item")
            }
        })
        setinputNote('');
    }

    const deleteItem = (id) => {
        setNotes((oldNotes) => {
            return oldNotes.filter((arrElement, index) => {
                return index !== id
            })
        })
    }

    return (
        <>
            <div className="note__area">
                <div className="input__area">
                    <textarea style={{resize: 'none'}} placeholder="Enter Your Note" name="note"
                        value={inputNote}
                        onChange={itemEvent} />
                    <Fab style={{ backgroundColor: '#2979ff', color: 'white', top: '-30px', left: '-30px' }} aria-label="add">
                        <AddIcon onClick={addNote} />
                    </Fab>
                </div>
            </div>
            <div className="note__box">

                {
                     data.map((data, index) => {
                        return <Notelist key={index} id={index} content={data} onSelect={deleteItem} />
                    })
                }
                {
                    Notes.map((content, index) => {
                        return <Notelist key={index} id={index} content={content} onSelect={deleteItem} />
                    })
                }
            </div>
        </>
    )
}

export default Body
