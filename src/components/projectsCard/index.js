import { Container } from "./style";

const ProjectCard = ({ project }) => {

  const redirectGitHub =() => {
    window.location.assign(project.github);
}

const redirectPage =() => {
  window.location.assign(project.page);
}

  return (
    <Container>
      <h2>{project.name}</h2>
      <img src={project.image} alt={project.description} />
      <h4>{project.description}</h4>
      <div>
      <button onClick={() => redirectPage()}>Pagina</button>
      <button onClick={() => redirectGitHub()}>GitHub</button>
      </div>
    </Container>
  );
};

export default ProjectCard;
