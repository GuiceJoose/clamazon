import bcrypt from "bcryptjs";

const dummydata = {
  users: [
    {
      name: "John",
      email: "john@john.john",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "Bob",
      email: "bob@bob.bob",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "Crocea Clam",
      slug: "crocea-clam",
      category: "Clams",
      image:
        "https://www.liveaquaria.com/images/categories/large/lg_80194_Crocea_Clam.jpg",
      price: 99.99,
      colors: ["Black", "Purple", "Blue"],
      countInStock: 16,
      description:
        'Tridacna crocea are beautiful clams oftentimes displaying a variety of colorations with intricate patterns. These clams are also referred to as Crocea Clam, Boring Clam or Crocus Clam, and are the smallest of all Tridacna spp., reaching a maximum size of 6" in the wild. The Crocea Clam can penetrate through limestone substrates by releasing an acid to break down the carbonate in the stone. It uses the ridges of its thick shell to dig into the rock by opening and closing quickly through the use of its large byssal muscle, giving the clam the common name "boring clam." This burrowing behavior helps to protect it from predators such as sea stars, along with Angelfishes, Butterflyfishes, and other reef dwelling species that consume bivalves.',
    },
    {
      name: "Maxima Clam",
      slug: "maxima-clam",
      category: "Clams",
      image:
        "https://www.liveaquaria.com/images/categories/product/lg_072919_271.jpg",
      price: 86.99,
      colors: ["Blue", "Green"],
      countInStock: 19,
      description:
        "The Maxima Clam is also known as the Small Giant Clam and is one of the most widely recognized species of the giant clams. The beauty of its mantle with its rich variety of patterns and vivid colorations makes for a spectacular display in reef aquariums that are illuminated properly. Maxima Clams are known to live together in great congregations, and they can attain a maximum size of 12” in the wild.",
    },
    {
      name: "Hippopus Clam",
      slug: "hippopus-clam",
      category: "Clams",
      image:
        "https://www.liveaquaria.com/images/categories/large/lg89442HippopusClam.jpg",
      price: 65.99,
      colors: ["Black", "Tan", "Yellow"],
      countInStock: 9,
      description:
        "The Hippopus clam is also known as Horse's Hoof, Bear Paw or Strawberry Clam. The shell of this clam is very thick with prominent ribs, and has reddish blotches making it easy to differentiate from other clams. The mantle of these clams does not extend past the edge of the shell, and are brownish-green to gray in color with faint gold stripes. The large opening in the mantle, which is called the incurrent aperture, lacks the tentacles that are common with other clams within the Tridacnidae family. These are relatively fast growing clams that process a lot of water for their size which helps in controlling nutrients in a reef aquarium.",
    },
    {
      name: "Blue Squamosa Clam",
      slug: "blue-squamosa-clam",
      category: "Clams",
      image:
        "https://www.liveaquaria.com/images/categories/large/lg_Blue_Squamosa.jpg",
      price: 299.99,
      colors: ["Blue"],
      countInStock: 4,
      description:
        "The Squamosa Clam, Blue is also referred to as the Scaled Clam. Its species name squamosa is the Latin word for scale. The numerous rows of large scales over its entire shell are often used as shelter by other organisms, such as small crabs, other clams, and other invertebrates. The shell is symmetrical, and the matching growth pattern in its shell allows it to close together very tightly when it needs to. The Squamosa Clam is often found living amongst Acropora coral, anchored by its byssal filaments. It has a wide byssal opening and long tentacles surrounding its incurrent siphon. The Squamosa Clam can grow up to 12 inches or larger in the home aquarium.",
    },
    {
      name: "Birdsnest Coral",
      slug: "birdsnest-coral",
      category: "SPS Corals",
      image:
        "https://www.liveaquaria.com/images/categories/product/lg_78027_Birdnest_Pink_Yellow.jpg",
      price: 59.99,
      colors: ["Green", "Pink"],
      countInStock: 33,
      description:
        "The Birdsnest Coral is also referred to as Seriatopora Needle, Finger, or Brush Coral. It is a small polyp stony (SPS) coral with very delicate, thin branches with needle-like tips. It is found in a variety of shades of pink. These are very delicate, but beautiful corals that offer a variety of shape and bright coloration to a reef aquarium.",
    },
    {
      name: "Montipora Capricornis",
      slug: "montipora-capricornis",
      category: "SPS Corals",
      image:
        "https://www.liveaquaria.com/images/categories/large/lg-90052-Leef-Plate-Montipo.jpg",
      price: 114.99,
      colors: ["Green", "Orange"],
      countInStock: 21,
      description:
        "The Montipora Coral, Plating is a small polyp stony (SPS) coral often referred to as a Vase Coral. Montipora Corals come in a vast variety of forms and colors. M. capricornis is shaped like a vase; M. digitata is generally a branching species; M. stellata has rough, irregular, upright plates. Other species are encrusting. This form of Montipora is plating and will add diversity to your reef aquarium.",
    },
    {
      name: "Torch Coral",
      slug: "torch-coral",
      category: "LPS Corals",
      image:
        "https://www.liveaquaria.com/images/categories/product/lg_011719_283.jpg",
      price: 259.99,
      colors: ["Brown", "Green", "Purple", "Yellow"],
      countInStock: "",
      description:
        "The Euphyllia Torch Coral is a large polyp stony (LPS) coral, often referred to as Trumpet Coral or Pom-Pom Coral. It has long and flowing polyps with single rounded tips which are visible throughout the day and night, hiding its branching skeletal base most of the time. It may be brown or green with yellow on the tips of its tentacles. The yellow will sometimes appear to glow under actinic lighting.",
    },
    {
      name: "Elegance Coral",
      slug: "elegance-coral",
      category: "LPS Corals",
      image:
        "https://www.liveaquaria.com/images/categories/product/lg-103119-182a.jpg",
      price: 99.99,
      colors: ["Green", "Purple", "Red", "Yellow"],
      countInStock: 11,
      description:
        "The Catalaphyllia Elegance Coral is a large polyp stony (LPS) often referred to as Elegant Coral, Wonder Coral, or Ridge Coral. It is truly the most unique and interesting stony coral known. Its polyps are extended during the day showing off its vast array of color-tipped tentacles. Under actinic lighting, the fluorescent qualities are beautiful with lime green, blue, orange, or purple-tipped tentacles which vary between branched or round and bulbous shapes. The most common color variety available to aquarists is gold with pink or purple-tipped polyps.",
    },
    {
      name: "Green Bubble Coral",
      slug: "green-bubble-coral",
      category: "LPS Corals",
      image:
        "https://www.liveaquaria.com/images/categories/product/lg_091719_221.jpg",
      price: 99.99,
      colors: ["Green"],
      countInStock: 9,
      description:
        "The Green Bubble Coral is a beautiful LPS coral that originates from the reefs of Indonesia. It has a white-ridged hard skeleton that can be seen when the polyps are deflated. When inflated, the large fleshy polyps will cover the entire skeleton, and are neon green in color. Like many other LPS corals, they do posses sweeper tentacles that can harm other corals within reach.",
    },
  ],
};

export default dummydata;
