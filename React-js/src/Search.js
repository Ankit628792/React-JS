
import React, { useState } from 'react'
import './Search.css'
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

function Search() {

    const [Img, setImg] = useState('');

    const inputEvent = (event) => {
        const data = event.target.value;
        setImg(data);
    }

    const srcImg = `https://source.unsplash.com/600x400/${Img}`;

    return (
        <>
            <div className="searchbar">
                {/* <input type="text" onChange={inputEvent} value={Img} placeholder="Search Anything" /> */}

                <TextField style={{ paddingBottom: '50px', marginRight: '30px', minWidth: '250px' }} label="Search Something" onChange={inputEvent} value={Img} />
                <Fab color="secondary" className="btn"><SearchOutlinedIcon /></Fab>

                <div className="imgBx">
                    <img src={srcImg} alt="search" />
                </div>
            </div>

        </>
    )
}

export default Search
