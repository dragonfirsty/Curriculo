import Me from "../../assets/imgs/me.jpg";

import { Container } from "./style";

const About = () => {
  return (
    <Container>
      <main>
        <section>
          <img src={Me} alt="foto de perfil" />
          <h2>Leonardo Moya Fernandes</h2>
        </section>
        <div className="teste">
          <div>
            <h2>Competencias:</h2>
            <h3>HTML | JS | CSS | GIT | React | Redux | Beekeper | Node.Js</h3>
          </div>
          <div>
            <h2>Sobre mim:</h2>
            <h3>
              Estudante Desenvolvedor Full Stack na Kenzie Academy Brasil, Desde
              pequeno sempre me indentifiquei com a area de tecnologia, apos meu
              primeiro contato com a programação decidi que era isso que quero
              para minha vida
            </h3>
          </div>
          <div>
            <h2>Contato:</h2>
            <ul>
              <li>
                <a href="https://www.linkedin.com/in/leonardo-moya-fernandes-51203a244/">
                  Linkedin
                </a>
              </li>
              <li>
                <a href="https://github.com/dragonfirsty?tab=overview&from=2022-03-01&to=2022-03-31">
                  GitHub
                </a>
              </li>
              <li>
                <a href="mailto:leonardomoya03@gmail.com">email</a>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </Container>
  );
};

export default About;
