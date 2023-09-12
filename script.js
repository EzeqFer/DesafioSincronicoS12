document.addEventListener("DOMContentLoaded", function () {
    const commentsContainer = document.getElementById("comments-container");
    const commentForm = document.getElementById("comment-form");
  
 
    function fetchAndDisplayComments() {
      fetch('https://jsonplaceholder.typicode.com/comments?_limit=10&_sort=id&_order=desc')
        .then(response => response.json())
        .then(data => {
          commentsContainer.innerHTML = '';
  
          data.forEach(comment => {
            const commentDiv = document.createElement('div');
            commentDiv.classList.add('comment');
  
            const commentText = document.createElement('p');
            commentText.textContent = comment.body;
  
            commentDiv.appendChild(commentText);
  
            
            const starRating = document.createElement('div');
            starRating.classList.add('star-rating');
            const rating = Math.floor(Math.random() * 5) + 1;
            for (let i = 1; i <= 5; i++) {
              const star = document.createElement('span');
              star.classList.add('fa', 'fa-star');
              if (i <= rating) {
                star.classList.add('checked');
              }
              starRating.appendChild(star);
            }
  
            commentDiv.appendChild(starRating);
            commentsContainer.appendChild(commentDiv);
          });
        })
    }
  
    
    fetchAndDisplayComments();
  
    
    commentForm.addEventListener("submit", function () {
      
  
      
      const commentText = document.getElementById("comment").value;
      const rating = parseInt(document.getElementById("rating").value);
  

  
      
      const commentDiv = document.createElement('div');
      commentDiv.classList.add('comment');
  
      const commentTextElement = document.createElement('p');
      commentTextElement.textContent = commentText;
  
      commentDiv.appendChild(commentTextElement);
  
      
      const starRating = document.createElement('div');
      starRating.classList.add('star-rating');
      for (let i = 1; i <= 5; i++) {
        const star = document.createElement('span');
        star.classList.add('fa', 'fa-star');
        if (i <= rating) {
          star.classList.add('checked');
        }
        starRating.appendChild(star);
      }
  
      commentDiv.appendChild(starRating);
      commentsContainer.prepend(commentDiv); 

      commentForm.reset();
    });
  });
  