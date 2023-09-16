const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
  const newData = data.filter((item) => item.profession === "developer");
  console.log("updated data", newData);
}

// 2. Add Data
function addData() {
  const newName = prompt("Enter a name:");
  const newAge = prompt("Enter an age:");
  const newProfession = prompt("Enter a profession:");

  // Create a new data object with the collected details
  const newDataObject = {
    name: newName,
    age: parseInt(newAge), // Convert age to a number
    profession: newProfession,
  };

  // Push the new data object into the data array
  data.push(newDataObject);

  // Log the updated data array to the console
  console.log("Updated data array:", data);
}

// 3. Remove Admins
function removeAdmin() {
 const newData = data.filter((item) => item.profession !== "admin");
 console.log("removed admin",newData);
}

// 4. Concatenate Array
function concatenateArray() {
  const a = [{ name: "naveen", age: 24, profession: "developer" }];
  const newArray = [...data,  ...a];
  console.log(newArray);
}

// 5. Average Age
function averageAge() {
  let sum = 0;
  data.forEach((item) => {
    sum =sum+item.age;
  });
  let avg = sum / data.length;
  console.log("Average: ", avg);
}

// 6. Age Check
function checkAgeAbove25() {
  const validateByAge = data.some(item => item.age > 25);
  console.log(validateByAge);
}

// 7. Unique Professions
function uniqueProfessions() {
  const uniqueProf = []
  data.forEach(item => {
    if(!uniqueProf.includes(item.profession)){
      uniqueProf.push(item.profession)
    }
  })
  console.log("Unique professions are: ", uniqueProf)
}

// 8. Sort by Age
function sortByAge() {
  const sortedArray = data.sort((a, b) => a.age - b.age);
  console.log(sortedArray);
}

// 9. Update Profession
function updateJohnsProfession() {
  data.forEach((item) => item.name === "john" ? item.profession = "sweeper" : null);
  console.log("updated john's profession: ", data);
}

// 10. Profession Count
function getTotalProfessions() {
  let developerCount = 0;
  let adminCount = 0;
  data.forEach(item => {
    if(item.profession==='developer') developerCount += 1;
    if(item.profession==='admin') adminCount += 1;
  })
  console.log("Total developer count: "+ developerCount)
  console.log("Total admin count: "+ adminCount)
}
