import React from "react";
import { StyleSheet, Text, Dimensions, Image } from "react-native";
import styled from "styled-components";
import { MaterialIcons } from "@expo/vector-icons";
import ImageOverlay from "react-native-image-overlay";
import {
  Container,
  Header,
  View,
  Button,
  Icon,
  Fab,
  Tab,
  Tabs,
} from "native-base";

const windowWidth = Dimensions.get("window").width;
const photoMargin = 1;
const photoSize = windowWidth / 3 - photoMargin * 2;

const Photos = (props) => (
  <Container>
    <Text style={{ margin: 16, color: "gray" }}>Yesterday • Jun 12, 2020</Text>
    <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap" }}>
      <Image
        style={{
          width: photoSize,
          height: photoSize,
          backgroundColor: "lightgray",
          margin: photoMargin,
        }}
        source={require("./assets/header.jpg")}
      />
      <Image
        style={{
          width: photoSize,
          height: photoSize,
          backgroundColor: "lightgray",
          margin: photoMargin,
        }}
        source={{
          uri:
            "https://images.unsplash.com/photo-1506941433945-99a2aa4bd50a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        }}
      />
      <Image
        style={{
          width: photoSize,
          height: photoSize,
          backgroundColor: "lightgray",
          margin: photoMargin,
        }}
        source={{
          uri:
            "https://images.unsplash.com/photo-1591989331039-f645c3d7888c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80",
        }}
      />
      <Image
        style={{
          width: photoSize,
          height: photoSize,
          backgroundColor: "lightgray",
          margin: photoMargin,
        }}
        source={{
          uri:
            "https://images.unsplash.com/photo-1588346351125-a852422d96b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        }}
      />
    </View>
  </Container>
);

export default Photos;
