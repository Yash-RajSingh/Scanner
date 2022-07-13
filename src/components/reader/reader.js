import { useState } from "react";
import Tesseract from "tesseract.js";
import "./reader.css";

const Reader = () => {
  const [imagePath, setImagePath] = useState(`./assets/placeholder2.jpg`);
  const [text, setText] = useState("");
  const [heading, setHeading] = useState("Upload Image");

  const handleChange = (event) => {
    setImagePath(URL.createObjectURL(event.target.files[0]));
    setHeading("Uploaded Image");
  };

  const handleClick = () => {
    Tesseract.recognize(imagePath, "eng", {
      logger: (m) => console.log(m),
    })
      .catch((err) => {
        console.error(err);
      })
      .then((result) => {
        var text = result.text;
        setText(text);
      });
  };
  return (
    <>
      <div className="readerDiv">
        <div className="container">
          <div>
            <h3>{heading}</h3>
            <img src={imagePath} alt="To be selected image" className="upImg" />
          </div>
          <div>
            <h3>Extracted text</h3>
            {text ? <p> {text} </p> : ""}
          </div>
        </div>
        <div className="Handlers">
          <input type="file" onChange={handleChange} id="input"/>
          <button onClick={handleClick}> Convert to text</button>
        </div>
      </div>
    </>
  );
};

export default Reader;
