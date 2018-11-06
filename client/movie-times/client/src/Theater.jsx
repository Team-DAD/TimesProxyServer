import React from 'react';
import PropTypes from 'prop-types';
import TheaterTime from './TheaterTime.jsx';
import './styles.css';

const iStyle = {
  marginRight: '10px',
};

class Theater extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayPrint: {
        display: 'none',
      },
      displayMobile: {
        display: 'none',
      },
      displayPrintHead: {
        display: 'none',
      },
      displayPrintMobile: {
        display: 'none',
      },
    };
  }

  showMe(event) {
    const { displayPrint, displayMobile } = this.state;
    if (event.target.className === 'fas fa-print') {
      if (displayPrint.display === 'none') {
        this.setState({
          displayMobile: {
            display: 'none',
          },
          displayPrintMobile: {
            display: 'none',
          },
          displayPrintHead: {
            display: 'flex',
            marginLeft: 'auto',
            textAlign: 'center',
            backgroundColor: 'black',
            color: 'white',
            height: '50x',
            width: '150px',
            fontFamily: 'Open Sans',
          },
          displayPrint: {
            display: 'flex',
            marginLeft: 'auto',
            zIndex: '2',
            backgroundColor: '#dbdde0',
            textAlign: 'center',
            color: 'black',
            height: '100px',
            width: '150px',
            fontFamily: 'Open Sans',
            marginBottom: '10px',
          },
        });
      } else {
        this.setState({
          displayPrint: {
            display: 'none',
          },
          displayPrintHead: {
            display: 'none',
          },
        });
      }
    }
    if (event.target.className === 'fas fa-mobile-alt') {
      if (displayMobile.display === 'none') {
        this.setState({
          displayPrint: {
            display: 'none',
          },
          displayPrintHead: {
            display: 'none',
          },
          displayPrintMobile: {
            display: 'flex',
            marginLeft: 'auto',
            textAlign: 'center',
            backgroundColor: 'black',
            color: 'white',
            height: '50x',
            width: '150px',
            fontFamily: 'Open Sans',
          },
          displayMobile: {
            display: 'flex',
            marginLeft: 'auto',
            zIndex: '2',
            backgroundColor: '#dbdde0',
            textAlign: 'center',
            color: 'black',
            height: '100px',
            width: '150px',
            fontFamily: 'Open Sans',
            marginBottom: '10px',
          },
        });
      } else {
        this.setState({
          displayMobile: {
            display: 'none',
          },
          displayPrintMobile: {
            display: 'none',
          },
        });
      }
    }
  }

  render() {
    const { address, times, theater } = this.props;
    const {
      displayPrint, displayMobile, displayPrintHead, displayPrintMobile,
    } = this.state;
    return (
      <div>
        <span style={displayPrintHead}>
          Home Printable Tickets
        </span>
        <span style={displayPrint}>
          This movie has tickets available for you to print at home.
        </span>
        <span style={displayPrintMobile}>
          Mobile Printable Tickets
        </span>
        <span style={displayMobile}>
          You can print these tickets at the movie theater.
        </span>
        <div className="theatre-header">
          <div className="theatre-header-field">
            {theater}
            <div className="theatre-icon-end">
              <i className="fas fa-print" style={iStyle} onClick={this.showMe.bind(this)} />
              <i className="fas fa-mobile-alt" style={iStyle} onClick={this.showMe.bind(this)} />
            </div>
          </div>
          <div className="theatre-header-field">{address}</div>
        </div>
        <p className="theatre-time-head">Theater Times: </p>
        <div className="theatre-showtimes">{times.map((time, index) => <TheaterTime key={index} time={time} />)}</div>
      </div>
    );
  }
}

Theater.propTypes = {
  theater: PropTypes.string,
  address: PropTypes.string,
  times: PropTypes.instanceOf(Array),
};

Theater.defaultProps = {
  theater: 'Theater',
  address: 'address',
  times: [],
};
export default Theater;
