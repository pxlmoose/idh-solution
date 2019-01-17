import React from 'react'

const TeamMember = (props) => (
    <div className="singleMember">
        <div className="avatar-wrapper innerBorder">
            <img className="avatar" src={props.path} onClick={(e) => {
                props.handleOpenPreviewMember({name : props.name, position: props.position})
            }}/>
        </div>
        <p className="attributes_name">{props.name}</p>
        <p className="attributes_position">{props.position}</p>
        <p className="attributes_city">{props.city}</p>
    </div>
);

export default TeamMember;