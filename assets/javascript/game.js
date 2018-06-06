window.onload = function() {
    var wordTochoose = ["cavaliers", "warriors", "lakers", "rockets","spurs"];
    var wordChosen;

    // randomly choose a word
    var randomNu = Math.floor(Math.random()*wordTochoose.length);
        console.log(randomNu);
        wordChosen = wordTochoose[randomNu];
        console.log(wordChosen);
    

    // put the word chosen in wordChosenarray; word guessed in wordGuessarray
    // Define an arrany "letterTried" to store letters tried
    var wordChosenarray = wordChosen.split("");
        console.log(wordChosenarray);
    var arrayLength = wordChosenarray.length;
        console.log (arrayLength);   
    var wordGuessarray = [];
        wordGuessarray.length=arrayLength;
        console.log(wordGuessarray.length);
    var letterTried = [];

    // var parent3 = document.getElementById("div3");
    //     console.log(parent3);
    // var child3  = document.getElementById("p3");
    //     console.log(child3);
    var numOfLeft = 10;
    var numOfWins = 0;

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

        document.getElementById("wins").innerHTML = numOfWins;
        document.getElementById("p2").innerHTML = numOfLeft;

    
    window.onkeyup = function(event) {
        numOfLeft--;
        document.getElementById("p2").innerHTML = numOfLeft;

        var parent1 = document.getElementById("div1");
        console.log(parent3);
        var child1  = document.getElementById("p1");
        console.log(child3);
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

                

                //replaceWordGuess(wordGuessarray);
                displayArray(wordGuessarray,parent1,child1);

                console.log (arrayEqual(wordChosenarray,wordGuessarray));
                if (arrayEqual(wordChosenarray,wordGuessarray)) {
                    numOfWins++;
                    document.getElementById("wins").innerHTML = numOfWins;
                    alert("you win");
                }
                
            } else {
                //alert("you lost 1 live");
                if (numOfLeft<=0) {
                    alert("lost")
                }
            }
        } else {
            //alert("you lost 1 live!");
            if (numOfLeft<=0) {
                alert("lost");
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
            // function replaceWordGuess(arr) {
            //     var parent = document.getElementById("div1");
            //     console.log(parent);
            //     var oldChild = document.getElementById("p1");
            //     console.log(p1);
            //     var newChild = document.createElement("p");
            //         newChild.setAttribute("id","p1");

            //     for (i=0; i<arr.length; i++) {
            //         var content =" " + arr[i] + " ";
            //         console.log(content);
            //         var textNode = document.createTextNode(content);   
            //         newChild.appendChild(textNode);    
            //         }      
            //     parent.replaceChild(newChild,oldChild);
            // }
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
    
}