/* eslint-disable prettier/prettier */

import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const TabBody = ({currentIndex}) => {
  return (
    <View>
      {currentIndex === 0 && <Text>TabBody0</Text>}
      {currentIndex === 1 && <Text>TabBody1</Text>}
      {currentIndex === 2 && <Text>TabBody2</Text>}
    </View>
  );
};

export default TabBody;

const styles = StyleSheet.create({});
