function bottlesofbeer(){
	var text;
	for(i=99;i>=0;i=i-1){
		if (i<=99 && i>=3){
		text=i+ " bottles of beer on the wall, "+i+ " bottles of beer, take one down and pass it around, " +(i-1)+ " bottles of beer on the wall \n";
		}		
		else if (i==2){
		text=i+ " bottles of beer on the wall, "+i+ "bottles of beer, take one down and pass it around, " +(i-1)+ " bottle of beer on the wall \n";
	}
		else if (i==1){
			text=i+ " bottle of beer on the wall, "+i+ "bottle of beer, take one down and pass it around, no more bottles of beer on the wall \n";
}
		else if (i==0){
		text="No more bottles of beer on the wall, no more bottles of beer,Go to the store and buy some more, 99 bottles of beer on the wall \n";
}
		document.getElementById("main").innerHTML += text;
}
		
}
