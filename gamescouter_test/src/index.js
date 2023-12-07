
//Funktion für das Horizontale scrollen
document.addEventListener('DOMContentLoaded', function () {
    const ele = document.getElementById('game-timeline');
    ele.style.cursor = 'grab';

    let pos = { top: 0, left: 0, x: 0, y: 0 };

    const mouseDownHandler = function (e) {
        ele.style.cursor = 'grabbing';
        ele.style.userSelect = 'none';

        pos = {
            left: ele.scrollLeft,
            top: ele.scrollTop,
            // aktuelle Mausposition
            x: e.clientX,
            y: e.clientY,
        };

        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    };

    const mouseMoveHandler = function (e) {
        // Wie weit die Maus bewegt wurde
        const dx = e.clientX - pos.x;

        // Element wird gescrollt
        ele.scrollLeft = pos.left - dx;
    };

    const mouseUpHandler = function () {
        ele.style.cursor = 'grab';
        ele.style.removeProperty('user-select');

        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
    };

    // Eventhandler anbinden
    ele.addEventListener('mousedown', mouseDownHandler);
});

function toggleCardContent(button) {

    const card = button.closest(".card");
    const cardContent = card.querySelector(".card-content");
    const cardButton = card.querySelector(".card-button");
    

    if(cardButton.classList.contains("geklickt")) {
        card.classList.toggle("active");
        cardContent.classList.toggle("active");
    }
    else {
        cardButton.classList.toggle("geklickt");
        cardButton.innerHTML = "Mehr Infos"; 
    }
};

//Funktion zum anzeigen der Filtermethoden (Genre, Datum, Publisher)
function toggleFilterMethods() {
    const filterButton = document.getElementById("filter-button");
    const filterList = document.querySelector("#filter-list");

    if(!filterButton.classList.contains("geklickt")) {
        filterList.classList.toggle("active");
        document.getElementById("genre-filter").classList.remove("active");
        document.getElementById("date-filter").classList.remove("active");
        document.getElementById("publisher-filter").classList.remove("active");
    } 
    else {
        filterButton.classList.toggle("geklickt");
    }
};

//Funktion zum anzeigen der Genre Filter
function toggleGenreFilter() {
    document.getElementById("genre-filter").classList.toggle("active");
}

//Funktion zum anzeigen des Datum-Filters
function toggleDateFilter() {
    document.getElementById("date-filter").classList.toggle("active");
}

//Funktion zum anzeigen des Publisher-Filters
function togglePublisherFilter() {
    document.getElementById("publisher-filter").classList.toggle("active");
}


