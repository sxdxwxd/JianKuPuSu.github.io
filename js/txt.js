const quotes = [
  "虚心使人进步，骄傲使人落后。",
  "孩儿立志出乡关，学不成名誓不还！",
  "雄关漫道真如铁，而今迈步从头越。",
  "星星之火，可以燎原。",
  "人民群众是真正的英雄。",
  "最像长辈的话：好好学习，天天向上。",
  "自信人生二百年，会当水击三千里！"
];
let currentQuoteIndex = 0;

function displayQuote() {
  const quoteText = document.getElementById('quote-text');

  quoteText.style.opacity = 0;

  setTimeout(() => {
    quoteText.textContent = quotes[currentQuoteIndex];
    quoteText.style.opacity = 1; // 渐入
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
  }, 500);
  
}

function displayDate() {
  const dateDisplay = document.getElementById('date-display');
  const updateDate = () => {
      const today = new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, '0');
      const day = String(today.getDate()).padStart(2, '0');
      const hours = String(today.getHours()).padStart(2, '0');
      const minutes = String(today.getMinutes()).padStart(2, '0');

      const dateString = `${year}年${month}月${day}日 ${hours}:${minutes}`;
      dateDisplay.textContent = dateString;
  };

  updateDate(); // 初始显示
  setInterval(updateDate, 1000); // 每秒更新一次
}

document.getElementById('quote-box').addEventListener('click', displayQuote);

displayQuote(); // 显示初始名言
displayDate(); // 显示今日日期

function toggleVisibility() {
  var quoteBox = document.getElementById("quote-box");
  if (quoteBox.style.display === "none") {
      quoteBox.style.display = "block";
  } else {
      quoteBox.style.display = "none";
  }
}
