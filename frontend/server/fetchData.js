let dataUrl = 'https://question-analytics.vercel.app/api/analytics/age';
const ageGender = async () => {
  const res = await fetch(dataUrl);
  const data = await res.json();
  return data;
};
export { ageGender };
