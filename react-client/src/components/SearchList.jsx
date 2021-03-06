import React from 'react';
import SearchListItem from './SearchListItem.jsx';

const SearchList = (props) => {
  console.log('Inside Search List', props.searchedBooks)
return (
  <div>
    <div id="searchResults">
      <table className="mdl-data-table mdl-js-data-table mdl-data-table mdl-shadow--2dp">
        <thead>
          <tr>
            <th className="mdl-data-table__cell--non-numeric">Title</th>
            <th>Author</th>
            <th>Year Published</th>
            <th>Language</th>
            <th>Audio</th>
            <th>Add</th>
          </tr>
        </thead>
        <tbody>
          { props.searchedBooks.map((book, index) => {
            return <SearchListItem
                    key={index}
                    book={book}
                    showModalSearchList={props.showModalSearchList}
                    addBookToLibrary={props.addBookToLibrary}
                    />
          })}
        </tbody>
      </table>
    </div>
  </div>
  )
};

export default SearchList;