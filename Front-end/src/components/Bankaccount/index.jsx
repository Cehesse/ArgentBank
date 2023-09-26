import React from "react";
import Button from "../../components/Button";
import accounts from "../../data/accounts";

function Bankaccount() {
  return (
    <>
      {accounts.map((table, index) => {
          return(
            <section className="account" key={index}>
                <div className="account-content-wrapper">
                    <h3 className="account-title">{table.name}</h3>
                    <p className="account-amount">{table.sold}</p>
                    <p className="account-amount-description">{table.balance}</p>
                </div>
                <Button text="View transactions"/>
            </section>
            )
        })
        }
    </>
  );
}

export default Bankaccount;