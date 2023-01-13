import ProjectListItem from "./ProjectListItem"

const ProjectList = ({projects})=>{

    const ProjectListItems = projects.map((project)=>{
        return <ProjectListItem key={project.id} project={project}/>
    })
    return (
        <ul>{ProjectListItems}</ul>
    )
}
export default ProjectList