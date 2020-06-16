import React from "react";
import { StyleSheet, Text, Dimensions, Image } from "react-native";
import styled from "styled-components";
import { MaterialIcons } from "@expo/vector-icons";
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

const Docs = (props) => (
  <Container>
    <Text
      style={{
        marginTop: 36,
        textAlign: "center",
        color: "#3A4B56",
        fontSize: 18,
      }}
    >
      No Documents Yet
    </Text>
    <Text
      style={{
        marginTop: 8,
        textAlign: "center",
        color: "#64717A",
        fontSize: 14,
      }}
    >
      Press the (+) button to add one!
    </Text>
  </Container>
);

export default Docs;
