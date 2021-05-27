import React from 'react'
import './Notelist.css'
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

function Notelist(props) {

    return (
        <div className="note">
            <Fab style={{position: 'absolute', top: '-20px',right: '50px'}} color="primary" aria-label="edit">
                <EditIcon />
            </Fab>
            <Fab style={{position: 'absolute', top: '-20px',right: '-20px'}} color="secondary" aria-label="delete">
                <DeleteIcon onClick={() => {
                            props.onSelect(props.id)
                        }}
                        />
            </Fab>
            <p>{props.content}</p>
        </div>
    )
}

export default Notelist
