// Write a function to manipulate the provided string

// 1. Padded Number
// Pad given single numbers in array to look like "10", "05", "16", "02"
const nums = ['2', '4', '25', '10', '3']
const paddedNum = text => {
//   Insert function
for (var i = 0; i<text.length; i++){
	if (text[i].length === 1){
		text[i] = '0'+text[i];
	}
}
	console.log(nums);
}
paddedNum(nums)


// 2. Camel-to-Title
// Convert a given sentence from camelCase to Title Case
const camelCase = "the simplestThings in LIFE are alwaysThe best"
const titleCase = text => {
//   Insert function
let space = ' ';
let word = '';

// Separate all the words in given Sentence by space
for (let i = 0; i < text.length; i++){
	if (text[i] === text[i].toUpperCase() && text[i-1] === text[i-1].toLowerCase() && text[i+1] === text[i+1].toLowerCase() && text[i] !== space){
		word = word + space + text[i]; 
	}else{
		word = word + text[i];
	}
}
// Convert all word in Lowercase
let newWord = word.toLowerCase().split(' ');

for (var i = 0; i < newWord.length; i++){
	newWord[i] = newWord[i].charAt(0).toUpperCase()+newWord[i].slice(1);
}
 let titleWord = newWord.join(" ");
console.log(titleWord);
}
titleCase(camelCase)

//3. Title-to-Camel
// Convert the Title Case back to camelCase
const newTitle = "These Words Should Go In Pairs"
const newCamel = text => {
//   Insert function
const word = text.split(" ");
let newWord = '';
for (var i = 0; i < word.length; i=i+2){
	newWord += word[i].toLowerCase()+word[i+1]+' ';
	}
console.log(newWord);
}
newCamel(newTitle)

// 4. Pig Latin
// Convert any word to Pig Latin, see how to convert here => https://en.wikipedia.org/wiki/Pig_Latin
const word = 'hamlet';
const pigLatin = text => {
//   Insert function 
for (var i = 1; i < text.length; i++){
	if (text[i] === 'a' || text[i] === 'e' || text[i] === 'i' || text[i] === 'o' || text[i] === 'u'){
		const first = text.slice(i);
		const last = text.slice(0,i);
		console.log(first+'ay'+last);
		break;
	}
}
}
pigLatin(word);
