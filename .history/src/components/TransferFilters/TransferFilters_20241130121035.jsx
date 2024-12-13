import { useSelector } from 'react-redux';

import * as actions from '../../redux/actions';
import store from '../../redux/store';

const TransferFilters = () => {
  const onCheckboxChange = (string) => {
    switch (string) {
      case 'all':
        store.dispatch(actions.ALL);
        break;
      case 'without_transfer':
        store.dispatch(actions.WITHOUT_TRANSFER);
        break;
      case 'one_transfer':
        store.dispatch(actions.ONE_TRANSFER);
        break;
      case 'two_transfers':
        store.dispatch(actions.TWO_TRANSFERS);
        break;
      case 'three_transfers':
        store.dispatch(actions.THREE_TRANSFERS);
        break;
      default:
        console.log(store.getState());
        break;
    }
  };

  const thisTransferFilters = useSelector((state) => state.transferFilters);

  return (
    <>
      <h1>Hehe</h1>
    </>
  );
};

export default TransferFilters;
