import React from "react";
import accounts from "../../data/accounts";

function Bankaccount() {
  return (
    <>
      {accounts.map((table, index) => {
          return(
            <section className="account-item" key={index}>
                <div className="account-item_content-wrapper">
                    <h3 className="account-item_name">{table.name}</h3>
                    <p className="account-item_sold">{table.sold}</p>
                    <p className="account-item_balance">{table.balance}</p>
                </div>
                <div className="account-item_transaction">
                <button className="button--green account-item_transaction" >View transactions</button>
                </div>
            </section>
            )
        })
        }
    </>
  );
}

export default Bankaccount;