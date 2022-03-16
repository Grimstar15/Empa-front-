export const deviceManager = {
  devices: [
    {
      name: "Desktop",
      width: "",
    },
    {
      name: "Mobile",
      width: "320px",
      widthMedia: "480px",
    },
  ],
};
export const styleManager = {
  appendTo: "#styles-container",
  sectors: [
    {
      name: "Dimension",
      open: false,
      buildProps: ["width", "min-height", "padding"],
      properties: [
        {
          type: "integer",
          name: "The width",
          property: "width",
          units: ["px", "%"],
          defaults: "auto",
          min: 0,
        },
      ],
    },
    {
      name: "Extra",
      buildProps: ["background-color", "box-shadow"],
    },
  ],
};
export const layerManager = {
  appendTo: "#layers-container",
};
export const traitManager = {
  appendTo: "#trait-container",
};

export const selectorManager = {
  appendTo: "#styles-container",
};
export const panels = {
  defaults: [
    {
      id: "basic-actions",
      el: ".panel__basic-actions",
      buttons: [
        {
          id: "visibility",
          active: true, // active by default

          className: "btn-toggle-borders",
          label: '<i class="fa fa-clone"></i>',
          command: "sw-visibility", // Built-in command
        },
        {
          id: "preview",
          togglable: false,
          className: "btn-toggle-borders",
          label: '<i class="fa fa-eye"></i>',
          command: "cmd-preview", // Built-in command
        },
        {
          id: "command",
          togglable: false,
          className: "btn-toggle-borders",
          label: '<i class="fa fa-code"></i>',
          command: "show-document-log", // Built-in command
        },
      ],
    },
    {
      id: "panel-devices",
      el: ".panel__devices",
      buttons: [
        {
          id: "device-desktop",
          label: '<i class="fa fa-television"></i>',
          command: "set-device-desktop",
          active: true,
          togglable: false,
        },

        {
          id: "device-mobile",
          label: '<i class="fa fa-mobile"></i>',
          command: "set-device-mobile",
          togglable: false,
        },
      ],
    },
  ],
};
