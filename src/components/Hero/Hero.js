import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';


const Hero = (props) => (
  <Section row noppading>
    <LeftSection >I am Joao
        
      <SectionTitle main center>A wandering <br /> full-stack developer
      
        
      </SectionTitle>
      <SectionText>
        Welcome to my portfolio! I am a Software Engineer based in Toronto who likes to
        create interactive experiences and functional interfaces. I work in both
        front-end and back-end developments.
      
      </SectionText>
      <Button onClick={() => window.location = "#projects"}>Learn More</Button>
      
    </LeftSection>
    
    
    
  </Section>
);

export default Hero;