// console.log('app loaded:', window);

// document.addEventListener('DOMContentLoaded', () => {
//   const newSearch = document.querySelector('#search');
//   newSearch.addEventListener('submit', handleNewSearch);

  document.addEventListener('DOMContentLoaded', () => {
    const newItemform = document.querySelector('#new-item-form');
    newItemform.addEventListener('submit', handleNewItemFormSubmit);


  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewItemFormSubmit = function (event) {
  event.preventDefault();

  const clubListItem = createClubListItem(event.target);
  const clubList = document.querySelector('#club-list');
  clubList.appendChild(clubListItem);

  event.target.reset();
}

const createClubListItem = function (form) {
  const clubListItem = document.createElement('li');
  clubListItem.classList.add('club-list-item');

  const team = document.createElement('h2');
  team.textContent = form.team.value;
  clubListItem.appendChild(team);

  const stadium = document.createElement('h3');
  stadium.textContent = form.stadium.value;
  clubListItem.appendChild(stadium);

  const leagueWin = document.createElement('p');
  // cuonsole.log(form.leagueWin.log);
  leagueWin.textContent = form.win.value;
  clubListItem.appendChild(leagueWin);

  const capacity = document.createElement('p');
  // console.log(form.capacity.value);
  capacity.textContent = form.capacity.value;
  clubListItem.appendChild(capacity);

  // const mySearch = document.createElement('p');
  // mySearch.textContent = form.q.value;
  // searchTerms = mySearch.value;
  // clubListItem.appendChild(mySearch);

  return clubListItem;
}



const handleDeleteAllClick = function (event) {
  const clubList = document.querySelector('#club-list');
  clubList.innerHTML = '';
}
