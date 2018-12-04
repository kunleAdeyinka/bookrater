import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import { getBooksQuery } from '../queries/queries';

import BookDetails from './BookDetails';


class BookList extends Component {

  constructor(props){
    super(props);

    this.state = {
      selectedBook: null
    };
  }

  displayBooks(){
      var data = this.props.data;
      if(data.loading){
          return(<div>Loading books....</div>);
      }else{
          return data.books.map(book => {
            return (<li key={book.id} onClick={ (e) => this.setState({selectedBook: book.id }) }>{ book.name }</li>);
          });
      }
  }
  render() {
      
    return (
      <div id="main">
        <ul id="book-list">
            {this.displayBooks()}
            <BookDetails bookId={this.state.selectedBook} />
        </ul>
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
