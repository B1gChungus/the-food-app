let includebutton = document.getElementById("include")
let excludebutton = document.getElementById("exclude")
let incexc = true
let selected = "rgb(0,200,0)"
let unselected = "rgb(206, 206, 206)"

function changeinc(what) {
    let item = document.getElementById(what)
    console.log(item.style.backgroundColor)
    let otheritem = item == includebutton ? excludebutton : includebutton
    item.style.backgroundColor = item.style.backgroundColor == unselected ? selected : item.style.backgroundColor == "" ? selected : runselected
    otheritem.style.backgroundColor = item.style.backgroundColor == unselected ? selected : unselected
}
changeinc("include")