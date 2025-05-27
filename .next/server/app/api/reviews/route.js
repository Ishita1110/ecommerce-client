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
exports.id = "app/api/reviews/route";
exports.ids = ["app/api/reviews/route"];
exports.modules = {

/***/ "(rsc)/./app/api/reviews/route.ts":
/*!**********************************!*\
  !*** ./app/api/reviews/route.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/mongodb */ \"(rsc)/./lib/mongodb.ts\");\n\n\nasync function GET(request) {\n    try {\n        const client = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n        const db = client.db(\"ecommerce\");\n        const { searchParams } = new URL(request.url);\n        const productId = searchParams.get(\"productId\");\n        const query = productId ? {\n            productId\n        } : {};\n        const reviews = await db.collection(\"reviews\").find(query).toArray();\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(reviews);\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Failed to fetch reviews\"\n        }, {\n            status: 500\n        });\n    }\n}\nasync function POST(request) {\n    try {\n        const client = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n        const db = client.db(\"ecommerce\");\n        const body = await request.json();\n        // Check if user already reviewed this product\n        const existingReview = await db.collection(\"reviews\").findOne({\n            productId: body.productId,\n            userId: body.userId\n        });\n        if (existingReview) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"You already reviewed this product\"\n            }, {\n                status: 400\n            });\n        }\n        const result = await db.collection(\"reviews\").insertOne({\n            ...body,\n            createdAt: new Date()\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            id: result.insertedId,\n            ...body\n        });\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Failed to create review\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3Jldmlld3Mvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEwQztBQUNNO0FBRXpDLGVBQWVFLElBQUlDLE9BQWdCO0lBQ3hDLElBQUk7UUFDRixNQUFNQyxTQUFTLE1BQU1ILG9EQUFhQTtRQUNsQyxNQUFNSSxLQUFLRCxPQUFPQyxFQUFFLENBQUM7UUFDckIsTUFBTSxFQUFFQyxZQUFZLEVBQUUsR0FBRyxJQUFJQyxJQUFJSixRQUFRSyxHQUFHO1FBQzVDLE1BQU1DLFlBQVlILGFBQWFJLEdBQUcsQ0FBQztRQUVuQyxNQUFNQyxRQUFRRixZQUFZO1lBQUVBO1FBQVUsSUFBSSxDQUFDO1FBQzNDLE1BQU1HLFVBQVUsTUFBTVAsR0FBR1EsVUFBVSxDQUFDLFdBQVdDLElBQUksQ0FBQ0gsT0FBT0ksT0FBTztRQUVsRSxPQUFPZixxREFBWUEsQ0FBQ2dCLElBQUksQ0FBQ0o7SUFDM0IsRUFBRSxPQUFPSyxPQUFPO1FBQ2QsT0FBT2pCLHFEQUFZQSxDQUFDZ0IsSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBMEIsR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFDL0U7QUFDRjtBQUVPLGVBQWVDLEtBQUtoQixPQUFnQjtJQUN6QyxJQUFJO1FBQ0YsTUFBTUMsU0FBUyxNQUFNSCxvREFBYUE7UUFDbEMsTUFBTUksS0FBS0QsT0FBT0MsRUFBRSxDQUFDO1FBQ3JCLE1BQU1lLE9BQU8sTUFBTWpCLFFBQVFhLElBQUk7UUFFL0IsOENBQThDO1FBQzlDLE1BQU1LLGlCQUFpQixNQUFNaEIsR0FBR1EsVUFBVSxDQUFDLFdBQVdTLE9BQU8sQ0FBQztZQUM1RGIsV0FBV1csS0FBS1gsU0FBUztZQUN6QmMsUUFBUUgsS0FBS0csTUFBTTtRQUNyQjtRQUVBLElBQUlGLGdCQUFnQjtZQUNsQixPQUFPckIscURBQVlBLENBQUNnQixJQUFJLENBQUM7Z0JBQUVDLE9BQU87WUFBb0MsR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQ3pGO1FBRUEsTUFBTU0sU0FBUyxNQUFNbkIsR0FBR1EsVUFBVSxDQUFDLFdBQVdZLFNBQVMsQ0FBQztZQUN0RCxHQUFHTCxJQUFJO1lBQ1BNLFdBQVcsSUFBSUM7UUFDakI7UUFFQSxPQUFPM0IscURBQVlBLENBQUNnQixJQUFJLENBQUM7WUFBRVksSUFBSUosT0FBT0ssVUFBVTtZQUFFLEdBQUdULElBQUk7UUFBQztJQUM1RCxFQUFFLE9BQU9ILE9BQU87UUFDZCxPQUFPakIscURBQVlBLENBQUNnQixJQUFJLENBQUM7WUFBRUMsT0FBTztRQUEwQixHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUMvRTtBQUNGIiwic291cmNlcyI6WyIvVXNlcnMvaXNoaXRhc2luaGEvRG9jdW1lbnRzL0dpdEh1Yi9lY29tbWVyY2UtY2xpZW50L2FwcC9hcGkvcmV2aWV3cy9yb3V0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIlxuaW1wb3J0IGNsaWVudFByb21pc2UgZnJvbSBcIi4uLy4uLy4uL2xpYi9tb25nb2RiXCJcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVChyZXF1ZXN0OiBSZXF1ZXN0KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgY2xpZW50UHJvbWlzZVxuICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKFwiZWNvbW1lcmNlXCIpXG4gICAgY29uc3QgeyBzZWFyY2hQYXJhbXMgfSA9IG5ldyBVUkwocmVxdWVzdC51cmwpXG4gICAgY29uc3QgcHJvZHVjdElkID0gc2VhcmNoUGFyYW1zLmdldChcInByb2R1Y3RJZFwiKVxuXG4gICAgY29uc3QgcXVlcnkgPSBwcm9kdWN0SWQgPyB7IHByb2R1Y3RJZCB9IDoge31cbiAgICBjb25zdCByZXZpZXdzID0gYXdhaXQgZGIuY29sbGVjdGlvbihcInJldmlld3NcIikuZmluZChxdWVyeSkudG9BcnJheSgpXG5cbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24ocmV2aWV3cylcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogXCJGYWlsZWQgdG8gZmV0Y2ggcmV2aWV3c1wiIH0sIHsgc3RhdHVzOiA1MDAgfSlcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXF1ZXN0OiBSZXF1ZXN0KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgY2xpZW50UHJvbWlzZVxuICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKFwiZWNvbW1lcmNlXCIpXG4gICAgY29uc3QgYm9keSA9IGF3YWl0IHJlcXVlc3QuanNvbigpXG5cbiAgICAvLyBDaGVjayBpZiB1c2VyIGFscmVhZHkgcmV2aWV3ZWQgdGhpcyBwcm9kdWN0XG4gICAgY29uc3QgZXhpc3RpbmdSZXZpZXcgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKFwicmV2aWV3c1wiKS5maW5kT25lKHtcbiAgICAgIHByb2R1Y3RJZDogYm9keS5wcm9kdWN0SWQsXG4gICAgICB1c2VySWQ6IGJvZHkudXNlcklkLFxuICAgIH0pXG5cbiAgICBpZiAoZXhpc3RpbmdSZXZpZXcpIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBcIllvdSBhbHJlYWR5IHJldmlld2VkIHRoaXMgcHJvZHVjdFwiIH0sIHsgc3RhdHVzOiA0MDAgfSlcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKFwicmV2aWV3c1wiKS5pbnNlcnRPbmUoe1xuICAgICAgLi4uYm9keSxcbiAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoKSxcbiAgICB9KVxuXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgaWQ6IHJlc3VsdC5pbnNlcnRlZElkLCAuLi5ib2R5IH0pXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiRmFpbGVkIHRvIGNyZWF0ZSByZXZpZXdcIiB9LCB7IHN0YXR1czogNTAwIH0pXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJjbGllbnRQcm9taXNlIiwiR0VUIiwicmVxdWVzdCIsImNsaWVudCIsImRiIiwic2VhcmNoUGFyYW1zIiwiVVJMIiwidXJsIiwicHJvZHVjdElkIiwiZ2V0IiwicXVlcnkiLCJyZXZpZXdzIiwiY29sbGVjdGlvbiIsImZpbmQiLCJ0b0FycmF5IiwianNvbiIsImVycm9yIiwic3RhdHVzIiwiUE9TVCIsImJvZHkiLCJleGlzdGluZ1JldmlldyIsImZpbmRPbmUiLCJ1c2VySWQiLCJyZXN1bHQiLCJpbnNlcnRPbmUiLCJjcmVhdGVkQXQiLCJEYXRlIiwiaWQiLCJpbnNlcnRlZElkIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/reviews/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/mongodb.ts":
/*!************************!*\
  !*** ./lib/mongodb.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nif (!process.env.MONGODB_URI) {\n    throw new Error(\"Please add your MongoDB URI to environment variables\");\n}\nconst uri = process.env.MONGODB_URI;\nconst options = {\n    serverApi: {\n        version: mongodb__WEBPACK_IMPORTED_MODULE_0__.ServerApiVersion.v1,\n        strict: true,\n        deprecationErrors: true\n    }\n};\nlet client;\nlet clientPromise;\nif (true) {\n    // In development mode, use a global variable so that the value\n    // is preserved across module reloads caused by HMR (Hot Module Replacement).\n    const globalWithMongo = global;\n    if (!globalWithMongo._mongoClientPromise) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n        globalWithMongo._mongoClientPromise = client.connect();\n    }\n    clientPromise = globalWithMongo._mongoClientPromise;\n} else {}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvbW9uZ29kYi50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBdUQ7QUFFdkQsSUFBSSxDQUFDRSxRQUFRQyxHQUFHLENBQUNDLFdBQVcsRUFBRTtJQUM1QixNQUFNLElBQUlDLE1BQU07QUFDbEI7QUFFQSxNQUFNQyxNQUFNSixRQUFRQyxHQUFHLENBQUNDLFdBQVc7QUFDbkMsTUFBTUcsVUFBVTtJQUNkQyxXQUFXO1FBQ1RDLFNBQVNSLHFEQUFnQkEsQ0FBQ1MsRUFBRTtRQUM1QkMsUUFBUTtRQUNSQyxtQkFBbUI7SUFDckI7QUFDRjtBQUVBLElBQUlDO0FBQ0osSUFBSUM7QUFFSixJQUFJWixJQUFzQyxFQUFFO0lBQzFDLCtEQUErRDtJQUMvRCw2RUFBNkU7SUFDN0UsTUFBTWEsa0JBQWtCQztJQUl4QixJQUFJLENBQUNELGdCQUFnQkUsbUJBQW1CLEVBQUU7UUFDeENKLFNBQVMsSUFBSWIsZ0RBQVdBLENBQUNNLEtBQUtDO1FBQzlCUSxnQkFBZ0JFLG1CQUFtQixHQUFHSixPQUFPSyxPQUFPO0lBQ3REO0lBQ0FKLGdCQUFnQkMsZ0JBQWdCRSxtQkFBbUI7QUFDckQsT0FBTyxFQUlOO0FBRUQsaUVBQWVILGFBQWFBLEVBQUEiLCJzb3VyY2VzIjpbIi9Vc2Vycy9pc2hpdGFzaW5oYS9Eb2N1bWVudHMvR2l0SHViL2Vjb21tZXJjZS1jbGllbnQvbGliL21vbmdvZGIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQsIFNlcnZlckFwaVZlcnNpb24gfSBmcm9tIFwibW9uZ29kYlwiXG5cbmlmICghcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkpIHtcbiAgdGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIGFkZCB5b3VyIE1vbmdvREIgVVJJIHRvIGVudmlyb25tZW50IHZhcmlhYmxlc1wiKVxufVxuXG5jb25zdCB1cmkgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSVxuY29uc3Qgb3B0aW9ucyA9IHtcbiAgc2VydmVyQXBpOiB7XG4gICAgdmVyc2lvbjogU2VydmVyQXBpVmVyc2lvbi52MSxcbiAgICBzdHJpY3Q6IHRydWUsXG4gICAgZGVwcmVjYXRpb25FcnJvcnM6IHRydWUsXG4gIH0sXG59XG5cbmxldCBjbGllbnQ6IE1vbmdvQ2xpZW50XG5sZXQgY2xpZW50UHJvbWlzZTogUHJvbWlzZTxNb25nb0NsaWVudD5cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpIHtcbiAgLy8gSW4gZGV2ZWxvcG1lbnQgbW9kZSwgdXNlIGEgZ2xvYmFsIHZhcmlhYmxlIHNvIHRoYXQgdGhlIHZhbHVlXG4gIC8vIGlzIHByZXNlcnZlZCBhY3Jvc3MgbW9kdWxlIHJlbG9hZHMgY2F1c2VkIGJ5IEhNUiAoSG90IE1vZHVsZSBSZXBsYWNlbWVudCkuXG4gIGNvbnN0IGdsb2JhbFdpdGhNb25nbyA9IGdsb2JhbCBhcyB0eXBlb2YgZ2xvYmFsVGhpcyAmIHtcbiAgICBfbW9uZ29DbGllbnRQcm9taXNlPzogUHJvbWlzZTxNb25nb0NsaWVudD5cbiAgfVxuXG4gIGlmICghZ2xvYmFsV2l0aE1vbmdvLl9tb25nb0NsaWVudFByb21pc2UpIHtcbiAgICBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCBvcHRpb25zKVxuICAgIGdsb2JhbFdpdGhNb25nby5fbW9uZ29DbGllbnRQcm9taXNlID0gY2xpZW50LmNvbm5lY3QoKVxuICB9XG4gIGNsaWVudFByb21pc2UgPSBnbG9iYWxXaXRoTW9uZ28uX21vbmdvQ2xpZW50UHJvbWlzZVxufSBlbHNlIHtcbiAgLy8gSW4gcHJvZHVjdGlvbiBtb2RlLCBpdCdzIGJlc3QgdG8gbm90IHVzZSBhIGdsb2JhbCB2YXJpYWJsZS5cbiAgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVyaSwgb3B0aW9ucylcbiAgY2xpZW50UHJvbWlzZSA9IGNsaWVudC5jb25uZWN0KClcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xpZW50UHJvbWlzZVxuIl0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwiU2VydmVyQXBpVmVyc2lvbiIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSSSIsIkVycm9yIiwidXJpIiwib3B0aW9ucyIsInNlcnZlckFwaSIsInZlcnNpb24iLCJ2MSIsInN0cmljdCIsImRlcHJlY2F0aW9uRXJyb3JzIiwiY2xpZW50IiwiY2xpZW50UHJvbWlzZSIsImdsb2JhbFdpdGhNb25nbyIsImdsb2JhbCIsIl9tb25nb0NsaWVudFByb21pc2UiLCJjb25uZWN0Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/mongodb.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Freviews%2Froute&page=%2Fapi%2Freviews%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Freviews%2Froute.ts&appDir=%2FUsers%2Fishitasinha%2FDocuments%2FGitHub%2Fecommerce-client%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fishitasinha%2FDocuments%2FGitHub%2Fecommerce-client&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Freviews%2Froute&page=%2Fapi%2Freviews%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Freviews%2Froute.ts&appDir=%2FUsers%2Fishitasinha%2FDocuments%2FGitHub%2Fecommerce-client%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fishitasinha%2FDocuments%2FGitHub%2Fecommerce-client&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_ishitasinha_Documents_GitHub_ecommerce_client_app_api_reviews_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/reviews/route.ts */ \"(rsc)/./app/api/reviews/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/reviews/route\",\n        pathname: \"/api/reviews\",\n        filename: \"route\",\n        bundlePath: \"app/api/reviews/route\"\n    },\n    resolvedPagePath: \"/Users/ishitasinha/Documents/GitHub/ecommerce-client/app/api/reviews/route.ts\",\n    nextConfigOutput,\n    userland: _Users_ishitasinha_Documents_GitHub_ecommerce_client_app_api_reviews_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZyZXZpZXdzJTJGcm91dGUmcGFnZT0lMkZhcGklMkZyZXZpZXdzJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGcmV2aWV3cyUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRmlzaGl0YXNpbmhhJTJGRG9jdW1lbnRzJTJGR2l0SHViJTJGZWNvbW1lcmNlLWNsaWVudCUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZpc2hpdGFzaW5oYSUyRkRvY3VtZW50cyUyRkdpdEh1YiUyRmVjb21tZXJjZS1jbGllbnQmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQzZCO0FBQzFHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvaXNoaXRhc2luaGEvRG9jdW1lbnRzL0dpdEh1Yi9lY29tbWVyY2UtY2xpZW50L2FwcC9hcGkvcmV2aWV3cy9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvcmV2aWV3cy9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3Jldmlld3NcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3Jldmlld3Mvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMvaXNoaXRhc2luaGEvRG9jdW1lbnRzL0dpdEh1Yi9lY29tbWVyY2UtY2xpZW50L2FwcC9hcGkvcmV2aWV3cy9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Freviews%2Froute&page=%2Fapi%2Freviews%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Freviews%2Froute.ts&appDir=%2FUsers%2Fishitasinha%2FDocuments%2FGitHub%2Fecommerce-client%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fishitasinha%2FDocuments%2FGitHub%2Fecommerce-client&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Freviews%2Froute&page=%2Fapi%2Freviews%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Freviews%2Froute.ts&appDir=%2FUsers%2Fishitasinha%2FDocuments%2FGitHub%2Fecommerce-client%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fishitasinha%2FDocuments%2FGitHub%2Fecommerce-client&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();