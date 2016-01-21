#Dokumentáció

#Ájemdíbí- Á jó eszméletlen mozik databéze íbí

#3. beadandó

##Követelmények

###Az oldal filmek tárolásának feladatát látja el.

Funkcionális követelmények:
  A felhasználó tud új elemet felvenni
  A felhasználó tudja módosítani az egyes elemeket
  A felhasználó tudja törölni az egyes elemeket
Nem funkcionális követelmények:
  A megjelenő oldal egyértelműen kezelhető

Film: A film adatait tároló objektum. Tagjai:
title: A film címe, string
createdate: A film elkészülésének dátuma, date
actors: film szereplőinek listája, egy-a-sokhoz actor

list: A filmek listája.
add: Új film felvétele űrlappal.
edit: Egy létező film módosítása, szereplők hozzáadásának lehetősége.

Használatieset-modell:
Használati eset diagram</br> Ábra
Tervezés
Architektúra terv

Oldaltérkép
Főoldal
Listázó oldal
Végpontok:
'/' - Főoldal
'list' - Filmek listája
'add' - Új film felvétele
'movies/edit/:id' - film módosítása, szereplők hozzáadása
Felhasználó felületmodell:

Főoldal</br> Ábra

Listázó oldal</br> Ábra

Megtekintő oldal</br> Ábra

Szerkesztő oldal</br> Ábra

Új felvétele</br> Ábra

Osztálymodell</br> Ábra

Dinamikus működés Ábra

Implementáció
Fejlesztői környezet: Cloud 9 felhőalapú IDE, ami a www.c9.io linken keresztül elérhető. Virtuális gépként(szerverként) is tudjuk használni, amit szabadon szerkeszthetünk, valamint megoszthatunk másokkal és a kódunkba is betekintést engedhetünk. A fejlesztés során az EMBER.js javascript nyelv lett használva.
Könyvtárstruktúrában lévő mappák funkciója: Az app mappán belül külön könyvtára van minden modellnek, templatenek és routenak. Az oldal megjelenéséért a templatek (hbs fájlok) felelnek, az objektumok szerkezetét a modellek adják, az adapter pedig biztosítja a kapcsolatot a szerverrel(EmberFire).
Felhasználói dokumentáció
A futtatáshoz ajánlott hardver-, szoftver konfiguráció:
2 GB memória
3.-ik / 4.-edik generációs i5 processzor
Windows 7 vagy újabb
Google Chrome
A program használata: A felhasználó a kezdőlapon találja magát, ahonnan elnavigálhat a Listázás oldalra, vagy felvehet a listára új elemet a Hozzáadás oldalon.
Ha új elemet vesz fel, az megjelenik a Listázás oldalon. Itt szerkesztheti, megtekintheti, illetve törölheti is az adott filmet, annak szereplőit.
