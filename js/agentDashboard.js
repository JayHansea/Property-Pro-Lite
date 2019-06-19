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