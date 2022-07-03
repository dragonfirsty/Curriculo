import { useHistory } from "react-router-dom";
import { Container } from "./style";

const Navbar = () => {
  const history = useHistory();

  return (
    <Container>
      <button onClick={() => history.push("/")}>Sobre mim</button>
      <button onClick={() => history.push("/certificates")}>
        Certificados
      </button>
      <button onClick={() => history.push("/projects")}>Projetos</button>
    </Container>
  );
};

export default Navbar;
