/* tslint:disable:no-use-before-declare */
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { setAccessToken } from '../actions';
//import { Store } from '../../models';
import { LoginForm, LoginFormAction } from './login';
/* tslint:enable:no-use-before-declare */

function mapStateToProps<Store>(state: Store): {} {
  return {};
}

function mapDispatchToActions<Store>(dispatch: Dispatch<Store>): LoginFormAction {
  return {
    setAccessToken: token => {
      dispatch(setAccessToken(token));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToActions)(LoginForm);
