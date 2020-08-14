/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function ResultCalculation( props ) {
  const {capital, interest, months, total, errorMessage} = props;

  return (
    <View style={styles.content}>
      {total && <Text>Result TOtal</Text>}
      <View>
        <Text style={styles.error}>{errorMessage}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  error: {
    textAlign: 'center',
    color: '#f00',
    fontWeight:'bold',
    fontSize: 20,
  },
  content: {
    marginTop: 100,
    marginHorizontal: 40,
  },
});
