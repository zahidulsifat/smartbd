import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import LinearGradient from 'expo-linear-gradient';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Button from '../components/Button';
import {Colors, Spacing, FontSizes, FontWeights, globalStyles} from '../styles/globalStyles';
import {RootStackParamList} from '../../App';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();

  const solutions = [
    {
      title: 'Hardware Solutions',
      description: 'Enterprise-grade hardware infrastructure including servers, networking equipment, and workstations from leading global manufacturers.',
    },
    {
      title: 'Cloud Services',
      description: 'Scalable cloud solutions for modern businesses, including cloud migration, hybrid infrastructure, and managed cloud services.',
    },
    {
      title: 'Managed IT Services',
      description: 'Complete IT management and support services to keep your business running smoothly with 24/7 monitoring and support.',
    },
  ];

  return (
    <ScrollView style={globalStyles.container} showsVerticalScrollIndicator={false}>
      <LinearGradient
        colors={[Colors.gradientStart, Colors.gradientEnd]}
        style={styles.heroSection}>
        <Header isHome />
        <View style={styles.heroContent}>
          <Text style={styles.heroTitle}>Smart Technologies (BD) Ltd.</Text>
          <Text style={styles.heroDescription}>
            Leading ICT distribution company in Bangladesh with 100+ world-renowned brands in our portfolio. 
            Delivering innovative technology solutions across the nation.
          </Text>
          <Button
            title="Learn More About Us"
            onPress={() => navigation.navigate('About')}
            variant="hero"
          />
        </View>
      </LinearGradient>

      <View style={styles.solutionsSection}>
        <View style={globalStyles.content}>
          <Text style={globalStyles.sectionTitle}>Our Solutions</Text>
          <Text style={globalStyles.sectionSubtitle}>
            Comprehensive technology solutions tailored for modern businesses
          </Text>
          
          <View style={styles.grid}>
            {solutions.map((solution, index) => (
              <Card
                key={index}
                title={solution.title}
                description={solution.description}
                style={styles.cardSpacing}
              />
            ))}
          </View>
        </View>
      </View>

      <LinearGradient
        colors={[Colors.gradientStart, Colors.gradientEnd]}
        style={styles.ctaSection}>
        <View style={globalStyles.content}>
          <Text style={styles.ctaTitle}>Ready to Transform Your Business?</Text>
          <Text style={styles.ctaDescription}>
            Contact us today for customized IT solutions that drive growth and innovation.
          </Text>
          <Button
            title="Get Started"
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
  heroSection: {
    minHeight: 800,
    justifyContent: 'space-between',
  },
  heroContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Spacing.lg,
    paddingBottom: Spacing.xxl,
  },
  heroTitle: {
    fontSize: FontSizes.huge,
    fontWeight: FontWeights.bold,
    color: Colors.backgroundWhite,
    textAlign: 'center',
    marginBottom: Spacing.md,
    lineHeight: 40,
  },
  heroDescription: {
    fontSize: FontSizes.large,
    color: Colors.backgroundWhite,
    textAlign: 'center',
    marginBottom: Spacing.xl,
    opacity: 0.9,
    lineHeight: 28,
    maxWidth: 600,
  },
  solutionsSection: {
    backgroundColor: Colors.backgroundWhite,
    paddingVertical: Spacing.xxl,
  },
  grid: {
    gap: Spacing.lg,
  },
  cardSpacing: {
    marginBottom: Spacing.lg,
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

export default HomeScreen;
