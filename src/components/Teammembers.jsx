import React from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
// import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

import './Teammembers.css';
import aaron from '../assets/aaron.png';
import alroy from '../assets/alroy.jpg';
import shruti from '../assets/shruti.png';
import rudalph from '../assets/rudalph.png';
import punit from '../assets/punit.png';


const TeamMembersComponent = () => {
  const teamMembers = [
    {
      name: 'Samrudhi Shetty',
      position: 'Lead',
      photoUrl: rudalph,
      instagramLink: 'https://www.instagram.com/_samrudhishetty_?igsh=eWNnOWYzcWFraTA1',
      linkedinLink: 'https://www.linkedin.com/in/samrudhi-shetty-5a227b264',
    },
    {
      name: 'Shreyas Gonsalves',
      position: 'Co-Lead',
      photoUrl: shruti,
      instagramLink: 'https://www.instagram.com/shreyas27_g?igsh=MXdhOTRjbW40bHl1cg==',
      linkedinLink: 'https://www.linkedin.com/in/shreyasgonsalves',
    },
    {
      name: 'Yash Punmiya',
      position: 'Technical Lead',
      photoUrl: punit,
      instagramLink: 'https://www.instagram.com/yashpunmiya_/profilecard/?igsh=MXQ4MHBvZW9ueGJjdw==',
      linkedinLink: 'https://www.linkedin.com/in/yash-punmiya-27a6a8296/',
    },
    {
      name: 'Anisa Pereira',
      position: 'Event Co-ordinator',
      photoUrl: aaron,
      instagramLink: 'https://www.instagram.com/anisa_pereira16/profilecard/?igsh=dmQyc21kdnMzZXo3',
      linkedinLink: 'https://www.linkedin.com/in/anisa-pereira-581666287',
    },
    {
      name: 'Nishant Maurya',
      position: 'Graphics Lead',
      photoUrl: alroy,
      instagramLink: 'https://instagram.com/',
      linkedinLink: 'https://www.linkedin.com/in/nishant-maurya-45bb86276/',
    },
   
  ];

  return (
    <div className="team-members-container" id="team">
      
        <h1 className="events-title" style={{'textAlign':'center'}}><strong>TEAM MEMBERS</strong></h1>
        <div className="cards-container">
          {teamMembers.map((member, index) => (
            <Zoom>
              <div className="card" key={index}>
                <div className='card-circle'>
                  <div className="member-photo">
                    <img src={member.photoUrl} alt='member' />
                  </div>
                  <h2>{member.name}</h2>
                  <p>{member.position}</p>
                  <div className="social-icons">
                    <a href={member.instagramLink} target="_blank" rel="noopener noreferrer">
                      <FaInstagram className="icon instagram-icon" />
                    </a>
                    <a href={member.linkedinLink} target="_blank" rel="noopener noreferrer">
                      <FaLinkedin className="icon linkedin-icon" />
                    </a>
                  </div>
                </div>
              </div>
            </Zoom>
          ))}
        </div>
      
    </div>
  );
};

export default TeamMembersComponent;
