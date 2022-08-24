 const number = document.querySelector(".number");

    const oneTimer = setInterval(() => {
      if (number.innerText === "100") {
        clearInterval(oneTimer);
		
      } else {
        number.innerText = ++number.innerText;
      }
    }, 50);