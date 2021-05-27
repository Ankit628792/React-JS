import React, { useState, useEffect } from 'react'
import './Weather.css'
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

function Weather() {

    const [city, setcity] = useState(null);
    const [country, setcountry] = useState('');
    const [search, setsearch] = useState('Delhi');

    useEffect(() => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=caa29602875a414b91ce2ff7f88b2bfc`;
            const response = await fetch(url);
            const resJson = await response.json()
            setcity(resJson.main);
            setcountry(resJson.sys)
            console.clear();
        }
        fetchApi()
    }, [search, country]);
    return (
        <div className="weather">
        <div className="box">
            <div className="input__data">
                <TextField style={{minWidth: '200px'}} label="Enter City/Country Name" onChange={(event) => {setsearch(event.target.value); }} />
                <Fab color="secondary" className="btn"><SearchOutlinedIcon /></Fab>
            </div>


            <div className="info">
                {!city ? (<p className="errormsg"> No Data Found </p>) :
                    <>
                        <h1>
                            <i className="fa fa-street-view">
                            </i>
                                {search}, {!country ? null : country.country}
                        </h1>
                        <h2> {city.temp}°C </h2>
                        <h3>Min : {city.temp_min}°C | Max : {city.temp_max}°C</h3>
                    </>
                }
            </div>

        </div>
        </div>
        
    )
}

export default Weather
