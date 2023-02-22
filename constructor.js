export function DrawCard(a) {
    Object.assign(this, a);
  
    this.getHtml = function () {
      secondSection.innerHTML += `<div class="infoContainer">   
                                  <div class="firstDiv">
                                      <img src="${this.avatar}" alt="" class="avatar"/>
                                      <h4 class="position">${this.position}</h4>
                                  </div>
                                  <h3 class="name">${this.name}</h3>
                                 </div>`;
    };
  }