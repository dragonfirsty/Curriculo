import ProjectCard from "../../components/projectsCard";
import { useSelector } from "react-redux";
import { Container } from "./style";


const Tecnologys = () => {
  const arrProjects = useSelector((state) => state.tecnologys);

  return (
    <Container>
      <h2>Projetos trabalhados</h2>

      <ul>
        {arrProjects.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </ul>
    </Container>
  );
};

export default Tecnologys;
