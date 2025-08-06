export interface Data {
  id: number,
  image: string,
  landscapeImage: string,
  title: string,
  content: string | string[],
  readingTime: string,
  date: string,
}

export const data: Data[] = [
  {
    id: 0,
    image: '/src/assets/politicians-arguing-landscape.png',
    landscapeImage: '/src/assets/politicians-arguing-landscape.png',
    title: 'Where can I get some?',
    content: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis nibh sollicitudin, pretium tellus a, scelerisque tellus. Ut fermentum leo maximus nibh sollicitudin pulvinar. Mauris lacinia dolor nec vestibulum interdum. Sed quis elementum eros. Sed vel fermentum tellus. Mauris pretium sagittis aliquet. Nullam quis efficitur augue. Nunc viverra hendrerit massa, sit amet ultricies ipsum fringilla a. Aenean fermentum laoreet purus, at auctor ante pretium eget. Aenean et ex ac felis porta pharetra sed in eros. In hac habitasse platea dictumst. Maecenas ut metus quis augue fermentum interdum nec convallis dolor. In non lectus vitae augue pharetra egestas. Pellentesque at gravida risus.",
      "Nunc quis nisl semper, consectetur ex quis, euismod nisl. Sed faucibus vulputate leo sed vestibulum. Vestibulum urna justo, ornare ut ligula semper, semper vulputate felis. Aliquam et purus commodo, vulputate massa eu, rutrum mauris. Nullam vulputate, odio rhoncus tincidunt luctus, libero ipsum maximus justo, nec blandit lectus sapien at dolor. Maecenas odio eros, imperdiet dignissim eros vitae, tristique lobortis arcu. Integer at magna ac leo sodales facilisis. Mauris sit amet laoreet nunc. Ut quis nunc vel magna eleifend auctor fringilla at felis. Aliquam sed eros ac ante porta tristique. Vestibulum ex nisi, ornare ut mauris sed, viverra vehicula arcu. Ut orci erat, viverra eget pulvinar consequat, egestas ut ante. Suspendisse id tellus tempus, sagittis lacus a, tincidunt est. Vivamus non pharetra magna, nec elementum elit. Sed sagittis odio vel mi lobortis, et elementum eros malesuada. Fusce nibh erat, molestie ut nunc id, rhoncus dictum lorem."      
    ],
    readingTime: '2 minute de citit',
    date: '15-05-2025'
  },
  {
    id: 1,
    image: '/src/assets/politicians-arguing-square.png',
    landscapeImage: '/src/assets/politicians-arguing-landscape.png',
    title: 'Lorem Ipsum is simply dummy text of the printing and ypesetting industry.',
    content: [
      "Pellentesque imperdiet est sit amet tempor iaculis. Phasellus dolor justo, hendrerit id ex vel, pellentesque sodales ipsum. Nulla libero neque, tristique et faucibus et, sollicitudin id quam. Vestibulum in purus non dolor tincidunt porta in ut eros. Proin bibendum massa vel orci convallis, vel bibendum velit suscipit. Cras consequat, quam id tempus sollicitudin, arcu lacus posuere turpis, non vestibulum tortor magna non eros. Curabitur eu auctor ligula. Etiam laoreet nulla nec dolor tempor rutrum. Donec ipsum lorem, finibus eu eros eget, malesuada elementum mauris. Ut dignissim egestas est sed suscipit. Etiam tincidunt placerat purus, dictum pharetra magna condimentum eu. Nunc pretium sem diam, sit amet pulvinar velit dapibus in.",
      "Etiam posuere, nisi sagittis dictum elementum, dui lectus dapibus diam, at interdum risus lorem sit amet sem. Pellentesque eros nisl, tempus eu congue a, convallis ut augue. Ut ut auctor sapien. Vestibulum aliquam laoreet dolor non lacinia. Maecenas ut turpis vel elit convallis ultrices. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed auctor sodales iaculis. Fusce et lacinia odio. Morbi bibendum, lorem quis faucibus malesuada, justo est molestie orci, a euismod risus ex vitae dolor. Integer consequat convallis vulputate. Nunc est ligula, consequat at facilisis id, venenatis eget ante. Maecenas sed nisl ut eros hendrerit mattis. Aenean aliquam sapien sem, tempor aliquam magna maximus id. Nam sollicitudin laoreet tempor. Integer elit dui, gravida in enim non, volutpat ultrices odio."      
    ],
    readingTime: '2 minute de citit',
    date: '15-05-2025'
  },
  {
    id: 2,
    image: '/src/assets/politicians-arguing-square.png',
    landscapeImage: '/src/assets/politicians-arguing-landscape.png',
    title: 'Lorem Ipsum is simply dummy text of the printing and ypesetting industry.',
    content: [
      "Pellentesque imperdiet est sit amet tempor iaculis. Phasellus dolor justo, hendrerit id ex vel, pellentesque sodales ipsum. Nulla libero neque, tristique et faucibus et, sollicitudin id quam. Vestibulum in purus non dolor tincidunt porta in ut eros. Proin bibendum massa vel orci convallis, vel bibendum velit suscipit. Cras consequat, quam id tempus sollicitudin, arcu lacus posuere turpis, non vestibulum tortor magna non eros. Curabitur eu auctor ligula. Etiam laoreet nulla nec dolor tempor rutrum. Donec ipsum lorem, finibus eu eros eget, malesuada elementum mauris. Ut dignissim egestas est sed suscipit. Etiam tincidunt placerat purus, dictum pharetra magna condimentum eu. Nunc pretium sem diam, sit amet pulvinar velit dapibus in.",
      "Etiam posuere, nisi sagittis dictum elementum, dui lectus dapibus diam, at interdum risus lorem sit amet sem. Pellentesque eros nisl, tempus eu congue a, convallis ut augue. Ut ut auctor sapien. Vestibulum aliquam laoreet dolor non lacinia. Maecenas ut turpis vel elit convallis ultrices. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed auctor sodales iaculis. Fusce et lacinia odio. Morbi bibendum, lorem quis faucibus malesuada, justo est molestie orci, a euismod risus ex vitae dolor. Integer consequat convallis vulputate. Nunc est ligula, consequat at facilisis id, venenatis eget ante. Maecenas sed nisl ut eros hendrerit mattis. Aenean aliquam sapien sem, tempor aliquam magna maximus id. Nam sollicitudin laoreet tempor. Integer elit dui, gravida in enim non, volutpat ultrices odio."      
    ],
    readingTime: '2 minute de citit',
    date: '15-05-2025'
  },
  {
    id: 3,
    image: '/src/assets/politicians-arguing-square.png',
    landscapeImage: '/src/assets/politicians-arguing-landscape.png',
    title: 'Lorem Ipsum is simply dummy text of the printing and ypesetting industry.',
    content: [
      "Pellentesque imperdiet est sit amet tempor iaculis. Phasellus dolor justo, hendrerit id ex vel, pellentesque sodales ipsum. Nulla libero neque, tristique et faucibus et, sollicitudin id quam. Vestibulum in purus non dolor tincidunt porta in ut eros. Proin bibendum massa vel orci convallis, vel bibendum velit suscipit. Cras consequat, quam id tempus sollicitudin, arcu lacus posuere turpis, non vestibulum tortor magna non eros. Curabitur eu auctor ligula. Etiam laoreet nulla nec dolor tempor rutrum. Donec ipsum lorem, finibus eu eros eget, malesuada elementum mauris. Ut dignissim egestas est sed suscipit. Etiam tincidunt placerat purus, dictum pharetra magna condimentum eu. Nunc pretium sem diam, sit amet pulvinar velit dapibus in.",
      "Etiam posuere, nisi sagittis dictum elementum, dui lectus dapibus diam, at interdum risus lorem sit amet sem. Pellentesque eros nisl, tempus eu congue a, convallis ut augue. Ut ut auctor sapien. Vestibulum aliquam laoreet dolor non lacinia. Maecenas ut turpis vel elit convallis ultrices. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed auctor sodales iaculis. Fusce et lacinia odio. Morbi bibendum, lorem quis faucibus malesuada, justo est molestie orci, a euismod risus ex vitae dolor. Integer consequat convallis vulputate. Nunc est ligula, consequat at facilisis id, venenatis eget ante. Maecenas sed nisl ut eros hendrerit mattis. Aenean aliquam sapien sem, tempor aliquam magna maximus id. Nam sollicitudin laoreet tempor. Integer elit dui, gravida in enim non, volutpat ultrices odio."      
    ],
    readingTime: '2 minute de citit',
    date: '15-05-2025'
  },
  {
    id: 4,
    image: '/src/assets/politicians-arguing-square.png',
    landscapeImage: '/src/assets/politicians-arguing-landscape.png',
    title: 'Lorem Ipsum is simply dummy text of the printing and ypesetting industry.',
    content: [
      "Pellentesque imperdiet est sit amet tempor iaculis. Phasellus dolor justo, hendrerit id ex vel, pellentesque sodales ipsum. Nulla libero neque, tristique et faucibus et, sollicitudin id quam. Vestibulum in purus non dolor tincidunt porta in ut eros. Proin bibendum massa vel orci convallis, vel bibendum velit suscipit. Cras consequat, quam id tempus sollicitudin, arcu lacus posuere turpis, non vestibulum tortor magna non eros. Curabitur eu auctor ligula. Etiam laoreet nulla nec dolor tempor rutrum. Donec ipsum lorem, finibus eu eros eget, malesuada elementum mauris. Ut dignissim egestas est sed suscipit. Etiam tincidunt placerat purus, dictum pharetra magna condimentum eu. Nunc pretium sem diam, sit amet pulvinar velit dapibus in.",
      "Etiam posuere, nisi sagittis dictum elementum, dui lectus dapibus diam, at interdum risus lorem sit amet sem. Pellentesque eros nisl, tempus eu congue a, convallis ut augue. Ut ut auctor sapien. Vestibulum aliquam laoreet dolor non lacinia. Maecenas ut turpis vel elit convallis ultrices. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed auctor sodales iaculis. Fusce et lacinia odio. Morbi bibendum, lorem quis faucibus malesuada, justo est molestie orci, a euismod risus ex vitae dolor. Integer consequat convallis vulputate. Nunc est ligula, consequat at facilisis id, venenatis eget ante. Maecenas sed nisl ut eros hendrerit mattis. Aenean aliquam sapien sem, tempor aliquam magna maximus id. Nam sollicitudin laoreet tempor. Integer elit dui, gravida in enim non, volutpat ultrices odio."      
    ],
    readingTime: '2 minute de citit',
    date: '15-05-2025'
  }
]