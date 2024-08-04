
const goldenAgeAlbums=[
    {
      name:"Sunflower",
      album:"url(https://gratisography.com/wp-content/uploads/2024/03/gratisography-funflower-800x525.jpg)"   
    },
    {
        name:"Cat",
        album:"url(https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg)",
    
    },
    {
        name: "Black Cat",
        album:"url(https://gratisography.com/wp-content/uploads/2023/10/gratisography-witch-cat-800x525.jpg)"
    },
    
    {
        name:"Purple beach",
        album:"url(https://i0.wp.com/picjumbo.com/wp-content/uploads/violet-colorful-sunset-sky-on-the-beach-free-photo.jpeg?w=600&quality=80)"
    },
    {
        name:"Rainbow eyes",
        album:"url(https://gratisography.com/wp-content/uploads/2024/01/gratisography-covered-in-confetti-800x525.jpg)"
    
    },
    {
        name:"Pumpkin",
        album:"url(https://gratisography.com/wp-content/uploads/2023/10/gratisography-pumpkin-scarecrow-1170x780.jpg)"
    },
    
    {
        name:"Flamingo",
        album:"url(https://gratisography.com/wp-content/uploads/2023/06/gratisography-paper-flamingo-free-stock-photo-800x525.jpg)"
    },
    {
        name:"The Critical Beatdown",
        album:"url(https://gratisography.com/wp-content/uploads/2023/01/gratisography-cool-pineapple-free-stock-photo-800x525.jpg)"
    } 
    ];

    const btn=document.querySelector('.btn-click');

    const bgChangeStart = function() {
        let random=Math.floor(Math.random()*goldenAgeAlbums.length);
        document.querySelector('.container').style.backgroundImage=goldenAgeAlbums[random].album;
    };

    

    btn.addEventListener('click', bgChangeStart);



// btn.addEventListener('click',function(){
    

//     let random=Math.floor(Math.random()*goldenAgeAlbums.length);
//     console.log(goldenAgeAlbums[random].name);
//     console.log(goldenAgeAlbums[random].album);
    //  document.querySelector('.top_image img').src=goldenAgeAlbums[random].album;
    // document.body.style.backgroundImage=goldenAgeAlbums[random].album;
//     document.querySelector('.container').style.backgroundImage=goldenAgeAlbums[random].album;
// })

