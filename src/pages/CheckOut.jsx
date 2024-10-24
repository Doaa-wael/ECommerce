import BillingDetails from "../JSX/BillingDetails";
import RightBilling from "../JSX/RightBilling";

function CheckOut() {
  return (
    <div className="p-8 flex flex-col md:flex-row justify-around">
      <BillingDetails />
      <RightBilling />
    </div>
  );
}

export default CheckOut;
