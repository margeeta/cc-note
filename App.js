import React from "react";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import styled from "styled-components";
import { MaterialIcons } from "@expo/vector-icons";
import ImageOverlay from "react-native-image-overlay";

const windowWidth = Dimensions.get("window").width;
const photoMargin = 1;
const photoSize = windowWidth / 3 - photoMargin * 2;

export default class App extends React.Component {
  render() {
    return (
      <Container>
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
        <View style={styles.tabView}>
          <View style={styles.tabs}>
            <Text style={[styles.tab, styles.tabActive]}>Photos (1)</Text>
            <Text style={styles.tab}>Docs (0)</Text>
            <Text style={styles.tab}>Note</Text>
          </View>
        </View>
        <Text style={styles.feedDate}>Yesterday • Jun 12, 2020</Text>
        <View style={styles.feed}>
          <Image style={styles.photo} source={require("./assets/header.jpg")} />
          <Image
            style={styles.photo}
            source={{
              uri:
                "https://images.unsplash.com/photo-1506941433945-99a2aa4bd50a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
            }}
          />
          <Image
            style={styles.photo}
            source={{
              uri:
                "https://images.unsplash.com/photo-1591989331039-f645c3d7888c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80",
            }}
          />
          <Image
            style={styles.photo}
            source={{
              uri:
                "https://images.unsplash.com/photo-1588346351125-a852422d96b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
            }}
          />
        </View>
        <Comment>
          <Avatar>IK</Avatar>
          <CommentText>Add project comment…</CommentText>
        </Comment>
      </Container>
    );
  }
}

const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

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
  bottom: 0px;
  padding: 16px;
  color: rgba(29, 38, 43, 0.4);
  background: #ffffff;
  box-shadow: 0px -4px 8px rgba(0, 0, 0, 0.14);
  border-radius: 8px;
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
  tabs: {
    flexDirection: "row",
    paddingLeft: 16,
    borderColor: "gray",
  },
  tab: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    fontSize: 14,
    color: "gray",
    fontWeight: "bold",
  },
  tabActive: {
    color: "black",
    borderBottomColor: "black",
    borderBottomWidth: 2,
  },
  feedDate: {
    margin: 16,
    color: "gray",
  },
  feed: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  photo: {
    width: photoSize,
    height: photoSize,
    backgroundColor: "lightgray",
    margin: photoMargin,
  },
});
