import React from 'react';
import Webcam from 'react-webcam';
import Button from 'react-bootstrap/Button';

import { useCallback, useRef, useState } from 'react';
export default function WebcamImage() {
  const [img, setImg] = useState(null);
  const webcamRef = useRef(null);

  const videoConstraints = {
    height: 915,
    width: 412,
    facingMode: 'environment',
  };

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImg(imageSrc);
  }, [webcamRef]);
  return (
    <div className="camera">
      {img === null ? (
        <>
          <Webcam
            className="webcam"
            audio={false}
            height={715}
            width={410}
            mirrored={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
          />
          <Button className="btn" variant="primary" onClick={capture}>
            click
          </Button>
        </>
      ) : (
        <>
          <img src={img} alt="screenshot" />
          <Button variant="light" onClick={() => setImg(null)}>
            Retake
          </Button>
          <h1>Hello world!</h1>
        </>
      )}
    </div>
  );
}
