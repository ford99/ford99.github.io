function grades(){
	var numsubjects=parseInt(document.getElementById("numsubj").value);
	var inputs=[];
	var text;
	for (i=0;i<numsubjects;i++){
		inputs.push(parseInt(prompt("Please enter the result for subject number "+i)));
		if (inputs[i]<=100 && inputs[i]>=80){
			confirm(text="Your result is  " +inputs[i]+ "and your grade is A");
		}
		else if (inputs[i]<=79 && inputs[i]>=60){
			confirm(text="Your result is  " +inputs[i]+ "and your grade is B");
			
		}
		else if (inputs[i]<=59 && inputs[i]>=40){
			confirm(text="Your result is  " +inputs[i]+ "and your grade is C");
		}			
		else if (inputs[i]<=59 && inputs[i]>=40){
		confirm(text="Your result is  " +inputs[i]+ "and your grade is D");
		}	
		else if (inputs[i]<=39 && inputs[i]>=20){
		confirm(text="Your result is  " +inputs[i]+ "and your grade is E");
		}	
		else if (inputs[i]<20) {
			confirm(text="Your result is  " +inputs[i]+ "  and your grade is F");	
		}
		else {
			confirm("Invalid entry");
		}
	
	}
	
}

