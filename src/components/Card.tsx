import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors, Spacing, FontSizes, FontWeights, BorderRadius, globalStyles} from '../styles/globalStyles';

interface CardProps {
  title: string;
  description: string;
  onPress?: () => void;
  style?: object;
}

const Card: React.FC<CardProps> = ({title, description, onPress, style}) => {
  const CardComponent = onPress ? TouchableOpacity : View;

  return (
    <CardComponent style={[styles.card, style]} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </CardComponent>
  );
};

const styles = StyleSheet.create({
  card: {
    ...globalStyles.card,
    ...globalStyles.shadow,
    alignItems: 'center',
    textAlign: 'center',
  },
  title: {
    fontSize: FontSizes.xxlarge,
    fontWeight: FontWeights.semibold,
    color: Colors.textPrimary,
    marginBottom: Spacing.md,
    textAlign: 'center',
  },
  description: {
    fontSize: FontSizes.medium,
    color: Colors.textSecondary,
    lineHeight: 24,
    textAlign: 'center',
  },
});

export default Card;
