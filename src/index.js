import React, {useEffect} from 'react';
import {Router, Stack} from 'react-native-router-flux';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';

import {NativeBaseProvider} from 'native-base';

import Routes from './routes/index';
import configureStore from './store';

const App = () => {
  const {persistor, store} = configureStore();
  // const config = {
  //   useSystemColorMode: true,
  // 	// initialColorMode: "light",  // initial color mode
  // }

  // const extendedTheme = extendTheme({ config })

  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    //       <Root>
    //         <Provider store={store}>
    //           <PersistGate loading={<Loading />} persistor={persistor}>
    //             <StyleProvider style={getTheme(theme)}>
    //               <Router>
    //                 <Stack key="root">{Routes}</Stack>
    //               </Router>
    //             </StyleProvider>
    //           </PersistGate>
    //         </Provider>
    //       </Root>
    <NativeBaseProvider>
      <Provider store={store}>
        {/* <Loading /> */}
        <PersistGate persistor={persistor}>
          {/* <Index> */}
          <Router>
            <Stack key="root" hideNavBar>
              {Routes}
            </Stack>
          </Router>
          {/* </Index> */}
        </PersistGate>
      </Provider>
    </NativeBaseProvider>
  );
};
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {loading: true};
//   }

//   async componentDidMount() {
//     SplashScreen.hide();
//     this.setState({loading: false});
//   }

//   render() {
//     const {loading} = this.state;
//     const {store, persistor} = this.props;

//     if (loading) {
//       return <Loading />;
//     }

//     return (
//       <Root>
//         <Provider store={store}>
//           <PersistGate loading={<Loading />} persistor={persistor}>
//             <StyleProvider style={getTheme(theme)}>
//               <Router>
//                 <Stack key="root">{Routes}</Stack>
//               </Router>
//             </StyleProvider>
//           </PersistGate>
//         </Provider>
//       </Root>
//     );
//   }
// }

// App.propTypes = {
//   store: PropTypes.shape({}).isRequired,
//   persistor: PropTypes.shape({}).isRequired,
// };

export default App;
