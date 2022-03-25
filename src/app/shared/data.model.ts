export class Office {
    public officeType: string ;
    public officeName: string ;
    public officeDescription: string ;
    public contactNumber: Number ;
    public highestOfficer: string ;
    public officerDesignation: string ;
    public officerEmail: string ;
    public officerMobile: Number ;
    public gstNumber: string ;
    public pan: string ;
    public nodalOfficerName: string ;
    public nodalOfficerMobile: Number ;
    public nodalOfficerEmail: string ;
    constructor(
        officeType: string,
        officeName: string,
        officeDescription: string,
        contactNumber: Number,
        highestOfficer: string,
        officerDesignation: string,
        officerEmail: string,
        officerMobile: Number,
        gstNumber: string,
        pan: string,
        nodalOfficerName: string,
        nodalOfficerMobile: Number,
        nodalOfficerEmail: string
    ) {
        this.officeType = officeType;
        this.officeName = officeName;
        this.officeDescription = officeDescription;
        this.contactNumber = contactNumber;
        this.highestOfficer = highestOfficer;
        this.officeDescription = officeDescription;
        this.officerEmail = officerEmail;
        this.officerMobile = officerMobile;
        this.pan = pan;
        this.gstNumber = gstNumber
        this.officerDesignation = officerDesignation;
        this.nodalOfficerEmail = nodalOfficerEmail;
        this.nodalOfficerName = nodalOfficerName;
        this.nodalOfficerMobile = nodalOfficerMobile

    }
}

export class Designation {
    designationName: string
    reportingTo: string
    constructor(designationName: string, reportingTo: string) {
        this.designationName = designationName;
        this.reportingTo = reportingTo
    }

}
export class Officer {
    public name: string
    public dob: string
    public gender: string
    public fatherName: string
    public aadhaarNo: number
    public panNo: string
    public mobileNumber: number
    public email: string
    constructor(
        name: string,
        dob: string,
        gender: string,
        fatherName: string,
        aadhaarNo: number,
        panNo: string,
        mobileNumber: number,
        email: string,
    ) {
        this.name = name;
        this.dob = dob;
        this.gender = gender;
        this.fatherName = fatherName;
        this.aadhaarNo = aadhaarNo;
        this.panNo = panNo;
        this.mobileNumber = mobileNumber;
        this.email = email
    }
}


export class VendorType {
    vendorTypeCode: String
    vendorTypeName: string
    vendorTypeDescription: string
    constructor(vendorTypeCode: String,
        vendorTypeName: string,
        vendorTypeDescription: string,) {
        this.vendorTypeCode = vendorTypeCode
        this.vendorTypeName = vendorTypeName
        this.vendorTypeDescription = vendorTypeDescription
    }

}

export class VendorService {
    vendorServiceCode: String
    vendorServiceName: string
    vendorServiceDescription: string
    constructor(vendorServiceCode: String,
        vendorServiceName: string,
        vendorServiceDescription: string,) {
        this.vendorServiceCode = vendorServiceCode
        this.vendorServiceName = vendorServiceName
        this.vendorServiceDescription = vendorServiceDescription
    }

}
export class Agency {
    agencyCode: String
    agencyName: string
    constructor(agencyCode: string, agencyName: string) {
        this.agencyCode = agencyCode
        this.agencyName = agencyName
    }

}