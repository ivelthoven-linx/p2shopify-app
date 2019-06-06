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
import MyModal from "../components/MyModal";
import VariantCard from "./VariantCard";

class ProductCard extends React.Component {
  state = {
    open: false,
    variantsOpen: true,
    modalOpen: false,
    productData: this.props.productData,
    mainSource: null
  };

  componentDidMount() {
    this.state.productData.variants.map((variant, i) => {
      if (variant.order === 1) {
        variant.images.map((image, i) => {
          if (image.order === "1") {
            this.setState({ mainSource: image.transformed_src });
          }
        });
      }
    });
  }

  render() {
    const { open } = this.state;
    const { variantsOpen } = this.state;
    return (
      <div>
        <MyModal modalOpen={this.state.modalOpen} />
        <Card sectioned>
          <div onClick={this.handleToggleClick}>
            <Stack alignment="center">
              <Stack.Item fill>
                <Thumbnail
                  source={this.state.mainSource}
                  alt="Black choker necklace"
                />
              </Stack.Item>
              <Stack.Item fill>
                <Heading>{this.state.productData.title}</Heading>
              </Stack.Item>
              <Stack.Item>
                <Heading>{"Amount of images : 60"}</Heading>
              </Stack.Item>
              <Stack.Item>
                {/* <div onClick={this.closeAll()}>
                  <Icon source="subtract" backdrop={true} />
                </div> */}
              </Stack.Item>
            </Stack>
          </div>
          {/* <Button plain onClick={this.closeAll} icon="subtract" /> */}

          <Collapsible open={open} id="basic-collapsible">
            <Card.Section>
              {this.props.productData.variants.map((variant, i) => {
                return (
                  <VariantCard
                    key={variant.title + "_" + i}
                    variantData={variant}
                    isVisible={variantsOpen}
                  />
                );
              })}
            </Card.Section>
          </Collapsible>
        </Card>
      </div>
    );
  }

  closeAll = () => {
    this.setState({ variantsOpen: false });
  };

  handleOpenModal = () => {
    this.setState(({ modalOpen }) => ({ modalOpen: !modalOpen }));
  };

  handleToggleClick = () => {
    this.setState(state => {
      const open = !state.open;
      return {
        open
      };
    });
  };
}

export default ProductCard;
