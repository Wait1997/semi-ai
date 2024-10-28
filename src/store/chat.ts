import { nanoid } from "nanoid";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

export type ReplayId = "Q" | "A";

// 消息内容的枚举
export const enum ContentType {
  Text = 1,
  File = 2,
  Image = 3,
  MindMap = 4,
  Search = 5,
}

// TODO: 模型的类型后面添加
export type ChatMessage = {
  model?: string;
  content: string;
  message_id: string;
  reply_id: ReplayId;
  content_type: ContentType;
  create_time: number;
};

export interface ChatConversation {
  name: string;
  bot_type: number;
  conversation_id: string;
  messages: ChatMessage[];
  update_time: number;
}

// 默认开启对话的标题
const DefaultChatName = "新对话";

export function createEmptyConversation(): ChatConversation {
  const create_id = nanoid();
  const current_time = Date.now();

  return {
    bot_type: 1,
    name: DefaultChatName,
    conversation_id: create_id,
    messages: [],
    update_time: current_time,
  };
}

export const useChatStore = create()(
  devtools(
    persist(
      immer((set, get) => ({
        conversations: [],
        currentConversation: 0,
      })),
      {
        name: "chatStore",
      }
    )
  )
);
