const photoUrls = [
    "https://i0.wp.com/forum.madad2.com/wp/wp-content/uploads/2022/05/9d5246a1edb6a58ecb14a2f6a5c8df9e.jpg?w=564&ssl=1",
    "https://i.pinimg.com/750x/ba/29/cf/ba29cf4f53b845092841dcfe2c88d63b.jpg",
    "https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1375849/pexels-photo-1375849.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/413959/pexels-photo-413959.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1462636/pexels-photo-1462636.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1187822/pexels-photo-1187822.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/458766/pexels-photo-458766.jpeg?auto=compress&cs=tinysrgb&w=600", // add more photo URLs as needed
    "https://images.pexels.com/photos/834872/pexels-photo-834872.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://i.pinimg.com/564x/1b/0e/21/1b0e219f91a920f34ddd406b469f4f6d.jpg",
    "https://i.pinimg.com/564x/6f/f2/fa/6ff2fabe74c98f42087fc1620a201f70.jpg",
    "https://i.pinimg.com/236x/36/7c/cb/367ccb9b067eb0dfc2cb633ce8198685.jpg",
    "https://i.pinimg.com/236x/eb/de/35/ebde359e018fc7d2e9437dd0903c2a08.jpg",
    "https://i.pinimg.com/236x/aa/2e/34/aa2e34dd48f7c5c2171cd8b643ab6aed.jpg",
    "https://i.pinimg.com/236x/90/75/4a/90754a70e2777ee2883df247d1eab61a.jpg",
    "https://i.pinimg.com/236x/33/3b/74/333b7429990176035027b525c5b4878d.jpg",
    "https://i.pinimg.com/236x/f9/f8/4c/f9f84c6ccc768d72ebc50a9a290bf19b.jpg",
    "https://i.pinimg.com/236x/1b/fa/5e/1bfa5ed0bfd7c8d7289bb204e4849e66.jpg",
    "https://i.pinimg.com/236x/1e/d4/23/1ed4232294df48603a7a82bd23c518f2.jpg",
    "https://i.pinimg.com/236x/44/7d/c1/447dc12951e607436960d97fa7c634a1.jpg",
    "https://i.pinimg.com/236x/eb/de/35/ebde359e018fc7d2e9437dd0903c2a08.jpg",
    "https://i.pinimg.com/236x/aa/2e/34/aa2e34dd48f7c5c2171cd8b643ab6aed.jpg",
    "https://i.pinimg.com/236x/cc/63/a0/cc63a048359a447f81d50ea03712b119.jpg",
    "https://i.pinimg.com/236x/6d/0d/eb/6d0deb69f6b32547e0af97a2243a87ab.jpg",
    "https://i.pinimg.com/236x/65/13/e6/6513e6cf910f816e2451b9b7ab7fe5c8.jpg",
    "https://i.pinimg.com/236x/10/48/af/1048aff6e631cab6df3e1273c22a2848.jpg",
    "https://i.pinimg.com/236x/fa/b5/c3/fab5c332edfac8836335c20e95592d6f.jpg",
    "https://i.pinimg.com/564x/0c/76/a1/0c76a157697b69327eed8a1f70f545e1.jpg",
    "https://i.pinimg.com/564x/43/2c/45/432c45e8b537ddff5f9bd1e7ac2776dc.jpg",
    "https://i.pinimg.com/236x/5c/11/45/5c11458deb0d3395f239f74d4c101df1.jpg",
    "https://i.pinimg.com/236x/4b/53/1f/4b531fd2044abd56d8922f8320869077.jpg",
    "https://i.pinimg.com/236x/49/99/ee/4999ee45c43c285fcfcfbf73e80e4db3.jpg",
    "https://i.pinimg.com/474x/83/77/df/8377df2c3c20edfcdb8cd21e6eb23518.jpg",
    "https://i.pinimg.com/474x/f2/1c/44/f21c441a752979360312fe7faecdd41d.jpg",
    "https://i.pinimg.com/474x/e2/ef/b1/e2efb19be4b4c4f110934b5863ab96d8.jpg",
    "https://i.pinimg.com/474x/00/4d/ff/004dff1044de3763befd0df1c38c1ee5.jpg",
    "https://i.pinimg.com/236x/4d/aa/99/4daa990a7b93b85be0d81e6cb07c5f8a.jpg",
    "https://i.pinimg.com/750x/50/bf/67/50bf6757327204ba30520a69fecd8bab.jpg",
    "https://i.pinimg.com/750x/37/4c/49/374c4956e9d897642ac338062fb4fc93.jpg",
    "https://i.pinimg.com/474x/8b/a0/f7/8ba0f7a0eb4baaf14d293377ad3a094d.jpg",
    "https://i.pinimg.com/236x/21/27/5f/21275fe85b8f716cfa0dcdbf507f19e1.jpg",
    "https://i.pinimg.com/236x/d4/0f/2a/d40f2ab80c676814eee438f31ff6c4bf.jpg",
    "https://i.pinimg.com/236x/de/3d/4e/de3d4e57c1b0bdcedde1b598883cafae.jpg",
    "https://i.pinimg.com/236x/0d/84/75/0d84755220168b4cac9af35ee6ddddc2.jpg",
  ];
  
  function displayRandomPhoto() {
    const randomIndex = Math.floor(Math.random() * photoUrls.length);
    const randomPhotoUrl = photoUrls[randomIndex];
    const randomPhotoUrl2 = photoUrls[Math.floor(Math.random()*44 )] ;
    const randomPhotoUrl1 = photoUrls[Math.floor(Math.random()*10)];

    const randomPhotoElement = document.querySelector(".random-photo");
    const randomPhotoElement1 = document.querySelector(".random-photo1");
    const randomPhotoElement2 = document.querySelector(".random-photo2");
    
    randomPhotoElement.src = randomPhotoUrl;
    randomPhotoElement1.src = randomPhotoUrl1;
    randomPhotoElement2.src = randomPhotoUrl2;
    
  }
  
  setInterval(displayRandomPhoto, 900); // call displayRandomPhoto every 1 seconds (900 milliseconds)
 
