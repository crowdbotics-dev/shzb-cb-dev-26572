import React from "react";
import { View, ImageBackground } from "react-native";

const Userprofile = () => {
  return <View style={{
    padding: 10,
    position: 'relative',
    height: '100%'
  }}>
        <ImageBackground source="https://crowdbotics-slack-dev.s3.amazonaws.com/media/components/screens/react-native-user-profile_JM0Unca.png" resizeMode="contain" style={{
      flex: 1,
      justifyContent: "center"
    }}>
        </ImageBackground>
      </View>;
};

export default Userprofile;