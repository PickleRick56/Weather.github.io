   var name;
        var inputs = document.getElementsByClassName("fruit");
        var card = {
            apple: {
                imgAdress: "carbon.jpg",
                imgName: "carbon",
                count: 0
            },
            mango: {
                imgAdress: "carbon.jpg",
                imgName: "carbon",
                count: 0
            },
            watermelon: {
                imgAdress: "carbon.jpg",
                imgName: "carbon",
                count: 0
            },
            banana: {
                imgAdress: "carbon.jpg",
                imgName: "carbon",
                count: 0
            }
        }
        
        
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].addEventListener("click", addElementFanction);
        }


        


        function addElementFanction(e) {

            var itemFruit = e.target.dataset.fruit;
            var fruitCounter;
            name = itemFruit;
var itemsCounter=document.getElementById(itemFruit);
            
            if (card[name].count == 0) {
                alert('yes');
                card[name].count += 1;
                var previusEl = e.target.parentNode.firstElementChild.firstElementChild.src;
                var Card = document.getElementById("cart");
                var imgId = previusEl.substr(previusEl.lastIndexOf("/") + 1, previusEl.length);
                var itemName = imgId.substr(0, imgId.lastIndexOf("."));

                var item = document.createElement("div");
                if(Card.childElementCount%2===0){
                     
                    item.className = itemFruit + ' bg-warning  ';
                item.style.height = 178 + "px";
                }else{
                     
                    item.className = itemFruit ;
                item.style.height = 178 + "px";
                   
                }



                var itemHtml = "  <div class='centered my-5 px-5 img-fluid  d-flex align-items-center justify-content-between'><img class=' img-fluid' style='width:100px' src='./img/" + imgId + "'>  <div>" + itemFruit + " </div> <div id='"+itemFruit+"'>"+card[name].count+"</div>     <button class='delete' onclick='deleteMe(this)'> delete </button></div> ";
                Card.appendChild(item);
                var x = Card.lastChild.innerHTML = itemHtml;

            } else {
                alert("no");
                card[name].count += 1;
               
               itemsCounter.innerHTML=card[name].count;
            }
            if(cart.childElementCount>0){
                cart.style.backgroundImage="url()";
            }
        }

       

        function deleteMe(thatB) {
          var goodName = thatB.parentNode.parentNode.classList.item(0);
            
            var thatButton = thatB.parentNode.parentNode.parentNode.removeChild(thatB.parentNode.parentNode);
          card[goodName].count=0;
           
            if(cart.childElementCount==0){
                cart.style.backgroundImage="url(img/icon-cart.svg)";
            }
                
        }