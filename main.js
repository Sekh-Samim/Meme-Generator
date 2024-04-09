const memeGenratorbtn = document.querySelector('.meme-generator-btn')
const memeTitle = document.querySelector('.meme-title')
const memeAuthor = document.querySelector('.meme-author')
const memeImg = document.querySelector('.meme-generator img')

 const updateDetails = (url,title,author) => {
    memeImg.setAttribute("src",url)
    memeTitle.innerHTML = title
    memeAuthor.innerHTML = `Meme by: ${author}`
   
 };

const getMemes = () => {
fetch("https://meme-api.com/gimme/wholesomememes")
.then((respond) => respond.json())
.then((data)=>{
    updateDetails(data.url,data.title,data.author)
})
};
memeGenratorbtn.addEventListener('click',getMemes);
getMemes();