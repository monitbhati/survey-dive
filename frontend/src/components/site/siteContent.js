// Survey Dive's contact details, used across the site.
// Replace the [bracketed] values once the client confirms them.
export const company = {
  email: 'sales@surveydive.com',
  phone: '[+91 00000 00000]',
  address: '540, Tower -3, Golden I, Techzone IV, Greater Noida West U.P. (201318)',
  hours: 'Monday to Friday, 1:30 pm to 6:00 am IST',
  careersEmail: '[careers@surveydive.in]',
  panelEmail: '[panel@surveydive.in]',
  linkedin: 'https://www.linkedin.com/company/survey-dive',
};

// true only when the value above has been filled in (no brackets left)
export const isReal = (value) => Boolean(value) && !value.includes('[');
