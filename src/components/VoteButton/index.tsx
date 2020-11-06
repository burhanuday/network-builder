import * as React from "react";
import { StyleSheet } from "react-native";
import Button from "../UI/Button";

export interface VoteButtonProps {
  upvote: boolean;
}

const VoteButton: React.FC<VoteButtonProps> = (props) => {
  return <Button style={styles.circularButton}>{props.children}</Button>;
};

const styles = StyleSheet.create({
  circularButton: {
    width: 54,
    height: 54,
    borderRadius: 27,
  },
});

export default VoteButton;
