import React from "react";
import {
  Card,
  Collapsible,
  Thumbnail,
  Heading,
  Stack,
  Button,
  TextContainer
} from "@shopify/polaris";
import MyModal from "../components/MyModal";
import exampleData from "../ExampleData";

class ProductCard extends React.Component {
  state = {
    open: false,
    open2: false,
    open3: false,
    modalOpen: false
  };

  render() {
    const barcode = exampleData[0]["barcode"];
    const link = exampleData[0]["transformed_src"];
    const link2 = exampleData[1]["transformed_src"];
    const link3 = exampleData[2]["transformed_src"];
    const { open } = this.state;
    const { open2 } = this.state;
    const { open3 } = this.state;
    return (
      <div>
        <MyModal modalOpen={this.state.modalOpen} />
        <Card sectioned>
          <div onClick={this.handleToggleClick}>
            <Stack alignment="center" distribution="fillEvenly">
              <Thumbnail source={link} alt="Black choker necklace" />
              <Heading>Karl Lagerfeld T-shirt</Heading>
            </Stack>
          </div>
          <Collapsible open={open} id="basic-collapsible">
            <Card.Section>
              <Card sectioned>
                <div onClick={this.handleToggleClick2}>
                  <Card.Section>
                    <Stack distribution="center">
                      <Heading>Variant : Black</Heading>
                    </Stack>
                  </Card.Section>
                </div>

                <Collapsible open={open2} id="basic-collapsible">
                  <Card.Section>
                    <Stack>
                      <div onClick={this.handleOpenModal}>
                        <Thumbnail source={link} alt="Black choker necklace" />
                      </div>
                      <div onClick={this.handleOpenModal}>
                        <Thumbnail
                          onClick={this.handleOpenModal}
                          source={link2}
                          alt="Black choker necklace"
                        />
                      </div>
                      <div onClick={this.handleOpenModal}>
                        <Thumbnail source={link3} alt="Black choker necklace" />
                      </div>
                    </Stack>
                  </Card.Section>
                </Collapsible>
              </Card>
              {/* ---------------------------- */}
              <Card sectioned>
                <div onClick={this.handleToggleClick3}>
                  <Card.Section>
                    <Stack distribution="center">
                      <Heading>Variant : White</Heading>
                    </Stack>
                  </Card.Section>
                </div>
                <Collapsible open={open3} id="basic-collapsible">
                  <Card.Section>
                    <Stack>
                      <Thumbnail
                        source="https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"
                        alt="Black choker necklace"
                      />
                      <Thumbnail
                        source="https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"
                        alt="Black choker necklace"
                      />
                      <Thumbnail
                        source="https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"
                        alt="Black choker necklace"
                      />
                    </Stack>
                  </Card.Section>
                </Collapsible>
                <Collapsible />
              </Card>
            </Card.Section>
          </Collapsible>
        </Card>
      </div>
    );
  }

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

  handleToggleClick2 = () => {
    this.setState(state => {
      const open2 = !state.open2;
      return {
        open2
      };
    });
  };

  handleToggleClick3 = () => {
    this.setState(state => {
      const open3 = !state.open3;
      return {
        open3
      };
    });
  };
}

export default ProductCard;
