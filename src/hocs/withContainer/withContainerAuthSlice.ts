import { connect, ConnectedProps } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { State, actions } from '@/store/root.store';

const mapStateToProps = (state: State) => ({
    ...state.authSlice,
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    ...bindActionCreators(actions.authActions, dispatch),
})

const bind = connect(mapStateToProps, mapDispatchToProps, (stateProps, dispatchProps, ownProps) => ({
    state: stateProps,
    actions: dispatchProps,
    ...ownProps,
}));

export const withContainer = bind

export type Bind = ConnectedProps<typeof bind>