import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import LinearGradient from 'expo-linear-gradient';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Button from '../components/Button';
import {Colors, Spacing, FontSizes, FontWeights, globalStyles, BorderRadius} from '../styles/globalStyles';
import {RootStackParamList} from '../../App';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const ProductsScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();

  const products = [
    {
      title: 'Hardware Solutions',
      description: 'Enterprise servers, workstations, networking equipment, and storage solutions from leading manufacturers like Dell, HP, Cisco, and more.',
    },
    {
      title: 'Cloud Services',
      description: 'Public, private, and hybrid cloud solutions including migration services, cloud storage, and managed cloud infrastructure.',
    },
    {
      title: 'Managed IT Services',
      description: 'Complete IT management including 24/7 monitoring, help desk support, cybersecurity, and infrastructure maintenance.',
    },
  ];

  const features = [
    {
      image: 'https://via.placeholder.com/300x200/667eea/ffffff?text=World+Class+Brands',
      title: 'World Class Brands',
      description: 'Partnerships with over 100 leading global technology brands ensuring quality and reliability.',
    },
    {
      image: 'https://via.placeholder.com/300x200/764ba2/ffffff?text=Premium+Support',
      title: 'Premium Support',
      description: 'Dedicated technical support team providing expert assistance and maintenance services.',
    },
    {
      image: 'https://via.placeholder.com/300x200/667eea/ffffff?text=Warranty+Coverage',
      title: 'Comprehensive Warranty',
      description: 'Extended warranty coverage and replacement services to ensure business continuity.',
    },
  ];

  return (
    <ScrollView style={globalStyles.container} showsVerticalScrollIndicator={false}>
      <Header title="Our Product Portfolio" />

      <View style={styles.productsSection}>
        <View style={globalStyles.content}>
          <Text style={globalStyles.sectionTitle}>Technology Solutions</Text>
          <Text style={globalStyles.sectionSubtitle}>
            Comprehensive range of technology products and services for modern businesses
          </Text>
          
          <View style={styles.grid}>
            {products.map((product, index) => (
              <Card
                key={index}
                title={product.title}
                description={product.description}
                style={styles.cardSpacing}
              />
            ))}
          </View>
        </View>
      </View>

      <View style={styles.featuresSection}>
        <View style={globalStyles.content}>
          <Text style={globalStyles.sectionTitle}>What Sets Us Apart</Text>
          <Text style={globalStyles.sectionSubtitle}>
            Why businesses choose Smart Technologies for their IT needs
          </Text>
          
          <View style={styles.featuresGrid}>
            {features.map((feature, index) => (
              <View key={index} style={styles.featureCard}>
                <Image
                  source={{uri: feature.image}}
                  style={styles.featureImage}
                  resizeMode="cover"
                />
                <Text style={styles.featureTitle}>{feature.title}</Text>
                <Text style={styles.featureDescription}>{feature.description}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      <LinearGradient
        colors={[Colors.gradientStart, Colors.gradientEnd]}
        style={styles.ctaSection}>
        <View style={globalStyles.content}>
          <Text style={styles.ctaTitle}>Need a Custom Solution?</Text>
          <Text style={styles.ctaDescription}>
            Let's discuss your specific requirements and create a tailored technology solution for your business.
          </Text>
          <Button
            title="Contact Our Team"
            onPress={() => navigation.navigate('Contact')}
            variant="hero"
          />
        </View>
      </LinearGradient>

      <Footer />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  productsSection: {
    backgroundColor: Colors.backgroundWhite,
    paddingVertical: Spacing.xxl,
  },
  grid: {
    gap: Spacing.lg,
  },
  cardSpacing: {
    marginBottom: Spacing.lg,
  },
  featuresSection: {
    backgroundColor: Colors.backgroundLight,
    paddingVertical: Spacing.xxl,
  },
  featuresGrid: {
    gap: Spacing.lg,
  },
  featureCard: {
    ...globalStyles.card,
    alignItems: 'center',
  },
  featureImage: {
    width: '100%',
    height: 200,
    borderRadius: BorderRadius.medium,
    marginBottom: Spacing.md,
  },
  featureTitle: {
    fontSize: FontSizes.xlarge,
    fontWeight: FontWeights.semibold,
    color: Colors.textPrimary,
    marginBottom: Spacing.sm,
    textAlign: 'center',
  },
  featureDescription: {
    fontSize: FontSizes.medium,
    color: Colors.textSecondary,
    textAlign: 'center',
    lineHeight: 24,
  },
  ctaSection: {
    paddingVertical: Spacing.xxl,
    alignItems: 'center',
  },
  ctaTitle: {
    fontSize: FontSizes.huge,
    fontWeight: FontWeights.bold,
    color: Colors.backgroundWhite,
    textAlign: 'center',
    marginBottom: Spacing.xl,
    lineHeight: 40,
  },
  ctaDescription: {
    fontSize: FontSizes.large,
    color: Colors.backgroundWhite,
    textAlign: 'center',
    marginBottom: Spacing.xl,
    opacity: 0.9,
    lineHeight: 28,
  },
});

export default ProductsScreen;
