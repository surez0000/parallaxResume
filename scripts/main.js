// let surezResume = {
//     makeParallaxHappen : (ev) => {
//         let scrollPos = window.scrollY;
//         cloud_01.style.left = scrollPos + 'px';
//         cloud_02.style.left = -scrollPos + 'px';
//         rock_01.style.top = scrollPos * 0.4 + 'px';
//         rock_02.style.top = scrollPos * 0.3 + 'px';
//         rock_03.style.top = scrollPos * 0.28 + 'px';
//         frontrock.style.top = scrollPos * 0.2 + 'px';
//         river.style.top = scrollPos * 0.2 + 'px';
//         frontgrass_02.style.top = scrollPos * 0.2 + 'px';
//         frontmountain.style.top = scrollPos * 0.2 + 'px';
//         frontgrass_01.style.top = scrollPos * 0.2 + 'px';
//     }
// }

// surezResume.cloud_01 = document.getElementById("cloud_01");
// surezResume.rock_01 = document.getElementById("rock_01");
// surezResume.cloud_02 = document.getElementById("cloud_02");
// surezResume.rock_02 = document.getElementById("rock_02");
// surezResume.rock_03 = document.getElementById("rock_03");
// surezResume.frontrock = document.getElementById("frontrock");
// surezResume.river = document.getElementById("river");
// surezResume.frontgrass_02 = document.getElementById("frontgrass_02");
// surezResume.frontmountain = document.getElementById("frontmountain");
// surezResume.frontgrass_01 = document.getElementById("frontgrass_01");


// window.addEventListener("scroll", (event) => {
//     surezResume.makeParallaxHappen(event)
// });


const surezResume = {
    scrollPos: 0,
    ticking: false,
    elements: {
      cloud_01: document.getElementById("cloud_01"),
      rock_01: document.getElementById("rock_01"),
      cloud_02: document.getElementById("cloud_02"),
      rock_02: document.getElementById("rock_02"),
      rock_03: document.getElementById("rock_03"),
      frontrock: document.getElementById("frontrock"),
      river: document.getElementById("river"),
      frontgrass_02: document.getElementById("frontgrass_02"),
      frontmountain: document.getElementById("frontmountain"),
      frontgrass_01: document.getElementById("frontgrass_01"),
      header: document.getElementById("headerSection"),
    },
    
    makeParallaxHappen: function() {
      this.elements.cloud_01.style.transform = `translate3d(${this.scrollPos}px, 0, 0)`;
      this.elements.cloud_02.style.transform = `translate3d(${-this.scrollPos}px, 0, 0)`;
      this.elements.rock_01.style.transform = `translate3d(0, ${this.scrollPos * 0.4}px, 0)`;
      this.elements.rock_02.style.transform = `translate3d(0, ${this.scrollPos * 0.3}px, 0)`;
      this.elements.rock_03.style.transform = `translate3d(0, ${this.scrollPos * 0.28}px, 0)`;
      this.elements.frontrock.style.transform = `translate3d(0, ${this.scrollPos * 0.2}px, 0)`;
      this.elements.river.style.transform = `translate3d(0, ${this.scrollPos * 0.2}px, 0)`;
      this.elements.frontgrass_02.style.transform = `translate3d(0, ${this.scrollPos * 0.2}px, 0)`;
      this.elements.frontmountain.style.transform = `translate3d(0, ${this.scrollPos * 0.2}px, 0)`;
      this.elements.frontgrass_01.style.transform = `translate3d(0, ${this.scrollPos * 0.2}px, 0)`;
      if(this.elements.header.style.top > 0){
        this.elements.header.style.top = `${this.scrollPos * 0.2}px`;
      }
    },
    
    handleScroll: function() {
      this.scrollPos = window.scrollY;
      if (!this.ticking) {
        window.requestAnimationFrame(() => {
          this.makeParallaxHappen();
          this.ticking = false;
        });
        this.ticking = true;
      }
    },
    
    init: function() {
      window.addEventListener("scroll", () => {
        this.handleScroll();
      });
    },
  };
  
  surezResume.init();
  