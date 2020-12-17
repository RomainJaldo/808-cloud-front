import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'
import React from "react";
import {Container} from "react-bootstrap";

const audioList1 = [
    {
        name: 'Despacito',
        singer: 'Luis Fonsi',
        cover:
            'http://res.cloudinary.com/alick/image/upload/v1502689731/Despacito_uvolhp.jpg',
        musicSrc:
            'http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3',
        // support async fetch music src. eg.
        // musicSrc: async () => {
        //   return await fetch('/api')
        // },
    },
    {
        name: 'Dorost Nemisham',
        singer: 'Sirvan Khosravi',
        cover:
            'https://res.cloudinary.com/ehsanahmadi/image/upload/v1573758778/Sirvan-Khosravi-Dorost-Nemisham_glicks.jpg',
        musicSrc:
            'https://res.cloudinary.com/ehsanahmadi/video/upload/v1573550770/Sirvan-Khosravi-Dorost-Nemisham-128_kb8urq.mp3',
    },
]

const options = {
    // audio lists model
    audioLists: audioList1
}

function Player() {
    return (
        <div>
            <h2>player</h2>
            <ReactJkMusicPlayer {...options}/>
        </div>
    );
}

export default Player;