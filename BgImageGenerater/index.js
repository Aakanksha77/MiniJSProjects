
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

    let isDisabled = false;

    const btn=document.querySelector('#start');
    const disableBtn = document.querySelector('#disable');

    const bgChangeStart = function() {
        if (isDisabled) {
            alert("The Image is Set as BackGround")
            console.log("Button is disabled");
            return;
        }

        let random=Math.floor(Math.random()*goldenAgeAlbums.length);
        document.querySelector('.container').style.backgroundImage=goldenAgeAlbums[random].album;
    };

    const disableBtnClick = function() {
        isDisabled = true;
        alert("The BackGround Image is Set");
        console.log("Image changing is disabled");
    };
  
    btn.addEventListener('click', bgChangeStart);
    disableBtn.addEventListener('click', disableBtnClick);
