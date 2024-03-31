import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';

export const RoundedButton = ({
  style = {},
  textStyle = {},
  size = 140,
  ...props
}) => {
  return (
    <TouchableOpacity style={[styles(size).radius, style]} onPress={props.onPress}>
      <Text style={[styles(size).text, textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = (size) => ({
    radius: {
      borderRadius: 10,
      width: size,
      height: size,
      alignItems: 'center',
      justifyContent: "center",
      borderColor: colors.cool["1"],
      borderWidth: 2
    },
    text: { color: colors.cool["1"], fontSize: size / 3 },
  });