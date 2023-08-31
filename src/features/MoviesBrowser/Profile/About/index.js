import SpecialData from "../../../../common/SpecialData";
import { StyledAbout, DataWrapper, Description, Image, Name } from "./styled";
import image from "../../../../images/image.png";

const About = ({ birthdate, birthplace, desciption }) => (
  <StyledAbout>
    <Image src={image} />
    <Name>Liu Yifei</Name>
    <DataWrapper>
      <SpecialData
        profile
        upperContent={"25.08.1987"}
        lowerContent={"Wuhan, Hubei, China"}
        mobileUpperData={"Birth:"}
        mobileLowerData={"Place of birth:"}
        desktopUpperData={"Date of birth:"}
        desktopLowerData={"Place of birth:"}
      />
    </DataWrapper>
    <Description>
      Liu Yifei was born in Wuhan, Hubei, Province of China on August 25th,
      1987. She began modeling at the age of 8 and was trained in singing,
      dancing and the piano. Moving to the United States at 10 with her mother,
      Liu lived there for four years.
    </Description>
  </StyledAbout>
);

export default About;
