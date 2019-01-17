import React from 'react';
import TeamGrid from './TeamGrid';
import Header from './Header';
import TeamModal from './TeamModal';

export default class PreviewTeam extends React.Component {
    state = {
        teamMembers: [],
        selectedMember: undefined
    };

    handleOpenPreviewMember = (member) => {
        this.setState(() => ({selectedMember: member}));
    }

    handlePreviewLeft = (props) => {
        let membersArray = this.state.teamMembers; 
        let currentMember = membersArray.findIndex((member) => {
            return member.name === props.name;
        })
        let indexPreviousMember = (currentMember === 0) ? membersArray.length-1 : currentMember-1;
        let previousMember = this.state.teamMembers[indexPreviousMember];
        this.handleOpenPreviewMember(previousMember);
    }

    handlePreviewRight = (props) => {
        let membersArray = this.state.teamMembers; 
        let currentMember = membersArray.findIndex((member) => {
            return member.name === props.name;
        })
        let indexNextMember = (currentMember === membersArray.length - 1) ? 0 : currentMember+1;
        let nextMember = this.state.teamMembers[indexNextMember];
        this.handleOpenPreviewMember(nextMember);
    }

    handleClearModal = () => {
        this.setState(() => ({ selectedMember: undefined }));
    }

    componentDidMount() {
        try {
            const teamMembers = list;
            if (teamMembers) {
                this.setState(() => ({ teamMembers }));
            }
        } catch(e) {
            console.log(`error: ${e}`)
        }
    };

    render() {
        const title = "Meet our team";

        return (
            <div>
                <Header subtitle={title} />
                <TeamGrid
                    teamMembers={this.state.teamMembers} 
                    handleOpenPreviewMember={this.handleOpenPreviewMember} 
                />
                <TeamModal 
                    selectedMember={this.state.selectedMember}
                    handlePreviewLeft={this.handlePreviewLeft} 
                    handlePreviewRight={this.handlePreviewRight}
                    handleClearModal={this.handleClearModal}
                />
            </div>
        );

    }

}

// list of employees, preferably/ideally it would be stored in some database
const list = [{
    name: "Basia Sołtysińska",
    position: "Founder",
    city: "Warsaw",
    path: '../images/avatar_1.png'
}, {
    name: "Włas Chorowiec",
    position: "Founder",
    city: "Warsaw",
    path: '../images/avatar_2.png'
}, {
    name: "Edyta Leśniewska",
    position: "Head of Human Resources",
    city: "Warsaw",
    path: '../images/avatar_3.png'
}, {
    name: "Joanna Pawluk",
    position: "Chief Growth Officer (CGO)",
    city: "London",
    path: '../images/avatar_4.png'
}, {
    name: "David Saunders",
    position: "Busines Development",
    city: "London",
    path: '../images/avatar_5.png'
}, {
    name: "Adam Eldrigde",
    position: "Busines Development Director US",
    city: "Los Angeles",
    path: '../images/avatar_6.png'
}, {
    name: "Maha Mahda",
    position: "Chief Busines Development Officer (CBDO)",
    city: "Warsaw",
    path: '../images/avatar_7.png'
}, {
    name: "Elżbieta Kamińska",
    position: "International Client Service Manager",
    city: "Warsaw",
    path: '../images/avatar_8.png'
}, {
    name: "Karolina Makuch",
    position: "Creation Manager",
    city: "Warsaw",
    path: '../images/avatar_9.png'
}, {
    name: "Kamil Bolek",
    position: "Head of Comunication",
    city: "Warsaw",
    path: '../images/avatar_10.png'
}
];