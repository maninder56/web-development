import { ApiFetchRequest } from "@/Services/ApiRequest";
import { ApiErrorFromStatusCode, ApiRequestFailed, ApiRequestSuccessfull } from "@/Utilities/ApiUtilities";

const contactRoute = 'contact'; 


export async function SendNewMessageRequest(data: {
    name: string; 
    email: string; 
    message: string; 
}) {
    const subUrl = contactRoute;
    const request: RequestInit = {
        headers: {
            'Content-Type': 'application/json',
        }, 
        method: 'POST', 
        body: JSON.stringify({
            Name: data.name, 
            Email: data.email, 
            Message: data.message, 
        }), 
    }; 

    try {
        const response = await ApiFetchRequest(subUrl, request); 

        if (response.ok) {
            return ApiRequestSuccessfull(); 
        } else {
            return ApiErrorFromStatusCode(response.status);
        }
    } catch (error) {
        console.error('Error: ', error);
        return ApiRequestFailed('FetchRequestFailed');
    }
}


