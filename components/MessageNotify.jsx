import { StyleSheet, Text, View } from "react-native";
import React from "react";

const MessageNotify = ({ nameFrom, status, time }) => {
  return (
    <View>
      <View>
        {/* icon */}
        <View>
          <Text>Message</Text>
          <Text>new message</Text>
        </View>
      </View>
      <View>
        <Text>time</Text>
      </View>
    </View>
  );
};

export default MessageNotify;

const styles = StyleSheet.create({});
