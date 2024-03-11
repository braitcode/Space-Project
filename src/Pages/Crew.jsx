import React, { useState } from "react";
import "../css/Crew.css"
import {CrewDB} from "../DB/CrewDB"
import LazyLoad from "react-lazy-load";
// import { Button } from 'react-bootstrap';

const Crew = () => {
    const [partners] = useState(CrewDB);
    const [value, setValue] = useState(0);
    const {name, images, role, bio} = partners[value]
  return (
    <div className='crew-bg'>
        <div className='crew'>
            <main className='main'>
                <div className='title-crew'>
                </div>
                <div className='content-crew'>
                    <div className='left-content-crew'>
                        <div className='left-content-text'>
                            <h2>{role.toUpperCase()}</h2>
                            <h1>{name.toUpperCase()}</h1>
                            <p>{bio}</p>
                        </div>
                        <div className="left-content-btn">
                            {partners.map((partner, index) =>
                            <button key={index} onClick={() => {
                                setValue(index)}}
                                className={`${index === value && 'active'}`}
                                ></button>
                            )}
                        </div>
                    </div>
                    <div className="right-content-crew">
                        <LazyLoad>
                            <img src={images} title={name} className='crew-img' />
                        </LazyLoad>
                    </div>
                </div>
            </main>
        </div>
    </div>
  )
}

export default Crew;