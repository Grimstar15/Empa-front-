import React, { useState, useEffect } from "react";
import grapesjs from "grapesjs";
import gjsPresetWebpage from "grapesjs-preset-newsletter";
import "grapesjs/dist/css/grapes.min.css";
import "./grapes.scss";
import { useParams, useLocation } from "react-router-dom";
import { API_HOST, assest_upload } from "../../api_utils";
import axios from "axios";
const Page = () => {
  const location = useLocation();
  const props = location.state;
  const [editor, seteditor] = useState(null);
  const [asset, setAsset] = useState([]);
  const [jdata, setJdata] = useState([]);
  const [data, setData] = useState([]);
  const { pageId } = useParams();
  // useEffect(() => {
  //   const editor = grapesjs.init({
  //     container: "#editor",
  //     assetManager: {
  //       assets: [
  //         "http://placehold.it/350x250/78c5d6/fff/image1.jpg",
  //         // Pass an object with your properties
  //         {
  //           type: "image",
  //           src: "http://placehold.it/350x250/459ba8/fff/image2.jpg",
  //           height: 350,
  //           width: 250,
  //           name: "displayName",
  //         },
  //         {
  //           // As the 'image' is the base type of assets, omitting it will
  //           // be set as `image` by default
  //           src: "http://placehold.it/350x250/79c267/fff/image3.jpg",
  //           height: 350,
  //           width: 250,
  //           name: "displayName",
  //         },
  //       ],
  //     },
  //   });
  //   seteditor({ ...editor, editor });
  // }, [data]);
  useEffect(() => {
    console.log(location.state);
    const editor = grapesjs.init({
      container: "#editor",

      storageManager: {
        type: "remote",
        stepsBeforeSave: 1,
        contentTypeJson: true,
        storeComponents: true,
        storeStyles: true,
        storeHtml: true,
        storeCss: true,

        headers: {
          "Content-Type": "application/json",
        },
        id: pageId,
        urlStore: `${API_HOST}/newsEdit/${pageId}/content`,
        urlLoad: `${API_HOST}/newsEdit/${pageId}/content`,
        params: { token: localStorage.getItem("token") },
      },
      assetManager: {
        // Default assets

        // Style prefix
        stylePrefix: "am-",
        assets: data,
        // Url where uploads will be send, set false to disable upload
        // upload: "http://localhost/grapeJs/src/file_uploader/fileUpload.php",

        // Text on upload input
        uploadText: "Drop files here or click to sadsd",

        // Label for the add button
        addBtnText: "Add image",

        // Custom uploadFile function
        // @example
        uploadFile: function (e) {
          var files = e.dataTransfer ? e.dataTransfer.files : e.target.files;
          // ...send somewhere
          console.log(files);

          var formData = new FormData();

          for (var i in files) {
            formData.append("file", files[i]);
            formData.append("title", props.item.title);
            formData.append("token", localStorage.getItem("token"));
          }

          axios
            .post(`${API_HOST}/newsAsset/${pageId}`, formData)
            .then((response) => {
              setData(response.data);
            })
            .catch((error) => {
              console.log("Eeee", error.message);
            });
        },

        //  uploadFile: '',
      },
      plugins: [gjsPresetWebpage],
      plugins0pts: {
        gjsPresetWebpage: {},
      },
    });
    seteditor(editor);
    editor.addComponents(``);
  }, [data]);
  return (
    <div className="Container">
      <div id="editor">{console.log(data)}</div>
    </div>
  );
};

export default Page;
