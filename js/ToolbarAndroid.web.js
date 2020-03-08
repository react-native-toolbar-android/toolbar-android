/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

'use strict';

let m;
try {
  // This is an optional dependency. However, webpack might still show warning message.
  m = require('react-native/Libraries/Components/UnimplementedViews/UnimplementedView');
} catch {
  // If failed to find react-native UnimplementedView, just returns an empty module so
  // this won't cause bundling related error, however any subsequent attempt of using this module
  // in such situation shall caused compile-error because it really should not be used for web.
  m = {};
}

module.exports = m;
