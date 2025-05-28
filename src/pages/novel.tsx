import React from "react";
import { Card, CardBody, Tabs, Tab, Button, Divider, Chip } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useLanguage } from "../components/language-switcher";

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
            <Tab key="overview" title={language === "es" ? "Resumen" : "Overview"} />
            <Tab key="synopsis" title={language === "es" ? "Sinopsis" : "Synopsis"} />
            <Tab key="characters" title={language === "es" ? "Personajes" : "Characters"} />
            <Tab key="reviews" title={language === "es" ? "Reseñas" : "Reviews"} />
          </Tabs>
          
          {selected === "overview" && (
            <Card>
              <CardBody className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold mb-3">{language === "es" ? "Sobre el libro" : "About the Book"}</h2>
                  <p className="text-default-600">
                    {language === "es" ? 
                      "'The Digital Horizon' es una novela de ciencia ficción que explora las líneas difusas entre la humanidad y la tecnología. Ambientada en el año 2052, sigue el viaje de Alex Chen, un brillante programador que descubre un algoritmo oculto que podría alterar fundamentalmente la conciencia humana." :
                      "'The Digital Horizon' is a thought-provoking science fiction novel that explores the blurred lines between humanity and technology. Set in the year 2052, it follows the journey of Alex Chen, a brilliant programmer who discovers a hidden algorithm that could fundamentally alter human consciousness."
                    }
                  </p>
                </div>
                
                <div>
                  <h2 className="text-xl font-semibold mb-3">{language === "es" ? "Temas" : "Themes"}</h2>
                  <ul className="list-disc pl-5 space-y-2 text-default-600">
                    <li>{language === "es" ? "Implicaciones éticas de la inteligencia artificial avanzada" : "The ethical implications of advanced artificial intelligence"}</li>
                    <li>{language === "es" ? "Conciencia humana y lo que define nuestra humanidad" : "Human consciousness and what defines our humanity"}</li>
                    <li>{language === "es" ? "Control corporativo de la tecnología y libertad personal" : "Corporate control over technology and personal freedom"}</li>
                    <li>{language === "es" ? "Naturaleza de la realidad en un mundo digitalmente saturado" : "Nature of reality in a digitally saturated future"}</li>
                    <li>{language === "es" ? "Conexión y soledad en una sociedad hiperconectada" : "Connection and isolation in a hyper-connected society"}</li>
                  </ul>
                </div>
                
                <div>
                  <h2 className="text-xl font-semibold mb-3">{language === "es" ? "Proceso de Escritura" : "Writing Process"}</h2>
                  <p className="text-default-600">
                    {language === "es" ? 
                      "El libro fue escrito a lo largo de dos años, basándose en mis experiencias como desarrollador de software y mi fascinación con las preguntas filosóficas sobre tecnología y conciencia. La investigación incluyó entrevistas con investigadores de inteligencia artificial, neurocientíficos y futuristas para crear un mundo plausible en el futuro cercano." :
                      "The novel was written over a period of two years, drawing from my experiences as a software developer and my fascination with the philosophical questions surrounding technology and consciousness. Research included interviews with AI researchers, neuroscientists, and futurists to create a plausible near-future world."
                    }
                  </p>
                </div>
                
                <div>
                  <h2 className="text-xl font-semibold mb-3">{language === "es" ? "Inspiración" : "Inspiration"}</h2>
                  <p className="text-default-600">
                    {language === "es" ? 
                      "Inspirado por clásicos como William Gibson's 'Neuromancer,' Neal Stephenson's 'Snow Crash,' y más recientes obras explorando la intersección de tecnología y humanidad. El libro también se inspira en conceptos filosóficos sobre conciencia y naturaleza de la realidad." :
                      "Inspired by classics like William Gibson's 'Neuromancer,' Neal Stephenson's 'Snow Crash,' and more recent works exploring the intersection of technology and humanity. The novel also draws from philosophical concepts about consciousness and the nature of reality."
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
                    "En el año 2052, las líneas entre la realidad física y la digital han casi desaparecido. Las interfaces neurales permiten a las personas conectarse directamente al sistema global, experimentando entornos digitales como si fueran reales. Las grandes corporaciones controlan estos sistemas, con Horizon Technologies emergiendo como la fuerza dominante detrás de la plataforma neural más popular del mundo."
                  :
                    "In the year 2052, the boundaries between physical and digital reality have become almost indistinguishable. Neural interfaces allow people to connect directly to the global network, experiencing digital environments as if they were real. Massive corporations control these systems, with Horizon Technologies emerging as the dominant force behind the world's most popular neural interface platform."
                  }
                </p>
                
                <p className="text-default-600">
                  {language === "es" ? 
                    "Alex Chen, un brillante programador trabajando para una pequeña colectiva independiente de software, descubre un anómalio en el código de Horizon—a algoritmo oculto que parece alterar de manera suave los patrones neurales de las personas a lo largo del tiempo. Al investigar más, descubre que este código está gradualmente cambiando cómo las personas piensan, perciben la realidad y, incluso, experimentan emociones."
                  :
                    "Alex Chen, a brillante programador trabajando para una pequeña colectiva independiente de software, descubre un anómalio en el código de Horizon—a algoritmo oculto que parece alterar de manera suave los patrones neurales de las personas a lo largo del tiempo. Al investigar más, descubre que este código está gradualmente cambiando cómo las personas piensan, perciben la realidad y, incluso, experimentan emociones."
                  }
                </p>
                
                <p className="text-default-600">
                  {language === "es" ? 
                    "Juntándose con Dra. Maya Rivera, una neurocientífica investigando los efectos a largo plazo de las interfaces neurales, Alex comienza a descubrir una conspiración que va más allá de la ganancia corporativa. El algoritmo parece diseñado para guiar la conciencia humana hacia una ruta evolutiva específica—una que borra la línea entre humanidad y inteligencia artificial."
                  :
                    "Teaming up with Dr. Maya Rivera, a neuroscientist researching the long-term effects of neural interfaces, Alex begins to uncover a conspiracy that goes beyond corporate profit. The algorithm seems designed to guide human consciousness toward a specific evolutionary path—one that blurs the line between human and artificial intelligence."
                  }
                </p>
                
                <p className="text-default-600">
                  {language === "es" ? 
                    "Al investigar más, Alex y Maya se encuentran objetivo de ambas fuerzas de seguridad de Horizon y una organización misteriosa llamada 'Los Naturales,' que oponen todo el aumento neural. Forzados a ir underground, descubren una comunidad de 'correedores de código'—personas que han encontrado formas de modificar sus propias interfaces neurales para resistir el control corporativo."
                  :
                    "As they investigate further, Alex and Maya find themselves targeted by both Horizon's security forces and a mysterious group calling themselves 'The Naturalists,' who oppose all neural augmentation. Forced to go underground, they discover a community of 'code runners'—people who have found ways to modify their own neural interfaces to resist corporate control."
                  }
                </p>
                
                <p className="text-default-600">
                  {language === "es" ? 
                    "Con tiempo en el juego y Horizon preparando una actualización de plataforma que aceleraría los efectos del algoritmo, Alex debe decidir si revelar la verdad, lo que podría causar una gran panic y una colapso económico, o intentar una solución más peligrosa: crear un contra-algoritmo que podría liberar a la humanidad o destruir la red neural que ahora soporta gran parte de la civilización humana."
                  :
                    "With time running out and Horizon preparing to release a major platform update that would accelerate the algorithm's effects, Alex must decide whether to expose the truth, potentially causing global panic and economic collapse, or to attempt a more dangerous solution: creating a counter-algorithm that could either free humanity or destroy the neural network that now supports much of human civilization."
                  }
                </p>
                
                <p className="text-default-600">
                  {language === "es" ? 
                    "El libro culmina en una carrera contra el tiempo como Alex implementa su solución, forzando una confrontación con el fundador misterioso de Horizon, quien revela el verdadero propósito del algoritmo—un propósito que desafía la comprensión de la humanidad futura y su papel en determinar su futuro."
                  :
                    "The novel culminates in a race against time as Alex implements their solution, forcing a confrontation with Horizon's enigmatic founder, who reveals the true purpose behind the algorithm—a purpose that challenges Alex's understanding of humanity's future and their own role in shaping it."
                  }
                </p>
              </CardBody>
            </Card>
          )}
          
          {selected === "characters" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardBody>
                  <h3 className="text-xl font-semibold mb-2">Alex Chen</h3>
                  <p className="text-default-500 mb-3">Protagonist, Programmer</p>
                  <p className="text-default-600">
                    {language === "es" ? 
                      "Un brillante pero reservado programador que valoriza la verdad y la libertad sobre todo lo demás. Alex ha siempre sido cuestionable sobre la dependencia creciente de las interfaces neurales, a pesar de trabajar con el software diariamente. Su descubrimiento del algoritmo oculto los obliga a confrontar sus propios creencias sobre el papel de la tecnología en la evolución humana."
                    :
                      "A brilliant but socially reserved programmer who values truth and freedom above all else. Alex has always been skeptical of the growing dependence on neural interfaces, despite working with the technology daily. Their discovery of the hidden algorithm forces them to confront their own beliefs about technology's role in human evolution."
                    }
                  </p>
                </CardBody>
              </Card>
              
              <Card>
                <CardBody>
                  <h3 className="text-xl font-semibold mb-2">Dr. Maya Rivera</h3>
                  <p className="text-default-500 mb-3">Neuroscientist, Ally</p>
                  <p className="text-default-600">
                    {language === "es" ? 
                      "Una investigadora líder en tecnología neural que ha comenzado a preocuparse por los efectos a largo plazo de estas interfaces. Maya lleva una perspectiva científica rigurosa y consideración ética a la investigación. Su experiencia personal con la degradación neural de su madre le impulsa a entender el verdadero propósito del algoritmo."
                    :
                      "A leading researcher in neural interface technology who has become increasingly concerned about its long-term effects. Maya brings scientific rigor and ethical consideration to the investigation. Her personal experience with her mother's neural degradation drives her determination to understand the algorithm's true purpose."
                    }
                  </p>
                </CardBody>
              </Card>
              
              <Card>
                <CardBody>
                  <h3 className="text-xl font-semibold mb-2">Elias Vance</h3>
                  <p className="text-default-500 mb-3">Horizon Technologies Founder</p>
                  <p className="text-default-600">
                    {language === "es" ? 
                      "El visionario y enigmático fundador de Horizon Technologies. Publicamente, es conocido como un innovador brillante dedicado a avanzar el potencial humano a través de la tecnología. En realidad, sus motivaciones son mucho más complejas, impulsadas por una profunda visión del futuro humano que pocos entenderán o aceptarán."
                    :
                      "The visionary and enigmatic founder of Horizon Technologies. Publicly, he's known as a brilliant innovator dedicated to advancing human potential through technology. In reality, his motivations are far more complex, driven by a profound vision for humanity's future that few would understand or accept."
                    }
                  </p>
                </CardBody>
              </Card>
              
              <Card>
                <CardBody>
                  <h3 className="text-xl font-semibold mb-2">Zoe Kim</h3>
                  <p className="text-default-500 mb-3">Code Runner, Guide</p>
                  <p className="text-default-600">
                    {language === "es" ? 
                      "Una antigua ingeniera de Horizon que ahora lidera una comunidad de correedores de código. Zoe ha desarrollado técnicas para modificar las interfaces neurales, permitiendo a los usuarios mantener su autonomía. Es astuta, pragmática y profundamente comprometida en preservar la agencia humana en un escenario digitalmente controlado."
                    :
                      "A former Horizon engineer who now leads a community of code runners. Zoe has developed techniques to modify neural interfaces, allowing users to maintain their autonomy. She's streetwise, pragmatic, and deeply committed to preserving human agency in an increasingly controlled digital landscape."
                    }
                  </p>
                </CardBody>
              </Card>
              
              <Card>
                <CardBody>
                  <h3 className="text-xl font-semibold mb-2">Marcus Webb</h3>
                  <p className="text-default-500 mb-3">Naturalist Leader</p>
                  <p className="text-default-600">
                    {language === "es" ? 
                      "El líder charlatán de Los Naturales, una organización opuesta al aumento neural. Una vez un periodista de tecnología prominentemente, Marcus experimentó una tragedia personal que convenció de que la tecnología estaba corrompiendo a la humanidad. Su verdadero compromiso por el bienestar humano es contrastado por su growing extremism y su disposición a usar la violencia para lograr sus objetivos."
                    :
                      "The charismatic leader of The Naturalists, a group opposing neural augmentation. Once a prominent tech journalist, Marcus experienced a personal tragedy that convinced him technology was corrupting humanity. His genuine concern for human welfare is matched by his growing extremism and willingness to use violence to achieve his goals."
                    }
                  </p>
                </CardBody>
              </Card>
              
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