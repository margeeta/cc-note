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
import Photos from "./tabOne";
import Docs from "./tabTwo";
import Note from "./tabThree";

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Fab
          direction="up"
          containerStyle={{}}
          style={{ backgroundColor: "#0277BD" }}
          position="bottomRight"
        >
          <Icon name="add" />
        </Fab>

        <ImageOverlay
          source={require("./assets/header.jpg")}
          height={248}
          contentPosition="top"
        >
          <AppBar>
            <View style={styles.Icons}>
              <MaterialIcons
                style={styles.AppBarIconsMenu}
                name="close"
                size={24}
                color="white"
              />

              <MaterialIcons
                style={styles.AppBarIcons}
                name="star-border"
                size={24}
                color="white"
              />
              <MaterialIcons
                style={styles.AppBarIcons}
                name="share"
                size={24}
                color="white"
              />
              <MaterialIcons
                style={styles.AppBarIcons}
                name="more-vert"
                size={24}
                color="white"
              />
            </View>
            <Title>french drain</Title>
            <Address>1100 Chesapeake dr • Austin, TX 78758</Address>
            <Chip>
              <MaterialIcons
                style={styles.ChipIcon}
                name="label"
                size={16}
                color="white"
              />
              <Text style={styles.ChipText}>Labels</Text>
            </Chip>
          </AppBar>
        </ImageOverlay>
        <Tabs
          tabBarUnderlineStyle={{ borderBottomWidth: 2, borderColor: "black" }}
        >
          <Tab
            heading="Photos (1)"
            tabStyle={{ backgroundColor: "white" }}
            textStyle={{ color: "black" }}
            activeTabStyle={{ backgroundColor: "white" }}
            activeTextStyle={{
              color: "black",
              fontWeight: "bold",
            }}
          >
            <Photos />
          </Tab>
          <Tab
            heading="Docs (0)"
            tabStyle={{ backgroundColor: "white" }}
            textStyle={{ color: "grey" }}
            activeTabStyle={{ backgroundColor: "white" }}
            activeTextStyle={{ color: "black", fontWeight: "bold" }}
          >
            <Docs />
          </Tab>
          <Tab
            heading="Note"
            tabStyle={{ backgroundColor: "white" }}
            textStyle={{ color: "grey" }}
            activeTabStyle={{ backgroundColor: "white" }}
            activeTextStyle={{ color: "black", fontWeight: "bold" }}
          >
            <Note />
          </Tab>
        </Tabs>

        <Comment>
          <Avatar>IK</Avatar>
          <CommentText>Add project comment…</CommentText>
        </Comment>
      </Container>
    );
  }
}

const AppBar = styled.View`
  width: 100%;
  margin-top: 0px;
  padding: 34px 0 48px 16px;
  color: white;
  box-shadow: 0px 2px 6px rgba(51, 51, 51, 0.41);
`;

const Title = styled.Text`
  padding-bottom: 8px;
  color: #fcfcfc;
  font-family: Roboto;
  font-weight: bold;
  font-size: 22px;
  line-height: 26px;
`;

const Address = styled.Text`
  font-family: Roboto;
  font-size: 18px;
  color: #fcfcfc;
`;

const Chip = styled.View`
  flex-direction: row;
  width: 80px;
  margin: 8px 0;
  padding: 4px 8px;
  font-family: Roboto;
  font-size: 10px;
  color: #fcfcfc;
  border: 1px solid #ffffff;
  border-radius: 2px;
`;

const Comment = styled.View`
  position: absolute;
  flex-direction: row;
  left: 0%;
  right: 0%;
  bottom: -4px;
  padding: 16px;
  background: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 8px;
  box-shadow: 0px -4px 8px rgba(0, 0, 0, 0.14);
`;

const CommentText = styled.Text`
  padding: 8px;
  font-size: 12px;
  color: rgba(29, 38, 43, 0.4);
`;

const Avatar = styled.Text`
  margin-right: 16px;
  width: 30px;
  height: 30px;
  padding: 9px;
  background: rgba(196, 196, 196, 0.3);
  border-radius: 140px;
  font-weight: bold;
  font-size: 8px;
  color: #1d262b;
  text-align: center;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  Icons: {
    flexDirection: "row",
    paddingBottom: 16,
  },
  AppBarIconsMenu: {
    flexGrow: 4,
  },
  AppBarIcons: {
    paddingHorizontal: 12,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  ChipIcon: {
    paddingRight: 8,
  },
  ChipText: {
    color: "white",
    fontSize: 12,
  },
});
