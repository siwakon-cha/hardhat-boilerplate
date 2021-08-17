import React from "react";

export function BatchTransfer({ transferTokens, tokenSymbol }) {
  return (
    <div>
        <hr />
      <h4>Batch Transfer</h4>
      <form
        onSubmit={(event) => {
          // This function just calls the transferTokens callback with the
          // form's data.
          event.preventDefault();

          const formData = new FormData(event.target);
          const to = formData.get("to");
          const amount = formData.get("amount");

          const to1 = formData.get("to1");
          const to2 = formData.get("to2");

          if (to && amount && to1 && to2) {
            transferTokens(to, amount);
            transferTokens(to1, amount);
            transferTokens(to2, amount);
          }
          else {  
              console.log('error occurred', to, to1, to2)
          }
        }}
      >
        <div className="form-group">
          <label>Amount of {tokenSymbol}</label>
          <input
            className="form-control"
            type="number"
            step="1"
            name="amount"
            placeholder="1"
            defaultValue="100"
            required
          />
        </div>
        <div className="form-group">
          <label>Recipient address 1</label>
          <input className="form-control" type="text" name="to" 
            defaultValue="0xda80Ae551aF4444d5595aC3fEE6a21E3DfEaCa1e"
            required />
        </div>
        <div className="form-group">
          <label>Recipient address 2</label>
          <input className="form-control" type="text" name="to1" 
            defaultValue="0x8ec03c7833390Dd0592E5C4de3F47f5dE39cccbF"
            required />
        </div>
        <div className="form-group">
          <label>Recipient address 3</label>
          <input className="form-control" type="text" name="to2"
            defaultValue="0xA50317cCBCD8320Fba24AbE21AC893FF5c481d98"
            required />
        </div>
        <div className="form-group">
          <input className="btn btn-primary" type="submit" value="Transfer" />
        </div>
      </form>
    </div>
  );
}
