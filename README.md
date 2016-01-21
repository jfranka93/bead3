#Dokumentáció

#Ájemdíbí- Á jó eszméletlen mozik databéze íbí

#3. beadandó

##Követelmények

###Az oldal filmek tárolásának feladatát látja el.

Funkcionális követelmények:</br>
  A felhasználó tud új elemet felvenni</br>
  A felhasználó tudja módosítani az egyes elemeket</br>
  A felhasználó tudja törölni az egyes elemeket</br>
Nem funkcionális követelmények:</br>
  A megjelenő oldal egyértelműen kezelhető</br>
</br>
Movie: A film adatait tároló objektum. Tagjai:</br>
title: A film címe, string</br>
createdate: A film elkészülésének dátuma, date</br>
actors: film szereplőinek listája, egy-a-sokhoz actor</br>
</br>
Actor: A színész adatait tároló objektum. Tagjai:</br>
name: Színész neve, string</br>
</br>
list: A filmek listája.</br>
add: Új film felvétele űrlappal.</br>
edit: Egy létező film módosítása, szereplők hozzáadásának lehetősége.</br>
</br>
Használatieset-modell:</br>
Használati eset diagram</br> Ábra
Tervezés</br>
Architektúra terv</br>
</br>
Oldaltérkép</br>
Főoldal</br>
Listázó oldal</br>
Végpontok:</br>
'/' - Főoldal</br>
'list' - Filmek listája</br>
'add' - Új film felvétele</br>
'movies/edit/:id' - film módosítása, szereplők hozzáadása</br>
Felhasználó felületmodell:</br>
</br>
Főoldal</br> Ábra

Listázó oldal</br> Ábra

Megtekintő oldal</br> Ábra

Szerkesztő oldal</br> Ábra

Új felvétele</br> Ábra

Osztálymodell</br> Ábra

Dinamikus működés </br>Ábra
</br>
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
