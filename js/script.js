var tablinks = document.getElementsByClassName("tab-links")
var tabcontents = document.getElementsByClassName("tab-contents")

function opentab(tabname) {
    for(tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    for(tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");

    function openmenu(){
        sidemenu.style.right = "0";
    }

    function closemenu(){
        sidemenu.style.right = "-200px";
    }


const scriptURL = 'https://script.google.com/macros/s/AKfycbw_Zu_LUsceJLpw8J7FDVHy6NxRjwUQ5kXi3d3KfbukH6H5NcGwDqJDH9SQbLCvqpx_/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
  
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message sent successfully"
            setTimeout(function(){
                msg.innerHTML = ""
            },5000)
            form.reset()
        })
    .catch(error => console.error('Error!', error.message))
})

var header = document.getElementById('header');
    var overlay = document.createElement('div');
    overlay.className = 'overlay';
    header.appendChild(overlay);

    window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var headerHeight = header.offsetHeight;

    // Adjust the opacity calculation with a larger number (e.g., 2) for faster darkening
    var opacity = Math.min(1, scrollPosition / (headerHeight / 1.1));

    overlay.style.backgroundColor = 'rgba(0, 0, 0, ' + opacity + ')';
});

