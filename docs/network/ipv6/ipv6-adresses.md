# Adresses IPv6 et types d'adresses IPv6

**Types d’adress IPv6 :**

-   Unicast
-   Multicast
-   Anycast

## Scopes d’adresses & Préfixes

Un scope d’adresse IPv6 spécifie une région du réseau dans laquelle l’adresse est valide

**Différents scopes :**

-   adresses locales : Commence par **fc00,** et n’est pas utilisé (pas possible de les translater en adresses publiques)
-   link scope : les adresses de ce scope sont appelées “link-local” (**fe80**::/10), et les routeurs ne forwardent pas ces adresses (seulement forwardé par les switchs).
-   site scope : ces adressent passent les routeurs d’un site défini
-   organization scope : Ces adresses peuvent être jointes sur toute une organisation, qui comprend un ou plusieurs sites (organization-local)
-   global network scope : peut être joint partout (global unicast address) (**2000**::/3)
-   Loopback : (**::1**)équivalent à 127.0.0.1 en IPv4
-   Unspecified : (**::**)

## Seuls les 16 bits du milieu de l’adresse (subnet ID) sont adressés :

-   48 1er bits → opérateur
-   16 suivants → host
-   64 suivants → adresse mac du routeur qui part sur internet, mais pour les hosts, on a soit un champ aléatoire soit l’adresse mac de l’équipement

## Multicast IPv6

-   Multicaste IPv6 commence par ff00::/8

## Anycast IPv6

Peu utilisé
