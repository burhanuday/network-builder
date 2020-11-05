import * as React from "react";
import { Image, StyleSheet } from "react-native";

import DiscordIcon from "../../../assets/icons/016-discord.png";
import FacebookIcon from "../../../assets/icons/024-facebook.png";
import LinkedinIcon from "../../../assets/icons/052-linkedin.png";
import RedditIcon from "../../../assets/icons/072-reddit.png";
import SlackIcon from "../../../assets/icons/079-slack.png";
import TelegramIcon from "../../../assets/icons/090-telegram.png";
import TwitterIcon from "../../../assets/icons/096-twitter.png";
import WhatsAppIcon from "../../../assets/icons/109-whatsapp.png";

export interface TypeIconProps {
  type: string;
}

const TypeIcon: React.FC<TypeIconProps> = ({ type }) => {
  const icon = React.useMemo(() => {
    switch (type) {
      case "discord":
        return DiscordIcon;
      case "facebook":
        return FacebookIcon;
      case "linkedin":
        return LinkedinIcon;
      case "reddit":
        return RedditIcon;
      case "slack":
        return SlackIcon;
      case "telegram":
        return TelegramIcon;
      case "twitter":
        return TwitterIcon;
      case "whatsapp":
        return WhatsAppIcon;
      default:
        break;
    }
  }, [type]);

  return <Image style={styles.icon} source={icon} />;
};

const styles = StyleSheet.create({
  icon: {
    height: 18,
    width: 18,
    marginLeft: 4,
  },
});

export default TypeIcon;
