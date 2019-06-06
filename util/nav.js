exports.getSelectedItems = (url, items) => {
  if (url) {
    const url_parts = url.split("/");
    // Get the last piece of URL
    let route = url_parts[url_parts.length - 1].split("?")[0];
    const map = items.map(item => {
      const itemUrlArr = item.url.split("/");
      if (itemUrlArr[itemUrlArr.length - 1] === route) {
        item.selected = true;
      }
      return item;
    });
    // console.log(map);
    return map;
  }
};
