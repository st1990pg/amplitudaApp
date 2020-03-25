export const doniraj = [
  {
    id: 1,
    name: "Odjeća i Obuća",
    icon: "src/img/002-shirt.svg",
    items: [
      { id: 1, name: "Trenerka", value: true },
      { id: 3, name: "Majice", value: false },
      { id: 4, name: "Trik majice", value: false },
      { id: 5, name: "Donji veš", value: false },
      { id: 6, name: "Čarape", value: false },
      { id: 7, name: "Peškiri", value: false }
    ]
  },
  {
    id: 2,
    name: "Školski pribor i igračke",
    icon: "src/img/002-stationery.svg",
    items: [
      { id: 1, name: "Trenerka", value: true },
      { id: 3, name: "Majice", value: false },
      { id: 4, name: "Trik majice", value: false },
      { id: 5, name: "Donji veš", value: false },
    ]
  },
  {
    id: 3,
    name: "Higijena",
    icon: "src/img/003-toothbrush.svg",
    items: [
      { id: 1, name: "Trenerka", value: true },
      { id: 4, name: "Trik majice", value: false },
      { id: 5, name: "Donji veš", value: false },
      { id: 6, name: "Čarape", value: false },
      { id: 7, name: "Peškiri", value: false }
    ]
  }
];
const odabrano = [{ id: 1, name: "Trenerka", value: true }];
const posts = [
  {
    id: 1,
    title: "Naslov bloga u dva reda, naslov bloga",
    text: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
       sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, 
        no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, 
        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
         magna...Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
           justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem 
           ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy 
           eirmod tempor invidunt ut labore et dolore magna...`,
    autor: {
      profile: "imgUrl",
      name: "PETAR PETROVIĆ"
    },
    create: "12.02.2019.",
    img: "imgUrl"
  }
];

const dropdown = [
  { id: 1, value: "Test 1" },
  { id: 2, value: "Test 2" },
  { id: 3, value: "Test 3" },
  { id: 4, value: "Test 4" },
  { id: 5, value: "Test 5" }
];

export const slider = [
  {
    id: 1,
    text: {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
      body: `Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the 1500s, when an unknown
      printer took a galley of type and scrambled it.`
    },
    img: "src/img/Happy-Children.png"
  },
  {
    id: 2,
    text: {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
      body: `Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the 1500s, when an unknown
      printer took a galley of type and scrambled it.`
    },
    img: "src/img/Happy-Children-Two.png"
  },
  {
    id: 3,
    text: {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
      body: `Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the 1500s, when an unknown
      printer took a galley of type and scrambled it.`
    },
    img: "src/img/Happy-Children.png"
  },
  {
    id: 4,
    text: {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
      body: `Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the 1500s, when an unknown
      printer took a galley of type and scrambled it.`
    },
    img: "src/img/Happy-Children-Two.png"
  }
];

export const donationSelection = [
    {
      id:1,
      title:'Trenerke',
      description: {
        pol: 'Zenski',
        uzrast: '10-12 godina',
        broj: 33,
        kolicina: 2,
        cjenovni_raspon: '20-40'
      }
    },
   {
     id:2,
     title: 'Carape',
     description : {
       uzrast: '10-12 godina',
       kolicina: 2,
       cjenovni_raspon: '2-4'
     },
   },
  {
    id:3,
    title: 'Patike',
    description:{
      pol: 'Muski',
      uzrast: '7-9 godina',
      broj: 31,
      kolicina: 4,
      cjenovni_raspon: '40-80'
    }
  },
  {
    id:4,
    title: 'Bojanke',
    description:{
      kolicina: 3,
      cjenovni_raspon: '10-20'
    }
  },
  {
    id:5,
    title: 'Igracke',
    description:{
      uzrast: '6-10',
      kolicina: '10',
      cjenovni_raspon: '10-20'
    }
  }
];
