import { Page, TextContainer, DisplayText } from "@shopify/polaris";
import navItems from "../../util/navItems";
import React from "react";
import nav from "../../util/nav";
import SubNav from "../../components/SubNav";

class Index extends React.Component {
  state = {
    items: navItems
  };
  componentDidMount() {
    this.setState({
      items: nav.getSelectedItems(window.location.href, this.state.items)
    });
  }
  render() {
    return (
      <Page
        forceRender={true}
        secondaryActions={[{ content: "Report Issue" }]}
        title="Snippets"
        separator
      >
        <SubNav items={this.state.items}>
          <TextContainer spacing="loose">
            <DisplayText size="large">Multiple Variant Images</DisplayText>
          </TextContainer>
        </SubNav>
      </Page>
    );
  }
}

export default Index;
