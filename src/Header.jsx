import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({title, onAdd}) => {

    const onClick = (e) => {
        console.log(e)
    }
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color="green" onClick={onAdd} text="Add"/>
        </header>
    )
}

Header.defaultProps = {
    title: "Task Tracker",
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
