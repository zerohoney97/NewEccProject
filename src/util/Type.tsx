export interface studentList {
  attrClass: string;
  birth: string;
  gender: string;
  name: string;
  recent: string;
  _id: string;
}

export interface preTestResult {
  result: any;
  studentUid: string;
  date: string;
  bigCategory: string;
  smallCategory: string;
}

export interface clickedStudentInfo {
  name: string;
  attrClass: string;
  birth: string;
  recent: string;
  gender: string;
}

export interface postTestResult {
  result: any;
  studentUid: string;
  date: string;
  bigCategory: string;
  smallCategory: string;
}

export interface postTestScoreInResult {
  content: string;
  score: string;
}
