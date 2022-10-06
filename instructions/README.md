Pages:
1. About Page, index.js page, this is the page that gets rendered when site is loaded i.e the home page
2. Posts Page
3. Works Page
4. Project page

Components: 
1. Common Components
  a. Navbar
  b. 3d Image
  c. Footer

2. About Page Components
  a. Hello component
  b. Name component
  c. Image component
  d. Work component
  e. Bio component
  f. On the web component

3. Works Page Components
  a. Works component
  b. Collaborations component
  c. Old works component

Features and animations:
1. 3d dog
2. Light/Dark Mode
3. Page transitions

// Setup
- First the required libraries are installed
- Public contains all the required static docs
eslintrc.json, prettier.config.js, next.config.js, gitignore and prettierignore contains the config for repective libraries.
- The pages present in the pages directory are auto routed, that means a page called about.js will be rendered when we visit website/about .
- The home page is the index.js page. This is rendered when someone visits the site
- Similarly we have posts, 404 and works page.
- Works page also contains some dynamic routing, these pages are present in the works folder.
- Next.js uses the App component to initialize pages. We can override it and control the page initialization by creating a _app.js file.
- To override the default 'Document', we have to use the _document.js file. In this case we are overriding it to make use of colormodescript and our theme.
