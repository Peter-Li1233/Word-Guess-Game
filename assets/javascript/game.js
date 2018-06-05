window.onload = function() {
    var wordTochoose = ["cavaliers", "warriors", "lakers", "rockets","spurs"];
    var wordChosen;

    // randomly choose a word
    var randomNu = Math.floor(Math.random()*wordTochoose.length);
        console.log(randomNu);
        wordChosen = wordTochoose[randomNu];
        console.log(wordChosen);
    

    // put the word chosen in wordChosenarray; word guessed in wordGuessarray
    var wordChosenarray = wordChosen.split("");
        console.log(wordChosenarray);
    var arrayLength = wordChosenarray.length;
        console.log (arrayLength);   
    var wordGuessarray = [];
        wordGuessarray.length=arrayLength;
        console.log(wordGuessarray.length);

        for (i=0; i<arrayLength; i++) {
            wordGuessarray[i] = " _ ";
        }
        console.log(wordGuessarray);

        var element = document.getElementById("p1");
        
        for (i=0; i<arrayLength; i++) {
            var content = " _ ";
            var nodeText = document.createTextNode(content);
            element.appendChild(nodeText);
        }

    
    window.onkeyup = function(event) {
        var keyTyped = event.key;
        console.log(keyTyped);

        var keyIndexes;

        if (wordChosenarray.includes(keyTyped) ) {
            keyIndexes = getAllIndexes(wordChosenarray,keyTyped);
            console.log (keyIndexes);

            pushWordGuess(keyIndexes);
            console.log(wordGuessarray);

            replaceWordGuess(wordGuessarray);           
        } else {
            alert("you lost 1 live!");
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
        function replaceWordGuess(arr) {
            var parent = document.getElementById("div1");
            console.log(parent);
            var oldChild = document.getElementById("p1");
            console.log(p1);
            var newChild = document.createElement("p")
                newChild.setAttribute("id","p1");

            for (i=0; i<arr.length; i++) {
                var content = arr[i];
                console.log(content);
                var textNode = document.createTextNode(content);   
                newChild.appendChild(textNode);    
                }      
            parent.replaceChild(newChild,oldChild);
        }
        
    }
    
}