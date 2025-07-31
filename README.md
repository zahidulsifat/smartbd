# Smart Technologies (BD) Ltd - React Native App

A React Native mobile application for Smart Technologies (BD) Ltd, Bangladesh's leading ICT distribution company.

## Features

- 📱 Cross-platform mobile app (iOS & Android)
- 🎨 Modern, responsive design
- 🚀 Fast navigation with React Navigation
- 💎 TypeScript support
- 🎯 Professional business presentation
- 📧 Contact form functionality
- 🌟 Gradient backgrounds and smooth animations

## Screens

- **Home**: Company overview with hero section and solutions showcase
- **About**: Company history, mission, and core values
- **Products**: Technology solutions and service offerings
- **Blog**: Company strengths and industry insights
- **Contact**: Contact information, location, and inquiry form

## Tech Stack

- **React Native 0.72.6** - Cross-platform mobile development
- **TypeScript** - Type-safe development
- **React Navigation 6** - Navigation and routing
- **Expo Linear Gradient** - Beautiful gradient effects
- **Expo** - Development and deployment platform

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn
- Expo CLI (optional, for easier development)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd SmartTechnologiesApp
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
# or with expo
expo start
```

4. Run on device/simulator:
```bash
# iOS
npm run ios

# Android
npm run android
```

## Project Structure

```
SmartTechnologiesApp/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Card.tsx
│   │   └── Button.tsx
│   ├── screens/             # App screens
│   │   ├── HomeScreen.tsx
│   │   ├── AboutScreen.tsx
│   │   ├── ProductsScreen.tsx
│   │   ├── BlogScreen.tsx
│   │   └── ContactScreen.tsx
│   └── styles/
│       └── globalStyles.ts  # Shared styles and theme
├── assets/                  # Images and static assets
├── App.tsx                  # Main app component
└── package.json
```

## Features to Add

- [ ] Add actual company logo and images
- [ ] Implement proper icon library (react-native-vector-icons)
- [ ] Add form validation and submission
- [ ] Implement proper map integration
- [ ] Add loading states and error handling
- [ ] Add animations and micro-interactions
- [ ] Implement offline support
- [ ] Add push notifications

## Customization

### Colors and Theme

Edit `src/styles/globalStyles.ts` to customize the app's color scheme and spacing.

### Navigation

The app uses React Navigation with a stack navigator. Add new screens in `App.tsx`.

### Components

All components are TypeScript-based and use StyleSheet for styling. They follow React Native best practices.

## Original Website

This React Native app is converted from the original HTML/CSS website which included:
- Modern minimal design
- Responsive layout
- Professional business presentation
- Contact forms and interactive elements

## License

Private - Smart Technologies (BD) Ltd

## Support

For technical support or questions about this app, contact the development team.
