import { environment } from "../../../environments/environment.prod";
export class Globals {
    public static readonly server = environment.serverUrl;
    public static readonly route = {
        'login': Globals.server + 'user/login',
        //stateList
        'getStateList': Globals.server + 'user/getStateList',
        //scheme
        'addNewScheme': Globals.server + 'systemConfiguration/scheme/add',
        'scheme': Globals.server + 'systemConfiguration/scheme',
        'schemeById': Globals.server + 'systemConfiguration/schemeById',
        'checkSchemeCode': Globals.server + 'systemConfiguration/checkSchemeCode',
        'deleteScheme': Globals.server + 'systemConfiguration/deleteScheme',
        'addNewschemeType': Globals.server + 'systemConfiguration/schemeType/add',
        'schemeType': Globals.server + 'systemConfiguration/schemeType',
        'schemeTypeById': Globals.server + 'systemConfiguration/schemeTypeById',
        'checkSchemeType': Globals.server + 'systemConfiguration/checkSchemeType',
        'deleteSchemeType': Globals.server + 'systemConfiguration/deleteSchemeType',
        //vendor type
        'addNewVendorType': Globals.server + 'systemConfiguration/vendorType/add',
        'vendorType': Globals.server + 'systemConfiguration/vendorType',
        'vendorTypeById': Globals.server + 'systemConfiguration/vendorTypeById',
        'checkVendorTypeCode': Globals.server + 'systemConfiguration/checkVendorTypeCode',
        'deleteVendorType': Globals.server + 'systemConfiguration/deleteVendorType',
        //officer type
        'addNewOfficer': Globals.server + 'systemConfiguration/officer/add',
        'officer': Globals.server + 'systemConfiguration/officer',
        'officerById': Globals.server + 'systemConfiguration/officerById',
        // 'checkVendorTypeCode': Globals.server + 'systemConfiguration/checkVendorTypeCode',
        'deleteOfficer': Globals.server + 'systemConfiguration/deleteOfficer',

    };
}
