const renderTip = async () => {
    const tipId = parseInt(window.location.pathname.split('/').pop());
  
    

    try {
      const response = await fetch(`/tips`);
      const data = await response.json();
      console.log("Tip ID:", tipId);
      console.log("Fetched Tips:", data);
      console.error('Fetch error:', error);

  
      const tip = data.find((t) => t.id === tipId);
  
      const tipContent = document.getElementById('tip-content');
  
      if (tip) {
        const imageElement = document.getElementById('image');
        imageElement.src = tip.image;
        imageElement.alt = tip.title;
  
        // Update the title
        document.getElementById('title').textContent = tip.title;
  
        // Update submittedBy and submittedOn
        document.getElementById('submittedBy').textContent = `Submitted by: ${tip.submittedBy}`;
        document.getElementById('submittedOn').textContent = `Submitted on: ${tip.submittedOn}`;
  
        // Update category
        document.getElementById('category').textContent = `Category: ${tip.category}`;
  
        // Update text
        document.getElementById('text').textContent = tip.text;
  
        // Update page title
        document.title = tip.title;
      } else {
        tipContent.innerHTML = '<h2>No Tip Available 😞</h2>';
      }
    } catch (error) {
      console.error('Error fetching tip:', error);
      tipContent.innerHTML = '<h2>Error loading tip</h2>';
    }
  };
  
renderTip();
  