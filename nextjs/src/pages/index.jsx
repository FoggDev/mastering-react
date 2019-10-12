import axios from 'axios';
import Layout from '../components/Layout';
import Coins from '../components/Coins';

const Index = ({ coins }) => (
  <Layout>
    <div className="index">
      <Coins coins={coins} />
    </div>
  </Layout>
);

Index.getInitialProps = async () => {
  const url = 'https://api.coinmarketcap.com/v1/ticker/';
  const response = await axios.get(url);
  console.log('RESPONSE===', response);
  return {
    coins: response.data
  };
}

export default Index;
