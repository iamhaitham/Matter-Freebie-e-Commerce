# Matter Freebie e-Commerce

## Run
1. Clone this repository.
2. Go to the root directory if the repository and run ```npm install```.
3. After the previous step is done, run ```npm run start```.
4. Navigate to ```http://localhost:3000/```.

## Main functionalities 
1. Login ```/login```: 
    1. Incorrect email format:
        - The email input will turn to red before the user clicks on 'SIGN IN'.
        - A red toast notification will appear showing 'Email is not valid!' if the user clicks on 'SIGN IN'.
        - No progress loader will appear (which indicates there is no request sent) in this case.
    2. Unmatching email and password:
        - A red toast notification will appear showing 'Incorrect email or password!'.
    3. Matching email and password:
        - The application will automatically navigate to '/'.
        - A user token will be added to the localstorage.
2. Logout:
    - The user token will be removed from the localstorage.
    - The user will stay in the same route.
3. Navigation menu items:
    - The user can click on 'SHOP' or 'LOGIN' and they will turn orange. 
    - The user can click on the logo of the website, and the orange color will be reset.
    - Clicking on 'LOGOUT' will not turn it to orange as the user will immediately see the 'LOGIN' in its place.
    - Clicking on other tabs will not do anything (See [Attention](#attention)).
4. Homepage ```/```:
    - There is a 'Featured' section where you can hover over a product and see it in a Quick View mode.
    - The user can select the quantity of the product, and then add it to the cart.
    - Only the id and the price of the products are passed to the Quick View mode (See [Attention](#attention)).
5. Shop ```/shop```:
    - The user can sort the products by their prices.
    - The user can filter the products by their categories.
    - The user can always reset all the sorting and filters by clicking on 'RESET'.
    - Not all filters can be used (See [Attention](#attention)).
6. Cart:
    - The cart icon does not show a badge if the cart is empty.
    - Hovering over the empty cart icon shows a 'not-allowed' cursor to the user.
    - The cart icon shows a badge the contains the number of unique products in the cart.
    - Hovering over the non-empty cart icon gives the user the ability to click and display the cart dialog.
    - The cart dialog is a popup with a table containing the major fields for each selected product.
    - The user can use the cart popup to increase or decrease the quantity of any product, as well as totally removing it from the cart.
    
## Attention <a name="attention"/>
 Please be aware all the following are not bugs:
* Some tabs, buttons and links were only added to match the mockup. There was no intent of adding any functionality to them when I started working on this application.
* Quick View mode is only passed the id and the price as its purpose is to allow the user to add unqiue products with some quantity of their choice, and then review their wishlist in the cart section.
* Filtering in the Shop section is only there to demonstrate how it should work, and because I have a small number of products, I cannot attach all the categories to this small number of products.

## React-specifics I used in this application:
* I have used ```useContext``` hook in some components so that the I do not need to pass the props all the way to a deeply-nested component.
* I have used protected (private) routes technique to not allow the logged in user to navigate to ```/login```.
* I have used ```useReducer``` in some complext components to ditch the usage of many ```useState``` hooks.
* I have used ```lazy``` function to lazy load some components and reduce the bundle size a little bit.
* I have used one ```Higher Order Component (HOC)```.

## React-specifics I did not use in this application:
* ```useRef``` hook.
* ```useEffect``` hook.
* ```useMemo``` hook.
* ```useCallback``` hook.
* ```memo``` function.

## Technologies & public APIs used
* [React](https://beta.reactjs.org/)
* [Axios](https://axios-http.com/)
* [React Router](https://reactrouter.com/en/main)
* [Material UI](https://mui.com/)
* [Fake Store API](https://fakestoreapi.com/docs)
* [use-local-storage-state](https://github.com/astoilkov/use-local-storage-state)
