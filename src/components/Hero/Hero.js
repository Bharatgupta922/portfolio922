import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Namaste <br />I am Bharat Gupta
        </SectionTitle>
        <SectionText>
          I am well versed with right proportion of technical and behavioral
          competencies required as per your need . Seeking an opportunuity to
          serve for you and the it comunity and to learn new skills.
        </SectionText>
        <Button>
          <a
            href="https://github.com/Bharatgupta922/photos/blob/main/portfolioWebsite/Bharat's%20Resume.pdf"
            download
            target="_blank"
          >
            Resume
          </a>
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
