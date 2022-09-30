//inputs from the html
const minCal=document.getElementById("minCal")
const maxCal=document.getElementById("maxCal")
//Breakfast,lunch,dinner,snack,dessert
const mealTime=document.getElementById("mealTime")
const dietType=document.getElementById("dietType")
const prepTime=document.getElementById("prepTime")

//the amount of outputs to show
var returnLength=5;




const buildRequest=()=>{
    //not yet in the format for the API
    //will put it in the format after adding the API
    var request={
        "minCal":minCal.value,
        "maxCal":maxCal.value,
        "mealTime":mealTime.value,
        "dietType":dietType.value,
        "prepTime":prepTime.value,
        "first":returnLength
    }.filter((value)=>value!="default")
    return request;
}
