import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  StatusBar,
  Platform,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Container } from "native-base";
import Swiper from "react-native-swiper";
// Screen Styles
import styles from "./styles";

export default class WalkthroughTrackRide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false,
    };
  }

  render() {
    StatusBar.setBarStyle("light-content", true);
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("#2d324f", true);
      StatusBar.setTranslucent(true);
    }

    var data = [
      {
        id: 1,
        image: require("../../../assets/livestream.jpg"),
        title: "First Screen",
        description:
          "This is the first screen for the intro",
      },
      {
        id: 2,
        image: require("../../../assets/events.jpg"),
        title: "Second Screen",
        description: "This is the second screen of the intro",
      },
      {
        id: 3,
        image: require("../../../assets/sermon.jpg"),
        title: "Third Screen",
        description:
          "This is the third screen of the intro",
      },
      {
        id: 4,
        image: require("../../../assets/pastor2.jpg"),
        title: "Fourth Screen",
        description:
          "This is the fourth screen of the intro",
      },
    ];

    return (
      <Container style={styles.container}>
        <Swiper
          showsButtons={false}
          autoplay={true}
          autoplayTimeout={2.5}
          activeDot={<View style={styles.activeDot} />}
          dot={<View style={styles.dot} />}
        >
          {data.map((item, index) => {
            return (
                <ImageBackground key={index} source={item.image}  style={styles.slide}>
                <View style={styles.contentStyle}>
                  <Text style={styles.headertext}>{item.title}</Text>
                  <Text numberOfLines={3} style={styles.desctext}>
                    {item.description}
                  </Text>

                  <TouchableOpacity
                    ref={(component) => (this.touchable = component)}
                    style={styles.signInbtn}
                    onPress={() => {
                      this.props.navigation.navigate("App");
                    }}
                  >
                    <Text style={styles.buttongetstarted}> GET STARTED</Text>
                  </TouchableOpacity>
                </View>
                </ImageBackground>
            );
          })}
        </Swiper>
      </Container>
    );
  }
}
