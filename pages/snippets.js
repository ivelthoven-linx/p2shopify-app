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
  Pagination,
  Caption,
  Popover,
  ActionList,
  Navigation,
  Frame
} from "@shopify/polaris";
import navItems from "../util/navItems";
import nav from "../util/nav";
import React from "react";
import SubNav from "../components/SubNav";
import CodeCard from "../components/CodeCard";

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
        // fullWidth
        forceRender={true}
        secondaryActions={[{ content: "Report Issue" }]}
        title="Snippets"
        separator
      >
        <SubNav items={this.state.items}>
          <TextContainer spacing="loose">
            <DisplayText size="large">Hover-over Effect</DisplayText>
            <p>
              This is used for the Product Listing Page. This will allow you to
              have a second image shown on hover for each product which has the
              corresponding hover-over image uploaded.{" "}
            </p>
            <Heading>Adding JQuery</Heading>
            <p>
              For our Javascript code to work we need Jquery. Add this snippet
              to head of html/liquid file.
            </p>
            <CodeCard>
              {`<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>`}
            </CodeCard>
            <Heading>Adding Hover-over Effect</Heading>
            <p>
              This following code gets all images for the products on this page
              and sees if they have an image for hover-over effect. If so it
              adds the effect to that product by appending the image and using
              JQuery for the mouse event.
              <br />
              <br /> Add the following code to collection-template.liquid at the
              end.
            </p>
            <CodeCard>
              {`
<script type="text/javascript">
  const products = {
  {% for product in collection.products %}
    {{product.id}} : { 
    images: [
    {% for image in product.images %}
    {% assign just_url = image | img_url %}
      {% assign url_pieces = just_url | split: "/" %}
        {% assign url_pieces_size = url_pieces | size | minus: 1 %}
      '{{just_url}}',
    {% endfor %}
    ]
    },
  {% endfor %}
      };
  console.log(products);
  
  const wrappers = $(".grid-view-item");
  wrappers.each(i => {
    const wrapper = $(wrappers[i]);
    const img = wrapper.find(".product-card__image-wrapper img");
    const classes = img.attr("class")
//     const productId = "gid://shopify/Product/" + img.data("linx-app-prod-id")
    
    //$.get(\`https://lx3ip.sse.codesandbox.io/check/hover?product_id=\${productId}\`, function(data) {
    
    const data = products[img.data("linx-app-prod-id")];
    //console.log(data);
    const hoverUrl = data.images.find((elm)=> { return elm.includes('hover') });
    
      if (hoverUrl) {
        img.before(\`<img 
      id="linx_app_hover_\${img.data("linx-app-prod-id")}"
          class="\${classes}" 
style="display: none;max-width:\${img.css("max-width")};max-height:\${img.css(
                      "max-height"
                    )};"
          src="\${hoverUrl}"
      size="250px"
      data-widths="[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]"	
      data-sizes="auto" 
    >\`);
          
    
        const img2 = $(\`#linx_app_hover_\${img.data("linx-app-prod-id")}\`);
        let active = false;
        wrapper.mouseover(function() {
          if (!active) {
            active = true;
            img.fadeOut("slow");
            img2.fadeIn("slow",function() {
              active=false
            })
          }});
        wrapper.mouseout(function() {
          img2.fadeOut("slow", function() {
            console.log(img2);
//               img2.style.display = 'none';
            });
          img.fadeIn("slow");
        });
      }
    //});
  });
  console.log("linx loaded");
</script>`}
            </CodeCard>
          </TextContainer>{" "}
        </SubNav>
      </Page>
    );
  }
}

export default Index;
