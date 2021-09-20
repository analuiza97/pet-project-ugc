import data from '../../../__mock__/mockData';

const randomBoolean = () => Math.random() < 0.5;

export default function serviceUser(req, res) {
  const withDataError = randomBoolean();
  const corruptData = [...data].push(null);

  return res.status(200).json(withDataError ? corruptData : data);
}
