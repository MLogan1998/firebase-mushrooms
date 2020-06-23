const mycologistMaker = (mycologist) => {
  const domString = `
  <div class="card shroomCard">
  <div class="card-body">
    <h5 class="card-title sTitle">${mycologist.name}</h5>
    <p class="card-text">${mycologist.name} is ${mycologist.age} years old.</p>
  </div>
</div>
  `;
  return domString;
};

export default { mycologistMaker };
