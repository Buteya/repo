capitalizeFirstLetter = ()=>{
    let sentence = prompt("Enter sentence or word to capitalize");
    let separator = sentence.split(' ');
    let newString = "";
    for(let i = 0;i < separator.length;i++){
        array=[...separator[i]];
        array.splice(0,1);
        word = array;
        newString += separator[i][0].toUpperCase()+word.join('')+" ";
    }
    alert(newString);
};

capitalizeFirstLetter(); 