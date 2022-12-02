export const navigationMenuReducerInitialState = {
    activeMenuItemId: -1
};

export const navigationMenuReducerTypes = {
    NavigationMenu_SelectItem: 'navigationMenu_selectItem'
}

export function navigationMenuReducer(state, action) {
    switch (action.type) {
        case navigationMenuReducerTypes.NavigationMenu_SelectItem:
            return {
                ...state, 
                activeMenuItemId: action.activeMenuItemId
            };
        default:
            throw Error('Unknown action.');
    }
}