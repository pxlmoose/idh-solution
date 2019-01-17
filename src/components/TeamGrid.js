import React from 'react'
import TeamMember from './TeamMember'


const TeamGrid = (props) => (
    <div className="positioningWrapper">
        <div className="teamGrid">
            <div className="teamGrid-wrapper">
                {
                    props.teamMembers.length === 0 ? (
                        <div>
                            <span>No team members to show</span>
                        </div>
                    ) : (
                        props.teamMembers.map((teamMember, index) => {
                            return <TeamMember 
                                    key={index}
                                    {...teamMember} 
                                    handleOpenPreviewMember={props.handleOpenPreviewMember}
                                />;
                        })
                    )
                }
            </div>
        </div>
    </div>
);

export default TeamGrid;