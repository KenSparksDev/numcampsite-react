class Student {
	constructor(name, email, community) {
		(this.name = name), (this.email = email), (this.community = community);
	}
}

class Bootcamp {
	constructor(name, level, students = []) {
		(this.name = name), (this.level = level), (this.students = students);
	}
	registerStudent(studentToRegister) {
		const matchingEmail = this.students.find((student) => {
			if (student.email == studentToRegister.email) {
				return student;
			}
		});

		if (matchingEmail) {
			console.log(`${studentToRegister.name} is already registered`);
		} else {
			console.log(`Welcome ${studentToRegister.name}!`);
			return this.students.push(studentToRegister);
		}
	}
}

const student1 = new Student('Ken', 'ks@email.com', 'Philly');
const student2 = new Student('Mike', 'mk@email.com', 'Philly');
const student3 = new Student('Lewis', 'ls@email.com', 'Philly');
const student4 = new Student('Lewis', 'ls@email.com', 'Philly');

const boot1 = new Bootcamp('NuCamp', 'Front End');

boot1.registerStudent(student1);
boot1.registerStudent(student2);
boot1.registerStudent(student3);
boot1.registerStudent(student4);
