import { Configuration,OpenAIApi } from "openai-edge";
import { OpenAIStream,StreamingTextResponse } from "ai";

export const runtime = 'edge'

const config = new Configuration({
	apiKey:process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(config)

export async function POST(request:Request) {
	const {messages}=await request.json()

	// pesan dari user 
	console.log(messages);
	

	// buat chat complet6ion nya
	const response = await openai.createChatCompletion({
		model : 'gpt-3.5-turbo',
		stream : true,
		messages : [{
			role:"assistant",content : "saya adalah ai yang dirancang oleh mas FIQRO NAJIAH A.K.A OPIQ ke website ini untuk membantu anda dalam untuk menjawab pertanyaan-pertanyaan anda"
		},...messages]
	})

	// kirim data ke front end / ke halaaman utama

	const stream =  await OpenAIStream(response);
	return new StreamingTextResponse(stream)

}