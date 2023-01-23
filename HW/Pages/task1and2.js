// Task 1
// var a = 1, b = 1;
// console.log( a++ + ++a); 	// 4
// console.log( ++b + b++); 	// 4
// console.log( a + b); 	//6

//Task 2
function greetings() {
	// DO NOT CHANGE
	// взимаме въведената от потребителя стойност за град:
	var userTown = document.getElementById("town").value;
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
	// Task 1: Изпишете в конзолата съдържанието на променливата userTown
console.log(userTown)
let status = ['Здравей', 'Salut', 'Hi']
	
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
	// Task 2:
	// ако потребителят е избрал 'София', то да се изпише в конзолата:
	// "Здравей!"
	// ако потребителят е избрал 'Париж', то да се изпише в конзолата:
	// "Salut!"
	// ако потребителят е избрал 'Лондон', то да се изпише в конзолата:
	// "Hi!"
	// --> YOUR CODE STARTS HERE <--
    if (userTown === "София"){
        console.log(status[0]);
    }else if (userTown === "Париж"){
        console.log(status[1]);
    }else{
        console.log(status[2]);
    }	
	
	// --> YOUR CODE ENDS HERE <--

	// DO NOT CHANGE
	// внимавайте, да не изтриете затварящата '}' фигурна скоба по-долу :)
}
