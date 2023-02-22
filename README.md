# SessionStorageManager

La classe SessionStorageManager permet de manipuler le Session Storage en JavaScript en créant, modifiant et supprimant des clés.

## Utilisation
### Ajouter une nouvelle clé

```javascript
SessionStorageManager.add(key, value);
```

* key : La clé à ajouter au Session Storage.
* value : La valeur associée à la clé.

### Récupérer la valeur d'une clé

```javascript
SessionStorageManager.get(key);
```

* key : La clé dont on veut récupérer la valeur.

La méthode retourne la valeur associée à la clé ou null si la clé n'existe pas.

### Modifier la valeur d'une clé

```javascript
SessionStorageManager.update(key, value);
```

* key : La clé dont on veut modifier la valeur.
* value : La nouvelle valeur associée à la clé.

La méthode ne fait rien si la clé n'existe pas.

### Supprimer une clé

```javascript
SessionStorageManager.remove(key);
```

* key : La clé à supprimer du Session Storage.

La méthode ne fait rien si la clé n'existe pas.

### Effacer toutes les clés du Session Storage

```javascript
SessionStorageManager.clear();
```

La méthode supprime toutes les clés du Session Storage.

### Exemple d'utilisation

```javascript
// Ajouter une nouvelle clé
SessionStorageManager.add("username", "John");

// Récupérer la valeur de la clé
const username = SessionStorageManager.get("username");
console.log(username); // Output : "John"

// Modifier la valeur de la clé
SessionStorageManager.update("username", "Jane");

// Récupérer la valeur de la clé modifiée
const updatedUsername = SessionStorageManager.get("username");
console.log(updatedUsername); // Output : "Jane"

// Supprimer la clé
SessionStorageManager.remove("username");

// Vérifier que la clé a bien été supprimée
const deletedUsername = SessionStorageManager.get("username");
console.log(deletedUsername); // Output : null
```



