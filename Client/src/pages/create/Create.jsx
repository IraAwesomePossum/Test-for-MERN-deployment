import "./create.css";
import { useState, useContext } from "react";
import axios from "axios";
import { Context } from "../../context/Context";

export default function Create() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      description,
    };
    console.log(newPost);
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.post("/posts", newPost);
      console.log(res);
      window.location.replace(`/?user/${res.data._id}`);
    } catch (err) {
      console.error(err.response.data);
    }
  };
  return (
    <div className="write">
      {file && (
        <img
          className="writeImage"
          src={URL.createObjectURL(file)}
          alt="image"
        />
      )}

      <form id="form" className="topBefore writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <div className="top">
            <label id="name" htmlFor="fileInput">
              <i className="writeIcon fas fa-plus">Add your picture</i>
            </label>
          </div>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            id="email"
            type="text"
            placeholder="Title"
            className="writeInput"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            id="message"
            placeholder="Tell us something good"
            type="text"
            className="writeInput writeText"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button id="submit-1" className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}
