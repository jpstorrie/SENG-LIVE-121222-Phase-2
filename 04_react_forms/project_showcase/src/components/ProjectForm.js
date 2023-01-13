// Deliverable 1: Make the `ProjectForm` component a controlled component

// - Initialize state for all the form fields found in the component

// - Add an `onChange` event to each field that will update state associated 
// with the field that is interacted with

// - Provide a `value` attribute to each form field that will return the 
// associated piece of state

// - Add an `onSubmit` event handler to the form
import { useState } from "react";


const ProjectForm = ({ handleSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    about: '',
    phase: '',
    link: '',
    image: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value })
  }

  const handleDefault = (e) => {
    e.preventDefault();

    fetch(`http://localhost:4000/projects`, {
      method: "POST",
      headers: { "Content-Type": "application/json",
      "Accepts": "application/json"},
      body: JSON.stringify(formData)
    })
    .then((r) =>r.json())
    .then((newProject) => {
      handleSubmit(newProject)
      
      setFormData({
      name: '',
      about: '',
      phase: '',
      link: '',
      image: '',
      })
    })

  }

  return (
    <section>
      <form className="form" autoComplete="off" onSubmit={handleDefault}>
        <h3>Add New Project</h3>

        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" value={formData.name}
          onChange={handleChange} />

        <label htmlFor="about">About</label>
        <textarea id="about" name="about" value={formData.about}
          onChange={handleChange} />

        <label htmlFor="phase">Phase</label>
        <select name="phase" id="phase" value={formData.phase}
          onChange={handleChange}>
          <option>Select One</option>
          <option value="1">Phase 1</option>
          <option value="2">Phase 2</option>
          <option value="3">Phase 3</option>
          <option value="4">Phase 4</option>
          <option value="5">Phase 5</option>
        </select>

        <label htmlFor="link">Project Homepage</label>
        <input type="text" id="link" name="link" value={formData.link}
          onChange={handleChange} />

        <label htmlFor="image">Screenshot</label>
        <input type="text" id="image" name="image" value={formData.image}
          onChange={handleChange} />

        <button type="submit">Add Project</button>
      </form>
    </section>
  );
};

export default ProjectForm;
