// Code your solutions in this file
let names = ["Guadalupe", "Ollie", "Aki"];
function writeCards(names) {
  for (let i = 0; i < names.length; i++) {
    const data = `Thank you, ${names[i]}, for the wonderful surprise gift!`;
    names[i] = data
  }
  return names;
}
writeCards(names);

function countDown(){
    let decrease = 10
    while(decrease > -1){
        console.log(decrease)
        decrease--
    }
}
countDown(4);