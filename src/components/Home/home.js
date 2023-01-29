import { Link } from "react-router-dom";
import firebase from "firebase/compat/app";
import { useEffect, useState } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";

function Home() {
  const [pigeons, setPigeons] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "pigeons"));
    onSnapshot(q, (querySnapshot) => {
      setPigeons(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  const handleLogout = async () => {
    await firebase.auth().signOut();
  };
  return (
    <div>
      <h1>This is the home page</h1>
      {pigeons.map((pigeon) => (
        <div id={pigeon.data.id} key={pigeon.data.id}>
          <hr />
          <h2>
            Pigeon name: {pigeon.data.name} ||| Ring number:{" "}
            {pigeon.data.ringNumber}
          </h2>
          <hr />
        </div>
      ))}
      <Link to="/add-pigeon">Click to add pigeon</Link>
      <br></br>
      <button onClick={() => handleLogout()}>Logout</button>
    </div>
  );
}

export default Home;
