function bmi() {
	var height = parseFloat(document.getElementById("height").value);
	var weight = parseFloat(document.getElementById("weight").value);
	var name = document.getElementById("name").value;
	var bmi = weight / (height * height);
	var userBMI = document.getElementById("bmi_index");
	userBMI.textContent = bmi.toFixed(2);
	var str = document.getElementById("bmi_text");
	var greeting=document.getElementById("bmi_greeting");
	greeting.textContent = "Hi " + name[0].toUpperCase() + name.slice(1);
	str.textContent = "Your BMI is ";

	if (bmi <= 18.5) {
		var category = document.getElementById("bmi_category")
		category.textContent = "underweight"
	} else if (bmi > 18.5 && bmi < 25) {
		var category = document.getElementById("bmi_category")
		category.textContent = "normal"
	} else if(bmi >= 26){
		var category = document.getElementById("bmi_category");
		category.textContent = "overweight";
    }
    else {var category = document.getElementById("bmi_category")
   category.textContent = "insufficient or no data entered"
   
}
}
	
function customReset() {
	document.getElementById("form").reset();
	document.getElementById("bmi_greeting").innerText = "";
	document.getElementById("bmi_text").innerText = "";
	document.getElementById("bmi_index").innerText = "";
	document.getElementById("bmi_category").innerText = "";
  }
  

