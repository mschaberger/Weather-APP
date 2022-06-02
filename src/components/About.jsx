import React from 'react';
import './About.css';


export default function About() {
    return(
        <div className='contenedor'>
            <p className='title'>WEATHER APP</p>
            <p>Hello everyone! This SPA (Single Page Application) is part of a homework for the SoyHenry bootcamp. </p>
            <p>This app was made using ReactJS and consumes data from an external API.</p>
            <br/>
            <p>It has home page with a NavBar where you can search for different cities around the world and the city's weather will be displayed.</p>
            <br/>
            <p>By clicking on the city's name you can get more information about its weather conditions. The user can also delete de city's card and it won't be displayed on the screen anymore.</p>
        </div>
    )
};