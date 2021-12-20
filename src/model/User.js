import {
  Firestore,
  collection,
  query,
  where,
  getDocs,
  getDoc,
  getFirestore,
  doc,
  deleteDoc,
} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js";
import { firebaseApp } from "../firebase.js";
const db = getFirestore(firebaseApp);

export class User {
  constructor(email, password, name, role) {
    this.email = email;
    this.password = password;
    this.name = name;
    this.role = role;
  }

  static async getUserByID(id) {
    //query
    console.log(id);
    const q = doc(db, "Users", id);

    const docs = await getDoc(q);
    const { userName, userPassword, userEmail, userRole } = docs.data();

    let user = new User(userEmail, userPassword, userName, userRole);
    return user;
  }

  // static async auth
}
