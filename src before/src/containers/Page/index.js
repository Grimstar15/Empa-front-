import React, { useState, useEffect } from "react";
import grapesjs from "grapesjs";
import gjsPresetWebpage from "grapesjs-preset-webpage";
import "grapesjs/dist/css/grapes.min.css";
import classes from "./grapes.module.scss";
import { useParams } from "react-router-dom";
const Page = () => {
  const [editor, seteditor] = useState(null);
  const { pageId } = useParams();
  console.log("pageId :>>", pageId);
  useEffect(() => {
    const editor = grapesjs.init({
      container: "#editor",

      storageManager: {
        type: "remote",
        stepsBeforeSave: 3,
        contentTypeJson: true,
        storeComponents: true,
        storeStyles: true,
        storeHtml: true,
        storeCss: true,
        headers: {
          "Content-Type": "application/json",
        },
        id: "mycustom-",
        urlStore: `/page/123`,
        urlLoad: `/page/123`,
      },
      plugins: [gjsPresetWebpage],
      plugins0pts: {
        gjsPresetWebpage: {},
      },
    });
    seteditor(editor);
  }, []);
  return (
    <div className={classes.Container}>
      <div id="editor"></div>
    </div>
  );
};

export default Page;
