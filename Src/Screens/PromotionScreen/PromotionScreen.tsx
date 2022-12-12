import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FlatList} from 'react-native';
import {IMAGE_ASSETS} from '../../Assets/Images';
import {TouchableOpacity} from 'react-native';
import {PromotionData} from '../../Data/PromotionData';

const {width} = Dimensions.get('screen');

export default function PromotionScreen() {
  const renderHeader = () => {
    return (
      <View
        style={{
          marginBottom: 10,
          paddingHorizontal: 20,
          paddingVertical: 10,
          backgroundColor: '#1683bf',
        }}>
        <View style={[styles.rowView, {width: width / 1.7}]}>
          <Text style={styles.icon}> {'<'} </Text>
          <Text style={styles.headerText}> Promotions </Text>
        </View>
      </View>
    );
  };

  const renderPromotions = ({item}) => {
    return (
      <TouchableOpacity style={styles.promotionContainer}>
        <Image
          source={IMAGE_ASSETS.Promotion}
          resizeMode="cover"
          style={styles.eachImage}
        />
        <View style={[styles.eachImage, styles.coverOpacity]} />
        <View style={styles.cover}>
          <View style={styles.rowView}>
            <Text style={styles.label}>{item.name}</Text>
            <Text style={styles.limit}>End In: {item.limit}</Text>
          </View>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={renderHeader}
        data={PromotionData}
        keyExtractor={item => item.key}
        renderItem={renderPromotions}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  label: {
    color: 'white',
    fontWeight: '700',
    fontSize: 15,
  },
  description: {
    color: 'white',
    fontWeight: '600',
    fontSize: 12,
  },
  promotionContainer: {
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 1,
    width: width / 1.1,
    height: width / 2.5,
    marginBottom: 10,
  },
  eachImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  coverOpacity: {
    backgroundColor: 'black',
    position: 'absolute',
    opacity: 0.5,
    borderRadius: 10,
  },
  cover: {
    bottom: 10,
    paddingHorizontal: 10,
    position: 'absolute',
    borderRadius: 10,
    width: '100%',
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  limit: {
    color: '//#region f7941d',
    fontWeight: '700',
    fontSize: 12,
  },
  icon: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
  },
});
