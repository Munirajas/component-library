import { TreeNode } from "@/components/treeView";

export const mockData: TreeNode[] = [
  {
    id: "Location-1",
    label: "USA",
    icon: "",
    type: "client",
    parentId:'',
    children:[
      {
          id: "Location-1-1",
          label: "Okhlahoma",
          icon:"",
          type: "location",
          parentId:'',
          children:[
            {
              id: "Location-1-1-1",
              label: "Tulsa",
              icon:"",
              type: "location",
              parentId:''
            },
            {
              id: "Location-1-1-2",
              label: "Norman",
              icon:"",
              type: "location",
              parentId:'',
            },
            {
              id: "Location-1-1-3",
              label: "Edmond",
              icon:"",
              type: "location",
              parentId:'',
              children: [
                    {
                        id: "Location-1-1-3-1",
                        label: "Zoo ",
                        icon: "",
                        type: "location",
                        parentId:'',
                    },
                    {
                        id: "Location-1-1-3-2",
                        label: "Theater",
                        icon: "",
                        type: "location",
                        parentId:'',
                    }
                ]
            }
          ],
      },
      {
        id: "Location-1-2",
        label: "Texas",
        icon: "",
        type: "location",
        parentId:'',
        children: [
           {
                id: "Location-1-2-1",
                label: "Houston",
                icon: "",
                type: "location",
                parentId:'',
           },
            {
                id: "Location-1-2-2",
                label: "Dallas",
                icon: "",
                type: "location",
                parentId:'',
                children: [
                    {
                        id: "Location-1-2-2-1",
                        label: "Irving",
                        icon: "",
                        type: "location",
                        parentId:'',
                    },
                    {
                        id: "Location-1-2-2-2",
                        label: "Denton",
                        icon: "",
                        type: "location",
                        parentId:'',
                    },
                    {
                        id: "Location-1-2-2-3",
                        label: "Prisco",
                        icon: "",
                        type: "location",
                        parentId:'',
                    }
                ]
            },
        ]
      },
    ]
  },
  {
    id: "Location-2",
    label: "Mexico",
    icon: "",
    type: "client",
    parentId:'',
  },
  {
    id: "Location-3",
    label: "India",
    icon: "",
    type: "client",
    parentId:'',
    children:[
      {
          id: "Location-3-1",
          label: "South India",
          icon:"",
          type: "location",
          parentId:'',
          children:[
            {
              id: "Location-3-1-1",
              label: "Bengalore",
              icon:"",
              type: "location",
              parentId:'',
            },
            {
              id: "Location-3-1-2",
              label: "Hyderabad Hyderabad testing location Hyderabad  testing location",
              icon:"",
              type: "location",
              parentId:'',
            },
            {
              id: "Location-3-1-3",
              label: "Chennai",
              icon:"",
              type: "location",
              parentId:'',
            }
          ],
      },
      {
        id: "Location-3-2",
        label: "North India",
        icon: "",
        type: "location",
        parentId:'',
        children: [
           {
                id: "Location-3-2-1",
                label: "New Delhi",
                icon: "",
                type: "location",
                parentId:'',
                children: [
                    {
                        id: "Location-3-2-2-1",
                        label: "Zoo Park",
                        icon: "",
                        type: "location",
                        parentId:'',
                    },
                    {
                        id: "Location-3-2-2-2",
                        label: "Movie theater",
                        icon: "",
                        type: "location",
                        parentId:'',
                    }
                ]
           },
            {
                id: "Location-3-2-2",
                label: "Luknow",
                icon: "",
                type: "location",
                parentId:'',
            },
        ]
      },
    ]
  },
  {
    id: "Location-4",
    label: "Canada",
    parentId:'',
    icon: "",
    type: "client",
  }
];