const people = [
  {
    name: "Dr. Jyotirmay Biswas",
    role: "President",
    imageUrl: "/assets/team/Jyotirmay.jpg",
  },
  {
    name: "Dr. M. Balasubramanyam",
    role: "Vice President",
    imageUrl: "/assets/team/Balasubramanya.jpg",
  },

  {
    name: "Dr. Chandrashekara. S.",
    role: "General Secretary",
    imageUrl: "/assets/team/Chandrashekara.jpg",
  },

  {
    name: "Dr. Padmamalini Mahendradas",
    role: "Treasurer",
    imageUrl: "/assets/team/Padmamalini.jpg",
  },

  {
    name: "Dr. V. S. Negi",
    role: "Ec Members",
    imageUrl: "/assets/team/negi.png",
  },
  {
    name: "Dr. Girdhari Lal",
    role: "Ec Members",
    imageUrl: "/assets/team/Girdhari.jpg",
  },
  {
    name: "Dr. Chandramani Pathak",
    role: "Ec Members",
    imageUrl: "/assets/team/chandramani.png",
  },
  {
    name: "Dr. Kamalanathan. A. S",
    role: "Ec Members",
    imageUrl: "/assets/team/Kamalanathan.jpg",
  },
  {
    name: "Dr. Renuka. P",
    role: "Ec Members",
    imageUrl: "/assets/team/Renuka.jpg",
  },
  {
    name: "Dr. Sridaran. D",
    role: "Ec Members",
    imageUrl: "/assets/team/sridharan.png",
  },
  {
    name: "Dr. Mohan Wani",
    role: "Ec Members",
    imageUrl: "/assets/team/mohan.jpg",
  },

  // More people...
];

export default function Team() {
  return (
    <div className="bg-white  pb-7 mt-14">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-xl">
          <h2 className="text-lg text-center font-bold tracking-tight text-gray-700 sm:text-4xl">
            Our Team
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
            iure dicta modi exercitationem asperiores laudantium! Reprehenderit,
            temporibus, iure molestias quam aliquam ex suscipit in voluptatem
            aut explicabo facilis veniam distinctio.
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-8 xl:col-span-2"
        >
          {people.map((person, index) => (
            <li key={index} data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"  >
              <div className="flex items-center gap-x-6">
                <img
                  className="h-16 w-16 rounded-full shadow-lg"
                  src={person.imageUrl}
                  alt=""
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    {person.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
