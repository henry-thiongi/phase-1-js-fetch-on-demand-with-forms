

const init = () => {

    const input = document.querySelector('form')
    input.addEventListener('submit',(e)=>{
        e.preventDefault()
       const input = document.querySelector('input#searchByID')
      //  console.log(input)
       fetch(`http://localhost:3000/movies/${input.value}`)
       .then(response => response.json())
  
       .then(data => {
          const title = document.querySelector('section#movieDetails h4');
          const summary = document.querySelector('section#m ovieDetails p');
  
          title.innerText = data.title
          summary.innerText = data.summary
  
  
       }
  
       )
       })
  }
  
  document.addEventListener('DOMContentLoaded', init)