import axios from "axios"
import { InferenceClient } from "@huggingface/inference";
const client = new InferenceClient(process.env.API_TOKEN); //opening a client handshake for the //
//my code to talk with the external API, in this case Hugging Face's Inference API. The API token is stored in an environment variable for security reasons.//

export const fetchEmotions = async (moodInput) => {
    try{
    const output = await client.textClassification({
	model: "SamLowe/roberta-base-go_emotions",
	inputs: moodInput,
	provider: "hf-inference",
});
console.log(output);
return output;
    }
    catch (error) {
        console.error("Error fetching emotions:", error);
        throw error;
    }
}