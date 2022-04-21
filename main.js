const name1 = document.getElementById("name1");
const name2 = document.getElementById("name2");
const name3 = document.getElementById("name3");
const aboutanswer = document.createElement("div");
aboutanswer.className = "about-name-answer";
name1.append(aboutanswer);
const aboutanswer2 = document.createElement("div");
aboutanswer2.className = "about-name-answer";
name2.append(aboutanswer2);
const aboutanswer3 = document.createElement("div");
aboutanswer3.className = "about-name-answer";
name3.append(aboutanswer3);

// 名前の下にマウスが入ったとき
aboutanswer.addEventListener("mouseover", function () {
  aboutanswer.style.opacity = "1";
  aboutanswer.style.transform = "translateX(0px)";
  aboutanswer.textContent = "落翔真(おちしょうま)";
});

// 名前の下にマウスが離れたとき
aboutanswer.addEventListener("mouseout", function () {
  aboutanswer.style.opacity = "0";
  aboutanswer.style.transform = "translateX(100px)";
});

// 大学の下にマウスが入ったとき
aboutanswer2.addEventListener("mouseover", function () {
  aboutanswer2.style.opacity = "1";
  aboutanswer2.style.transform = "translateX(0px)";
  aboutanswer2.textContent = "新潟大学";
});

// 大学の下にマウスが離れたとき
aboutanswer2.addEventListener("mouseout", function () {
  aboutanswer2.style.opacity = "0";
  aboutanswer2.style.transform = "translateX(100px)";
});

// 大学の下にマウスが入ったとき
aboutanswer3.addEventListener("mouseover", function () {
  aboutanswer3.style.opacity = "1";
  aboutanswer3.style.transform = "translateX(0px)";
  aboutanswer3.textContent = "農学部農学科";
});

// 大学の下にマウスが離れたとき
aboutanswer3.addEventListener("mouseout", function () {
  aboutanswer3.style.opacity = "0";
  aboutanswer3.style.transform = "translateX(100px)";
});

const name4 = document.getElementById("name4");
const name5 = document.getElementById("name5");
const name6 = document.getElementById("name6");
const aboutanswer4 = document.createElement("div");
aboutanswer4.className = "about-name-answer";
name4.append(aboutanswer4);
const aboutanswer5 = document.createElement("div");
aboutanswer5.className = "about-name-answer";
name5.append(aboutanswer5);
const aboutanswer6 = document.createElement("div");
aboutanswer6.className = "about-name-answer";
name6.append(aboutanswer6);

// 野球の下にマウスが入ったとき
aboutanswer4.addEventListener("mouseover", function () {
  aboutanswer4.style.opacity = "1";
  aboutanswer4.style.transform = "translateX(0px)";
  aboutanswer4.textContent = "小学3年～中学3年";
});

// 野球の下にマウスが離れたとき
aboutanswer4.addEventListener("mouseout", function () {
  aboutanswer4.style.opacity = "0";
  aboutanswer4.style.transform = "translateX(100px)";
});

// 陸上の下にマウスが入ったとき
aboutanswer5.addEventListener("mouseover", function () {
  aboutanswer5.style.opacity = "1";
  aboutanswer5.style.transform = "translateX(0px)";
  aboutanswer5.textContent = "高校1年～大学3年";
});

// 陸上の下にマウスが離れたとき
aboutanswer5.addEventListener("mouseout", function () {
  aboutanswer5.style.opacity = "0";
  aboutanswer5.style.transform = "translateX(100px)";
});

// スノーボードの下にマウスが入ったとき
aboutanswer6.addEventListener("mouseover", function () {
  aboutanswer6.style.opacity = "1";
  aboutanswer6.style.transform = "translateX(0px)";
  aboutanswer6.textContent = "大学1年～　？";
});

// スノーボードの下にマウスが離れたとき
aboutanswer6.addEventListener("mouseout", function () {
  aboutanswer6.style.opacity = "0";
  aboutanswer6.style.transform = "translateX(100px)";
});

const name7 = document.getElementById("name7");
const name8 = document.getElementById("name8");

const aboutanswer7 = document.createElement("div");
aboutanswer7.className = "about-name-answer";
name7.append(aboutanswer7);
const aboutanswer8 = document.createElement("div");
aboutanswer8.className = "about-name-answer";
name8.append(aboutanswer8);

// HTML・CSSの下にマウスが入ったとき
aboutanswer7.addEventListener("mouseover", function () {
  aboutanswer7.style.opacity = "1";
  aboutanswer7.style.transform = "translateX(0px)";
  aboutanswer7.textContent = "GeekSalonで３か月";
});

// HTML・CSSの下にマウスが離れたとき
aboutanswer7.addEventListener("mouseout", function () {
  aboutanswer7.style.opacity = "0";
  aboutanswer7.style.transform = "translateX(100px)";
});

// JavaScriptの下にマウスが入ったとき
aboutanswer8.addEventListener("mouseover", function () {
  aboutanswer8.style.opacity = "1";
  aboutanswer8.style.transform = "translateX(0px)";
  aboutanswer8.textContent = "勉強中…";
});

// JavaScriptの下にマウスが離れたとき
aboutanswer8.addEventListener("mouseout", function () {
  aboutanswer8.style.opacity = "0";
  aboutanswer8.style.transform = "translateX(100px)";
});
