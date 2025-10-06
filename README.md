"# TEQO-Tweaker

## 📖 Description

TEQO-Tweaker est une table de mixage audio moderne qui permet de contrôler le volume de chaque application Windows de manière indépendante. Grâce à une interface utilisateur élégante et une intégration matérielle optionnelle (Arduino), vous pouvez gérer précisément le son de vos applications en temps réel.

## ✨ Fonctionnalités

- **Contrôle individuel du volume** : Ajustez le volume de chaque application Windows séparément
- **Gestion du volume maître** : Contrôle global du volume système
- **Profils personnalisables** : Créez et gérez différents profils audio (Desktop, Game, Spotify, etc.)
- **Interface graphique moderne** : Interface utilisateur intuitive construite avec Electron et Bulma CSS
- **Support Arduino** : Intégration optionnelle avec des contrôleurs matériels Arduino pour un contrôle physique
- **Bindings configurables** : Associez des boutons et des sliders à des actions spécifiques
- **Détection de connexion** : Détection automatique des périphériques Arduino connectés

## 🏗️ Architecture Technique

Le projet utilise une architecture hybride :

- **Frontend** : Electron + HTML/CSS (Bulma) + JavaScript (jQuery)
- **Backend** : Python 3 pour le contrôle audio via la bibliothèque pycaw
- **Communication** : Python Shell pour l'interaction entre Electron et Python
- **Matériel** : Support Arduino optionnel pour les contrôles physiques (sliders, boutons)

### Composants principaux

1. **Interface Electron** (`resources/app/main.js`) : Application desktop cross-platform
2. **Contrôleur Audio Python** (`scripts/changeVolume.py`) : Gestion du volume Windows via pycaw
3. **Système de Bindings** (`bindings.json`) : Configuration des profils et des associations
4. **Listener Serial** (`scripts/SerialListener.py`) : Communication avec les périphériques Arduino

## 📋 Prérequis

### Logiciels requis

- **Windows** (le contrôle audio utilise l'API Windows)
- **Node.js** (version 12 ou supérieure)
- **Python 3** (pour les scripts de contrôle audio)
- **npm** ou **yarn** (gestionnaire de paquets)

### Dépendances Python

```bash
pip install pycaw
pip install comtypes
pip install pyserial
```

### Dépendances Node.js

Les principales dépendances sont :
- `electron` : Framework pour l'application desktop
- `python-shell` : Communication avec les scripts Python
- `bulma` : Framework CSS pour l'interface
- `jquery` : Manipulation DOM
- `usb-detection` : Détection des périphériques USB

## 🚀 Installation

1. **Cloner le repository**
```bash
git clone https://github.com/Ekyoz/TEQO-Tweaker.git
cd TEQO-Tweaker
```

2. **Installer les dépendances Node.js**
```bash
npm install
```

3. **Installer les dépendances Python**
```bash
pip install pycaw comtypes pyserial
```

4. **Lancer l'application**
```bash
cd resources/app
npm start
```

## 🎮 Utilisation

### Interface Utilisateur

L'application propose plusieurs pages :

- **Home** : Vue d'ensemble avec le profil actuel et l'état de la connexion
- **Profiles** : Gestion des différents profils audio (Desktop, Game, Spotify, Default)
- **Devices** : Configuration et état des périphériques connectés

### Système de Profils

Les profils permettent de définir des configurations audio spécifiques. Chaque profil peut avoir :

- Un nom personnalisé
- Un logo
- Des bindings spécifiques (associations bouton/slider → action)
- Une configuration MIDI optionnelle

### Configuration des Bindings

Le fichier `bindings.json` définit les associations entre les contrôles et les actions :

```json
{
  "profiles": {
    "default": {
      "name": "Desktop",
      "logo": "lorem.png",
      "midi": "true",
      "bindings": {
        "btn_1": "mute",
        "slider_1": "volume_app"
      }
    }
  },
  "current": "default"
}
```

### Contrôles disponibles

- **Sliders** : Contrôle du volume (0-100%)
- **Boutons** : Actions de mute/unmute
- **Profils** : Changement rapide de configuration

### Intégration Arduino

Si vous utilisez un contrôleur Arduino :

1. Connectez votre Arduino via USB
2. L'application détectera automatiquement la connexion
3. Les contrôles physiques (sliders, boutons) seront mappés selon votre configuration

Les données sont envoyées via le port série au format :
- `sld1:XXX` - Slider 1 (volume maître)
- `sld2:XXX` - Slider 2 (application spécifique 1)
- `sld3:XXX` - Slider 3 (application spécifique 2)
- `sld4:XXX` - Slider 4 (application spécifique 3)

## 📁 Structure du Projet

```
TEQO-Tweaker/
├── resources/
│   └── app/
│       ├── main.js           # Point d'entrée Electron
│       ├── html/             # Pages HTML
│       ├── css/              # Styles CSS
│       ├── js/               # Scripts JavaScript
│       └── img/              # Images et icônes
├── scripts/
│   ├── Actions.py            # Actions audio
│   ├── changeVolume.py       # Contrôleur de volume
│   ├── ConnectionChecker.py  # Détection Arduino
│   ├── SerialListener.py     # Listener port série
│   └── main.py               # Script principal Python
├── bindings.json             # Configuration des profils
├── settings.json             # Paramètres de l'application
└── package.json              # Dépendances Node.js
```

## 🔧 API Audio

### AudioController (Python)

La classe `AudioController` offre plusieurs méthodes :

- `set_volume(decibels)` : Définir le volume (0.0 - 1.0)
- `increase_volume(decibels)` : Augmenter le volume
- `decrease_volume(decibels)` : Diminuer le volume
- `mute()` : Couper le son
- `unmute()` : Réactiver le son
- `master(decibels)` : Contrôler le volume maître
- `process_volume()` : Obtenir le volume actuel

### Exemple d'utilisation

```python
from changeVolume import AudioController

# Contrôler le volume de Spotify
spotify = AudioController("Spotify.exe")
spotify.set_volume(0.5)  # 50%

# Contrôler le volume maître
master = AudioController(None)
master.master(0.75)  # 75%
```

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

1. Fork le projet
2. Créer une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📝 License

Ce projet utilise la license MIT. Voir le fichier `LICENSE` pour plus de détails.

## 👤 Auteur

**Ekyoz**

- GitHub: [@Ekyoz](https://github.com/Ekyoz)
- Repository: [TEQO-Tweaker](https://github.com/Ekyoz/TEQO-Tweaker)

## 🐛 Signaler un Bug

Si vous rencontrez un problème, veuillez ouvrir une issue sur [GitHub Issues](https://github.com/Ekyoz/TEQO-Tweaker/issues).

## 📚 Ressources

- [Documentation Electron](https://www.electronjs.org/docs)
- [Documentation pycaw](https://github.com/AndreMiras/pycaw)
- [Documentation Arduino](https://www.arduino.cc/reference/en/)
- [Bulma CSS Framework](https://bulma.io/)

---

**Note** : Ce projet nécessite Windows pour le contrôle audio via l'API Windows Core Audio." 
