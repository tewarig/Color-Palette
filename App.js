import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.pink}>
      <View style={[styles.container, styles.pink]}>
        <Text> Here are some boxes of different colors
        </Text>
        <Text style={styles.box1}> Cyan #2aa198
        </Text>
        <Text style={styles.box2}> Blue #268bd2
        </Text>
        <Text style={styles.box3}> Magneta #d33682
        </Text>
        <Text style={styles.box4}> Orange #cb4b16
        </Text>
      </View>
    </SafeAreaView>
  )

};

const styles = StyleSheet.create({
  pink: {
    backgroundColor: 'pink',
    flex: 1,
    marginTop: 25,

  },


  container: {
    fontSize: 40,
    fontWeight: "bold",
  },
  box1: {
    color: 'white',
    alignItems: 'center',
    backgroundColor: '#2aa198',
    padding: 1,
    marginBottom: 10,
    padding: 10,
    justifyContent: 'center',
    marginTop: 10,
    paddingLeft: 130
  },
  box2: {
    color: 'white',
    alignItems: 'center',
    padding: 1,
    marginBottom: 10,
    padding: 10,
    justifyContent: 'center',
    marginTop: 10,
    paddingLeft: 130,
    backgroundColor: '#268db2'
  },
  box3: {
    color: 'white',
    alignItems: 'center',
    padding: 1,
    marginBottom: 10,
    padding: 10,
    justifyContent: 'center',
    marginTop: 10,
    paddingLeft: 130,
    backgroundColor: '#d33682'
  },
  box4: {

    color: 'white',
    alignItems: 'center',
    padding: 1,
    marginBottom: 10,
    padding: 10,
    justifyContent: 'center',
    marginTop: 10,
    paddingLeft: 130,
    backgroundColor: '#cb4b16'
  }
});
export default App; 