import { Course } from "../model/Course.js";

export class CourseController {
  static async getCourseByID(id) {
    return Course.getCourseByID(id);
  }
}
