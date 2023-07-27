/* eslint-disable react-native/no-inline-styles */
import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Checkbox from 'expo-checkbox';

const {height, width} = Dimensions.get('window');

const TopNav = () => {
  const [disp, setDisp] = useState(false);
  const [imgIndex, setimgIndex] = useState(0);
  console.log(imgIndex);
  let carousel = [
    {
      img: 'https://whimsicalwonderlandweddings.com/wp-content/uploads/2022/12/Wedding-DJ-Songs-4.jpg',
    },
    {
      img: 'https://media.istockphoto.com/id/1352535473/photo/dj-mixing-desk-turntable-in-colored-wedding-disco-party-lights.webp?b=1&s=170667a&w=0&k=20&c=cWDxtW4Jw5Yfa5wqkABoloF8P4CfOjlVQe_vzc0a2_Y=',
    },
    {
      img: 'https://hire4event.com/blogs/wp-content/uploads/2023/06/DJ-with-floor-on-rent-for-wedding-and-corporate-event-Party.jpg',
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3GzsAvfE2OTc9Xtd-ItuQ8nAHLIsUseUceg&usqp=CAU',
    },
  ];

  let packages = [
    {
      img1: 'https://dbi-blog.s3.amazonaws.com/uploads/2020/11/download-70.jpg',
      title: 'Classic Wedding',
      price: '2,70,0000',
    },
    {
      img1: 'https://dbi-blog.s3.amazonaws.com/uploads/2020/11/download-70.jpg',
      title: 'Classic Wedding',
      price: '2,70,0000',
    },
    {
      img1: 'https://www.jjzjc.com/jpg/best-classic-wedding-songs-bride-groom-unsplash.jpg',
      title: 'Classic Wedding',
      price: '2,70,0000',
    },
    {
      img1: 'https://wp-media-partyslate.imgix.net/2022/03/photo-f2982353-55ad-49eb-b78d-0bcee58e1551-scaled.jpeg?auto=compress%2Cformat&fit=scale&h=840&ixlib=php-3.3.1&w=1260&wpsize=huge',
      title: 'Classic Wedding',
      price: '2,70,0000',
    },
    {
      img1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj1Iiv6wjAKuy8x91mDcyVZFJHtsIlEr9DNg&usqp=CAU',
      title: 'Classic Wedding',
      price: '2,70,0000',
    },
  ];

  let hotels = [
    {
      img2: 'https://www.itchotels.com/content/dam/itchotels/in/umbrella/itc/hotels/itcgardenia-bengaluru/images/overview-landing-page/headmast/desktop/itc-gardenia.png',
      title: 'ITC Gardenia',
      price: '2,70,000',
      loc: 'Bangalore',
      rating: '4.77(14)',
    },
    {
      img2: 'https://www.itchotels.com/content/dam/itchotels/in/umbrella/itc/hotels/itcgardenia-bengaluru/images/overview-landing-page/headmast/desktop/itc-gardenia.png',
      title: 'ITC Gardenia',
      price: '2,70,000',
      loc: 'Bangalore',
      rating: '4.77(14)',
    },
    {
      img2: 'https://www.itchotels.com/content/dam/itchotels/in/umbrella/itc/hotels/itcgardenia-bengaluru/images/overview-landing-page/headmast/desktop/itc-gardenia.png',
      title: 'ITC Gardenia',
      price: '2,70,000',
      loc: 'Bangalore',
      rating: '4.77(14)',
    },
    {
      img2: 'https://www.itchotels.com/content/dam/itchotels/in/umbrella/itc/hotels/itcgardenia-bengaluru/images/overview-landing-page/headmast/desktop/itc-gardenia.png',
      title: 'ITC Gardenia',
      price: '2,70,000',
      loc: 'Bangalore',
      rating: '4.77(14)',
    },
    {
      img2: 'https://www.itchotels.com/content/dam/itchotels/in/umbrella/itc/hotels/itcgardenia-bengaluru/images/overview-landing-page/headmast/desktop/itc-gardenia.png',
      title: 'ITC Gardenia',
      price: '2,70,000',
      loc: 'Bangalore',
      rating: '4.77(14)',
    },
  ];

  let item1 = [
    {
      img: 'https://stylesatlife.com/wp-content/uploads/2019/10/best-screen-door-designs.jpg.webp',
      category: 'Enteance Decor',
      title: 'Decor to a New Begining',
      done: 'Select',
      price: '₹ 40,000',
      desc: 'Amet minim mollit non desernut ullamco est sit alliqua dolor do amet sint.',
      isChecked: true,
    },
    {
      img: 'https://stylesatlife.com/wp-content/uploads/2019/10/best-screen-door-designs.jpg.webp',
      category: 'Photography',
      done: 'Select',
      title: 'Premium Photos',
      price: '₹ 40,000',
      desc: 'Amet minim mollit non desernut ullamco est sit alliqua dolor do amet sint.',
      isChecked: false,
    },
    {
      img: 'https://stylesatlife.com/wp-content/uploads/2019/10/best-screen-door-designs.jpg.webp',
      category: 'Videography',
      done: 'Select',
      title: 'Premium Videos',
      price: '₹ 40,000',
      desc: 'Amet minim mollit non desernut ullamco est sit alliqua dolor do amet sint.',
      isChecked: false,
    },
    {
      img: 'https://stylesatlife.com/wp-content/uploads/2019/10/best-screen-door-designs.jpg.webp',
      category: 'Guest Seating',
      done: 'Select',
      title: 'Royal Seating',
      price: '₹ 40,000',
      desc: 'Amet minim mollit non desernut ullamco est sit alliqua dolor do amet sint.',
      isChecked: false,
    },
  ];

  return (
    <View>
      {disp ? (
        <View style={{backgroundColor: '#EBEBEB', gap: 20}}>
          <View
            style={[
              styles.subContainer2,
              {
                justifyContent: 'space-between',
                padding: 20,
                backgroundColor: '#FFF',
              },
            ]}>
            <View style={[styles.subContainer2, {gap: 20}]}>
              <Pressable onPress={() => setDisp(false)}>
                <Image
                  source={require('../assets/icons/arrow.png')}
                  style={styles.secPageLogo}
                />
              </Pressable>

              <Text style={{fontWeight: 'bold', color: '#000', fontSize: 20}}>
                Add-ons
              </Text>
            </View>
            <Image
              source={require('../assets/icons/dots.png')}
              style={styles.secPageLogo}
            />
          </View>

          <View style={{backgroundColor: '#fff'}}>
            <Text
              style={{
                marginHorizontal: 10,
                fontSize: 25,
                color: '#000',
                fontWeight: 'bold',
              }}>
              Wedding items(4)
            </Text>
            <FlatList
              data={item1}
              renderItem={({item}) => (
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    borderBottomWidth: 1,
                    width: Dimensions.get('window').width / 1.1,
                    marginHorizontal: 10,
                    paddingVertical: 20,
                    borderColor: '#D3CFCF',
                    alignSelf: 'center',
                  }}>
                  <Image source={{uri: item.img}} style={styles.prodImg} />
                  <View style={{width: '70%', paddingHorizontal: 10}}>
                    <View
                      style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}>
                      <Text style={{color: '#000'}}>{item.category}</Text>

                      <View
                        style={{
                          flex: 1,
                          flexDirection: 'row',
                          alignItems: 'center',
                        }}>
                        <Checkbox
                          style={styles.checkbox}
                          value={item.isChecked}
                          color={item.isChecked ? '#4630EB' : undefined}
                        />
                        <Text style={{color: '#000'}}>{item.done}</Text>
                      </View>
                    </View>

                    <Text
                      style={{fontSize: 18, fontWeight: 'bold', color: '#000'}}>
                      {item.title}
                    </Text>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        color: '#000',
                        fontSize: 15,
                        marginVertical: 10,
                      }}>
                      {item.price}
                    </Text>
                    <Text>{item.desc}</Text>
                  </View>
                </View>
              )}
            />
          </View>
        </View>
      ) : (
        <View style={styles.container}>
          <View style={styles.topAlign}>
            <View>
              <Text style={{color: '#fff'}}>Hi, Jenny</Text>
            </View>
            <View style={styles.icon}>
              <Image
                source={require('../assets/icons/loupe.png')}
                style={styles.topIcon}
              />
              <Image
                source={require('../assets/icons/notification.png')}
                style={styles.topIcon}
              />
              <Image
                source={require('../assets/icons/shopping-bag.png')}
                style={styles.topIcon}
              />
            </View>
          </View>
          <ScrollView style={{marginBottom: 170}}>
            <View style={{height: Dimensions.get('window').width / 2}}>
              <FlatList
                data={carousel}
                horizontal={true}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                onScroll={e => {
                  const x = e.nativeEvent.contentOffset.x;
                  setimgIndex((x / width).toFixed(0));
                }}
                renderItem={({item, index}) => (
                  <Image
                    source={{uri: item.img}}
                    style={{
                      width: width,
                      height: height / 3,
                    }}
                  />
                )}
              />
            </View>

            <View
              style={{
                alignItems: 'center',
                alignSelf: 'center',
                backgroundColor: 'rgba(52, 52, 52, 0.8)',
                width: '30%',
                borderRadius: 10,
                margin: 20,
              }}>
              <FlatList
                data={carousel}
                horizontal={true}
                pagingEnabled={true}
                renderItem={({item, index}) => (
                  <View
                    style={{
                      height: imgIndex == index ? 8 : 8,
                      width: imgIndex == index ? 8 : 8,
                      backgroundColor: imgIndex == index ? 'white' : 'gray',
                      margin: 8,
                      borderRadius: 50,
                    }}
                  />
                )}
              />
            </View>

            <View
              style={{
                backgroundColor: '#EBEBEB',
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
              }}>
              <View style={styles.subContainer1}>
                <View style={styles.headingAlign}>
                  <Text style={styles.heading}>Top Packages</Text>
                  <Image
                    source={require('../assets/icons/right-arrow.png')}
                    style={styles.headingIcon}
                  />
                </View>

                <View>
                  <FlatList
                    data={packages}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item}) => (
                      <View style={{padding: 5}}>
                        <Pressable
                          onPress={() => setDisp(true)}
                          style={{
                            height: height / 8,
                            width: width / 2.5,
                            margin: 5,
                          }}>
                          <Image
                            source={{uri: item.img1}}
                            style={{
                              height: height / 8,
                              width: width / 2.5,
                              borderRadius: 10,
                            }}
                          />
                          <View
                            style={{
                              right: 5,
                              position: 'absolute',
                              top: 5,
                              borderWidth: 2,
                              borderColor: 'white',
                              padding: 5,
                              backgroundColor: 'white',
                              borderRadius: 50,
                            }}>
                            <Image
                              source={require('../assets/icons/heart.png')}
                              style={{
                                tintColor: '#000',
                                height: 20,
                                width: 20,
                              }}
                            />
                          </View>
                        </Pressable>
                        <Text style={{color: '#000', fontWeight: 'bold'}}>
                          {item.title}
                        </Text>
                        <Text style={{color: '#000'}}>
                          &#8377; {item.price}
                        </Text>
                      </View>
                    )}
                  />
                </View>

                <View style={styles.quiz}>
                  <Image
                    source={require('../assets/icons/magic-wand.png')}
                    style={{
                      height: 40,
                      width: 40,
                      tintColor: '#E9E7EB',
                      padding: 20,
                    }}
                  />
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 25,
                      color: '#E9E7EB',
                      paddingVertical: 10,
                    }}>
                    Looking for customised package?
                  </Text>
                  <Text style={{color: '#E9E7EB', fontSize: 20}}>
                    Customise your package by select your preferred package or
                    let us know of your requirements through the chat or filling
                    up our quiz.
                  </Text>
                  <TouchableOpacity
                    style={{
                      height: 40,
                      width: 80,
                      backgroundColor: '#E9E7EB',
                      borderRadius: 20,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginVertical: 20,
                    }}>
                    <Text style={{color: '#6E00F3'}}>Quiz</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View
                style={{
                  backgroundColor: '#FFFFFF',
                  marginVertical: 10,
                  height: 'auto',
                }}>
                <View style={styles.headingAlign}>
                  <Text style={styles.heading}>Top Venues</Text>
                  <Image
                    source={require('../assets/icons/right-arrow.png')}
                    style={styles.headingIcon}
                  />
                </View>

                <FlatList
                  data={hotels}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  renderItem={({item}) => (
                    <View
                      style={{
                        margin: 10,
                        elevation: 5,
                      }}>
                      <Image
                        source={{uri: item.img2}}
                        style={styles.hotelImg}
                      />
                      <View
                        style={{
                          padding: 15,
                          borderWidth: 1,
                          borderBottomRightRadius: 10,
                          borderBottomLeftRadius: 10,
                        }}>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                          {item.title}
                        </Text>
                        <View
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'baseline',
                          }}>
                          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                            &#8377;{item.price}{' '}
                          </Text>
                          <Text>Onwards</Text>
                        </View>

                        <View
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            paddingVertical: 10,
                          }}>
                          <View
                            style={{
                              display: 'flex',
                              flexDirection: 'row',
                              alignItems: 'center',
                            }}>
                            <Image
                              source={require('../assets/icons/location.png')}
                              style={styles.headingIcon}
                            />
                            <Text>{item.loc}</Text>
                          </View>
                          <View
                            style={{
                              display: 'flex',
                              flexDirection: 'row',
                              alignItems: 'center',
                            }}>
                            <Image
                              source={require('../assets/icons/star.png')}
                              style={[
                                styles.headingIcon,
                                {tintColor: '#7829EA'},
                              ]}
                            />
                            <Text>{item.rating}</Text>
                          </View>
                        </View>
                      </View>
                      <View
                        style={{
                          right: 5,
                          position: 'absolute',
                          top: 5,
                          borderWidth: 2,
                          borderColor: 'white',
                          padding: 5,
                          backgroundColor: 'white',
                          borderRadius: 50,
                        }}>
                        <Image
                          source={require('../assets/icons/heart.png')}
                          style={{
                            tintColor: '#000',
                            height: 20,
                            width: 20,
                          }}
                        />
                      </View>
                      <Image
                        source={{
                          uri: 'https://play-lh.googleusercontent.com/maxJZRLB84EBZ9v8RK_-XkGgvGWHjesXM9YE7aL5Qsat-lbgF8kb73Ql8rUoJ4SwjA',
                        }}
                        style={{
                          height: 40,
                          width: 40,
                          position: 'absolute',
                          top: 230,
                          left: 10,
                          borderRadius: 5,
                        }}
                      />
                    </View>
                  )}
                />
              </View>

              {/* <View>
              <View tyle={styles.headingAlign}>
                <Text style={styles.heading}>Top Products</Text>
                <Image
                  source={require('../assets/icons/right-arrow.png')}
                  style={styles.headingIcon}
                />
              </View>
            </View> */}
            </View>
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default TopNav;

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: 16,
    backgroundColor: '#6E00F3',
    // width: Dimensions.get('screen').width,
    // height: Dimensions.get('screen').height,
  },

  topIcon: {
    height: 20,
    width: 20,
    tintColor: '#fff',
  },

  icon: {
    display: 'flex',
    flexDirection: 'row',
    gap: 15,
  },

  topAlign: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },

  mainImg: {
    height: '30%',
    width: '100%',
    flex: 1,
  },

  alignImgText: {
    position: 'relative',
    top: 160,
  },

  imgText: {
    color: 'white',
  },
  subContainer1: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  quiz: {
    padding: 20,
    paddingVertical: 10,
    width: Dimensions.get('window').width / 1.13,
    backgroundColor: '#6E00F3',
    display: 'flex',
    margin: 20,
    borderRadius: 10,
    height: 330,
    // justifyContent: 'center'
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#000',
  },
  headingIcon: {
    height: 10,
    width: 10,
  },

  headingAlign: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
  },
  hotelImg: {
    height: 250,
    width: 350,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  secPageLogo: {
    height: 20,
    width: 20,
  },
  subContainer2: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  prodImg: {
    height: 90,
    width: 90,
    borderRadius: 10,
  },
  checkbox: {
    margin: 5,
  },
});
