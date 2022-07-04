import { useHistory } from "react-router-dom";
import { Container } from "./style";

const Navbar = () => {
  const history = useHistory();

  return (
    <Container>
      <button onClick={() => history.push("/")}>Home</button>
      <button onClick={() => history.push("/about")}>Sobre mim</button>
      <button onClick={() => history.push("/certificates")}> Certificados</button>
      <button onClick={() => history.push("/projects")}>Meus Projetos</button>
    </Container>
  );
};

export default Navbar;
