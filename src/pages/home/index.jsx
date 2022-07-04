import { Container } from "./style";
import HomeImg from "../../assets/imgs/home.jpg";

const Home = () => {
  return (
    <Container>
      <div>
        <h1>Leonardo Moya Fernandes</h1>
        <h2>Dev Full stack</h2>
      </div>
      <img src={HomeImg} alt="foto com varias tecnologias de programação" />
    </Container>
  );
};

export default Home;
