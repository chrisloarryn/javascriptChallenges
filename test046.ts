const updateStatePrivilegeAssignments = (privilegesAssignments: any) => {
  if (privilegesAssignments && privilegesAssignments.department.department) {
      const id = findIdByElementName(privilegesAssignments.department.department) // Anestesiologia
      const department = {
        ...privilegesAssignments.department,
        department: id
      }
    const xd = { ...privilegesAssignments, department }
    setUpdateState(xd)
      // privilegesAssignments.department.department = 'ANESTESIOLIGIA'
  }
  setUpdateState(xd)
    
}