export class Office{
    public officeType:string | undefined;
    public officeName:string | undefined;
    public officeDescription:string | undefined;
    public constactNumber:string | undefined;
    public highestOfficer:string | undefined;
    public officerDesignation:string | undefined;
    public officerEmail:string | undefined;
    public officerMobile:string | undefined;
    public gstNumber:string | undefined;
    public  pan:string | undefined;
    constructor(officeType:string,officeName:string,officeDescription:string,constactNumber:string,highestOfficer:string,officerDesignation:string,officerEmail:string,officerMobile:string,gstNumber:string,pan:string){
        this.officeType=officeType;
        this.officeName=officeName;
        this.officeDescription= officeDescription;
        this.constactNumber= constactNumber;
        this.highestOfficer= highestOfficer;
        this.officeDescription=officeDescription;
        this.officerEmail= officerEmail;
        this.officerMobile=officerMobile;
        this.pan=pan;
        this.gstNumber=gstNumber
        
    }
}
