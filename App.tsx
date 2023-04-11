/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomTabs from './components/CustomTabs';
import TabBody from './components/TabBody';
import {Provider} from 'react-redux';
import {store} from './store';

const App = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  return (
    <Provider store={store}>
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
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  bottomCont: {
    flex: 1,
    padding: 20,
  },
});
