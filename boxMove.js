//boxMove.js
// document.getElementById("array-box1").innerHTML = fruitArray

// const fruitList= ['apples', 'bananas', 'oranges', 'pears'];

// $(document).ready(function () {
//     const fruitListArray = [];
//     for (i=0; i<fruitList.length; i++) {
//         fruitListArray+=  fruitList[i]  + '<br />';
//     }
//     document.getElementById("array-box1").innerHTML = fruitListArray;
//     // songList="";
// }); 

const testFunction = () => {
    document.getElementById("item-box1").style.display === "none" ? (
        document.getElementById("item-box1").style.display = "block",
        document.getElementById("item-box2").style.display = "none"
    ): (
        document.getElementById("item-box1").style.display = "none",
        document.getElementById("item-box2").style.display = "block"
    )
}




