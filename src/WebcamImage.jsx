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
    <>
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
            <Button className="btn" variant="primary" onClick={capture}>
              click
            </Button>
          </>
        ) : (
          <>
            <Button variant="primary" onClick={() => setImg(null)}>
              Retake
            </Button>
            <img src={img} alt="" srcset="" />
          </>
        )}
        {img && (
          <div>
            <h3>result: benign</h3>
            <h3>name: teng teng teng</h3>
          </div>
        )}
      </div>
    </>
  );
}
