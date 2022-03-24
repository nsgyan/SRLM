export class Office{
    public officeType:string | undefined;
    public officeName:string | undefined;
    public officeDescription:string | undefined;
    public constactNumber:Number | undefined;
    public highestOfficer:string | undefined;
    public officerDesignation:Number | undefined;
    public officerEmail:string | undefined;
    public officerMobile:Number | undefined;
    public gstNumber:string | undefined;
    public  pan:string | undefined;
    constructor(officeType:string,officeName:string,officeDescription:string,constactNumber:Number,highestOfficer:string,officerDesignation:Number,officerEmail:string,officerMobile:Number,gstNumber:string,pan:string){
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
        this.officerDesignation= officerDesignation
        
    }
}
