/** @module hooks/search */

import { useState, useContext } from 'react';
import * as lunr from 'lunr';

/**
 * Progromatic access to client-side local search powered by lunar
 * @func
 * @param {Object} obj
 * @param {Object} obj.data - Data to populate the search
 * @param {[String]} obj.indexes - Indexes to power the search
 * @return {Object} obj
 * @return {Object} obj.handleSubmit
 * @return {Object} obj.handleInputChange
 * @return {Object} obj.searchTerm
 *
 */
const useGraphSearch = ({ data, indexes }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const search = lunr(function() {
    const lu = this;
    if (indexes) indexes.map((index) => lu.field(index));
    if (data) data.map((dat) => this.add(dat));
  });

  /**
   * handleSubmit - handle the query
   * @function
   * @return {Array} results
   */
  const handleSubmit = () => {
    const results = search.search(searchTerm);
    if (results) {
      console.log('results found', results);
      console.log('Im feeling lucky, navigating to first results');
      // navigateToNode(results[0].id);
      console.log(results);
    } else {
      console.log('no results found for query: ', searchTerm);
    }
  };

  /**
   * handleSubmit - handle the query
   * @function
   * @return {Array} results
   */
  const handleInputChange = (event) => {
    event.persist();
    setSearchTerm(event.target.value);
  };
  return {
    handleSubmit,
    handleInputChange,
    searchTerm,
  };
};

export default useGraphSearch;
