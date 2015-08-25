

export class Contracts
{
    selectedContract = null ;
    selectedApplicaiton = null ;

    contracts = [{Id : 1, ContractName :"FindBeneficiary" }, {Id : 2, ContractName : "Add Beneficiary" }];

    applications = [{Id : 1, ApplicationName : "RS" }, {Id : 2, ApplicationName : "BW" }];

    selectContract()
    {
        alert('Selected Contract parent: ' + this.selectedContract);
    }


    selectApplication()
    {
        alert('Selected Applicaiotn parent: ' + this.selectedApplicaiton);
    }
}
           