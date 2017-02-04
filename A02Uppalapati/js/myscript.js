function Calculate()
		{
		
		var Income = document.getElementById("Income").value;
		var Rent = document.getElementById("Rent").value;
		var Ebill = document.getElementById("Ebill").value;
		var Cable = document.getElementById("Cable").value;
		var Mobile = document.getElementById("Mobile").value;
		var AutoIns = document.getElementById("AutoIns").value;
		var display1 = document.getElementById("display1").value;
		var display2 = document.getElementById("display2").value;
		var display3 = document.getElementById("display3").value;
		
		var expenses= validateForm(Income,Rent,Ebill,Cable,Mobile,AutoIns);//,Rent,Ebill,Cable,Mobile,AutoIns);
		var savings= Income - expenses;
		
		document.getElementById("display1").value = Income;
		document.getElementById("display2").value = expenses;
		document.getElementById("display3").value = savings;
					
		   }
	   function validateForm(Income,Rent,Ebill,Cable,Mobile,AutoIns) {
			
			if (Income === '' || Rent === '' || Ebill === '' || Cable === '' || Mobile === ''|| AutoIns === '')
			{
				window.alert("Please fill all fields...!!!!!!");
 			} 
			else if((isNaN(Income) || Income < 0)) 
				{
					window.alert("Invalid Income, Please reenter!!");
				}
				else if((isNaN(Rent) || Rent < 0)) 
				{
					window.alert("Invalid Rent amount, Please reenter!!");
				}
				else if((isNaN(Ebill) || Ebill < 0)) 
				{
					window.alert("Invalid Electricity bill amount, Please reenter!!");
				}
				else if((isNaN(Cable) || Cable < 0)) 
				{
					window.alert("Invalid Cable charges, Please reenter!!");
				}
				else if((isNaN(Mobile) || Mobile < 0)) 
				{
					window.alert("Invalid Mobile bill, Please reenter!!");
				}
			else if((isNaN(AutoIns) || AutoIns < 0)) 
				{
					window.alert("Invalid Auto Insurance premium, Please reenter!");
				}
				else 
				{
					
					var vexp = Number(Rent) + Number(Ebill) + Number(Cable) + Number(Mobile) + Number(AutoIns);
					return vexp;
					}	
				
			}
				
	  