import React, { useContext } from "react";
import {
  Avatar,
  Title,
  List,
  ListItem,
  Body,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";
import { View, StyleSheet } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-elements";
import { getAuth, signOut } from "firebase/auth";

import Favorite from "./../screens/Favorite";
import Settings from "./../screens/Settings";
import HomeScreen from "./../screens/HomeScreen";
import { AppContext } from "./../context/AppContext";
import Bottom from "./TabNavigation";
import { useAuthentication } from "./../hooks/useAuthentication";

const auth = getAuth();

export function DrawerContent(props) {
  const navigation = useNavigation();
  const { isSwitchOn, setIsSwitchOn } = useContext(AppContext);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  const { user } = useAuthentication();

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View className="flex flex-row mt-[15px]">
              <Avatar.Image
                source={{
                  uri: "https://codewithkevin.netlify.app/assets/img/images/IMG_2709.JPG",
                }}
                size={50}
              />
              <View className="ml-[15px] flex flex-col">
                <Title
                  style={{ color: isSwitchOn === true ? "white" : "black" }}
                  className="font-bold mt-1 text-[16px]"
                >
                  KEVIN BLACK
                </Title>
                <Caption
                  style={{ color: isSwitchOn === true ? "white" : "black" }}
                  className="text-[14px]"
                >
                  <Text
                    style={{ color: isSwitchOn === true ? "white" : "black" }}
                  >
                    {user?.email}
                  </Text>
                </Caption>
              </View>
            </View>
          </View>
        </View>

        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="account-outline" color={color} size={size} />
            )}
            label="Profile"
            onPress={() => {
              props.navigation.navigate("home");
            }}
          />

          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="cards-heart-outline" color={color} size={size} />
            )}
            label="Favorite"
            onPress={() => {
              props.navigation.navigate("news");
            }}
          />
        </Drawer.Section>
        <Drawer.Section className="flex flex-row justify-between ml-5">
          <Text
            style={{ color: isSwitchOn === true ? "white" : "black" }}
            className="mt-2 ml-2 font-bold"
          >
            Dark Theme
          </Text>
          <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
        </Drawer.Section>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          onPress={() => signOut(auth)}
          icon={({ color, size }) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sing Out"
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 2,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
