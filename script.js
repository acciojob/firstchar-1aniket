function firstChar(text) {
  // your code here

	let ans=" ";

	for(let i=0;i<text.length;i++)
	{
		if(ans==" " && text[i]!=" ")
		{
			return ans=text[i];
		}
	}
	return ans;
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
const text = prompt("Enter text:");
alert(firstChar(text));

