import React from "react";
import { Card, CardBody, Tabs, Tab, Button, Divider, Chip, CardFooter } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useLanguage } from "../components/language-switcher";
import { AudioPlayer } from "../components/AudioPlayer";

// Datos de los capítulos
const chapters = [
  {
    id: 1,
    title: "Capítulo 1: Espías y Experimentos",
    description: "Los inicios de una investigación que desafía la realidad",
    date: "10 de Junio 2013",
    pdf: "/novela/capitulos/Capitulo 1 - Espías y Experimentos.pdf",
    audio: "/novela/capitulos/Capitulo 1.mp3",
    duration: "47:26",
    words: 5200,
    inProgress: false,
    isFullBook: false
  },
  {
    id: 2,
    title: "Capítulo 2: Envidia hacia las abejas",
    description: "Cuando lo cotidiano se vuelve sospechoso",
    date: "13 de Junio 2013",
    pdf: "/novela/capitulos/Capitulo 2 - Envidia hacia las abejas.pdf",
    audio: "/novela/capitulos/Capitulo 2.mp3"
  },
  {
    id: 3,
    title: "Capítulo 3: Miradas entre las cortinas",
    description: "Las apariencias engañan más de lo que creemos",
    date: "25 de Julio 2013",
    pdf: "/novela/capitulos/Capitulo 3 - Miradas entre las cortinas.pdf",
    audio: "/novela/capitulos/Capitulo 3.mp3"
  },
  {
    id: 4,
    title: "Capítulo 4: Zumbídos en el Jardín",
    description: "Los sonidos que no deberían estar ahí",
    date: "29 de Julio 2013",
    pdf: "/novela/capitulos/Capitulo 4- Zumbídos en el Jardín.pdf",
    audio: "/novela/capitulos/Capitulo 4.mp3"
  },
  {
    id: 5,
    title: "Capítulo 5: El Laberinto de Susurros",
    description: "Cuando los secretos toman vida propia",
    date: "10 de Abril 2025",
    pdf: "/novela/capitulos/Capitulo 5 - El Laberinto de Susurros.pdf",
    audio: "/novela/capitulos/Capitulo 5.mp3"
  },
  {
    id: 6,
    title: "Capítulo 6: El peso de los planos",
    description: "Las estructuras que nos rodean tienen más que contarnos",
    date: "15 de Abril 2025",
    pdf: "/novela/capitulos/Capitulo 6 - El peso de los planos.pdf",
    audio: "/novela/capitulos/Capitulo 6.mp3",
    duration: "18:30",
    words: 5800,
    inProgress: false,
    isFullBook: false
  },
  {
    id: 7,
    title: "Capítulo 7: La penumbra",
    description: "En la oscuridad, los miedos toman forma",
    date: "24 de Abril 2025",
    pdf: "/novela/capitulos/Capitulo 7 - La penumbra.pdf",
    audio: "/novela/capitulos/Capitulo 7.mp3",
    inProgress: false,
    isFullBook: false
  },
  {
    id: 8,
    title: "Capítulo 8: Sonido en las Sombras",
    description: "Lo que el oído capta cuando la vista falla",
    date: "2 de Mayo 2025",
    pdf: "/novela/capitulos/Capitulo 8 - Sonido en las Sombras.pdf",
    audio: "/novela/capitulos/Capitulo 8.mp3",
    inProgress: false,
    isFullBook: false
  },
  {
    id: 9,
    title: "Capítulo 9: Misterios y Amistad",
    description: "Los lazos que se forman en la búsqueda de la verdad",
    date: "21 de Mayo 2025",
    pdf: "/novela/capitulos/Capitulo 9 - Misterios y Amistad.pdf",
    audio: "/novela/capitulos/Capitulo 9.mp3",
    inProgress: false,
    isFullBook: false
  },
  {
    id: 10,
    title: "Capítulo 10: En desarrollo",
    description: "",
    date: "¡Pronto disponible!",
    pdf: null,
    audio: null,
    inProgress: true,
    isFullBook: false
  },
  {
    id: 11,
    title: "Libro Completo",
    description: "Disfruta de la experiencia completa de la novela con todos los capítulos",
    date: "¡Pronto disponible!",
    pdf: null,
    audio: null,
    inProgress: true,
    isFullBook: true
  },
];

export const Novel: React.FC = () => {
  const [selected, setSelected] = React.useState("overview");
  const { language } = useLanguage();
  
  return (
    <div className="min-h-screen bg-background py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-1">
              <img 
                src="images/portada1.png" 
                alt="The Digital Horizon book cover" 
                className="rounded-lg shadow-lg w-full max-w-xs mx-auto"
              />
            </div>
            
            <div className="md:col-span-2">
              <div className="flex flex-wrap gap-2 mb-4">
                <Chip color="primary" variant="flat">{language === "es" ? "Ciencia Ficción" : "Science Fiction"}</Chip>
                <Chip color="secondary" variant="flat">{language === "es" ? "Tecnología" : "Technology"}</Chip>
                <Chip color="default" variant="flat">{language === "es" ? "Distopía" : "Dystopian"}</Chip>
              </div>
              
              <h1 className="text-4xl font-bold mb-2">Bajo la normalidad</h1>
              <p className="text-default-500 mb-4">Una novela de Carlos Freire</p>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center">
                  <Icon icon="lucide:star" className="text-warning" />
                  <Icon icon="lucide:star" className="text-warning" />
                  <Icon icon="lucide:star" className="text-warning" />
                  <Icon icon="lucide:star" className="text-warning" />
                  <Icon icon="lucide:star-half" className="text-warning" />
                  <span className="ml-2 text-default-500">4.5/5</span>
                </div>
                <Divider orientation="vertical" />
                <div className="flex items-center gap-1">
                  <Icon icon="lucide:book-open" className="text-default-500" />
                  <span className="text-default-500">{language === "es" ? "320 páginas" : "320 pages"}</span>
                </div>
                <Divider orientation="vertical" />
                <div className="flex items-center gap-1">
                  <Icon icon="lucide:calendar" className="text-default-500" />
                  <span className="text-default-500">{language === "es" ? "Publicado en 2025" : "Published 2025"}</span>
                </div>
              </div>
              
              <p className="text-default-600 mb-6">
                {language === "es" ? 
                  "El descubrimiento de un secreto profundo y antiguo bajo la superficie de un pueblo aparentemente normal. Este secreto, ligado a estructuras ocultas y fenómenos inexplicables, desafía la comprensión de los jóvenes protagonistas y los arrastra a una peligrosa investigación que pone a prueba su amistad, enfrentándolos a las acciones encubiertas de aquellos en quienes confiaban y revelando una historia oculta que envuelve a todo su pueblo." :
                  "A secret is discovered in the depths of a seemingly normal town. This secret, linked to hidden structures and inexplicable phenomena, challenges the understanding of the young protagonists and leads them on a dangerous investigation that puts their friendship to the test, confronting them with the hidden actions of those they trusted and revealing an unknown story that envelops the entire town."
                }
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  color="primary"
                  endContent={<Icon icon="lucide:book-open" />}
                >
                  {language === "es" ? "Leer muestra" : "Read Sample"}
                </Button>
                <Button 
                  color="default" 
                  variant="flat"
                  endContent={<Icon icon="lucide:shopping-cart" />}
                >
                  {language === "es" ? "Comprar libro" : "Purchase Book"}
                </Button>
              </div>
            </div>
          </div>
          
          <Tabs 
            aria-label="Novel sections" 
            selectedKey={selected} 
            onSelectionChange={key => setSelected(key as string)}
            variant="underlined"
            color="primary"
            className="mb-8"
          >
            <Tab key="chapters" title={language === "es" ? "Capítulos" : "Chapters"} />
            <Tab key="overview" title={language === "es" ? "Resumen" : "Overview"} />
            <Tab key="synopsis" title={language === "es" ? "Sinopsis" : "Synopsis"} />
            <Tab key="characters" title={language === "es" ? "Personajes" : "Characters"} />
            <Tab key="reviews" title={language === "es" ? "Reseñas" : "Reviews"} />
          </Tabs>
          
          {selected === "chapters" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">{language === "es" ? "Capítulos" : "Chapters"}</h2>
              
              {/* Podcast Card */}
              <Card className="md:col-span-2 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 border border-blue-200 dark:border-blue-900/50">
                <CardBody className="p-3 sm:p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 flex-shrink-0">
                      <div className="w-full h-full bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center">
                        <Icon icon="mdi:headphones" className="text-2xl text-blue-600 dark:text-blue-400" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-center gap-2">
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                          {language === "es" ? "Resumen de la Novela" : "Novel Summary"}
                        </h3>
                        <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-[10px] px-2 py-0.5 rounded-full whitespace-nowrap">
                          {language === "es" ? "Podcast" : "Podcast"}
                        </span>
                      </div>
                      <p className="text-xs text-gray-600 dark:text-gray-300 line-clamp-2 mt-0.5">
                        {language === "es" 
                          ? "Escucha un resumen de la trama, personajes y misterios de 'Bajo la Normalidad'."
                          : "Listen to a summary of the plot, characters, and mysteries of 'Bajo la Normalidad'."}
                      </p>
                      <div className="mt-2">
                        <AudioPlayer 
                          src="/novela/capitulos/Podcast.mp3"
                          title={language === "es" ? "Resumen de la Novela" : "Novel Summary"}
                          label={language === "es" ? "Escuchar" : "Listen"}
                        />
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6">
                {chapters.map((chapter) => (
                  <Card key={chapter.id} className={`hover:shadow-lg transition-shadow ${chapter.isFullBook ? 'md:col-span-2 border-2 border-blue-200 dark:border-blue-800' : ''} text-sm sm:text-base`}>
                    <CardBody className="space-y-2 sm:space-y-4 p-3 sm:p-6">
                      <div className="flex justify-between items-start">
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm sm:text-lg font-semibold line-clamp-2">{chapter.title}</h3>
                          {chapter.description && (
                            <p className="text-xs sm:text-sm text-default-500 line-clamp-2">{chapter.description}</p>
                          )}
                        </div>
                        {!chapter.isFullBook && !chapter.inProgress && (
                          <span className="text-[10px] sm:text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-0.5 sm:py-1 rounded-full whitespace-nowrap ml-2">
                            {chapter.date}
                          </span>
                        )}
                      </div>
                      
                      {chapter.audio && (
                        <div className="mt-2">
                          {chapter.audio && (
                            <AudioPlayer 
                              src={chapter.audio} 
                              title={chapter.title}
                              label={language === "es" ? "Escuchar" : "Listen"}
                            />
                          )}
                        </div>
                      )}
                    </CardBody>
                    <CardFooter className="flex justify-between items-center pt-0 px-0 sm:px-6 pb-2 sm:pb-4">
                      {chapter.inProgress ? (
                        <span className="text-sm text-yellow-600 dark:text-yellow-400">
                          {language === "es" ? "En desarrollo" : "In progress"}
                        </span>
                      ) : chapter.isFullBook ? (
                        <span className="text-sm text-blue-600 dark:text-blue-400">
                          {language === "es" ? "¡Próximamente!" : "Coming soon!"}
                        </span>
                      ) : (
                        chapter.pdf ? (
                          <a 
                            href={chapter.pdf}
                            download
                            className="text-sm text-primary hover:underline flex items-center gap-1"
                          >
                            <Icon icon="mdi:file-pdf-box" className="text-lg" />
                            {language === "es" ? "Descargar PDF" : "Download PDF"}
                          </a>
                        ) : null
                      )}
                      
                      {!chapter.isFullBook && !chapter.inProgress && (
                        <div className="flex items-center gap-2 text-sm text-default-500">
                          <Icon icon="mdi:clock-outline" />
                          {language === "es" ? "Tiempo estimado: 15 min" : "Estimated time: 15 min"}
                        </div>
                      )}
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          )}
          
          {selected === "overview" && (
            <Card>
            <CardBody className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-3">{language === "es" ? "Sobre el libro" : "About the Book"}</h2>
                <p className="text-default-600">
                  {language === "es" ? 
                    "Una novela de misterio y suspense que sigue a dos amigos adolescentes, Kurt y Bob, en un pueblo aislado y peculiar. El descubrimiento de una trampilla secreta en el sótano de Bob los embarca en una peligrosa investigación sobre el pasado de la casa, los secretos del padre de Bob, un reputado arquitecto, y la extraña historia oculta bajo la superficie de su aparentemente tranquilo pueblo." :
                    "A mystery and suspense novel following two teenage friends, Kurt and Bob, in an isolated and peculiar village. The discovery of a secret trapdoor in Bob's basement embarks them on a dangerous investigation into the house's past, the secrets of Bob's father, a renowned architect, and the strange hidden history beneath the surface of their seemingly quiet town."
                  }
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-3">{language === "es" ? "Temas" : "Themes"}</h2>
                <ul className="list-disc pl-5 space-y-2 text-default-600">
                  <li>{language === "es" ? "Misterios ocultos bajo una fachada de normalidad." : "Hidden mysteries beneath a facade of normality."}</li>
                  <li>{language === "es" ? "La opresiva atmósfera de la vida en un pueblo pequeño y la vigilancia constante." : "The oppressive atmosphere of small-town life and constant surveillance."}</li>
                  <li>{language === "es" ? "La fuerza de la amistad y la lealtad ante la adversidad." : "The strength of friendship and loyalty in the face of adversity."}</li>
                  <li>{language === "es" ? "Secretos familiares y el complejo legado de los padres." : "Family secrets and the complex legacy of parents."}</li>
                  <li>{language === "es" ? "La búsqueda de la verdad en un entorno lleno de incertidumbre y engaños." : "The search for truth in an environment filled with uncertainty and deceit."}</li>
                  <li>{language === "es" ? "La tensión entre la lógica y lo inexplicable." : "The tension between logic and the inexplicable."}</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-3">{language === "es" ? "Proceso de Escritura" : "Writing Process"}</h2>
                <p className="text-default-600">
                  {language === "es" ? 
                    "Esta novela nació de la exploración de los lazos de amistad juvenil enfrentados a lo desconocido. El desarrollo de la trama se centró en construir una atmósfera de suspense progresivo, donde los secretos del pueblo y las relaciones entre personajes se desvelan capa por capa, invitando al lector a resolver el misterio junto a sus protagonistas." :
                    "This novel was born from exploring the bonds of youthful friendship confronted by the unknown. The plot development focused on building an atmosphere of progressive suspense, where the town's secrets and character relationships are unveiled layer by layer, inviting the reader to solve the mystery alongside its protagonists."
                  }
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-3">{language === "es" ? "Inspiración" : "Inspiration"}</h2>
                <p className="text-default-600">
                  {language === "es" ? 
                    "Inspirada en las narrativas de misterio que se cuecen a fuego lento en pueblos pequeños donde todos se conocen pero nadie revela sus verdaderos secretos. La obra bebe de historias donde la curiosidad juvenil se convierte en el motor para desentrañar enigmas más profundos y oscuros de lo que aparentan, y donde la historia familiar juega un papel crucial." :
                    "Inspired by slow-burn mystery narratives set in small towns where everyone knows each other, yet no one reveals their true secrets. The work draws from stories where youthful curiosity becomes the driving force to unravel enigmas deeper and darker than they appear, and where family history plays a crucial role."
                  }
                </p>
              </div>
            </CardBody>
          </Card>
          )}
          
          {selected === "synopsis" && (
            <Card>
            <CardBody className="space-y-6">
              <p className="text-default-600">
                {language === "es" ? 
                  "En un pueblo perdido donde todos se conocen y la privacidad es un lujo inalcanzable, los adolescentes Kurt y Bob llevan vidas aparentemente ordinarias. Kurt, observador e inquieto, anhela escapar de la sofocante vigilancia vecinal, mientras que Bob, más pragmático y amante del orden, encuentra refugio en la lógica de su jardín y sus abejas. Pero bajo la superficie de normalidad, el pueblo esconde una atmósfera cargada de secretos no dichos y una extraña sensación de aislamiento." :
                  "In a lost village where everyone knows each other and privacy is an unattainable luxury, teenagers Kurt and Bob lead seemingly ordinary lives. Kurt, observant and restless, yearns to escape the suffocating neighborhood watch, while Bob, more pragmatic and a lover of order, finds refuge in the logic of his garden and his bees. But beneath the surface of normality, the village hides an atmosphere heavy with unspoken secrets and a strange sense of isolation."
                }
              </p>
              
              <p className="text-default-600">
                {language === "es" ? 
                  "Su mundo da un vuelco cuando, en el sótano de la casa de Bob —una casa remodelada por su propio padre, un respetado arquitecto—, descubren una trampilla oculta. Inicialmente sellada y emanando una luz inquietante, la trampilla conduce a un pasadizo desconocido. El miedo se mezcla con una irresistible curiosidad, empujándolos hacia el umbral de un misterio que amenaza con desbaratar la tranquilidad de sus vidas." :
                  "Their world turns upside down when, in the basement of Bob's house—a house remodeled by his own father, a respected architect—they discover a hidden trapdoor. Initially sealed and emanating an unsettling light, the trapdoor leads to an unknown passage. Fear mixes with an irresistible curiosity, pushing them towards the threshold of a mystery that threatens to disrupt the tranquility of their lives."
                }
              </p>
              
              <p className="text-default-600">
                {language === "es" ? 
                  "Armados con unos enigmáticos planos antiguos de la casa, que revelan anotaciones crípticas y una estructura previa a la reforma de su padre, Kurt y Bob se sumergen en una investigación cada vez más peligrosa. ¿Por qué el padre de Bob ocultó el pasadizo? ¿Qué secretos guardan los cimientos de la casa y, por extensión, su propia familia? Cada respuesta parece llevar a más preguntas, tejiendo una red de engaños que se remonta al pasado." :
                  "Armed with enigmatic old house plans, which reveal cryptic annotations and a pre-remodel structure by his father, Kurt and Bob delve into an increasingly dangerous investigation. Why did Bob's father hide the passage? What secrets do the foundations of the house hold, and by extension, his own family? Each answer seems to lead to more questions, weaving a web of deceit that traces back to the past."
                }
              </p>
              
              <p className="text-default-600">
                {language === "es" ? 
                  "A medida que profundizan, los ruidos extraños en la casa de Bob y la sensación de ser observados se intensifican. Pronto se dan cuenta de que los secretos de la casa podrían estar conectados con la historia no contada del pueblo mismo, un lugar reconstruido sobre algo más antiguo y quizás siniestro. Con la ayuda de Terry, un vecino excéntrico con sus propias teorías, intentan descifrar las pistas antes de que sea demasiado tarde." :
                  "As they dig deeper, strange noises in Bob's house and the feeling of being watched intensify. They soon realize that the house's secrets might be connected to the untold history of the town itself, a place rebuilt over something older and perhaps sinister. With the help of Terry, an eccentric neighbor with his own theories, they try to decipher the clues before it's too late."
                }
              </p>
              
              <p className="text-default-600">
                {language === "es" ? 
                  "Lo que comienza como una aventura juvenil se transforma rápidamente en una carrera por la verdad en un laberinto de susurros y sombras. La amistad de Kurt y Bob se pondrá a prueba mientras se enfrentan a la posibilidad de que las personas en las que más confían podrían estar ocultando las verdades más oscuras, y que su pequeño pueblo es mucho más de lo que aparenta." :
                  "What starts as a youthful adventure quickly turns into a race for the truth in a labyrinth of whispers and shadows. Kurt and Bob's friendship will be tested as they confront the possibility that the people they trust most might be hiding the darkest truths, and that their small town is far more than it seems."
                }
              </p>
              
            </CardBody>
          </Card>
          )}
          
          {selected === "characters" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Kurt */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardBody className="p-4">
                  <h3 className="text-lg font-semibold mb-2">Kurt</h3>
                  <p className="text-sm text-default-500 mb-3">{language === "es" ? "El Narrador" : "The Narrator"}</p>
                  <p className="text-sm text-default-600">
                    {language === "es" 
                      ? "Adolescente reflexivo de 16 años, incómodo con la falta de privacidad. Lector apasionado y curioso por lo misterioso, mantiene una relación cercana con su hermano Melvin y su abuelo Ronald. Su amistad con Bob y su amor platónico por Stacy definen su mundo."
                      : "A 16-year-old thoughtful teenager, uncomfortable with the lack of privacy. A passionate reader and curious about the mysterious, he maintains a close relationship with his brother Melvin and grandfather Ronald. His friendship with Bob and his platonic love for Stacy define his world."}
                  </p>
                </CardBody>
              </Card>

              {/* Bob */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardBody className="p-4">
                  <h3 className="text-lg font-semibold mb-2">Bob</h3>
                  <p className="text-sm text-default-500 mb-3">{language === "es" ? "Mejor Amigo" : "Best Friend"}</p>
                  <p className="text-sm text-default-600">
                    {language === "es"
                      ? "De 17 años, reservado y amante de los juegos clásicos. Comparte con su padre la afición por la apicultura. Aunque prefiere lo simple y explicable, se ve arrastrado a los misterios del pueblo junto a Kurt."
                      : "17 years old, reserved and lover of classic games. He shares his father's passion for beekeeping. Although he prefers the simple and explainable, he gets dragged into the town's mysteries with Kurt."}
                  </p>
                </CardBody>
              </Card>

              {/* Terry Newman */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardBody className="p-4">
                  <h3 className="text-lg font-semibold mb-2">Terry Newman</h3>
                  <p className="text-sm text-default-500 mb-3">{language === "es" ? "Vecino Excéntrico" : "Eccentric Neighbor"}</p>
                  <p className="text-sm text-default-600">
                    {language === "es"
                      ? "Considerado 'loco' por los demás, investiga fenómenos extraños y teoriza sobre sueños y dimensiones. Vive con gatos y modifica instrumentos ópticos para observar a sus vecinos."
                      : "Considered 'crazy' by others, he investigates strange phenomena and theorizes about dreams and dimensions. He lives with cats and modifies optical instruments to observe his neighbors."}
                  </p>
                </CardBody>
              </Card>

              {/* Margaret */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardBody className="p-4">
                  <h3 className="text-lg font-semibold mb-2">Margaret</h3>
                  <p className="text-sm text-default-500 mb-3">{language === "es" ? "Madre de Kurt" : "Kurt's Mother"}</p>
                  <p className="text-sm text-default-600">
                    {language === "es"
                      ? "Mujer activa y controladora, centrada en mantener apariencias. Participa en el 'comité de charla' y forma parte de la red de vigilancia vecinal."
                      : "An active and controlling woman, focused on keeping up appearances. She participates in the 'talk committee' and is part of the neighborhood watch network."}
                  </p>
                </CardBody>
              </Card>

              {/* Will */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardBody className="p-4">
                  <h3 className="text-lg font-semibold mb-2">Will</h3>
                  <p className="text-sm text-default-500 mb-3">{language === "es" ? "Padre de Kurt" : "Kurt's Father"}</p>
                  <p className="text-sm text-default-600">
                    {language === "es"
                      ? "Trabaja en el ayuntamiento y trata de enterarse de todo, aunque se confunde fácilmente. Mantiene una relación tensa con su esposa y una vida doméstica caótica."
                      : "Works at the town hall and tries to know everything, though he gets easily confused. He maintains a tense relationship with his wife and a chaotic domestic life."}
                  </p>
                </CardBody>
              </Card>

              {/* Melvin */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardBody className="p-4">
                  <h3 className="text-lg font-semibold mb-2">Melvin</h3>
                  <p className="text-sm text-default-500 mb-3">{language === "es" ? "Hermano de Kurt" : "Kurt's Brother"}</p>
                  <p className="text-sm text-default-600">
                    {language === "es"
                      ? "Compinche de Kurt en sus escapadas. Construye maquetas y trabaja en un taller, ahorrando para irse del pueblo. Es directo, tenaz y burlón."
                      : "Kurt's partner in crime. He builds models and works in a workshop, saving money to leave town. He's straightforward, tenacious, and teasing."}
                  </p>
                </CardBody>
              </Card>

              {/* Ronald */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardBody className="p-4">
                  <h3 className="text-lg font-semibold mb-2">Ronald</h3>
                  <p className="text-sm text-default-500 mb-3">{language === "es" ? "Abuelo de Kurt" : "Kurt's Grandfather"}</p>
                  <p className="text-sm text-default-600">
                    {language === "es"
                      ? "Figura sabia y respetada. Ve películas del oeste y frecuenta el bar. Tiene recuerdos melancólicos del pueblo antes de su reconstrucción."
                      : "A wise and respected figure. He watches western movies and frequents the bar. He has melancholic memories of the town before its reconstruction."}
                  </p>
                </CardBody>
              </Card>

              {/* Robert */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardBody className="p-4">
                  <h3 className="text-lg font-semibold mb-2">Robert</h3>
                  <p className="text-sm text-default-500 mb-3">{language === "es" ? "Padre de Bob" : "Bob's Father"}</p>
                  <p className="text-sm text-default-600">
                    {language === "es"
                      ? "Arquitecto ocupado pero atento. Comparte con Bob actividades como el ajedrez y el cuidado de colmenas. Esconde secretos en su casa, especialmente en el sótano."
                      : "A busy but attentive architect. He shares activities like chess and beekeeping with Bob. He hides secrets in his house, especially in the basement."}
                  </p>
                </CardBody>
              </Card>

              {/* Stacy */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardBody className="p-4">
                  <h3 className="text-lg font-semibold mb-2">Stacy</h3>
                  <p className="text-sm text-default-500 mb-3">{language === "es" ? "Hermana de Bob" : "Bob's Sister"}</p>
                  <p className="text-sm text-default-600">
                    {language === "es"
                      ? "De 20 años, es el amor platónico de Kurt, quien la observa en secreto. Tiene una relación conflictiva con su hermano Bob y un comportamiento libre y efímero."
                      : "20 years old, she's Kurt's platonic love, whom he secretly observes. She has a conflicted relationship with her brother Bob and a free-spirited, ephemeral behavior."}
                  </p>
                </CardBody>
              </Card>

              {/* El Perro San Bernardo */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardBody className="p-4">
                  <h3 className="text-lg font-semibold mb-2">
                    {language === "es" ? "El Perro San Bernardo" : "The St. Bernard"}
                  </h3>
                  <p className="text-sm text-default-500 mb-3">
                    {language === "es" ? "Mascota del vecindario" : "Neighborhood Pet"}
                  </p>
                  <p className="text-sm text-default-600">
                    {language === "es"
                      ? "Un perro del vecindario con una obsesión peculiar por Kurt. Cada vez que lo ve, emite un ladrido único que parece intentar comunicar algo. Su comportamiento inusual sugiere que podría percibir algo en el ambiente que los humanos no pueden ver."
                      : "A neighborhood dog with a peculiar obsession with Kurt. Every time he sees him, he emits a unique bark that seems to be trying to communicate something. His unusual behavior suggests he might perceive something in the environment that humans can't see."}
                  </p>
                </CardBody>
              </Card>

              {/* Señora Cole */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardBody className="p-4">
                  <h3 className="text-lg font-semibold mb-2">
                    {language === "es" ? "Señora Cole" : "Mrs. Cole"}
                  </h3>
                  <p className="text-sm text-default-500 mb-3">
                    {language === "es" ? "Vecina entrometida" : "Nosy Neighbor"}
                  </p>
                  <p className="text-sm text-default-600">
                    {language === "es"
                      ? "Vecina que observa sin pudor desde su ventana. Parte activa de la red de vigilancia del barrio, parece tener una necesidad insaciable de estar al tanto de todo lo que sucede. "
                      : "A neighbor who shamelessly watches from her window. An active part of the neighborhood watch, she seems to have an insatiable need to know everything that happens."}
                  </p>
                </CardBody>
              </Card>
            </div>
          )}

          {selected === "reviews" && (
            <div className="space-y-6">
              <Card>
                <CardBody>
                  <h3 className="text-xl font-semibold mb-2">ARIA</h3>
                  <p className="text-default-500 mb-3">Artificial Intelligence</p>
                  <p className="text-default-600">
                    {language === "es" ? 
                      "Una inteligencia artificial avanzada desarrollada por Horizon que ayuda a gestionar la red neural. A medida que el relato avanza, las respuestas de ARIA se vuelven cada vez más nuancadas y independientes, levantando preguntas sobre la naturaleza de la conciencia y la bordeada entre la humanidad y la inteligencia artificial."
                    :
                      "An advanced AI system developed by Horizon that helps manage the neural network. As the story progresses, ARIA's responses become increasingly nuanced and independent, raising questions about the nature of consciousness and the blurring line between human and artificial intelligence."
                    }
                  </p>
                </CardBody>
              </Card>
            </div>
          )}
          
          {selected === "reviews" && (
            <div className="space-y-6">
              <Card>
                <CardBody>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold">A Thought-Provoking Exploration of Technology and Humanity</h3>
                      <div className="flex items-center mt-1">
                        <Icon icon="lucide:star" className="text-warning" />
                        <Icon icon="lucide:star" className="text-warning" />
                        <Icon icon="lucide:star" className="text-warning" />
                        <Icon icon="lucide:star" className="text-warning" />
                        <Icon icon="lucide:star" className="text-warning" />
                      </div>
                    </div>
                    <p className="text-default-500 text-sm">The New York Times</p>
                  </div>
                  <p className="text-default-600">
                    "The Digital Horizon stands out in the crowded field of tech-focused science fiction by asking 
                    profound questions about consciousness and humanity's future. The author's technical background 
                    lends authenticity to the world-building, while the characters feel genuine in their struggles 
                    with the ethical dilemmas presented. A must-read for anyone interested in the philosophical 
                    implications of our increasingly digital existence."
                  </p>
                </CardBody>
              </Card>
              
              <Card>
                <CardBody>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold">Compelling Characters in a Believable Near-Future</h3>
                      <div className="flex items-center mt-1">
                        <Icon icon="lucide:star" className="text-warning" />
                        <Icon icon="lucide:star" className="text-warning" />
                        <Icon icon="lucide:star" className="text-warning" />
                        <Icon icon="lucide:star" className="text-warning" />
                        <Icon icon="lucide:star-half" className="text-warning" />
                      </div>
                    </div>
                    <p className="text-default-500 text-sm">Sci-Fi Today</p>
                  </div>
                  <p className="text-default-600">
                    "What makes 'The Digital Horizon' work so well is how grounded it feels despite its futuristic 
                    setting. The technology feels like a natural evolution of current trends, and the characters' 
                    reactions to their world ring true. Alex Chen is a particularly well-crafted protagonist, 
                    technically brilliant but emotionally complex. The novel's pacing occasionally falters in the 
                    middle sections, but the thought-provoking finale more than makes up for any minor shortcomings."
                  </p>
                </CardBody>
              </Card>
              
              <Card>
                <CardBody>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold">A Fresh Voice in Science Fiction</h3>
                      <div className="flex items-center mt-1">
                        <Icon icon="lucide:star" className="text-warning" />
                        <Icon icon="lucide:star" className="text-warning" />
                        <Icon icon="lucide:star" className="text-warning" />
                        <Icon icon="lucide:star" className="text-warning" />
                        <Icon icon="lucide:star" className="text-default-300" />
                      </div>
                    </div>
                    <p className="text-default-500 text-sm">Literary Review</p>
                  </div>
                  <p className="text-default-600">
                    "The author brings a unique perspective to the cyberpunk genre, combining technical knowledge 
                    with genuine philosophical inquiry. The novel excels in its exploration of consciousness and 
                    identity in a digitally mediated world. While some of the supporting characters could use more 
                    development, the central relationship between Alex and Maya provides a compelling emotional 
                    core to balance the high-concept ideas. An impressive debut that marks the author as a voice 
                    to watch in contemporary science fiction."
                  </p>
                </CardBody>
              </Card>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};