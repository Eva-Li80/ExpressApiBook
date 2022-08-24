# ExpressApiBook

Min tanke var att gå rakt på VG delen och det gjorde jag. Jag startade upp ett project genom git hub och bydggde och bröt ut projectet. Men tyvär så tog jag mig nog vatten över huvudet, jag lyckades bara få till get all och get id med json filen. Så jag tog beslutet att starta ett nytt project och satsa på G delen i första hand..och om tid finns försöka mig på vg delen igen. Så detta är mitt andra project!

Jag valde att projectet skulle handla om böcker.

1. Projektet innehåller minst 4 st. endpoints (GET, POST, PUT & DELETE för en resurs) svar = Ja samtliga finns plus en get id
2. Samtliga endpoints skall kunna nås via en REST Client fil (.rest|.http) Svar = Ja Endpoins nås via
   book.rest filen
3. Datan som API:et hanterar sparas lokalt i serverfilen svar = ja
4. APIét ska svara med 404 om datan saknas. svar = ja
5. Git & GitHub har använts Svar = ja
6. Projektmappen innehåller en README.md fil - (läs ovan för mer info) svar = ja det är den vi befinner oss i nu
7. Uppgiften lämnas in i tid! svar = ja den lämnades in datum:

I detta projectet började jag med att lägga allt i en fil server filen och sen bröt jag ut det till flera filer.
Min önskan var som sagt att satsa på vg delen. Men då jag började i fel ende från början så räckte inte tiden till tillslut.

server filen = Det var i denna fil som jag la allt först
bookController = flyttade sedan arrayen med datan till bookController filen och skapade de olika metoderna.
bookrouter = här tar jag in metoderna i router mappen för att ha alla endpoints i en och samma fil
book.rest = i denna fil testar man de olika endpointsen

starta projectet med: npm run dev

Av Eva-i Nätynki Bodén
