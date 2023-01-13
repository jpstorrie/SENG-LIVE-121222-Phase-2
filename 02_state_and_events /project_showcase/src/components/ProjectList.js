import ProjectListItem from "./ProjectListItem";
import {useState} from "react";


const ProjectList = ({ projects }) => {

  const [searchQuery, setSearchQuery] = useState("");

  const handleInput = (e) =>{
    setSearchQuery(e.target.value);
  }

  const filteredListItems = projects.filter(project =>{
    return project.name.toLowerCase().includes(searchQuery.toLowerCase())
  })

  const projectListItems = filteredListItems.map((project) => (
    <ProjectListItem key={project.id} {...project} />
  ));


  return (
    <section>
      <h2>Projects</h2>

      <div className="filter">
        <button>All</button>
        <button>Phase 5</button>
        <button>Phase 4</button>
        <button>Phase 3</button>
        <button>Phase 2</button>
        <button>Phase 1</button>
      </div>
      <input onChange={handleInput} type="text" placeholder="Search..."/>

      <ul className="cards">{projectListItems}</ul>
    </section>
  );
};

export default ProjectList;
