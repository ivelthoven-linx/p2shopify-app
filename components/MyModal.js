import React from "react";
import { Modal, TextContainer } from "@shopify/polaris";

class MyModal extends React.Component {
  state = {
    modalOpen: false,
    URL:
      "https://hkd2v.sse.codesandbox.io/s/files/1/0249/2694/5340/products/the-test-fun-for-friends-screenshot_grande.png?v=1559572934"
  };

  render() {
    const { modalOpen } = this.state;
    return (
      <Modal
        title="test"
        message="symon is the best"
        src={this.state.URL}
        open={this.props.modalOpen}
        primaryAction={{
          content: "Add Retail Package",
          onAction: () => this.setState({ modalOpen: false })
        }}
        secondaryActions={[
          {
            content: "Cancel",
            onAction: () => this.setState({ modalOpen: false })
          }
        ]}
        onClose={() => this.setState({ modalOpen: false })}
      />
    );
  }
}

export default MyModal;
