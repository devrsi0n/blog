import React from 'react';
import { navigate } from 'gatsby';
import { LayoutConsumer } from '../../layout/Context';
import { getLastPost } from '../../utils/helpers';

// Redirecting for Gitalk login
class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.didInit = false;
  }

  componentDidMount() {
    const { link } = getLastPost();
    navigate(link);
  }

  render() {
    return (
      <LayoutConsumer>
        {({ set }) => {
          if (!this.didInit) {
            set({
              title: 'Redirecting',
            });
            this.didInit = true;
          }
          return (
            <div>
              <p>Redirecting...</p>
            </div>
          );
        }}
      </LayoutConsumer>
    );
  }
}

export default Posts;
