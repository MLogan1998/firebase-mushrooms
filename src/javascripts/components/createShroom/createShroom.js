import utils from '../../helpers/utils';
import './createShroom.scss';

const showForm = () => {
  const domString = `
    <form>
    <div class="form-group">
    <label for="mushroomName">Name:</label>
    <input type="text" class="form-control" id="mushroomName">
    </div>
    <div class="form-group">
    <label for="mushroomSize">Size:</label>
    <input type="text" class="form-control" id="mushroomSize">
    </div>
    <div class="form-group">
    <label for="mushroomLocation">Location:</label>
    <input type="text" class="form-control" id="mushroomLocation">
    </div>
    <div class="form-group">
    <label for="mushroomWeight">Weight:</label>
    <input type="number" class="form-control" id="mushroomWeight">
    </div>
    <button type="submit" class="btn btn-primary" id="mushCreator">Submit</button>
    </form>
  `;
  utils.printToDom('#new-shroom', domString);
};

export default { showForm };
