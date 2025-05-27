/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/init-db/route";
exports.ids = ["app/api/init-db/route"];
exports.modules = {

/***/ "(rsc)/./app/api/init-db/route.ts":
/*!**********************************!*\
  !*** ./app/api/init-db/route.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/mongodb */ \"(rsc)/./lib/mongodb.ts\");\n\n\nasync function POST() {\n    try {\n        console.log(\"Connecting to MongoDB...\");\n        const client = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n        const db = client.db(\"ecommerce\");\n        console.log(\"Connected! Initializing data...\");\n        // Create initial products\n        const products = [\n            {\n                name: \"Laptop\",\n                price: 999,\n                description: \"Good laptop for work\",\n                image: \"/placeholder.svg?height=200&width=200&query=laptop\",\n                stock: 5,\n                createdAt: new Date()\n            },\n            {\n                name: \"Phone\",\n                price: 699,\n                description: \"Latest smartphone\",\n                image: \"/placeholder.svg?height=200&width=200&query=smartphone\",\n                stock: 10,\n                createdAt: new Date()\n            },\n            {\n                name: \"Headphones\",\n                price: 199,\n                description: \"Wireless headphones\",\n                image: \"/placeholder.svg?height=200&width=200&query=headphones\",\n                stock: 15,\n                createdAt: new Date()\n            }\n        ];\n        // Create initial users\n        const users = [\n            {\n                email: \"admin@test.com\",\n                password: \"admin\",\n                name: \"Admin\",\n                isAdmin: true,\n                createdAt: new Date()\n            },\n            {\n                email: \"user@test.com\",\n                password: \"user\",\n                name: \"User\",\n                isAdmin: false,\n                createdAt: new Date()\n            }\n        ];\n        // Clear existing data\n        await db.collection(\"products\").deleteMany({});\n        await db.collection(\"users\").deleteMany({});\n        await db.collection(\"reviews\").deleteMany({});\n        // Insert initial data\n        await db.collection(\"products\").insertMany(products);\n        await db.collection(\"users\").insertMany(users);\n        console.log(\"Database initialized successfully!\");\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: \"Database initialized successfully\",\n            productsCount: products.length,\n            usersCount: users.length\n        });\n    } catch (error) {\n        console.error(\"Database initialization failed:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Failed to initialize database\",\n            details: error.message\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2luaXQtZGIvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTBDO0FBQ007QUFFekMsZUFBZUU7SUFDcEIsSUFBSTtRQUNGQyxRQUFRQyxHQUFHLENBQUM7UUFDWixNQUFNQyxTQUFTLE1BQU1KLG9EQUFhQTtRQUNsQyxNQUFNSyxLQUFLRCxPQUFPQyxFQUFFLENBQUM7UUFFckJILFFBQVFDLEdBQUcsQ0FBQztRQUVaLDBCQUEwQjtRQUMxQixNQUFNRyxXQUFXO1lBQ2Y7Z0JBQ0VDLE1BQU07Z0JBQ05DLE9BQU87Z0JBQ1BDLGFBQWE7Z0JBQ2JDLE9BQU87Z0JBQ1BDLE9BQU87Z0JBQ1BDLFdBQVcsSUFBSUM7WUFDakI7WUFDQTtnQkFDRU4sTUFBTTtnQkFDTkMsT0FBTztnQkFDUEMsYUFBYTtnQkFDYkMsT0FBTztnQkFDUEMsT0FBTztnQkFDUEMsV0FBVyxJQUFJQztZQUNqQjtZQUNBO2dCQUNFTixNQUFNO2dCQUNOQyxPQUFPO2dCQUNQQyxhQUFhO2dCQUNiQyxPQUFPO2dCQUNQQyxPQUFPO2dCQUNQQyxXQUFXLElBQUlDO1lBQ2pCO1NBQ0Q7UUFFRCx1QkFBdUI7UUFDdkIsTUFBTUMsUUFBUTtZQUNaO2dCQUNFQyxPQUFPO2dCQUNQQyxVQUFVO2dCQUNWVCxNQUFNO2dCQUNOVSxTQUFTO2dCQUNUTCxXQUFXLElBQUlDO1lBQ2pCO1lBQ0E7Z0JBQ0VFLE9BQU87Z0JBQ1BDLFVBQVU7Z0JBQ1ZULE1BQU07Z0JBQ05VLFNBQVM7Z0JBQ1RMLFdBQVcsSUFBSUM7WUFDakI7U0FDRDtRQUVELHNCQUFzQjtRQUN0QixNQUFNUixHQUFHYSxVQUFVLENBQUMsWUFBWUMsVUFBVSxDQUFDLENBQUM7UUFDNUMsTUFBTWQsR0FBR2EsVUFBVSxDQUFDLFNBQVNDLFVBQVUsQ0FBQyxDQUFDO1FBQ3pDLE1BQU1kLEdBQUdhLFVBQVUsQ0FBQyxXQUFXQyxVQUFVLENBQUMsQ0FBQztRQUUzQyxzQkFBc0I7UUFDdEIsTUFBTWQsR0FBR2EsVUFBVSxDQUFDLFlBQVlFLFVBQVUsQ0FBQ2Q7UUFDM0MsTUFBTUQsR0FBR2EsVUFBVSxDQUFDLFNBQVNFLFVBQVUsQ0FBQ047UUFFeENaLFFBQVFDLEdBQUcsQ0FBQztRQUNaLE9BQU9KLHFEQUFZQSxDQUFDc0IsSUFBSSxDQUFDO1lBQ3ZCQyxTQUFTO1lBQ1RDLGVBQWVqQixTQUFTa0IsTUFBTTtZQUM5QkMsWUFBWVgsTUFBTVUsTUFBTTtRQUMxQjtJQUNGLEVBQUUsT0FBT0UsT0FBTztRQUNkeEIsUUFBUXdCLEtBQUssQ0FBQyxtQ0FBbUNBO1FBQ2pELE9BQU8zQixxREFBWUEsQ0FBQ3NCLElBQUksQ0FDdEI7WUFDRUssT0FBTztZQUNQQyxTQUFTRCxNQUFNSixPQUFPO1FBQ3hCLEdBQ0E7WUFBRU0sUUFBUTtRQUFJO0lBRWxCO0FBQ0YiLCJzb3VyY2VzIjpbIi9Vc2Vycy9pc2hpdGFzaW5oYS9Eb2N1bWVudHMvR2l0SHViL2Vjb21tZXJjZS1jbGllbnQvYXBwL2FwaS9pbml0LWRiL3JvdXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiXG5pbXBvcnQgY2xpZW50UHJvbWlzZSBmcm9tIFwiLi4vLi4vLi4vbGliL21vbmdvZGJcIlxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVCgpIHtcbiAgdHJ5IHtcbiAgICBjb25zb2xlLmxvZyhcIkNvbm5lY3RpbmcgdG8gTW9uZ29EQi4uLlwiKVxuICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IGNsaWVudFByb21pc2VcbiAgICBjb25zdCBkYiA9IGNsaWVudC5kYihcImVjb21tZXJjZVwiKVxuXG4gICAgY29uc29sZS5sb2coXCJDb25uZWN0ZWQhIEluaXRpYWxpemluZyBkYXRhLi4uXCIpXG5cbiAgICAvLyBDcmVhdGUgaW5pdGlhbCBwcm9kdWN0c1xuICAgIGNvbnN0IHByb2R1Y3RzID0gW1xuICAgICAge1xuICAgICAgICBuYW1lOiBcIkxhcHRvcFwiLFxuICAgICAgICBwcmljZTogOTk5LFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJHb29kIGxhcHRvcCBmb3Igd29ya1wiLFxuICAgICAgICBpbWFnZTogXCIvcGxhY2Vob2xkZXIuc3ZnP2hlaWdodD0yMDAmd2lkdGg9MjAwJnF1ZXJ5PWxhcHRvcFwiLFxuICAgICAgICBzdG9jazogNSxcbiAgICAgICAgY3JlYXRlZEF0OiBuZXcgRGF0ZSgpLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJQaG9uZVwiLFxuICAgICAgICBwcmljZTogNjk5LFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJMYXRlc3Qgc21hcnRwaG9uZVwiLFxuICAgICAgICBpbWFnZTogXCIvcGxhY2Vob2xkZXIuc3ZnP2hlaWdodD0yMDAmd2lkdGg9MjAwJnF1ZXJ5PXNtYXJ0cGhvbmVcIixcbiAgICAgICAgc3RvY2s6IDEwLFxuICAgICAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKCksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiBcIkhlYWRwaG9uZXNcIixcbiAgICAgICAgcHJpY2U6IDE5OSxcbiAgICAgICAgZGVzY3JpcHRpb246IFwiV2lyZWxlc3MgaGVhZHBob25lc1wiLFxuICAgICAgICBpbWFnZTogXCIvcGxhY2Vob2xkZXIuc3ZnP2hlaWdodD0yMDAmd2lkdGg9MjAwJnF1ZXJ5PWhlYWRwaG9uZXNcIixcbiAgICAgICAgc3RvY2s6IDE1LFxuICAgICAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKCksXG4gICAgICB9LFxuICAgIF1cblxuICAgIC8vIENyZWF0ZSBpbml0aWFsIHVzZXJzXG4gICAgY29uc3QgdXNlcnMgPSBbXG4gICAgICB7XG4gICAgICAgIGVtYWlsOiBcImFkbWluQHRlc3QuY29tXCIsXG4gICAgICAgIHBhc3N3b3JkOiBcImFkbWluXCIsXG4gICAgICAgIG5hbWU6IFwiQWRtaW5cIixcbiAgICAgICAgaXNBZG1pbjogdHJ1ZSxcbiAgICAgICAgY3JlYXRlZEF0OiBuZXcgRGF0ZSgpLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgZW1haWw6IFwidXNlckB0ZXN0LmNvbVwiLFxuICAgICAgICBwYXNzd29yZDogXCJ1c2VyXCIsXG4gICAgICAgIG5hbWU6IFwiVXNlclwiLFxuICAgICAgICBpc0FkbWluOiBmYWxzZSxcbiAgICAgICAgY3JlYXRlZEF0OiBuZXcgRGF0ZSgpLFxuICAgICAgfSxcbiAgICBdXG5cbiAgICAvLyBDbGVhciBleGlzdGluZyBkYXRhXG4gICAgYXdhaXQgZGIuY29sbGVjdGlvbihcInByb2R1Y3RzXCIpLmRlbGV0ZU1hbnkoe30pXG4gICAgYXdhaXQgZGIuY29sbGVjdGlvbihcInVzZXJzXCIpLmRlbGV0ZU1hbnkoe30pXG4gICAgYXdhaXQgZGIuY29sbGVjdGlvbihcInJldmlld3NcIikuZGVsZXRlTWFueSh7fSlcblxuICAgIC8vIEluc2VydCBpbml0aWFsIGRhdGFcbiAgICBhd2FpdCBkYi5jb2xsZWN0aW9uKFwicHJvZHVjdHNcIikuaW5zZXJ0TWFueShwcm9kdWN0cylcbiAgICBhd2FpdCBkYi5jb2xsZWN0aW9uKFwidXNlcnNcIikuaW5zZXJ0TWFueSh1c2VycylcblxuICAgIGNvbnNvbGUubG9nKFwiRGF0YWJhc2UgaW5pdGlhbGl6ZWQgc3VjY2Vzc2Z1bGx5IVwiKVxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7XG4gICAgICBtZXNzYWdlOiBcIkRhdGFiYXNlIGluaXRpYWxpemVkIHN1Y2Nlc3NmdWxseVwiLFxuICAgICAgcHJvZHVjdHNDb3VudDogcHJvZHVjdHMubGVuZ3RoLFxuICAgICAgdXNlcnNDb3VudDogdXNlcnMubGVuZ3RoLFxuICAgIH0pXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkRhdGFiYXNlIGluaXRpYWxpemF0aW9uIGZhaWxlZDpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAge1xuICAgICAgICBlcnJvcjogXCJGYWlsZWQgdG8gaW5pdGlhbGl6ZSBkYXRhYmFzZVwiLFxuICAgICAgICBkZXRhaWxzOiBlcnJvci5tZXNzYWdlLFxuICAgICAgfSxcbiAgICAgIHsgc3RhdHVzOiA1MDAgfSxcbiAgICApXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJjbGllbnRQcm9taXNlIiwiUE9TVCIsImNvbnNvbGUiLCJsb2ciLCJjbGllbnQiLCJkYiIsInByb2R1Y3RzIiwibmFtZSIsInByaWNlIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsInN0b2NrIiwiY3JlYXRlZEF0IiwiRGF0ZSIsInVzZXJzIiwiZW1haWwiLCJwYXNzd29yZCIsImlzQWRtaW4iLCJjb2xsZWN0aW9uIiwiZGVsZXRlTWFueSIsImluc2VydE1hbnkiLCJqc29uIiwibWVzc2FnZSIsInByb2R1Y3RzQ291bnQiLCJsZW5ndGgiLCJ1c2Vyc0NvdW50IiwiZXJyb3IiLCJkZXRhaWxzIiwic3RhdHVzIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/init-db/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/mongodb.ts":
/*!************************!*\
  !*** ./lib/mongodb.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nif (!process.env.MONGODB_URI) {\n    throw new Error(\"Please add your MongoDB URI to environment variables\");\n}\nconst uri = process.env.MONGODB_URI;\nconst options = {\n    serverApi: {\n        version: mongodb__WEBPACK_IMPORTED_MODULE_0__.ServerApiVersion.v1,\n        strict: true,\n        deprecationErrors: true\n    }\n};\nlet client;\nlet clientPromise;\nif (true) {\n    // In development mode, use a global variable so that the value\n    // is preserved across module reloads caused by HMR (Hot Module Replacement).\n    const globalWithMongo = global;\n    if (!globalWithMongo._mongoClientPromise) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n        globalWithMongo._mongoClientPromise = client.connect();\n    }\n    clientPromise = globalWithMongo._mongoClientPromise;\n} else {}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbW9uZ29kYi50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBdUQ7QUFFdkQsSUFBSSxDQUFDRSxRQUFRQyxHQUFHLENBQUNDLFdBQVcsRUFBRTtJQUM1QixNQUFNLElBQUlDLE1BQU07QUFDbEI7QUFFQSxNQUFNQyxNQUFNSixRQUFRQyxHQUFHLENBQUNDLFdBQVc7QUFDbkMsTUFBTUcsVUFBVTtJQUNkQyxXQUFXO1FBQ1RDLFNBQVNSLHFEQUFnQkEsQ0FBQ1MsRUFBRTtRQUM1QkMsUUFBUTtRQUNSQyxtQkFBbUI7SUFDckI7QUFDRjtBQUVBLElBQUlDO0FBQ0osSUFBSUM7QUFFSixJQUFJWixJQUFzQyxFQUFFO0lBQzFDLCtEQUErRDtJQUMvRCw2RUFBNkU7SUFDN0UsTUFBTWEsa0JBQWtCQztJQUl4QixJQUFJLENBQUNELGdCQUFnQkUsbUJBQW1CLEVBQUU7UUFDeENKLFNBQVMsSUFBSWIsZ0RBQVdBLENBQUNNLEtBQUtDO1FBQzlCUSxnQkFBZ0JFLG1CQUFtQixHQUFHSixPQUFPSyxPQUFPO0lBQ3REO0lBQ0FKLGdCQUFnQkMsZ0JBQWdCRSxtQkFBbUI7QUFDckQsT0FBTyxFQUlOO0FBRUQsaUVBQWVILGFBQWFBLEVBQUEiLCJzb3VyY2VzIjpbIi9Vc2Vycy9pc2hpdGFzaW5oYS9Eb2N1bWVudHMvR2l0SHViL2Vjb21tZXJjZS1jbGllbnQvbGliL21vbmdvZGIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQsIFNlcnZlckFwaVZlcnNpb24gfSBmcm9tIFwibW9uZ29kYlwiXG5cbmlmICghcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkpIHtcbiAgdGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIGFkZCB5b3VyIE1vbmdvREIgVVJJIHRvIGVudmlyb25tZW50IHZhcmlhYmxlc1wiKVxufVxuXG5jb25zdCB1cmkgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSVxuY29uc3Qgb3B0aW9ucyA9IHtcbiAgc2VydmVyQXBpOiB7XG4gICAgdmVyc2lvbjogU2VydmVyQXBpVmVyc2lvbi52MSxcbiAgICBzdHJpY3Q6IHRydWUsXG4gICAgZGVwcmVjYXRpb25FcnJvcnM6IHRydWUsXG4gIH0sXG59XG5cbmxldCBjbGllbnQ6IE1vbmdvQ2xpZW50XG5sZXQgY2xpZW50UHJvbWlzZTogUHJvbWlzZTxNb25nb0NsaWVudD5cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpIHtcbiAgLy8gSW4gZGV2ZWxvcG1lbnQgbW9kZSwgdXNlIGEgZ2xvYmFsIHZhcmlhYmxlIHNvIHRoYXQgdGhlIHZhbHVlXG4gIC8vIGlzIHByZXNlcnZlZCBhY3Jvc3MgbW9kdWxlIHJlbG9hZHMgY2F1c2VkIGJ5IEhNUiAoSG90IE1vZHVsZSBSZXBsYWNlbWVudCkuXG4gIGNvbnN0IGdsb2JhbFdpdGhNb25nbyA9IGdsb2JhbCBhcyB0eXBlb2YgZ2xvYmFsVGhpcyAmIHtcbiAgICBfbW9uZ29DbGllbnRQcm9taXNlPzogUHJvbWlzZTxNb25nb0NsaWVudD5cbiAgfVxuXG4gIGlmICghZ2xvYmFsV2l0aE1vbmdvLl9tb25nb0NsaWVudFByb21pc2UpIHtcbiAgICBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCBvcHRpb25zKVxuICAgIGdsb2JhbFdpdGhNb25nby5fbW9uZ29DbGllbnRQcm9taXNlID0gY2xpZW50LmNvbm5lY3QoKVxuICB9XG4gIGNsaWVudFByb21pc2UgPSBnbG9iYWxXaXRoTW9uZ28uX21vbmdvQ2xpZW50UHJvbWlzZVxufSBlbHNlIHtcbiAgLy8gSW4gcHJvZHVjdGlvbiBtb2RlLCBpdCdzIGJlc3QgdG8gbm90IHVzZSBhIGdsb2JhbCB2YXJpYWJsZS5cbiAgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVyaSwgb3B0aW9ucylcbiAgY2xpZW50UHJvbWlzZSA9IGNsaWVudC5jb25uZWN0KClcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xpZW50UHJvbWlzZVxuIl0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwiU2VydmVyQXBpVmVyc2lvbiIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSSSIsIkVycm9yIiwidXJpIiwib3B0aW9ucyIsInNlcnZlckFwaSIsInZlcnNpb24iLCJ2MSIsInN0cmljdCIsImRlcHJlY2F0aW9uRXJyb3JzIiwiY2xpZW50IiwiY2xpZW50UHJvbWlzZSIsImdsb2JhbFdpdGhNb25nbyIsImdsb2JhbCIsIl9tb25nb0NsaWVudFByb21pc2UiLCJjb25uZWN0Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/mongodb.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Finit-db%2Froute&page=%2Fapi%2Finit-db%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Finit-db%2Froute.ts&appDir=%2FUsers%2Fishitasinha%2FDocuments%2FGitHub%2Fecommerce-client%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fishitasinha%2FDocuments%2FGitHub%2Fecommerce-client&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Finit-db%2Froute&page=%2Fapi%2Finit-db%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Finit-db%2Froute.ts&appDir=%2FUsers%2Fishitasinha%2FDocuments%2FGitHub%2Fecommerce-client%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fishitasinha%2FDocuments%2FGitHub%2Fecommerce-client&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_ishitasinha_Documents_GitHub_ecommerce_client_app_api_init_db_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/init-db/route.ts */ \"(rsc)/./app/api/init-db/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/init-db/route\",\n        pathname: \"/api/init-db\",\n        filename: \"route\",\n        bundlePath: \"app/api/init-db/route\"\n    },\n    resolvedPagePath: \"/Users/ishitasinha/Documents/GitHub/ecommerce-client/app/api/init-db/route.ts\",\n    nextConfigOutput,\n    userland: _Users_ishitasinha_Documents_GitHub_ecommerce_client_app_api_init_db_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZpbml0LWRiJTJGcm91dGUmcGFnZT0lMkZhcGklMkZpbml0LWRiJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGaW5pdC1kYiUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRmlzaGl0YXNpbmhhJTJGRG9jdW1lbnRzJTJGR2l0SHViJTJGZWNvbW1lcmNlLWNsaWVudCUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZpc2hpdGFzaW5oYSUyRkRvY3VtZW50cyUyRkdpdEh1YiUyRmVjb21tZXJjZS1jbGllbnQmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQzZCO0FBQzFHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvaXNoaXRhc2luaGEvRG9jdW1lbnRzL0dpdEh1Yi9lY29tbWVyY2UtY2xpZW50L2FwcC9hcGkvaW5pdC1kYi9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvaW5pdC1kYi9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2luaXQtZGJcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2luaXQtZGIvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMvaXNoaXRhc2luaGEvRG9jdW1lbnRzL0dpdEh1Yi9lY29tbWVyY2UtY2xpZW50L2FwcC9hcGkvaW5pdC1kYi9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Finit-db%2Froute&page=%2Fapi%2Finit-db%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Finit-db%2Froute.ts&appDir=%2FUsers%2Fishitasinha%2FDocuments%2FGitHub%2Fecommerce-client%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fishitasinha%2FDocuments%2FGitHub%2Fecommerce-client&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongodb");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Finit-db%2Froute&page=%2Fapi%2Finit-db%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Finit-db%2Froute.ts&appDir=%2FUsers%2Fishitasinha%2FDocuments%2FGitHub%2Fecommerce-client%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fishitasinha%2FDocuments%2FGitHub%2Fecommerce-client&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();