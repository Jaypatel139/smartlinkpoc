import React from "react";
import Smartlink from "../components/Smartlink";

// import Npmpoc from "../components/Npmpoc";
// import PreviewSM from "../components/previews/PreviewSM";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Smartlink",
  component: Smartlink,
  argTypes: {
    preview: {
      options: ['PreviewXS', 'PreviewSM','PreviewL'],
      control: { type: 'radio' }
    },
  }
};

//👇 We create a “template” of how args map to rendering
const previewTemplate = (args) => <Smartlink {...args} />;


let SmartlinkDemo = previewTemplate.bind({});
SmartlinkDemo.args = { url:"https://projects.invisionbeta.com/share/ES9GV36W#/screens", preview:"PreviewXS" };
export {SmartlinkDemo};