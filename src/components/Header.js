import PropTypes from "prop-types";
import Button from "./Button";
// Project code
const Header = ({ title }) => {
    const onClick = (e) => {
        alert("click");
    };
    return (
        <header className="header">
            <h1>{title}</h1>

            <Button color="green" text="Add" onClick={onClick} />
        </header>
    );
};

// Demo - using props instead of destructoring
// const Header = (props) => {
//     return (
//         <header>
//             {/* Inline Styling */}
//             {/* <h1 style={{ color: "red", backgroundColor: "black" }}>{props.title}</h1> */}
//             {/* Using the styling from a variable */}
//             {/* <h1 style={headingStyle}>{props.title}</h1> */}
//         </header>
//     );
// };

// Setting default props
Header.defaultProps = {
    title: "Task Manager",
};

// Using prop types for debugging
Header.propTypes = {
    title: PropTypes.string.isRequired,
};

// Demo purposes for learning
// Another way to style - brad mentions that he uses this when he needs to make use of dynamic styling
// const headingStyle = { color: "red", backgroundColor: "black" };
export default Header;
