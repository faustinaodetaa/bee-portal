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
import { User } from "../model/User.js";
const db = getFirestore(firebaseApp);

export class UserController {
  static async getUserByID(id) {
    return User.getUserByID(id);
  }
}
