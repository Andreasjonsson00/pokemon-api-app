# Pokémon App

[Live Demo](https://pokemon-api-app-two.vercel.app/)

Add your favorite Pokémon, add your own nickname and view detailed information about them.

## För och efternamn

Andreas Jonsson Roslund

## Projektbeskrivning

Det här projektet är en React-applikation där användaren kan bläddra bland Pokémon, se detaljer om varje Pokémon och hantera en egen favoritlista. Användaren kan lägga till och ta bort favoriter samt ge sina favorit-Pokémon ett eget nickname.

## Vilket API du använt

Projektet använder [PokeAPI](https://pokeapi.co/) för att hämta information om Pokémon, till exempel namn, bild, typ, vikt, längd och abilities.

## Instruktioner för att köra projektet

[Live Demo](https://pokemon-api-app-two.vercel.app/)

## Lista på implementerade features

- Hämtar Pokémon-data från PokeAPI med Axios
- Visar en lista med Pokémon på startsidan
- Visar detaljsida för varje Pokémon
- React Router DOM med flera routes
- Lägg till Pokémon i favoritlistan
- Ta bort Pokémon från favoritlistan
- Uppdatera favorit med nickname
- Favoriter sparas i localStorage
- Toast-meddelanden visas när favoriter läggs till eller tas bort
- Responsiv layout för mobil och desktop

## Eventuella kända buggar eller begränsningar

- PokeAPI är read-only, så Create/Update/Delete sker endast i applikationens state/localStorage och inte mot det externa API:t
