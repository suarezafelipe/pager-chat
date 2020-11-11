export interface Message {
  type: string;
  username: string;
  time: Date;
  text?: string;
  url?: string;
  alt?: string;
}
