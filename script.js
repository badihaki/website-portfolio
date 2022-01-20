/*
starting stuff
*/
lineBreak = document.createElement("br");

const navi=document.createElement("div");
navi.id="navi";
document.querySelector("body").appendChild(navi);

const naviHeader=document.createElement("h2");
naviHeader.textContent="Navigation";
navi.appendChild(naviHeader);

const linkHome=document.createElement("a");
linkHome.href="./index.html";
linkHome.textContent="Home";
navi.appendChild(linkHome);

navi.appendChild(document.createElement("br"));

const linkGallery=document.createElement("a");
linkGallery.href="./gallery.html";
linkGallery.textContent="Gallery";
navi.appendChild(linkGallery);

navi.appendChild(document.createElement("br"));

const linkAbout=document.createElement("a");
linkAbout.href="./about.html";
linkAbout.textContent="About";
navi.appendChild(linkAbout);

navi.appendChild(document.createElement("br"));




/*navigation*/
/*
const navi=document.createElement("div");
navi.style.cssText='left:0px;';
*/
/*adding navigation links*/
/*
const indexLink=navi.createElement("a");
indexLink.setAttribute("href", "./index.html");
indexLink.textContent="Home";
/*
/*adding the navi element*/
/*
document.querySelector("body").appendChild(navi);
*/