class SessionStorageManager {
  // Méthode pour ajouter une nouvelle clé
  static add(key, value) {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  // Méthode pour récupérer la valeur d'une clé
  static get(key) {
    const value = sessionStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    }
    return null;
  }

  // Méthode pour modifier la valeur d'une clé
  static update(key, value) {
    if (sessionStorage.getItem(key)) {
      sessionStorage.setItem(key, JSON.stringify(value));
    }
  }

  // Méthode pour supprimer une clé
  static remove(key) {
    sessionStorage.removeItem(key);
  }

  // Méthode pour effacer toutes les clés du Session Storage
  static clear() {
    sessionStorage.clear();
  }
}
