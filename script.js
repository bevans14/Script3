function weeklyExcercise() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const exercises = {};
  
    return {
      setExercise: function(day, newExercise) {
        if (daysOfWeek.includes(day)) {
          exercises[day] = newExercise;
          console.log(`Exercise for ${day}: ${newExercise}`);
        } 
      },
      getExercise: function(day) {
        if (daysOfWeek.includes(day)) {
          return exercises[day] || "No exercise set for this day.";
        }
      },
      getCurrentDay: function() {
        const today = new Date().getDay();
        return daysOfWeek[today];
      }
    };
  }

  const exerciseOfWeek = weeklyExcercise();
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const exercisesForWeek = ["Rest Day", "Running", "Jogging", "Tennis", "Swimming", "Core Strength", "Hiking"];
 
  for (let i = 0; i < daysOfWeek.length; i++) {
    exerciseOfWeek.setExercise(daysOfWeek[i], exercisesForWeek[i]);
  }
  
  const currentDay = exerciseOfWeek.getCurrentDay();
  console.log(`Today's exercise: ${exerciseOfWeek.getExercise(currentDay)}`);


//   second GI //

function calculatePizzaSlices(pizzaSlices, numberOfPeople) {
  
    const slicesPerPerson = pizzaSlices / numberOfPeople; 
  
    return `Both people get ${slicesPerPerson.toFixed(2)} because the pizza has ${pizzaSlices} slices`;
  }
  
  const pizzaSlices = 10;
  const numberOfPeople = 2; 
  
  const result = calculatePizzaSlices(pizzaSlices, numberOfPeople);
  console.log(result);


  // Third GI //


  function createPII(name, ssn) {
    const PII = {
      name: name,
      ssn: ssn
   
    };
  
    return {
      getName: function() {
        return PII.name;
      }};
    }
  

  
  const piiInfo = createPII("Nikki Minaj the baddest", "01020304");
  
  const name = piiInfo.getName();
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
  
