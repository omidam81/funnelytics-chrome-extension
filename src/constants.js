export const Types = [
  { label: 'Button Click', value: 'click' },
  { label: 'Form Submission', value: 'submit' },
  { label: 'Video Play', value: 'play' },
  { label: 'Purchase', value: 'purchase' }
];
export const sortMenuItems = [
  { label: 'Date Created', value: 'DATE_CREATED' },
  { label: 'Alphabetical (A-Z)', value: 'ALPHA_ASC' },
  { label: 'Alphabetical (Z-A)', value: 'ALPHA_DES' },
  { label: 'Triggered (Low - High)', value: 'TRIGGER_ASC' },
  { label: 'Triggered (High - Low)', value: 'TRIGGER_DES' }
];
export const getLabel = type => {
  const result = Types.find(c => c.value === type);
  return result ? result.label : null;
};
