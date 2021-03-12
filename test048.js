const moment = require('moment')
// ?.sort(
//   (a, b) =>
//     (new Date((a.certificatedAt as Date)).getTime() -
//       new Date((b.certificatedAt as Date)).getTime()) *
//     -1,
// )
// ?.map((development: Development) => {
//   const certificatedAt = !!development.certificatedAt
//   return {
//     ...(certificatedAt && {
//       certificatedAt: moment(
//         development && development.certificatedAt,
//       ),
//     }),
//     development: development.development ?? '',
//     institution: development.institution ?? '',
//     otherDevelopment: development.otherDevelopment ?? '',
//     otherDevelopmentHidden:
//       development.otherDevelopmentHidden ?? true,
//     otherInstitution: development.otherInstitution ?? '',
//     otherInstitutionHidden:
//       development.otherInstitutionHidden ?? true,
//     _id: development._id ?? '',
//   }
// })

const developments = [
  {
    certificatedAt: '2021-03-01T23:28:44.095Z',
    development: '603fa8f753dfe23969f031ee',
    document: null,
    institution: '603fa8d953dfe23969f031ed',
    otherDevelopment: 'dssd',
    otherDevelopmentHidden: true,
    otherInstitution: 'sdds',
    otherInstitutionHidden: true,
    _id: 'fde329d4cf415cdd0bf972bb',
  },
  {
    certificatedAt: '2021-03-17T23:28:44.095Z',
    development: '603fa8f753dfe23969f031ee',
    document: null,
    institution: '603fa8d953dfe23969f031ed',
    otherDevelopment: 'fd',
    otherDevelopmentHidden: true,
    otherInstitution: 'df',
    otherInstitutionHidden: true,
    _id: '0312d6bb6527ee933d029f31',
  },
  {
    certificatedAt: null,
    development: null,
    document: null,
    institution: null,
    otherDevelopment: null,
    otherDevelopmentHidden: true,
    otherInstitution: null,
    otherInstitutionHidden: true,
    _id: '04069b412bd12f13711fa3f1',
  },
]

const fixed = developments
  .sort(
    (a, b) =>
      (new Date(a.certificatedAt).getTime() -
        new Date(b.certificatedAt).getTime()) *
      -1,
  )
  .map(development => {
    const certificatedAt = !!development.certificatedAt
    return {
      ...(certificatedAt && {
        certificatedAt: moment(development && development.certificatedAt),
      }),
      development: development.development ?? '',
      institution: development.institution ?? '',
      otherDevelopment: development.otherDevelopment ?? '',
      otherDevelopmentHidden: development.otherDevelopmentHidden ?? true,
      otherInstitution: development.otherInstitution ?? '',
      otherInstitutionHidden: development.otherInstitutionHidden ?? true,
      _id: development._id ?? '',
    }
  })

console.log(new Date())
