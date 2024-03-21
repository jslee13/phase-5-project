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
        <div className='group-details-container'>
            <img className="group-image" src={targetGroup.img_url} />
            <div className='group-details'>
                <h2 className="group-name"> {targetGroup.name} </h2>
                <p> Debut Date: {targetGroup.debut_date} </p>
                <p> Fandom Name: {targetGroup.fandom_name} </p>
                <p> Youtube: {targetGroup.youtube} </p>
                <p> Instagram: {targetGroup.instagram} </p>
                <p> Twitter: {targetGroup.twitter} </p>
                <p> Tiktok: {targetGroup.tiktok} </p>
                <p className='group-info'> Info: {targetGroup.info} </p>
            </div>

            <IdolContainer group={targetGroup} />

            <button onClick={handleClick}> Forums </button>

        </div>
    )
}

export default GroupDetails