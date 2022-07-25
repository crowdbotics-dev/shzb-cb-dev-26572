import React from "react";
import { View, ImageBackground, Text, StyleSheet, ScrollView } from "react-native";
import { connect } from "react-redux";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
export class Blank extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render = () => <ScrollView contentContainerStyle={{
    flexGrow: 1
  }} style={styles.ScrollView_1}>
      <View style={styles.View_2} />
      <View style={styles.View_1_3}>
        <ImageBackground source={{
        uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/894d42b5-ffb7-446e-b3f3-30eabe646079"
      }} style={styles.ImageBackground_1_4} />
      </View>
      <View style={styles.View_1_6}>
        <Text style={styles.Text_1_6}>About us</Text>
      </View>
      <View style={styles.View_1_7}>
        <Text style={styles.Text_1_7}>
          I understand that uses my dolor sit amet, consectetur adipiscing elit.
          Viverra auctor laoreet sodales congue sit volutpat quisque. Mattis
          nisl in convallis sed et. Est turpis aliquam est, ut mattis nisi, amet
          feugiat. Aliquet odio consequat, nisl mauris ullamcorper malesuada
          velit sem dolor. Dui morbi porttitor integer felis, pellentesque quam.
          Et accumsan justo, massa tincidunt arcu fermentum est. Sed nibh id
          vel, diam ut feugiat nec, placerat mauris. Neque lorem netus lacinia
          elit est libero sed. Commodo viverra et, neque augue augue mauris,
          nunc ut nec.
        </Text>
      </View>
      <View style={styles.View_1_8}>
        <Text style={styles.Text_1_8}>
          I understand that uses my dolor sit amet, consectetur adipiscing elit.
          Viverra auctor laoreet sodales congue sit volutpat quisque. Mattis
          nisl in convallis sed et. Est turpis aliquam est, ut mattis nisi, amet
          feugiat. Aliquet odio consequat, nisl mauris ullamcorper malesuada
          velit sem dolor. Dui morbi porttitor integer felis, pellentesque quam.
          Et accumsan justo, massa tincidunt arcu fermentum est. Sed nibh id
          vel, diam ut feugiat nec, placerat mauris. Neque lorem netus lacinia
          elit est libero sed. Commodo viverra et, neque augue augue mauris,
          nunc ut nec.
        </Text>
      </View>
      <ImageBackground source={{
      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8ffd5ac4-37f9-49b7-a92f-3323ecc5e9a6"
    }} style={styles.ImageBackground_1_9} />
      <View style={styles.View_1_13}>
        <View style={styles.View_1_14}>
          <View style={styles.View_1_15}>
            <View style={styles.View_1_16} />
          </View>
          <View style={styles.View_1_17}>
            <View style={styles.View_1_18} />
          </View>
          <View style={styles.View_1_19}>
            <View style={styles.View_1_20} />
          </View>
          <ImageBackground source={{
          uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/363d161a-661f-4381-b0e4-11c9c0855bc7"
        }} style={styles.ImageBackground_1_21} />
        </View>
      </View>
    </ScrollView>;
}
const styles = StyleSheet.create({
  ScrollView_1: {
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_2: {
    height: hp("122%")
  },
  View_1_3: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_1_4: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_6: {
    width: wp("21%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    justifyContent: "flex-start"
  },
  Text_1_6: {
    color: "rgba(35, 31, 32, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_7: {
    width: wp("89%"),
    top: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_1_7: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_8: {
    width: wp("89%"),
    top: hp("83%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_1_8: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_9: {
    width: wp("7%"),
    height: hp("1%"),
    top: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%")
  },
  View_1_13: {
    width: wp("84%"),
    height: hp("23%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1_14: {
    width: wp("270%"),
    minWidth: wp("270%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_15: {
    width: wp("84%"),
    height: hp("23%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_16: {
    width: wp("84%"),
    height: hp("23%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(252, 241, 214, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_1_17: {
    width: wp("84%"),
    height: hp("23%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93%")
  },
  View_1_18: {
    width: wp("84%"),
    height: hp("23%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(218, 218, 218, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_1_19: {
    width: wp("84%"),
    height: hp("23%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("186%")
  },
  View_1_20: {
    width: wp("84%"),
    height: hp("23%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(249, 216, 217, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_1_21: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    resizeMode: "cover"
  }
});

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Blank);