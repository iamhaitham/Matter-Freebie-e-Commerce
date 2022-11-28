import { featuredEntities } from '../../entities';

export const featuredSectionReducerInitialState = {
  miniImage: featuredEntities[0].miniImages[0],
  quickViewItem: {},
  quickViewButton: { id: 0, isQuickView: false }
};

export const featuredSectionReducerTypes = {
  QuickView_Closed: 'quickView_closed',
  QuickView_Button_MouseOver: 'quickView_button_mouseOver',
  QuickView_Button_MouseOut: 'quickView_button_mouseOut',
  QuickView_Item_Chosen:  'quickView_Item_chosen',
  QuickView_MiniImage_Chosen: 'quickView_miniImage_chosen',
}

export function featuredSectionReducer(state, action) {
  switch (action.type) {
    case featuredSectionReducerTypes.QuickView_Closed:
      return {
        ...state, 
        quickViewItem: {}
      };
    case featuredSectionReducerTypes.QuickView_Button_MouseOver:
    case featuredSectionReducerTypes.QuickView_Button_MouseOut:
      return {
        ...state,
        quickViewButton: {
          ...state.quickViewButton, 
          id: action.id,
          isQuickView: action.isQuickView
        }
      };
    case featuredSectionReducerTypes.QuickView_Item_Chosen:
      return {
        ...state, 
        quickViewItem: {
          ...action.quickViewItem
        }
      };
    case featuredSectionReducerTypes.QuickView_MiniImage_Chosen:
      return {
        ...state, 
        miniImage: action.miniImage
      };
    default:
      throw Error('Unknown action.');
  }
}
