import { useState } from "react";
import {db} from '../../firebase'
import { addDoc, collection } from "firebase/firestore";
import { Link } from "react-router-dom";

export default function AddPigeon() {
  const [name, setName] = useState("");
  const [ringNumber, setRingNumber] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "pigeons"), {
        name: name,
        ringNumber: ringNumber,
      });
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div>
      <center>
        <form
          style={{ marginTop: "200px" }}
          onSubmit={(event) => {
            handleSubmit(event);
          }}
        >
          <input
            type="text"
            placeholder="Pigeon name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="Ring number"
            onChange={(e) => {
              setRingNumber(e.target.value);
            }}
          />
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
        <Link to="/">Back to home</Link>
      </center>
    </div>
  );
}
