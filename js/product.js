     
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
                
                card[name].count += 1;
                var previusEl = e.target.parentNode.firstElementChild.firstElementChild.src;
                var Card = document.getElementById("cart");
                var imgId = previusEl.substr(previusEl.lastIndexOf("/") + 1, previusEl.length);
                var itemName = imgId.substr(0, imgId.lastIndexOf("."));

                var item = document.createElement("div");
                item.className = itemFruit ;
               
                var itemHtml = "  <div class='centered  img-fluid  d-flex align-items-center justify-content-between' style='height:178px'><img class=' img-fluid' style='width:100px' src='./img/" + imgId + "'>  <div>" + itemFruit + " </div> <div id='"+itemFruit+"'>"+card[name].count+"</div>     <button class='delete' onclick='deleteMe(this)'> delete </button></div> ";
                Card.appendChild(item);
                var x = Card.lastChild.innerHTML = itemHtml;
                changeColor();

            } else {
                
                card[name].count += 1;
               
               itemsCounter.innerHTML=card[name].count;
            }
            if(cart.childElementCount>0){
                cart.style.backgroundImage="url()";
            }
        }

       function changeColor(){
        
           if(cart.children.length > 0 ){
               for(var i=0; i<cart.children.length; i++){
                   cart.children[i].classList.remove("bg-warning");
               }
               
               for(var j=0; j<cart.children.length; j++){
                   
                   if(j%2===0){
                       console.log(cart.children[j]);
                      cart.children[j].classList.add("bg-warning"); 
                   }
                   
               }
           }
           
           
       }

        
        
        
        
        function deleteMe(thatB) {
          var goodName = thatB.parentNode.parentNode.classList.item(0);
            
            var thatButton = thatB.parentNode.parentNode.parentNode.removeChild(thatB.parentNode.parentNode);
          card[goodName].count=0;
           
            changeColor();
            
            
            if(cart.childElementCount==0){
                cart.style.backgroundImage="url(img/icon-cart.svg)";
            }
                
        }
    