var numOfWins = 0;
var wordTochoose = ["cavaliers", "warriors", "lakers", "rockets","spurs"];

window.onload = function() {

    var wordChosenarray = [];
    var wordGuessarray = [];
    var arrayLength;

    var letterTried =[];
    var keyIndexes = [];

    var numOfLeft;

    initialize();
   
        
    window.onkeyup = function(event) {
        numOfLeft=numOfLeft-1;
        document.getElementById("p2").innerHTML = numOfLeft;
        //debugger;
        var parent1 = document.getElementById("div1");
        console.log(parent1);
        var child1  = document.getElementById("p1");
        console.log(child1);
        var parent3 = document.getElementById("div3");
        console.log(parent3);
        var child3  = document.getElementById("p3");
        console.log(child3);

        

        var keyTyped = event.key;
        console.log(keyTyped);

        var keyIndexes;

        if (!letterTried.includes(keyTyped)) {
            letterTried.push(keyTyped);
            console.log(letterTried);
            
            displayArray(letterTried,parent3,child3);

            if (wordChosenarray.includes(keyTyped) ) {
                keyIndexes = getAllIndexes(wordChosenarray,keyTyped);
                console.log (keyIndexes);

                pushWordGuess(keyIndexes);
                console.log(wordGuessarray);

                displayArray(wordGuessarray,parent1,child1);
                //debugger;
                console.log (arrayEqual(wordChosenarray,wordGuessarray));
                if (arrayEqual(wordChosenarray,wordGuessarray)) {
                    numOfWins++;
                    document.getElementById("wins").innerHTML = numOfWins;
                    alert("you win");
                    initialize();
                }
                
            } else {
               
                if (numOfLeft<=0) {
                    alert("lost")
                    initialize();
                }
            }
        } else {
            
            if (numOfLeft<=0) {
                alert("lost");
                initialize();
            }
        }

            function getAllIndexes(arr,val) {
                var indexes = [], i= -1;
                while ((i =arr.indexOf(val,i+1)) != -1) {
                    indexes.push(i);
                }
                return indexes;
            } 

            function pushWordGuess(indexes) {
                for (i=0; i<indexes.length;i++) {
                    var index = parseInt(indexes[i]);
                    wordGuessarray[index]=keyTyped;
                }
            }
            
            function displayArray(arr,parent,child) {
                var oldChild = child;
                    console.log(oldChild);
                var oldAttribute = oldChild.getAttribute("id");
                    console.log(oldAttribute);
                var newChild = document.createElement("p");
                    newChild.setAttribute("id", oldAttribute);

                    for (i=0; i<arr.length; i++) {
                        var content =" " + arr[i] + " ";
                        console.log(content);
                        var textNode = document.createTextNode(content);   
                        newChild.appendChild(textNode);    
                        } 
                        console.log(newChild);     
                    parent.replaceChild(newChild,oldChild);
            }

            function arrayEqual(arr1,arr2) {
                for (var i=0; i<arr1.length; i++){
                    if (arr1[i] !== arr2[i]) {
                        return false;
                    }
                } 
                return true;
            }
    }
    function initialize() {
        var wordChosen;

        // randomly choose a word
        var randomNu = Math.floor(Math.random()*wordTochoose.length);
            console.log(randomNu);
            wordChosen = wordTochoose[randomNu];
            console.log(wordChosen);
        

        // put the word chosen in wordChosenarray; word guessed in wordGuessarray
        // Define an arrany "letterTried" to store letters tried
            wordChosenarray = wordChosen.split("");
            console.log(wordChosenarray);
        var arrayLength = wordChosenarray.length;
            console.log (arrayLength);   

            wordGuessarray.length=arrayLength;
            console.log(wordGuessarray.length);
            letterTried = [];
        
            numOfLeft = 10;
        

            for (i=0; i<arrayLength; i++) {
                wordGuessarray[i] = " _ ";
            }
            console.log(wordGuessarray);

            document.getElementById("p1").innerHTML = wordGuessarray.join("");
            document.getElementById("p3").innerHTML = letterTried.join("");
            document.getElementById("wins").innerHTML = numOfWins;
            document.getElementById("p2").innerHTML = numOfLeft;


    }
    
}