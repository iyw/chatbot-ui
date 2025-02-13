import { OPENAI_API_TYPE } from '../utils/app/const';

export interface OpenAIModel {
  id: string;
  name: string;
  maxLength: number; // maximum length of a message
  tokenLimit: number;
}

export enum OpenAIModelID {
  GPT_3_5 = 'gpt-3.5-turbo',
  GPT_3_5_1106 = 'gpt-3.5-turbo-1106',
  GPT_4 = 'gpt-4',
  GPT_4_32K = 'gpt-4-32k',
  GPT_4_1106_PREVIEW = 'gpt-4-1106-preview',
  GPT_4_VERSION_PREVIEW = 'gpt-4-vision-preview',
  GPT_4_ALL = 'gpt-4-all',
}

// in case the `DEFAULT_MODEL` environment variable is not set or set to an unsupported model
export const fallbackModelID = OpenAIModelID.GPT_3_5;

export const OpenAIModels: Record<OpenAIModelID, OpenAIModel> = {
  [OpenAIModelID.GPT_3_5]: {
    id: OpenAIModelID.GPT_3_5,
    name: 'GPT-3.5',
    maxLength: 12000,
    tokenLimit: 4000,
  },
  [OpenAIModelID.GPT_3_5_1106]: {
    id: OpenAIModelID.GPT_3_5_1106,
    name: 'GPT-3.5-1106',
    maxLength: 12000,
    tokenLimit: 4000,
  },
  [OpenAIModelID.GPT_4]: {
    id: OpenAIModelID.GPT_4,
    name: 'GPT-4',
    maxLength: 24000,
    tokenLimit: 8000,
  },
  [OpenAIModelID.GPT_4_32K]: {
    id: OpenAIModelID.GPT_4_32K,
    name: 'GPT-4-32K',
    maxLength: 96000,
    tokenLimit: 32000,
  },
  [OpenAIModelID.GPT_4_1106_PREVIEW]: {
    id: OpenAIModelID.GPT_4_1106_PREVIEW,
    name: 'GPT-4-1106-PREVIEW',
    maxLength: 128000,
    tokenLimit: 4096,
  },
  [OpenAIModelID.GPT_4_VERSION_PREVIEW]: {
    id: OpenAIModelID.GPT_4_VERSION_PREVIEW,
    name: 'GPT-4-VERSION_PREVIEW',
    maxLength: 128000,
    tokenLimit: 4096,
  },
  [OpenAIModelID.GPT_4_ALL]: {
    id: OpenAIModelID.GPT_4_ALL,
    name: 'GPT-4-ALL',
    maxLength: 128000,
    tokenLimit: 4096,
  },
};
