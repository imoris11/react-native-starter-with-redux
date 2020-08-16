import React from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { connect } from 'react-redux';
import selectors from './redux/selectors';
import { fetchUser } from './redux/actions';

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    const { user } = this.props;
    return (
      <>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
        >
          <Text>Hello {user?.name || 'World'}</Text>
        </ScrollView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUser()),
  };
};

export default connect(selectors, mapDispatchToProps)(Home);
