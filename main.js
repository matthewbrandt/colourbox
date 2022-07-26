/*
- claim state
- colour class / hex
- colour name
- colour claimed name
- colour claimee name
*/

const colourArr = [
    {
        id: '147',
        claimed_at: '',
        colour_name: 'Pale Lilac',
        colour_bg: '#E0B5D0',
        font_style: 'dark',
        colour_claimed_name: '',
        colour_claimee_name: ''
    },
    {
        id: '70',
        claimed_at: '2022-06-27',
        colour_name: 'Royal Blue',
        colour_bg: '#2761AA',
        font_style: 'light',
        colour_claimed_name: 'Mauve',
        colour_claimee_name: 'lattjorr'
    },
    {
        id: '42',
        claimed_at: '',
        colour_name: 'Bronze Green',
        colour_bg: '#767F5F',
        font_style: 'light',
        colour_claimed_name: '',
        colour_claimee_name: ''
    },
    {
        id: 'WG3',
        claimed_at: '',
        colour_name: 'Warm Grey',
        colour_bg: '#C2BAB8',
        font_style: 'dark',
        colour_claimed_name: '',
        colour_claimee_name: ''
    },
    {
        id: '120',
        claimed_at: '',
        colour_name: 'Black',
        colour_bg: '#000000',
        font_style: 'light',
        colour_claimed_name: '',
        colour_claimee_name: ''
    },
    {
        id: '23',
        claimed_at: '',
        colour_name: 'Orange',
        colour_bg: '#E7873B',
        font_style: 'dark',
        colour_claimed_name: '',
        colour_claimee_name: ''
    },
    {
        id: '36',
        claimed_at: '',
        colour_name: 'Cream',
        colour_bg: '#F8D88A',
        font_style: 'dark',
        colour_claimed_name: '',
        colour_claimee_name: ''
    },
    {
        id: '61',
        claimed_at: '',
        colour_name: 'Peacock Green',
        colour_bg: '#33767C',
        font_style: 'light',
        colour_claimed_name: '',
        colour_claimee_name: ''
    },
    {
        id: '10',
        claimed_at: '',
        colour_name: 'Deep Red',
        colour_bg: '#D9355C',
        font_style: 'light',
        colour_claimed_name: '',
        colour_claimee_name: ''
    }
]

function makeDivs() {
    const mainGrid = document.getElementById('main_grid');

    colourArr.forEach((theDiv) => {
      
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


