const presidents = [
  { name: "Donald Trump", terms: 1, party: "R" },
  { name: "Barack Obama", terms: 2, party: "D" },
  { name: "George W. Bush", terms: 2, party: "R" },
  { name: "Bill Clinton", terms: 2, party: "D" },
  { name: "George H.W. Bush", terms: 1, party: "R" },
  { name: "Ronald Reagan", terms: 2, party: "R" },
  { name: "Jimmy Carter", terms: 1, party: "D" },
  { name: "Gerlad Ford", terms: 1, party: "R" },
  { name: "Richard Nixon", terms: 2, party: "R" },
  { name: "John F. Kennedy", terms: 1, party: "D" },
  { name: "Lyndon Johnson", terms: 2, party: "D" },
  { name: "Dwight Eisenhower", terms: 2, party: "R" },
];

//Challenge Questions
//1) Filter all presidents, leaving only the Democratic ones
//const Democratic = presidents.filter(function (demos) {
//  if ((demos.party = "D" && demos.party < "R")) {
//    return 1;
//  } else {
//    return false;
//  }
//});
//console.table(Democratic);
//2)Filter all presidents to leave only one term Republican presidents HINT use If statement
//const republicans = presidents.filter(function (repubs) {
//  if ((repubs.party = "R" && repubs.party > "D")) {
//    return true;
//  } else {
//    return false;
//  }
//});
//console.table(republicans);
//const republiones = republicans.filter(function (reponess) {
//  if ((repsones.terms = "1" && reps.terms < "2")) {
//    return true;
//  } else {
//    return false;
//  }
//});(does not work)
//console.table(republiones);
const oneTermreps = presidents.filter(function (onereps) {
  if (onereps.terms === 1 && onereps.party === "R") {
    return true;
  } else {
    return false;
  }
});
console.table(oneTermreps); //(correction)
//3) return only the last three presidents
console.table(presidents.slice(0, 3));
//4) log all dems who served 2 terms. HINT use chain filter, filter and slice
const twoTermDems = presidents.filter(function (twoDems) {
  if (twoDems.terms === 2 && twoDems.party === "D") {
    return true;
  } else {
    return false;
  }
});
//console.table(twoTermDems);//(correction)
//BONUS write a script to check if LBJ was a 2 term president. IF he was then alert("LBJ served two terms") else alert "LBJ was one and done"
