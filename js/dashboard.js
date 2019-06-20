let toggleNavStatus = false;

const toggleNav = () => {
	const getSidebar = document.querySelector(".nav-sidebar");
	const getSidebarUl = document.querySelector(".nav-sidebar ul");
	const getSidebarUserid = document.querySelector(".nav-sidebar #userId");
	const getSidebarLinks = document.querySelectorAll(".nav-sidebar a");

	if (toggleNavStatus === false) {
		getSidebarUl.style.visibility = "visible";
		
		function myFunction(x) {
			if (x.matches) { // If media query matches
				getSidebar.style.width = "100vw";
				getSidebar.style.textAlign = "center";
					for (let i = 0; i < getSidebarLinks.length; i++) {
						getSidebarLinks[i].style.fontSize = "2em";
					}
			} else {
				getSidebar.style.width = "16vw";
				getSidebar.style.textAlign = "left";
				for (let i = 0; i < getSidebarLinks.length; i++) {
						getSidebarLinks[i].style.fontSize = "1em";
					}
			}


			if (y.matches) { // If media query matches
					for (let i = 0; i < getSidebarLinks.length; i++) {
						getSidebarLinks[i].style.fontSize = "2em";
					}
			}


			if (z.matches) { // If media query matches
				for (let i = 0; i < getSidebarLinks.length; i++) {
					getSidebarLinks[i].style.fontSize = "1em";
				}
			}
		}

		let x = window.matchMedia("(max-width: 1200px)");
		let y = window.matchMedia("(max-width: 900px)");
		let z = window.matchMedia("(max-width: 500px)");
		myFunction(x) // Call listener function at run time
		x.addListener(myFunction) // Attach listener function on state changes
		y.addListener(myFunction)
		z.addListener(myFunction)
		
		getSidebarUserid.style.opacity = "0.5";
		
		for (let i = 0; i < getSidebarLinks.length; i++) {
			getSidebarLinks[i].style.opacity = "1";
		}

		toggleNavStatus = true;
	}

	else if (toggleNavStatus === true) {
		getSidebar.style.width = "5vw";
		getSidebarUserid.style.opacity = "0";
		
		for (let i = 0; i < getSidebarLinks.length; i++) {
			getSidebarLinks[i].style.opacity = "0";
		}

		getSidebarUl.style.visibility = "hidden";

		toggleNavStatus = false;
	}
}

// Get the modal
let modal1 = document.querySelector("#myModal1");
let modal2 = document.querySelector("#myModal2");
let modal3 = document.querySelector("#myModal3");
let modal4 = document.querySelector("#myModal4");
let modal5 = document.querySelector("#myModal5");
let modal6 = document.querySelector("#myModal6");

// Get the button that opens the modal
let btn1 = document.querySelector("#modalsale1");
let btn2 = document.querySelector("#modalsale2");
let btn3 = document.querySelector("#modalsale3");
let btn4 = document.querySelector("#modalsale4");
let btn5 = document.querySelector("#modalsale5");
let btn6 = document.querySelector("#modalsale6");

// Get the <span> element that closes the modal
let span = document.querySelectorAll(".close");

// When the user clicks the button, open the modal 
btn1.onclick = () => {
	modal1.style.display = "block";
}

btn2.onclick = () => {
	modal2.style.display = "block";
}

btn3.onclick = () => {
	modal3.style.display = "block";
}

btn4.onclick = () => {
	modal4.style.display = "block";
}

btn5.onclick = () => {
	modal5.style.display = "block";
}

btn6.onclick = () => {
	modal6.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
for (let i = 0; i < span.length; i++) {
	 span[i].onclick = () => {
		modal1.style.display = "none";
		modal2.style.display = "none";
		modal3.style.display = "none";
		modal4.style.display = "none";
		modal5.style.display = "none";
		modal6.style.display = "none";
	  }	
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = (event) => {
  if (event.target == modal) {
    modal1.style.display = "none";
  }
}