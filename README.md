🟢 "Episode 1" :-

🟢"Episode 2" :-

1. What is NPM, Bundle ?

   - Whats is Parcel ?
     - Dev Build
     - Local Server
     - HMR = Hot Moduler Replacement
     - File Watching Algorithm - written in C++
     - Caching - Faster Builds
     - Image Optimization
     - Minification
     - Bundling
     - Compress
     - Consistent Hashing
     - Code Splitting
     - Diffrential Bundling - support older browsers
     - Dignostic
     - Error Handling
     - Tree Shaking - remove unused code
     - Different dev and prod bundles

2. Install NPM which create a package.json
3. Install Parcel
4. Create .gitignore file and ignore to push node_modules in github
5. npx parcel index.html
   - npx :- to executing parcel
6. Install React/ReactDom by npm install react/react-dom

🟢 "Episode 3" :-

1. edit package.json to run project using npm run start cmd.

2. What is React Element ?
3. JSX
4. What is Babel ?
5. What is React Component and type ?
   - Class Based Component :- it is old way of writing component
   - Functional Component :- it is New way of writing Component. it is a normal javascript function
6. What is Component Composition ?
   - <Title /> using this we can done Component Composition. we can also call Function in JSX.

🟢 "Episode 4" :-

1. create a header component & style
2. Create a body component in App.js.
3. Create a RestaurantCard component in App.js
4. What is Props
   - Props are normal argument to a function.
5. What is ConfictDriven UI ? 1.16.00
6. create a styleList object using swiggy api
7. Giving some props in RestaurantCard
8. and make a Dynamical call RestaurantCard list using .map method in body component

🟢 "Episode 5" :-

1. Create src folder.
2. Create a Component folder.
3. Inside Component Folder we create Body.js, Header.js, Restaurant.js file
4. and also src folder create a utils folder and inside create constants.js, App.js
5. In constant file we export CDN_LINK.
6. What is Hooked?
   - A Normal Javascript utility Function.

🫵 Note.

- Whenever a state variable changes React will Re-render my Component

🟢 "Episode 6" :-

1. What is UseEffect ?
2. Fetch Data Swiggy API in Body Component
3. What is Conditional rendering
4. Create Login Logout button functionality in Header.
5. Create a Shimmer Component.
6. Implement a input Search text and Top Rated button functionality in Body.

🫵 Note :- Whenever state variable update, react triggers a reconciliation cycle(re-renders the component)

🟢 "Episode 7" :-

- Install react-router-dom.
- Create a About, Contact, Error page.
- Implement Routing page in App.js and Header.js
- Create RestaurantMenu.js component.
- Implement dynamic Route with Restaurant id.
- RestaurantMenu page fetching API and show the data.

🫵 Note :-

1.  When it is UseEffect is called ?

    - UseEffect will call after every render of that component.
    - Hook is just normal utility function.

2.  There are 2 types of Routing.

- Client Side Routing.
- Server Side Routing.

🟢 "Episode 8" :-

- Difference between is Class Based and Functional Component ?
- Create a user.js Functional component and UserClass.js which is Class Based Component.
- how do we use props in Class Based Component ?
- why do we always use Super(props)?
- we can use useState hook in Class Based Component.
- What is the Life Cycle of the Class Based Component
  - Constructor(){}
  - Render(){}
    🔖 ComponentDidMount(){} :- It is use for make an API CALL in Class Based Component.
- What is Mounting, Updating, Unmounting.
  🔖 ComponentWillMount()

🫵 Note:-

- 🔖 Never Update state varaible Directly.
- 🔖 Loading and Mounting meaning is same.
- 🔖 ComponentDidMount(){} :- It is use for make an API CALL in Class Based Component.
- 🔖 In Functional Component we use useEffect hook to make an API CALL. In react Quickly render it and then make API Call and fill the D ata.
- 🏷️ Project.wojtekmaj.pl this is the React life cycle diagram website.

🟢 "Episode 9" :-

- creat a Custom Hook useRestaurantMenu() inside useRestaurantMenu.js component.
- To optimizing our app we create a new useRestaurantMenu.js Component inside utils folder and fetch the Restaurant menu list API call it RestaurantMenu.jscomponent.
- To make our code fast we can convert all component into small bundle.
- What is this are :-
  - Chunkin
  - Code Splitting
  - Dynamic Bundling
- Implement a Online & Offline status.
- Implement a Lazy Loading.
- What is Lazy Loading ? 1:32:00

🟢 "Episode 10" :-

- Only style the Header and Body Component.

🟢 "Episode 11" :-

- we can ceate a new Higher Order Component withPromotedLabel() inside RestaurantCard.js component and call it Body.js using creating a Custom hook withPromotedLabel();

- Implement Promoted label on card just like swiggy using all upper steps using Higher order function component withPromotedLabel().

- Implement a restaurant menu page using destructuring categories data in RestaurantCategory.js and make RestaurantCategory.js to get ItemCategory accordians.

- Make it a accordians functionality workable.

- What is {props drilling} ?

- we can create a UserContext.js and used loggedInUser in header using useContext() Hook. And we can used it whenever we want. And we dont want used props.

- What is the UserContext() :-
  - Context is a Global space. I can provide to hole app or a small portion of our app. I can create multiple context.
  - the UserContext() uses to make our app default value

🫵 Note:-

- 🔖 What is High Order Component ? Why do we need it ? Where do we use it ? and How do we use it ?

  - 🔖 Higher Order it is function that take a Component and returnes a Component.
  - 🔖 Higher take component as an input and it Enhanced it add some extra features to that component and returns it back.

🟢 "Episode 12" :-

- What is Redux ?
  - Read the Redux official Documentation.
- What is Zustand ?
- Install @Reduxjs/Toolkit & React-Redux.
- Connect our store to our app.
- Dispatch(action).
- Selector.

- We can create a appStore.js and configure the Store using configureStore.
- And then create a cartSlice.js in this we just make a reducers like addItem, removeItem, clearCart and export it into the appStore.js using reducer: { cart: cartReducer}.
- And then using useSelector Hook we can Subscribing the store in Header.js Component.
- Using Add button in itemList.js we Dispatch an Action.
- Implement a Clear Cart functionality in Cart.js Component.
- What is Immer Liberary in Redux/ToolKit.

🫵 Note:-

- 🔖 Install @Reduxjs/Toolkit & React-Redux and build our store.
- 🔖 A Selector is a Hook in React.
- 🔖 Cart.js :- Whenever you Subscribing the store make shure to Subscribe write portion of the store.
