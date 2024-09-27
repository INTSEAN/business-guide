const renderTips = async () => {
    try {
      const response = await fetch('/tips');
      const data = await response.json();
  
      const mainContent = document.getElementById('main-content');
  
      if (data && data.length > 0) {
        data.forEach((tip) => {
          //  card element
          const card = document.createElement('div');
          card.className = 'card';
  
          //  top-container
          const topContainer = document.createElement('div');
          topContainer.className = 'top-container';
          topContainer.style.backgroundImage = `url(${tip.image})`;
  
          //  bottom-container
          const bottomContainer = document.createElement('div');
          bottomContainer.className = 'bottom-container';
  
          //  title
          const title = document.createElement('h3');
          title.textContent = tip.title;
  
          //  text snippet
          const textSnippet = document.createElement('p');
          textSnippet.textContent = `${tip.text.substring(0, 100)}...`;
  
          //  category
          const category = document.createElement('p');
          category.textContent = `Category: ${tip.category}`;
  
          //  Read More link
          const readMoreLink = document.createElement('a');
          readMoreLink.textContent = 'Read More >';
          readMoreLink.href = `/tips/${tip.id}`;
          readMoreLink.setAttribute('role', 'button');
  
          // Append elements
          bottomContainer.appendChild(title);
          bottomContainer.appendChild(textSnippet);
          bottomContainer.appendChild(category);
          bottomContainer.appendChild(readMoreLink);
  
          card.appendChild(topContainer);
          card.appendChild(bottomContainer);
  
          mainContent.appendChild(card);
        });
      } else {
        const noTipsMessage = document.createElement('h2');
        noTipsMessage.textContent = 'No Tips Available 😞';
        mainContent.appendChild(noTipsMessage);
      }
    } catch (error) {
      console.error('Error fetching tips:', error);
    }
  };
  
  renderTips();
  