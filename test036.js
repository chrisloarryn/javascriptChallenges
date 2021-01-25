// for (var i = 0; i < 3; i++) {
//   setTimeout(function () {
//     // alert(i)
//     window.alert(i)
//   }, 1000 + i)
// }

const ContractTypes = {
  Original: 'ORIGINAL',
  Guest: 'GUEST',
  SurgicalContractWithAnnexE: 'SURGICAL_CONTRACT_WITH_ANNEX_E',
  SurgicalContractWithoutAnnexE: 'SURGICAL_CONTRACT_WITHOUT_ANNEX_E',
  NonSurgicalContractWithAnnexE: 'NON_SURGICAL_CONTRACT_WITH_ANNEX_E',
  NonSurgicalContractWithoutAnnexE: 'NON_SURGICAL_CONTRACT_WITHOUT_ANNEX_E',
  ResidentContract: 'RESIDENT_CONTRACT',
  NonMedicalContract: 'NON_MEDICAL_CONTRACT',
  DentistsContract: 'DENTISTS_CONTRACT',
}
console.log(Object.values(ContractTypes))
