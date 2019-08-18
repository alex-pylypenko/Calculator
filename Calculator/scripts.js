function result(choice) {
var n1 = parseFloat(document.getElementById('num1').value);
var n2 = parseFloat(document.getElementById('num2').value);
var r;
var x = choice;

switch(x)
	{
	case '1':
		r = n1 + n2;
		break;
            
	case '2':
		r = n1 - n2;
		break;
            
	case '3':
		r = n1 * n2;
		break;
            
	case '4': 
		r = n1 / n2;
		break;
            
	default:
		break;
			
	}
document.getElementById('res').value = r;
}