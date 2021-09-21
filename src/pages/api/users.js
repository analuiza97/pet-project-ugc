import data from '../../../__mock__/mockData';

const randomBoolean = () => Math.random() < 0.5;

const serviceUser = (req, res) => {
  const withDataError = randomBoolean();
  const corruptData = [...data, null];
  setTimeout(() => {
    res.status(200).json(withDataError ? corruptData : data);
  }, 3000);
};

export default serviceUser;
export { serviceUser };
