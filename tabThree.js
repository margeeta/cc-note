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

const Note = (props) => (
  <Container>
    <Image
      source={require("./assets/notes.png")}
      style={{
        alignSelf: "center",
        marginTop: 36,
      }}
    />
    <Text
      style={{
        marginTop: 8,
        textAlign: "center",
        color: "#3A4B56",
        fontSize: 18,
      }}
    >
      Notes Have Moved!
    </Text>
    <Text
      style={{
        marginTop: 8,
        paddingHorizontal: 40,
        textAlign: "center",
        color: "#64717A",
        fontSize: 14,
        lineHeight: 20,
      }}
    >
      Tap to start a note for you and your team to reference. Notes can be
      formatted and seen by everyone on the team!
    </Text>
  </Container>
);
export default Note;
