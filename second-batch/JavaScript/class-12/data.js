const data = [
  {
    "name": "Rahul",
    "age": 20,
    "isStudent": true,
    "skills": ["HTML", "CSS", "JavaScript"],
    "address": {
      "street": "123 Main St",
      "city": "Nalanda",
      "zip": 803101
    },
    "hobbies": null,
    "marks": [
      { "subject": "Math", "score": 88 },
      { "subject": "Science", "score": 92 }
    ]
  },
  {
    "name": "Ishika",
    "age": 19,
    "isStudent": false,
    "skills": ["Python", "C++"],
    "address": {
      "street": "456 Side Rd",
      "city": "Patna",
      "zip": 800001
    },
    "hobbies": ["Dancing", "Reading"],
    "marks": [
      { "subject": "Math", "score": 95 },
      { "subject": "Science", "score": 90 }
    ]
  }
]


// const data = [ /* your JSON data above */ ];

// 1. Access the first person's name
console.log(data[0].name); // Output: Rahul

// 2. Access second person's city
console.log(data[1].address.city); // Output: Patna

// 3. Check if first person is a student
console.log(data[0].isStudent); // Output: true

// 4. Access second person's second skill
console.log(data[1].skills[1]); // Output: C++

// 5. Loop through skills of the first person
data[0].skills.forEach(skill => {
  console.log(skill);
});

// 6. Loop through marks and subjects of first person
data[0].marks.forEach(mark => {
  console.log(`Subject: ${mark.subject}, Score: ${mark.score}`);
});

// 7. Check if hobbies are null
if (data[0].hobbies === null) {
  console.log("No hobbies listed for Rahul.");
}

// 8. Add a new skill to first person
data[0].skills.push("React");
console.log(data[0].skills); // Now includes "React"
