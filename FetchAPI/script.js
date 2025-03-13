fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((posts) => {
    const container = document.getElementById('cardContainer');

    for (let i = 0; i < posts.length; i++) {
      const post = posts[i];
      const card = document.createElement('div');
      card.className = 'card';

      card.innerHTML = `
        <h2>${post.id}</h2>
        <h3>${post.title}</h3>
        <p>${post.body}</p>
      `;

      container.appendChild(card);
    }
  })
  .catch((error) => console.error('Error fetching posts:', error));
