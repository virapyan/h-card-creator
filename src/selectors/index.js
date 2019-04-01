export const selectCardProp = (state, prop) => state.getIn(['card', prop]);
export const selectCardState = (state) => state.get('card');