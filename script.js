const accordionParent = document.querySelectorAll(".accordion__parent");

accordionParent.forEach((item) => {
    item.addEventListener("click", function () {
        const content = item.nextElementSibling;
        document.querySelectorAll(".accordion__child").forEach((child) => {
            if (child !== content) {
                child.style.maxHeight = null;
            }
        });
        
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});
