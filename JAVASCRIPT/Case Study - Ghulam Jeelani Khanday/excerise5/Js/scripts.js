let slidders = document.getElementsByClassName('slidder-image');
slidders[0].style.display = 'block';
slidders[1].style.display = 'none';
slidders[2].style.display = 'none';

let index = 0;

function ShowNextImage() {
    slidders[index].style.display = 'none';

    if (index == slidders.length - 1) {
        index = 0;
    } else {
        index++;
    }

    slidders[index].style.display = 'block';
}

function ShowPrevImage() {
    slidders[index].style.display = 'none';

    if (index == 0) {
        index = slidders.length - 1;
    } else {
        index--;
    }
    slidders[index].style.display = 'block';
}

//setInterval(ShowNextImage, 5000);