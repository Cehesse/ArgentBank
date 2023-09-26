import React from "react";
import Banner from "../../components/Banner"
import Card from "../../components/Card"
import chat from "../../assets/img/icon-chat.png";
import money from "../../assets/img/icon-money.png";
import security from "../../assets/img/icon-security.png";

function Home() {
    return (
      <div className="pages">
        <main>
          <Banner title_1="No fees." title_2="No minimum deposit." title_3="High interest rates." text="Open a savings account with Argent Bank today!" />
          <div className="cards">
          <Card 
            icon={chat}
            title="You are our #1 priority"
            text="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."/>
          <Card 
            icon={money}
            title="More savings means higher rates"
            text="The more you save with us, the higher your interest rate will be!"/>
          <Card 
            icon={security}
            title="Security you can trust"
            text="We use top of the line encryption to make sure your data and money is always safe."/>
          </div> 
        </main> 
      </div>
    )
  }

  export default Home