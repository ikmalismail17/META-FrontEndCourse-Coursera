const PropChildDiv = (props) => {
    const bag = {
        border: "5px solid blue",
        padding: "5px",
        margin: "5px",
        borderRadius: "5px"
    };
    return (
        <div style={bag}>
            {props.children}
        </div>
    );
}

export default PropChildDiv;