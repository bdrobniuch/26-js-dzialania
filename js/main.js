/*
Stwórz plik "main.js".

Napisz funkcję, która przyjmuje jako parametry dwie liczby, które przekażesz podczas wywoływania funkcji.

Funkcja ma dodawać, odejmować i mnożyć liczby przekazane do parametrów i wyświetlać w konsoli następujące stringi:

1. "Wynik dodawania wynosi x" 
2. "Wynik odejmowania wynosi x" 
3. "Wynik mnożenia wynosi x"

Gdzie x jest wynikiem danego działania.

Natomiast jeżeli wynikiem jest liczba ujemna, w konsoli powinien pojawić się string:
"Wynik jest ujemny"

Plik wgraj do zdalnego repozytorium i podeślij link do sprawdzenia.
*/


function f(v1,v2)
{
   var i;
    
   i = v1 +v2; 
   if (i>=0) {
       console.log("Wynik dodawania wynosi ",i );
   } else {
       console.log("Wynik jest ujemny");
   }
    
       i = v1 -v2; 
   if (i>=0) {
       console.log("Wynik odejmowania wynosi ",i );
   } else {
       console.log("Wynik jest ujemny");
   }
    
       i = v1 *v2; 
   if (i>=0) {
       console.log("Wynik mnożenia wynosi ",i );
   } else {
       console.log("Wynik jest ujemny");
   }
}



