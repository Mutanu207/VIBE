import axios from "axios"
import { InferenceClient } from "@huggingface/inference";
const client = new InferenceClient(process.env.API_TOKEN);

export const fetchEmotions = async (moodInput) => {
    try{
    const output = await client.textClassification({
	model: "SamLowe/roberta-base-go_emotions",
	inputs: moodInput,
	provider: "hf-inference",
});
console.log(output);
    }
    catch (error) {
        console.error("Error fetching emotions:", error);
        throw error;
    }
}