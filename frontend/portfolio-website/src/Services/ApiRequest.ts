

const apiUrl = process.env.NEXT_PUBLIC_APIURL; 


export async function ApiFetchRequest(
    subUrl: string, 
    request: RequestInit,
) {
    return await fetch(apiUrl + subUrl, request); 
}


