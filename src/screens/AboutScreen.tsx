import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import {Colors, Spacing, FontSizes, FontWeights, globalStyles, BorderRadius} from '../styles/globalStyles';
import {RootStackParamList} from '../../App';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const AboutScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();

  const values = [
    {
      icon: '⭐',
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from product selection to customer service.',
    },
    {
      icon: '🤝',
      title: 'Partnership',
      description: 'Building long-term relationships with our clients and vendor partners for mutual growth.',
    },
    {
      icon: '🚀',
      title: 'Innovation',
      description: 'Continuously evolving to bring the latest technological innovations to our customers.',
    },
  ];

  return (
    <ScrollView style={globalStyles.container} showsVerticalScrollIndicator={false}>
      <Header title="About Us" />

      <View style={styles.aboutSection}>
        <View style={globalStyles.content}>
          <View style={styles.aboutGrid}>
            <View style={styles.aboutContent}>
              <Text style={styles.aboutTitle}>Leading ICT Distribution in Bangladesh</Text>
              <Text style={styles.aboutText}>
                Smart Technologies (BD) Ltd stands as one of Bangladesh's premier ICT distribution companies, 
                representing over 100 world-renowned technology brands. Our mission is to bridge the gap between 
                cutting-edge global technology and local business needs.
              </Text>
              <Text style={styles.aboutText}>
                With years of experience in the technology sector, we have built strong partnerships with leading 
                manufacturers and developed an extensive distribution network that serves businesses across Bangladesh. 
                Our commitment to excellence and customer satisfaction has made us a trusted name in the industry.
              </Text>
              <Button
                title="Get In Touch"
                onPress={() => navigation.navigate('Contact')}
                variant="secondary"
              />
            </View>
            
            <View style={styles.aboutImageContainer}>
              <Image
                source={{uri: 'https://via.placeholder.com/400x300/667eea/ffffff?text=About+Us'}}
                style={styles.aboutImage}
                resizeMode="cover"
              />
            </View>
          </View>
        </View>
      </View>

      <View style={styles.valuesSection}>
        <View style={globalStyles.content}>
          <Text style={globalStyles.sectionTitle}>Our Core Values</Text>
          <Text style={globalStyles.sectionSubtitle}>
            The principles that drive our commitment to excellence
          </Text>
          
          <View style={styles.valuesGrid}>
            {values.map((value, index) => (
              <View key={index} style={styles.valueCard}>
                <View style={styles.iconContainer}>
                  <Text style={styles.iconText}>{value.icon}</Text>
                </View>
                <Text style={styles.valueTitle}>{value.title}</Text>
                <Text style={styles.valueDescription}>{value.description}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      <Footer />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  aboutSection: {
    backgroundColor: Colors.backgroundLight,
    paddingVertical: Spacing.xxl,
  },
  aboutGrid: {
    gap: Spacing.xl,
  },
  aboutContent: {
    marginBottom: Spacing.xl,
  },
  aboutTitle: {
    fontSize: FontSizes.huge,
    fontWeight: FontWeights.bold,
    color: Colors.textPrimary,
    marginBottom: Spacing.md,
    lineHeight: 40,
  },
  aboutText: {
    fontSize: FontSizes.large,
    color: Colors.textSecondary,
    marginBottom: Spacing.xl,
    lineHeight: 28,
  },
  aboutImageContainer: {
    alignItems: 'center',
  },
  aboutImage: {
    width: '100%',
    height: 300,
    borderRadius: BorderRadius.medium,
  },
  valuesSection: {
    backgroundColor: Colors.backgroundWhite,
    paddingVertical: Spacing.xxl,
  },
  valuesGrid: {
    gap: Spacing.lg,
  },
  valueCard: {
    ...globalStyles.card,
    alignItems: 'center',
  },
  iconContainer: {
    width: 80,
    height: 80,
    backgroundColor: Colors.gradientStart,
    borderRadius: BorderRadius.medium,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Spacing.md,
  },
  iconText: {
    fontSize: 32,
    color: Colors.backgroundWhite,
  },
  valueTitle: {
    fontSize: FontSizes.xlarge,
    fontWeight: FontWeights.semibold,
    color: Colors.textPrimary,
    marginBottom: Spacing.sm,
    textAlign: 'center',
  },
  valueDescription: {
    fontSize: FontSizes.medium,
    color: Colors.textSecondary,
    textAlign: 'center',
    lineHeight: 24,
  },
});

export default AboutScreen;
