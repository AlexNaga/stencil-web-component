(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1244:function(module){module.exports=JSON.parse('{"name":"storybook-stencil","version":"0.0.1","description":"Stencil Component Starter","main":"dist/index.js","module":"dist/index.mjs","es2015":"dist/esm/index.mjs","es2017":"dist/esm/index.mjs","types":"dist/types/index.d.ts","collection":"dist/collection/collection-manifest.json","collection:main":"dist/collection/index.js","unpkg":"dist/web-components/web-components-stencil.js","files":["dist/","dist/loader/"],"scripts":{"start":"npm-run-all --parallel start:stencil start:storybook","start:stencil":"cross-env STENCIL_ENV=dev stencil build --dev --watch --serve --docs","start:storybook":"start-storybook -p 6007 -s ./stencil-utilities/public-assets","build:stencil":"cross-env STENCIL_ENV=prod stencil build --docs","build:storybook":"build-storybook","build":"npm-run-all clean build:stencil build:storybook post:build","clean":"del-cli dist storybook-static","post:build":"node ./stencil-utilities/post-build.js","prestart":"npm run build:stencil","test.watch":"cross-env STENCIL_ENV=dev stencil test --spec --e2e --watchAll","test":"cross-env STENCIL_ENV=dev stencil test --spec --e2e"},"devDependencies":{"@babel/core":"^7.10.2","@stencil/core":"^1.14.0","@stencil/sass":"^1.3.1","@storybook/addon-a11y":"^5.3.19","@storybook/addon-actions":"^5.3.19","@storybook/addon-centered":"^5.3.19","@storybook/addon-docs":"^5.3.19","@storybook/addon-knobs":"^5.3.19","@storybook/addon-links":"^5.3.19","@storybook/addon-notes":"^5.3.19","@storybook/addons":"^5.3.19","@storybook/html":"^5.3.19","@types/node":"^14.0.6","babel-loader":"^8.1.0","cross-env":"^7.0.2","css-loader":"^3.5.3","del-cli":"^3.0.1","eslint-plugin-react":"^7.20.0","file-loader":"^6.0.0","lodash.kebabcase":"^4.1.1","npm-run-all":"^4.1.5","react":"^16.13.1","sass-loader":"^8.0.2"},"license":"MIT","dependencies":{"@types/jest":"^25.2.3","node-readfiles":"^0.2.0","promisify-child-process":"^4.1.1","storybook":"^5.3.19","svgo":"^1.3.2"},"stencil":{"protocol":"http","host":"localhost","port":3333,"buildDir":"build"}}')},1255:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_html__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(443);module._StorybookPreserveDecorators=!0,Object(_storybook_html__WEBPACK_IMPORTED_MODULE_0__.configure)([__webpack_require__(1282)],module)}.call(this,__webpack_require__(1256)(module))},1282:function(module,exports,__webpack_require__){var map={"./components/buttons/tiqqe-button/tiqqe-button.stories.js":1283};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1282},1283:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"regular",(function(){return regular}));__webpack_require__(20);var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(142),_storybook_addon_centered_html__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(444),_storybook_addon_centered_html__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_storybook_addon_centered_html__WEBPACK_IMPORTED_MODULE_2__),addSourceDecorator=(__webpack_require__(427).withSource,__webpack_require__(427).addSource);__webpack_exports__.default={parameters:{storySource:{source:"import { select, text } from '@storybook/addon-knobs';\nimport centeredContent from '@storybook/addon-centered/html';\n\nexport default {\n  title: 'buttons|TIQQE button',\n  decorators: [centeredContent],\n};\n\nconst buttonColor = {\n  primary: 'primary',\n  secondary: 'secondary',\n  danger: 'danger',\n  success: 'success'\n};\n\nexport const regular = () => {\n  // Storybook Knobs ------------------------------------------//\n  const color = select('color', buttonColor, buttonColor.primary);\n  const label = text('button text', 'Button');\n  // --------------------------------------------------------- //\n\n  return `\n    <tiqqe-button\n      color=${color}\n      label=${label}\n    />\n  `;\n};\n",locationsMap:{"buttons-tiqqe-button--regular":{startLoc:{col:23,line:16},endLoc:{col:1,line:28},startBody:{col:23,line:16},endBody:{col:1,line:28}}}}},title:"buttons|TIQQE button",decorators:[_storybook_addon_centered_html__WEBPACK_IMPORTED_MODULE_2___default.a]};var buttonColor={primary:"primary",secondary:"secondary",danger:"danger",success:"success"},regular=addSourceDecorator((function(){var color=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("color",buttonColor,buttonColor.primary),label=Object(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("button text","Button");return"\n    <tiqqe-button\n      color=".concat(color,"\n      label=").concat(label,"\n    />\n  ")}),{__STORY__:"import { select, text } from '@storybook/addon-knobs';\nimport centeredContent from '@storybook/addon-centered/html';\n\nexport default {\n  title: 'buttons|TIQQE button',\n  decorators: [centeredContent],\n};\n\nconst buttonColor = {\n  primary: 'primary',\n  secondary: 'secondary',\n  danger: 'danger',\n  success: 'success'\n};\n\nexport const regular = () => {\n  // Storybook Knobs ------------------------------------------//\n  const color = select('color', buttonColor, buttonColor.primary);\n  const label = text('button text', 'Button');\n  // --------------------------------------------------------- //\n\n  return `\n    <tiqqe-button\n      color=${color}\n      label=${label}\n    />\n  `;\n};\n",__ADDS_MAP__:{"buttons-tiqqe-button--regular":{startLoc:{col:23,line:16},endLoc:{col:1,line:28},startBody:{col:23,line:16},endBody:{col:1,line:28}}},__MAIN_FILE_LOCATION__:"/tiqqe-button.stories.js",__MODULE_DEPENDENCIES__:[],__LOCAL_DEPENDENCIES__:{},__SOURCE_PREFIX__:"/home/runner/work/storybook-stencil-web-components/storybook-stencil-web-components/src/components/buttons/tiqqe-button",__IDS_TO_FRAMEWORKS__:{}})},1291:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(95),__webpack_require__(96),__webpack_require__(1),__webpack_require__(20),__webpack_require__(47),__webpack_require__(37),__webpack_require__(15),__webpack_require__(56),__webpack_require__(42),__webpack_require__(1242),__webpack_require__(1243),__webpack_require__(5),__webpack_require__(39),__webpack_require__(11),__webpack_require__(29),__webpack_require__(16),__webpack_require__(13),__webpack_require__(23),__webpack_require__(17),__webpack_require__(106),__webpack_require__(21);var global_window=__webpack_require__(18),public_api=__webpack_require__(58);function _typeof(obj){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}function isObject(val){return null!==val&&"object"===_typeof(val)}var getOrCreateElement=function(id,src){var elementOnDom=global_window.document.getElementById(id);if(elementOnDom)return elementOnDom;var element=null;return src.match(/(.js)$/gi)&&(element=global_window.document.createElement("script"),src.match(/(.esm.js)$/gi)?element.setAttribute("type","module"):element.setAttribute("nomodule",""),element.src=src),src.match(/(.css)$/gi)&&((element=global_window.document.createElement("link")).rel="stylesheet",element.href=src),element?(element.setAttribute("id",id),global_window.document.head.appendChild(element)):console.warn("Could not add asset '".concat(id,"': '").concat(src,"'")),global_window.document.getElementById(id)},addon_assets=Object(public_api.makeDecorator)({name:"withAssets",parameterName:"assets",skipIfNoParametersOrOptions:!0,wrapper:function wrapper(getStory,context,_ref){var options=_ref.options,parameters=_ref.parameters;return options&&isObject(options.assets)&&Object.keys(options.assets).forEach((function(k){getOrCreateElement(k,options.assets[k])})),parameters&&isObject(parameters.assets)&&Object.keys(parameters.assets).forEach((function(k){getOrCreateElement(k,parameters.assets[k])})),getStory(context)}}),lodash_kebabcase=__webpack_require__(441),lodash_kebabcase_default=__webpack_require__.n(lodash_kebabcase);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var source,i=1;i<arguments.length;i++)source=null!=arguments[i]?arguments[i]:{},i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}));return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var config,_require=__webpack_require__(1244),_require$name=_require.name,stencil_name=void 0===_require$name?"my-component":_require$name,stencil=_require.stencil,_stencil$buildDir=(stencil.host,stencil.port,stencil.protocol,stencil.buildDir),buildDir=void 0===_stencil$buildDir?"build":_stencil$buildDir,normalizedPkgName=lodash_kebabcase_default()(stencil_name),dist=__webpack_require__(65),addon_knobs_dist=__webpack_require__(142),addon_a11y_dist=__webpack_require__(442);Object(dist.addDecorator)((config={},addon_assets({assets:_objectSpread(_objectSpread({},{"components-css":"/webcomponents/".concat(buildDir,"/").concat(normalizedPkgName,".css"),"component-js":"/webcomponents/".concat(buildDir,"/").concat(normalizedPkgName,".js"),"component-js-module":"/webcomponents/".concat(buildDir,"/").concat(normalizedPkgName,".esm.js")}),config)}))),Object(dist.addDecorator)(addon_knobs_dist.withKnobs),Object(dist.addDecorator)(addon_a11y_dist.withA11y),Object(dist.addParameters)({options:{storySort:function storySort(a){return a[0].includes("docs-")?a[0].includes("intro-")?-1:0:1}},docs:{extractComponentDescription:function extractComponentDescription(component,_ref){var notes=_ref.notes;return notes?"string"==typeof notes?notes:notes.markdown||notes.text:null}},viewport:{viewports:{name:"Responsive",styles:{width:"100%",height:"100%"},type:"desktop"}}})},445:function(module,exports,__webpack_require__){__webpack_require__(446),__webpack_require__(588),__webpack_require__(589),__webpack_require__(1291),module.exports=__webpack_require__(1255)},508:function(module,exports){}},[[445,1,2]]]);
//# sourceMappingURL=main.da218f50165d944dd12a.bundle.js.map