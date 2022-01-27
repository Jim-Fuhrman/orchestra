const director = "Dr. Emil Fuhrman";
const violins = ["Albert", "Brian", "Charles", "David"]; 
const violas = ["Carol", "Diane", "Emily"];
const cellos = ["Fred", "Greg", "Hannah", "Quentin", "Betty"];
const bassViolins = ["Ian", "Jane", "Kevin"];

const trumpets = ["Zack", "Yvonne", "Xavier"]; 
const trombones = ["Vernon", "William", "Ulysses"];
const frenchHorns = ["Tim", "Steve", "Randall"];
const tuba = "Kent";

const flutes = ["Cindy", "Denise", "Amy"];
const clarinets = ["Larry", "Matt", "Norma"];
const englishHorn = "Brian";
const oboes = ["Clara", "Olivia"];
const bassoons = ["Debra", "Gloria"];

const timpani = "Roberta"; 
const piano = "Gus";
const triangle = "Lucy"; 
const snareDrums = "Peter";
const bassDrum = "Eric";
const trapSet = "Ned";

const [firstViolinist, secondViolinist, thirdViolinist] = violins;
const [, , thirdViola] = violas;
const [, secondCello, ] = cellos;


const [...guitars] = ["Sam", "Tim", "John", "Harold"];

console.log(`guitar players: ${guitars}`);

console.log(firstViolinist, secondViolinist, thirdViolinist, thirdViola, secondCello);

function trumpetPlayers(...tp) {
	tp.forEach((trumpetPlayer, i, arr) =>  {
		console.log(`Hello ${trumpetPlayer}!`);
	});
}

trumpetPlayers(...trumpets);

const strings = [...violins, ...violas, ...cellos, ...bassViolins];
console.log(`# of stringed instrument players: ${strings.length}`);
console.log(strings);
console.log(` `);
const brass = [...trumpets, ...trombones, ...frenchHorns, tuba];
console.log(`# of brass instrument players: ${brass.length}`);
console.log(brass);
console.log(` `);
const woodwinds = [...flutes, ...clarinets, englishHorn, ...oboes, ...bassoons];
console.log(`# of woodwinds instrument players: ${woodwinds.length}`);
console.log(woodwinds);
console.log(` `);
const percussion = [timpani, piano, triangle, snareDrums, trapSet];
console.log(`# of percussion instrument players: ${percussion.length}`);
console.log(percussion);
const orchestra = [director, strings, brass, woodwinds, percussion];
console.log(orchestra);
console.log(brass);