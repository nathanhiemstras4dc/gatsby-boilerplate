import React, { useState } from "react";
import YouTube from "react-youtube";
import Modal from "react-bootstrap/Modal";

export function VideoLongForm(props) {
    const [lgShow, setLgShow] = useState(false);
    const className = props.className ? props.className : "";
    return (
        <>
            <a
                href="javascript:void(0)"
                onClick={() => setLgShow(true)}
                className={`hex-and-dots--video ${className}`}
            >
                <span className="hex-and-dots--video-inner">
                    <span className="icon-play"></span>
                </span>
            </a>
            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
                centered
            >
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body className="d-flex justify-content-center align-items-center">
                    <YouTube
                        videoId="LuWAHsB2mMw"
                        className="youtube-container"
                    />
                </Modal.Body>
            </Modal>
        </>
    );
}
