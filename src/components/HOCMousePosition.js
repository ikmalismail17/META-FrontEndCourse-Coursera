import React from 'react';

const withMousePosition = (WrappedComponent) => {
    return (props) => {
        const [mousePosition, setMousePosition] = React.useState({
            x: 0,
            y: 0
        });

        React.useEffect(() => {
            const handleMouseMove = (event) => {
                setMousePosition({
                    x: event.clientX,
                    y: event.clientY
                });
            };

            window.addEventListener('mousemove', handleMouseMove);

            return () => {
                window.removeEventListener('mousemove', handleMouseMove);
            }
        
        }, [])

        return <WrappedComponent {...props} mousePosition={mousePosition} />
    }
}

const PanelMouseLogger = ({mousePosition}) => {
    if (!mousePosition) {
        return null;
    }
    return (
        <div>
            <p>Mouse Position:</p>
            <span>X: {mousePosition.x}</span>
            <span>Y: {mousePosition.y}</span>
        </div>
    )
}

const PointMouseLogger = ({mousePosition}) => {
    if (!mousePosition) {
        return null;
    }
    return (
        <p>
            ({mousePosition.x}, {mousePosition.y})
        </p>
    )
}

const PanelMouseLoggerWithMousePosition = withMousePosition(PanelMouseLogger);
const PointMouseLoggerWithMousePosition = withMousePosition(PointMouseLogger);

const HOCMousePosition = () => {
    
    return (
        <>
        <p>HOC use</p>
        <PanelMouseLoggerWithMousePosition />
        <PointMouseLoggerWithMousePosition />
        </>
    );
}

export default HOCMousePosition;