import React, { useState, useEffect } from 'react'
import axios from "axios";
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import './Pokemon.css'

function Pokemon() {

    const styles = {
        pokemon : {
            padding: '70px',
            background: '#fff',
            width: '500px',
            borderRadius: '10px',
            textAlign: 'center',
            boxShadow: '5px 5px 25px rgba(0,0,0,0.1)',
        },
        input: {
            width:' 80%',
            marginRight: '20px',
        },
        content: {
            marginTop: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
        },
        h1 : {
            textAlign: 'left',
            textTransform: 'capitalize',
            lineHeight: '1.5',
            color: '#536dfe',
            paddingRight: '30px',           
        },
        img : {
            filter : 'drop-shadow(5px 5px 10px rgba(100,100,100,0.5))',
        },
        span: {
            color: 'red',
        }

}

    const [name, setName] = useState();

    const [pokemon, setPokemon] = useState();
    const [getname, setgetname] = useState()
    const [getmoves, setgetmoves] = useState();
    const [srcImg, setsrcImg] = useState()
    const [getability, setgetability] = useState()

    useEffect(() => {
        // alert("hello");

        // pokeImage.srcset =    `https://pokeres.bastionbot.org/images/pokemon/1.png`        

        async function getData() {
           const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
            setgetname(`${res.data.name} ,`);
           setsrcImg(`https://pokeres.bastionbot.org/images/pokemon/${res.data.id}.png`)
           setgetmoves(`${res.data.moves.length} Moves ,`);
           setgetability(`Best Ability ${res.data.abilities[1].ability.name}`);
        }

        
        getData()
    }, [pokemon])

    

    const searchPokemon = () => {
        setPokemon(name);
    }

    return (
        <>
        <Typography variant="h3" style={{position: 'absolute', top: '40px',fontWeight: '500', color: '#333'}}>Search Pokemon</Typography>
        <div className="pokemon" style={styles.pokemon}>
            <TextField style={styles.input} label="Enter Pokemon Name" variant="outlined" value={name} onChange={(event) => setName(event.target.value.toLowerCase())} />            
         <Fab color="secondary" className="btn"><SearchOutlinedIcon onClick={searchPokemon} /></Fab>  
            <div className="content" style={styles.content}>
            <h1 style={styles.h1}> 
            {getname} <br/>  <Divider />
            {getmoves} <br/>  <Divider />
            {getability}
            </h1>
            <div className="imgBx">
            <img src={`${srcImg}`} style={styles.img} width="250" alt=""/>
            </div>
            </div>
        </div>
        </>
    )
}

export default Pokemon
