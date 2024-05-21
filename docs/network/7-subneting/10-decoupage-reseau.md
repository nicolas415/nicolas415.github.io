# Implémenter le découpage de sous réseau

Le subnetting (création de sous réseaux) permet de créer plusieurs réseaux logiques à l’intérieur d’un réseau plus grand.

Procédure à suivre pour implémenter des sous réseaux :

-   Déterminer l’adresse IP du réseau sur lequel on se trouve
-   Déterminer le nombre de sous-réseaux nécessaires. Prévoir les potentiels agrandissements du réseau
-   En fonction du nombre de sous réseaux nécessaires, on détermine le nombre de bits qu’on doit emprunter sur les bits machine (host)
-   Déterminer le masque de sous réseau
-   Appliquer le masque de sous réseau à l’adresse IP du réseau pour déterminer les sous-réseaux et les adresses machine disponibles. Déterminer également les adresses réseau et broadcast pour chaque sous-réseau.
-   Assigner les adresses de sous réseau aux sous-réseaux, assigner les adresses hôtes à chaque machines connectées à chaque sous-réseau
