export interface NetworkItem {
  id: string;
  communityTitle: string;
  communityDescription: string;
  type: "discord" | "telegram" | "whatsapp" | "slack" | "facebook" | "linkedin";
  votes: number;
  category: string;
  inviteLink: string;
  voters: string[];
}
