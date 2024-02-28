export const MENUITEMS = [
  {
    menutitle: "Main",
    Items: [
      {
        title: "Dashboard",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="side-menu__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.586 6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z" />
          </svg>
        ),
        type: "link",
        selected: false,
        active: false,
        path: `${import.meta.env.BASE_URL}dashboard/dashboard3`,
      },
      {
        title: "My Wallet",
        icon: <i className="fa fa-wallet side-menu__icon"></i>,
        type: "link",
        selected: false,
        active: false,
        path: `${import.meta.env.BASE_URL}wallet`,
      },
      {
        title: "Invest",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="side-menu__icon"
            width="24"
            height="24"
            viewBox="0 0 576 512"
          >
            <path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z" />
          </svg>
        ),
        type: "link",
        selected: false,
        active: false,
        path: `${import.meta.env.BASE_URL}invest`,
      },
      {
        title: "Add Fund",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="side-menu__icon"
            width="24"
            height="24"
            viewBox="0 0 512 512"
          >
            <path d="M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84 88c0-11-9-20-20-20s-20 9-20 20v14c-7.6 1.7-15.2 4.4-22.2 8.5c-13.9 8.3-25.9 22.8-25.8 43.9c.1 20.3 12 33.1 24.7 40.7c11 6.6 24.7 10.8 35.6 14l1.7 .5c12.6 3.8 21.8 6.8 28 10.7c5.1 3.2 5.8 5.4 5.9 8.2c.1 5-1.8 8-5.9 10.5c-5 3.1-12.9 5-21.4 4.7c-11.1-.4-21.5-3.9-35.1-8.5c-2.3-.8-4.7-1.6-7.2-2.4c-10.5-3.5-21.8 2.2-25.3 12.6s2.2 21.8 12.6 25.3c1.9 .6 4 1.3 6.1 2.1l0 0 0 0c8.3 2.9 17.9 6.2 28.2 8.4V424c0 11 9 20 20 20s20-9 20-20V410.2c8-1.7 16-4.5 23.2-9c14.3-8.9 25.1-24.1 24.8-45c-.3-20.3-11.7-33.4-24.6-41.6c-11.5-7.2-25.9-11.6-37.1-15l0 0-.7-.2c-12.8-3.9-21.9-6.7-28.3-10.5c-5.2-3.1-5.3-4.9-5.3-6.7c0-3.7 1.4-6.5 6.2-9.3c5.4-3.2 13.6-5.1 21.5-5c9.6 .1 20.2 2.2 31.2 5.2c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-6.5-1.7-13.7-3.4-21.1-4.7V216z" />
          </svg>
        ),
        type: "link",
        selected: false,
        active: false,
        path: `${import.meta.env.BASE_URL}addFund`,
      },
      {
        title: "Withdraw Fund",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="side-menu__icon"
            width="24"
            height="24"
            viewBox="0 0 576 512"
          >
            <path d="M312 24V34.5c6.4 1.2 12.6 2.7 18.2 4.2c12.8 3.4 20.4 16.6 17 29.4s-16.6 20.4-29.4 17c-10.9-2.9-21.1-4.9-30.2-5c-7.3-.1-14.7 1.7-19.4 4.4c-2.1 1.3-3.1 2.4-3.5 3c-.3 .5-.7 1.2-.7 2.8c0 .3 0 .5 0 .6c.2 .2 .9 1.2 3.3 2.6c5.8 3.5 14.4 6.2 27.4 10.1l.9 .3c11.1 3.3 25.9 7.8 37.9 15.3c13.7 8.6 26.1 22.9 26.4 44.9c.3 22.5-11.4 38.9-26.7 48.5c-6.7 4.1-13.9 7-21.3 8.8V232c0 13.3-10.7 24-24 24s-24-10.7-24-24V220.6c-9.5-2.3-18.2-5.3-25.6-7.8c-2.1-.7-4.1-1.4-6-2c-12.6-4.2-19.4-17.8-15.2-30.4s17.8-19.4 30.4-15.2c2.6 .9 5 1.7 7.3 2.5c13.6 4.6 23.4 7.9 33.9 8.3c8 .3 15.1-1.6 19.2-4.1c1.9-1.2 2.8-2.2 3.2-2.9c.4-.6 .9-1.8 .8-4.1l0-.2c0-1 0-2.1-4-4.6c-5.7-3.6-14.3-6.4-27.1-10.3l-1.9-.6c-10.8-3.2-25-7.5-36.4-14.4c-13.5-8.1-26.5-22-26.6-44.1c-.1-22.9 12.9-38.6 27.7-47.4c6.4-3.8 13.3-6.4 20.2-8.2V24c0-13.3 10.7-24 24-24s24 10.7 24 24zM568.2 336.3c13.1 17.8 9.3 42.8-8.5 55.9L433.1 485.5c-23.4 17.2-51.6 26.5-80.7 26.5H192 32c-17.7 0-32-14.3-32-32V416c0-17.7 14.3-32 32-32H68.8l44.9-36c22.7-18.2 50.9-28 80-28H272h16 64c17.7 0 32 14.3 32 32s-14.3 32-32 32H288 272c-8.8 0-16 7.2-16 16s7.2 16 16 16H392.6l119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5zM193.6 384l0 0-.9 0c.3 0 .6 0 .9 0z" />
          </svg>
        ),
        type: "link",
        selected: false,
        active: false,
        path: `${import.meta.env.BASE_URL}withdraw_Fund`,
      },
      {
        title: "Contact Support",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="side-menu__icon"
            width="24"
            height="24"
            viewBox="0 0 576 512"
          >
            <path d="M96 0C60.7 0 32 28.7 32 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H96zM208 288h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H144c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM512 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V80zM496 192c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm16 144c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V336z" />
          </svg>
        ),
        type: "link",
        selected: false,
        active: false,
        path: `${import.meta.env.BASE_URL}contact_support`,
      },
    ],
  },

  // {
  //   menutitle: "WEB APPS",
  //   Items: [
  //     {
  //       title: "Apps",
  //       icon: (
  //         <svg
  //           xmlns="http://www.w3.org/2000/svg"
  //           className="side-menu__icon"
  //           width="24"
  //           height="24"
  //           viewBox="0 0 24 24"
  //         >
  //           <path d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm11-6h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 6h-4V5h4v4zm-9 4H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-1 6H5v-4h4v4zm8-6c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z" />
  //         </svg>
  //       ),
  //       type: "sub",
  //       selected: false,
  //       active: false,
  //       children: [
  //         {
  //           path: `${import.meta.env.BASE_URL}app/cards`,
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Cards",
  //         },
  //         {
  //           path: `${import.meta.env.BASE_URL}app/rangeslider`,
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Range-slider",
  //         },
  //         {
  //           path: `${import.meta.env.BASE_URL}app/calendar`,
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Calendar",
  //         },
  //         {
  //           path: `${import.meta.env.BASE_URL}app/contacts`,
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Contacts",
  //         },
  //         {
  //           path: `${import.meta.env.BASE_URL}app/imagecompare`,
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Image-compare",
  //         },
  //         {
  //           path: `${import.meta.env.BASE_URL}app/notification`,
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Notification",
  //         },
  //         {
  //           path: `${import.meta.env.BASE_URL}app/widgetnotification`,
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Widget-notification",
  //         },
  //         {
  //           path: `${import.meta.env.BASE_URL}app/treeview`,
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Treeview",
  //         },
  //         {
  //           path: `${import.meta.env.BASE_URL}app/filemanager`,
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "File-manager",
  //         },
  //         {
  //           path: `${import.meta.env.BASE_URL}app/filemanager1`,
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "File-manager1",
  //         },
  //         {
  //           path: `${import.meta.env.BASE_URL}app/filedetails`,
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "File-details",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Elements",
  //       icon: (
  //         <svg
  //           xmlns="http://www.w3.org/2000/svg"
  //           className="side-menu__icon"
  //           width="24"
  //           height="24"
  //           viewBox="0 0 24 24"
  //         >
  //           <path d="M20 17V7c0-2.168-3.663-4-8-4S4 4.832 4 7v10c0 2.168 3.663 4 8 4s8-1.832 8-4zM12 5c3.691 0 5.931 1.507 6 1.994C17.931 7.493 15.691 9 12 9S6.069 7.493 6 7.006C6.069 6.507 8.309 5 12 5zM6 9.607C7.479 10.454 9.637 11 12 11s4.521-.546 6-1.393v2.387c-.069.499-2.309 2.006-6 2.006s-5.931-1.507-6-2V9.607zM6 17v-2.393C7.479 15.454 9.637 16 12 16s4.521-.546 6-1.393v2.387c-.069.499-2.309 2.006-6 2.006s-5.931-1.507-6-2z" />
  //         </svg>
  //       ),
  //       type: "sub",
  //       selected: false,
  //       active: false,
  //       children: [
  //         {
  //           path: `${import.meta.env.BASE_URL}elements/alerts`,
  //           title: "Alerts",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //         },
  //         {
  //           path: `${import.meta.env.BASE_URL}elements/avatar`,
  //           title: "Avatar",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //         },
  //         {
  //           path: `${import.meta.env.BASE_URL}elements/breadcrumbs`,
  //           title: "Breadcrumbs",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //         },
  //         {
  //           path: `${import.meta.env.BASE_URL}elements/buttons`,
  //           title: "Buttons",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //         },
  //         {
  //           path: `${import.meta.env.BASE_URL}elements/badge`,
  //           title: "Badges",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //         },
  //         {
  //           path: `${import.meta.env.BASE_URL}elements/dropdown`,
  //           title: "Dropdown",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //         },
  //         {
  //           path: `${import.meta.env.BASE_URL}elements/thumbnails`,
  //           title: "Thumbnails",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //         },
  //         {
  //           path: `${import.meta.env.BASE_URL}elements/listgroup`,
  //           title: "List Group",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //         },
  //         {
  //           path: `${import.meta.env.BASE_URL}elements/navigation`,
  //           title: "Navigation",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //         },
  //         {
  //           path: `${import.meta.env.BASE_URL}elements/images`,
  //           title: "Images",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //         },
  //         {
  //           path: `${import.meta.env.BASE_URL}elements/pagination`,
  //           title: "Pagination",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //         },
  //         {
  //           path: `${import.meta.env.BASE_URL}elements/popover`,
  //           title: "Popover",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //         },
  //         {
  //           path: `${import.meta.env.BASE_URL}elements/progress`,
  //           title: "Progress",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //         },
  //         {
  //           path: `${import.meta.env.BASE_URL}elements/spinners`,
  //           title: "Spinners",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //         },
  //         {
  //           path: `${import.meta.env.BASE_URL}elements/mediaobject`,
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Media Object",
  //         },
  //         {
  //           path: `${import.meta.env.BASE_URL}elements/typography`,
  //           title: "Typography",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //         },
  //         {
  //           path: `${import.meta.env.BASE_URL}elements/tooltip`,
  //           title: "Tooltip",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //         },
  //         {
  //           path: `${import.meta.env.BASE_URL}elements/toast`,
  //           title: "Toast",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //         },
  //         {
  //           path: `${import.meta.env.BASE_URL}elements/tags`,
  //           title: "Tags",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //         },

  //         {
  //           path: `${import.meta.env.BASE_URL}elements/tabs`,
  //           title: "Tabs",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //         },
  //       ],
  //     },
  //     {
  //       title: "Advanced UI",
  //       icon: (
  //         <svg
  //           xmlns="http://www.w3.org/2000/svg"
  //           className="side-menu__icon"
  //           width="24"
  //           height="24"
  //           viewBox="0 0 24 24"
  //         >
  //           <path d="M20.995 6.9a.998.998 0 0 0-.548-.795l-8-4a1 1 0 0 0-.895 0l-8 4a1.002 1.002 0 0 0-.547.795c-.011.107-.961 10.767 8.589 15.014a.987.987 0 0 0 .812 0c9.55-4.247 8.6-14.906 8.589-15.014zM12 19.897C5.231 16.625 4.911 9.642 4.966 7.635L12 4.118l7.029 3.515c.037 1.989-.328 9.018-7.029 12.264z" />
  //           <path d="m11 12.586-2.293-2.293-1.414 1.414L11 15.414l5.707-5.707-1.414-1.414z" />
  //         </svg>
  //       ),
  //       type: "sub",
  //       selected: false,
  //       bookmark: true,
  //       active: false,
  //       children: [
  //         {
  //           path: `${import.meta.env.BASE_URL}advancedui/accordion`,
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Accordions",
  //         },
  //         {
  //           path: `${import.meta.env.BASE_URL}advancedui/carousel`,
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Carousel",
  //         },
  //         {
  //           path: `${import.meta.env.BASE_URL}advancedui/collapse`,
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Collapse",
  //         },
  //         {
  //           path: `${import.meta.env.BASE_URL}advancedui/modals`,
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Modals",
  //         },
  //         {
  //           path: `${import.meta.env.BASE_URL}advancedui/timeline`,
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Timeline",
  //         },
  //         {
  //           path: `${import.meta.env.BASE_URL}advancedui/sweetalert`,
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Sweet Alert",
  //         },

  //         {
  //           path: `${import.meta.env.BASE_URL}advancedui/ratings`,
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Ratings",
  //         },
  //         {
  //           path: `${import.meta.env.BASE_URL}advancedui/counters`,
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Counters",
  //         },

  //         {
  //           path: `${import.meta.env.BASE_URL}advancedui/search`,
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Search",
  //         },
  //         {
  //           path: `${import.meta.env.BASE_URL}advancedui/userlist`,
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Userlist",
  //         },
  //         {
  //           path: `${import.meta.env.BASE_URL}advancedui/blog`,
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Blog",
  //         },
  //         {
  //           path: `${import.meta.env.BASE_URL}advancedui/blogdetails`,
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Blog-details",
  //         },
  //         {
  //           path: `${import.meta.env.BASE_URL}advancedui/editPost`,
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Edit-post",
  //         },
  //         {
  //           path: `${import.meta.env.BASE_URL}advancedui/fileattachments`,
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "File Attachments",
  //         },
  //       ],
  //     },
  //   ],
  // },

  // {
  //   menutitle: "PAGES",
  //   Items: [
  //     {
  //       title: "Pages",
  //       icon: (
  //         <svg
  //           xmlns="http://www.w3.org/2000/svg"
  //           className="side-menu__icon"
  //           width="24"
  //           height="24"
  //           viewBox="0 0 24 24"
  //         >
  //           <path d="M22 7.999a1 1 0 0 0-.516-.874l-9.022-5a1.003 1.003 0 0 0-.968 0l-8.978 4.96a1 1 0 0 0-.003 1.748l9.022 5.04a.995.995 0 0 0 .973.001l8.978-5A1 1 0 0 0 22 7.999zm-9.977 3.855L5.06 7.965l6.917-3.822 6.964 3.859-6.918 3.852z" />
  //           <path d="M20.515 11.126 12 15.856l-8.515-4.73-.971 1.748 9 5a1 1 0 0 0 .971 0l9-5-.97-1.748z" />
  //           <path d="M20.515 15.126 12 19.856l-8.515-4.73-.971 1.748 9 5a1 1 0 0 0 .971 0l9-5-.97-1.748z" />
  //         </svg>
  //       ),
  //       type: "sub",
  //       selected: false,
  //       active: false,
  //       children: [
  //         {
  //           title: "Authentication",
  //           type: "sub",
  //           selected: false,
  //           active: false,
  //           children: [
  //             {
  //               path: `${import.meta.env.BASE_URL}pages/authentication/sigin`,
  //               title: "Sign In",
  //               type: "link",
  //               active: false,
  //               selected: false,
  //             },
  //             {
  //               path: `${import.meta.env.BASE_URL}pages/authentication/sigup`,
  //               title: "Sign Up",
  //               type: "link",
  //               active: false,
  //               selected: false,
  //             },
  //             {
  //               path: `${
  //                 import.meta.env.BASE_URL
  //               }pages/authentication/forgotpassword`,
  //               title: "Forgot Password",
  //               type: "link",
  //               active: false,
  //               selected: false,
  //             },
  //             {
  //               path: `${
  //                 import.meta.env.BASE_URL
  //               }pages/authentication/resetpassword`,
  //               title: "Reset Password",
  //               type: "link",
  //               active: false,
  //               selected: false,
  //             },
  //             {
  //               path: `${
  //                 import.meta.env.BASE_URL
  //               }pages/authentication/lockscreen`,
  //               title: "Lockscreen",
  //               type: "link",
  //               active: false,
  //               selected: false,
  //             },
  //             {
  //               path: `${
  //                 import.meta.env.BASE_URL
  //               }pages/authentication/underconstruction`,
  //               title: "UnderConstruction",
  //               type: "link",
  //               active: false,
  //               selected: false,
  //             },
  //             {
  //               path: `${
  //                 import.meta.env.BASE_URL
  //               }pages/authentication/404error`,
  //               title: "404 Error",
  //               type: "link",
  //               active: false,
  //               selected: false,
  //             },
  //             {
  //               path: `${
  //                 import.meta.env.BASE_URL
  //               }pages/authentication/500error`,
  //               title: "500 Error",
  //               type: "link",
  //               active: false,
  //               selected: false,
  //             },
  //             {
  //               path: `${
  //                 import.meta.env.BASE_URL
  //               }pages/authentication/501error`,
  //               title: "501 Error",
  //               type: "link",
  //               active: false,
  //               selected: false,
  //             },
  //           ],
  //         },
  //         {
  //           title: "Switcher",
  //           type: "sub",
  //           selected: false,
  //           active: false,
  //           children: [
  //             {
  //               path: `${import.meta.env.BASE_URL}pages/switcher/switcher1`,
  //               title: "Switcher-1",
  //               type: "link",
  //               active: false,
  //               selected: false,
  //             },
  //           ],
  //         },
  //         {
  //           title: "E-Commerce",
  //           type: "sub",
  //           selected: false,
  //           active: false,
  //           children: [
  //             {
  //               path: `${import.meta.env.BASE_URL}pages/ecommerce/shop`,
  //               title: "Shop",
  //               type: "link",
  //               active: false,
  //               selected: false,
  //             },
  //             {
  //               path: `${
  //                 import.meta.env.BASE_URL
  //               }pages/ecommerce/productdetails`,
  //               title: "Product Details",
  //               type: "link",
  //               active: false,
  //               selected: false,
  //             },
  //             {
  //               path: `${import.meta.env.BASE_URL}pages/ecommerce/cart`,
  //               title: "Cart",
  //               type: "link",
  //               active: false,
  //               selected: false,
  //             },
  //             {
  //               path: `${import.meta.env.BASE_URL}pages/ecommerce/checkout`,
  //               title: "Checkout",
  //               type: "link",
  //               active: false,
  //               selected: false,
  //             },
  //             {
  //               path: `${import.meta.env.BASE_URL}pages/ecommerce/wishlist`,
  //               title: "Wish-list",
  //               type: "link",
  //               active: false,
  //               selected: false,
  //             },
  //           ],
  //         },

  //         {
  //           path: `${import.meta.env.BASE_URL}pages/profile`,
  //           title: "Profile",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //         },
  //         {
  //           path: `${import.meta.env.BASE_URL}pages/notificationslist`,
  //           title: "Notification-list",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //         },
  //         {
  //           path: `${import.meta.env.BASE_URL}pages/aboutus`,
  //           title: "About Us",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //         },
  //         {
  //           path: `${import.meta.env.BASE_URL}pages/settings`,
  //           title: "Settings",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //         },
  //         {
  //           title: "Mail",
  //           type: "sub",
  //           selected: false,
  //           active: false,
  //           children: [
  //             {
  //               path: `${import.meta.env.BASE_URL}pages/mail/mail`,
  //               title: "Mail",
  //               type: "link",
  //               active: false,
  //               selected: false,
  //             },
  //             {
  //               path: `${import.meta.env.BASE_URL}pages/mail/mailcompose`,
  //               title: "Mail Compose",
  //               type: "link",
  //               active: false,
  //               selected: false,
  //             },
  //             {
  //               path: `${import.meta.env.BASE_URL}pages/mail/readmail`,
  //               title: "Read-Mail",
  //               type: "link",
  //               active: false,
  //               selected: false,
  //             },
  //             {
  //               path: `${import.meta.env.BASE_URL}pages/mail/mailsettings`,
  //               title: "Mail-Settings",
  //               type: "link",
  //               active: false,
  //               selected: false,
  //             },
  //             {
  //               path: `${import.meta.env.BASE_URL}pages/mail/chat`,
  //               title: "Chat",
  //               type: "link",
  //               active: false,
  //               selected: false,
  //             },
  //           ],
  //         },
  //         {
  //           path: `${import.meta.env.BASE_URL}pages/invoice`,
  //           title: "Invoice",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //         },
  //         {
  //           path: `${import.meta.env.BASE_URL}pages/pricing`,
  //           title: "Pricing",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //         },
  //         {
  //           path: `${import.meta.env.BASE_URL}pages/gallery`,
  //           title: "Gallery",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //         },
  //         {
  //           path: `${import.meta.env.BASE_URL}pages/todotask`,
  //           title: "Todotask",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //         },
  //         {
  //           path: `${import.meta.env.BASE_URL}pages/faqs`,
  //           title: "FAQS",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //         },
  //         {
  //           path: `${import.meta.env.BASE_URL}pages/emptypage`,
  //           title: "Empty Page",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //         },
  //       ],
  //     },
  //     {
  //       title: "Utilities",
  //       icon: (
  //         <svg
  //           xmlns="http://www.w3.org/2000/svg"
  //           className="side-menu__icon"
  //           width="24"
  //           height="24"
  //           viewBox="0 0 24 24"
  //         >
  //           <path d="M12 22c4.879 0 9-4.121 9-9s-4.121-9-9-9-9 4.121-9 9 4.121 9 9 9zm0-16c3.794 0 7 3.206 7 7s-3.206 7-7 7-7-3.206-7-7 3.206-7 7-7zm5.284-2.293 1.412-1.416 3.01 3-1.413 1.417zM5.282 2.294 6.7 3.706l-2.99 3-1.417-1.413z" />
  //           <path d="M11 9h2v5h-2zm0 6h2v2h-2z" />
  //         </svg>
  //       ),
  //       type: "sub",
  //       selected: false,
  //       active: false,
  //       children: [
  //         {
  //           path: `${import.meta.env.BASE_URL}utilities/background`,
  //           title: "Background",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //         },
  //         {
  //           path: `${import.meta.env.BASE_URL}utilities/border`,
  //           title: "Border",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //         },
  //         {
  //           path: `${import.meta.env.BASE_URL}utilities/display`,
  //           title: "Display",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //         },
  //         {
  //           path: `${import.meta.env.BASE_URL}utilities/flex`,
  //           title: "Flex",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //         },
  //         {
  //           path: `${import.meta.env.BASE_URL}utilities/height`,
  //           title: "Height",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //         },
  //         {
  //           path: `${import.meta.env.BASE_URL}utilities/margin`,
  //           title: "Margin",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //         },
  //         {
  //           path: `${import.meta.env.BASE_URL}utilities/padding`,
  //           title: "Padding",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //         },
  //         {
  //           path: `${import.meta.env.BASE_URL}utilities/position`,
  //           title: "Position",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //         },
  //         {
  //           path: `${import.meta.env.BASE_URL}utilities/width`,
  //           title: "Width",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //         },
  //         {
  //           path: `${import.meta.env.BASE_URL}utilities/extras`,
  //           title: "Extras",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   menutitle: "GENERAL",
  //   Items: [
  //     {
  //       title: "Icons",
  //       icon: (
  //         <svg
  //           xmlns="http://www.w3.org/2000/svg"
  //           className="side-menu__icon"
  //           width="24"
  //           height="24"
  //           viewBox="0 0 24 24"
  //         >
  //           <path d="M20 7h-1.209A4.92 4.92 0 0 0 19 5.5C19 3.57 17.43 2 15.5 2c-1.622 0-2.705 1.482-3.404 3.085C11.407 3.57 10.269 2 8.5 2 6.57 2 5 3.57 5 5.5c0 .596.079 1.089.209 1.5H4c-1.103 0-2 .897-2 2v2c0 1.103.897 2 2 2v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7c1.103 0 2-.897 2-2V9c0-1.103-.897-2-2-2zm-4.5-3c.827 0 1.5.673 1.5 1.5C17 7 16.374 7 16 7h-2.478c.511-1.576 1.253-3 1.978-3zM7 5.5C7 4.673 7.673 4 8.5 4c.888 0 1.714 1.525 2.198 3H8c-.374 0-1 0-1-1.5zM4 9h7v2H4V9zm2 11v-7h5v7H6zm12 0h-5v-7h5v7zm-5-9V9.085L13.017 9H20l.001 2H13z" />
  //         </svg>
  //       ),
  //       type: "sub",
  //       selected: false,
  //       children: [
  //         {
  //           path: `${import.meta.env.BASE_URL}icons/fontawesome`,
  //           title: "Font Awesome",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //         },
  //         {
  //           path: `${import.meta.env.BASE_URL}icons/materialdesignicons`,
  //           title: "Material Design Icons",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //         },
  //         {
  //           path: `${import.meta.env.BASE_URL}icons/simplelineicons`,
  //           title: "Simple Line Icons",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //         },
  //         {
  //           path: `${import.meta.env.BASE_URL}icons/feathericons`,
  //           title: "Feather Icons",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //         },
  //         {
  //           path: `${import.meta.env.BASE_URL}icons/ionicicons`,
  //           title: "Ionic Icons",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //         },
  //         {
  //           path: `${import.meta.env.BASE_URL}icons/flagicons`,
  //           title: "Flag Icons",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //         },
  //         {
  //           path: `${import.meta.env.BASE_URL}icons/pe7icons`,
  //           title: "Pe7 Icons",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //         },
  //         {
  //           path: `${import.meta.env.BASE_URL}icons/themifyicons`,
  //           title: "Themify Icons",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //         },
  //         {
  //           path: `${import.meta.env.BASE_URL}icons/typiconsicons`,
  //           title: "Typicons Icons",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //         },
  //         {
  //           path: `${import.meta.env.BASE_URL}icons/weathericons`,
  //           title: "Weather Icons",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //         },
  //         {
  //           path: `${import.meta.env.BASE_URL}icons/materialicons`,
  //           title: "Material Icons",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //         },
  //         {
  //           path: `${import.meta.env.BASE_URL}icons/bootstrapicons`,
  //           title: "Bootstrap Icons",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //         },
  //       ],
  //     },
  //     {
  //       title: "Charts",
  //       icon: (
  //         <svg
  //           xmlns="http://www.w3.org/2000/svg"
  //           className="side-menu__icon"
  //           width="24"
  //           height="24"
  //           viewBox="0 0 24 24"
  //         >
  //           <path d="M20 7h-4V4c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H4c-1.103 0-2 .897-2 2v9a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V9c0-1.103-.897-2-2-2zM4 11h4v8H4v-8zm6-1V4h4v15h-4v-9zm10 9h-4V9h4v10z" />
  //         </svg>
  //       ),
  //       type: "sub",
  //       selected: false,
  //       children: [
  //         {
  //           path: `${import.meta.env.BASE_URL}charts/chartJs`,
  //           title: " ChartJs",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //         },
  //         {
  //           path: `${import.meta.env.BASE_URL}charts/echart`,
  //           title: "Echart",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //         },

  //         {
  //           path: `${import.meta.env.BASE_URL}charts/apexcharts`,
  //           title: "ApexCharts",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   menutitle: "MULTI LEVEL",
  //   Items: [
  //     {
  //       title: "Menu-levels",
  //       icon: (
  //         <svg
  //           xmlns="http://www.w3.org/2000/svg"
  //           className="side-menu__icon"
  //           width="24"
  //           height="24"
  //           viewBox="0 0 24 24"
  //         >
  //           <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
  //         </svg>
  //       ),
  //       type: "sub",
  //       selected: false,
  //       active: false,
  //       children: [
  //         {
  //           path: "#",
  //           title: "Level-1",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //         },
  //         {
  //           title: "Level-2",
  //           type: "sub",
  //           selected: false,
  //           active: false,
  //           children: [
  //             {
  //               path: "#",
  //               title: "Level-2.1",
  //               type: "link",
  //               active: false,
  //               selected: false,
  //             },
  //             {
  //               path: "#",
  //               title: "Level-2.2",
  //               type: "link",
  //               active: false,
  //               selected: false,
  //             },

  //             {
  //               title: "Level-2.3",
  //               type: "sub",
  //               selected: false,
  //               active: false,
  //               children: [
  //                 {
  //                   path: "#",
  //                   title: "Level-2.3.1",
  //                   type: "link",
  //                   active: false,
  //                   selected: false,
  //                 },
  //                 {
  //                   path: "#",
  //                   title: "Level-2.3.2",
  //                   type: "link",
  //                   active: false,
  //                   selected: false,
  //                 },
  //                 {
  //                   path: "#",
  //                   title: "Level-2.3.3",
  //                   type: "link",
  //                   active: false,
  //                   selected: false,
  //                 },
  //               ],
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   menutitle: "COMPONENTS",
  //   Items: [
  //     {
  //       title: "Forms",
  //       icon: (
  //         <svg
  //           xmlns="http://www.w3.org/2000/svg"
  //           className="side-menu__icon"
  //           width="24"
  //           height="24"
  //           viewBox="0 0 24 24"
  //         >
  //           <path d="M19.937 8.68c-.011-.032-.02-.063-.033-.094a.997.997 0 0 0-.196-.293l-6-6a.997.997 0 0 0-.293-.196c-.03-.014-.062-.022-.094-.033a.991.991 0 0 0-.259-.051C13.04 2.011 13.021 2 13 2H6c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V9c0-.021-.011-.04-.013-.062a.99.99 0 0 0-.05-.258zM16.586 8H14V5.414L16.586 8zM6 20V4h6v5a1 1 0 0 0 1 1h5l.002 10H6z" />
  //         </svg>
  //       ),
  //       type: "sub",
  //       selected: false,
  //       active: false,
  //       children: [
  //         {
  //           path: `${import.meta.env.BASE_URL}forms/formelements`,
  //           title: "Form Elements",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //         },
  //         {
  //           path: `${import.meta.env.BASE_URL}forms/advancedforms`,
  //           title: "Advanced Forms",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //         },
  //         {
  //           path: `${import.meta.env.BASE_URL}forms/formlayouts`,
  //           title: "Form Layouts",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //         },
  //         {
  //           path: `${import.meta.env.BASE_URL}forms/formvalidation`,
  //           title: "Form Validation",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //         },
  //         {
  //           path: `${import.meta.env.BASE_URL}forms/formwizard`,
  //           title: "Form Wizard",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //         },
  //         {
  //           path: `${import.meta.env.BASE_URL}forms/formeditor`,
  //           title: "Form Editor",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //         },
  //         {
  //           path: `${import.meta.env.BASE_URL}forms/formelementsizes`,
  //           title: "Form-element-sizes",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //         },
  //         {
  //           path: `${import.meta.env.BASE_URL}forms/forminputspinners`,
  //           title: "Form Input Spinners",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //         },
  //       ],
  //     },
  //     {
  //       title: "Tables",
  //       icon: (
  //         <svg
  //           xmlns="http://www.w3.org/2000/svg"
  //           className="side-menu__icon"
  //           width="24"
  //           height="24"
  //           viewBox="0 0 24 24"
  //         >
  //           <path d="M19 3H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm0 2 .001 4H5V5h14zM5 11h8v8H5v-8zm10 8v-8h4.001l.001 8H15z" />
  //         </svg>
  //       ),
  //       type: "sub",
  //       selected: false,
  //       active: false,
  //       children: [
  //         {
  //           path: `${import.meta.env.BASE_URL}tables/defaulttables`,
  //           title: " Default Tables",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //         },
  //         {
  //           path: `${import.meta.env.BASE_URL}tables/datatables`,
  //           title: "Data Tables ",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //         },
  //       ],
  //     },
  //     {
  //       path: `${import.meta.env.BASE_URL}widgets`,
  //       icon: (
  //         <svg
  //           xmlns="http://www.w3.org/2000/svg"
  //           className="side-menu__icon"
  //           width="24"
  //           height="24"
  //           viewBox="0 0 24 24"
  //         >
  //           <path d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm11 4h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-1 6h-4v-4h4v4zM17 3c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zM7 13c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z" />
  //         </svg>
  //       ),
  //       type: "link",
  //       selected: false,
  //       active: false,
  //       title: "Widgets",
  //     },
  //     {
  //       title: "Maps",
  //       icon: (
  //         <svg
  //           xmlns="http://www.w3.org/2000/svg"
  //           className="side-menu__icon"
  //           width="24"
  //           height="24"
  //           viewBox="0 0 24 24"
  //         >
  //           <path d="M2.002 9.63c-.023.411.207.794.581.966l7.504 3.442 3.442 7.503c.164.356.52.583.909.583l.057-.002a1 1 0 0 0 .894-.686l5.595-17.032c.117-.358.023-.753-.243-1.02s-.66-.358-1.02-.243L2.688 8.736a1 1 0 0 0-.686.894zm16.464-3.971-4.182 12.73-2.534-5.522a.998.998 0 0 0-.492-.492L5.734 9.841l12.732-4.182z" />
  //         </svg>
  //       ),
  //       type: "sub",
  //       selected: false,
  //       active: false,
  //       children: [
  //         {
  //           path: `${import.meta.env.BASE_URL}maps/leafletmaps`,
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Leaflet Maps ",
  //         },
  //         {
  //           path: `${import.meta.env.BASE_URL}maps/simplemaps`,
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: "Simple Maps ",
  //         },
  //       ],
  //     },
  //   ],
  // },
];
