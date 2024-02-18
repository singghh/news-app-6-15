async function fetchdata(){
    try{

        const response=await fetch("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=69f76dae5e6f404191e02a5df88c0a32")
        const getimg=document.querySelector(".newsbox");
        const response2=await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=69f76dae5e6f404191e02a5df88c0a32");
        const anothernewsbox2=document.querySelector(".newsbox2");
        const anothernewsbox3=document.querySelector(".newsbox3");

        if(!response.ok && !response2.ok){
            console.log("Error")
        }

        const data=await response.json();
        const data2=await response2.json();

        for(let i=0;i<=9;i++){
            const ima=data.articles[i].urlToImage;
            const create=document.createElement("img");
            create.src=ima
            getimg.appendChild(create)
            var images=data.articles[i].description;
            const ans=document.createElement("p");
            ans.textContent=images;
            getimg.appendChild(ans);
        }
        for(let j=0;j<=8;j++){
            const data1=data2.articles[j].urlToImage
            let images=data2.articles[j].description;
            const imag=document.createElement("img");
            imag.src=data1
            anothernewsbox2.appendChild(imag)

            const para=document.createElement("p");
            para.textContent=images
            anothernewsbox2.appendChild(para)
        }
        for(let j=9;j<19;j++){
            const data1=data2.articles[j].urlToImage
            let images=data2.articles[j].description;
            const imag=document.createElement("img");
            imag.src=data1
            anothernewsbox3.appendChild(imag)

            const para=document.createElement("p");
            para.textContent=images
            anothernewsbox3.appendChild(para)
        }
    }
    catch(error){
        console.error(error);
    }
}
fetchdata();