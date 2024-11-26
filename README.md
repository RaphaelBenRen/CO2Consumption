# CO2 Consumption Scanner

## Résultats et Aperçu du Projet

### Objectifs :
Le **CO2 Consumption Scanner** est une application web permettant aux utilisateurs de scanner les codes-barres des produits et de consulter leur consommation de CO2 ainsi que d'autres informations environnementales comme l'éco-score. L'application propose également des alternatives plus écologiques pour les produits à forte empreinte carbone.

### Motivation et Importance :
Dans un contexte de prise de conscience écologique croissante, il est essentiel que les consommateurs puissent prendre des décisions éclairées concernant l'impact environnemental de leurs achats. Ce projet répond à cette demande en permettant un accès rapide aux informations écologiques des produits via un simple scan de code-barres.

### Résultats Attendus :
- Permettre aux utilisateurs de scanner un code-barres via la caméra de leur appareil.
- Afficher des informations sur la consommation de CO2 du produit, son éco-score, et son impact environnemental.
- Suggérer des produits alternatifs plus écologiques lorsque nécessaire.

### Contexte :
Ce projet a pour but de sensibiliser les consommateurs à la réduction de leur empreinte carbone en facilitant l'accès à des informations environnementales via une interface simple et intuitive.

---


### Dépendances

- **QuaggaJS** : Une bibliothèque JavaScript pour scanner les codes-barres via la caméra.
- **Open Food Facts API** : Fournit des données sur les produits alimentaires, notamment sur l'impact environnemental, l'éco-score et la consommation de CO2.

## Mesures de Performance

### Critères de Performance

- **Précision du Scanner** : 
  - Capable de lire les codes-barres EAN standards.
  - Temps de détection moyen : **< 3 secondes** dans des conditions lumineuses normales.

- **Vitesse de l'API** :
  - Temps moyen pour récupérer les données produit : **1 à 3 secondes** (variable selon la qualité de la connexion Internet).

- **Efficacité Mémoire** :
  - Faible consommation de ressources grâce à l'utilisation de requêtes asynchrones.

---

### Améliorations Futures

- **Optimisation de la Détection** :
  - Améliorer la précision du scanner dans des environnements de faible luminosité ou avec des codes-barres mal imprimés.

- **Réduction de la Latence** :
  - Optimiser les requêtes API pour diminuer les temps de réponse.



## Utilisation

1. **Ouvrez** la page `index.html` dans un navigateur moderne (par exemple, Chrome ou Firefox).
2. **Cliquez** sur le bouton **Start Scanning** pour activer le scanner.
3. **Placez** un produit avec un code-barres devant la caméra.
4. **Visualisez** les informations du produit :
   - Consommation de CO2.
   - Éco-score.
   - Alternatives proposées (si disponibles) pour un impact environnemental réduit.


## Références et Documentation

- **QuaggaJS** : [Documentation officielle](https://github.com/serratus/quaggaJS)  
  Librairie utilisée pour scanner les codes-barres.

- **Open Food Facts API** : [Base de données produits](https://world.openfoodfacts.org/data)  
  API utilisée pour récupérer les informations environnementales des produits.

- **Algorithme de Calcul du CO2** :
  - Basé sur l'éco-score retourné par l'API Open Food Facts.
  - Une transformation logarithmique est appliquée pour estimer la consommation de CO2.


## Problèmes et Contributions

### Problèmes Connus
- **Difficultés de Lecture** : 
  - Les codes-barres mal imprimés ou scannés dans des environnements mal éclairés peuvent poser problème.
- **Données Incomplètes** :
  - Certaines informations sur les produits peu communs ou récemment ajoutés peuvent être manquantes.

### Comment Contribuer
1. **Signalez les Bugs** : Utilisez les issues GitHub pour signaler les problèmes rencontrés.
2. **Ajoutez des Améliorations** : Proposez de nouvelles fonctionnalités ou optimisez les performances du projet.
3. **Forkez le Projet** :
   ```bash
   git fork https://github.com/your-username/CO2Consumption.git


## Travaux Futurs

### Améliorations Potentielles
- **Précision du Scanner** :  
  Développer des algorithmes plus robustes pour améliorer la lecture dans des conditions difficiles, notamment en cas de faible luminosité ou pour des codes endommagés.

- **Base de Données Étendue** :  
  Ajouter davantage de produits à la base de données, avec des informations détaillées sur leur impact environnemental pour une meilleure couverture.

- **Calcul Plus Précis de l'Empreinte Carbone** :  
  Intégrer des API spécialisées pour affiner l'évaluation de l'empreinte carbone, en tenant compte de données supplémentaires.

---

### Développement Futur
- **Version Mobile** :  
  Créer une application mobile dédiée pour offrir une expérience utilisateur optimisée et adaptée aux petits écrans, avec des performances améliorées sur les appareils mobiles.

- **Recommandations Personnalisées** :  
  Implémenter une fonctionnalité permettant de proposer des suggestions basées sur les préférences écologiques des utilisateurs, avec la possibilité de sauvegarder leurs produits favoris pour un accès rapide.









