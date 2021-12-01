# Using Next.Js, a Production Ready React Framework by 'Vercel'

1. Install the Next CLI
    - npm install -g create-next-app
2. creating the Next.js app
    - npx create-next-app [NAME-OF-THE-APPLICATION]    
3. The Object Model
    - react and react-dom
        - The React Library Object Model
            - Components
            - JSX
            - Lifecycle
            - Hooks
            - rendering
    - next
        - The Framework based on React
            - Routing
            - In-built CSS Integration
            - Compilation
            - Server-Side-Rendering (SSR)
            - Pre-Compiled External Calls (REST Calls)
4. The 'pages' folder
    - Contains all UI resources
    - Components in 'components' folder, nit available by default you may create it
        - The 'api' folder, this contains server-side code for Node.js
            - This uses the Next.js Server-Side Routing
        - The _app.js
            - The Main Container Component, The 'Higher-Order-Component', it a function that accepts component as input parameter and return Component
                - The 'pageProps' is a props type that represents data passed to the component that will be used for rendering
        - The 'index.js', is the Main Entry-Point of the application. All ComponentsMUST be loaded from this component
        - The Next.js Object Model will internally pass The Home Component from Index.js to _app.js and renders it.
5. The 'public' folder
    - This will contain theCompiled Output for all resources    
6. The 'styles' folder
    - This will contains all styles (CSS) used by component
7. package.json
    - The 'next' CLI
    - This will be used to 'build' (Production Build), 'dev' (Development build) of the current Next application
    - The 'next start' will execute the app on server and perform 
        - Server-Side-Rendering (SSR)
        - Pre-Compiled PreFetched calls             
8. Next.js Support Object Model
    - The 'next/head', this contains 'Head' component
    - The 'next/image', this contains 'Image' Component
    - The 'next/link', contains 'Link' component used for routing
9. Build
    λ  (Server)  server-side renders at runtime (uses getInitialProps or getServerSideProps)
    ○  (Static)  automatically rendered as static HTML (uses no initial props)
    ●  (SSG)     automatically generated as static HTML + JSON (uses getStaticProps)
    - getInitialProps
        - The method that will pre-compile the Server-Side Calls and fetch the data during the Build process 
    - getStaticProps()
        - The Method that will be executed during the  getInitialProps so that long running processes e.g. all Asynchronous operation will be executed for a component
        - We can use this as a replacement of getInitialProps() for AJAX calls    
    - The build will create a '.next' folder where all compiled and build resources are copied   
        - The 'cache' folder to cache resource used by server and browser both for executing the application
        - The 'server' folder, contains the 'pages' folder that has SSR 
        - The  'static' folder that contains CSS resources
10. For the Route Navigation the 'Link' component reads the file Name
    - e.g. if File name is home.js, under the 'components' folder, the the Link will be
        - <Link href="/components/home"></Link>
11. Using Explicitly added route parameters 
    - This is the Parameterized Routing
    - the 'next/router' module
        - The 'useRouter()' hook
            - The 'push()' method
                - {
                    pathname: '[URL-TO-NAVIGATE-TO]',
                    query: {Key:Value}
                }
                - The 'query' is the Query parameter object that contains 'Key', this is the Key passed in URL with 'Value'
                - To read the value from the query route parameter use 
                    - router.query.Value
                        - The 'router' is an object of type 'useRouter' 


