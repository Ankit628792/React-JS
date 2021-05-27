import React, {useState} from 'react'
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';


const styles = {
    body: {
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#ffcccc',
        overflowX: 'hidden',
      },
    box: {
        width: '400px', height: '500px', background: '#eee',borderRadius: '20px', boxShadow: '5px 5px 20px rgba(0,0,0,0.2)'
    },
    h1: {
        color: '#222', fontSize: '100px',textAlign: 'center', margin: '100px', textShadow: '10px 10px 10px rgb(200,200,200)',
    },
    inc: {
        color: 'green', background: '#fff'
    },
    dnc: {
        color:'red', background: '#fff'
    }
}
function Counter() {

    const [value, setValue] = useState(0);

    const Increment = () => {
        setValue(value + 1);
    }

    const Decrement = () => {
        if(value > 0)
        setValue(value -1);
        else{
            alert('Can Decrement Beyond 0 !')
        }
    }

    return (
        <div style={styles.body}>
            <Typography variant="h3" style={{position: 'absolute', top: '40px',fontWeight: '600', color: '#333', letterSpacing: '4px'}}>React Counter</Typography>
        <div className="counter" style={styles.box}>
            <h1 style={styles.h1}>{value}</h1>
            <ButtonGroup style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}} size="large" aria-label="small outlined button group">
            <Tooltip title="Increment">
                    <Button variant="contained" style={styles.inc}>
                        <AddIcon style={{fontSize:"40px"}}
                        onClick={Increment} />
                    </Button>
                </Tooltip>
                <Tooltip title="Decrement">
                <Button variant="contained" style={styles.dnc}>
                    <DeleteIcon style={{fontSize:"40px"}}
                        onClick={Decrement} />
                </Button>
            </Tooltip>
            </ButtonGroup>
        </div>
        </div>
    )
}

export default Counter
