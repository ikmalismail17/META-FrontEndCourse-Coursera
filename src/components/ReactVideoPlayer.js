// import ReactPlayer from "react-player"; // use entire package functionality
import ReactPlayerYT from "react-player/youtube"; // use only youtube functionality

const ReactVideoPlayer = () => {
    return (
        <ReactPlayerYT url='https://www.youtube.com/watch?v=dQw4w9WgXcQ' playing={true} volume={0.5}/>
    );
}

export default ReactVideoPlayer;