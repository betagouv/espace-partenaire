# Espace Partenaires

Espace Partenaires est un outil facilitant l'intégration d'un bouton MonComptePro.
Il permet de gérer les jetons d'accès, le nom et la description du projet, les URLs où apparaitront le bouton de connexion et la demande d'habilitation.

## Requirements:

- docker et docker compose
- make
- node js / npm (pour le front)

## Installation

Installer l'application en local :

```
git clone git@github.com:betagouv/espace-partenaire.git
```

Copier .env du back

```
cp back/.env.dist back/.env
```

Copier .env du front

```
cp front/.env.dist front/.env
```

Installer le projet :

```
make i
```

Lancer le projet back-end accessible sur http://localhost:3000/ :

```
make sb
```

Lancer le projet front-end accessible sur http://localhost:3001/ :

```
make sf
```

Enjoy ! ✨
