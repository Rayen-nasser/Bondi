let sections = document.querySelectorAll(".navbar-nav li a")

sections.forEach((a)=>{
  a.addEventListener("click",sectionsActive)
})

function sectionsActive(){
    sections.forEach((a)=>{
        a.classList.remove("active")
        this.classList.add("active")
    })
}

///////// profolio (filter images)
document.addEventListener("DOMContentLoaded", function() {
    var shuffleItems = document.querySelectorAll(".shuffle li");
    var imageBoxes = document.querySelectorAll(".imgs-container .box");
  
    shuffleItems.forEach(function(item) {
      item.addEventListener("click", function() {
        var category = item.getAttribute("data-cat");
  
        // Remove active class from all shuffle items
        shuffleItems.forEach(function(item) {
          item.classList.remove("active");
          item.classList.remove("rounded-pill");
        });
        // Add active class to the clicked shuffle item
        item.classList.add("active");
        item.classList.add("rounded-pill");
        // Show or hide image boxes based on the selected category
        imageBoxes.forEach(function(box) {
          if (category === "all" || box.classList.contains(category)) {
            box.style.display = "block";
          } else {
            box.style.display = "none";
          }
        });
      });
    });
  });

