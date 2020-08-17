import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, StatusBar } from 'react-native';

const App: React.FC = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#312e38" />
    <View
      style={{
        backgroundColor: '#312e38',
        flex: 1,
        alignItems: 'center',
      }}
    >
      <Text style={{ color: '#FFF', flex: 1 }}>Hello World</Text>
    </View>
  </>
);

export default App;
