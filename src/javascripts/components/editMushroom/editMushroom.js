import utils from '../../helpers/utils';

import mushroomData from '../../helpers/data/mushroomData';

const showForm = (mushroomId) => {
  mushroomData.getMushById(mushroomId)
    .then((response) => {
      const mushroom = response.data;
      const domString = `
      <form id=${mushroomId} class="edit-shroom">
      <div class="form-group">
      <label for="edit-mushroomName">Name:</label>
      <input type="text" class="form-control" id="edit-mushroomName" value="${mushroom.name}">
      </div>
      <div class="form-group">
      <label for="edit-mushroomSize">Size:</label>
      <input type="text" class="form-control" id="edit-mushroomSize" value="${mushroom.size}">
      </div>
      <div class="form-group">
      <label for="edit-mushroomLocation">Location:</label>
      <input type="text" class="form-control" id="edit-mushroomLocation" value="${mushroom.location}">
      </div>
      <div class="form-group">
      <label for="edit-mushroomWeight">Weight:</label>
      <input type="number" class="form-control" id="edit-mushroomWeight" value="${mushroom.weight}">
      </div>
      <button type="submit" class="btn btn-primary" id="mush-editor">Update</button>
      </form>
    `;
      utils.printToDom('#new-shroom', domString);
    })
    .catch((err) => err);
};

export default { showForm };
