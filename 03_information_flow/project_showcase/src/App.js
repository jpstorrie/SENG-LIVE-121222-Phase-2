import { useState } from "react";

import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

const App = () => {
  const [projects, setProjects] = useState([]);


  //lift darkmode with callback function
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleClick = () => setIsDarkMode(!isDarkMode);


  //searchquery state and results are lifted
  const [searchQuery, setSearchQuery] = useState("");

  const searchResults = projects.filter((project) => {
    return project.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  // # Deliverable 1: Configure a <button> in our App 
  // that will use json-server to fetch projects 
  // and store them in state

  // - Add an onClick event listener to the "Load Projects" 
  // button

  // - When the button is clicked, make a fetch 
  // request to "http://localhost:4000/projects"
  // and set the `projects` state to the value 
  // returned by the response

  function fetchProjects(){
    fetch("http://localhost:4000/projects")
    //convert response to js
    .then(res => res.json())
    //make return === projects state
    .then(projects => setProjects(projects))

    //add error handler
    .catch(err => console.error(err))
  }


  const appTheme = isDarkMode? "App":"App light"

  return (
    <div className={appTheme}>
      <Header 
      isDarkMode={isDarkMode}
      handleClick={handleClick}
      />
      <ProjectForm />
      <button onClick={fetchProjects}>Load Projects</button>
      <ProjectList 
      setSearchQuery={setSearchQuery}
      searchResults={searchResults}
      />
    </div>
  );
};

export default App;
