const validate = values => {
  const errors = {};

  if (!values.name) errors.name = 'Name Is Required';
  if (!values.type) errors.type = 'Type Is Required';
  if(!values.selector) errors.selector='Selector Is Required';
  if(!values.fieldName) errors.fieldName='Field Name Is Required';
  
  if (!values.formFields || !values.formFields.length) {
    errors.formFields = { _error: 'At least one Field must be entered' }
  } else {
    const membersArrayErrors = []
    values.formFields.forEach((member, index) => {
      const memberErrors = {}
      if (!member || !member.selector) {
        memberErrors.selector = 'Selector Is Required'
        membersArrayErrors[index] = memberErrors
      }
      if (!member || !member.type) {
        memberErrors.type = 'Type Is Required'
        membersArrayErrors[index] = memberErrors
      }
      if (!member || !member.label) {
        memberErrors.label = 'Label Is Required'
        membersArrayErrors[index] = memberErrors
      }
      if(!member || !member.identifiable){
        memberErrors.identifiable='Identifiable Is Required';
        membersArrayErrors[index]=memberErrors;
      }
    })
    if (membersArrayErrors.length) {
      errors.formFields = membersArrayErrors
    }
  }
  return errors;
};

export default validate;
