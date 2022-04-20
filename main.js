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
