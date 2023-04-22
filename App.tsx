import React from 'react';
import Root from './src/index';
import configureStore from './src/store/index';

const {persistor, store} = configureStore();

export default function App() {
  return <Root store={store} persistor={persistor} />;
}

// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// import React from 'react';
// import {StyleSheet, Text, useColorScheme} from 'react-native';
// import {GestureHandlerRootView} from 'react-native-gesture-handler';

// // import {Colors} from 'react-native/Libraries/NewAppScreen';

// function App(): JSX.Element {
//   // const isDarkMode = useColorScheme() === 'dark';

//   // const backgroundStyle = {
//   //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   // };

//   return (
//     <GestureHandlerRootView style={{flex: 1}}>
//       <Text>Bonjour</Text>
//     </GestureHandlerRootView>
//   );
// }

// // const styles = StyleSheet.create({});

// export default App;
