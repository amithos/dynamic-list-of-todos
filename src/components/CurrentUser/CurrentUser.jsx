import React from 'react';
import PropTypes from 'prop-types';
import { getUserById } from '../../api';
import './CurrentUser.scss';

export class CurrentUser extends React.Component {
  state = {
    user: null,
  }

  componentDidMount() {
    this.loadUser();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.userId !== this.props.userId) {
      this.loadUser();
    }
  }

  loadUser() {
    getUserById(this.props.userId)
      .then(({ data }) => this.setState({
        user: data,
      }));
  }

  render() {
    const { user } = this.state;

    if (!user) {
      return <></>;
    }

    const { resetSelectedUser } = this.props;

    const {
      id,
      name,
      email,
      phone,
    } = this.state.user;

    return (
      <div className="CurrentUser">
        <h2 className="CurrentUser__title">
          <span>
            {`Selected user: ${id}`}
          </span>
        </h2>

        <h3 className="CurrentUser__name">{name}</h3>
        <p className="CurrentUser__email">{email}</p>
        <p className="CurrentUser__phone">{phone}</p>

        <button
          type="button"
          className="button"
          onClick={() => {
            resetSelectedUser();
            this.setState({
              user: null,
            });
          }}
        >
          Clear
        </button>
      </div>
    );
  }
}

CurrentUser.propTypes = {
  userId: PropTypes.number.isRequired,
  resetSelectedUser: PropTypes.func.isRequired,
};
