export class Forum {
  constructor(classID, content, isHidden, isLocked, title, uploadDate, userID) {
    this.classID = classID;
    this.content = content;
    this.isHidden = isHidden;
    this.isLocked = isLocked;
    this.title = title;
    this.uploadDate = uploadDate;
    this.userID = userID;
  }
}
