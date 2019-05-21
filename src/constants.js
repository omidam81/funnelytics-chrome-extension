export const Types = [
  { label: 'Button Click', value: 'click' },
  { label: 'Form Submission', value: 'submit' },
  { label: 'Video Play', value: 'play' },
  { label: 'Purchase', value: 'purchase' }
];

export const getLabel = type => {
  const result = Types.find(c => c.value === type);
  return result ? result.label : null;
};
