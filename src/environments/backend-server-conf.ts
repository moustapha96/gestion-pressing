import { environment } from "./environment.prod";


export class BackendServer{
    public static backendUrl = `${environment.baseUrl}`;
}