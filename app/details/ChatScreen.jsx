import React, { useState, useCallback, useEffect } from "react";
import { GiftedChat, Bubble, Send, Actions } from "react-native-gifted-chat";
import { useRoute } from "expo-router";
import { View } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hello",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://picsum.photos/200",
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  const renderSend = (props) => {
    return (
      <Send {...props}>
        <View className="mb-2 mr-3">
          <MaterialCommunityIcons
            name="send-circle"
            size={32}
            color="#00bdd6"
          />
        </View>
      </Send>
    );
  };

  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: "#00bdd6",
          },
          left: {
            backgroundColor: "#f0f0f0", // Màu nền của tin nhắn bên trái
          },
        }}
        textStyle={{
          right: {
            color: "#fff",
          },
          left: {
            color: "#000", // Màu chữ của tin nhắn bên trái
          },
        }}
      />
    );
  };

  const renderActions = (props) => {
    return (
      <Actions
        {...props}
        options={{
          ["Send Image"]: () => {
            console.log("Send Image");
          },
          ["Send File"]: () => {
            console.log("Send File");
          },
          ["Send Icon"]: () => {
            console.log("Send Icon");
          },
        }}
        icon={() => (
          <View className="w-10 h-10">
            <Ionicons name="add-circle" size={30} color="#00bdd6" />
          </View>
        )}
        onSend={(args) => console.log(args)}
      />
    );
  };

  const scrollToBottomComponent = () => {
    return <MaterialIcons name="keyboard-arrow-down" size={32} color="black" />;
  };

  return (
    <GiftedChat
      containerStyle={{ backgroundColor: "white" }}
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: 1,
      }}
      renderBubble={renderBubble}
      alwaysShowSend
      renderSend={renderSend}
      renderActions={renderActions}
      scrollToBottom
      scrollToBottomComponent={scrollToBottomComponent}
    />
  );
};

export default ChatScreen;
