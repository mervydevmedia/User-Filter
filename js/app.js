// DOM elements
const result = document.getElementById('result');
const filter = document.getElementById('filter');

// Init list items
const listItems = [];

// Input listener
filter.addEventListener('input', (e) => filterData(e.target.value));

function filterData(searchTerm) {
   listItems.forEach(item => {
      if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
         item.classList.remove('hide');
      } else {
         item.classList.add('hide');
      }
   });
}

async function getData() {
   // Get users
   const response = await fetch('https://randomuser.me/api?results=50');

   // Get results
   const { results } = await response.json();

   // Clear result
   result.innerHTML = '';

   results.forEach(user => {
      // Create li
      const li = document.createElement('li');

      // Insert elements
      li.innerHTML = `
         <img src='${user.picture.large}' alt='${user.name.first}'>
         <div class='user-info'>
            <h4> ${user.name.first} ${user.name.last} </h4>
            <p> ${user.location.city}, ${user.location.country} </p>
         </div>
      `;

      // Append child
      result.appendChild(li);

      // Add to table
      listItems.push(li);
   });
}

getData();