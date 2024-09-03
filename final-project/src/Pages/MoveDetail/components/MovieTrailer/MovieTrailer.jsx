import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./MovieTrailer.style.css";
import YouTube from "react-youtube";
import { useMovieTrailerQuery } from "../../../../hooks/useMovieTrailer";

const MovieTrailer = (props) => {
  const { data } = useMovieTrailerQuery(props.id);

  const onPlayerReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Movie Trailer
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <YouTube videoId={data?.key} opts={opts} onReady={onPlayerReady} />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MovieTrailer;
