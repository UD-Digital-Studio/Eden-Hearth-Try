import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Layout from '../../components/Articles/List';
import { Text } from 'native-base';

const ArticlesListContainer=()=>{
  return(
    <>
      <Text>Article List</Text>
    </>
  )
}

const mapStateToProps = (state) => ({
  listFlat: state.articles.listFlat || [],
  listPaginated: state.articles.listPaginated || {},
  meta: state.articles.meta || [],
  pagination: state.articles.pagination || {},
});


const mapDispatchToProps = (dispatch) => ({
  fetchData: dispatch.articles.fetchList,
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesListContainer);
