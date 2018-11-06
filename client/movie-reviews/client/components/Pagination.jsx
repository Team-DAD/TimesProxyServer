import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// https://scotch.io/tutorials/build-custom-pagination-with-react

const LEFT = 'left';
const RIGHT = 'right';

// generates a range of numbers
const createRange = (start, end) => {
  const range = [];
  for (let i = start; i <= end; i += 1) {
    range.push(i);
  }
  console.log('range', range);
  return range;
};

class Pagination extends React.Component {
  constructor (props) {
    super(props);
    const { totalReviews, displayItems } = props;

    this.displayItems = displayItems; // # show on one page
    this.totalReviews = totalReviews; // # all items

    // console.log('constr', totalReviews, displayItems);

    this.state = {
      currentPage: 1,
      pages: 2, // pages to the left/right
      totalPages: Math.ceil(this.totalReviews / this.displayItems)
    };
  }

  componentDidMount () {
    this.selectPage(1);
  }

  // generate pages we want to be shown, always including first and last
  getNumbers () {
    const { currentPage, pages, totalPages } = this.state;
    const allNums = pages * 2 + 3; // page numbers shown
    const totalDisplays = allNums + 2; // all numbers shown

    console.log('total', totalPages, totalDisplays);
    if (totalPages > totalDisplays) {
      console.log('option 1');
      const start = Math.max(2, currentPage - pages);
      const end = Math.min(totalPages - 1, currentPage + pages);
      let allPages = createRange(start, end);

      const left = start > 2; // left overflow
      const right = (totalPages - end) > 1; // right overflow
      const shift = allNums - (allPages.length + 1);

      if (left && !right) { // at the right end
        const extraPages = createRange(start - shift, start - 1);
        allPages = [LEFT, ...extraPages, ...allPages];
      } else if (!left && right) { // at the left end
        const extraPages = createRange(end + 1, end + shift);
        allPages = [...allPages, ...extraPages, RIGHT];
      } else {
        allPages = [LEFT, ...allPages, RIGHT];
      }
      return [1, ...allPages, pages];
    }
    return createRange(1, totalPages);
  }

  // modifies state and sets current page
  selectPage (page) {
    const { onPageChange = f => f } = this.props;
    const { totalPages } = this.state;
    const currentPage = Math.max(0, Math.min(page, totalPages));
    const paginate = {
      currentPage,
      totalPages,
      displayItems: this.displayItems,
      totalReviews: this.totalReviews
    };
    this.setState({ currentPage }, () => onPageChange(paginate));
  }

  handleClick (event, page) {
    event.preventDefault();
    this.selectPage(page);
  }

  moveLeft (event) {
    const { currentPage } = this.state;
    event.preventDefault();
    this.selectPage(currentPage - (this.pages * 2) - 1);
  }

  moveRight (event) {
    const { currentPage } = this.state;
    event.preventDefault();
    this.selectPage(currentPage + (this.pages * 2) + 1);
  }

  createPage (page, index, curr) {
    if (page === LEFT) {
      return (
        <li key={index} className="page-item">
          <button type="button" className="page-link link-button" label="Previous" onClick={this.moveLeft}>
            <span hidden="true">
              &laquo;
            </span>
            <span className="sr">
              Previous
            </span>
          </button>
        </li>
      );
    }
    if (page === RIGHT) {
      return (
        <li key={index} className="page-item">
          <button type="button" className="page-link link-button" label="NEXT" onClick={this.moveRight}>
            <span hidden="true">
              &laquo;
            </span>
            <span className="sr">
              Next
            </span>
          </button>
        </li>
      );
    }
    return (
      <li key={index} className={`page-item${curr === page ? ' active' : ''}`}>
        <button type="button" className="page-link link-button" onClick={e => this.handleClick(e, page)} />
      </li>
    );
  }

  render () {
    const { currentPage } = this.state;
    const pages = this.getNumbers();
    return (
      <Fragment>
        <nav label="Review Pagination">
          { pages.map((page, index) => this.createPage(page, index, currentPage)) }
        </nav>
      </Fragment>
    );
  }
}

Pagination.propTypes = {
  totalReviews: PropTypes.number.isRequired,
  displayItems: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};

export default Pagination;
