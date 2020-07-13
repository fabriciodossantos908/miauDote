import React, { Component } from "react";
import { View, Text } from "react-native";

export default class PetBreed extends Component {
    render(){
        return(
            <View style={{flex:1, justifyContent:"center"}}>
                <Text style={{textAlign:'center'}}>
                    Tela para listagem de raças, de acordo com a espécie do pet
                </Text>
            </View>
        )
    }
}


// import React from 'react';
// import {
//   SafeAreaView,
//   TouchableOpacity,
//   FlatList,
//   StyleSheet,
//   Text,
// } from 'react-native';
// import Constants from 'expo-constants';

// const DATA = [
//   {
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//     title: 'First Item',
//   },
//   {
//     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//     title: 'Second Item',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d72',
//     title: 'Third Item',
//   },
// ];

// function Item({ id, title, selected, onSelect }) {
//   return (
//     <TouchableOpacity
//       onPress={() => onSelect(id)}
//       style={[
//         styles.item,
//         { backgroundColor: selected ? '#6e3b6e' : '#f9c2ff' },
//       ]}
//     >
//       <Text style={styles.title}>{title}</Text>
//     </TouchableOpacity>
//   );
// }

// export default function PetBreed() {
//   const [selected, setSelected] = React.useState(new Map());

//   const onSelect = React.useCallback(
//     id => {
//       const newSelected = new Map(selected);
//       newSelected.set(id, !selected.get(id));

//       setSelected(newSelected);
//     },
//     [selected],
//   );

//   return (
//     <SafeAreaView style={styles.container}>
//       <FlatList
//         data={DATA}
//         renderItem={({ item }) => (
//           <Item
//             id={item.id}
//             title={item.title}
//             selected={!!selected.get(item.id)}
//             onSelect={onSelect}
//           />
//         )}
//         keyExtractor={item => item.id}
//         extraData={selected}
//       />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: Constants.statusBarHeight,
//   },
//   item: {
//     backgroundColor: '#f9c2ff',
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//   },
//   title: {
//     fontSize: 32,
//   },
// });



// import React, { Component } from 'react';
// import {
//     AppRegistry, FlatList,
//     StyleSheet, Text, View, Alert
// } from 'react-native';

// export default class PetBreed extends Component {

//     renderSeparator = () => {
//         return (
//             <View
//                 style={{
//                     height: 1,
//                     width: "100%",
//                     backgroundColor: "#000",
//                 }}
//             />
//         );
//     };

//     Item = ({ id, title, selected, onSelect }) => {
//         return (
//             <TouchableOpacity
//                 onPress={() => onSelect(id)}
//                 style={[
//                     styles.item,
//                     { backgroundColor: selected ? '#6e3b6e' : '#f9c2ff' },
//                 ]}
//             >
//                 <Text style={styles.title}>{title}</Text>
//             </TouchableOpacity>
//         );
//     }

//     //handling onPress action  
//     getListViewItem = (item) => {
//         Alert.alert(item.key);
//     }
//     render() {
//         return (
//             <View style={styles.container}>
//                 <FlatList
//                     data={[
//                         { key: 'Android' }, { key: 'iOS' }, { key: 'Java' }, { key: 'Swift' },
//                         { key: 'Php' }, { key: 'Hadoop' }, { key: 'Sap' },
//                         { key: 'Python' }, { key: 'Ajax' }, { key: 'C++' },
//                         { key: 'Ruby' }, { key: 'Rails' }, { key: '.Net' },
//                         { key: 'Perl' }, { key: 'Sap' }, { key: 'Python' },
//                         { key: 'Ajax' }, { key: 'C++' }, { key: 'Ruby' },
//                         { key: 'Rails' }, { key: '.Net' }, { key: 'Perl' }
//                     ]}
//                     renderItem={({ item }) =>
//                     // renderItem={({ item }) => (
//                     //               <this.Item
//                     //                 id={item.id}
//                     //                 title={item.title}
//                     //                 selected={!!selected.get(item.id)}
//                     //                 onSelect={onSelect}
//                     //               />
//                     //         )}
//                         <Text style={styles.item}
//                             onPress={this.getListViewItem.bind(this, item)}>{item.key}</Text>}
//                     ItemSeparatorComponent={this.renderSeparator}
//                 />
//             </View>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     item: {
//         padding: 10,
//         fontSize: 18,
//         height: 44,
//     },
// })


// AppRegistry.registerComponent('AwesomeProject', () => FlatListBasics);