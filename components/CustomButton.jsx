import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";


const CustomButton = ({
  handlePress,
  containerStyles,
  isLoading,
  textStyles,
  title,
  children
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-[#00BDD6] rounded-xl min-h-[60px] flex flex-row justify-center items-center ${containerStyles} ${
        isLoading ? "opacity-50" : ""
      }`}
      disabled={isLoading}
    >
      <TouchableOpacity
        onPress={handlePress}
        style={[styles.button, containerStyles]}
      >
        {isLoading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          children || (
            <Text className={`text-white font-psemibold text-lg ${textStyles}`}>
              {title}
            </Text>
          )
        )}

        
      </TouchableOpacity>

      {isLoading && (
        <ActivityIndicator
          animating={isLoading}
          color="#fff"
          size="small"
          className="ml-2"
        />
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({});
