import React from 'react';
import Webcam from 'react-webcam';
import Button from 'react-bootstrap/Button';

import { useCallback, useRef, useState } from 'react';
export default function WebcamImage() {
  const [img, setImg] = useState(null);
  const webcamRef = useRef(null);

  const videoConstraints = {
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
            mirrored={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
          />
          <Button variant="light" onClick={capture}>
            Capture photo
          </Button>
        </>
      ) : (
        <>
          <img src={img} alt="screenshot" />
          <Button variant="light" onClick={() => setImg(null)}>
            Retake
          </Button>
          <h1 className="text-xl font-bold underline">Hello world!</h1>
        </>
      )}
    </div>
  );
}
