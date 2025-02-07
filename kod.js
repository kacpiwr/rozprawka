function addBooks(){
    let books = {
        "lektury": [
          "Rok 1984",
          "Lalka",
          "Ferdydurke",
          "Przedwiośnie",
          "Pan Tadeusz",
          "Zemsta",
          "Chłopi",
          "Zbrodnia i kara",
          "Biblia",
          "Skąpiec",
          "Inny świat",
          "Zdążyć przed Panem Bogiem",
          "Tango",
          "Makbet",
          "Dziady cz. II",
          "Balladyna",
          "Dżuma"
        ]
      }
      books.lektury.forEach(book => {
        $(document).ready(function(){
            var newOption = $('<option></option>');
            newOption.val(book).text(book);
            $('#books').append(newOption)
        })
      });
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Zamiana miejscami
    }
    return array;
  }
  
  
function newTopic(){
    let src="./tematy.json";
    // try{
    //     const topics = fetch(src);
    //     if (!topics.ok) {
    //         throw new Error(`Response status: ${response.status}`);
    //     }
    //     console.log(topics)
    // }
    // catch(error){
    //     console.log("error")
    // }
    let topics = {
        "tematy": [
          {
            "temat": "Czy rozwój technologii ułatwia czy utrudnia życie człowieka?",
            "lektury": ["Rok 1984", "Lalka"],
            "konteksty": [
              "Społeczny wpływ technologii na komunikację i relacje międzyludzkie.",
              "Zależność od technologii w pracy i codziennym życiu."
            ],
            "teza": "Rozwój technologii zarówno ułatwia, jak i komplikuje życie człowieka.",
            "argumenty": [
              "Technologia umożliwia szybszy dostęp do informacji i ułatwia komunikację.",
              "Jednak uzależnienie od technologii może prowadzić do dehumanizacji i braku prywatności."
            ]
          },
          {
            "temat": "Czy współczesna młodzież ma łatwiejszy start w dorosłość niż poprzednie pokolenia?",
            "lektury": ["Ferdydurke", "Przedwiośnie"],
            "konteksty": [
              "Zmiany w systemie edukacyjnym i dostęp do nowych technologii.",
              "Sytuacja ekonomiczna i możliwości rozwoju zawodowego."
            ],
            "teza": "Współczesna młodzież ma łatwiejszy start w dorosłość niż poprzednie pokolenia.",
            "argumenty": [
              "Młodzież ma dostęp do większej liczby narzędzi edukacyjnych i technologicznych.",
              "Jednak rosnące koszty życia i problemy ze znalezieniem pracy stawiają przed młodymi ludźmi duże wyzwania."
            ]
          },
          {
            "temat": "Czy warto znać i pielęgnować tradycję narodową?",
            "lektury": ["Pan Tadeusz", "Zemsta"],
            "konteksty": [
              "Rola tradycji w kształtowaniu tożsamości narodowej.",
              "Znaczenie tradycji w jednoczeniu społeczności w trudnych momentach historycznych."
            ],
            "teza": "Zachowanie i pielęgnowanie tradycji narodowej jest wartościowe.",
            "argumenty": [
              "Tradycja pozwala na zachowanie kulturowego dziedzictwa i tożsamości.",
              "Pomaga jednoczyć społeczeństwo, szczególnie w trudnych okresach."
            ]
          },
          {
            "temat": "Czy człowiek jest odpowiedzialny za zmiany klimatyczne?",
            "lektury": ["Chłopi", "Przedwiośnie"],
            "konteksty": [
              "Wpływ działalności człowieka na środowisko naturalne.",
              "Społeczna i polityczna odpowiedzialność za zmiany klimatyczne."
            ],
            "teza": "Człowiek ponosi odpowiedzialność za zmiany klimatyczne.",
            "argumenty": [
              "Wzrost emisji gazów cieplarnianych w wyniku działalności przemysłowej i rolniczej.",
              "Zaniechania w zakresie ochrony środowiska prowadzą do nieodwracalnych zmian w ekosystemie."
            ]
          },
          {
            "temat": "Czy literatura może mieć wpływ na postawy moralne człowieka?",
            "lektury": ["Zbrodnia i kara", "Biblia"],
            "konteksty": [
              "Rola literatury w kształtowaniu postaw etycznych.",
              "Przykłady literackie, które wpływają na refleksję nad dobrem i złem."
            ],
            "teza": "Literatura może mieć wpływ na postawy moralne człowieka.",
            "argumenty": [
              "Dzięki literaturze człowiek może lepiej zrozumieć złożoność ludzkich wyborów i ich konsekwencje.",
              "Dzieła literackie, takie jak 'Zbrodnia i kara', skłaniają do refleksji nad moralnością i etyką."
            ]
          },
          {
            "temat": "Czy pieniądze dają szczęście?",
            "lektury": ["Lalka", "Skąpiec"],
            "konteksty": [
              "Relacja między bogactwem a poczuciem spełnienia życiowego.",
              "Szczęście jako wartość niematerialna, niezależna od posiadania dóbr materialnych."
            ],
            "teza": "Pieniądze same w sobie nie dają szczęścia.",
            "argumenty": [
              "Pieniądze mogą ułatwić życie, ale nie gwarantują wewnętrznej satysfakcji.",
              "Szczęście często zależy od relacji międzyludzkich, a nie od zasobów materialnych."
            ]
          },
          {
            "temat": "Czy każdy człowiek powinien mieć dostęp do bezpłatnej edukacji na wszystkich poziomach?",
            "lektury": ["Lalka", "Ferdydurke"],
            "konteksty": [
              "Równość szans w dostępie do edukacji.",
              "Edukacja jako klucz do rozwoju społeczeństwa i gospodarki."
            ],
            "teza": "Każdy człowiek powinien mieć dostęp do bezpłatnej edukacji na wszystkich poziomach.",
            "argumenty": [
              "Edukacja jest podstawowym prawem człowieka i powinna być dostępna dla wszystkich.",
              "Dostęp do edukacji zapewnia równość szans i rozwój społeczny."
            ]
          },
          {
            "temat": "Czy nauka historii jest istotna dla współczesnego człowieka?",
            "lektury": ["Inny świat", "Zdążyć przed Panem Bogiem"],
            "konteksty": [
              "Wiedza o przeszłości jako podstawa zrozumienia współczesnych wydarzeń.",
              "Przeszłość jako narzędzie w unikaniu błędów historycznych."
            ],
            "teza": "Nauka historii jest istotna dla współczesnego człowieka.",
            "argumenty": [
              "Zrozumienie historii pomaga uniknąć powtórzenia tych samych błędów.",
              "Znajomość historii pozwala lepiej rozumieć współczesne problemy społeczne i polityczne."
            ]
          },
          {
            "temat": "Czy media społecznościowe bardziej łączą czy dzielą ludzi?",
            "lektury": ["Rok 1984", "Ferdydurke"],
            "konteksty": [
              "Rola mediów społecznościowych w tworzeniu więzi międzyludzkich.",
              "Negatywne aspekty mediów społecznościowych, takie jak izolacja czy dezinformacja."
            ],
            "teza": "Media społecznościowe bardziej dzielą niż łączą ludzi.",
            "argumenty": [
              "Media społecznościowe mogą prowadzić do izolacji i poczucia samotności, mimo pozornej komunikacji.",
              "Ułatwiają rozprzestrzenianie dezinformacji, co pogłębia podziały społeczne."
            ]
          },
          {
            "temat": "Czy kultura masowa ma pozytywny wpływ na społeczeństwo?",
            "lektury": ["Tango", "Ferdydurke"],
            "konteksty": [
              "Kultura masowa jako narzędzie integracji społecznej.",
              "Wzrost konsumpcjonizmu i powierzchowności w społeczeństwie."
            ],
            "teza": "Kultura masowa nie ma jednoznacznie pozytywnego wpływu na społeczeństwo.",
            "argumenty": [
              "Kultura masowa może łączyć ludzi poprzez wspólne doświadczenia, ale również prowadzi do powierzchowności i braku głębokich refleksji.",
              "Wzrost konsumpcjonizmu oraz trendów populistycznych, które mogą osłabiać krytyczne myślenie."
            ]
          },
          {
            "temat": "Czy przyjaźń może przetrwać każdą próbę?",
            "lektury": ["Lalka", "Zbrodnia i kara"],
            "konteksty": [
              "Siła przyjaźni w obliczu trudnych wyborów życiowych.",
              "Przyjaźń w kontekście moralnych dylematów i zdrady."
            ],
            "teza": "Przyjaźń może przetrwać każdą próbę, ale tylko wtedy, gdy opiera się na zaufaniu i lojalności.",
            "argumenty": [
              "Przyjaźń jest w stanie przetrwać trudne sytuacje, jeżeli opiera się na prawdziwej, niewzruszonej więzi.",
              "Jednak zdrada czy brak lojalności mogą zniszczyć nawet najsilniejsze przyjaźnie, jak pokazuje historia Raskolnikowa."
            ]
          },
          {
            "temat": "Czy warto walczyć o swoje marzenia?",
            "lektury": ["Lalka", "Pan Tadeusz"],
            "konteksty": [
              "Marzenia jako motor do działania i rozwoju osobistego.",
              "Konflikt między realizowaniem osobistych celów a obowiązkami wobec innych."
            ],
            "teza": "Warto walczyć o swoje marzenia, ale należy zachować równowagę między osobistymi pragnieniami a odpowiedzialnością społeczną.",
            "argumenty": [
              "Realizacja marzeń daje poczucie spełnienia, ale wymaga determinacji i poświęcenia.",
              "Jednak nadmierne dążenie do własnych celów kosztem innych może prowadzić do izolacji i frustracji."
            ]
          },
          {
            "temat": "Czy każdy człowiek zasługuje na drugą szansę?",
            "lektury": ["Zbrodnia i kara", "Biblia"],
            "konteksty": [
              "Moralne wybaczenie i proces odkupienia win.",
              "Społeczna potrzeba drugiej szansy w kontekście przestępstw i błędów życiowych."
            ],
            "teza": "Każdy człowiek zasługuje na drugą szansę, jeżeli wyrazi skruchę i dąży do poprawy.",
            "argumenty": [
              "Drugie szanse są podstawą moralności i umożliwiają proces odkupienia, jak w przypadku Raskolnikowa.",
              "Człowiek, który świadomie zmienia swoje postępowanie, zasługuje na możliwość naprawienia swoich błędów."
            ]
          },
          {
            "temat": "Czy wyobcowanie jest nieuniknioną częścią ludzkiego życia?",
            "lektury": ["Dżuma", "Ferdydurke"],
            "konteksty": [
              "Społeczne alienowanie jednostki przez normy i konwenanse.",
              "Ludzkie poczucie wyobcowania w wyniku nieporozumień i nieprzystosowania."
            ],
            "teza": "Wyobcowanie jest nieuniknioną częścią ludzkiego życia, wynikającą z napięć między jednostką a społeczeństwem.",
            "argumenty": [
              "Człowiek, który nie przystaje do ogólnie przyjętych norm społecznych, często doświadcza alienacji.",
              "Wyobcowanie może wynikać także z wewnętrznych konfliktów i potrzeby indywidualności."
            ]
          },
          {
            "temat": "Czy ludzie uczą się na błędach historii?",
            "lektury": ["Rok 1984", "Inny świat"],
            "konteksty": [
              "Historia jako narzędzie do nauki i unikania powtórzenia błędów.",
              "Cykliczność wydarzeń historycznych i tendencja do powtarzania błędów."
            ],
            "teza": "Ludzie nie uczą się na błędach historii, co prowadzi do powtarzania tych samych dramatów.",
            "argumenty": [
              "Pomimo nauk płynących z historii, społeczeństwa często powtarzają błędy, jak w przypadku totalitaryzmów.",
              "Ignorowanie przeszłości może prowadzić do tych samych tragedii, które już miały miejsce."
            ]
          },
          {
            "temat": "Czy w życiu człowieka ważniejsza jest wolność czy bezpieczeństwo?",
            "lektury": ["Rok 1984", "Zdążyć przed Panem Bogiem"],
            "konteksty": [
              "Wolność jednostki a państwowa kontrola.",
              "Bezpieczeństwo jako cena za utratę prywatności."
            ],
            "teza": "W życiu człowieka ważniejsza jest wolność, ponieważ to ona stanowi podstawę godności i samorealizacji.",
            "argumenty": [
              "Wolność pozwala na pełne rozwinięcie potencjału człowieka, nawet kosztem pewnego ryzyka.",
              "Ograniczenie wolności, nawet w imię bezpieczeństwa, prowadzi do utraty indywidualności i godności."
            ]
          },
          {
            "temat": "Czy warto poświęcić siebie dla dobra innych?",
            "lektury": ["Biblia", "Lalka"],
            "konteksty": [
              "Ofiarność i altruizm w służbie wspólnemu dobru.",
              "Tragedie wynikające z nadmiernego poświęcania się kosztem siebie."
            ],
            "teza": "Warto poświęcić siebie dla dobra innych, ale w granicach rozsądku, by nie zatracić samego siebie.",
            "argumenty": [
              "Poświęcenie siebie dla innych może przynieść głębokie poczucie spełnienia, jak w przypadku postaci biblijnych.",
              "Jednak nadmierne poświęcenie może prowadzić do wypalenia i utraty własnej tożsamości."
            ]
          },
          {
            "temat": "Czy człowiek powinien dążyć do nieśmiertelności?",
            "lektury": ["Rok 1984", "Biblia"],
            "konteksty": [
              "Poszukiwanie nieśmiertelności jako dążenie do utrwalenia własnej egzystencji.",
              "Konsekwencje etyczne dążenia do nieśmiertelności w kontekście religijnym."
            ],
            "teza": "Człowiek nie powinien dążyć do nieśmiertelności, ponieważ życie i śmierć są integralną częścią ludzkiej egzystencji.",
            "argumenty": [
              "Dążenie do nieśmiertelności prowadzi do wypaczenia naturalnego porządku rzeczy.",
              "Przyjęcie śmierci jako naturalnej części życia daje pełniejsze zrozumienie sensu istnienia."
            ]
          },
          {
            "temat": "Czy wolność słowa powinna mieć granice?",
            "lektury": ["Rok 1984", "Ferdydurke"],
            "konteksty": [
              "Wolność słowa a odpowiedzialność za wypowiadane treści.",
              "Granice wolności słowa w kontekście mowy nienawiści i dezinformacji."
            ],
            "teza": "Wolność słowa powinna mieć granice, aby nie naruszała praw innych ludzi i nie prowadziła do chaosu.",
            "argumenty": [
              "Wolność słowa jest podstawowym prawem, ale jej nadużywanie może prowadzić do szerzenia mowy nienawiści.",
              "Zachowanie granic wolności słowa jest niezbędne dla utrzymania porządku społecznego."
            ]
          },
          {
            "temat": "Czy przeszłość determinuje przyszłość?",
            "lektury": ["Dżuma", "Przedwiośnie"],
            "konteksty": [
              "Przeszłość jako czynnik kształtujący zachowania i decyzje bohaterów.",
              "Przeszłość społeczeństwa jako podstawowy element determinujący przyszłość jednostki."
            ],
            "teza": "Przeszłość w dużym stopniu determinuje przyszłość, ale człowiek ma możliwość wyboru, jak z nią żyć.",
            "argumenty": [
              "Bohaterowie, jak Cezary Baryka, są w dużym stopniu uwarunkowani przez wydarzenia przeszłości, ale ich przyszłość nie jest z góry przesądzona.",
              "W obliczu epidemii, jak w przypadku Dżumy, ludzie podejmują decyzje, które mogą zmienić ich przyszłość, niezależnie od historycznych doświadczeń."
            ]
          },
          {
            "temat": "Czy zemsta daje satysfakcję?",
            "lektury": ["Zemsta", "Makbet"],
            "konteksty": [
              "Zemsta jako źródło emocji i jej konsekwencje.",
              "Psychologiczne i moralne aspekty zaspokojenia pragnienia zemsty."
            ],
            "teza": "Zemsta nie daje trwałej satysfakcji, ponieważ prowadzi do dalszego cierpienia i pogłębia wewnętrzny konflikt.",
            "argumenty": [
              "Postacie takie jak Makbet pokazują, że zemsta może na początku wydawać się satysfakcjonująca, ale w końcu prowadzi do zguby.",
              "W komedii 'Zemsta' zemsta jest początkowo źródłem śmiechu, ale również ujawnia absurdalność tego dążenia."
            ]
          },
          {
            "temat": "Czy człowiek powinien bać się śmierci?",
            "lektury": ["Biblia", "Dżuma"],
            "konteksty": [
              "Religijne spojrzenie na śmierć jako przejście do wieczności.",
              "Śmierć jako nieuchronny element ludzkiej egzystencji w kontekście choroby i cierpienia."
            ],
            "teza": "Człowiek nie powinien bać się śmierci, gdyż jest naturalnym elementem życia, a akceptacja jej nieuchronności może prowadzić do głębszego zrozumienia sensu istnienia.",
            "argumenty": [
              "Biblia ukazuje śmierć jako przejście do wieczności, co powinno łagodzić lęk przed nią.",
              "W 'Dżumie' Camus pokazuje, jak akceptacja śmierci może prowadzić do większej odwagi w obliczu tragicznych wydarzeń."
            ]
          },
          {
            "temat": "Czy miłość zawsze uszczęśliwia?",
            "lektury": ["Balladyna", "Lalka"],
            "konteksty": [
              "Miłość jako siła, która prowadzi do szczęścia, ale też do cierpienia.",
              "Miłość jako motywacja do działań, które prowadzą do negatywnych konsekwencji."
            ],
            "teza": "Miłość nie zawsze uszczęśliwia, ponieważ może prowadzić do tragedii, jeżeli nie jest odpowiedzialna i nie ma równowagi w uczuciach.",
            "argumenty": [
              "W 'Balladynie' miłość staje się motorem zbrodni, co prowadzi do nieszczęścia.",
              "W 'Lalce' miłość Wokulskiego do Izabeli przynosi mu jedynie cierpienie i izolację."
            ]
          },
          {
            "temat": "Czy człowiek jest kowalem własnego losu?",
            "lektury": ["Makbet", "Przedwiośnie"],
            "konteksty": [
              "Wybory bohaterów jako determinanty ich przyszłości.",
              "Przeznaczenie a osobiste decyzje i działania."
            ],
            "teza": "Człowiek jest kowalem własnego losu, ale jego działania są często uwarunkowane przez czynniki zewnętrzne i społeczne.",
            "argumenty": [
              "Makbet jest przykładem bohatera, który poprzez swoje decyzje i dążenie do władzy zmienia bieg swojego losu.",
              "Cezary Baryka w 'Przedwiośniu' próbuje wpłynąć na przyszłość, ale jego działania są również zdeterminowane przez trudne warunki społeczne i polityczne."
            ]
          },
          {
            "temat": "Czy sztuka powinna mieć granice?",
            "lektury": ["Tango", "Ferdydurke"],
            "konteksty": [
              "Artystyczna wolność a odpowiedzialność wobec społeczeństwa.",
              "Sztuka jako narzędzie wyrażania kontrowersyjnych idei."
            ],
            "teza": "Sztuka powinna mieć granice, by nie naruszać norm etycznych i nie prowadzić do dezinformacji.",
            "argumenty": [
              "W 'Tango' sztuka jest wykorzystywana do wyrażania chaosu społecznego, co pokazuje, że granice w sztuce są konieczne.",
              "W 'Ferdydurke' Witold, próbując wyłamać się z norm społecznych, pokazuje, że brak granic w sztuce prowadzi do jej absurdu."
            ]
          },
          {
            "temat": "Czy człowiek może pokonać swoje słabości?",
            "lektury": ["Zbrodnia i kara", "Biblia"],
            "konteksty": [
              "Moralna walka z wewnętrznymi demonami i słabościami.",
              "Proces przemiany bohaterów przez pokonywanie własnych wad."
            ],
            "teza": "Człowiek może pokonać swoje słabości, ale wymaga to ogromnej pracy nad sobą i często poświęcenia.",
            "argumenty": [
              "Raskolnikow w 'Zbrodni i karze' pokonuje swoje moralne słabości przez wyznanie winy i próbę odkupienia.",
              "W 'Biblii' postacie takie jak Święty Piotr udowadniają, że pokonanie słabości jest możliwe dzięki pokucie i przemianie duchowej."
            ]
          },
          {
            "temat": "Czy warto ulegać emocjom?",
            "lektury": ["Makbet", "Balladyna"],
            "konteksty": [
              "Emocje jako motywacje do działania i ich konsekwencje.",
              "Emocje a racjonalne podejmowanie decyzji."
            ],
            "teza": "Nie warto ulegać emocjom, ponieważ mogą one prowadzić do nieprzemyślanych działań, które mają tragiczne konsekwencje.",
            "argumenty": [
              "W 'Makbecie' emocje związane z ambicją i żądzą władzy prowadzą do morderstw i katastrofy.",
              "W 'Balladynie' emocje związane z zazdrością prowadzą do zbrodni, które zrujnowują życie głównej bohaterki."
            ]
          },
          {
            "temat": "Czy człowiek powinien dążyć do równowagi między rozumem a emocjami?",
            "lektury": ["Lalka", "Biblia"],
            "konteksty": [
              "Rozum i emocje jako sprzeczne siły w życiu człowieka.",
              "Równowaga między rozumem a emocjami jako klucz do pełni życia."
            ],
            "teza": "Człowiek powinien dążyć do równowagi między rozumem a emocjami, ponieważ tylko wtedy osiąga harmonię wewnętrzną i pełnię życia.",
            "argumenty": [
              "W 'Lalce' Wokulski boryka się z rozumem i emocjami w relacji z Izabelą, co pokazuje, jak brak równowagi prowadzi do jego upadku.",
              "W 'Biblii' postacie takie jak Jezus uczą, że prawdziwa mądrość polega na równowadze między emocjami a rozumem."
            ]
          }
        ]
      }
      
    // $(document).ready(function(){
        
        
    // })
    topics = shuffleArray(topics);
    let desiredBook =  $('#books').val();
    console.log(desiredBook);
    let finalTopic
    if(desiredBook == "Dowolne"){
        let randomInteger = getRandomInt(0, topics.tematy.length); 
        finalTopic = topics.tematy[randomInteger];
    }else{
        topics.tematy.forEach(topic => {
            if(topic.lektury[0] == desiredBook || topic.lektury[1] == desiredBook){
                finalTopic = topic;
            }
            // console.log(topic.lektury);
        });
    }
    console.log(finalTopic.temat);

    console.log(finalTopic.lektury);
    $('#yourTopic').text(finalTopic.temat); 
    
    // Czyszczenie list przed dodaniem nowych elementów
    $('#kontekst').empty();
    $('#teza').empty();
    $('#argument').empty();
    
    // Dodawanie kontekstów
    finalTopic.konteksty.forEach(kontekst => {
        let newLi = $('<li></li>').text(kontekst);
        $('#kontekst').append(newLi);
    });
    
    // Dodawanie tezy
    let tezaLi = $('<li></li>').text(finalTopic.teza);
    $('#teza').append(tezaLi);
    
    // Dodawanie argumentów
    finalTopic.argumenty.forEach(argument => {
        let newLi = $('<li></li>').text(argument);
        $('#argument').append(newLi);
    });
    hideKontekst()
    hideTeza()
    hideArg()
};
function showKontekst() {
  $('.konteksty').css('visibility', 'visible');
  console.log("dupa");
  $('#showKontekst').css('visibility', 'hidden');
}
function showTeza() {
  $('.teza').css('visibility', 'visible');
  console.log("dupa");
  $('#showTeza').css('visibility', 'hidden');
}
function showArg() {
  $('.arguents').css('visibility', 'visible');
  console.log("dupa");
  $('#showArgument').css('visibility', 'hidden');
}

function hideKontekst() {
  $('.konteksty').css('visibility', 'hidden');
  console.log("dupa");
  $('#showKontekst').css('visibility', 'visible');
}
function hideTeza() {
  $('.teza').css('visibility', 'hidden');
  console.log("dupa");
  $('#showTeza').css('visibility', 'visible');
}
function hideArg() {
  $('.arguents').css('visibility', 'hidden');
  console.log("dupa");
  $('#showArgument').css('visibility', 'visible');
}