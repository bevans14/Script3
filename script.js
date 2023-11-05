
var daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var exercisesForWeek = ["Rest Day", "Running", "Jogging", "Tennis", "Swimming", "Core Strength", "Hiking"];
// Look into maybe using an object for this instead of two arrays?

var exerciseOfWeek = weeklyExcercise();


// const exercisePlan = {
//   daysOfWeek: {
//     Monday: ["Rest Day"],
//     Tuesday: ["Running"],
//     Wednesday: ["Jogging"],
//     Thursday: ["Tennis"],
//     Friday: ["Swimming"],
//     Saturday: ["Core Strength"],
//     Sunday: ["Hiking"]
//   }
// };

// ok that was too hard ^

  for (let i = 0; i < daysOfWeek.length; i++) { 

  exerciseOfWeek.setExercise(daysOfWeek[i], exercisesForWeek[i]);

  }
  function weeklyExcercise() {

    return {
      setExercise: function(daysOfWeek, exercisesForWeek) {
        if (daysOfWeek.includes(daysOfWeek)) {
          console.log(`Exercise for ${daysOfWeek}: ${exercisesForWeek}`); 
        } 
      },
  
  
    
    };}





//   second GI //

function calculatePizzaSlices(slices, numPeople) {
  
    const slicesPerPerson = slices / numPeople; 
  
    return `Both people get ${slicesPerPerson} because the pizza has ${slices} slices`;
  }
  
  var slices = 7;
  var numberOfPeople = 2; 
  
  var answer = calculatePizzaSlices(slices, numberOfPeople);
  console.log(answer);


  // Third GI //


  function createPII(name, ssn) {
    var PII = {
      name: "Nikki",
      ssn: 123456789,  // this function stores an object, the object stores data inside of it
      // test: 123,
    };

// function is simply storing data while the return is outputting data
// I dont want to return SSN because it needs to be unaccessable

    return {
      getName: function() { // getName is a method given to this function. 
        return PII.name // could user PII.ssn to return the ssn ?
      }};
    }
  
  var piiInfo = createPII("name", ""); // need to look into this more
  
  
var info = piiInfo.getName(); // calls piiInfo which holds my data in createPII, then calls the getName method
  console.log(`Name: ${name}`);
  
  console.log(`SSN: ${piiInfo.ssn}`); 



  
  
  
  // last GI



  const personinfo = {
    name: "Wendy",
    job: "programmer",
    age: 27,
    busy: true, 
  
    exercise: function() {
      console.log("This is hard");
    },
  
    fetchJob: function() {
      console.log(`${this.name} is a ${this.job}`);
    },
  
    newTask: function() {
      if (this.busy) {
        console.log(`${this.name} is busy`);
      } else {
        console.log(`${this.name} is not busy`);
      }
    },
  };

  const programmingLanguages = ["JavaScript", "Java"]


  programmingLanguages.push("C#", "CSS");
  
