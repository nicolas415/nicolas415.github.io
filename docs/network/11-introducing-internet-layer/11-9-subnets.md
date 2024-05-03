# Sous-réseaux

## Le réseau plat (flat network)

Flat Network Design → réseau connecté uniquement par switchs (OSI niveau 2). Toutes les machines peuvent se contacter par broadcast. Facile à implémenter et à gérer.

Cependant, une telle conception viens avec certaines problématiques :

-   **Sécurité** : Le réseau n’étant pas segmenté, on ne peut pas appliquer de politiques de sécurité à des segments individuels du réseau
-   **Résolution des problèmes** : Isoler les problèmes réseau est plus difficile, car le réseau n’est pas segmenté en différents réseaux.
-   **Utilisation excessive d’adresses** : Dans les flat network, on peut avoir beaucoup d’adresses IP gâchées, qui ne pourront pas être utilisées ailleurs sur ce réseau.
-   **Mise à l’échelle et vitesse** : Un réseau plat peut engendrer un forte pression sur le réseau (pas plus de quelques centaines d’équipements).

## Sous réseaux

Une entreprise est par exemple composée de plusieurs sous-réseaux, correspondant aux différents services de l’entreprise.

Sans sous-réseaux, un réseau a une topologie plate (flat network)

Segmenter un réseau en sous-réseaux a plusieurs avantages :

-   Plus facile à gérer, et a faire respecter des exigences techniques et géographiques
-   Optimisation du nombre d’adresses IP disponibles
-   Création de plusieurs réseaux logiques à partir d’un seul préfix réseau
-   Reduction du trafique réseau
-   Plus facile d’appliquer des règles de sécurité réseau

Dans un environnement avec des sous-réseaux, tous les sous réseaux peuvent être connectés à Internet via un routeur unique
