import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, TextInput, Alert, Linking} from 'react-native';
import LinearGradient from 'expo-linear-gradient';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import {Colors, Spacing, FontSizes, FontWeights, globalStyles, BorderRadius} from '../styles/globalStyles';

const ContactScreen: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const contactInfo = [
    {
      icon: '📍',
      title: 'Our Office',
      details: 'Jahir Smart Tower\n205/1 & 205/1/A, West Kafrul\nBegum Rokeya Sharani, Taltola\nDhaka-1207, Bangladesh',
    },
    {
      icon: '📞',
      title: 'Phone Numbers',
      details: '+880-2-58153636\n+880-2-55025235\nSunday to Thursday, 10AM to 6PM',
    },
    {
      icon: '✉️',
      title: 'Email Address',
      details: 'info@smartbd.com\nSend us your inquiry anytime',
    },
  ];

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.subject || !form.message) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    Alert.alert('Success', 'Thank you for your message! We will get back to you soon.');
    setForm({name: '', email: '', subject: '', message: ''});
  };

  const handleEmailPress = () => {
    Linking.openURL('mailto:info@smartbd.com');
  };

  return (
    <ScrollView style={globalStyles.container} showsVerticalScrollIndicator={false}>
      <Header title="Contact Us" />

      <View style={styles.mapSection}>
        <View style={globalStyles.content}>
          <View style={styles.mapPlaceholder}>
            <Text style={styles.mapText}>📍 Interactive Map</Text>
            <Text style={styles.mapSubtext}>Dhaka, Bangladesh</Text>
          </View>
        </View>
      </View>

      <View style={styles.contactSection}>
        <View style={globalStyles.content}>
          <View style={styles.contactGrid}>
            <View style={styles.contactInfoSection}>
              <Text style={styles.sectionTitle}>Get In Touch</Text>
              
              {contactInfo.map((info, index) => (
                <View key={index} style={styles.contactInfo}>
                  <View style={styles.iconContainer}>
                    <Text style={styles.icon}>{info.icon}</Text>
                  </View>
                  <View style={styles.contactDetails}>
                    <Text style={styles.contactTitle}>{info.title}</Text>
                    <Text style={styles.contactText}>{info.details}</Text>
                  </View>
                </View>
              ))}
            </View>
            
            <View style={styles.contactForm}>
              <Text style={styles.formTitle}>Send us a Message</Text>
              <View style={styles.form}>
                <TextInput
                  style={[globalStyles.input, styles.input]}
                  placeholder="Your Full Name"
                  value={form.name}
                  onChangeText={(text) => setForm({...form, name: text})}
                />
                <TextInput
                  style={[globalStyles.input, styles.input]}
                  placeholder="Your Email Address"
                  value={form.email}
                  onChangeText={(text) => setForm({...form, email: text})}
                  keyboardType="email-address"
                />
                <TextInput
                  style={[globalStyles.input, styles.input]}
                  placeholder="Subject"
                  value={form.subject}
                  onChangeText={(text) => setForm({...form, subject: text})}
                />
                <TextInput
                  style={[globalStyles.input, styles.input, styles.textArea]}
                  placeholder="Your Message"
                  value={form.message}
                  onChangeText={(text) => setForm({...form, message: text})}
                  multiline
                  numberOfLines={6}
                />
                <Button
                  title="Send Message"
                  onPress={handleSubmit}
                  variant="secondary"
                  style={styles.submitButton}
                />
              </View>
            </View>
          </View>
        </View>
      </View>

      <LinearGradient
        colors={[Colors.gradientStart, Colors.gradientEnd]}
        style={styles.ctaSection}>
        <View style={globalStyles.content}>
          <Text style={styles.ctaTitle}>Ready to Start Your Project?</Text>
          <Text style={styles.ctaDescription}>
            Let's discuss how we can help transform your business with the right technology solutions.
          </Text>
          <Button
            title="Email Us Directly"
            onPress={handleEmailPress}
            variant="hero"
          />
        </View>
      </LinearGradient>

      <Footer />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mapSection: {
    backgroundColor: Colors.backgroundWhite,
    paddingVertical: Spacing.xxl,
  },
  mapPlaceholder: {
    height: 400,
    backgroundColor: Colors.backgroundLight,
    borderRadius: BorderRadius.medium,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.borderColor,
  },
  mapText: {
    fontSize: FontSizes.xxlarge,
    fontWeight: FontWeights.semibold,
    color: Colors.textPrimary,
    marginBottom: Spacing.sm,
  },
  mapSubtext: {
    fontSize: FontSizes.medium,
    color: Colors.textSecondary,
  },
  contactSection: {
    backgroundColor: Colors.backgroundLight,
    paddingVertical: Spacing.xxl,
  },
  contactGrid: {
    gap: Spacing.xl,
  },
  contactInfoSection: {
    marginBottom: Spacing.xl,
  },
  sectionTitle: {
    fontSize: FontSizes.huge,
    fontWeight: FontWeights.bold,
    color: Colors.textPrimary,
    marginBottom: Spacing.xl,
  },
  contactInfo: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: Colors.backgroundWhite,
    borderWidth: 1,
    borderColor: Colors.borderColor,
    borderRadius: BorderRadius.medium,
    padding: Spacing.md,
    marginBottom: Spacing.md,
  },
  iconContainer: {
    width: 32,
    alignItems: 'center',
    marginRight: Spacing.md,
    marginTop: 4,
  },
  icon: {
    fontSize: FontSizes.xxlarge,
  },
  contactDetails: {
    flex: 1,
  },
  contactTitle: {
    fontSize: FontSizes.large,
    fontWeight: FontWeights.semibold,
    color: Colors.textPrimary,
    marginBottom: 4,
  },
  contactText: {
    fontSize: FontSizes.medium,
    color: Colors.textSecondary,
    lineHeight: 24,
  },
  contactForm: {
    ...globalStyles.card,
  },
  formTitle: {
    fontSize: FontSizes.xlarge,
    fontWeight: FontWeights.semibold,
    color: Colors.textPrimary,
    marginBottom: Spacing.lg,
  },
  form: {
    gap: Spacing.md,
  },
  input: {
    marginBottom: Spacing.md,
  },
  textArea: {
    height: 150,
    textAlignVertical: 'top',
  },
  submitButton: {
    width: '100%',
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

export default ContactScreen;
