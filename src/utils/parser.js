/*
 * This data is just for testing purposes. In the completed app
 * it should be passed dynamically to "destruct" method.
 */
const initialCard = `
  <div class="vcard">
    <span class="fn n">
      <span class="given-name">Robert</span>
      <span class="family-name">Stevenson</span>
    </span>
    <a class="email" href="mailto:r.stevenson@gmail.com">r.stevenson@gmail.com</a>
    <div class="adr">
      <div class="street-address">25, Howard Avenue</div>
      <span class="locality">Neutral Bay</span>, 
      <span class="region">NSW</span>,
      <span class="postal-code">2089</span>
      <span class="country-name">Australia</span>
    </div>
    <div class="tel">0455234567</div>
    <img class="photo" src=""/>
  </div>`;

/* 
 * For existing cards cardString prop should be loaded from server.
 * For new cards probably will still load from the server but with empty fields,
 * or could be generated locally as an initial value with empty fields.
 */ 
export const fromHtml = (cardString = initialCard) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(cardString, "text/html");

  const nameElements = doc.getElementsByClassName('given-name');
  const surnameElements = doc.getElementsByClassName('family-name');
  const emailElements = doc.getElementsByClassName('email');
  const phoneElements = doc.getElementsByClassName('tel');
  const suburbElements = doc.getElementsByClassName('locality');
  const stateElements = doc.getElementsByClassName('state');
  const postcodeElements = doc.getElementsByClassName('postal-code');
  const countryElements = doc.getElementsByClassName('country-name');
  const avatarElements = doc.getElementsByClassName('photo');
  const strAddressElements = doc.getElementsByClassName('street-address');
  
  const addrStrArray =  strAddressElements.length ? strAddressElements[0].innerHTML.split(',') : '';
  const houseName = addrStrArray ? addrStrArray[0] : '';
  const street = (addrStrArray && addrStrArray.length > 1) ? addrStrArray[1] : '';

  return {
    name: nameElements.length ? nameElements[0].innerHTML : '',
    surname: surnameElements.length ? surnameElements[0].innerHTML : '',
    email: emailElements.length ? emailElements[0].innerHTML : '',
    phone: phoneElements.length ? phoneElements[0].innerHTML : '',
    houseName,
    street,
    suburb: suburbElements.length ? suburbElements[0].innerHTML : '',
    state: stateElements.length ? stateElements[0].innerHTML : '',
    postcode: postcodeElements.length ? postcodeElements[0].innerHTML : '',
    country: countryElements.length ? countryElements[0].innerHTML : '',
    avatar: avatarElements.length ? avatarElements[0].getAttribute('src') : '',
  };
}

/* 
 * This should return HTML representation of app state as string.
 * (skipping the full implementation and returning an empty string).
 */ 
export const toHtml = (state = '') => {
  return state;
};