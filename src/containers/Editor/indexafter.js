import React, { useState, useEffect } from "react";
import grapesjs from "grapesjs";
import gjsBlockBasic from "grapesjs-blocks-basic";
import "grapesjs/dist/css/grapes.min.css";
import "./grapes.scss";
import { Link, useParams } from "react-router-dom";
import { API_HOST, get_page } from "../../api_utils";
import axios from "axios";
import {
  deviceManager,
  layerManager,
  panels,
  selectorManager,
  styleManager,
  traitManager,
} from "./geditor_utils";
import $ from "jquery";

const Page = (props) => {
  const [editor, seteditor] = useState(null);
  const [dataa, setDataa] = useState([]);
  const [asset, setAsset] = useState([]);
  const { pageId } = useParams();
  const loadd = async () => {
    const data = await get_page(pageId);
    setDataa([...dataa, data]);
    console.log(dataa);
  };

  useEffect(() => {
    async function getAllPages() {
      try {
        const response = await axios.get(`${API_HOST}/assest`);
        setAsset(response.data);
      } catch (error) {
        console.log("error :>>", error);
      }
    }
    getAllPages();
  }, []);

  useEffect(() => {
    $(".panel__devices").html("");
    $(".panel__basic-actions").html("");
    const editor = grapesjs.init({
      container: "#editor",
      blockManager: {
        appendTo: "#blocks",
      },
      assetManager: {
        custom: {
          open(props) {
            console.log("holy shit");
          },
        },
        assets: asset,
        fuck: console.log("shit", asset),
        upload: false,
      },
      styleManager: styleManager,
      layerManager: layerManager,
      traitManager: traitManager,
      selectorManager: selectorManager,
      panels: panels,
      deviceManager: deviceManager,

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
        id: pageId,
        urlStore: `${API_HOST}/edit/${pageId}/content`,
        urlLoad: `${API_HOST}/edit/${pageId}/content`,
      },

      plugins: [gjsBlockBasic],
      plugins0pts: {
        gjsBlockBasic: {},
      },
    });
    // Commands
    editor.Commands.add("set-device-desktop", {
      run: (editor) => editor.setDevice("Desktop"),
    });
    editor.Commands.add("set-device-mobile", {
      run: (editor) => editor.setDevice("Mobile"),
    });

    editor.Commands.add("show-document-log", {
      run: (editor) => {
        let a = editor.Canvas;

        loadd();
        console.log(editor.Canvas.getDocument());
        console.log(editor.StorageManager.getConfig());
        console.log(editor.getCss());
      },
    });
    editor.Commands.add("cmd-preview", {
      run: (editor) => {
        editor.store();
        const win = window.open(`/page/${pageId}`, "_blank");
        win.focus();
      },
    });

    seteditor(editor);
  }, [pageId]);
  return (
    <div className="Containerr">
      <div id="navbar" className="sidenav d-flex flex-column overflow-scroll">
        <nav className="navbar navbar-light">
          <div className="container-fluid">
            <span className="navbar-brand mb-0 h3 logo">
              {console.log(asset)}
            </span>
          </div>
        </nav>

        <div className="">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="block-tab"
                data-bs-toggle="tab"
                data-bs-target="#block"
                type="button"
                role="tab"
                aria-controls="block"
                aria-selected="true"
              >
                <i className="fa fa-cubes"></i>
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="layer-tab"
                data-bs-toggle="tab"
                data-bs-target="#layer"
                type="button"
                role="tab"
                aria-controls="layer"
                aria-selected="false"
              >
                <i className="fa fa-tasks"></i>
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="style-tab"
                data-bs-toggle="tab"
                data-bs-target="#style"
                type="button"
                role="tab"
                aria-controls="style"
                aria-selected="false"
              >
                <i className="fa fa-paint-brush"></i>
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="trait-tab"
                data-bs-toggle="tab"
                data-bs-target="#trait"
                type="button"
                role="tab"
                aria-controls="trait"
                aria-selected="false"
              >
                <i className="fa fa-cog"></i>
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="trait-tab"
                data-bs-toggle="tab"
                data-bs-target="#trait"
                type="button"
                role="tab"
                aria-controls="trait"
                aria-selected="false"
              >
                <i className="far fa-cog"></i>
              </button>
            </li>
          </ul>
          <div className="tab-content">
            <div
              className="tab-pane fade show active"
              id="block"
              role="tabpanel"
              aria-labelledby="block-tab"
            >
              <div id="blocks"></div>
            </div>
            <div
              className="tab-pane fade"
              id="layer"
              role="tabpanel"
              aria-labelledby="layer-tab"
            >
              <div id="layers-container"></div>
            </div>
            <div
              className="tab-pane fade"
              id="style"
              role="tabpanel"
              aria-labelledby="style-tab"
            >
              <div id="styles-container"></div>
            </div>
            <div
              className="tab-pane fade"
              id="trait"
              role="tabpanel"
              aria-labelledby="trait-tab"
            >
              <div id="trait-container"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-content">
        <nav className="navbar navbar-light">
          <div className="container-fluid">
            <div className="panel__devices"></div>
            <div className="panel__basic-actions"></div>
          </div>
        </nav>
        <div id="editor"></div>
      </div>
    </div>
  );
};

export default Page;
