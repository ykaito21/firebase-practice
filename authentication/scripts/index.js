const guideList = document.querySelector(".guides");
const loggedOutLinks = document.querySelectorAll(".logged-out");
const loggedInLinks = document.querySelectorAll(".logged-in");
const accountDetails = document.querySelector(".account-details");

const setupUi = user => {
  if (user) {
    const html = `
    <div>login as ${user.email}</div>
    `;
    accountDetails.innerHTML = html;
    loggedInLinks.forEach(link => {
      link.style.display = "block";
    });
    loggedOutLinks.forEach(link => {
      link.style.display = "none";
    });
  } else {
    accountDetails.innerHTML = "";
    loggedInLinks.forEach(link => {
      link.style.display = "none";
    });
    loggedOutLinks.forEach(link => {
      link.style.display = "block";
    });
  }
};

const setupGuides = data => {
  if (data.length > 0) {
    let html = "";
    data.forEach(doc => {
      const guide = doc.data();

      const li = `
          <li>
        <div class="collapsible-header grey lighten-4">${guide.title}</div>
        <div class="collapsible-body white"><span>${guide.content}</span></div>
      </li>
    `;
      html += li;
    });

    guideList.innerHTML = html;
  } else {
    guideList.innerHTML = `<h5 class="center-align">you need to signin</h5>`;
  }
};

// setup materialize components
document.addEventListener("DOMContentLoaded", function() {
  var modals = document.querySelectorAll(".modal");
  M.Modal.init(modals);

  var items = document.querySelectorAll(".collapsible");
  M.Collapsible.init(items);
});
