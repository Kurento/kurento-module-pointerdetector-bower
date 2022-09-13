require=(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/* Autogenerated with Kurento Idl */

/*
 * (C) Copyright 2013-2015 Kurento (http://kurento.org/)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var inherits = require('inherits');

var kurentoClient = require('kurento-client');

var disguise = kurentoClient.disguise;

var checkType      = kurentoClient.checkType;
var ChecktypeError = checkType.ChecktypeError;


var Transaction = kurentoClient.TransactionsManager.Transaction;

var Filter = kurentoClient.register.abstracts.Filter;


function noop(error, result) {
  if (error) console.trace(error);

  return result
};


/**
 * Builder for the :rom:cls:`PointerDetector`.
 *
 * @classdesc
 *  This type of {@link Filter} detects UI pointers in a video feed.
 *
 * @extends module:core/abstracts.Filter
 *
 * @constructor module:pointerdetector.PointerDetectorFilter
 *
 * @fires {@link module:pointerdetector#event:WindowIn WindowIn}
 * @fires {@link module:pointerdetector#event:WindowOut WindowOut}
 */
function PointerDetectorFilter(){
  PointerDetectorFilter.super_.call(this);
};
inherits(PointerDetectorFilter, Filter);


//
// Public methods
//

/**
 *  Adds a new detection window for the filter to detect pointers entering or 
 *  exiting the window
 *
 * @alias module:pointerdetector.PointerDetectorFilter.addWindow
 *
 * @param {module:pointerdetector/complexTypes.PointerDetectorWindowMediaParam} window
 *  The window to be added
 *
 * @param {module:pointerdetector.PointerDetectorFilter~addWindowCallback} [callback]
 *
 * @return {external:Promise}
 */
PointerDetectorFilter.prototype.addWindow = function(window, callback){
  var transaction = (arguments[0] instanceof Transaction)
                  ? Array.prototype.shift.apply(arguments)
                  : undefined;

  //  
  // checkType('PointerDetectorWindowMediaParam', 'window', window, {required: true});
  //  

  var params = {
    window: window
  };

  callback = (callback || noop).bind(this)

  return disguise(this._invoke(transaction, 'addWindow', params, callback), this)
};
/**
 * @callback module:pointerdetector.PointerDetectorFilter~addWindowCallback
 * @param {external:Error} error
 */

/**
 * Removes all pointer detector windows
 *
 * @alias module:pointerdetector.PointerDetectorFilter.clearWindows
 *
 * @param {module:pointerdetector.PointerDetectorFilter~clearWindowsCallback} [callback]
 *
 * @return {external:Promise}
 */
PointerDetectorFilter.prototype.clearWindows = function(callback){
  var transaction = (arguments[0] instanceof Transaction)
                  ? Array.prototype.shift.apply(arguments)
                  : undefined;

  var usePromise = false;
  
  if (callback == undefined) {
    usePromise = true;
  }
  
  if(!arguments.length) callback = undefined;

  callback = (callback || noop).bind(this)

  return disguise(this._invoke(transaction, 'clearWindows', callback), this)
};
/**
 * @callback module:pointerdetector.PointerDetectorFilter~clearWindowsCallback
 * @param {external:Error} error
 */

/**
 * Removes a window from the list to be monitored
 *
 * @alias module:pointerdetector.PointerDetectorFilter.removeWindow
 *
 * @param {external:String} windowId
 *  the id of the window to be removed
 *
 * @param {module:pointerdetector.PointerDetectorFilter~removeWindowCallback} [callback]
 *
 * @return {external:Promise}
 */
PointerDetectorFilter.prototype.removeWindow = function(windowId, callback){
  var transaction = (arguments[0] instanceof Transaction)
                  ? Array.prototype.shift.apply(arguments)
                  : undefined;

  //  
  // checkType('String', 'windowId', windowId, {required: true});
  //  

  var params = {
    windowId: windowId
  };

  callback = (callback || noop).bind(this)

  return disguise(this._invoke(transaction, 'removeWindow', params, callback), this)
};
/**
 * @callback module:pointerdetector.PointerDetectorFilter~removeWindowCallback
 * @param {external:Error} error
 */

/**
 * This method allows to calibrate the tracking color.
 * The new tracking color will be the color of the object in the 
 * colorCalibrationRegion.
 *
 * @alias module:pointerdetector.PointerDetectorFilter.trackColorFromCalibrationRegion
 *
 * @param {module:pointerdetector.PointerDetectorFilter~trackColorFromCalibrationRegionCallback} [callback]
 *
 * @return {external:Promise}
 */
PointerDetectorFilter.prototype.trackColorFromCalibrationRegion = function(callback){
  var transaction = (arguments[0] instanceof Transaction)
                  ? Array.prototype.shift.apply(arguments)
                  : undefined;

  var usePromise = false;
  
  if (callback == undefined) {
    usePromise = true;
  }
  
  if(!arguments.length) callback = undefined;

  callback = (callback || noop).bind(this)

  return disguise(this._invoke(transaction, 'trackColorFromCalibrationRegion', callback), this)
};
/**
 * @callback module:pointerdetector.PointerDetectorFilter~trackColorFromCalibrationRegionCallback
 * @param {external:Error} error
 */


/**
 * @alias module:pointerdetector.PointerDetectorFilter.constructorParams
 *
 * @property {module:pointerdetector/complexTypes.WindowParam} calibrationRegion
 *  region to calibrate the filter
 *
 * @property {module:core.MediaPipeline} mediaPipeline
 *  the {@link MediaPipeline} to which the filter belongs
 *
 * @property {module:pointerdetector/complexTypes.PointerDetectorWindowMediaParam}[] [windows]
 *  list of detection windows for the filter.
 */
PointerDetectorFilter.constructorParams = {
  calibrationRegion: {
    type: 'pointerdetector.WindowParam',
    required: true
  },
  mediaPipeline: {
    type: 'kurento.MediaPipeline',
    required: true
  },
  windows: {
    type: 'pointerdetector.PointerDetectorWindowMediaParam',
    isArray: true
  }
};

/**
 * @alias module:pointerdetector.PointerDetectorFilter.events
 *
 * @extends module:core/abstracts.Filter.events
 */
PointerDetectorFilter.events = Filter.events.concat(['WindowIn', 'WindowOut']);


/**
 * Checker for {@link module:pointerdetector.PointerDetectorFilter}
 *
 * @memberof module:pointerdetector
 *
 * @param {external:String} key
 * @param {module:pointerdetector.PointerDetectorFilter} value
 */
function checkPointerDetectorFilter(key, value)
{
  if(!(value instanceof PointerDetectorFilter))
    throw ChecktypeError(key, PointerDetectorFilter, value);
};


module.exports = PointerDetectorFilter;

PointerDetectorFilter.check = checkPointerDetectorFilter;

},{"inherits":"inherits","kurento-client":"kurento-client"}],2:[function(require,module,exports){
/**
 * Loader for the kurento-module-pointerdetector package on the browser
 */

require('.');

},{".":"kurento-module-pointerdetector"}],3:[function(require,module,exports){
/* Autogenerated with Kurento Idl */

/*
 * (C) Copyright 2013-2015 Kurento (http://kurento.org/)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var inherits = require('inherits');

var kurentoClient = require('kurento-client');

var checkType = kurentoClient.checkType;
var ChecktypeError = checkType.ChecktypeError;

var ComplexType = kurentoClient.register.complexTypes.ComplexType;


/**
 * Data structure for UI Pointer detection in video streams.
 * All the coordinates are in pixels. X is horizontal, Y is vertical, running 
 * from the top of the window. Thus, 0,0 corresponds to the topleft corner.
 *
 * @constructor module:pointerdetector/complexTypes.PointerDetectorWindowMediaParam
 *
 * @property {external:String} id
 *  id of the window for pointer detection
 * @property {external:Integer} height
 *  height in pixels
 * @property {external:Integer} width
 *  width in pixels
 * @property {external:Integer} upperRightX
 *  X coordinate in pixels of the upper left corner
 * @property {external:Integer} upperRightY
 *  Y coordinate in pixels of the upper left corner
 * @property {external:String} activeImage
 *  uri of the image to be used when the pointer is inside the window
 * @property {external:Number} imageTransparency
 *  transparency ratio of the image
 * @property {external:String} image
 *  uri of the image to be used for the window.
 *  If {@link 
 *  pointerdetector/complexTypes.PointerDetectorWindowMediaParam#activeImage} 
 *  has been set, it will only be shown when the pointer is outside of the 
 *  window.
 */
function PointerDetectorWindowMediaParam(pointerDetectorWindowMediaParamDict){
  if(!(this instanceof PointerDetectorWindowMediaParam))
    return new PointerDetectorWindowMediaParam(pointerDetectorWindowMediaParamDict)

  pointerDetectorWindowMediaParamDict = pointerDetectorWindowMediaParamDict || {}

  // Check pointerDetectorWindowMediaParamDict has the required fields
  // 
  // checkType('String', 'pointerDetectorWindowMediaParamDict.id', pointerDetectorWindowMediaParamDict.id, {required: true});
  //  
  // checkType('int', 'pointerDetectorWindowMediaParamDict.height', pointerDetectorWindowMediaParamDict.height, {required: true});
  //  
  // checkType('int', 'pointerDetectorWindowMediaParamDict.width', pointerDetectorWindowMediaParamDict.width, {required: true});
  //  
  // checkType('int', 'pointerDetectorWindowMediaParamDict.upperRightX', pointerDetectorWindowMediaParamDict.upperRightX, {required: true});
  //  
  // checkType('int', 'pointerDetectorWindowMediaParamDict.upperRightY', pointerDetectorWindowMediaParamDict.upperRightY, {required: true});
  //  
  // checkType('String', 'pointerDetectorWindowMediaParamDict.activeImage', pointerDetectorWindowMediaParamDict.activeImage);
  //  
  // checkType('float', 'pointerDetectorWindowMediaParamDict.imageTransparency', pointerDetectorWindowMediaParamDict.imageTransparency);
  //  
  // checkType('String', 'pointerDetectorWindowMediaParamDict.image', pointerDetectorWindowMediaParamDict.image);
  //  

  // Init parent class
  PointerDetectorWindowMediaParam.super_.call(this, pointerDetectorWindowMediaParamDict)

  // Set object properties
  Object.defineProperties(this, {
    id: {
      writable: true,
      enumerable: true,
      value: pointerDetectorWindowMediaParamDict.id
    },
    height: {
      writable: true,
      enumerable: true,
      value: pointerDetectorWindowMediaParamDict.height
    },
    width: {
      writable: true,
      enumerable: true,
      value: pointerDetectorWindowMediaParamDict.width
    },
    upperRightX: {
      writable: true,
      enumerable: true,
      value: pointerDetectorWindowMediaParamDict.upperRightX
    },
    upperRightY: {
      writable: true,
      enumerable: true,
      value: pointerDetectorWindowMediaParamDict.upperRightY
    },
    activeImage: {
      writable: true,
      enumerable: true,
      value: pointerDetectorWindowMediaParamDict.activeImage
    },
    imageTransparency: {
      writable: true,
      enumerable: true,
      value: pointerDetectorWindowMediaParamDict.imageTransparency
    },
    image: {
      writable: true,
      enumerable: true,
      value: pointerDetectorWindowMediaParamDict.image
    }
  })
}
inherits(PointerDetectorWindowMediaParam, ComplexType)

// Private identifiers to allow re-construction of the complexType on the server
// They need to be enumerable so JSON.stringify() can access to them
Object.defineProperties(PointerDetectorWindowMediaParam.prototype, {
  __module__: {
    enumerable: true,
    value: "pointerdetector"
  },
  __type__: {
    enumerable: true,
    value: "PointerDetectorWindowMediaParam"
  }
})

/**
 * Checker for {@link module:pointerdetector/complexTypes.PointerDetectorWindowMediaParam}
 *
 * @memberof module:pointerdetector/complexTypes
 *
 * @param {external:String} key
 * @param {module:pointerdetector/complexTypes.PointerDetectorWindowMediaParam} value
 */
function checkPointerDetectorWindowMediaParam(key, value)
{
  if(!(value instanceof PointerDetectorWindowMediaParam))
    throw ChecktypeError(key, PointerDetectorWindowMediaParam, value);
};


module.exports = PointerDetectorWindowMediaParam;

PointerDetectorWindowMediaParam.check = checkPointerDetectorWindowMediaParam;

},{"inherits":"inherits","kurento-client":"kurento-client"}],4:[function(require,module,exports){
/* Autogenerated with Kurento Idl */

/*
 * (C) Copyright 2013-2015 Kurento (http://kurento.org/)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var inherits = require('inherits');

var kurentoClient = require('kurento-client');

var checkType = kurentoClient.checkType;
var ChecktypeError = checkType.ChecktypeError;

var ComplexType = kurentoClient.register.complexTypes.ComplexType;


/**
 * Parameter representing a window in a video stream.
 * It is used in command and constructor for media elements.
 * All units are in pixels, X runs from left to right, Y from top to bottom.
 *
 * @constructor module:pointerdetector/complexTypes.WindowParam
 *
 * @property {external:Integer} topRightCornerX
 *  X coordinate of the left upper point of the window
 * @property {external:Integer} topRightCornerY
 *  Y coordinate of the left upper point of the window
 * @property {external:Integer} width
 *  width in pixels of the window
 * @property {external:Integer} height
 *  height in pixels of the window
 */
function WindowParam(windowParamDict){
  if(!(this instanceof WindowParam))
    return new WindowParam(windowParamDict)

  windowParamDict = windowParamDict || {}

  // Check windowParamDict has the required fields
  // 
  // checkType('int', 'windowParamDict.topRightCornerX', windowParamDict.topRightCornerX, {required: true});
  //  
  // checkType('int', 'windowParamDict.topRightCornerY', windowParamDict.topRightCornerY, {required: true});
  //  
  // checkType('int', 'windowParamDict.width', windowParamDict.width, {required: true});
  //  
  // checkType('int', 'windowParamDict.height', windowParamDict.height, {required: true});
  //  

  // Init parent class
  WindowParam.super_.call(this, windowParamDict)

  // Set object properties
  Object.defineProperties(this, {
    topRightCornerX: {
      writable: true,
      enumerable: true,
      value: windowParamDict.topRightCornerX
    },
    topRightCornerY: {
      writable: true,
      enumerable: true,
      value: windowParamDict.topRightCornerY
    },
    width: {
      writable: true,
      enumerable: true,
      value: windowParamDict.width
    },
    height: {
      writable: true,
      enumerable: true,
      value: windowParamDict.height
    }
  })
}
inherits(WindowParam, ComplexType)

// Private identifiers to allow re-construction of the complexType on the server
// They need to be enumerable so JSON.stringify() can access to them
Object.defineProperties(WindowParam.prototype, {
  __module__: {
    enumerable: true,
    value: "pointerdetector"
  },
  __type__: {
    enumerable: true,
    value: "WindowParam"
  }
})

/**
 * Checker for {@link module:pointerdetector/complexTypes.WindowParam}
 *
 * @memberof module:pointerdetector/complexTypes
 *
 * @param {external:String} key
 * @param {module:pointerdetector/complexTypes.WindowParam} value
 */
function checkWindowParam(key, value)
{
  if(!(value instanceof WindowParam))
    throw ChecktypeError(key, WindowParam, value);
};


module.exports = WindowParam;

WindowParam.check = checkWindowParam;

},{"inherits":"inherits","kurento-client":"kurento-client"}],5:[function(require,module,exports){
/* Autogenerated with Kurento Idl */

/*
 * (C) Copyright 2013-2015 Kurento (http://kurento.org/)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Media API for the Kurento Web SDK
 *
 * @module pointerdetector/complexTypes
 *
 * @copyright 2013-2015 Kurento (http://kurento.org/)
 * @license ALv2
 */

var PointerDetectorWindowMediaParam = require('./PointerDetectorWindowMediaParam');
var WindowParam = require('./WindowParam');


exports.PointerDetectorWindowMediaParam = PointerDetectorWindowMediaParam;
exports.WindowParam = WindowParam;

},{"./PointerDetectorWindowMediaParam":3,"./WindowParam":4}],"kurento-module-pointerdetector":[function(require,module,exports){
/* Autogenerated with Kurento Idl */

/*
 * (C) Copyright 2013-2015 Kurento (http://kurento.org/)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Media API for the Kurento Web SDK
 *
 * @module pointerdetector
 *
 * @copyright 2013-2015 Kurento (http://kurento.org/)
 * @license ALv2
 */

Object.defineProperty(exports, 'name',    {value: 'pointerdetector'});
Object.defineProperty(exports, 'version', {value: '6.18.0-dev'});


var PointerDetectorFilter = require('./PointerDetectorFilter');


exports.PointerDetectorFilter = PointerDetectorFilter;

exports.complexTypes = require('./complexTypes');

},{"./PointerDetectorFilter":1,"./complexTypes":5}]},{},[2]);
