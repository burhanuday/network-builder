import * as React from "react";
import { GestureResponderEvent } from "react-native";
import {
  DISCORD,
  FACEBOOK,
  LINKEDIN,
  REDDIT,
  SLACK,
  TELEGRAM,
  TWITTER,
  WHATSAPP,
} from "../../constants/iconColors";
import Button from "../UI/Button";

export interface BrandButtonProps {
  type: string;
  onPress?: (event: GestureResponderEvent) => void;
}

const BrandButton: React.FC<BrandButtonProps> = ({
  type,
  children,
  onPress,
}) => {
  const color = React.useMemo(() => {
    switch (type) {
      case "discord":
        return DISCORD;
      case "facebook":
        return FACEBOOK;
      case "linkedin":
        return LINKEDIN;
      case "reddit":
        return REDDIT;
      case "slack":
        return SLACK;
      case "telegram":
        return TELEGRAM;
      case "twitter":
        return TWITTER;
      case "whatsapp":
        return WHATSAPP;
      default:
        break;
    }
  }, [type]);

  return (
    <Button onPress={onPress} backgroundColor={color}>
      {children}
    </Button>
  );
};

export default BrandButton;
