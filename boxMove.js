const testFunction = () => {
    document.getElementById("item-box1").style.display === "none" ? (
        document.getElementById("item-box1").style.display = "block",
        document.getElementById("item-box2").style.display = "none"
    ): (
        document.getElementById("item-box1").style.display = "none",
        document.getElementById("item-box2").style.display = "block"
    )
}




