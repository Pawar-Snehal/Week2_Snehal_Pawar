import { Router, Request, Response } from 'express';

type Student = {
  name: string;
  age: number;
  grade: number;
};

const students: Student[] = [
  { name: "Alice", age: 20, grade: 75 },
  { name: "Bob", age: 22, grade: 85 },
  { name: "Charlie", age: 21, grade: 60 },
  { name: "David", age: 19, grade: 45 },
  { name: "Eve", age: 20, grade: 90 }
];

const router = Router();


router.get('/passed', (req: Request, res: Response) => {
  const passedStudents = students.filter(student => student.grade >= 50);
  res.json(passedStudents);
});


router.get('/names', (req: Request, res: Response) => {
  const studentNames = students.map(student => student.name);
  res.json(studentNames);
});


router.get('/sorted-by-grade', (req: Request, res: Response) => {
  const sortedStudents = [...students].sort((a, b) => a.grade - b.grade);
  res.json(sortedStudents);
});

router.get('/average-age', (req: Request, res: Response) => {
  const totalAge = students.reduce((sum, student) => sum + student.age, 0);
  const averageAge = totalAge / students.length;
  res.json({ averageAge });
});

export default router;
