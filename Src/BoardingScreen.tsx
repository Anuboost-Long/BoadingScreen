import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {IMAGE_ASSETS} from './Assets/Images';

const {height, width} = Dimensions.get('screen');
const COLORS = {primary: '#282534', white: '#fff'};
const renderData = [
  {
    image: IMAGE_ASSETS.image1,
    title: 'Explore the world',
    description:
      'Dive into an astounding experience with your friends and family',
    id: '1',
  },
  {
    image: IMAGE_ASSETS.image2,
    title: 'Experience new technology',
    description: 'Be the first to dive in and tell people your the early bird',
    id: '2',
  },
  {
    image: IMAGE_ASSETS.image3,
    title: 'Fast Travel',
    description: 'Be at anywhere anyTime no walking no sweating',
    id: '3',
  },
];

export default function BoardingScreen() {
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef();

  const ChangeIndex = e => {
    const newIndex = Math.round(e.nativeEvent.contentOffset.x / width);
    setActiveIndex(newIndex);
  };

  const handleSkip = () => {
    ref.current.scrollToEnd();
    setActiveIndex(renderData.length - 1);
  };

  const handleNext = () => {
    const nextIndex = activeIndex + 1;
    const offset = nextIndex * width;
    ref?.current.scrollToOffset({offset});
    setActiveIndex(nextIndex);
  };

  const EachSlides = ({item}) => {
    return (
      <View style={styles.itemHolder}>
        <Image source={item.image} resizeMode="contain" style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    );
  };

  const Footer = () => {
    return (
      <View style={styles.footer}>
        <View style={styles.rowView}>
          {renderData.map((_, index) => {
            return (
              <View
                style={[
                  styles.indicator,
                  activeIndex === index && {
                    backgroundColor: COLORS.white,
                    width: 20,
                  },
                ]}
                key={index}
              />
            );
          })}
        </View>
        {activeIndex === renderData.length - 1 ? (
          <TouchableOpacity style={styles.continueButton}>
            <Text style={styles.nextWord}>Continue</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.buttonHolder}>
            <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
              <Text style={styles.skipWord}>Skip</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
              <Text style={styles.nextWord}>Next</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ref={ref}
        pagingEnabled
        onMomentumScrollEnd={ChangeIndex}
        data={renderData}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={EachSlides}
        keyExtractor={item => item.id}
      />
      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: COLORS.primary,
    flex: 1,
  },
  itemHolder: {
    height: height * 0.6,

    alignItems: 'center',
  },
  image: {
    width: width,
    height: width,
    alignSelf: 'center',
    marginBottom: 30,
  },
  title: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 30,
  },
  description: {
    color: COLORS.white,
    fontSize: 14,
    width: '75%',
    textAlign: 'center',
  },
  indicator: {
    alignSelf: 'center',
    backgroundColor: 'grey',
    width: 10,
    height: 5,
    marginHorizontal: 2,
    borderRadius: 2,
  },
  footer: {
    paddingBottom: 50,
    justifyContent: 'space-between',
    height: height * 0.28,
  },
  rowView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonHolder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  skipButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: COLORS.white,
    height: width / 7,
    width: width / 2.3,
  },
  skipWord: {
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.white,
  },
  nextButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: COLORS.white,
    height: width / 7,
    width: width / 2.3,
  },
  nextWord: {
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.primary,
  },
  continueButton: {
    alignSelf: 'center',
    width: width / 1.1,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    height: width / 7,
  },
});
