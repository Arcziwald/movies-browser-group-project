import { Container, Name, Picture, Role, Wrapper } from "./styled";
import { PersonImageAPI } from "../../codesAPI";
import nullPersonImage from "../../images/noPersonImage.png";

const PersonTile = ({ picture, name, role, moviePage }) => (
  <Wrapper>
    <Picture src={picture ? `${PersonImageAPI}${picture}` : nullPersonImage} />
    <Container $moviePage={moviePage}>
      <Name>{name}</Name>
      <Role>{role}</Role>
    </Container>
  </Wrapper>
);

export default PersonTile;
