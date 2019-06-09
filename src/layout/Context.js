import React from 'react';
import pt from 'prop-types';

const defaultContextValue = {
  data: {
    title: '',
    children: null,
    className: '',
    style: {},
  },
  set: () => {},
};

const { Provider, Consumer } = React.createContext(defaultContextValue);

class ContextProviderComponent extends React.Component {
  static propTypes = {
    children: pt.any.isRequired,
  };

  constructor(props) {
    super(props);
    /* eslint-disable react/no-unused-state */
    this.state = {
      ...defaultContextValue,
      set: this.setData,
    };
  }

  setData = newData => {
    this.setState(state => ({
      data: {
        ...state.data,
        ...newData,
      },
    }));
  };

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export const LayoutConsumer = Consumer;

export { ContextProviderComponent };
