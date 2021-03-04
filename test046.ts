export interface INameValueId {
  _id?: string;
  name?: string;
  value?: string;
}

export const findIdByElementName = (arr: INameValueId[], name: string): string | null | undefined => {
  if (!Array.isArray(arr)) return 'Name not found'
  if (!name) return null
  if (Array.isArray(arr) && name) {
    const [itemFound] = arr.filter(item => item.name === name.toUpperCase())
    return itemFound?._id
  }
  return undefined
}

interface ProfessionalService {
  service: string;
}

const setUpdateState = (xd: unknown) => {} 

const updateStatePrivilegeAssignments = (privilegesAssignments: any) => {
  if (privilegesAssignments && privilegesAssignments.department.department) {
    const id = findIdByElementName([], privilegesAssignments.department.department)
    const department = {
      ...privilegesAssignments.department,
      department: id
    }
    const services =
      privilegesAssignments.services.length > 0 ?
        privilegesAssignments.services.map((service: ProfessionalService) => {
          const id = findIdByElementName([], service.service)
          return {
            ...service,
            service: id
          }
        }) :
        []
    const xd = { services, department }
    setUpdateState(xd)
  }
}
    
