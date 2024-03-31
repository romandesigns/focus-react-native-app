import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import {colors} from "../utils/colors";
import {spacing} from "../utils/sizes";
import {RoundedButton} from '../components/RoundedButton';

export const Focus = ({addSubject}) => {
  const [subject, setSubject] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          label="What would you like to focus on?"
          value={subject}
          onChangeText = {text => setSubject(text)}
          style={styles.textInput}
        />
        <RoundedButton title="+" size={50} style={styles.button} onPress={() => addSubject(subject)}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
  },
  textInput : {
    flex: 1,
    marginRight: spacing.small,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 5,
  },
  button: {
    backgroundColor: colors.warm["5"],
    borderRadius: 10,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    width: 65,
    height: 65,
  },
  inputContainer : {
    flexDirection:"row",
    paddingTop: 50,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: "center",
  }
});