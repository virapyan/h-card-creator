import { fromHtml } from '../parser';

describe('parser', () => {
  it('should return destructed object with props', () => {
    const hCardHtmlStr = `
      <div class="vcard">
        <span class="fn n">
          <span class="given-name">Robert</span>
          <span class="family-name">Stevenson</span>
        </span>
      </div>`;
    
    const destructedObject = fromHtml(hCardHtmlStr);

    expect(destructedObject.name).toBe('Robert');
    expect(destructedObject.surname).toBe('Stevenson');
    expect(destructedObject.phone).toBe('');
  });

  it('should return proper street address', () => {
    const hCardHtmlStr = `
      <div class="vcard">
        <div class="adr">
          <div class="street-address">25,Howard Avenue</div>
        </div>
      </div>`;
    
    const destructedObject = fromHtml(hCardHtmlStr);

    expect(destructedObject.houseName).toBe('25');
    expect(destructedObject.street).toBe('Howard Avenue');
  });
});
