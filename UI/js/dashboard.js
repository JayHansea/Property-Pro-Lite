let toggle_nav_status = false;

const toggle_nav = () => {
  const get_sidebar = document.querySelector('.nav-sidebar');
  const get_sidebar_ul = document.querySelector('.nav-sidebar ul');
  const get_sidebar_userid = document.querySelector('.nav-sidebar #userId');
  const get_sidebar_links = document.querySelectorAll('.nav-sidebar a');

  if (toggle_nav_status === false) {
    get_sidebar_ul.style.visibility = 'visible';

    const media_queries = (x) => {
      if (x.matches) { // If media query matches
        get_sidebar.style.width = '100vw';
        get_sidebar.style.textAlign = 'center';
        for (let i = 0; i < get_sidebar_links.length; i++) {
          get_sidebar_links[i].style.fontSize = '2em';
        }
      } else {
        get_sidebar.style.width = '16vw';
        get_sidebar.style.textAlign = 'left';
        for (let i = 0; i < get_sidebar_links.length; i++) {
          get_sidebar_links[i].style.fontSize = '1em';
        }
      }


      if (y.matches) { // If media query matches
        for (let i = 0; i < get_sidebar_links.length; i++) {
          get_sidebar_links[i].style.fontSize = '2em';
        }
      }


      if (z.matches) { // If media query matches
        for (let i = 0; i < get_sidebar_links.length; i++) {
          get_sidebar_links[i].style.fontSize = '1em';
        }
      }
    };

    const x = window.matchMedia('(max-width: 1200px)');
    let y = window.matchMedia('(max-width: 900px)');
    let z = window.matchMedia('(max-width: 500px)');
    media_queries(x); // Call listener function at run time
    x.addListener(media_queries); // Attach listener function on state changes
    y.addListener(media_queries);
    z.addListener(media_queries);

    get_sidebar_userid.style.opacity = '0.5';

    for (let i = 0; i < get_sidebar_links.length; i++) {
      get_sidebar_links[i].style.opacity = '1';
    }

    toggle_nav_status = true;
  }

  else if (toggle_nav_status === true) {
    get_sidebar.style.width = '1vw';
    get_sidebar_userid.style.opacity = '0';

    for (let i = 0; i < get_sidebar_links.length; i++) {
      get_sidebar_links[i].style.opacity = '0';
    }

    get_sidebar_ul.style.visibility = 'hidden';

    toggle_nav_status = false;
  }
};

// Get the modal
const modal1 = document.querySelector('#myModal1');
const modal2 = document.querySelector('#myModal2');
const modal3 = document.querySelector('#myModal3');
const modal4 = document.querySelector('#myModal4');
const modal5 = document.querySelector('#myModal5');
const modal6 = document.querySelector('#myModal6');

// Get the button that opens the modal
const btn1 = document.querySelector('#modalsale1');
const btn2 = document.querySelector('#modalsale2');
const btn3 = document.querySelector('#modalsale3');
const btn4 = document.querySelector('#modalsale4');
const btn5 = document.querySelector('#modalsale5');
const btn6 = document.querySelector('#modalsale6');

// Get the <span> element that closes the modal
const span = document.querySelectorAll('.close');

// When the user clicks the button, open the modal
btn1.onclick = () => {
  modal1.style.display = 'block';
};

btn2.onclick = () => {
  modal2.style.display = 'block';
};

btn3.onclick = () => {
  modal3.style.display = 'block';
};

btn4.onclick = () => {
  modal4.style.display = 'block';
};

btn5.onclick = () => {
  modal5.style.display = 'block';
};

btn6.onclick = () => {
  modal6.style.display = 'block';
};

// When the user clicks on <span> (x), close the modal
for (let i = 0; i < span.length; i++) {
  span[i].onclick = () => {
    modal1.style.display = 'none';
    modal2.style.display = 'none';
    modal3.style.display = 'none';
    modal4.style.display = 'none';
    modal5.style.display = 'none';
    modal6.style.display = 'none';
  };
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = (event) => {
  if (event.target == modal1) {
    modal1.style.display = 'none';
  }
  if (event.target == modal2) {
    modal2.style.display = 'none';
  }
  if (event.target == modal3) {
    modal3.style.display = 'none';
  }
  if (event.target == modal4) {
    modal4.style.display = 'none';
  }
  if (event.target == modal5) {
    modal5.style.display = 'none';
  }
  if (event.target == modal6) {
    modal6.style.display = 'none';
  }
};
