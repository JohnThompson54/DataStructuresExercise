// 1a
const jedi = []
console.log(jedi);

// 1b
jedi [jedi.length]="Luke"
console.log(jedi);

// 1c
jedi.push("Obi-Wan Kenobi");
console.log(jedi);

// 1d 
jedi.unshift("Yoda");
console.log(jedi);

// 1e
console.log(jedi[1]);

// 1f
console.log(jedi.pop());
console.log(jedi);

// 1g
console.log(jedi.shift());
console.log(jedi);


// BONUS

// 2a
const sithLords = ["Darth Vader", "Darth Sidius", "Darth Maul"]
console.log(sithLords);

// 2b
const imperialOfficers = ["Grand Moff Tarkin", "Orson Krennic"]

// 2c
const  starWarsVillains = sithLords.concat(imperialOfficers);
console.log(starWarsVillains);

// 2d
const darths = starWarsVillains.slice(0,2);
console.log(darths);

// 3a
const droids = { astromech: "R2-D2", protocol: "C-3PO", assassin: "IG-88"}

// 3b
console.log(droids['astromech']);

// 3c
console.log(droids.astromech);

// 3d
droids["assassin"] = "IG-11"
console.log(droids);


// BONUS

// 4
starWarsVillains



