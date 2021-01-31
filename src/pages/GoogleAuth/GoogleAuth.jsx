import React from 'react';
import { connect } from 'react-redux';
import { googleLogin } from '../../actions';
import { Loading } from '../../components';

const GoogleAuth = (props) => {
    const { googleLogin } = props;

    googleLogin('/#/');

    return (
        <Loading/>
    );
};

const mapDispatchToProps = {
    googleLogin,
};

export default connect(null, mapDispatchToProps)(GoogleAuth);
