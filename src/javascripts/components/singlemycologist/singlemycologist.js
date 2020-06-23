import utils from '../../helpers/utils';
import mycodata from '../../helpers/data/mycologistData';

const buildMycologist = (e) => {
  const mycologistId = e.target.closest('.card').id;
  mycodata.getMycologistById(mycologistId)
    .then((response) => {
      const mycologist = response.data;
      const domString = `
        <h2 class="text-center">Featured Mycologist</h2>
        <div class="col-12">
          <div class="card text-white bg-dark border-0 rounded-0">
            <div class="card-header">Mycologist ${mycologist.name} (Age: ${mycologist.age})</div>
            <div class="card-body"></div>
          </div>
        </div>
      `;

      utils.printToDom('#single-myco', domString);
    })
    .catch((err) => console.error(err));
};

export default { buildMycologist };
