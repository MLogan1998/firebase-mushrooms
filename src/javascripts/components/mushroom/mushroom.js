const mushroomMaker = (mushroom) => {
  const domString = `
  <div class="card shroomCard" id="${mushroom.id}">
  <div class="card-body">
    <h5 class="card-title sTitle">${mushroom.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${mushroom.location}</h6>
    <p class="card-text">This mushroom is ${mushroom.size} and weighs ${mushroom.weight} grams</p>
    <button class="btn btn-danger delete-shroom"><i class="fas fa-trash mr-1"></i>Delete Shrooms</button>
  </div>
</div>
  `;
  return domString;
};

export default { mushroomMaker };
