import { environment } from "../../../environments/environment.prod";
export class Globals {
    public static readonly server = environment.serverUrl;
    public static readonly route = {
        'login': Globals.server + 'user/login',    
        'addNewScheme': Globals.server + 'systemConfiguration/scheme/add'
    };
}