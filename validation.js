		function validate(){
		var firstname = $('#firstname').val();
		if (!$.trim(firstname)) {
			alert('First Name is required!');
			return false;
		} else {  
		
		var lastname = $('#lastname').val();
		if (!$.trim(lastname)) {
			alert('Last Name is required!');
			return false;
		} else { 

		var emailaddress = $('#emailaddress').val();
		if (!$.trim(emailaddress)) {
			alert('Email Address is required!');
			return false;
		} else { 
		
		var dob = $('#dob').val();
		if (!$.trim(dob)) {
			alert('Date of Birth is required!');
			return false;
		} else { 

		var coc = $('#coc').val();
		if (!$.trim(coc)) {
			alert('Country of Citizenship is required!');
			return false;
		} else { 
		
		var phoneno = $('#phoneno').val();
		if (!$.trim(phoneno)) {
			alert('Phone no. is required!');
			return false;
		} else {

		var course1 = $('#course1').val();
		if (!$.trim(course1)) {
			alert('First Course Detail is required!');
			return false;
		} else {
		
		var course2 = $('#course2').val();
		if (!$.trim(course2)) {
			alert('Second Course Detail is required!');
			return false;
		} else { return true; 
		
		}
		}
		}
		}
		}
		}
		}	
		}
		}
