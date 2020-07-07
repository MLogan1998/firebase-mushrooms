import utils from '../../helpers/utils';
import './createMyco.scss';

const showForm = () => {
  const domString = `
    <form>
    <div class="form-group">
    <label for="mycoName">Name:</label>
    <input type="text" class="form-control" id="mycoName">
    </div>
    <div class="form-group">
    <label for="mycoAge">Age:</label>
    <input type="number" class="form-control" id="mycoAge">
    </div>
    <button type="submit" class="btn btn-primary" id="mycoCreator">Submit</button>
    </form>
  `;
  utils.printToDom('#new-myco', domString);
};

export default { showForm };
