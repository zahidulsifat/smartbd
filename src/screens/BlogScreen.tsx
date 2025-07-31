import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Image, TextInput, Alert} from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import {Colors, Spacing, FontSizes, FontWeights, globalStyles, BorderRadius} from '../styles/globalStyles';

const BlogScreen: React.FC = () => {
  const [comment, setComment] = useState({name: '', email: '', message: ''});

  const blogSections = [
    {
      title: 'Broad Product Portfolio',
      description: 'Representing over 100 world-renowned technology brands across various categories including hardware, software, and cloud solutions.',
    },
    {
      title: 'Expert Team',
      description: 'Our skilled professionals bring years of experience in technology consulting, implementation, and support services.',
    },
    {
      title: 'Client Satisfaction',
      description: 'Committed to delivering exceptional service and building long-term relationships with our valued customers.',
    },
    {
      title: 'Strong Distribution Channel',
      description: 'Extensive network coverage across Bangladesh ensuring timely delivery and support nationwide.',
    },
    {
      title: 'Vendor Relationships',
      description: 'Strategic partnerships with leading global technology manufacturers for competitive pricing and priority support.',
    },
    {
      title: 'International Presence',
      description: 'Connected to global technology trends and innovations through our international partnerships and certifications.',
    },
  ];

  const sidebarItems = [
    {name: 'Global Automation', count: 21},
    {name: 'Smart Printing Solutions', count: 29},
    {name: 'Smart Academy', count: 18},
    {name: 'Fire & Safety Solutions', count: 37},
    {name: 'Smart Group', count: 45},
    {name: 'Smart Dairy', count: 42},
    {name: 'Smart Hi-Tech Park', count: 23},
  ];

  const handleSubmitComment = () => {
    if (!comment.name || !comment.email || !comment.message) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    Alert.alert('Success', 'Thank you for your comment!');
    setComment({name: '', email: '', message: ''});
  };

  return (
    <ScrollView style={globalStyles.container} showsVerticalScrollIndicator={false}>
      <Header title="Our Blog" />

      <View style={styles.blogSection}>
        <View style={globalStyles.content}>
          <View style={styles.blogGrid}>
            <View style={styles.blogMain}>
              <Image
                source={{uri: 'https://via.placeholder.com/600x300/667eea/ffffff?text=Smart+Technologies+Strength'}}
                style={styles.blogImage}
                resizeMode="cover"
              />
              
              <Text style={styles.blogTitle}>The Strength of Smart Technologies</Text>
              <Text style={styles.blogIntro}>
                Discover what makes Smart Technologies (BD) Ltd a leader in the ICT distribution industry and 
                why businesses across Bangladesh trust us with their technology needs.
              </Text>
              
              <View style={styles.strengthsSection}>
                <Text style={styles.strengthsTitle}>Our Key Strengths</Text>
                
                {blogSections.map((section, index) => (
                  <View key={index} style={styles.strengthItem}>
                    <Text style={styles.strengthItemTitle}>{section.title}</Text>
                    <Text style={styles.strengthItemDescription}>{section.description}</Text>
                  </View>
                ))}
              </View>

              <View style={styles.commentSection}>
                <Text style={styles.commentTitle}>Share Your Thoughts</Text>
                <View style={styles.form}>
                  <TextInput
                    style={[globalStyles.input, styles.input]}
                    placeholder="Your Name"
                    value={comment.name}
                    onChangeText={(text) => setComment({...comment, name: text})}
                  />
                  <TextInput
                    style={[globalStyles.input, styles.input]}
                    placeholder="Your Email"
                    value={comment.email}
                    onChangeText={(text) => setComment({...comment, email: text})}
                    keyboardType="email-address"
                  />
                  <TextInput
                    style={[globalStyles.input, styles.input, styles.textArea]}
                    placeholder="Your Comment"
                    value={comment.message}
                    onChangeText={(text) => setComment({...comment, message: text})}
                    multiline
                    numberOfLines={4}
                  />
                  <Button
                    title="Post Comment"
                    onPress={handleSubmitComment}
                    variant="secondary"
                  />
                </View>
              </View>
            </View>
            
            <View style={styles.sidebar}>
              <View style={styles.sidebarHeader}>
                <Text style={styles.sidebarHeaderText}>Industry Focus</Text>
              </View>
              {sidebarItems.map((item, index) => (
                <View key={index} style={styles.sidebarItem}>
                  <Text style={styles.sidebarItemName}>{item.name}</Text>
                  <Text style={styles.sidebarItemCount}>{item.count}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </View>

      <Footer />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  blogSection: {
    backgroundColor: Colors.backgroundLight,
    paddingVertical: Spacing.xxl,
  },
  blogGrid: {
    gap: Spacing.xl,
  },
  blogMain: {
    marginBottom: Spacing.xl,
  },
  blogImage: {
    width: '100%',
    height: 300,
    borderRadius: BorderRadius.medium,
    marginBottom: Spacing.lg,
  },
  blogTitle: {
    fontSize: FontSizes.huge,
    fontWeight: FontWeights.bold,
    color: Colors.textPrimary,
    marginBottom: Spacing.md,
    lineHeight: 40,
  },
  blogIntro: {
    fontSize: FontSizes.medium,
    color: Colors.textSecondary,
    marginBottom: Spacing.xl,
    lineHeight: 24,
  },
  strengthsSection: {
    marginBottom: Spacing.xl,
  },
  strengthsTitle: {
    fontSize: FontSizes.xlarge,
    fontWeight: FontWeights.semibold,
    color: Colors.accent,
    marginBottom: Spacing.md,
  },
  strengthItem: {
    marginBottom: Spacing.lg,
  },
  strengthItemTitle: {
    fontSize: FontSizes.medium,
    fontWeight: FontWeights.semibold,
    color: Colors.textPrimary,
    marginBottom: Spacing.xs,
  },
  strengthItemDescription: {
    fontSize: FontSizes.medium,
    color: Colors.textSecondary,
    lineHeight: 24,
  },
  commentSection: {
    ...globalStyles.card,
    marginTop: Spacing.xl,
  },
  commentTitle: {
    fontSize: FontSizes.xxlarge,
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
    height: 120,
    textAlignVertical: 'top',
  },
  sidebar: {
    backgroundColor: Colors.backgroundWhite,
    borderWidth: 1,
    borderColor: Colors.borderColor,
    borderRadius: BorderRadius.medium,
    overflow: 'hidden',
  },
  sidebarHeader: {
    backgroundColor: Colors.accent,
    padding: Spacing.md,
  },
  sidebarHeaderText: {
    fontSize: FontSizes.large,
    fontWeight: FontWeights.semibold,
    color: Colors.backgroundWhite,
  },
  sidebarItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: Spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderColor,
  },
  sidebarItemName: {
    fontSize: FontSizes.medium,
    fontWeight: FontWeights.medium,
    color: Colors.textPrimary,
  },
  sidebarItemCount: {
    fontSize: FontSizes.small,
    color: Colors.textSecondary,
  },
});

export default BlogScreen;
