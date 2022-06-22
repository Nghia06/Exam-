// Part 2
class Player {
    constructor(name,attack,blood){
        this.name = name;
        this.attack = Math.floor(Math.random() * 50) + 50;
        this.blood = Math.floor(Math.random() * 100) + 100;
    }
	Introduce() {
		console.log (`This is ${this.name}`)
		}
    
}
 

let champion_1 = new Player ("Varun")
let champion_2 = new Player ("")
champion_1.Introduce()


function printPlayerStatistic() {
    console.log (champion_1.attack);
    console.log (champion_1.blood);
    console.log (champion_2.attack);
    console.log (champion_2.blood);


   
}
printPlayerStatistic()

function Fight() {
    if (champion_1.attack > champion_2.attack) {
        console.log(champion_2.blood - champion_1.attack)

    }else {
        console.log (champion_1.blood - champion_2.attack)
    }
}
Fight()


// Part 1
// var kill = 0;

// function increaseKill(){

//   kill++;
//   return kill;
// }
// console.log(increaseKill())
// console.log(increaseKill())
// console.log(increaseKill())


// var death = 0
// function increaseDeath(){
// 	death++;
// 	return death
// }
// console.log (increaseDeath())
// console.log (increaseDeath())
// console.log (increaseDeath())

// var assist = 0
// function increaseAssist () {
// 	assist++;
// 	return assist;
// }
// console.log (increaseAssist())
// console.log (increaseAssist())
// console.log (increaseAssist())

