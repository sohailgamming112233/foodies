import { db } from "./Components/firebase";
import { collection, addDoc } from "firebase/firestore";

const menu = [PASTE_YOUR_JSON_HERE];

const upload = async () => {
  for (let item of menu) {
    await addDoc(collection(db, "menu"), item);
  }
  console.log("Upload Complete");
};

upload();
