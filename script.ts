// soal 1
function greetUser(name: string, age: number): string {
  return `Hello, ${name}! You are ${age} years old.`;
}
console.log(greetUser("Alice", 25)); // Output: Hello, Alice! You are 25 years old.
console.log(greetUser("Bob", 30)); // Output: Hello, Bob! You are 30 years old.

// soal 2
const sayHello: string = "Hello";
const age: number = 20;
const isMarried: boolean = true;
function displayVariables(): string {
  return `String ${sayHello}, Number : ${age}, Boolean : ${isMarried}`;
}

// soal 3
function sumArray(...numbers: number[][]): number {
  let total = 0;
  for (const num of numbers) {
    for (const nums of num) {
      total += nums;
    }
  }
  return total;
}

console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15
console.log(sumArray([10, 20, 30])); // Output: 60
console.log(sumArray([])); // Output: 0

// soal 4
type Person = {
  name: string;
  email?: string | "Not Provided";
  phone?: string | "Not Provided";
};

function describePerson(params: Person): string {
  const { name, email, phone } = params;
  return `Name: ${name}, Email: ${email}, Phone: ${phone}`;
}

const person1: Person = { name: "John", email: "john@example.com" };
const person2: Person = { name: "Jane", phone: "081234567890" };
const person3: Person = { name: "Bob" };

console.log(describePerson(person1));
// Output: Name: John, Email: john@example.com, Phone: Not provided
console.log(describePerson(person3));
// Output: Name: Bob, Email: Not provided, Phone: Not provided

// soal 5
function processValue(value: string | number): string {
  if (typeof value == "string") {
    return `This is a string: ${value}`;
  } else {
    return `This is a number: ${value}`;
  }
}
console.log(processValue("Hello")); // Output: This is a string: Hello
console.log(processValue(42)); // Output: This is a number: 42
console.log(processValue("123")); // Output: This is a string: 123

// soal 6
type Coordinate = [latitude: number, longitude: number, name: string];

function calculateDistance(a: Coordinate, b: Coordinate): number {
  return a[0] - b[0] + (a[1] - b[1]);
}

const coord1: Coordinate = [0, 0, "Origin"];
const coord2: Coordinate = [3, 4, "Point"];
console.log(calculateDistance(coord1, coord2)); // Output: 7

// soal 7
function createImmutableList(): readonly String[] {
  return [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
}

const months = createImmutableList();
// months[0] = "Januari"; // Error: Cannot assign to readonly
console.log(months.length); // Output: 12
console.log(months[0]); // Output: Januari

// soal 8
type StatusResponse = "success" | "pending" | "error";

function getStatusMessage(status: StatusResponse): string {
  if (status.toLowerCase() === "success") {
    return `Operation completed successfully`;
  } else if (status.toLowerCase() === "pending") {
    return `Operation is in progress`;
  } else {
    return `Operation failed`;
  }
}

console.log(getStatusMessage("success")); // Output: Operation completed successfully
console.log(getStatusMessage("pending")); // Output: Operation is in progress
console.log(getStatusMessage("error")); // Output: Operation failed

// soal 9
function createProduct(
  name: string,
  price: number,
): { id: number; name: string; price: number; inStock: boolean } {
  return {
    id: 1,
    name: name,
    price: price,
    inStock: true,
  };
}

const product = createProduct("Laptop", 15000000);
console.log(product.id); // Output: 1
console.log(product.name); // Output: Laptop
console.log(product.price); // Output: 15000000
console.log(product.inStock); // Output: true

// soal 10
enum Direction {
  North = "North",
  South = "South",
  East = "East",
  West = "West",
}

function moveInDirection(value: Direction): string {
  if (value == "North") {
    return "Moving North";
  } else if (value == "South") {
    return "Moving South";
  } else if (value == "East") {
    return "Moving East";
  } else {
    return "Moving West";
  }
}

console.log(moveInDirection(Direction.North)); // Output: Moving North
console.log(moveInDirection(Direction.South)); // Output: Moving South
console.log(moveInDirection(Direction.East)); // Output: Moving East
console.log(moveInDirection(Direction.West)); // Output: Moving West

// soal 11
interface Student {
  id: number;
  name: string;
  major: string;
  gpa: number;
  isActive: boolean;
}

function filterActiveStudents(value: Student[]): Student[] {
  const arrayStudents: Array<Student> = [];
  for (let i = 0; i < value.length; i++) {
    if (value[i].gpa >= 3.0 && value[i].isActive == true) {
      arrayStudents.push(value[i]);
    }
  }
  return arrayStudents;
}

const students: Student[] = [
  { id: 1, name: "Alice", major: "CS", gpa: 3.8, isActive: true },
  { id: 2, name: "Bob", major: "SE", gpa: 2.5, isActive: true },
  { id: 3, name: "Carol", major: "CS", gpa: 3.5, isActive: false },
];

const result = filterActiveStudents(students);
// Output: [{ id: 1, name: "Alice", ... }]
console.log(result.length); // Output: 1

// soal 12
interface Transformer {
  (input: string): string;
}

function applyTransformers(value: string, transformer: Transformer[]): string {
  return `${value}.${transformer}`;
}

const toUpperCase: Transformer = (str) => str.toUpperCase();
const reverse: Transformer = (str) => str.split("").reverse().join("");
const addExclamation: Transformer = (str) => str + "!";

const hasil = applyTransformers("hello", [
  toUpperCase,
  reverse,
  addExclamation,
]);
console.log(hasil); // Output: OLLEH!

// soal 13
interface BankAccount {
  readonly accountNumber: string;
  readonly createdAt: string;
  accountHolder: string;
  balance: number;
}

const account: BankAccount = {
  accountNumber: "1234567890",
  createdAt: "2024-01-15",
  accountHolder: "John",
  balance: 1000000,
};

// account.accountNumber = "0987654321"; // Error: readonly
account.balance = 1500000; // Allowed
console.log(account.balance); // Output: 1500000

// soal 14
interface BaseEntity {
  id: number;
  createdAt: string;
}

interface BlogPost extends BaseEntity {
  title: string;
  content: string;
  author: string;
}

function displayBlogPost(value: BlogPost): string {
  return `[ID: ${value.id}] ${value.title} by ${value.author} (${value.createdAt})`;
}

const post: BlogPost = {
  id: 1,
  createdAt: "2024-01-20",
  title: "Learning TypeScript",
  content: "TypeScript is awesome!",
  author: "Alice",
};

console.log(displayBlogPost(post));
// Output: [ID: 1] Learning TypeScript by Alice (2024-01-20)

// soal 15
type Employable = {
  salary: number;
  position: string;
};

type Students = {
  university: string;
  major: string;
};

function getWorkingStudent(value: Employable & Students): string {
  return `${value.position} at position earning ${value.salary} from ${value.university} (${value.major})`;
}

const person = {
  salary: 50000000,
  position: "Software Engineer",
  university: "ITB",
  major: "Computer Science",
};

console.log(getWorkingStudent(person));
// Output: Software Engineer at position earning 50000000 from ITB (Computer Science)

// soal 16
function parseJSON(value: string): any {
  const json = JSON.parse(value);
  return json;
}

function castToUser(value: any): { name: string; age: number } {
  return {
    name: value.name,
    age: value.age,
  };
}

const jsonString = '{"name": "Alice", "age": 25}';
const data = parseJSON(jsonString);
const user = castToUser(data);

console.log(user.name); // Output: Alice
console.log(user.age); // Output: 25

// soal 17
function processData(value: number): number;

function processData(value: string): number;

function processData(value: boolean): string;

function processData(value: unknown): unknown {
  if (typeof value == "number") {
    return value * value;
  } else if (typeof value == "string") {
    return value.length;
  } else if (typeof value == "boolean") {
    return `${value}`.toUpperCase();
  }
}

console.log(processData(5)); // Output: 25
console.log(processData("hello")); // Output: 5
console.log(processData(true)); // Output: TRUE
console.log(processData(false)); // Output: FALSE

// soal 18
interface NumberDictionary {
  [key: number]: number;
}

function createDictionary(value: NumberDictionary): Array<object> {
  return [
    { 1: "One" },
    { 2: "Two" },
    { 3: "Three" },
    { 4: "Four" },
    { 5: "Five" },
  ];
}

const dict = createDictionary([1, 2, 3, 4, 5]);
console.log(dict[1]); // Output: One
console.log(dict[2]); // Output: Two
console.log(dict[5]); // Output: Five

// soal 19
type ApiResponse = {
  status: "success";
  data: unknown;
};


