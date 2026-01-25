# UJIAN AKHIR KELULUSAN
## Mata Kuliah: TypeScript Dasar
### Dosen: Eko Kurniawan Khannedy
**Nama Peserta:** ________________  
**Tanggal:** ________________  
**Waktu:** 120 Menit  
**Passing Grade:** 70%

---

## BAGIAN I: EASY TO MEDIUM (10 Soal)
**Bobot: 30 Poin (3 poin per soal)**

### Soal 1: Tipe Data Primitif Dasar
**Kesulitan:** Easy (3 poin)

Buatlah sebuah function bernama `greetUser` yang menerima parameter `name` bertipe `string` dan `age` bertipe `number`, kemudian mengembalikan string dengan format: `"Hello, [name]! You are [age] years old."`. Function tidak boleh mengubah tipe data parameter.

**Test Case:**
```typescript
console.log(greetUser("Alice", 25));  // Output: Hello, Alice! You are 25 years old.
console.log(greetUser("Bob", 30));    // Output: Hello, Bob! You are 30 years old.
```

**Poin:** 3

---

### Soal 2: Deklarasi Variabel dengan Tipe Eksplisit
**Kesulitan:** Easy (3 poin)

Deklarasikan tiga variabel dengan tipe data yang berbeda (string, number, boolean) dan tetapkan nilai yang sesuai. Kemudian buat function `displayVariables()` yang menampilkan nilai-nilai tersebut dalam format: `"String: [value], Number: [value], Boolean: [value]"`.

**Test Case:**
```typescript
console.log(displayVariables());  // Output: String: Hello, Number: 42, Boolean: true
```

**Poin:** 3

---

### Soal 3: Tipe Data Array
**Kesulitan:** Easy (3 poin)

Buatlah function `sumArray` yang menerima parameter berupa array dari number dan mengembalikan jumlah dari semua elemen dalam array tersebut.

**Test Case:**
```typescript
console.log(sumArray([1, 2, 3, 4, 5]));        // Output: 15
console.log(sumArray([10, 20, 30]));           // Output: 60
console.log(sumArray([]));                     // Output: 0
```

**Poin:** 3

---

### Soal 4: Optional Properties
**Kesulitan:** Easy (3 poin)

Buatlah sebuah Type Alias bernama `Person` dengan properti `name` (string, wajib), `email` (string, optional), dan `phone` (string, optional). Kemudian buat function `describePerson` yang menerima parameter bertipe `Person` dan menampilkan informasi dengan format yang tepat.

**Test Case:**
```typescript
const person1: Person = { name: "John", email: "john@example.com" };
const person2: Person = { name: "Jane", phone: "081234567890" };
const person3: Person = { name: "Bob" };

console.log(describePerson(person1));
// Output: Name: John, Email: john@example.com, Phone: Not provided
console.log(describePerson(person3));
// Output: Name: Bob, Email: Not provided, Phone: Not provided
```

**Poin:** 3

---

### Soal 5: Union Type dengan typeof
**Kesulitan:** Medium (3 poin)

Buatlah function `processValue` yang menerima parameter `value` dengan tipe `string | number` dan menampilkan pesan berbeda berdasarkan tipe data. Gunakan `typeof` untuk pengecekan tipe.

**Test Case:**
```typescript
console.log(processValue("Hello"));    // Output: This is a string: Hello
console.log(processValue(42));         // Output: This is a number: 42
console.log(processValue("123"));      // Output: This is a string: 123
```

**Poin:** 3

---

### Soal 6: Tuple Type
**Kesulitan:** Medium (3 poin)

Buatlah sebuah Tuple Type bernama `Coordinate` dengan format `[latitude: number, longitude: number, name: string]`. Buat function `calculateDistance` yang menerima dua coordinate dan menghitung jarak Manhattan distance antara keduanya.

**Test Case:**
```typescript
const coord1: Coordinate = [0, 0, "Origin"];
const coord2: Coordinate = [3, 4, "Point"];

console.log(calculateDistance(coord1, coord2));  // Output: 7
```

**Formula Manhattan Distance:** `|x1 - x2| + |y1 - y2|`

**Poin:** 3

---

### Soal 7: ReadOnly Array
**Kesulitan:** Medium (3 poin)

Buatlah sebuah function `createImmutableList` yang mengembalikan readonly array berisi nama-nama bulan. Pastikan array tidak bisa dimodifikasi setelah dibuat.

**Test Case:**
```typescript
const months = createImmutableList();
// months[0] = "Januari"; // Error: Cannot assign to readonly
console.log(months.length);  // Output: 12
console.log(months[0]);      // Output: Januari
```

**Poin:** 3

---

### Soal 8: Type Alias untuk Union Type
**Kesulitan:** Medium (3 poin)

Buatlah sebuah Type Alias bernama `StatusResponse` yang bisa bernilai `"success"`, `"pending"`, atau `"error"`. Buat function `getStatusMessage` yang menerima tipe `StatusResponse` dan menampilkan pesan yang sesuai.

**Test Case:**
```typescript
console.log(getStatusMessage("success"));  // Output: Operation completed successfully
console.log(getStatusMessage("pending"));  // Output: Operation is in progress
console.log(getStatusMessage("error"));    // Output: Operation failed
```

**Poin:** 3

---

### Soal 9: Object Type Inline
**Kesulitan:** Medium (3 poin)

Buatlah function `createProduct` yang mengembalikan object bertipe `{ id: number; name: string; price: number; inStock: boolean }`. Function menerima parameter `name` dan `price`.

**Test Case:**
```typescript
const product = createProduct("Laptop", 15000000);
console.log(product.id);         // Output: 1
console.log(product.name);       // Output: Laptop
console.log(product.price);      // Output: 15000000
console.log(product.inStock);    // Output: true
```

**Poin:** 3

---

### Soal 10: Enum Dasar
**Kesulitan:** Medium (3 poin)

Buatlah sebuah Enum bernama `Direction` dengan nilai `North`, `South`, `East`, `West`. Buat function `moveInDirection` yang menerima parameter bertipe `Direction` dan menampilkan pesan bergerak sesuai arah.

**Test Case:**
```typescript
console.log(moveInDirection(Direction.North));  // Output: Moving North
console.log(moveInDirection(Direction.South));  // Output: Moving South
console.log(moveInDirection(Direction.East));   // Output: Moving East
console.log(moveInDirection(Direction.West));   // Output: Moving West
```

**Poin:** 3

---

## BAGIAN II: MEDIUM TO HARD (10 Soal)
**Bobot: 35 Poin (3.5 poin per soal)**

### Soal 11: Interface dengan Multiple Properti
**Kesulitan:** Medium (3.5 poin)

Buatlah Interface `Student` dengan properti `id: number`, `name: string`, `major: string`, `gpa: number`, dan `isActive: boolean`. Buat function `filterActiveStudents` yang menerima array of `Student` dan mengembalikan hanya student yang aktif dan GPA >= 3.0.

**Test Case:**
```typescript
const students: Student[] = [
  { id: 1, name: "Alice", major: "CS", gpa: 3.8, isActive: true },
  { id: 2, name: "Bob", major: "SE", gpa: 2.5, isActive: true },
  { id: 3, name: "Carol", major: "CS", gpa: 3.5, isActive: false }
];

const result = filterActiveStudents(students);
// Output: [{ id: 1, name: "Alice", ... }]
console.log(result.length);  // Output: 1
```

**Poin:** 3.5

---

### Soal 12: Function Interface
**Kesulitan:** Medium (3.5 poin)

Buatlah sebuah Function Interface bernama `Transformer` dengan signature `(input: string) => string`. Buat function `applyTransformers` yang menerima string dan array of `Transformer` functions, kemudian menerapkan semua transformasi secara berurutan.

**Test Case:**
```typescript
const toUpperCase: Transformer = (str) => str.toUpperCase();
const reverse: Transformer = (str) => str.split("").reverse().join("");
const addExclamation: Transformer = (str) => str + "!";

const result = applyTransformers("hello", [toUpperCase, reverse, addExclamation]);
console.log(result);  // Output: OLLEH!
```

**Poin:** 3.5

---

### Soal 13: Readonly Properties di Interface
**Kesulitan:** Medium (3.5 poin)

Buatlah Interface `BankAccount` dengan properti readonly `accountNumber: string`, readonly `createdAt: string`, `accountHolder: string`, dan `balance: number`. Function tidak boleh bisa mengubah `accountNumber` dan `createdAt`.

**Test Case:**
```typescript
const account: BankAccount = {
  accountNumber: "1234567890",
  createdAt: "2024-01-15",
  accountHolder: "John",
  balance: 1000000
};

// account.accountNumber = "0987654321"; // Error: readonly
account.balance = 1500000;  // Allowed
console.log(account.balance);  // Output: 1500000
```

**Poin:** 3.5

---

### Soal 14: Extending Interface
**Kesulitan:** Medium (3.5 poin)

Buatlah Interface `BaseEntity` dengan properti `id: number`, `createdAt: string`. Kemudian buatlah Interface `BlogPost` yang extends `BaseEntity` dan menambahkan properti `title: string`, `content: string`, `author: string`. Buat function `displayBlogPost` yang menampilkan semua informasi blog post.

**Test Case:**
```typescript
const post: BlogPost = {
  id: 1,
  createdAt: "2024-01-20",
  title: "Learning TypeScript",
  content: "TypeScript is awesome!",
  author: "Alice"
};

console.log(displayBlogPost(post));
// Output: [ID: 1] Learning TypeScript by Alice (2024-01-20)
```

**Poin:** 3.5

---

### Soal 15: Intersection Types
**Kesulitan:** Hard (3.5 poin)

Buatlah dua Type Alias: `Employable = { salary: number; position: string }` dan `Student = { university: string; major: string }`. Buatlah function `getWorkingStudent` yang menerima object dengan kedua tipe tersebut (intersection) dan menampilkan informasi lengkap.

**Test Case:**
```typescript
const person = {
  salary: 50000000,
  position: "Software Engineer",
  university: "ITB",
  major: "Computer Science"
};

console.log(getWorkingStudent(person));
// Output: Software Engineer at position earning 50000000 from ITB (Computer Science)
```

**Poin:** 3.5

---

### Soal 16: Type Assertions
**Kesulitan:** Hard (3.5 poin)

Buatlah function `parseJSON` yang menerima string JSON dan mengembalikan object dengan tipe `any`. Buat function `castToUser` yang melakukan type assertion untuk mengubah `any` menjadi object dengan struktur `{ name: string; age: number }`. Pastikan function melakukan validasi sebelum melakukan assertion.

**Test Case:**
```typescript
const jsonString = '{"name": "Alice", "age": 25}';
const data = parseJSON(jsonString);
const user = castToUser(data);

console.log(user.name);  // Output: Alice
console.log(user.age);   // Output: 25
```

**Poin:** 3.5

---

### Soal 17: Function Overloading
**Kesulitan:** Hard (3.5 poin)

Buatlah function `processData` dengan function overloading yang:
- Jika menerima `number`, kembalikan kuadrat dari number
- Jika menerima `string`, kembalikan panjang string
- Jika menerima `boolean`, kembalikan string "true" atau "false" dengan huruf besar

**Test Case:**
```typescript
console.log(processData(5));           // Output: 25
console.log(processData("hello"));     // Output: 5
console.log(processData(true));        // Output: TRUE
console.log(processData(false));       // Output: FALSE
```

**Poin:** 3.5

---

### Soal 18: Indexable Interface untuk Array
**Kesulitan:** Hard (3.5 poin)

Buatlah Indexable Interface bernama `NumberDictionary` dengan signature `{ [key: number]: string }`. Buat function `createDictionary` yang membuat dictionary berdasarkan array of numbers dan mengembalikan deskripsi masing-masing number.

**Test Case:**
```typescript
const dict = createDictionary([1, 2, 3, 4, 5]);
console.log(dict[1]);  // Output: One
console.log(dict[2]);  // Output: Two
console.log(dict[5]);  // Output: Five
```

**Poin:** 3.5

---

### Soal 19: Complex Union Type dengan Type Guard
**Kesulitan:** Hard (3.5 poin)

Buatlah Type Alias `ApiResponse = { status: "success"; data: unknown } | { status: "error"; message: string }`. Buat function `handleResponse` yang menerima `ApiResponse` dan menampilkan pesan yang sesuai dengan tipe response. Gunakan type guard untuk pengecekan.

**Test Case:**
```typescript
const successResponse: ApiResponse = { status: "success", data: { id: 1, name: "Product" } };
const errorResponse: ApiResponse = { status: "error", message: "Server error" };

console.log(handleResponse(successResponse));  // Output: Success! Data retrieved.
console.log(handleResponse(errorResponse));    // Output: Error! Message: Server error
```

**Poin:** 3.5

---

### Soal 20: Enum sebagai String
**Kesulitan:** Hard (3.5 poin)

Buatlah Enum `UserRole` dengan nilai `"Admin"`, `"Manager"`, `"User"` (string values). Buat function `checkPermission` yang menerima `UserRole` dan mengembalikan array of permissions yang sesuai dengan role tersebut.

**Test Case:**
```typescript
console.log(checkPermission(UserRole.Admin));    
// Output: ["create", "read", "update", "delete"]
console.log(checkPermission(UserRole.Manager));  
// Output: ["read", "update"]
console.log(checkPermission(UserRole.User));     
// Output: ["read"]
```

**Poin:** 3.5

---

## BAGIAN III: HARD TO ADVANCED (10 Soal)
**Bobot: 35 Poin (3.5 poin per soal)**

### Soal 21: Interface dengan Function Properties dan Complex Logic
**Kesulitan:** Hard (3.5 poin)

Buatlah Interface `Calculator` dengan properti berupa functions:
- `add: (a: number, b: number) => number`
- `subtract: (a: number, b: number) => number`
- `multiply: (a: number, b: number) => number`
- `divide: (a: number, b: number) => number | string` (return error message jika divide by zero)

Implementasikan interface tersebut dan buat function `performCalculation` yang melakukan serangkaian operasi kalkulasi.

**Test Case:**
```typescript
const calculator: Calculator = { ... };
const result1 = calculator.add(10, 5);
const result2 = calculator.divide(10, 0);

console.log(result1);                    // Output: 15
console.log(result2);                    // Output: Cannot divide by zero
```

**Poin:** 3.5

---

### Soal 22: Advanced Union dan Type Narrowing
**Kesulitan:** Hard (3.5 poin)

Buatlah Type Alias untuk berbagai jenis event:
- `ClickEvent = { type: "click"; x: number; y: number }`
- `KeyEvent = { type: "key"; key: string; code: number }`
- `ScrollEvent = { type: "scroll"; distance: number }`

Buat type `Event = ClickEvent | KeyEvent | ScrollEvent` dan function `handleEvent` yang menangani setiap tipe event dengan logic yang berbeda menggunakan type narrowing.

**Test Case:**
```typescript
const clickEv: Event = { type: "click", x: 100, y: 200 };
const keyEv: Event = { type: "key", key: "Enter", code: 13 };
const scrollEv: Event = { type: "scroll", distance: 500 };

console.log(handleEvent(clickEv));   // Output: Click at position (100, 200)
console.log(handleEvent(keyEv));     // Output: Key pressed: Enter (13)
console.log(handleEvent(scrollEv));  // Output: Scrolled 500 pixels
```

**Poin:** 3.5

---

### Soal 23: Nested Interface dan Complex Data Structure
**Kesulitan:** Hard (3.5 poin)

Buatlah Interface `Address` dengan properti `street`, `city`, `country`, `zipCode`. Buatlah Interface `User` yang memiliki `id`, `name`, `email`, `address: Address`, `contacts: Address[]`. Buat function `findUsersByCity` yang mencari user berdasarkan kota di address atau contact mereka.

**Test Case:**
```typescript
const user: User = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
  address: { street: "Jl. Sudirman", city: "Jakarta", country: "Indonesia", zipCode: "12000" },
  contacts: [
    { street: "Jl. Gatot Subroto", city: "Jakarta", country: "Indonesia", zipCode: "12000" },
    { street: "Jl. Ahmad Yani", city: "Bandung", country: "Indonesia", zipCode: "40000" }
  ]
};

const found = findUsersByCity("Jakarta");
console.log(found.length);  // Output: 1
console.log(found[0].name); // Output: Alice
```

**Poin:** 3.5

---

### Soal 24: Generic-like Pattern dengan Conditional Union
**Kesulitan:** Hard (3.5 poin)

Buatlah function `apiCall` yang mereturn `{ status: "loading" } | { status: "success"; data: T } | { status: "error"; error: string }`. Function harus mampu menangani berbagai tipe data response dengan type narrowing yang proper.

**Test Case:**
```typescript
type UserResponse = { status: "success"; data: { id: number; name: string } } | { status: "error"; error: string } | { status: "loading" };

const response1: UserResponse = { status: "success", data: { id: 1, name: "Alice" } };
const response2: UserResponse = { status: "error", error: "Not found" };
const response3: UserResponse = { status: "loading" };

console.log(checkStatus(response1));  // Output: Success! User Alice loaded.
console.log(checkStatus(response2));  // Output: Error! Not found
console.log(checkStatus(response3));  // Output: Loading...
```

**Poin:** 3.5

---

### Soal 25: Multiple Interface Inheritance dan Conflict Resolution
**Kesulitan:** Hard (3.5 poin)

Buatlah Interface `Mammal` dengan properti `fur: boolean; warmBlooded: true; method(): void`. Buatlah Interface `Bird` dengan properti `feathers: boolean; warmBlooded: true; method(): void`. Kemudian buatlah Interface `Platypus` yang implements keduanya (meski bukan use case nyata, tapi untuk test). Buat function yang menangani ketiga interface tersebut.

**Test Case:**
```typescript
const platypus: Platypus = {
  fur: true,
  feathers: false,
  warmBlooded: true,
  method: () => console.log("Monotreme behavior")
};

console.log(describePlatypus(platypus));
// Output: A warm-blooded mammal with fur, not a bird
```

**Poin:** 3.5

---

### Soal 26: Advanced Function Overloading dengan Complex Logic
**Kesulitan:** Advanced (3.5 poin)

Buatlah function `transform` dengan overloading yang:
- `transform(data: string): string` - return uppercase + reversed
- `transform(data: number[]): number` - return sum of all elements
- `transform(data: string[]): object` - return object dengan length dari setiap string
- `transform(data: object): string[]` - return keys dari object dalam bentuk array

**Test Case:**
```typescript
console.log(transform("hello"));          // Output: OLLEH
console.log(transform([1, 2, 3, 4, 5]));  // Output: 15
console.log(transform(["a", "bb", "ccc"])); // Output: { '0': 1, '1': 2, '2': 3 }
console.log(transform({ a: 1, b: 2 }));   // Output: ["a", "b"]
```

**Poin:** 3.5

---

### Soal 27: Tuple dengan Variable Length dan Complex Types
**Kesulitan:** Advanced (3.5 poin)

Buatlah Tuple Type untuk representasi database query result: `QueryResult = [success: boolean, data?: object[], errorMessage?: string]`. Buat function `executeQuery` yang melakukan mock database query dan return hasil dengan tuple yang sesuai.

**Test Case:**
```typescript
const result1 = executeQuery("SELECT * FROM users");
const result2 = executeQuery("INVALID QUERY");

if (result1[0]) {
  console.log("Success! Found", result1[1]?.length, "records");
  // Output: Success! Found 5 records
}

if (!result2[0]) {
  console.log("Error:", result2[2]);
  // Output: Error: Syntax error
}
```

**Poin:** 3.5

---

### Soal 28: Intersection Types dengan Multiple Type Assertions
**Kesulitan:** Advanced (3.5 poin)

Buatlah Type `Printable = { print: () => string }` dan `Saveable = { save: () => boolean }` dan `Deletable = { delete: () => void }`. Buatlah function `manageDocument` yang menggunakan intersection dari ketiganya. Document harus bisa diprint, disave, dan didelete.

**Test Case:**
```typescript
type Document = Printable & Saveable & Deletable;

const doc: Document = {
  print: () => "Document printed",
  save: () => true,
  delete: () => console.log("Document deleted")
};

console.log(doc.print());   // Output: Document printed
console.log(doc.save());    // Output: true
doc.delete();               // Output: Document deleted
```

**Poin:** 3.5

---

### Soal 29: Complex Optional Chaining dan Null Coalescing Pattern
**Kesulitan:** Advanced (3.5 poin)

Buatlah Interface `Company` dengan nested structure: `{ name: string; departments?: { name: string; employees?: { name: string; email?: string }[] }[] }`. Buat function `getEmployeeEmail` yang aman dari null/undefined errors dengan proper type handling untuk mendapatkan email dari employee tertentu.

**Test Case:**
```typescript
const company: Company = {
  name: "Tech Corp",
  departments: [
    {
      name: "Engineering",
      employees: [
        { name: "Alice", email: "alice@example.com" },
        { name: "Bob" }
      ]
    }
  ]
};

console.log(getEmployeeEmail(company, "Alice"));  // Output: alice@example.com
console.log(getEmployeeEmail(company, "Bob"));    // Output: No email provided
console.log(getEmployeeEmail(company, "Unknown")); // Output: Employee not found
```

**Poin:** 3.5

---

### Soal 30: Comprehensive Integration - Enum, Interface, Union, Type Assertion & Function Overloading
**Kesulitan:** Advanced (3.5 poin)

**BONUS SOAL INTEGRASI FINAL**

Buatlah sistem manajemen task dengan:

1. Enum `TaskPriority` dengan nilai `"Low" | "Medium" | "High" | "Critical"`
2. Enum `TaskStatus` dengan nilai `"Todo" | "InProgress" | "Done" | "Cancelled"`
3. Interface `Task` dengan properti `id: number`, `title: string`, `description?: string`, `priority: TaskPriority`, `status: TaskStatus`, `dueDate?: string`, `assignee?: string`
4. Type Alias `TaskFilter = { priority?: TaskPriority; status?: TaskStatus; assignee?: string }`
5. Function Overloading untuk `getTasks`:
   - `getTasks(): Task[]` - return semua task
   - `getTasks(filter: TaskFilter): Task[]` - return task yang di-filter
   - `getTasks(id: number): Task | undefined` - return task dengan id tertentu

6. Function `updateTaskStatus` yang menerima `Task` dan status baru, mengembalikan task yang sudah diupdate

7. Function `getTasksByPriority` yang menerima array of `Task` dan `TaskPriority`, mengembalikan task dengan prioritas tersebut dalam urutan yang sudah di-sort

**Test Case:**
```typescript
const tasks: Task[] = [
  { id: 1, title: "Fix bug", priority: TaskPriority.High, status: TaskStatus.InProgress, assignee: "Alice" },
  { id: 2, title: "Write docs", priority: TaskPriority.Medium, status: TaskStatus.Todo, assignee: "Bob" },
  { id: 3, title: "Review PR", priority: TaskPriority.Critical, status: TaskStatus.Todo, assignee: "Alice" },
  { id: 4, title: "Deploy app", priority: TaskPriority.High, status: TaskStatus.Done, assignee: "Carol" }
];

console.log(getTasks().length);                    // Output: 4
console.log(getTasks({ priority: TaskPriority.High }).length);  // Output: 2
console.log(getTasks(1)?.title);                   // Output: Fix bug

const updated = updateTaskStatus(tasks[0], TaskStatus.Done);
console.log(updated.status);                       // Output: Done

const critical = getTasksByPriority(tasks, TaskPriority.Critical);
console.log(critical[0].title);                    // Output: Review PR
```

**Poin:** 3.5

---

## KRITERIA PENILAIAN

| Rentang Nilai | Grade | Keterangan |
|--------------|-------|-----------|
| 90 - 100 | A | Excellent - Lanjut ke TypeScript OOP |
| 80 - 89 | B+ | Very Good - Lanjut ke TypeScript OOP |
| 70 - 79 | B | Good - Lanjut ke TypeScript OOP |
| 60 - 69 | C+ | Satisfactory - Review beberapa materi |
| 50 - 59 | C | Fair - Butuh review lebih mendalam |
| < 50 | D | Poor - Butuh remedial |

---

## CATATAN PENTING UNTUK PESERTA

1. **Tipe Data:** Pastikan setiap variabel dan parameter memiliki tipe data yang jelas dan sesuai
2. **Function Signature:** Deklarasikan return type untuk setiap function
3. **Error Handling:** Perhatikan edge cases dan null/undefined scenarios
4. **Code Quality:** Kode harus readable, efficient, dan mengikuti best practices TypeScript
5. **Compilation:** Pastikan kode tidak ada error saat di-compile dengan `tsc`
6. **Testing:** Semua test case harus passed

---

## DAFTAR MATERI YANG DIUJI

✅ Tipe Data Primitif (string, number, boolean)  
✅ Deklarasi Variabel dengan Tipe Eksplisit  
✅ Tipe Data Array dan ReadonlyArray  
✅ Tuple Type  
✅ Tipe Data Any dan Kapan Menggunakannya  
✅ Union Type dan Type Narrowing  
✅ Type Alias  
✅ Object Type (inline dan via alias)  
✅ Optional Properties  
✅ Enum (number dan string values)  
✅ Null dan Undefined Handling  
✅ Interface dan Implementasi  
✅ Readonly Properties  
✅ Function Interface  
✅ Indexable Interface  
✅ Extending Interface (Inheritance)  
✅ Function di dalam Interface  
✅ Intersection Types  
✅ Type Assertions  
✅ Function Declaration dengan Tipe  
✅ Function Parameter (required, optional, rest)  
✅ Function Overloading  
✅ Function sebagai Parameter  
✅ Control Flow (if, switch, ternary)  
✅ Loop Statements (for, while, do-while)  

---

**Selamat mengerjakan! Semoga berhasil dan siap untuk mempelajari TypeScript OOP!** 🚀