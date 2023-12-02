
//  REQUERIMIENTO 2.2

//   ele1.addEventListener("click", function() {
    //     ele1.style.backgroundColor = "yellow";
    //   });
    
    //  REQUERIMIENTO 2.3
    
    const ele = document.getElementById("ele1");
    ele.addEventListener("click", () => {
        pintar(ele, "yellow")
    });
    
    function pintar(ele, color = 'green') {
        ele.style.backgroundColor = color
      }