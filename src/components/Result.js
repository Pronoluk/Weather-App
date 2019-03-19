import React from 'react';

const Result = props => {

    const {err, date, city, temp, sunrise, sunset, pressure, wind} = props.weather

    let content = null;

    if(!err && city) {

        const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString()
        const sunsetTime = new Date(sunset * 1000).toLocaleTimeString()
        const tempCel = Math.round(temp - 273.15)
        content = (
            <div>
            <h3>Result for <em>{city}</em></h3>
            <h4>Date and time: {date}</h4>
            <h4>Current temperature: {tempCel} &#176;C</h4>
            <h4>Sunrise at {sunriseTime}</h4>
            <h4>Sunset at {sunsetTime}</h4>
            <h4>Current wind {wind} m/s</h4>
            <h4>Current pressure {pressure} hPa</h4>

            </div>
            
        )
    }

    return(
        <div className="result">
        {err ? `No record for ${city}` : content}
        </div>
    );
}

export default Result;