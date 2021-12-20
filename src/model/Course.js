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

export class Course {
  constructor(courseCredits, courseName, courseDescription) {
    this.courseCredits = courseCredits;
    this.courseName = courseName;
    this.courseDescription = courseDescription;
  }

  static async getCourseByID(id) {
    //query
    console.log(id);
    const q = doc(db, "Courses", id);

    const docs = await getDoc(q);
    const { courseCredits, courseName, courseDescription } = docs.data();

    let course = new Course(courseCredits, courseName, courseDescription);
    return course;
  }
}
