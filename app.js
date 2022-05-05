let sentence = document.getElementById('sentence');
let letter = document.getElementById('letter');
let result = document.getElementById('result');
let button = document.getElementById('button');
let firstOccurence = document.getElementById('first');
let lastOccurence = document.getElementById('last');
let caseInSensitive = document.getElementById('case-insensitive');

button.addEventListener('click', function () {
    var givenSentence = sentence.value;
    var givenLetter = letter.value;
    var indexofLetter;
    if(caseInSensitive.checked){
        var updateGivenSentence = givenSentence.toLowerCase();
        var updateGivenLetter = givenLetter.toLowerCase();
        givenSentence = updateGivenSentence;
        givenLetter = updateGivenLetter;
    }
    if(firstOccurence.checked){
         indexofLetter = givenSentence.indexOf(givenLetter);
    }else{
         indexofLetter = givenSentence.lastIndexOf(givenLetter);
    }
    if (givenLetter.length === 0 || givenSentence.length === 0) {
        alert("Please Enter The Text !!")
    } else if (indexofLetter == -1) {
        result.innerHTML = `<div id="dataWantToShow">
        <span>The Search result:</span>
        <div id="dataresult">Please enter valid letter !</div>
        <div>`;
    } else {
        var returnData = givenSentence.substring(indexofLetter + 1);
        console.log(returnData);
        result.innerHTML = `<div id="dataWantToShow">
                     <span>The Search result:</span>
                     <div id="dataresult">${returnData.trim()}</div>
                     </div>`;
    }
    sentence.value = "";
    letter.value = "";

});
