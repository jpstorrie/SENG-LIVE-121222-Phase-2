const Header = (props)=> {

    const {firstName, lastName, age} = props

    return (
        <>
        <h2>Header</h2>
        <p>{firstName} {lastName}</p>
        <p>{age}</p>
        </>
    );
}
export default Header;