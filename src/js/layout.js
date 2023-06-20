export function printHeader(array, elementHTML){
    let html = "";
    array.forEach(({icon, number, state, title, today, user}) => {
        const iconState = state ? "./src/images/icon-up.svg":"./src/images/icon-down.svg";
        html += `
        <div class="follower">
        <div class="follower-head">
          <img src=${icon} alt="icon">
          <p>${user}</p>
        </div>
        <div class="total-followers">
          <p>${number}</p>
          <p>${title}</p>
        </div>
        <div class="followers-today">
          <img src=${iconState} alt="">
          <p class=${state?"color-green":"color-red"}>${today} Today</p>
        </div>
      </div>
        `
    });
    elementHTML.innerHTML = html;
}

export function printBody(array, elementHTML){
    let html = "";
    array.forEach(({title, icon, number, percent, state}) => {
        const iconState = state ? "./src/images/icon-up.svg":"./src/images/icon-down.svg";
        html += `
        <div class="overview">
        <div class="overview-top">
          <p>${title}</p>
          <img src=${icon} alt="">
        </div>
        <div class="overview-bottom">
          <p>${number}</p>
          <div class="overview-bottom-percent">
            <img src=${iconState} alt="">
            <p class=${state?"color-green":"color-red"}>${percent}%</p>
          </div>
        </div>
      </div>
        `
    });
    elementHTML.innerHTML=html;
}
