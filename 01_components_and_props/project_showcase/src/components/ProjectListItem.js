const ProjectListItem = ({project})=>{
    const {name, about, phase, link, image}=project
    return(
        <>
        <br />
        <li>Name:{name}</li>
        <li>About:{about}</li>
        <li>Phase:{phase}</li>
        <a href={link}>{name}</a>
        {/* <img src={image}></img> */}
        <br />
        </>
    )
}

export default ProjectListItem;