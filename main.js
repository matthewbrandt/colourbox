/*
- claim state
- colour class / hex
- colour name
- colour claimed name
- colour claimee name
*/

import { colourData } from './colour_data.js';

function makeDivs() {
    const mainGrid = document.getElementById('main_grid');

    colourData.forEach((theDiv) => {
      
      /* calculate claim status based on expiry */
      let expires = new Date(theDiv.claimed_at);
      expires.setDate(expires.getDate() + 30);
      let today = new Date();
      let expiredState = today < expires;    
      
      /* create the empty divs */
      const newDiv = document.createElement('div')
      const insideTopDiv = document.createElement("div");
      const insideBottomDiv = document.createElement("div");
    
      /* add styles to the main div container */
      newDiv.classList.add("item");
      if (expiredState) { 
        newDiv.dataset.claimed = true;
      };

      /* style & fill the upper part */
      newDiv.append(insideTopDiv);
      insideTopDiv.classList.add("colour-cell");
      insideTopDiv.style.backgroundColor = theDiv.colour_bg;
      if(theDiv.font_style === "light") { insideTopDiv.style.color = "#FFFFFF"; }
      else { insideTopDiv.style.color = "#000000"; }
      if (expiredState) {
        insideTopDiv.innerHTML = theDiv.colour_claimed_name;
      }
      else { insideTopDiv.innerHTML = theDiv.colour_name; }
      

      /* style the lower part */
      newDiv.append(insideBottomDiv);
      insideBottomDiv.classList.add("colour-owner");
      if (expiredState) {
        insideBottomDiv.innerText = theDiv.colour_claimee_name;
      }
      else { 
        insideBottomDiv.classList.add("colour-unclaimed");
        insideBottomDiv.innerText = "unclaimed"
      }
            
      mainGrid.appendChild(newDiv)
    })
  }

makeDivs();


