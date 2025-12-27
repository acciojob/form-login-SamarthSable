function getFormvalue() {
    //Write your code here
	const firstname= document.getElementByName("fname").value.trim();
	const lastname = document.getElementByName("lname").value.trim();
	alert(`${firstname} ${lastname}`);
}
