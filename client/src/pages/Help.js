import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Faq from "react-faq-component";
import { APP_NAME } from '../utils/constants';
import '../help.css';

const data = {
  title: "FAQ (How the System works)",
  rows: [
    {
      title: "What are the prerequisites for using the system?",
      content: "You need MetaMask Browser Extension installed and Ganache for running the system on a local Ethereum Blockchain.",
    },
    {
      title: "How can I understand the working of the system?",
      content: "You can watch the demo video uploaded above on this page.",
    },
    {
      title: "Where can I find this project source code?",
      content: (
        <p>
          You can find it in this Github Repository{" "}
          <a href="https://github.com/vrii14/Land-Registration-with-Blockchain" target="_blank" rel="noopener noreferrer">
            here.
          </a>
        </p>
      ),
    },
    {
      title: "What do I register for?",
      content: "If you own a land and want to sell it, Register as a Seller. If you want to buy a land, Register as a Buyer.",
    },
    {
      title: "Why can't I request for a Land Property after registering as Buyer?",
      content: "Your account profile and documents will first be verified by the Land Inspector and then you can request a Land.",
    },
    {
      title: "Why can't I add a Land Property after registering as Seller?",
      content: "Same answer as above! Your account needs to be verified first.",
    },
    {
      title: "Who has created this project?",
      content: "This is a team project built by Mrunal Kotkar, Divya Kharode and Vrinda Ahuja. You can reach out to us in case of any queries!",
    },
  ],
};

const styles = {
  bgColor: 'dark',
  titleTextColor: "black",
  rowTitleColor: "grey",
  rowContentPaddingBottom: '10px',
  transitionDuration: "0.5s",
  timingFunc: "ease",
};

const config = {
  animate: true,
  tabFocus: true
};

const Help = () => {
  return (
    <>
      <div id="container">
        <div id="topSection">
          <div id="searchSection"></div>
        </div>
      </div>

      <Container className="mt-4">
        <Row>
          <Col>
            <h1 className="text-center mb-4">Demo</h1>
            <div className="ratio ratio-16x9 mb-4">
              <iframe 
                src="https://www.youtube.com/embed/6VLaAa8GNDc" 
                title="Land Registry Demo"
                allowFullScreen
              />
            </div>

            <div style={{ marginTop: "40px" }}>
              <Faq
                data={data}
                styles={styles}
                config={config}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Help;