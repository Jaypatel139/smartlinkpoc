import React from "react";
import Smartlink from "../components/Smartlink";

// import Npmpoc from "../components/Npmpoc";
// import PreviewSM from "../components/previews/PreviewSM";

//👇 This default export determines where your story goes in the story list
export default {
  title: "Smartlink",
  component: Smartlink,
};

//👇 We create a “template” of how args map to rendering
const Template = () => <Smartlink />;

export const SmartLink = Template.bind({});
