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