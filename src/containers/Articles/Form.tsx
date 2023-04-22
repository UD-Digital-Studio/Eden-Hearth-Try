import React, {Component, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Layout from '../../components/Articles/Form';
import ArticlesForm from '../../components/Articles/Form';
import { Text } from 'native-base';

const ArticlesFormContainer = ({userInput, onFormSubmit}) => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(null);

  return (
    <Text>Article form</Text>
  );
};

const mapStateToProps = state => ({
  userInput: state.articles.userInput || {},
});

const mapDispatchToProps = dispatch => ({
  onFormSubmit: dispatch.articles.save,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ArticlesFormContainer);
