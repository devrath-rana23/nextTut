# it is a wrapper around react framework which enables your react code to pre render whch enables your react code to run on the server

# in client side rendering code is downloaded from server and browsers run that js code alog with html/css

# sites built in next -> when we go to page view source we can see all the html document content -> in this case server is actually sending th html itself.

# but in case of react javascript bundles which is then executed by the browsers and then the output is displayed to the user

# next does is server side rendering of the react code on the server so that your server actually sends html instead of js bundles on your screen.

# npx create-next-app hello-next --use-npm

# convert js to ts files and tsx files

# create tsconfig.json

# npm i typescript @types/node @types/react --save-dev

# now run npm run dev -> automatically fill your empty tsconfig.json

#### File structure

# whatever we put in the public folder is directly accessible in th root domain. next js use public directory to serve our files as it is. so don't put files you don't want directly accessible as it will be accessible by anyone

# pages is the heart of our application

# next provides aotomatic routing

# whatever url we provide next tirs to resolve that by accessing that path in pages folder and serve the .ts, or .js, or .tsx or .jsx file component except index.tsx which is accessible in our root domain so accessing it using /index gives error

# in next since html page processed in server itself then sent to client so client does not need to js code to be executed before showing changes like in react

# \_document.tsx

# this file will not be available in route /\_document but is responsible for all the other things in our html document. This is the absolute base template used by next. use it minimal as it is root file

# \_app.tsx

# it is responsible for rendering all our pages so if we just return a simple custom jsx then that jsx will override content of all pages. next passes two props in this file. one is Component and other is pageProps. if we console something in this file we can see that in our terminal as well so it is a node process which makes it different from document. it is also executed in client side also. this explains that our html/css is ready on server side and served to client and when our js is ready it is attached to that page . \_document.tsx code only executes on the server. \_document.tsx js code is never executed in client side.

# Component prop - page passes to this Component by next internally

# pageProps prop -

# styled-jsx not recommended approach used for writing component specific css

# global css file or normal import of css can only be done in app.tsx file not other files. in other pages it will treat normal css import as global css and will be not allowed

# to import a css file to a particular component we need to make file name as filename.modeule.css and give it some alias and use that alias to apply classes defined in it

# next supports sass by default. importing it to a file follows the same logic as for css files as mentioned above

# speciality of api folder is that it cannot return a jsx code. it should return a single function. filename automatically makes a endpoint -> http://localhost:3000/api/filename

# req.body gives us the json object of whatever is passed in payload so we can treat it as normal object without applying any more logic.

# req.cookies - dealing with cookies

# req.headers - getting custom headers from a particular request

# req.query - to get object of get parameters key-value

# res.json - to give json responses

# res.send - to send data in format other than json

# res.setHeader - to set custom response headers. can be used to set cookie as response header

# res.statusCode - set custom status code for responses

# res.end() - will give error for code in terminal written after this line so not allow other response

##### JSON WEB TOKEN AUTH

# npm i jsonwebtoken @types/jsonwebtoken --save-dev

# use Link to navigate smoothly like react instead of whole page refreshing

# use of dynamic routing

# useRouter sometimes does not behave as expected. on first render the qury object returns empty to handle that we need to use getstaticprops and getserversideprops

# router.push() push in history stack, and router.replace() replace in history stack so you may not find the same page as expected whin goin history back in case of replace

# try to use link component as it is good for seo and accessibility

# [...name].tsx catch all routes except index

# [[...name]].tsx catch all routes includes index -> for which route.query.name will return empty object

# cannot make custom status code pages other than 404 as it is statically configured in next

# getStaticProps function return a object with props key with value as object of props which will be passed to the main jsx component. This function is executed before 




