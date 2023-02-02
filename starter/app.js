let btn = document.querySelector('.btn');
let articlesContainer = document.querySelector('.articles');


btn.addEventListener('click', ()=>{
    document.body.classList.toggle('dark-theam')

     if(btn.textContent === 'Dark Theam'){
        btn.textContent = 'Light Theam'
     }else{
        btn.textContent = 'Dark Theam' 
     }
})

  

const articleData = articles.map((article)=>{
   const {length,snippet,title,date} = article

   const FormateDate = moment(date).format("MMM, Do, YY")

   return `
        <article class="post">
        <h2>${title}</h2>
        <div class="post-info">
            <span>${FormateDate}</span>
            <span>${length} mins read</span>
        </div><p>${snippet}</p>
        </article>
   `
}).join('')



articlesContainer.innerHTML = articleData

console.log(moment)