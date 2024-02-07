import { useFetcher } from 'react-router-dom';
import Button from '../../ui/Button';
import { updateOrder } from '../../services/apiRestaurant';

function UpdateOrder({ order }) {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className=" text-right">
      <Button type="primary">Make priority</Button>
    </fetcher.Form>
  );
}

export async function action({ request, params }) {
  // console.log('update');

  // Updating data
  // Data that will be updated is only the priority field
  const data = { priority: true };
  await updateOrder(params.orderId, data);

  return null;
}

export default UpdateOrder;
