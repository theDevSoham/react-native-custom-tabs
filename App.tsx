/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomTabs from './components/CustomTabs';
import TabBody from './components/TabBody';

const App = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.bottomCont}>
        <CustomTabs
          isBg={false}
          isOverlay={false}
          contentBg={true}
          bgColor="transparent"
          tabTitles={['expense', 'settings', 'savings']}
          onIndexChange={index => setCurrentIndex(index)}
          children={<TabBody currentIndex={currentIndex} />}
        />
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  bottomCont: {
    flex: 1,
  },
});
