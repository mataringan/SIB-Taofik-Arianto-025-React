import { Outlet } from "react-router-dom";
import ItemRow from "../components/ItemRows.js";
import { getItems } from "../items";

export default function Items() {
  const items = getItems();
  return (
    <div>
      <h1>Items Page</h1>
      <p>Select an item to be shown</p>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <ItemRow key={item.id} item={item} />
          ))}
        </tbody>
      </table>
      <Outlet />
    </div>
  );
}
