import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useOutletContext } from 'react-router-dom';
import IdolContainer from './IdolContainer'

function GroupDetails() {
    const {groups} = useOutletContext();
    const navigate = useNavigate();
    const params = useParams();

    function handleClick() {
        navigate(`/forums/${forum.id}`)
    }
    
    return(
        <div>
            <img className="group-image" src={groups.img_url} />
            <h2 className="group-name"> {groups.name} </h2>
            <p> {groups.debut_date} </p>
            <p> {groups.fandom_name} </p>
            <p> {groups.youtube} </p>
            <p> {groups.instagram} </p>
            <p> {groups.twitter} </p>
            <p> {groups.tiktok} </p>
            <p> {groups.info} </p>

            <IdolContainer groups={groups} />

            <button onClick={handleClick}> Forums </button>

        </div>
    )
}

export default GroupDetails