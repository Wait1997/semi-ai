export enum Path {
  Home = '/',
  Chat = '/chat/',
  Search = '/chat/search',
  Write = '/chat/write',
  CreateImage = '/chat/create-image',
  ChatWithDoc = '/chat/chat-with-doc',
  ChatConversations = '/chat/thread/list'
}

export const menuContent = [
  {
    key: 'search',
    path: Path.Search,
    title: 'AI 搜索'
  },
  {
    key: 'write',
    path: Path.Write,
    title: '帮我写作'
  },
  {
    key: 'create-image',
    path: Path.CreateImage,
    title: '图像生成'
  },
  {
    key: 'chat-with-doc',
    path: Path.ChatWithDoc,
    title: 'AI 阅读'
  }
] as const
