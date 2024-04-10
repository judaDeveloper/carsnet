let listbrandsHTML = document.querySelector('.listbrands');
let carslist = [];


const addDataToHTML = () => {
    // remove datas default from HTML

        // add new datas
        if(carslist.length > 0) // if has data
        {
            carslist.forEach(car => {
                let newcar = document.createElement('div');
                newcar.dataset.id = car.id;
                newcar.classList.add('item');
                newcar.innerHTML = 
                `<img src="/cars.net/images/bmw-ii.jpg" alt="">
                <h2>${car.make}</h2>
                <div class="model">$${car.model}</div>
                <button class="addCart">Add To Cart</button>`;
                listbrandsHTML.appendChild(newcar);
            });
        }
    }

      const initApp = () => {
        // get data brands
        fetch('/cars.net/assets/scripts/cars.json')
        .then(response => response.json())
        .then(data => {
            carslist = data;
            addDataToHTML();
        })
    }
    initApp();

