import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const Colors = {
  primary: '#000',
  secondary: '#666',
  accent: '#0066ff',
  backgroundLight: '#fafafa',
  backgroundWhite: '#fff',
  textPrimary: '#1a1a1a',
  textSecondary: '#666',
  borderColor: '#e1e1e1',
  gradientStart: '#667eea',
  gradientEnd: '#764ba2',
  error: '#ff4757',
};

export const Spacing = {
  xs: 8,
  sm: 16,
  md: 24,
  lg: 32,
  xl: 48,
  xxl: 64,
};

export const FontSizes = {
  small: 14,
  medium: 16,
  large: 18,
  xlarge: 20,
  xxlarge: 24,
  huge: 32,
  massive: 48,
};

export const FontWeights = {
  light: '300' as const,
  normal: '400' as const,
  medium: '500' as const,
  semibold: '600' as const,
  bold: '700' as const,
};

export const BorderRadius = {
  small: 4,
  medium: 8,
  large: 12,
  xlarge: 16,
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundWhite,
  },
  content: {
    maxWidth: 1200,
    width: '100%',
    alignSelf: 'center',
    paddingHorizontal: Spacing.md,
  },
  sectionTitle: {
    fontSize: FontSizes.huge,
    fontWeight: FontWeights.bold,
    color: Colors.textPrimary,
    marginBottom: Spacing.md,
    textAlign: 'center',
  },
  sectionSubtitle: {
    fontSize: FontSizes.large,
    color: Colors.textSecondary,
    marginBottom: Spacing.xxl,
    textAlign: 'center',
    lineHeight: 28,
  },
  card: {
    backgroundColor: Colors.backgroundWhite,
    borderWidth: 1,
    borderColor: Colors.borderColor,
    borderRadius: BorderRadius.medium,
    padding: Spacing.xl,
    marginBottom: Spacing.lg,
  },
  button: {
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.xl,
    borderRadius: BorderRadius.medium,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 180,
  },
  buttonText: {
    fontSize: FontSizes.medium,
    fontWeight: FontWeights.semibold,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.borderColor,
    borderRadius: BorderRadius.medium,
    padding: Spacing.md,
    fontSize: FontSizes.medium,
    backgroundColor: Colors.backgroundWhite,
  },
  grid: {
    gap: Spacing.lg,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export const screenWidth = width;
export const screenHeight = height;
