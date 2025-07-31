import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Linking} from 'react-native';
import {Colors, Spacing, FontSizes, FontWeights, BorderRadius} from '../styles/globalStyles';

const Footer: React.FC = () => {
  const handleSocialPress = (url: string) => {
    Linking.openURL(url);
  };

  const socialLinks = [
    {icon: 'f', url: 'https://facebook.com'},
    {icon: 't', url: 'https://twitter.com'},
    {icon: 'i', url: 'https://instagram.com'},
    {icon: 'in', url: 'https://linkedin.com'},
  ];

  return (
    <View style={styles.footer}>
      <View style={styles.container}>
        <Text style={styles.title}>Smart Technologies (BD) Ltd</Text>
        <Text style={styles.description}>
          Your trusted partner in digital transformation. We provide cutting-edge technology 
          solutions that empower businesses to achieve their goals and stay ahead in the digital age.
        </Text>
        
        <View style={styles.socialIcons}>
          {socialLinks.map((social, index) => (
            <TouchableOpacity
              key={index}
              style={styles.socialIcon}
              onPress={() => handleSocialPress(social.url)}>
              <Text style={styles.socialIconText}>{social.icon}</Text>
            </TouchableOpacity>
          ))}
        </View>
        
        <Text style={styles.credit}>
          Crafted with ❤️ by <Text style={styles.creditHighlight}>Zahidul Sifat</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: Colors.textPrimary,
    paddingVertical: Spacing.xxl,
    paddingHorizontal: Spacing.md,
  },
  container: {
    maxWidth: 1200,
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: FontSizes.xxlarge,
    fontWeight: FontWeights.semibold,
    color: Colors.backgroundWhite,
    marginBottom: Spacing.md,
    textAlign: 'center',
  },
  description: {
    fontSize: FontSizes.medium,
    color: Colors.backgroundWhite,
    opacity: 0.8,
    marginBottom: Spacing.lg,
    textAlign: 'center',
    lineHeight: 24,
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: Spacing.md,
    marginBottom: Spacing.lg,
  },
  socialIcon: {
    width: 48,
    height: 48,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialIconText: {
    color: Colors.backgroundWhite,
    fontSize: FontSizes.large,
    fontWeight: FontWeights.medium,
  },
  credit: {
    fontSize: FontSizes.small,
    color: Colors.backgroundWhite,
    opacity: 0.7,
    textAlign: 'center',
  },
  creditHighlight: {
    color: Colors.accent,
    fontWeight: FontWeights.medium,
  },
});

export default Footer;
