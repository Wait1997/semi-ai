import type {
  ChatCompletionMessageToolCall,
  ChatCompletionMessageParam as SdkChatCompletionMessageParam,
  ChatCompletionToolMessageParam,
  ChatCompletionContentPart as SdkChatCompletionContentPart,
  ChatCompletionUserMessageParam as SdkChatCompletionUserMessageParam,
  ChatCompletionToolMessageParam as SdkChatCompletionToolMessageParam
} from 'openai/resources'

export * from 'openai/resources'

export type ChatCompletionContentPartFile = {
  name: string
  url: string
  type: 'file_url'
}

// Add file type
export type ChatCompletionContentPart = SdkChatCompletionContentPart | ChatCompletionContentPartFile

type CustomChatCompletionUserMessageParam = Omit<ChatCompletionUserMessageParam, 'content'> & {
  role: 'user'
  content: string | Array<ChatCompletionContentPart>
}

type CustomChatCompletionToolMessageParam = SdkChatCompletionToolMessageParam & {
  role: 'tool'
  name?: string
}

export type ChatCompletionMessageParam =
  | Exclude<
      SdkChatCompletionMessageParam,
      SdkChatCompletionUserMessageParam | SdkChatCompletionToolMessageParam
    >
  | CustomChatCompletionUserMessageParam
  | CustomChatCompletionToolMessageParam

export type SdkChatCompletionMessageParam = SdkChatCompletionMessageParam

export type ChatCompletionToolMessageParam = ChatCompletionToolMessageParam & { name: string }

export type ChatCompletionAssistantToolParam = {
  role: 'assistant'
  tool_calls: ChatCompletionMessageToolCall[]
}
