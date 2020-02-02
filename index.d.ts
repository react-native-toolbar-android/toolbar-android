// Type definitions for @react-native-community/toolbar-android
// Type definitions based off what was originally implemented in @types/react-native

import React from 'react';
import {ImageURISource, NativeMethodsMixin, ViewProps} from 'react-native';

type Constructor<T> = new (...args: any[]) => T;

declare module '@react-native-community/toolbar-android' {
  export type ToolbarAndroidAction = {
    /**
     *  title: required, the title of this action
     */
    title: string;

    /**
     * icon: the icon for this action, e.g. require('./some_icon.png')
     */
    icon?: ImageURISource;

    /**
     * show: when to show this action as an icon or hide it in the overflow menu: always, ifRoom or never
     */
    show?: 'always' | 'ifRoom' | 'never';

    /**
     * showWithText: boolean, whether to show text alongside the icon or not
     */
    showWithText?: boolean;
  };

  export interface ToolbarAndroidProps extends ViewProps {
    /**
     * Sets possible actions on the toolbar as part of the action menu. These are displayed as icons
     * or text on the right side of the widget. If they don't fit they are placed in an 'overflow'
     * menu.
     *
     * This property takes an array of objects, where each object has the following keys:
     *
     * * `title`: **required**, the title of this action
     * * `icon`: the icon for this action, e.g. `require('./some_icon.png')`
     * * `show`: when to show this action as an icon or hide it in the overflow menu: `always`,
     * `ifRoom` or `never`
     * * `showWithText`: boolean, whether to show text alongside the icon or not
     */
    actions?: ToolbarAndroidAction[];

    /**
     * Sets the content inset for the toolbar ending edge.
     * The content inset affects the valid area for Toolbar content other
     * than the navigation button and menu. Insets define the minimum
     * margin for these components and can be used to effectively align
     * Toolbar content along well-known gridlines.
     */
    contentInsetEnd?: number;

    /**
     * Sets the content inset for the toolbar starting edge.
     * The content inset affects the valid area for Toolbar content
     * other than the navigation button and menu. Insets define the
     * minimum margin for these components and can be used to effectively
     * align Toolbar content along well-known gridlines.
     */
    contentInsetStart?: number;

    /**
     * Sets the toolbar logo.
     */
    logo?: ImageURISource;

    /**
     * Sets the navigation icon.
     */
    navIcon?: ImageURISource;

    /**
     * Callback that is called when an action is selected. The only
     * argument that is passed to the callback is the position of the
     * action in the actions array.
     */
    onActionSelected?: (position: number) => void;

    /**
     * Callback called when the icon is selected.
     */
    onIconClicked?: () => void;

    /**
     * Sets the overflow icon.
     */
    overflowIcon?: ImageURISource;

    /**
     * Used to set the toolbar direction to RTL.
     * In addition to this property you need to add
     * android:supportsRtl="true"
     * to your application AndroidManifest.xml and then call
     * setLayoutDirection(LayoutDirection.RTL) in your MainActivity
     * onCreate method.
     */
    rtl?: boolean;

    /**
     * Sets the toolbar subtitle.
     */
    subtitle?: string;

    /**
     * Sets the toolbar subtitle color.
     */
    subtitleColor?: string;

    /**
     * Used to locate this view in end-to-end tests.
     */
    testID?: string;

    /**
     * Sets the toolbar title.
     */
    title?: string;

    /**
     * Sets the toolbar title color.
     */
    titleColor?: string;
  }

  /**
   * React component that wraps the Android-only [`Toolbar` widget][0]. A Toolbar can display a logo,
   * navigation icon (e.g. hamburger menu), a title & subtitle and a list of actions. The title and
   * subtitle are expanded so the logo and navigation icons are displayed on the left, title and
   * subtitle in the middle and the actions on the right.
   *
   * If the toolbar has an only child, it will be displayed between the title and actions.
   *
   * Although the Toolbar supports remote images for the logo, navigation and action icons, this
   * should only be used in DEV mode where `require('./some_icon.png')` translates into a packager
   * URL. In release mode you should always use a drawable resource for these icons. Using
   * `require('./some_icon.png')` will do this automatically for you, so as long as you don't
   * explicitly use e.g. `{uri: 'http://...'}`, you will be good.
   *
   * [0]: https://developer.android.com/reference/android/support/v7/widget/Toolbar.html
   */
  class ToolbarAndroidComponent extends React.Component<ToolbarAndroidProps> {}
  const ToolbarAndroidBase: Constructor<NativeMethodsMixin> &
    typeof ToolbarAndroidComponent;
  class ToolbarAndroid extends ToolbarAndroidBase {}
  export default ToolbarAndroid;
}
