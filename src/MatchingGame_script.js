var numberOfFaces = 5;
var theLeftSide = document.getElementById("leftSide");
var theRightSide = document.getElementById("rightSide");
var theBody = document.getElementsByTagName("body")[0];
function generateFaces() {

    for(var count = 0; count < numberOfFaces; count++) {
        var smiley_face = document.createElement("img");
        smiley_face.src = "smile.png";
        smiley_face.style.top = Math.floor(Math.random() * 400);
        smiley_face.style.left = Math.floor(Math.random() * 400);
        theLeftSide.appendChild(smiley_face);
    }

    var rightSideImages = theLeftSide.cloneNode(true);
    rightSideImages.removeChild(rightSideImages.lastChild);
    theRightSide.appendChild(rightSideImages);

    theLeftSide.lastChild.onclick =
        function nextLevel(event){
            event.stopPropagation();
            alert("hdsfhljdsfjhkdfjklsdf");
            numberOfFaces += 5;
            generateFaces();
        };
}


theBody.onclick =
    function gameOver() {
        alert("Game Over!");
        theBody.onclick = null;
        theLeftSide.lastChild.onclick = null;
    };

// function printChildInfo(parent)
// {
//     var childs = parent.childNodes;
//
//     for (var i = 0; i < childs.length; ++i)
//     {
//         var c = childs[i];
//
//         console.log([c.nodeName, c.nodeValue]);
//     }
// }
// printChildInfo(theLeftSide);
