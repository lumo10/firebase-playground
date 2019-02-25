console.log('fetch');

fetch('fetch.json')
  .then(response => {
    if(response.ok)
        return response.json();

    throw new Error('Network response was not ok.');
  })
  .then(json => console.log(json) )
  .catch(e => console.error(e.message));
