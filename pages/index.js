import {
  EmptyState,
  Layout,
  Page,
  ResourcePicker,
  Card,
  TextStyle,
  ResourceList,
  Thumbnail,
  Query,
  TopBar,
  FilterType,
  Avatar,
  Heading,
  Link,
  DisplayText,
  Stack,
  Button,
  TextContainer,
  Pagination
} from "@shopify/polaris";
import React from "react";
// import { Link } from "@shopify/polaris/types/components/AppProvider/utilities";
// sdfssssss
class Index extends React.Component {
  render() {
    return (
      <Page title="Phomas">
        <Layout>
          <Layout.Section>
            <Card sectioned>
              <Card.Section>
                <Stack>
                  <Stack.Item fill>
                    <Heading element="h1">Welcome to,</Heading>
                    <DisplayText size="extraLarge">Phomas</DisplayText>
                  </Stack.Item>
                  <Stack.Item>
                    <div style={{ height: "100px" }}>
                      <Pagination
                        hasPrevious
                        previousKeys={[74]}
                        onPrevious={() => {
                          console.log("Previous");
                        }}
                        hasNext
                        nextKeys={[75]}
                        onNext={() => {
                          console.log("Next");
                        }}
                      />
                    </div>
                  </Stack.Item>
                </Stack>
              </Card.Section>
              <Card.Section>
                <TextContainer spacing="loose">
                  <p>
                    To empower your e-commerce sales and reduce costs, Linx
                    developed Phomas. A unique solution to manage the process of
                    E-commerce photography. Including an online retouch and
                    approval workflow and automated image conversion and
                    delivery. Get the max out of your web shop and reduce
                    returns by displaying the most photo realistic imagery.
                    Boost sales by speeding up the process. Phomas delivers!
                    Phomas is an integrated and highly configurable Cloud
                    Solution. Connect your photographers and your photo retouch
                    company. Deliver to your own web shop or these of
                    affiliates. Auto crop imagery based on business logic.
                    Phomas gives you the control you need to benifit most of
                    your e-commerce channel.
                  </p>
                </TextContainer>
                <Layout>
                  <video
                    autoPlay="autoplay"
                    loop="loop"
                    controls="controls"
                    width="500"
                    height="400"
                  >
                    <source
                      type="video/mp4"
                      src="https://phomas.com/Media/Default/Video/Phomas-PhotoShootManagement-HD.mp4"
                    />
                  </video>
                </Layout>
              </Card.Section>
              <Layout>
                <Button plain>
                  Get more detailed information at phomas.com
                </Button>
              </Layout>
            </Card>
          </Layout.Section>
        </Layout>

        <Layout>
          <Layout.Section>
            <Card sectioned>
              <Card.Section>
                <Stack alignment="center">
                  <Stack.Item fill>
                    <DisplayText size="extraLarge">Functionalities</DisplayText>
                  </Stack.Item>
                  <Stack.Item>
                    <div style={{ height: "100px" }}>
                      <Pagination
                        hasPrevious
                        previousKeys={[74]}
                        onPrevious={() => {
                          console.log("Previous");
                        }}
                        hasNext
                        nextKeys={[75]}
                        onNext={() => {
                          console.log("Next");
                        }}
                      />
                    </div>
                  </Stack.Item>
                </Stack>
              </Card.Section>
              <Card.Section>
                {/* ------------------------------------ */}
                <TextContainer spacing="loose">
                  <Layout section={true}>
                    <Stack alignment="center">
                      <Layout.Section>
                        <Heading element="h1">Main image</Heading>
                        <br />
                      </Layout.Section>
                    </Stack>

                    <p>
                      The first image for each product is known as the featured,
                      or main, image. The featured image is shown on collection
                      pages, the cart page, the checkout page, and your home
                      page. Product images are displayed on your online store to
                      let your customers see what your products look like. The
                      images are also used on Shopify POS and other sales
                      channels. The best file type for most product images is
                      JPEG.
                    </p>
                  </Layout>
                </TextContainer>
                <br />
                <hr />
                <br />
                {/* ------------------------------------ */}
                <TextContainer spacing="loose">
                  <Layout section={true}>
                    <Stack alignment="center">
                      <Layout.Section>
                        <Heading element="h1">H-over</Heading>
                        <br />
                      </Layout.Section>
                    </Stack>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin eros sapien, lacinia at lacus sit amet, aliquet
                      malesuada diam. Integer congue nibh non ipsum ornare
                      iaculis. Nulla ut scelerisque tortor. Nulla pharetra sem
                      rutrum diam ornare congue. Fusce eget ullamcorper massa.
                      Mauris porttitor dictum dapibus. Ut faucibus varius
                      pharetra. Proin sed rutrum odio.
                    </p>
                  </Layout>
                </TextContainer>
                <br />
                <hr />
                <br />
                {/* -------------------------------- */}
                <TextContainer spacing="loose">
                  <Layout section={true}>
                    <Stack alignment="center">
                      <Layout.Section>
                        <Heading element="h1">
                          Add multiple variant images
                        </Heading>
                        <br />
                      </Layout.Section>
                    </Stack>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin eros sapien, lacinia at lacus sit amet, aliquet
                      malesuada diam. Integer congue nibh non ipsum ornare
                      iaculis. Nulla ut scelerisque tortor. Nulla pharetra sem
                      rutrum diam ornare congue. Fusce eget ullamcorper massa.
                      Mauris porttitor dictum dapibus. Ut faucibus varius
                      pharetra. Proin sed rutrum odio.
                    </p>
                  </Layout>
                  <br />
                  <br />
                </TextContainer>
                <Layout>
                  <Button plain>Get the code snippets</Button>
                </Layout>
                {/* -------------------------------- */}
              </Card.Section>
            </Card>
          </Layout.Section>
        </Layout>

        <Layout>
          <Layout.Section>
            <Card sectioned>
              <Card.Section>
                <Stack alignment="center">
                  <Stack.Item fill>
                    <DisplayText size="extraLarge">
                      Final information
                    </DisplayText>
                  </Stack.Item>
                  <Stack.Item>
                    <div style={{ height: "100px" }}>
                      <Pagination
                        hasPrevious
                        previousKeys={[74]}
                        onPrevious={() => {
                          console.log("Previous");
                        }}
                        hasNext
                        nextKeys={[75]}
                        onNext={() => {
                          console.log("Next");
                        }}
                      />
                    </div>
                  </Stack.Item>
                </Stack>
              </Card.Section>
              <Card.Section>
                {/* ------------------------------------ */}
                <TextContainer spacing="loose">
                  <Layout section={true}>
                    <Stack alignment="center">
                      <Layout.Section>
                        <Heading element="h1">File naming</Heading>
                        <br />
                      </Layout.Section>
                    </Stack>

                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin eros sapien, lacinia at lacus sit amet, aliquet
                      malesuada diam. Integer congue nibh non ipsum ornare
                      iaculis. Nulla ut scelerisque tortor. Nulla pharetra sem
                      rutrum diam ornare congue. Fusce eget ullamcorper massa.
                      Mauris porttitor dictum dapibus. Ut faucibus varius
                      pharetra. Proin sed rutrum odio.
                    </p>
                  </Layout>
                </TextContainer>
                <br />
                <hr />
                <br />
                {/* ------------------------------------ */}
                <TextContainer spacing="loose">
                  <Layout section={true}>
                    <Stack alignment="center">
                      <Layout.Section>
                        <Heading element="h1">
                          Information about the trial version
                        </Heading>
                        <br />
                      </Layout.Section>
                    </Stack>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin eros sapien, lacinia at lacus sit amet, aliquet
                      malesuada diam. Integer congue nibh non ipsum ornare
                      iaculis. Nulla ut scelerisque tortor. Nulla pharetra sem
                      rutrum diam ornare congue. Fusce eget ullamcorper massa.
                      Mauris porttitor dictum dapibus. Ut faucibus varius
                      pharetra. Proin sed rutrum odio.
                    </p>
                  </Layout>
                </TextContainer>
                <br />
                <br />
                {/* -------------------------------- */}
                <Layout>
                  <Button size="large" primary={true}>
                    Upload image from pc
                  </Button>
                </Layout>
                {/* -------------------------------- */}
              </Card.Section>
            </Card>
          </Layout.Section>
        </Layout>
      </Page>
    );
  }
}

export default Index;
