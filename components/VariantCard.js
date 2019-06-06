import React from "react";
import {
  Card,
  Collapsible,
  Thumbnail,
  Heading,
  Stack,
  Button,
  TextContainer,
  Badge,
  Caption,
  Icon
} from "@shopify/polaris";

class VariantCard extends React.Component {
  constructor(props) {
    super(props);
    console.log("Constructing..");
    this.state = {
      open: this.props.isVisible,
      variantData: this.props.variantData
    };
  }
  render() {
    // console.log(this.props.isVisible, this.state.open);
    const { open } = this.state;

    console.log(open);
    const { variantData } = this.state;
    return (
      <Card sectioned>
        <div onClick={this.handleToggleClick}>
          <Card.Section>
            <Stack distribution="center">
              <Heading>Variant : {variantData.title}</Heading>
              <Heading>
                {"Amount of images : " + variantData.images.length}
              </Heading>
            </Stack>
          </Card.Section>
        </div>

        <Collapsible open={open} id="basic-collapsible">
          <Card.Section>
            <Stack>
              {variantData.images.map((image, i) => {
                return (
                  <div key={image.id + "_" + i} onClick={this.handleOpenModal}>
                    <Thumbnail
                      source={image.transformed_src}
                      alt="Black choker necklace"
                    />
                    <Stack distribution="center">
                      <Caption>{image.types}</Caption>
                    </Stack>
                  </div>
                );
              })}
            </Stack>
          </Card.Section>
        </Collapsible>
      </Card>
    );
  }
  handleToggleClick = () => {
    this.setState(state => {
      const open = !state.open;
      return {
        open
      };
    });
  };
}

export default VariantCard;
