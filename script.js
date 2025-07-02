const output = document.getElementById("output");

// ✅ Simple Array
const fruits = ["apple", "banana", "cherry"];

// ✅ Object
const student = {
  name: "Arun",
  age: 20,
  skills: ["HTML", "CSS", "JavaScript"],

  // ✅ Nested Object
  address: {
    city: "Chennai",
    country: "India",
  },

  // ✅ Method
  getInfo: function () {
    return `${this.name}, Age: ${this.age}, Lives in ${this.address.city}`;
  },
};

// ✅ Nested Array of Objects
const students = [
  { name: "Ravi", age: 21, courses: ["Math", "Physics"] },
  { name: "Meena", age: 22, courses: ["Bio", "Chem"] },
  { name: "Arun", age: 20, courses: ["CS", "Design"] },
  { name: "Ravi", age: 21, courses: ["Math", "Physics"] },
  { name: "Meena", age: 22, courses: ["Bio", "Chem"] },
  { name: "Arun", age: 20, courses: ["CS", "Design"] },
];
const students2 = [
  { name: ["raja", "mhoan", "siva"] },
  { age: ["23", "25", "19"] },
  { mark: ["250.5", "350.5", "450.5"] },
  { boolien: ["true", "false", "true"] }
];
// ✅ Regular Function
function getAllNames(arr) {
  return arr.map((s) => s.name);
}

// ✅ Arrow Function
const getAllCourses = (arr) => arr.flatMap((s) => s.courses);

// ✅ AJAX Example using Fetch
function getPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
    .then((res) => res.json())
    .then((data) => {
      print("🌐 AJAX Result (4 Posts):");
      data.forEach((post) => {
        print(`🔸 ${post.title}`);
      });
    })
    .catch((err) => print(`❌ Error: ${err}`));
}
// function getid() {
//     fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
//         .then(res => res.json())
//         .then(data => {
//         print("🌐 AJAX Result (Post ID 1):");
//         data.forEach(post => {
//         print(` ${post.id } - ${post.title}`);
//         print(` ${post.body}`);
//         });
//         })
//         .catch(err => print(`❌ Error: ${err}`));

// }
function getid() {
  fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
    .then((res) => res.json())
    .then((data) => {
      const container = document.getElementById("ajax-output");
      // const container2 = document.createElement("div");
      // container.insertAdjacentElement("beforeend", container2);

      data.forEach((post) => {
        // Create <details> structure
        const details = document.createElement("details");
        const atag = document.createElement("a"); // Create anchor tag for post link
        atag.href = `https://jsonplaceholder.typicode.com/posts/${post.id}`; // Link to the post
        atag.textContent = `Post ID: ${post.id}`;

        const summary = document.createElement("summary");
        summary.textContent = `${post.id} - ${post.title}`;

        const body = document.createElement("p");
        body.textContent = post.body;

        details.appendChild(summary);
        details.appendChild(body);

        // container2.appendChild(atag);

        container.appendChild(atag);
        container.appendChild(details);
      });
    })
    .catch((err) => {
      document.getElementById("ajax-output").textContent = `❌ Error: ${err}`;
    });
}
// Helper print function
function print(msg) {
  output.textContent += msg + "\n";
}

// Display Output
print("✅ Array of Fruits: " + fruits.join(", "));
print(
  "✅ Array of Fruits: " +
    fruits.push("orange", "4").toString().charAt(0).toUpperCase() +
    fruits.slice(1).find((fruit) => fruit === "4") +
    ", " +
    fruits.join(", ")
);
print("✅ Array of Fruits: " + fruits);
print("✅ Array of Fruits: " + fruits.reverse());
print("✅ Array of Fruits: " + fruits.length);
print("✅ Array of Fruits: " + fruits.pop());
print("✅ Array of Fruits: " + fruits.shift());
print("✅ Student Info: " + student.getInfo());
print("✅ All Students:");
students.forEach((s) =>
  print(`🔹 ${s.name}, Age ${s.age}, Courses: ${s.courses.join(", ")}`)
);
print("✅ All Names: " + getAllNames(students).join(", "));
print("✅ All Courses: " + getAllCourses(students).join(", "));
print(
  "✅ All Courses: " + getAllCourses(students).slice(0, 3).join(", ") + "..."
);
print(
  "✅ All Courses: " +
    getAllCourses(students).shift() +
    ", " +
    getAllCourses(students).join(", ")
);
print(
  "✅ All Courses: " +
    getAllCourses(students).pop() +
    ", " +
    getAllCourses(students).join(", ")
);
print("✅ All Courses: " + getAllCourses(students).length);
print("✅ All Courses: " + getAllCourses(students).reverse().join(", "));
print(
  "✅ Nested Array of Objects: name " +
    students2[0].name[0] +
    ", age " +
    students2[1].age[1] +
    ", mark " +
    students2[2].mark[2] +
    ", value " +
    students2[3].boolien[0]
);
print(
  "✅ Nested Array of Objects: " +
  students2[0].name[1] +
    ", " +
    students2[1].age[2] +
    ", " +
    students2[2].mark[0] +
    ", " +
    students2[3].boolien[1]
);


print("\n");

// Fetch posts using AJAX
getPosts();
getid();
