import { formatCurrency } from '../../utils/helpers';

function OrderItem({ item, isLoadingIngredients, ingredients, imageUrl }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="flex gap-3 space-y-1 py-3">
      <img src={imageUrl} alt={name} className={`h-20`} />

      <div className="flex flex-col justify-center gap-1">
        <div className="flex flex-wrap items-center justify-between gap-4 text-sm">
          <p>
            <span className="font-bold">{quantity}&times;</span> {name}
          </p>
          <p className="font-bold">{formatCurrency(totalPrice)}</p>
        </div>

        <p className="text-sm capitalize italic text-stone-500">
          {isLoadingIngredients ? 'Loading...' : ingredients.join(', ')}
        </p>
      </div>
    </li>
  );
}

export default OrderItem;
