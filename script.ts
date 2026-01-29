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

console.log(displayVariables()); // Output: String: Hello, Number: 42, Boolean: true

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
console.log(describePerson(person2));
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
  return value.filter((s) => s.gpa >= 3.0 && s.isActive);
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
function parseJSON(value: string): JSON {
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

function processData(value: unknown): any {
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
  [key: number]: string;
}

function createDictionary(value: number[]): NumberDictionary {
  const a: NumberDictionary = {};
  const mapWords: NumberDictionary = {
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
  };
  value.forEach((value) => {
    a[value] = mapWords[value] ?? "Unknown";
  });
  return a;
}

const dict = createDictionary([1, 2, 3, 4, 5]);
console.log(dict[1]); // Output: One
console.log(dict[2]); // Output: Two
console.log(dict[5]); // Output: Five

// soal 19
type ApiResponse =
  | {
      status: "success";
      data: unknown;
    }
  | {
      status: "error";
      message: string;
    };

function handleResponse(value: ApiResponse): string {
  if (value.status == "success") {
    return `Success! Data retrieved.`;
  } else {
    return `Error! Message: Server Error`;
  }
}

const successResponse: ApiResponse = {
  status: "success",
  data: { id: 1, name: "Product" },
};
const errorResponse: ApiResponse = { status: "error", message: "Server error" };

console.log(handleResponse(successResponse)); // Output: Success! Data retrieved.
console.log(handleResponse(errorResponse)); // Output: Error! Message: Server error

// soal 20
enum UserRole {
  Admin = "Admin",
  Manager = "Manager",
  User = "User",
}

function checkPermission(value: UserRole): Array<string> {
  if (value == "Admin") {
    return ["create", "read", "update", "delete"];
  } else if (value == "Manager") {
    return ["read", "update"];
  } else {
    return ["read"];
  }
}

console.log(checkPermission(UserRole.Admin));
// Output: ["create", "read", "update", "delete"]
console.log(checkPermission(UserRole.Manager));
// Output: ["read", "update"]
console.log(checkPermission(UserRole.User));
// Output: ["read"]

// soal 21 (BELUM SELESAI)
// interface Calculator {
//   add: (a: number, b: number) => number;
//   subtract: (a: number, b: number) => number;
//   multiply: (a: number, b: number) => number;
//   divide: (a: number, b: number) => number | string;
// }

// function performCalculation(value: Calculator){

// }

// const calculator: Calculator = { ... };
// const result1 = calculator.add(10, 5);
// const result2 = calculator.divide(10, 0);

// console.log(result1);                    // Output: 15
// console.log(result2);                    // Output: Cannot divide by zero

// soal 22
type ClickEvent = {
  type: "click";
  x: number;
  y: number;
};

type KeyEvent = {
  type: "key";
  key: string;
  code: number;
};

type ScrollEvent = {
  type: "scroll";
  distance: number;
};

type Eventt = ClickEvent | KeyEvent | ScrollEvent;

function handleEvent(value: Eventt): string {
  if (value.type == "click") {
    return `Click at position (${value.x}, ${value.y})`;
  } else if (value.type == "key") {
    return `Key pressed: ${value.key} (${value.code})`;
  } else {
    return `Scrolled ${value.distance} pixels`;
  }
}

const clickEv: Eventt = { type: "click", x: 100, y: 200 };
const keyEv: Eventt = { type: "key", key: "Enter", code: 13 };
const scrollEv: Eventt = { type: "scroll", distance: 500 };

console.log(handleEvent(clickEv)); // Output: Click at position (100, 200)
console.log(handleEvent(keyEv)); // Output: Key pressed: Enter (13)
console.log(handleEvent(scrollEv)); // Output: Scrolled 500 pixels

// soal 23
// interface Address {
//   street: string;
//   city: string;
//   country: string;
//   zipCode: string;
// }

// interface User {
//   id: number;
//   name: string;
//   email: string;
//   address: Address;
//   contacts: Address[];
// }

// function findUsersByCity(value: string) : User[] {

// }

// const user2: User = {
//   id: 1,
//   name: "Alice",
//   email: "alice@example.com",
//   address: { street: "Jl. Sudirman", city: "Jakarta", country: "Indonesia", zipCode: "12000" },
//   contacts: [
//     { street: "Jl. Gatot Subroto", city: "Jakarta", country: "Indonesia", zipCode: "12000" },
//     { street: "Jl. Ahmad Yani", city: "Bandung", country: "Indonesia", zipCode: "40000" }
//   ]
// };

// const found = findUsersByCity("Jakarta");
// console.log(found.length);  // Output: 1
// console.log(found[0].name); // Output: Alice

// soal 24
// type UserResponse =
//   | { status: "success"; data: { id: number; name: string } }
//   | { status: "error"; error: string }
//   | { status: "loading" };

// function checkStatus<T>(value: UserResponse):
//   | {
//       status: "loading";
//     }
//   | {
//       status: "success";
//       data: T;
//     }
//   | {
//       status: "error";
//       error: string;
//     } {
//       if(value.status == "success"){
//         return {status: "success" };
//       } else if(value.status == "error"){
//         return `{status}! Not Found`;
//       } else {
//         return `{status}`
//       }
//     }

// const response1: UserResponse = {
//   status: "success",
//   data: {
//     id: 1,
//     name: "Alice",
//   },
// };
// const response2: UserResponse = {
//   status: "error",
//   error: "Not found",
// };
// const response3: UserResponse = {
//   status: "loading",
// };

// console.log(checkStatus(response1)); // Output: Success! User Alice loaded.
// console.log(checkStatus(response2)); // Output: Error! Not found
// console.log(checkStatus(response3)); // Output: Loading...

// soal 25
interface Mammal {
  fur: boolean;
  warmBlooded: true;
  method(): void;
}

interface Bird {
  feathers: boolean;
  warmBlooded: true;
  method(): void;
}

interface Platypus extends Mammal, Bird {}

function describePlatypus(value: Platypus): string {
  if (value.warmBlooded === true) {
    if (value.feathers === true) {
      return `A warm-blooded bird with feathers, not a mammal`;
    } else if (value.fur === true) {
      return `A warm-blooded mammal with fur, not a bird`;
    } else {
      return `unknown`;
    }
  } else {
    if (value.feathers === true) {
      return `A cool-blooded bird with feathers, not a mammal`;
    } else if (value.fur === true) {
      return `A cool-blooded mammal with fur, not a bird`;
    } else {
      return `unknown`;
    }
  }
}

const platypus: Platypus = {
  fur: true,
  feathers: false,
  warmBlooded: true,
  method: () => console.log("Monotreme behavior"),
};

console.log(describePlatypus(platypus));
// Output: A warm-blooded mammal with fur, not a bird

// soal 26
function transform(data: string): string;

function transform(data: number[]): number[];

function transform(data: string[]): object;

function transform(data: object): string[];

function transform(data: unknown): any {
  if (typeof data === "string") {
    return `${data}`.toUpperCase().split("").reverse().join("");
  }
  if (
    Array.isArray(data) &&
    data.every((element) => typeof element == "number")
  ) {
    let total = 0;
    for (const sum of data) {
      total += sum;
    }
    return total;
  }
  if (
    Array.isArray(data) &&
    data.every((element) => typeof element == "string" && data !== undefined)
  ) {
    const emptyObject: { [key: string]: number } = {};
    for (let i = 0; i < data.length; i++) {
      emptyObject[i] = data[i].length;
    }
    return emptyObject;
  }
  if (typeof data === "object" && data !== null) {
    const keys: string[] = Object.keys(data);
    return keys;
  }
}

console.log(transform("hello")); // Output: OLLEH
console.log(transform([1, 2, 3, 4, 5])); // Output: 15
console.log(transform(["a", "bb", "ccc"])); // Output: { '0': 1, '1': 2, '2': 3 }
console.log(transform({ a: 1, b: 2 })); // Output: ["a", "b"]

// soal 27
type QueryResult = [success: boolean, data?: object[], errorMessage?: string];

function executeQuery(params: string): QueryResult {
  let arrayQuery: object[] = [];
  if (params.toUpperCase() == "SELECT * FROM users") {
    for (let i = 1; i <= 5; i++) {
      arrayQuery[i] = {
        name: "roger ke-"[i],
      };
    }
  } else {
    arrayQuery = [
      {
        status: undefined,
        message: "Syntax Error",
      },
    ];
  }
  return [true, arrayQuery, ""];
}

const result1 = executeQuery("SELECT * FROM users");
const result2 = executeQuery("INVALID QUERY");

if (result1[0]) {
  console.log("Success! Found", result1[1]?.length, "records");
}
// Output: Success! Found 5 records

if (!result2[0]) {
  console.log("Error:", result2[2]);
}
// Output: Error: Syntax error

// soal 28
type Printable = {
  print: () => string;
};

type Saveable = {
  save: () => boolean;
};

type Deletable = {
  delete: () => void;
};

type Document2 = Printable & Saveable & Deletable;

function manageDocument(data: Document2) {}

const doc: Document2 = {
  print: () => "Document printed",
  save: () => true,
  delete: () => console.log("Document deleted"),
};

console.log(doc.print()); // Output: Document printed
console.log(doc.save()); // Output: true
doc.delete(); // Output: Document deleted

// soal 29
interface Company {
  name: string;
  departments?: {
    name: string;
    employees?: {
      name: string;
      email?: string;
    }[];
  }[];
}

function getEmployeeEmail(company: Company, name: string) {}

const company: Company = {
  name: "Tech Corp",
  departments: [
    {
      name: "Engineering",
      employees: [
        { name: "Alice", email: "alice@example.com" },
        { name: "Bob" },
      ],
    },
  ],
};

console.log(getEmployeeEmail(company, "Alice")); // Output: alice@example.com
console.log(getEmployeeEmail(company, "Bob")); // Output: No email provided
console.log(getEmployeeEmail(company, "Unknown")); // Output: Employee not found

// soal 30
enum TaskPriority {
  "Low",
  "Medium",
  "High",
  "Critical",
}

enum TaskStatus {
  "Todo",
  "InProgress",
  "Done",
  "Cancelled",
}

interface Task {
  id: number;
  title: string;
  description?: string;
  priority: TaskPriority;
  status: TaskStatus;
  dueDate?: string;
  assignee?: string;
}

type TaskFilter = {
  priority?: TaskPriority;
  status?: TaskStatus;
  assignee?: string;
};

function getTasks(): Task[] {
  return [];
}

function getTasks(filter: TaskFilter): Task[] {
  return [{}];
}

function getTasks(id: number): Task | undefined {
  return undefined;
}

function getTasks(value: unknown): unknown {
  return undefined;
}

function updateTaskStatus(value: Task, status: TaskStatus): Task {}

function getTaskByPriority(task: Task[], prio: TaskPriority): Task {}

const tasks: Task[] = [
  {
    id: 1,
    title: "Fix bug",
    priority: TaskPriority.High,
    status: TaskStatus.InProgress,
    assignee: "Alice",
  },
  {
    id: 2,
    title: "Write docs",
    priority: TaskPriority.Medium,
    status: TaskStatus.Todo,
    assignee: "Bob",
  },
  {
    id: 3,
    title: "Review PR",
    priority: TaskPriority.Critical,
    status: TaskStatus.Todo,
    assignee: "Alice",
  },
  {
    id: 4,
    title: "Deploy app",
    priority: TaskPriority.High,
    status: TaskStatus.Done,
    assignee: "Carol",
  },
];

console.log(getTasks().length); // Output: 4
console.log(getTasks({ priority: TaskPriority.High }).length); // Output: 2
console.log(getTasks(1)?.title); // Output: Fix bug

const updated = updateTaskStatus(tasks[0], TaskStatus.Done);
console.log(updated.status); // Output: Done

const critical = getTasksByPriority(tasks, TaskPriority.Critical);
console.log(critical[0].title); // Output: Review PR
