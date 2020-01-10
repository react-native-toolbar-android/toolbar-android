import * as React from 'react';
import renderer from 'react-test-renderer';
import ToolbarAndroid from '../ToolbarAndroid';

describe('<ToolbarAndroid />', () => {
  it('renders enabled ToolbarAndroid', () => {
    const tree = renderer.create(<ToolbarAndroid />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders ToolbarAndroid with title', () => {
    const tree = renderer
      .create(<ToolbarAndroid title="a test title" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders ToolbarAndroid with icon', () => {
    const tree = renderer
      .create(<ToolbarAndroid navIcon={require('./ic_menu_black_24dp.png')} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
