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
        <ul className="summary">
          <li>
            <h2>Competencias:</h2>
            <h3>HTML | JS | CSS | GIT | React | Redux | Beekeper | Node.Js</h3>
          </li>
          <li>
            <h2>Sobre mim:</h2>
            <h3>
              Estudante Desenvolvedor Full Stack na Kenzie Academy Brasil, Desde
              pequeno sempre me indentifiquei com a area de tecnologia e Fascinado
              pelas novas tecnologias da programação, Dito isso procuro sempre melhorar
              dia a apos dia resolvendo problemas. 
            </h3>
          </li>
          <li>
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
          </li>
        </ul>
      </main>
    </Container>
  );
};

export default About;
