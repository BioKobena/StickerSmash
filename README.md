# Sticker Smash

![Sticker Smash](https://res.cloudinary.com/drrf4valz/image/upload/v1739743183/x-laya/meeqcwpinow3i3zxzhso.jpg)

Sticker Smash est une application React Native permettant d'ajouter des stickers et des emojis à des images, avec la possibilité de les sauvegarder. (Inspiré de A à Z de Expo Get Started)

## 🚀 Fonctionnalités

- 📷 Sélection d'images depuis la galerie
- 😀 Ajout de stickers/emojis personnalisés
- 💾 Sauvegarde d'images (mobile et web)
- 🔄 Redémarrage rapide
- 🏗 Interface utilisateur optimisée avec Material UI

## 📦 Installation

### Prérequis

- Node.js (>=23.5.0)
- Expo CLI

### Étapes

1. Clonez le projet :
   ```sh
   git clone https://github.com/BioKobena/stickerSmash
   cd stickerSmash
   ```
2. Installez les dépendances :
   ```sh
   npm install
   ```
3. Lancez l'application :
   ```sh
  npx expo start
   ```

## 📸 Capture d'écran

![Screenshot](https://res.cloudinary.com/drrf4valz/image/upload/v1739743183/x-laya/ueut1twj8niv6syjtmrg.jpg)

![Screenshot](https://res.cloudinary.com/drrf4valz/image/upload/v1739743183/x-laya/meeqcwpinow3i3zxzhso.jpg)

![Screenshot](https://res.cloudinary.com/drrf4valz/image/upload/v1739743183/x-laya/iaps1977ctuj1qgqr6j8.jpg)

## 🛠 Technologies utilisées

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [React Native View Shot](https://github.com/gre/react-native-view-shot)
- [Expo Image Picker](https://docs.expo.dev/versions/latest/sdk/imagepicker/)
- [Expo Media Library](https://docs.expo.dev/versions/latest/sdk/media-library/)
- [Toastify React Native](https://github.com/onemolegames/toastify-react-native)

## 📜 Utilisation

1. Cliquez sur **Choisir une photo** pour sélectionner une image.
2. Ajoutez des stickers/emojis à votre image.
3. Sauvegardez l'image ou redémarrez pour en choisir une autre.

## 🐛 Dépannage

Si vous rencontrez une erreur sur le web :
```txt
The method or property MediaLibrary.saveToLibraryAsync is not available on web
```
➡️ La sauvegarde ne fonctionne que sur mobile. Pour le web, une alternative `dom-to-image` est utilisée.

`@ts-ignore est une alternative pour ignorer des erreurs non valide en TypeScript`

## 🤝 Contribuer

Les contributions sont les bienvenues ! Pour contribuer :

1. Forkez le projet
2. Créez une branche `dev-fork`
3. Faites un commit et poussez vos modifications
4. Ouvrez une pull request
