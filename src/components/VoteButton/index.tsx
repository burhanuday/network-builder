import * as React from "react";
import { StyleSheet } from "react-native";
import Button from "../UI/Button";
import { Entypo } from "@expo/vector-icons";

export interface VoteButtonProps {
  upvote: boolean;
  voted?: boolean;
}

const COLOR_UPVOTE = "#ff4500";
const COLOR_DOWNVOTE = "#7193ff";

const VoteButton: React.FC<VoteButtonProps> = ({ upvote }) => {
  return (
    <Button
      style={[
        styles.circularButton,
        { backgroundColor: upvote ? "#ff4500" : "#7193ff" },
      ]}
    >
      <Entypo
        name={upvote ? "arrow-bold-up" : "arrow-bold-down"}
        size={28}
        color="white"
      />
    </Button>
  );
};

const styles = StyleSheet.create({
  circularButton: {
    width: 54,
    height: 54,
    borderRadius: 27,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
    marginHorizontal: 4,
  },
});

export default VoteButton;
