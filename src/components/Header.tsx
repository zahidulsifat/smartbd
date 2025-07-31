import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Modal,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import LinearGradient from 'expo-linear-gradient';
import {Colors, Spacing, FontSizes, FontWeights, BorderRadius} from '../styles/globalStyles';
import {RootStackParamList} from '../../App';

interface HeaderProps {
  isHome?: boolean;
  title?: string;
}

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const {width} = Dimensions.get('window');

const Header: React.FC<HeaderProps> = ({isHome = false, title}) => {
  const navigation = useNavigation<NavigationProp>();
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const menuItems = [
    {title: 'HOME', screen: 'Home' as keyof RootStackParamList},
    {title: 'ABOUT', screen: 'About' as keyof RootStackParamList},
    {title: 'PRODUCTS', screen: 'Products' as keyof RootStackParamList},
    {title: 'BLOG', screen: 'Blog' as keyof RootStackParamList},
    {title: 'CONTACT', screen: 'Contact' as keyof RootStackParamList},
  ];

  const handleMenuPress = (screen: keyof RootStackParamList) => {
    setIsMenuVisible(false);
    navigation.navigate(screen);
  };

  return (
    <>
      <LinearGradient
        colors={[Colors.gradientStart, Colors.gradientEnd]}
        style={[styles.header, isHome && styles.headerHome]}>
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.nav}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Image
                source={{uri: 'https://via.placeholder.com/120x40/ffffff/000000?text=LOGO'}}
                style={styles.logo}
                resizeMode="contain"
              />
            </TouchableOpacity>
            
            <TouchableOpacity
              style={styles.menuButton}
              onPress={() => setIsMenuVisible(true)}>
              <View style={styles.hamburger}>
                <View style={styles.hamburgerLine} />
                <View style={styles.hamburgerLine} />
                <View style={styles.hamburgerLine} />
              </View>
            </TouchableOpacity>
          </View>
          
          {!isHome && title && (
            <View style={styles.titleContainer}>
              <Text style={styles.pageTitle}>{title}</Text>
            </View>
          )}
        </SafeAreaView>
      </LinearGradient>

      <Modal
        visible={isMenuVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setIsMenuVisible(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.menuContainer}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setIsMenuVisible(false)}>
              <Text style={styles.closeButtonText}>×</Text>
            </TouchableOpacity>
            
            {menuItems.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.menuItem}
                onPress={() => handleMenuPress(item.screen)}>
                <Text style={styles.menuItemText}>{item.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingBottom: Spacing.lg,
  },
  headerHome: {
    minHeight: Dimensions.get('window').height,
  },
  safeArea: {
    flex: 1,
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.md,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  },
  logo: {
    width: 120,
    height: 40,
  },
  menuButton: {
    padding: Spacing.sm,
  },
  hamburger: {
    width: 24,
    height: 18,
    justifyContent: 'space-between',
  },
  hamburgerLine: {
    width: '100%',
    height: 2,
    backgroundColor: Colors.backgroundWhite,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pageTitle: {
    fontSize: FontSizes.massive,
    fontWeight: FontWeights.bold,
    color: Colors.backgroundWhite,
    textAlign: 'center',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  menuContainer: {
    backgroundColor: Colors.backgroundWhite,
    borderTopLeftRadius: BorderRadius.large,
    borderTopRightRadius: BorderRadius.large,
    paddingVertical: Spacing.xl,
    paddingHorizontal: Spacing.lg,
    maxHeight: '70%',
  },
  closeButton: {
    alignSelf: 'flex-end',
    padding: Spacing.sm,
    marginBottom: Spacing.lg,
  },
  closeButtonText: {
    fontSize: 32,
    color: Colors.textPrimary,
    fontWeight: FontWeights.light,
  },
  menuItem: {
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.sm,
    borderRadius: BorderRadius.medium,
    marginBottom: Spacing.sm,
  },
  menuItemText: {
    fontSize: FontSizes.medium,
    fontWeight: FontWeights.medium,
    color: Colors.textPrimary,
  },
});

export default Header;
