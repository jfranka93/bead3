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
Használati esetdiagram</br>
![Használati esetdiagram](https://scontent-vie1-1.xx.fbcdn.net/hphotos-xpa1/v/t35.0-12/12562636_1200342653326790_1064156565_o.jpg?oh=56ff2573e9eb56ff90517094b21c5313&oe=56A36954)
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
Felhasználói felületmodell:</br>
</br>
Főoldal</br>
![Főoldal](https://scontent-vie1-1.xx.fbcdn.net/hphotos-xfl1/v/t35.0-12/12562337_1200349996659389_813604182_o.jpg?oh=6beb75ed4b25e0af1038c6f45111c155&oe=56A32837)
Listázás oldal</br>
![Listázás](https://scontent-vie1-1.xx.fbcdn.net/hphotos-xfl1/v/t35.0-12/12620591_1200352326659156_1670836913_o.jpg?oh=f698f2d7a69241761f30cfd907105fea&oe=56A33D8F)

Szerkesztő oldal</br>
![Szerkesztés](https://scontent-vie1-1.xx.fbcdn.net/hphotos-xtp1/v/t35.0-12/12546119_1200353146659074_1160107074_o.jpg?oh=a9f55dcfd4ec9a4669e348ac73c99e67&oe=56A2DA46)

Új felvétele</br>
![Új felvétele](https://scontent-vie1-1.xx.fbcdn.net/hphotos-xtp1/v/t35.0-12/12596787_1200354756658913_123227873_o.jpg?oh=5adc3e628d47f17a5d47ed643fff4d9f&oe=56A21D31)

Osztálymodell</br>
![Osztálymodell](https://scontent-vie1-1.xx.fbcdn.net/hphotos-xlf1/v/t34.0-12/12570862_1200356713325384_912577887_n.jpg?oh=d2853be62233a0b48d948961d8c0221e&oe=56A34921)

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
