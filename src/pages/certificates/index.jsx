import Curriculo from "../../assets/imgs/CertificadoFrontEnd.png";
import { Container } from "./style";

const Certificates = () => {
  return (
    <Container>
      <h1>Certificados:</h1>
        <img
          src={Curriculo}
          alt="curriculo front end da kenzie do aluno leonardo moya fernandes"
        />
      
    </Container>
  );
};

export default Certificates