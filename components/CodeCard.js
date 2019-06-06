import React from "react";
import { Navigation, Layout, Card, Autocomplete } from "@shopify/polaris";

import "../css/code_card.css";

class CodeCard extends React.Component {
  render() {
    return (
      <Card subdued>
        <Card.Section>
          <pre>
            <code style={{ overflow: "scroll" }}>{this.props.children}</code>
          </pre>
        </Card.Section>
      </Card>
    );
  }
}

export default CodeCard;
