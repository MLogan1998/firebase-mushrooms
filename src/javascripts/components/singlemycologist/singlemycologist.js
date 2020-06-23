// import utils from '../../helpers/utils';
import mycodata from '../../helpers/data/mycologistData';

const buildMycologist = (e) => {
  const mycologistId = e.target.closest('.card').id;
  mycodata.getMycologistById(mycologistId)
    .then((response) => {
      const mycologist = response.data;
      console.warn(mycologist);
    })
    .catch((err) => console.error(err));
};

export default { buildMycologist };
