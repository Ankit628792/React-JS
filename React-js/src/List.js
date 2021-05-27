import React, {useState} from 'react'
import Button from '@material-ui/core/Button';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';

function List(props) {

    const [line, setLine] = useState(false);

    const completed = () => {
        setLine(true);
    }

    return (
        <div className="list__item">

            <Tooltip title="Delete">
                <Button style={{ color: 'red' }}>
                    <DeleteIcon
                        onClick={() => {
                            props.onSelect(props.id)
                        }} />
                </Button>
            </Tooltip>

            <Tooltip title="Completed">
                <Button style={{ color: 'skyblue' }} >
                    <DoneAllIcon  onClick={completed} />
                </Button>
            </Tooltip>

            <li style={{textDecoration: line ? 'line-through' : 'none'}}>
                {props.item}
            </li>
        </div>
    )
}

export default List
