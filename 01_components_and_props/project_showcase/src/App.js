import Header from './components/Header';
import ProjectForm from './components/ProjectForm';
import ProjectList from './components/ProjectList';
import projects from "./projects"

function App() {
  return(
  <>
  <div>Project Showcase</div>
  <Header
    firstName="Josiah"
    lastName="Storrie"
    age={19}
    />
    <ProjectForm />

    <ProjectList 
    projects={projects} 
    />
  </>
  )
}

export default App;