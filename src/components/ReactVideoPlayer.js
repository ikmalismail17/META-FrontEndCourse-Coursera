// import ReactPlayer from "react-player"; // use entire package functionality
import ReactPlayerYT from "react-player/youtube"; // use only youtube functionality
import ReactSong from "./ReactSong";
import PropChildDiv from "./PropChildDiv";
import video from '../assets/videos/videoquran.mp4';

const ReactVideoPlayer = () => {

    return (
        <>
        <h1>Video</h1>
        <PropChildDiv>
            <video height={300} controls autoPlay>
                <source src={video} type="video/mp4" />
            </video>
            <ReactPlayerYT url='https://www.youtube.com/watch?v=dQw4w9WgXcQ' volume={0.5}/>
        </PropChildDiv>
        <h1>Audio</h1>
        <PropChildDiv>
            <ReactSong />
        </PropChildDiv>
        </>
    );
}

export default ReactVideoPlayer;