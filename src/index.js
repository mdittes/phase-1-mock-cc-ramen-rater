// write your code here
// CHALLENGE 1: See all ramen images in the div with the id of ramen-menu. When the page loads, request the data from the server to get all the ramen objects. Then, display the image for each of the ramen using an img tag inside the #ramen-menu div.

const imgUrl = ('http://localhost:3000/ramens')

fetch(imgUrl)
.then(res => res.json())
.then(data => addRamenPics(data))
.catch(err => console.log(err))

function addRamenPics(ramens) {
    const ramenContainer = document.querySelector('#ramen-menu');
    ramens.forEach((image) => {       //think this might be where it goes wrong?
        const newRamen = document.createElement('img')
        newRamen.src = image;          
        ramenContainer.append(newRamen);
    }) 

    // for (let image in ramenPics) {
    //     const newRamen = document.createElement('img')
    //     newRamen.src = image
    //     ramenContainer.append(newRamen)
    // }
};


//CHALLENGE 2 
//Click on an image from the #ramen-menu div and see all the info about that ramen displayed inside the #ramen-detail div and where it says insert comment here and insert rating here.

//CHALLENGE 3
//Create a new ramen after submitting the new-ramen form. The new ramen should be added to the#ramen-menu div. The new ramen does not need to persist; in other words, if you refresh the page, it's okay that the new ramen is no longer on the page.

