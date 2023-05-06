import { NextApiRequest, NextApiResponse } from "next";
import { Configuration,OpenAIApi } from "openai";
import dotenv from 'dotenv';
dotenv.config();

type ResponseData ={
    text: string;
}

interface GenerateNextApiRequest extends NextApiRequest{
    body: {
        prompt: string;
    }
}

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
});
const openai = new OpenAIApi(configuration);

export default async function handler(
    req: GenerateNextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    const prompt = req.body.prompt;
    console.log("API Key:", process.env.OPENAI_API_KEY);
    if (!prompt || prompt.length <= 1){
        return new Response('Please enter a valid Prompt', {status: 400})
    }

    const aiResult = await openai.createCompletion({
        model: 'text-davinci-003',   
        prompt: `${prompt}`,
        temperature: 0.2, //0-2 higher value means the model will take more risks
        max_tokens: 250, //max number of tokens to be generated
        frequency_penalty: 0.5, 
        presence_penalty: 0,       
    });

    const respone = aiResult.data.choices[0].text?.trim() || 'Sorry, there was a problem!';
    res.status(200).json({text: respone});
}
