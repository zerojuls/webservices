import React, {Component} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {getInfo} from '../actions/manufacturersActions'

class ManufactureInfo extends Component {
  componentDidMount() {
    let {productPage, id_manufacturer} = this.props

    if (productPage.data !== null) {
      this.props.getInfo(id_manufacturer);
    }
  }

  render() {
    let {fetching, data} = this.props
    return (
      <div>
        {fetching ?
          <div>Loading ...</div>
          :
          null
        }
      </div>
    )
  }
}
function mapStateToProps({productsReducer, manufacturersReducer}) {
  return {
    productPage  : productsReducer.productPage,
    manufacturers: manufacturersReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getInfo: bindActionCreators(getInfo, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManufactureInfo);