# Implémenter le découpage de sous réseau

## Procédure du subneting

Le subnetting (création de sous réseaux) permet de créer **plusieurs réseaux logiques** à l’intérieur d’un réseau plus grand.

Procédure à suivre pour implémenter des sous réseaux :

-   Déterminer l’adresse IP du réseau sur lequel on se trouve
-   Déterminer le nombre de sous-réseaux nécessaires. Prévoir les potentiels agrandissements du réseau
-   En fonction du nombre de sous réseaux nécessaires, on détermine le nombre de bits qu’on doit emprunter sur les bits machine (host)
-   Déterminer le masque de sous réseau
-   Appliquer le masque de sous réseau à l’adresse IP du réseau pour déterminer les sous-réseaux et les adresses machine disponibles. Déterminer également les adresses réseau et broadcast pour chaque sous-réseau.
-   Assigner les adresses de sous réseau aux sous-réseaux, assigner les adresses hôtes à chaque machines connectées à chaque sous-réseau

## Exemple de découpage :

### Configuration initiale
* L'adresse réseau de départ est **192.168.1.0/24**, ce qui signifie que le réseau a une longueur de masque de **24 bits** (255.255.255.0), ce qui permet d'avoir 256 adresses dans ce réseau (de 192.168.1.0 à 192.168.1.255).

### Decision du nombre de sous réseaux
Disons que l'on veut diviser ce réseau en 4 sous-réseaux plus petits. Pour ce faire, nous devons emprunter des bits supplémentaires à la portion hôte de l'adresse IP

* Un masque de sous-réseau de /24 signifie que les 24 premiers bits sont utilisés pour l'adresse du réseau.
* Pour diviser ce réseau en 4 sous-réseaux, nous devons emprunter 2 bits supplémentaires à la portion hôte (car 2^2 = 4 sous-réseaux).

### Nouveau masque de sous-réseau
Le nouveau masque de sous-réseau sera donc **/26** (24 + 2 = 26). Le masque de sous-réseau devient **255.255.255.192**

| Sous-réseau	| Adresse réseau   | Plage d'adresses utilisables  |Adresse de diffusion |
| ------------- | ---------------  | ----------------------------- | ------------------- |
| Sous-réseau 1	| 192.168.1.0/26   | 192.168.1.1 - 192.168.1.62	   | 192.168.1.63        |
| Sous-réseau 2	| 192.168.1.64/26  | 192.168.1.65 - 192.168.1.126  | 192.168.1.127       |
| Sous-réseau 3	| 192.168.1.128/26 | 192.168.1.129 - 192.168.1.190 | 192.168.1.191       |
| Sous-réseau 4	| 192.168.1.192/26 | 192.168.1.193 - 192.168.1.254 | 192.168.1.255       |

### Équipement à configurer

Les **routeurs** sont les principaux équipements utilisés pour gérer le routage entre sous-réseaux. 

Les routeurs utilisent les masques de sous-réseau pour déterminer si une adresse IP appartient à un réseau local ou doit être acheminée vers un autre réseau. Lorsqu'un sous-réseau est configuré, le routeur utilise ces informations pour gérer le trafic entre les différents sous-réseaux ou vers Internet.

#### Exemple d'une configuration d'un sous réseau

```
Router(config)# interface GigabitEthernet0/1
Router(config-if)# ip address 192.168.1.1 255.255.255.192
Router(config-if)# no shutdown
```


