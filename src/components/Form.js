/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
// import RNPickerSelect from '@react-native-community/picker';
import colors from './../utils/colors';

function Form() {
  return (
    <View style={styles.viewForm}>
      <View style={styles.viewInputs}>
        <TextInput
          placeholder="Cantidad a pedir"
          keyboardType="numeric"
          style={styles.input}
        />
        <TextInput
          placeholder="Interes %"
          keyboardType= "numeric"
          style={[styles.input, styles.inputPercentage ]}
        />
      </View>
      <RNPickerSelect
        useNativeAndroidPickerStyle={false}
        onValueChange={(value) => console.log(value)}
        items={[
          {label: 'Football', value: 'football'},
          {label: 'Baseball', value: 'baseball'},
          {label: 'Hockey', value: 'hockey'},
        ]}
      />
    </View>
  );
}

export default Form;

const styles = StyleSheet.create({
  viewForm: {
    position: 'absolute',
    bottom: -90,
    width: '85%',
    paddingHorizontal:50,
    backgroundColor: colors.PRIMARY_COLOR_DARK,
    borderRadius: 30,
    height: 180,
    justifyContent: 'center',
  },
  viewInputs: {
    flexDirection: 'row',
  },
  input: {
    height: 50,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: colors.PRIMARY_COLOR,
    borderRadius: 5,
    width: '60%',
    marginRight: 5,
    marginLeft: -5,
    marginBottom: 10,
    color: '#000',
    paddingHorizontal: 20,
  },
  inputPercentage: {
    width: '40%',
    marginLeft: 5,
  },
});
