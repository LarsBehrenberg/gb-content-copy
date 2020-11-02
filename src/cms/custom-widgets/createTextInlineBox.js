const createTextInlineBox = {
  // Internal id of the component
  id: 'Fact Box',
  // Visible label
  label: 'Fact Box',
  // Fields the user need to fill out when adding an instance of the component
  fields: [
    {
      name: 'title',
      label: 'Title',
      widget: 'string',
      required: true,
      default: 'Interesting fact...',
    },
    {
      name: 'text',
      label: 'Text',
      widget: 'markdown',
      required: true,
      default: 'Text Box content here',
    },
  ],
  // Pattern to identify a block as being an instance of this component
  pattern: /^<div className="interesting"> ([\s\S]*?) <\/div><\/div>$/,
  // Function to extract data elements from the regexp match
  fromBlock: function (match) {
    return {
      title: match[1],
      text: match[2],
    }
  },
  // Function to create a text block from an instance of this component
  toBlock: function (obj) {
    return (
      '<div class="interesting"><h4><svg height="15pt" preserveAspectRatio="xMidYMid meet" viewBox="0 0 40 40" width="15pt" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(.1 0 0 -.1 0 40)"><path d="m139 390c-46-14-88-52-114-104-32-65-32-111 3-177 60-116 215-144 311-56 29 27 60 93 61 127 0 33-33 87-59 95-19 6-17 9 20 45 40 38 44 60 12 60-9 0-47-14-85-32-37-17-71-29-74-25-3 3 0 15 6 27 24 44-11 62-81 40zm65-47c-7-40-55-92-86-93-19 0-58-45-58-66 0-20 65-18 85 2 31 31 155 84 181 78 77-19 70-148-11-209-38-30-117-44-169-31-36 9-96 65-112 103-17 39-18 101-3 140 22 59 93 113 147 113 33 0 33 0 26-37zm146-14c-19-17-55-42-78-56-36-21-46-24-53-12-5 8-7 19-6 24 4 15 126 75 151 75 18-1 17-5-14-31zm-144-70c8-13-3-24-33-34-16-4-23-2-23 7 0 30 41 50 56 27zm-71-49c0-9-11-16-28-18-26-3-28-2-17 18 13 23 45 23 45 0z"/><path d="m114 336c-10-26 4-48 28-44 33 4 33 52 0 56-13 2-25-3-28-12zm36-17c0-5-7-9-15-9-15 0-20 12-9 23 8 8 24-1 24-14z"/><path d="m311 177c-17-21-3-47 26-47 21 0 24 4 21 27-3 31-29 41-47 20zm37-18c-2-6-8-10-13-10s-11 4-13 10 4 11 13 11 15-5 13-11z"/><path d="m245 160c-20-22-46-25-77-9-16 9-19 8-16-3 9-28 101-21 112 8 10 25 1 27-19 4z"/><path d="m74 126c-10-26 4-48 28-44 33 4 33 52 0 56-13 2-25-3-28-12zm36-16c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10z"/><path d="m250 96c-18-22-5-48 22-44 17 2 23 10 23 28 0 29-26 38-45 16zm38-17c-2-6-8-10-13-10s-11 4-13 10 4 11 13 11 15-5 13-11z"/><path d="m157 83c-13-12-7-41 10-47 21-8 48 17 40 38-6 16-38 22-50 9zm33-18c0-8-4-15-9-15-13 0-22 16-14 24 11 11 23 6 23-9z"/></g></svg> ' +
      obj.title +
      '</h4><div><p>' +
      obj.text +
      '</p></div></div>'
    )
  },
  // Preview output for this component. Can either be a string or a React component
  // (component gives better render performance)
  toPreview: function (obj) {
    return (
      '<div class="interesting"><h4><svg height="15pt" preserveAspectRatio="xMidYMid meet" viewBox="0 0 40 40" width="15pt" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(.1 0 0 -.1 0 40)"><path d="m139 390c-46-14-88-52-114-104-32-65-32-111 3-177 60-116 215-144 311-56 29 27 60 93 61 127 0 33-33 87-59 95-19 6-17 9 20 45 40 38 44 60 12 60-9 0-47-14-85-32-37-17-71-29-74-25-3 3 0 15 6 27 24 44-11 62-81 40zm65-47c-7-40-55-92-86-93-19 0-58-45-58-66 0-20 65-18 85 2 31 31 155 84 181 78 77-19 70-148-11-209-38-30-117-44-169-31-36 9-96 65-112 103-17 39-18 101-3 140 22 59 93 113 147 113 33 0 33 0 26-37zm146-14c-19-17-55-42-78-56-36-21-46-24-53-12-5 8-7 19-6 24 4 15 126 75 151 75 18-1 17-5-14-31zm-144-70c8-13-3-24-33-34-16-4-23-2-23 7 0 30 41 50 56 27zm-71-49c0-9-11-16-28-18-26-3-28-2-17 18 13 23 45 23 45 0z"/><path d="m114 336c-10-26 4-48 28-44 33 4 33 52 0 56-13 2-25-3-28-12zm36-17c0-5-7-9-15-9-15 0-20 12-9 23 8 8 24-1 24-14z"/><path d="m311 177c-17-21-3-47 26-47 21 0 24 4 21 27-3 31-29 41-47 20zm37-18c-2-6-8-10-13-10s-11 4-13 10 4 11 13 11 15-5 13-11z"/><path d="m245 160c-20-22-46-25-77-9-16 9-19 8-16-3 9-28 101-21 112 8 10 25 1 27-19 4z"/><path d="m74 126c-10-26 4-48 28-44 33 4 33 52 0 56-13 2-25-3-28-12zm36-16c0-5-4-10-10-10-5 0-10 5-10 10 0 6 5 10 10 10 6 0 10-4 10-10z"/><path d="m250 96c-18-22-5-48 22-44 17 2 23 10 23 28 0 29-26 38-45 16zm38-17c-2-6-8-10-13-10s-11 4-13 10 4 11 13 11 15-5 13-11z"/><path d="m157 83c-13-12-7-41 10-47 21-8 48 17 40 38-6 16-38 22-50 9zm33-18c0-8-4-15-9-15-13 0-22 16-14 24 11 11 23 6 23-9z"/></g></svg> ' +
      obj.title +
      '</h4><div><p>' +
      obj.text +
      '</p></div></div>'
    )
  },
}

export default createTextInlineBox
