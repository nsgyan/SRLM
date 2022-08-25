import { environment } from "../../../environments/environment.prod";
export class Globals {
    public static readonly server = environment.serverUrl;
    public static readonly route = {
        'login': Globals.server + 'user/login',
        'addNewScheme': Globals.server + 'systemConfiguration/scheme/add',
        'scheme': Globals.server + 'systemConfiguration/scheme',
        'schemeById': Globals.server + 'systemConfiguration/schemeById',
        'checkSchemeCode': Globals.server + 'systemConfiguration/checkSchemeCode',
        'deleteScheme': Globals.server + 'systemConfiguration/deleteScheme',
        'addNewschemeType': Globals.server + 'systemConfiguration/schemeType/add',
        'schemeType': Globals.server + 'systemConfiguration/schemeType',
        'schemeTypeById': Globals.server + 'systemConfiguration/schemeTypeById',
        'checkSchemeType': Globals.server + 'systemConfiguration/checkSchemeType',
        'deleteSchemeType': Globals.server + 'systemConfiguration/deleteSchemeType'
    };
}
