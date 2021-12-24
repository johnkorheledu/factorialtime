import { Injectable } from '@angular/core';
import OpenAI from 'openai-api';
import { environment } from 'src/environments/environment';

// Load your key from an environment variable or secret management service
// (do not include your key directly in your code)
const OPENAI_API_KEY = environment.apiKey;

const openai = new OpenAI(OPENAI_API_KEY);

@Injectable({
  providedIn: 'root',
})
export class CodeFormService {
  async getTimeComplexity(code: any) {
    const formattedPrompt =
      code + '\n' + '"""' + '\n' + 'The time complexity of this function is';
    console.log(formattedPrompt);
    const gptResponse = await openai.complete({
      engine: 'davinci',
      prompt: formattedPrompt,
      maxTokens: 64,
      temperature: 0,
      topP: 1.0,
      presencePenalty: 0.0,
      frequencyPenalty: 0.0,
      bestOf: 1,
      n: 1,
      stream: false,
      stop: ['\n'],
    });
    // console.log(code);
    // console.log(gptResponse.data.choices[0].text);
    return gptResponse.data.choices[0].text;
  }
  constructor() {}
}
