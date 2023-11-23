import React, { Component } from 'react';
import { Picker as SelectPicker } from '@react-native-picker/picker';
import { connectStyle } from 'native-base-shoutem-theme';

import mapPropsToStyleNames from '../utils/mapPropsToStyleNames';

class Item extends Component {
  render() {
    return <SelectPicker.Item ref={c => (this._root = c)} {...this.props} />;
  }
}

Item.propTypes = {
  ...SelectPicker.Item.propTypes
};

const StyledItem = connectStyle('NativeBase.Item', {}, mapPropsToStyleNames)(
  Item
);

export { StyledItem as Item };
