const TestProps = props => {

    const resetText = () => {
        props.handleResetText();
    }

    return (
        <>
            <p>
                Hello, {props.title} {props.wish}
            </p>
            <table>
                <thead>
                    <tr>
                        <th>Key</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(props.passObj).map((key) => (
                        <tr key={key}>
                            <td>{key}</td>
                            <td>{props.passObj[key]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={resetText} style={{ color: "blue" }}>Reset From Child</button>
        </>
    );
};

export default TestProps;