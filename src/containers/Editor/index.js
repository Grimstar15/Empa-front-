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
        urlStore: `${API_HOST}/edit/${pageId}/content`,
        urlLoad: `${API_HOST}/edit/${pageId}/content`,
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
            formData.append("title", props.page.title);
            formData.append("token", localStorage.getItem("token"));
          }

          axios
            .post(`${API_HOST}/asset/${pageId}`, formData)
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
    editor.addComponents(`<div id="i47x" style="box-sizing: border-box; padding: 10px;">
    <div id="iqyj" style="box-sizing: border-box; padding: 10px;">
      <p id="i6ie8" class="p1" style="box-sizing: border-box;">
        <br style="box-sizing: border-box;">
      </p>
      <img id="iqe7v" draggable="true" src="http://13.76.216.31:5000/static/img/training/Active-Directory-and-Domain-Control/AD.png" class="gjs-selected" style="box-sizing: border-box; color: black; width: 713px; height: 402px;" width="713" height="402">
      <p id="i6ie8-2" class="p1" style="box-sizing: border-box;">Байгууллагын нэгдсэн удирдлагын систем болох Microsoft Active Directory системийн хэрхэн суулгаж тохируулдаг талаар богино хугацаанд системтэй мэдлэг олгох сургалт юм. Microsoft Active Directory системийн байгууллагад нэвтрүүлснээр мэдээлэл технологийн ажлын бүтээмж, компьютерүүдийн аюулгүй байдал сайжрахаас гадна Microsoft шийдлүүдийг ашиглахад боломжуудыг нээж өгнө. 
      </p>
      <p id="ifyfb" class="p1" style="box-sizing: border-box; margin: 0px 0px 25px; padding: 0px; font-family: Roboto; font-size: 15px;">
        <span id="i5g6c" style="box-sizing: border-box; margin: 0px; padding: 0px; font-weight: 700;">Cургалтын үргэлжлэх хугацаа: 16 цаг</span>
      </p>
      <p id="igfzj" style="box-sizing: border-box; margin: 0px 0px 25px; padding: 0px; font-family: Roboto; font-size: 15px;">
        <span id="i5sdi" style="box-sizing: border-box; margin: 0px; padding: 0px; font-weight: 700;">Багш: Microsoft 365 certified</span>
      </p>
      <p id="isk7j" class="p1" style="box-sizing: border-box; margin: 0px 0px 25px; padding: 0px; font-family: Roboto; font-size: 15px;">
        <span id="i7c0a" style="box-sizing: border-box; margin: 0px; padding: 0px; font-weight: 700;">Сургалтын төлбөр: 385.000 ₮</span>
      </p>
      <p id="i334" style="box-sizing: border-box;">
        <span id="ix8ha" style="box-sizing: border-box; font-family: Roboto; font-size: 15px; font-weight: 700;">Сургалтын хэлбэр: танхим/цахим</span>
      </p>
      <p id="i334-2" style="box-sizing: border-box; margin: 0px 0px 25px; padding: 0px; font-family: Roboto; font-size: 15px;">
        <b style="box-sizing: border-box;">Сургалтын агуулга:
        </b>
      </p>
      <ul id="immo" style="box-sizing: border-box; margin: 0px 0px 10px 25px; padding: 0px; font-family: Roboto; font-size: 15px;">
        <li id="ilkj-3" style="box-sizing: border-box;">Introducing Windows Server
        </li>
      </ul>
      <div style="box-sizing: border-box;">Windows Server 2012: Overview 
      </div>
      <div style="box-sizing: border-box;">Windows Server 2012 Editions 
      </div>
      <div style="box-sizing: border-box;">What Is Server Core? 
      </div>
      <div style="box-sizing: border-box;">What are Server Roles and Features? 
      </div>
      <div style="box-sizing: border-box;">What is licensing? 
      </div>
      <div style="box-sizing: border-box;">Server upgrading and migration 
      </div>
      <div style="box-sizing: border-box;">What Are the Graphical Administration Tools? 
      </div>
      <div style="box-sizing: border-box;">What Is the Command-line Administration Tools? 
      </div>
      <div style="box-sizing: border-box;">How to monitor windows servers?
      </div>
      <ul style="box-sizing: border-box;">
        <li id="ilkj-2" style="box-sizing: border-box; margin: 0px; padding: 0px;">Active Directory Оршил
        </li>
      </ul>
      <div style="box-sizing: border-box;">Active Directory гэж юу вэ? 
      </div>
      <div style="box-sizing: border-box;">Physical &amp; Logical structure (бүтэц) ? 
      </div>
      <div style="box-sizing: border-box;">Active Directory partition бүтэц. 
      </div>
      <div style="box-sizing: border-box;">Domain, Domain Controller, Site, Forest, Trust ойлголтуудын тайлбар. 
      </div>
      <div style="box-sizing: border-box;">FSMO ямар үүрэг гүйцэтгэдэг вэ ? 
      </div>
      <div style="box-sizing: border-box;">Schema &amp; Glabol Catalog ойлголтуудын тайлбар. 
      </div>
      <div style="box-sizing: border-box;">Domain &amp; Forest Functional Levels ямар үүрэгтэй вэ? 
      </div>
      <div style="box-sizing: border-box;">DNS ач холбогдол?
      </div>
      <div style="box-sizing: border-box;">Implementing Advanced File Services
      </div>
      <ul style="box-sizing: border-box;">
        <li id="ilkj" style="box-sizing: border-box;">Hyper-V 
        </li>
      </ul>
      <div style="box-sizing: border-box;">What is Server Virtualization? 
      </div>
      <div style="box-sizing: border-box;">What is Hyper-V? 
      </div>
      <div style="box-sizing: border-box;">Hyper-v Licensing 
      </div>
      <div style="box-sizing: border-box;">Hyper-v 2012 Scalability 
      </div>
      <div style="box-sizing: border-box;">Benefits of Hyper-V
      </div>
    </div>Insert your text here
  </div>`);
  }, [data]);
  return (
    <div className="Container">
      <div id="editor">{console.log(data)}</div>
    </div>
  );
};

export default Page;
