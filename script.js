function checkAnswer() {
    const answer = document.getElementById("answer").value;
    const result = document.getElementById("result");
    const image = document.getElementById("image");
  
    if (answer == "0") {
      result.classList.remove("hidden");
      image.src = "https://th.bing.com/th/id/OIP.cxUrONPB9_prQIIXrEWBuwAAAA?w=171&h=180&c=7&r=0&o=5&dpr=1.8&pid=1.7"; // 맞췄을 때 보여줄 이미지
    } else {
      result.classList.add("hidden");
      alert("틀렸습니다! 다시 시도해 보세요.");
    }
  }
  