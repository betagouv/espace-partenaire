# Espace Partenaires

Espace Partenaires is a tool that makes it easy to integrate a MonComptePro button.

It allows you to manage access tokens, the name and description of the project, the URLs where the login button will appear and the authorization request.

## Requirements:

- docker et docker compose
- make
- node js / npm (pour le front)

## Installation

Install locally the application:

```
git clone git@github.com:betagouv/espace-partenaire.git
```

Copy back .env

```
cp back/.env.dist back/.env
```

Copy front .env

```
cp front/.env.dist front/.env
```

Install project:

```
make i
```

## Start backend

Launch backend

```
make sb
```
You can access the project here : http://localhost:3000/welcome

If you want to launch a the front served by the backend:

```
make f
```
You can see the static front on http://localhost:3000

## Start front end for dev

Launch the projet with another node server locally (not on docker this time):

```
make sf
```
You can access it on http://localhost:3001/ :


Enjoy ! ✨
