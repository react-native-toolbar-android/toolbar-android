#!/bin/bash

#
# setup example environment by creating a local repo for main code base
# Note: this should be executed from the actual example directory
#
PROJECT_ROOT="$1"
PKG_NAME="@react-native-community/toolbar-android"
LOCAL_REPO="../${SCRIPT_DIR}/repo"
PKG_CURRENT="react-native-community-toolbar-android-current.tgz"
CWD=`pwd`

echo "** packaging @react-native-community/toolbar-android..."
cd "${PROJECT_ROOT}"
PKG_FILE=`npm pack 2> /dev/null`
mv "${PKG_FILE}" "${PKG_CURRENT}"
echo "${PKG_FILE} => ${PKG_CURRENT}"
echo "${PKG_CURRENT} is ready..."

cd ${CWD}
echo "** install the local package..."
yarn cache clean 
yarn add "file:${PROJECT_ROOT}/${PKG_CURRENT}" 
