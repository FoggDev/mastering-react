import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Components
import Coins from '../components/Coins';

// Actions
import { fetchCoins } from '../actions/coinsActions';

const mapStateToProps = ({ coins: { coins } }) => ({
  coins
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchCoins
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Coins);
