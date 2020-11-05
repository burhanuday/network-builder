import { NetworkItem } from "../interfaces/NetworkItem";

export const networkListItemsMockData: NetworkItem[] = [
  {
    id: "1",
    communityTitle: "Reactiflux",
    communityDescription:
      "Community for React, React Native and other renderers",
    type: "discord",
    votes: 10,
    category: "Development",
    inviteLink: "linkhere",
    voters: ["email1@mail.com", "email2@mail.com", "email3@mail.com"],
  },
  {
    id: "2",
    communityTitle: "Coffeescript",
    communityDescription: "All coffescript stuff",
    type: "telegram",
    votes: 5,
    category: "Development",
    inviteLink: "linkhere",
    voters: ["email1@mail.com", "email2@mail.com", "email3@mail.com"],
  },
  {
    id: "3",
    communityTitle: "Artsy",
    communityDescription: "This is a place for art",
    type: "slack",
    votes: -10,
    category: "Development",
    inviteLink: "linkhere",
    voters: ["email1@mail.com", "email2@mail.com", "email3@mail.com"],
  },
  {
    id: "4",
    communityTitle: "Cloud Love",
    communityDescription: "A place for all cloud lovers",
    type: "whatsapp",
    votes: 10,
    category: "Development",
    inviteLink: "linkhere",
    voters: ["email1@mail.com", "email2@mail.com", "email3@mail.com"],
  },
];
