const img1 = document.getElementById("img1");  // Elemento Div HTML
const img2 = document.getElementById("img2");  // Elemento Div HTML
const smallImages = document.getElementById("small-images");  // Elemento DIV HTML
const itemImgSmartphones = document.createDocumentFragment(); // Fragmento para todas las etiquetas IMG
const namesImgSmartphones = ["01.blackview-bl8000.jpg", "02.infinix-hot-40-pro-4g.jpg", "03.infinix-note-30-pro-4g.jpg", "04. motorola-edge30-fusion-5g.jpg", "05.motorola-edge-40-neo-5g.jpg", "06.motorola-moto-g84-5g.jpg", "07.oneplus-ace-5g.jpg", "08.realme-12-pro-plus-5g.jpg", "09.samsung-galaxy-a15-5g.jpg", "10.samsung-galaxy-a25-5g.jpg", "11.samsung-galaxy-a54-5g.jpg", "12.tecno-camon20-pro-4g.jpg", "13.tecno-camon20-pro-5g.jpg", "14.tecno-spark-20-pro-plus-4g.jpg", "15.vivo-s18-5g.jpg", "16.vivo-v30-pro-5g.jpg", "17.xiaomi-poco-f4-5g.jpg", "18.xiaomi-poco-f5-5g.jpg", "19.xiaomi-poco-f5-pro-5g.jpg", "20.xiaomi-poco-m6-5g.jpg", "21.xiaomi-poco-m6-pro-4g.jpg", "22.xiaomi-poco-m6-pro-5g.jpg", "23.xiaomi-poco-x6-5g.jpg", "24.xiaomi-poco-x6-pro-5g.jpg", "25.xiaomi-redmi-note-13-4g.jpg", "26.xiaomi-redmi-note-13-5g.jpg", "27.xiaomi-redmi-note-13-pro-4g.jpg", "28.xiaomi-redmi-note-13-pro-5g.jpg", "29.xiaomi-redmi-note-13-pro-plus-5g.jpg"];

const buttonStart = document.getElementById("button-start");

function addNamesSmartphones(...args){
   for(let i = 0; i < args.length; i++){
          const itemDiv = document.createElement("div");
          const itemImg = document.createElement("img");
          itemImg.src = `img-smartphones/${namesImgSmartphones[i]}`;
          itemImg.alt = namesImgSmartphones[i];
          itemImg.title = args.sort()[i];
          itemDiv.id = i+1;

          itemDiv.append(itemImg);
          itemImgSmartphones.append(itemDiv);
   }
    smallImages.append(itemImgSmartphones);
}

let j = 1;
// Emparejar teléfonos
function PairPhones(){
     buttonStart.addEventListener("click", () => {

          //Se genera el número pseudo-aleatorio entre 1 y 29
          let randomNumber = Math.round(Math.random() * (namesImgSmartphones.length - 1) + 1);
          
          // Obtengo todos los elementos hijos de smallImages/div de imagenes pequeñas y convierto esto en un array
          const allDivImgSmall = Array.from(smallImages.children); // [div, div, div, ...]

          for(let i = 0; i < allDivImgSmall.length; i++){
               if(parseInt(allDivImgSmall[i].getAttribute("id")) === randomNumber){
                    if(j===1){
                         allDivImgSmall[i].classList.add("selected-phone");

                         const p = document.getElementById("name-smartphone1");
                         const img = document.getElementById("img-large1");
                         img.src = `img-smartphones/${namesImgSmartphones[i]}`;
                         img.alt = namesImgSmartphones[i];

                         p.textContent = allDivImgSmall[i].firstElementChild.title;
                         p.classList.add("name-smartphone");
                         img1.append(p);
                         j++;
                    }else if(j=== 2){
                         allDivImgSmall[i].classList.add("selected-phone2");

                         const p = document.getElementById("name-smartphone2");
                         const img = document.getElementById("img-large2");
                         img.src = `img-smartphones/${namesImgSmartphones[i]}`;
                         img.alt = namesImgSmartphones[i];
                         
                         p.textContent = allDivImgSmall[i].firstElementChild.title;
                         img2.append(p);
                         j++;
                    }
               }
          }
     });
}

addNamesSmartphones("Xiaomi Poco X6 5G", "Xiaomi Poco X6 Pro 5G", "Xiaomi Poco F4 5G", "Xiaomi Poco F5 5G", "Xiaomi Poco F5 Pro 5G", "OnePlus Ace 5G", "Xiaomi Redmi Note 13 5G", "Xiaomi Redmi Note 13 Pro 5G", "Xiaomi Redmi Note 13 Pro+ 5G", "Vivo V30 Pro 5G", "Samsung Galaxy A54 5G", "Blackview BL8000 5G", "Xiaomi Redmi Note 13 4G", "Xiaomi Redmi Note 13 Pro 4G", "Realme 12 Pro+ 5G", "Motorola Moto G84 5G", "Motorola Moto Edge 40 Neo 5G", "Motorola Edge 30 Fusion 5G", "Tecno Spark 20 Pro+ 4G", "Infinix Note 30 Pro 4G", "Tecno Camon 20 Pro 4G", "Tecno Camon 20 Pro 5G", "Xiaomi Poco M6 5G", "Xiaomi Poco M6 Pro 5G", "Vivo S18 5G", "Samsung Galaxy A25 5G", "Samsung Galaxy A15 5G", "Infinix Hot 40 Pro 4G", "Xiaomi Poco M6 Pro 4G");

PairPhones();