SessionStorageManager et un classe JavaScript qui permet de manipuler le Session Storage en créant, modifiant et supprimant des clés .

Voici un exemple d'utilisation de cette classe :

SessionStorageManager.add("username", "John");
const username = SessionStorageManager.get("username");
console.log(username); // Output : "John"

SessionStorageManager.update("username", "Jane");
const updatedUsername = SessionStorageManager.get("username");
console.log(updatedUsername); // Output : "Jane"

SessionStorageManager.remove("username");
const deletedUsername = SessionStorageManager.get("username");
console.log(deletedUsername); // Output : null


