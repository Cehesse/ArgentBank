import React from "react";
import Button from "../../components/Button";
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
                  <Button text="View transactions"/>
                </div>
            </section>
            )
        })
        }
    </>
  );
}

export default Bankaccount;