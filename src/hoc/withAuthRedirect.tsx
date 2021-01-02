import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {AppStateType} from '../index';

const mapStateToProps = (state: AppStateType) => ({
	isAuth: state.auth.isAuth
});

type MapPropsType = {
	isAuth: boolean
};

export function withAuthRedirect<WCP>(WrappedComponent: React.ComponentType<WCP>) {
	const RedirectComponent: React.FC<MapPropsType> = (props) => {
		const {isAuth, ...restProps} = props
		if (!props.isAuth) return <Redirect to='/login'/>;
		return <WrappedComponent {...restProps as WCP} />
	}

	return connect<MapPropsType, {}, WCP, AppStateType>(mapStateToProps, {})(RedirectComponent);
}