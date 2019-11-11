# projekt-cv
Webbplats som konsumerar REST-webbtjänsts API med read skapad i gulp- grund för webbutveckling i form av automatiseringsprocess.

## Automatiseringsprocessen
Automatiseringsprecessen genom Gulp kopierar, slrå samman och komprimerar filer.
Detta per automatik från de filer arbetet sker i, direkt vid ändring, skapas det publiceringbara versioner av dem.
Det ger en snabbare arbetsprocess, mindre och färre filer som ger en snabbare webbplats.

### Funktionerna
- HTML kopieras och flyttas till publiceringmapp
- Bilder kopieras och flyttas till publiceringmapp
- Sass som skapas komprimeras, autoprefixerad, konverteras till CSS och flyttas till publiceringsmappen med kartläggningsfunktioner för lättare felhantering i Sass filer
- Ecmascript komprimeras och konverteras till JavaScript och flyttas till publiceringsmappen med kartläggningsfunktioner för lättare felhantering i Ecmascript filer

## Webbplatsen
Skapad i HTML med Sass för design. Ecmascript med fetch metoden använder read metoden i CRUD fuktionaliteten som REST-webbtjänsten har för utläsning av CV.

http://studenter.miun.se/~mohj1800/web3/projekt/cv/index.html
