import React from "react";
import NavbarHome from './NavbarHome';
import TitleCard from "./TitleCard";
import InfoCard from './InfoCard';
import AboutCard from './AboutCard';

function PageContent() {
  return (  
    <>
      <NavbarHome />
      <div className="page-content" >
        <TitleCard className='title-card' >

        </TitleCard>
        <InfoCard className='info-card' >

        </InfoCard>
        <AboutCard className='about-card' >

        </AboutCard>
      </div>
    </>
  );
}

export default PageContent;