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
