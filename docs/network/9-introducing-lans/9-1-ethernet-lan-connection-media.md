# Ethernet LAN Connection Media

## Intro

Pour connecter un switch à un réseau local, le média le plus répandu est l’Ethernet

Ethernet n’est pas juste un type de câble ou de protocole, c’est un standard (spécifications de câblages et de signaux) publié par l’IEEE

## Format de notation des câbles

Les standards prennent le format suivant (ex: 1000BASE-T) :

-   **1000** : Vitesse de 1000 Mb/s
-   **BASE** : signalétique “baseband” (seul les signaux Ethernet sont transmis par le câble)
-   **T** : Cable à paire torsadées

| Equipement    | 100BASE-TX | 100BASE-FX    | 1000BASE-T | 1000BASE-SX   | 1000BASE-LX   |
| ------------- | ---------- | ------------- | ---------- | ------------- | ------------- |
| Media (câble) |            |               |            |               |               |
| Longueur Max  | 100m       | 400m          | 100m       | 275m-550m     | 5-10 km       |
| Connecteur    | RJ-45      | Duplex MIC ST | RJ-45      | Fibre optique | Fibre optique |

## Transmission du signal

→ Les transmetteurs (transmitters) sont utilisés pour convertir un signal électrique en signal optique

→ Les receveurs convertissent un signal optique en signal électrique

De nombreuses sources (moteurs électriques, avions, éclairs, bruit cosmique etc.) peuvent créer des interférences sur les signaux électriques transmis dans les câbles

## Câbles en cuivre

La plupart des reseaux utilisent des câbles en cuivre non blindés à paire torsadée (Unshielded twisted-pair (UTP), de longueur moyenne comparé à la fibre optique.

| Caractéristiques      | Valeurs                |
| --------------------- | ---------------------- |
| Vitesse               | 10Mb/s à 40 Gb/s       |
| Cout par nœud         | Faible                 |
| Câbles et connecteurs | Petit                  |
| Longueur max          | 100m (30m pour 40Gb/s) |

| Catégories de câble UTP | Vitesse de transfert |
| ----------------------- | -------------------- |
| 5                       | 100Mb/s              |
| 5e                      | 1Gb/s                |
| 6                       | 10Gb/s               |
| 6a                      | 10Gb/s               |
| 7                       | 10Gb/s               |
| 8                       | 40Gb/s               |

## Connecteurs RJ-45

Un connecteur RJ-45 se compose de 8 pins (pin 1 à gauche → pin 8 à droite)

## Power over Ethernet

Power over Ethernet (PoE) → permet au câble Ethernet de fournir une alimentation électrique en parallèle des données (possible avec câbles ≥ catégorie 5)

## Câble UTP droit ou croisé ?

-   câbles droits → connexion de machines n’ayant pas la même connexion électrique
-   câble croisé → connexion des machines ayant les mêmes connexions électriques

Les câbles croisés sont sont considérés comme obsolètes, car les équipements actuels permettent de faire des connexions croisées dynamiquement.

## Fibre optique

La fibre optique est composée d’une fibre de verre très pure (silice), et n’est pas plus large qu’une cheveux humain. Cette fibre sert de conducteur pour des signaux lumineux.

La lumière circule dans la partie “core” de la fibre optique. Le “cladding” qui entoure le “core” sert à confiner la lumière. Le diamètre du “core” est de 5 micromètres (en comparaison, un cheveux fait 50 micrometres de diamètre).

### Types de fibres

-   Fibre multi-mode (Multi Mode Fiber, MMF) :
    -   Communications courte distance
    -   La lumière peut emprunter plusieurs chemins pour traverser le “core” du câble. On peut appeler ces chemins des “modes”
    -   Source lumineuse : LED
-   Fibre simple-mode (Single-Mode Fiber, SMF)

    -   Communications longue distance
    -   Un seul chemin (mode) possible pour la lumière dans la fibre (plus ou moins)
    -   Source lumineuse (laser)

## Types de connecteurs fibre

En général, les organisations utilisent le même type de connecteur pour tous les câblages fibre MMF, et le même type de connecteur pour tous les câblages SMF. Il existe 70 types de connecteurs fibre à ce jour.
Les connecteurs fibres les plus courants :

-   **LC** : équipements d’entreprise, modules Small Form-Factor Pluggable (SFP)
-   **SC** : équipement d’entreprise
-   **ST** : patch panels (?), durabilité
-   **FC** : patch panels (?), utilisé par les fournisseurs de service réseau
-   **MT-RJ** : deux connecteurs fibre (transmission et réception)
