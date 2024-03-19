import React, { useState, useEffect } from 'react';
import { useParams, useNavigate , useOutletContext } from 'react-router-dom';
import IdolContainer from './IdolContainer'

function GroupDetails() {
    const {groups} = useOutletContext();
    const navigate = useNavigate();
    const params = useParams();
    const targetGroup = groups.find(group => group.id === parseInt(params.id))

    function handleClick() {
        navigate(`/groups/${params.id}/forum`)
    }

    if(!targetGroup) {
        return <h1> Loading... </h1>
    }


    
    return(
        <div>
            <img className="group-image" src={targetGroup.img_url} />
            <h2 className="group-name"> {targetGroup.name} </h2>
            <p> {targetGroup.debut_date} </p>
            <p> {targetGroup.fandom_name} </p>
            <p> {targetGroup.youtube} </p>
            <p> {targetGroup.instagram} </p>
            <p> {targetGroup.twitter} </p>
            <p> {targetGroup.tiktok} </p>
            <p> {targetGroup.info} </p>

            <IdolContainer group={targetGroup} />

            <button onClick={handleClick}> Forums </button>

        </div>
    )
}

export default GroupDetails