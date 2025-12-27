function getFormvalue() {
    //Write your code here
	const firstname= document.querySelector("#forml[name='fname']").value.trim();
	const lastname = document.querySelector("#forml[name='lname']").value.trim();
	alert(`${firstname} ${lastname}`);
}
